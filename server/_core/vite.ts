import express, { type Express } from "express";
import fs from "fs";
import { type Server } from "http";
import { nanoid } from "nanoid";
import path from "path";
import { createServer as createViteServer } from "vite";
import viteConfig from "../../vite.config";
// compression middleware for gzip — dramatically reduces JS/CSS transfer size
// PageSpeed fix: reduces FCP/LCP by shrinking the 790KB JS bundle to ~230KB on wire
import compression from "compression";

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "../..",
        "client",
        "index.html"
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  const distPath =
    process.env.NODE_ENV === "development"
      ? path.resolve(import.meta.dirname, "../..", "dist", "public")
      : path.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    console.error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }

  // ── PageSpeed fix 1: Gzip compression ─────────────────────────────────────
  // Compresses all responses. The 790KB JS bundle becomes ~230KB on the wire.
  // This is the single biggest win for FCP/LCP on slow mobile connections.
  app.use(compression({
    // Only compress responses larger than 1KB (no point compressing tiny files)
    threshold: 1024,
    // Use maximum compression level for static assets
    level: 6,
  }));

  // ── PageSpeed fix 2: Aggressive cache headers for hashed assets ────────────
  // Vite fingerprints all JS/CSS/image files with a content hash in the filename
  // (e.g. index-CssfCW96.js). These can be cached for 1 year safely.
  // index.html must NOT be cached so users always get the latest entry point.
  app.use(
    "/assets",
    express.static(path.join(distPath, "assets"), {
      maxAge: "1y",           // 1 year cache for hashed assets
      immutable: true,        // tells CDN/browser the file never changes
      etag: false,            // not needed with immutable
      lastModified: false,    // not needed with immutable
    })
  );

  // ── PageSpeed fix 3: Cache hero-bg icons for 1 year ───────────────────────
  app.use(
    "/hero-bg",
    express.static(path.join(distPath, "hero-bg"), {
      maxAge: "1y",
      immutable: true,
    })
  );

  // ── PageSpeed fix 4: Short cache for index.html ────────────────────────────
  // index.html must be re-validated on every visit so users get new JS hashes
  app.use(express.static(distPath, {
    maxAge: 0,
    etag: true,
    lastModified: true,
    setHeaders(res, filePath) {
      // HTML files: no-cache (revalidate every time)
      if (filePath.endsWith(".html")) {
        res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
      }
    },
  }));

  // fall through to index.html if the file doesn't exist
  app.use("*", (_req, res) => {
    // Set no-cache on the HTML fallback too
    res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}

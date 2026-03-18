import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

const plugins = [react(), tailwindcss(), jsxLocPlugin(), vitePluginManusRuntime()];

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  publicDir: path.resolve(import.meta.dirname, "client", "public"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,

    // ── PageSpeed fix: Code splitting ────────────────────────────────────────
    // Split the single 790KB bundle into smaller chunks so the browser can
    // load only what it needs for the current page (Home) on first visit.
    // Other page chunks are loaded lazily when the user navigates to them.
    rollupOptions: {
      output: {
        manualChunks: {
          // React core — loaded immediately, small and critical
          "vendor-react": ["react", "react-dom"],

          // Router — small, needed for all pages
          "vendor-router": ["wouter"],

          // tRPC + React Query — needed for data fetching
          "vendor-trpc": [
            "@trpc/client",
            "@trpc/react-query",
            "@tanstack/react-query",
            "superjson",
          ],

          // Radix UI components — large, split from main bundle
          "vendor-radix": [
            "@radix-ui/react-accordion",
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-navigation-menu",
            "@radix-ui/react-popover",
            "@radix-ui/react-select",
            "@radix-ui/react-slider",
            "@radix-ui/react-tabs",
            "@radix-ui/react-tooltip",
            "@radix-ui/react-checkbox",
            "@radix-ui/react-label",
            "@radix-ui/react-slot",
          ],

          // Framer Motion — only used on non-home pages (ROI calculator, Compare)
          // Splitting it out means Home page doesn't pay this cost
          "vendor-framer": ["framer-motion"],

          // Recharts — only used on calculator/results pages
          "vendor-recharts": ["recharts"],

          // Date utilities
          "vendor-dates": ["date-fns"],

          // Lucide icons — large icon library
          "vendor-icons": ["lucide-react"],

          // Form handling
          "vendor-forms": ["react-hook-form", "@hookform/resolvers", "zod"],
        },
      },
    },

    // ── PageSpeed fix: Minification ──────────────────────────────────────────
    // Use esbuild (default) for fast, effective minification
    minify: "esbuild",

    // ── PageSpeed fix: CSS code splitting ───────────────────────────────────
    // Extract CSS per-chunk so only the CSS needed for the current page loads
    cssCodeSplit: true,

    // ── PageSpeed fix: Source maps off in production ─────────────────────────
    sourcemap: false,

    // Increase warning threshold since we're now splitting properly
    chunkSizeWarningLimit: 600,
  },
  server: {
    host: true,
    allowedHosts: [
      ".manuspre.computer",
      ".manus.computer",
      ".manus-asia.computer",
      ".manuscomputer.ai",
      ".manusvm.computer",
      "localhost",
      "127.0.0.1",
    ],
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});

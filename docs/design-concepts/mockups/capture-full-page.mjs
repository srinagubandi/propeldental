import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const root = "/home/ubuntu/propeldental-concepts/docs/design-concepts";
const jobs = [
  ["a", "desktop", 1600], ["a", "mobile", 430],
  ["b", "desktop", 1600], ["b", "mobile", 430],
  ["c", "desktop", 1600], ["c", "mobile", 430]
];

const delay = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

async function waitForDebugger(port) {
  const endpoint = `http://127.0.0.1:${port}/json/version`;
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const response = await fetch(endpoint);
      if (response.ok) return response.json();
    } catch {}
    await delay(100);
  }
  throw new Error(`Chrome debugger did not start on port ${port}`);
}

async function capture(key, device, width, port) {
  const chrome = spawn("chromium", [
    "--headless", "--no-sandbox", "--disable-gpu", "--hide-scrollbars",
    `--remote-debugging-port=${port}`, "about:blank"
  ], { stdio: "ignore" });

  try {
    const version = await waitForDebugger(port);
    const newTab = await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: "PUT" });
    const target = await newTab.json();
    const socket = new WebSocket(target.webSocketDebuggerUrl || version.webSocketDebuggerUrl);
    await new Promise((resolve, reject) => {
      socket.addEventListener("open", resolve, { once: true });
      socket.addEventListener("error", reject, { once: true });
    });

    let nextId = 1;
    const pending = new Map();
    socket.addEventListener("message", event => {
      const data = JSON.parse(event.data);
      if (data.id && pending.has(data.id)) {
        const { resolve, reject } = pending.get(data.id);
        pending.delete(data.id);
        data.error ? reject(new Error(data.error.message)) : resolve(data.result);
      }
    });
    const command = (method, params = {}) => new Promise((resolve, reject) => {
      const id = nextId++;
      pending.set(id, { resolve, reject });
      socket.send(JSON.stringify({ id, method, params }));
    });

    await command("Page.enable");
    await command("Emulation.setDeviceMetricsOverride", {
      width,
      height: device === "mobile" ? 844 : 960,
      deviceScaleFactor: 1,
      mobile: device === "mobile"
    });
    await command("Page.navigate", { url: `file://${root}/mockups/homepage-concept-${key}.html` });
    await delay(700);
    const screenshot = await command("Page.captureScreenshot", {
      format: "png",
      fromSurface: true,
      captureBeyondViewport: true
    });
    const output = `${root}/renders/homepage-concept-${key}-${device}-full.png`;
    mkdirSync(dirname(output), { recursive: true });
    writeFileSync(output, Buffer.from(screenshot.data, "base64"));
    socket.close();
    console.log(`${key}-${device}: ${output}`);
  } finally {
    chrome.kill("SIGTERM");
  }
}

for (let index = 0; index < jobs.length; index += 1) {
  const [key, device, width] = jobs[index];
  await capture(key, device, width, 9400 + index);
}

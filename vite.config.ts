// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Detect deploy target from CI env vars so Vercel / Netlify auto-pick the right nitro preset.
const preset = process.env.VERCEL
  ? "vercel"
  : process.env.NETLIFY
    ? "netlify"
    : undefined;

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
  },
  // Force-enable nitro with a host-specific preset when building on Vercel or Netlify.
  // Inside Lovable builds this override is ignored (Cloudflare preset is forced).
  ...(preset ? { nitro: { preset } } : {}),
});

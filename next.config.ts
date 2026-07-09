import type { NextConfig } from "next";
import { codeInspectorPlugin } from "code-inspector-plugin";

// code-inspector-plugin injects a `data-insp-path` attribute (path:line:column) onto every
// element in dev, which the Visual UI Editor reads as a Tier A source tag for exact resolution.
// Next 16 uses Turbopack for dev by default, so we register via turbopack.rules.
const nextConfig: NextConfig = {
  turbopack: {
    rules: codeInspectorPlugin({ bundler: "turbopack" }),
  },
};

export default nextConfig;

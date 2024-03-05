import { build } from "esbuild";

build({
  entryPoints: ["app.js"],
  bundle: true,
  outfile: "dist/bundle.js",
  minify: true,
  sourcemap: true,
}).catch(() => process.exit(1));

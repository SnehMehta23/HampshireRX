import { build } from "esbuild";

build({
  entryPoints: ["src/index.js"], // Your entry point file(s)
  bundle: true, // Bundle all dependencies
  outfile: "dist/bundle.js", // Output file
  minify: true, // Minify the output
  sourcemap: true, // Generate source maps
}).catch(() => process.exit(1));

import { defineConfig } from "vite";
import { extractFromPackage } from "npm-pkgbuild";

export default defineConfig(async ({ command, mode }) => {
  const res = extractFromPackage(
    {
      dir: new URL("./", import.meta.url).pathname,
      mode
    },
    process.env
  );
  const first = await res.next();
  const pkg = first.value;
  const properties = pkg.properties;
  const base = properties["http.path"];
  const production = mode === "production";

  process.env["VITE_NAME"] = properties.name;
  process.env["VITE_DESCRIPTION"] = properties.description;
  process.env["VITE_VERSION"] = properties.version;

  return {
    base,
    root: "src",
    server: { host: true },
    build: {
      outDir: "../build",
      target: "esnext",
      emptyOutDir: true,
      minify: production,
      sourcemap: true
    }
  };
});

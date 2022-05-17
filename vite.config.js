import { defineConfig } from "vite";
//import { extractFromPackage } from "npm-pkgbuild/src/module.mjs";

export default defineConfig(async ({ command, mode }) => {
  const { extractFromPackage } = await import(
    new URL("node_modules/npm-pkgbuild/src/module.mjs", import.meta.url)
  );
  const res = extractFromPackage({
    dir: new URL("./", import.meta.url).pathname
  });
  const first = await res.next();
  const base = first.value.properties["http.path"] + "/";

  return {
    //publicDir: "../../src",
    base,

    root: "src",
    build: {
      outDir: "../build",
      target: "esnext",
      emptyOutDir: true,
      minify: true,
      sourcemap: true
    },
    server: {
      host: true
    }
  };
});

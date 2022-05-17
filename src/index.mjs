import pacote from "pacote";

export async function npmDepAnalyser(name, version, categorizer) {
  const pkg = await pacote.manifest("pacote@^1");

  /*
    const result = await fetch(`https://registry.npmjs.org/${name}`);
    const pkg = await result.json();
    */
  console.log(pkg);
}

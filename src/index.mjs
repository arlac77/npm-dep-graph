import {manifest} from "pacote";

export async function npmDepAnalyser(name, version, categorizer) {
  const pkg = await manifest(`${name}@${version}`);
  console.log(pkg);
}

npmDepAnalyser("pacote","^1");

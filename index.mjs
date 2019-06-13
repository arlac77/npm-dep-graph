import fetch from "node-fetch";

export async function npmDepAnalyser(name,version, categorizer) {

    const result = await fetch(`https://registry.npmjs.org/${name}`);
    const pkg = await result.json();
    console.log(pkg);
}



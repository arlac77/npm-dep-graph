import { fetch } from 'fetch-h2';

export async function npmDepAnalyser(name,version, categorizer) {

    const result = await fetch(`https://registry.npmjs.org/${name}`);
    const pkg = await result.json();
    console.log(pkg);
}



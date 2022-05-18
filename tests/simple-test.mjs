import test from 'ava';
import { npmDepAnalyser } from '../src/index.mjs';


test('simple', async t => {
    await npmDepAnalyser('ava',undefined,(pj) => {
        
    });

    t.true(true);
});
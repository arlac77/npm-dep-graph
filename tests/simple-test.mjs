import test from 'ava';
import { npmDepAnalyser } from '../index.mjs';


test('simple', async t => {
    await npmDepAnalyser('ava',undefined,(pj) => {
        
    });

    t.true(true);
});
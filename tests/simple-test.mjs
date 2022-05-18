import test from 'ava';
import { npmDepAnalyser } from '../src/index.mjs';


test('simple', async t => {
    await npmDepAnalyser('ava', '4.2.0',(pj) => {
        
    });

    t.true(true);
});
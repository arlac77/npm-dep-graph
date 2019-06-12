import test from 'ava';
import { npmDepAnalyser } from '../index.mjs';


test('simple', t => {
    npmDepAnalyser('ava',undefined,(pj) => {
        
    });
});
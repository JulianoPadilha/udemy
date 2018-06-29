// import * as R from 'ramda';
import { union } from 'ramda';

import sum, { sub, mult, PI } from './utils';

const arr1 = [1,1,1,2,2,3,4,5,6,7];
const arr2 = [5,6,6,8,7,8,];

const arr3 = union(arr1, arr2);

console.log(arr3);

console.log(sum(3,3));
console.log(sub(4,3));
console.log(mult(2,3)); 
console.log(PI); 



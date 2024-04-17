/*HI professor, after the midterm I had that feeling that I 
submitted the homework when I actually didn't so sorry for the
lateness. Also i could only find 10 questions in total for the exercises
*/


//1
function makeTriangle(n){
    for(let x = 0; x < n; x++){ 
        let triangle = '';
        for (let y = 0; y<=x; y++){
            triangle+='#';
        } 
        console.log(triangle);
    } 
}
console.log('LOOPING A TRIANGLE');
makeTriangle(7);
console.log('\n');

//2
function fizzbuzz(n){
    for(let x = 1; x <= n; x++){
        if (x%3 == 0 && x%5 == 0){
            console.log('FizzBuzz');
        }
        else if (x%3 ==0){
            console.log('Fizz');
        }
        else if (x%5==0){
            console.log('Buzz');
        }
        else{
            console.log(x);
        }
    }
}
console.log("FIZZBUZZ");
fizzbuzz(15);
console.log('\n');

//3
function chess(n){
    for(let x = 0; x < n; x++){ 
        let row ='';
        for( let y = 0; y<n; y++){
            if ((x+y)%2 ==0){
                row +=' ';
            }
            else {
                row += '#';
            }
        }
        console.log(row);
    } 
}
console.log('CHESSBOARD');
chess(8);
console.log('\n');

//4
function minimum(n,m){
    let num = 0;
    if(n < m){
        num = n;
    }
    else if (m<n){
        num = m;
    }
    else{
        num = m;
    }
    console.log(num);
}
console.log('MINIMIM');
console.log('Numbers 2 and 4')
minimum(4,2);
console.log('\n');

//5
const isEven = function(x){
    if(x%2 == 0){
        return true;
    }
    return false;
}
console.log('RECURSION');
console.log(isEven(50));
console.log('\n');

//6
const countBs = function(x){
    count = 0;
    for (let i = 0; i< x.length; i++){
        if (x[i] == 'B'){
            count ++;
        }
    }
    return count;
}
console.log('BEAN COUNTING');
console.log(countBs('BOB'));
console.log('\n');

const countChar = function(x,y){
    count = 0;
    for (let i = 0; i< x.length; i++){
        if (x[i] == y){
            count ++;
        }
    }
    return count;
}
console.log('BEAN COUNTING 2');
console.log(countChar('kakkerlak', 'k'));
console.log('\n');

//7
const range = function(start, end){
    const array=[];
    
    for (let i = start; i<= end; i++){
        array.push(i)
    }
    return array;
}
const sum = function(array){
    let total = 0;
    
    for (let i = 0; i< array.length; i++){
        let holder = array[i];
        total += holder
    }
    return total;
}
console.log('THE SUM OF A RANGE');
console.log(range(1,10));
console.log(sum(range(1,10)));
console.log('\n');

//8
const reverseArray = function(array){
    let reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}
const reverseArrayInPlace = function(array){
    for (let i = 0; i < array.length / 2; i++) {
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
}
console.log('REVERSING AN ARRAY');
let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
console.log(myArray);
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
console.log('\n');

//9
const arrayToList = function(array){
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
}
const listToArray = function(list){
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}
function prepend(element, list) {
    return { value: element, rest: list };
}
function nth(list, index) {
    if (!list) return undefined;
    else if (index === 0) return list.value;
    else return nth(list.rest, index - 1);
}
console.log('A LIST');
console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log('\n');

//10

function deepEqual(a, b) {
    if (a === b) return true;
    
    if (typeof a == "object" && a != null &&
        typeof b == "object" && b != null) {
      let keysA = Object.keys(a);
      let keysB = Object.keys(b);
      
      if (keysA.length != keysB.length) return false;
      
      for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
          return false;
        }
      }
      
      return true;
    } else {
      return a === b;
    }
  }
  

  
console.log('DEEP COMPARISON');
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
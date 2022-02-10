/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * Eg: nums = [1,2,3,4,5]
 * Parameter(s):
 * nums: An array of numbers.
 * expected output
 * [3,4,9,8,15]
 */
function modifyArray(nums) {
  nums =[1,2,3,4,5];
  let newArr = nums.map(myFunc);
  console.log(newArr)
 // return newArr;
}
function myFunc(num) {
  if (num % 2 === 0) {
    num *= 2;
  } else {
    num *= 3;
  }
  return num;
}

function main() {
//   const n = +readLine();
//   const a = readLine().split(" ").map(Number);
const a =[1,2,3,4,5];
  // console.log(modifyArray([1,2,3,4,5]).toString().split(",").join(" "));
  console.log(modifyArray([1,2,3,4,5]));
}

/* 
map() creates a new array from calling a function for every array element.
map() calls a function once for each element in an array.
map() does not execute the function for empty elements.
 map() does not change the original array */

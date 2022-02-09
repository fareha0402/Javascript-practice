// Find second largest element
let arr = [2,3,6,6,5]
// First sort array in ascending /descending order
console.log(`ascending order ${arr.sort((a,b) => {return a-b})}`) 
console.log(`Descending order ${arr.sort((a,b) =>{ return b-a})}`)
// Remove duplicate values using Set
console.log('Set to remove duplicate values' + new Set(arr))
/* splice deletes/add new elements from array and returns
 An array containing the elements that were deleted. */
const fruits = ['apple','banana','mango','mango','orange']
// console.log(fruits.splice(0,3)) // returns array ['apple','banana','mango']
// so to empty an array 
console.log(fruits.splice(0,fruits.length)) // all elements removed then using sets we are adding elements without duplicate values
arr.splice(0,arr.length,...(new Set(arr)));
console.log(`Second Largest element in array ${arr[1]}`);
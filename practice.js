/* **** SORTING Sort an array  using sort method in Js **** */
let arr= [1,33,55,30,4,4,83]
// o/p [1,4,30,33,55,83]

let sorted = arr.sort(myFun);
function myFun(a,b){
    return a-b;
}
console.log(sorted)


/*  ******** DUPLICATE REMOVAL : ways to  Remove duplicate elements from arr ****** */

 sorted.splice(0,sorted.length, ...new Set(sorted))
 console.log(sorted)
 // using filter method
 let fruits= ['apple','mango','banana','apple','lemon','banana','papaya']
 let filterArr= fruits.filter((ele,index) =>{
     return fruits.indexOf(ele) === index
 })
 console.log(filterArr)

 // *** using reduce method **
 let unique = fruits.reduce(reduceCallback,[])
 function reduceCallback(acc,curr){
     return acc.includes(curr) ? acc : [...acc,curr]
 }
 console.log(unique)

 // **** adding unique method to array PROTOTYPE ****
 let colors = ['red','green','blue','white','orange','red','orange']
 Array.prototype.unique = function(){
      return this.reduce((acc,curr) => acc.includes(curr)? acc: [...acc,curr],[])
 }
 console.log(colors.unique());

 // ****** create a method in Number PROTOTYPE to add 3 numbers ****

 Object.prototype.add = function(...val){
     let sum = 0;
     let arr = [...val];
     return arr.reduce((acc,curr) => acc+curr ,0)
 }
 console.log(Math.add(8,9,-8))
console.log(Math)


/* ******  SORTING: Sort an array without using sort method in Js and in single loop */
// let arr= [1,33,55,30,4,4,83]
// o/p [1,4,30,33,55,83]
// let sortList = []
for(i=0; i< arr.length-1;i++){
   let a = arr[i];
   let b = arr[i+1]
    if(a>b){
        [a,b]=[b,a]
    }
  //  arr[i+1] > temp ? sortList.push(temp): sortList.push(arr[i+1])
} 
console.log(arr)

/* Find the 2nd largest number in arr with duplicate values*/
 let duplicateArr= [1,33,33,55,30,4,4,83,22,1]

 console.log('Remove duplicates'+ removeDuplicates().sort(compareFunc));
 function removeDuplicates(){
     duplicateArr.splice(0,duplicateArr.length, ... new Set(duplicateArr))
     return duplicateArr;
 }
function compareFunc(a,b){ 
    return a-b;
}
let secondLargestNum = removeDuplicates().sort(compareFunc)
console.log(secondLargestNum.at(-2));


let obj={
    a:'hello',
    b:'world',
    make:function() {
        console.log(this.a +this.b);
    }
}
obj.make();
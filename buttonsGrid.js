// let btn5= document.getElementById('btn5');
let [btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9 ]= document.getElementsByTagName('button');
let ids = [1,2,3,6,9,8,7,4];
let nums = [1,2,3,6,9,8,7,4]; // clockwise;
btn5.addEventListener('click',myFunc);
function myFunc(){
    nums.unshift(nums.pop());
    for(let i= 0;i<8;i++){
        document.getElementById('btn'+ids[i]).innerHTML = nums[i];
    }
}
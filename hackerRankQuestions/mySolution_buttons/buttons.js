let btnEle = document.getElementById('btn');
let btnClicked =0;
console.log(btnEle);
btnEle.addEventListener('click',increment);
function increment(e){
    btnClicked=btnClicked+1
    btnEle.innerHTML= btnClicked.toString();
}

btnEle = document.getElementById('showBtn');
closeEle = document.getElementById('closeBtn');

btnEle.addEventListener('click', openModal)
function openModal(){
    modalContainer.style.display = 'block';
}
closeEle.addEventListener('click',closeModal);
function closeModal(){
    modalContainer.style.display = 'none';
}
window.addEventListener('click',outsideClick)
function outsideClick(event){
if(event.target.id ==='modalContainer'){
    modalContainer.style.display = 'none';
}
}
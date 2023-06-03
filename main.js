
const newBookButton = document.querySelector("#newBook");
const popUp = document.querySelector("#popupForm");
newBookButton.addEventListener("click",function(){
   if (popUp.style.display === 'none') {
    popUp.style.display = 'block';
   } else {
    popUp.style.display = 'none';
   }
});
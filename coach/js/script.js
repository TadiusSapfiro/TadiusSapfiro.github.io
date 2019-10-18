var modalShowBtn = document.querySelector(".autor__button");
var modal = document.querySelector(".modal-wrapper");
var modalClose = document.querySelector(".modal__close");




modalShowBtn.addEventListener("click", function(evt){
  evt.preventDefault();
  modal.classList.add("modal-wrapper--open")
});



modalClose.addEventListener("click", function(evt){
  evt.preventDefault();
  if(modal.classList.contains("modal-wrapper--open")){
    modal.classList.remove("modal-wrapper--open");
  }
});



window.addEventListener("keydown", function(evt){
  if(evt.keyCode === 27){
    if(modal.classList.contains("modal-wrapper--open")){
    modal.classList.remove("modal-wrapper--open");
    }
  }
});







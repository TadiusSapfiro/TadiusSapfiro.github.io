var header = document.querySelector(".header__wrapper");
var mainNavBtn = document.querySelector(".main-nav__btn");
var modal= document.querySelector(".modal");
var modalShowBtn1 = document.querySelector(".price-list__btn--1");
var modalShowBtn2 = document.querySelector(".price-list__btn--2");
var modalShowBtn3= document.querySelector(".price-list__btn--3");
var modalClose = document.querySelector(".modal__close");
var modalSubmit = document.querySelector(".modal__submit");



mainNavBtn.addEventListener("click", function(evt){
  evt.preventDefault();
  if(header.classList.contains("header__wrapper-menu")){
    header.classList.remove("header__wrapper-menu");
    mainNavBtn.classList.remove("burger--open");
  }else{
   	header.classList.add("header__wrapper-menu");
  	mainNavBtn.classList.add("burger--open");
  }
});

modalShowBtn1.addEventListener("click", function(evt){
  evt.preventDefault();
  modal.classList.add("modal--open");
});

modalShowBtn2.addEventListener("click", function(evt){
  evt.preventDefault();
  modal.classList.add("modal--open");
});

modalShowBtn3.addEventListener("click", function(evt){
  evt.preventDefault();
  modal.classList.add("modal--open");
});

modalClose.addEventListener("click", function(evt){
  evt.preventDefault();
  if(modal.classList.contains("modal--open")){
    modal.classList.remove("modal--open");
  }
});

modalSubmit.addEventListener("click", function(evt){
  evt.preventDefault();
  if(modal.classList.contains("modal--open")){
    modal.classList.remove("modal--open");
  }
});

window.addEventListener("keydown", function(evt){
  if(evt.keyCode === 27){
    if(modal.classList.contains("modal--open")){
    modal.classList.remove("modal--open");
    }
  }
});
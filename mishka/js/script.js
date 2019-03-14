var mainNav = document.querySelector(".main-nav");
var mainNavBtn = document.querySelector(".main-nav__toggle");
var search = document.querySelector(".search");
var searchInput = document.querySelector(".search__input");
var searchClose = document.querySelector(".search__close");
var searchIcon = document.querySelector(".search__icon");
var modalShowBtn = document.querySelector(".modal-show-btn");
var goodsPrice = document.querySelector(".goods__price");
var modal = document.querySelector(".modal-wrapper");
var modalClose = document.querySelector(".modal-cart__close");


mainNav.classList.remove("main-nav--nojs");

mainNavBtn.addEventListener("click", function(evt){
evt.preventDefault();

if(mainNav.classList.contains("main-nav--closed")){
  mainNav.classList.remove("main-nav--closed");
  mainNav.classList.add("main-nav--opened");
  }else{
    mainNav.classList.remove("main-nav--opened");
    mainNav.classList.add("main-nav--closed");
  }
});


search.classList.remove("search--nojs");


searchIcon.addEventListener("click", function(evt){
evt.preventDefault();

if(search.classList.contains("search--hide")){
  search.classList.remove("search--hide");
  search.classList.add("search--open");
  searchInput.focus();
  }
});


searchClose.addEventListener("click", function(evt){
evt.preventDefault();

  if(search.classList.contains("search--open")){
    search.classList.remove("search--open");
    search.classList.add("search--hide");
  }
});


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







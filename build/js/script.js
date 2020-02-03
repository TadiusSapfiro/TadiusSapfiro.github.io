"use strict"

var burger = document.querySelector(".header__burger");
var header = document.querySelector(".header");

burger.addEventListener("click", function(evt){
	evt.preventDefault();
  header.classList.toggle("header--open");
});
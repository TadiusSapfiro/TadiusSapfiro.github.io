"use strict";

//burger-menu
//
//
let burger = document.querySelector(".header__burger");
let header = document.querySelector(".header");
let item = document.querySelector(".header__item");


burger.addEventListener("click", function(evt){
  evt.preventDefault();
  header.classList.toggle("header--open");
});


// range-slider
//
//
let slider = document.querySelector('.range__slider');
let thumb = document.querySelector('.range__thumb');
thumb.addEventListener('mousedown', dragAndDrop);
function dragAndDrop(event) {
  event.preventDefault();

  let shiftX = event.clientX - thumb.getBoundingClientRect().left;

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);

  function onMouseMove(moveE) {
    moveE.preventDefault();
    let newLeft = moveE.clientX - shiftX - slider.getBoundingClientRect().left;

    if (newLeft < 0) {
      newLeft = 0;
    }
    let rightEdge = slider.offsetWidth - thumb.offsetWidth;
    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    thumb.style.left = newLeft + 'px';

    let widthUnfilled = ((slider.offsetWidth - 30) - newLeft) / (slider.offsetWidth - 30) * 100;

    document.querySelector(".range__unfilled").style.width = widthUnfilled + "%";
    console.log(widthUnfilled)
  }

  function onMouseUp(upE) {
    upE.preventDefault();
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('mousemove', onMouseMove);
  }


}


var headerNav = document.querySelector(".header");
var mainNavBtn = document.querySelector(".header__burger");



var championsItem1 = document.querySelector(".champions__item--1");
var championsItem2 = document.querySelector(".champions__item--2");
var championsItem3 = document.querySelector(".champions__item--3");
var championsItem4 = document.querySelector(".champions__item--4");
var championsItem5 = document.querySelector(".champions__item--5");
var championsItem6= document.querySelector(".champions__item--6");
var championsItem7 = document.querySelector(".champions__item--7");
var championsItem8 = document.querySelector(".champions__item--8");
var championsItem9 = document.querySelector(".champions__item--9");
var championsItem10 = document.querySelector(".champions__item--10");

var championsOpen1 = document.querySelector(".champions__open-1");
var championsOpen2 = document.querySelector(".champions__open-2");
var championsOpen3 = document.querySelector(".champions__open-3");
var championsOpen4 = document.querySelector(".champions__open-4");
var championsOpen5 = document.querySelector(".champions__open-5");
var championsOpen6 = document.querySelector(".champions__open-6");
var championsOpen7 = document.querySelector(".champions__open-7");
var championsOpen8 = document.querySelector(".champions__open-8");
var championsOpen9 = document.querySelector(".champions__open-9");
var championsOpen10 = document.querySelector(".champions__open-10");

championsOpen1.addEventListener("click", function(evt){
evt.preventDefault();

if(championsItem1.classList.contains("champions__item--open")){
  championsItem1.classList.remove("champions__item--open");
  }else{
    championsItem1.classList.add("champions__item--open");
  }
});

championsOpen2.addEventListener("click", function(evt){
evt.preventDefault();

if(championsItem2.classList.contains("champions__item--open")){
  championsItem2.classList.remove("champions__item--open");
  }else{
    championsItem2.classList.add("champions__item--open");
  }
});

championsOpen3.addEventListener("click", function(evt){
evt.preventDefault();

if(championsItem3.classList.contains("champions__item--open")){
  championsItem3.classList.remove("champions__item--open");
  }else{
    championsItem3.classList.add("champions__item--open");
  }
});

championsOpen4.addEventListener("click", function(evt){
evt.preventDefault();

if(championsItem4.classList.contains("champions__item--open")){
  championsItem4.classList.remove("champions__item--open");
  }else{
    championsItem4.classList.add("champions__item--open");
  }
});

championsOpen5.addEventListener("click", function(evt){
evt.preventDefault();

if(championsItem5.classList.contains("champions__item--open")){
  championsItem5.classList.remove("champions__item--open");
  }else{
    championsItem5.classList.add("champions__item--open");
  }
});

championsOpen6.addEventListener("click", function(evt){
evt.preventDefault();

if(championsItem6.classList.contains("champions__item--open")){
  championsItem6.classList.remove("champions__item--open");
  }else{
    championsItem6.classList.add("champions__item--open");
  }
});

championsOpen7.addEventListener("click", function(evt){
evt.preventDefault();

if(championsItem7.classList.contains("champions__item--open")){
  championsItem7.classList.remove("champions__item--open");
  }else{
    championsItem7.classList.add("champions__item--open");
  }
});

championsOpen8.addEventListener("click", function(evt){
evt.preventDefault();

if(championsItem8.classList.contains("champions__item--open")){
  championsItem8.classList.remove("champions__item--open");
  }else{
    championsItem8.classList.add("champions__item--open");
  }
});

championsOpen9.addEventListener("click", function(evt){
evt.preventDefault();

if(championsItem9.classList.contains("champions__item--open")){
  championsItem9.classList.remove("champions__item--open");
  }else{
    championsItem9.classList.add("champions__item--open");
  }
});

championsOpen10.addEventListener("click", function(evt){
evt.preventDefault();

if(championsItem10.classList.contains("champions__item--open")){
  championsItem10.classList.remove("champions__item--open");
  }else{
    championsItem10.classList.add("champions__item--open");
  }
});


// var goodsPrice = document.querySelector(".goods__price");




// mainNavBtn.addEventListener("click", function(evt){
// evt.preventDefault();

// if(headerNav.classList.contains("header--closed")){
//   headerNav.classList.remove("header--closed");
//   }else{
//     headerNav.classList.add("header--closed");
//   }
// });

var balanceBtn = document.querySelector(".header__management-item--balance");
var balance = document.querySelector(".header__management-item--balance");

var mainNavBtn = document.querySelector(".header__burger");

var body = document.querySelector(".body");

var mining = document.querySelector(".header__management-item--mining");

'use strict';

// баланс модалка

var hamburger = document.querySelector('.header__management-item--balance');
var menu = document.querySelector('.header__balance-modal');

var toggleMenu = function toggleMenu() {
  menu.classList.toggle('active');
};

hamburger.addEventListener('click', function(e) {
  e.stopPropagation();
  menu1.classList.remove('active1');
  toggleMenu();
});

document.addEventListener('click', function (e) {
  var target = e.target;
  var its_menu = target == menu || menu.contains(target);
  var its_hamburger = target == hamburger;
  var menu_is_active = menu.classList.contains('active');

  if (!its_menu && !its_hamburger && menu_is_active) {
    toggleMenu();
  }
});

// майнинг модалка

var hamburger1 = document.querySelector('.header__management-item--mining');
var menu1 = document.querySelector('.header__mine-modal');

var toggleMenu1 = function toggleMenu1() {
  menu1.classList.toggle('active1');
};

hamburger1.addEventListener('click', function(e) {
  e.stopPropagation();
  menu.classList.remove('active');
  toggleMenu1();
});

document.addEventListener('click', function (e) {
  var target1 = e.target;
  var its_menu1 = target1 == menu1 || menu1.contains(target1);
  var its_hamburger1 = target1 == hamburger1;
  var menu_is_active1 = menu1.classList.contains('active1');

  if (!its_menu1 && !its_hamburger1 && menu_is_active1) {
    toggleMenu1();
  }
});


// balanceBtn.addEventListener("click", function(evt){
// evt.preventDefault();

// if(balance.classList.contains("header__management-item--balance--close")){
//   balance.classList.remove("header__management-item--balance--close");
//   mining.classList.add("header__management-item--mining--close");
//   }else{
//     balance.classList.add("header__management-item--balance--close");
//   }
// });


// mining.addEventListener("click", function(evt){
// evt.preventDefault();

// if(mining.classList.contains("header__management-item--mining--close")){
//   mining.classList.remove("header__management-item--mining--close");
//    balance.classList.add("header__management-item--balance--close");
//   }else{
//     mining.classList.add("header__management-item--mining--close");
//   }
// });




// modal-refill

$(function(){
$('.viewModalRefill').modal({
target : '#modal-refill',
animation : 'top',
speed:250,
position : 'center'
});
});

$('.modal__close').click(function(){
$('#modal-refill').modal('close');
});

// modal-take

$(function(){
$('.viewModalTake').modal({
target : '#modal-take',
animation : 'top',
speed:250,
position : 'center'
});
});

$('.modal__close').click(function(){
$('#modal-take').modal('close');
});

// modal-friend

$(function(){
$('.viewModalFriend').modal({
target : '#modal-friend',
animation : 'top',
speed:250,
position : 'center'
});
});

$('.modal__close').click(function(){
$('#modal-friend').modal('close');
});

// modal-faq

$(function(){
$('.viewModalFaq').modal({
target : '#modal-faq',
animation : 'top',
speed:250,
position : 'center'
});
});

$('.modal__close').click(function(){
$('#modal-faq').modal('close');
});

// modal-win

$(function(){
$('.viewModalWin').modal({
target : '#modal-win',
animation : 'top',
speed:250,
position : 'center'
});
});

$('.modal__close').click(function(){
$('#modal-win').modal('close');
});


// modal-lang

$(function(){
$('.viewModalLang').modal({
target : '#modal-lang',
animation : 'top',
speed:250,
position : 'center'
});
});

$('.modal__close').click(function(){
$('#modal-lang').modal('close');
});

// modal-login

$(function(){
$('.viewModalLogin').modal({
target : '#modal-login',
animation : 'top',
speed:250,
position : 'center'
});
});

$('.modal__close').click(function(){
$('#modal-login').modal('close');
});


// modalCloseLogin.addEventListener("click", function(evt){
//   evt.preventDefault();
//   if(modalLogin.classList.contains("modal__wrapper--open")){
//     modalLogin.classList.remove("modal__wrapper--open");
//   }
// });



// window.addEventListener("keydown", function(evt){
//   if(evt.keyCode === 27){
//     if(modalLogin.classList.contains("modal-wrapper--open")){
//     modalLogin.classList.remove("modal-wrapper--open");
//     }
//   }
// });


// modal-wallet

$(function(){
$('.viewModalSignIn').modal({
target : '#modal-sign-in',
animation : 'top',
speed:250,
position : 'center'
});
});

$('.modal__close').click(function(){
$('#modal-sign-in').modal('close');
});

// modal-history

$(function(){
$('.viewModalHistory').modal({
target : '#modal-history',
animation : 'top',
speed:250,
position : 'center'
});
});

$('.modal__close').click(function(){
$('#modal-history').modal('close');
});

// Копирование ссылки

function copytext(el) {
    var $tmp = $("<input>");
    $("body").append($tmp);
    $tmp.val($(el).text()).select();
    document.execCommand("copy");
    $tmp.remove();
} 




var faqItem1 = document.querySelector(".modal-faq__item-1");
var faqItem2 = document.querySelector(".modal-faq__item-2");
var faqItem3 = document.querySelector(".modal-faq__item-3");
var faqItem4 = document.querySelector(".modal-faq__item-4");
var faqItem5 = document.querySelector(".modal-faq__item-5");
var faqItem6 = document.querySelector(".modal-faq__item-6");
var faqItem7 = document.querySelector(".modal-faq__item-7");
var faqItem8 = document.querySelector(".modal-faq__item-8");
var faqItem9 = document.querySelector(".modal-faq__item-9");
var faqItem10 = document.querySelector(".modal-faq__item-10");

faqItem1.addEventListener("click", function(evt){
evt.preventDefault();

if(faqItem1.classList.contains("modal-faq__item--open")){
  faqItem1.classList.remove("modal-faq__item--open");
  }else{
    faqItem1.classList.add("modal-faq__item--open");
  }
});

faqItem2.addEventListener("click", function(evt){
evt.preventDefault();

if(faqItem2.classList.contains("modal-faq__item--open")){
  faqItem2.classList.remove("modal-faq__item--open");
  }else{
    faqItem2.classList.add("modal-faq__item--open");
  }
});

faqItem3.addEventListener("click", function(evt){
evt.preventDefault();

if(faqItem3.classList.contains("modal-faq__item--open")){
  faqItem3.classList.remove("modal-faq__item--open");
  }else{
    faqItem3.classList.add("modal-faq__item--open");
  }
});

faqItem4.addEventListener("click", function(evt){
evt.preventDefault();

if(faqItem4.classList.contains("modal-faq__item--open")){
  faqItem4.classList.remove("modal-faq__item--open");
  }else{
    faqItem4.classList.add("modal-faq__item--open");
  }
});

faqItem5.addEventListener("click", function(evt){
evt.preventDefault();

if(faqItem5.classList.contains("modal-faq__item--open")){
  faqItem5.classList.remove("modal-faq__item--open");
  }else{
    faqItem5.classList.add("modal-faq__item--open");
  }
});

faqItem6.addEventListener("click", function(evt){
evt.preventDefault();

if(faqItem6.classList.contains("modal-faq__item--open")){
  faqItem6.classList.remove("modal-faq__item--open");
  }else{
    faqItem6.classList.add("modal-faq__item--open");
  }
});

faqItem7.addEventListener("click", function(evt){
evt.preventDefault();

if(faqItem7.classList.contains("modal-faq__item--open")){
  faqItem7.classList.remove("modal-faq__item--open");
  }else{
    faqItem7.classList.add("modal-faq__item--open");
  }
});

faqItem8.addEventListener("click", function(evt){
evt.preventDefault();

if(faqItem8.classList.contains("modal-faq__item--open")){
  faqItem8.classList.remove("modal-faq__item--open");
  }else{
    faqItem8.classList.add("modal-faq__item--open");
  }
});

faqItem9.addEventListener("click", function(evt){
evt.preventDefault();

if(faqItem9.classList.contains("modal-faq__item--open")){
  faqItem9.classList.remove("modal-faq__item--open");
  }else{
    faqItem9.classList.add("modal-faq__item--open");
  }
});

faqItem10.addEventListener("click", function(evt){
evt.preventDefault();

if(faqItem10.classList.contains("modal-faq__item--open")){
  faqItem10.classList.remove("modal-faq__item--open");
  }else{
    faqItem10.classList.add("modal-faq__item--open");
  }
});

// сворачивание правой колонки

var statsItem = document.querySelector(".tabs-stats");
var statsHide = document.querySelector(".tabs-stats__nav-item--hide");
statsHide.addEventListener("click", function(evt){
evt.preventDefault();

if(statsItem.classList.contains("tabs-stats--open")){
  statsItem.classList.remove("tabs-stats--open");
  }else{
    statsItem.classList.add("tabs-stats--open");
  }
});


$(document).ready(function() {
        $('nav').slideAndSwipe();
    });
$( document ).ready(function() {

$(function() {
  var tab = $('#tabs-market .tabs-market__items > div'); 
  tab.hide().filter(':first').show(); 
  
  $('#tabs-market .tabs-market__nav a').click(function(){
    tab.hide(); 
    tab.filter(this.hash).show(); 
    $('#tabs-market .tabs-market__nav a').removeClass('active');
    $(this).addClass('active');
    return false;
  }).filter(':first').click();

  
});

});

$( document ).ready(function() {

  (function($) {
    $(function() {

      $('select').styler();

    });
    })(jQuery);

});

$( document ).ready(function() {

  $('.market').owlCarousel({


    loop:false,
    margin:13,
    nav:true,
    navContainer: ".tabs-market__slider-nav",
    autoWidth:true,
    dots:false,
    responsive:{
        0:{
            items:2
        },
        768:{
          margin:6,
        },
        1440:{
          margin:6,
        }
    }
  })

});

$( document ).ready(function() {

  $('.owl-carousel-1').owlCarousel({


    loop:true,
    center:true,
    mouseDrag:false,
    touchDrag:false,
    margin:8,
    nav:false,
    navContainer: ".roulette__btn-wrapper",
    autoWidth:true,
    dots:false,
    responsive:{
        0:{
            items:2
        },
        768:{
          margin:6,
        },
        1440:{
          margin:6,
        }
    }
  })

});

$( document ).ready(function() {

$(function() {
  var tab = $('#tabs .tabs-stats__items > div'); 
  tab.hide().filter(':first').show(); 
  
  $('#tabs .tabs-stats__nav a').click(function(){
    tab.hide(); 
    tab.filter(this.hash).show(); 
    $('#tabs .tabs-stats__nav a').removeClass('active');
    $(this).addClass('active');
    return false;
  }).filter(':first').click();

  
});

});

$( document ).ready(function() {

(function($) {
    $(function() {

      $('select').styler();

    });
    })(jQuery);

});

$( document ).ready(function() {

  $('.owl-carousel-1').owlCarousel({


    loop:true,
    center:true,
    mouseDrag:false,
    touchDrag:false,
    margin:8,
    nav:false,
    navContainer: ".roulette__btn-wrapper",
    autoWidth:true,
    dots:false,
    responsive:{
        0:{
            items:2
        },
        768:{
          margin:6,
        },
        1440:{
          margin:6,
        }
    }
  })

});


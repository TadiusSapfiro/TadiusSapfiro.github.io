var mainNav = document.querySelector(".main-nav");
    var mainNavBtn = document.querySelector(".main-nav__btn");

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

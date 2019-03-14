
var write = document.querySelector(".contacts .button");
var modalWrite = document.querySelector(".modal-write");
var writeClose = document.querySelector(".close-btn");

var map = document.querySelector(".map");
var modalMap = document.querySelector(".modal-map");
var mapClose = document.querySelector(".modal-map .close-btn");

var loginInput = document.querySelector("[name=login]");
var emailInput = document.querySelector("[name=email]");

var form =  modalWrite.querySelector("form");

var storageLogin = localStorage.getItem("loginInput");
var storageEmail = localStorage.getItem("emailInput");

var catalogList = document.querySelector(".catalog-list");



catalogList.addEventListener("mouseover", function(evt){
  evt.preventDefault();
  catalogList.classList.add(".catalogList-animation");
});


write.addEventListener("click", function(evt){
	evt.preventDefault();
	modalWrite.classList.add("modal-show");
	
	if(storageLogin){
		loginInput.value = storageLogin;
    emailInput.value = storageEmail;
		emailInput.focus();
	}else{
		loginInput.focus();
	}
});

writeClose.addEventListener("click", function(evt){
	evt.preventDefault();
	modalWrite.classList.remove("modal-show");
	modalWrite.classList.remove("modal-error");
});




form.addEventListener("submit", function(evt){
	if(!loginInput.value || !emailInput.value){	
		evt.preventDefault();
		if (modalWrite.classList.contains("modal-error")){
			modalWrite.classList.remove("modal-error");
			modalWrite.classList.add("modal-error");
		}	else{
			modalWrite.classList.add("modal-error");
		}
		
		
	}else{
		localStorage.setItem("loginInput", loginInput.value);
	}
});



window.addEventListener("keydown", function(evt){
	if(evt.keyCode === 27){
		if(modalWrite.classList.contains("modal-show")){
			modalWrite.classList.remove("modal-show")
		}
	}
});

window.addEventListener("keydown", function(evt){
	if(evt.keyCode === 27){
		if(modalMap.classList.contains("modal-show")){
			modalMap.classList.remove("modal-show");
			modalWrite.classList.remove("modal-error");
		}
	}
});



map.addEventListener("click", function(evt){
  evt.preventDefault();
  modalMap.classList.add("modal-show")
});

mapClose.addEventListener("click", function(evt){
  evt.preventDefault();
  modalMap.classList.remove("modal-show")
});

(()=>{"use strict";const e=document.querySelector(".burger"),t=document.querySelector(".nav"),s=document.body;function n(){e.classList.toggle("burger--active"),t.classList.toggle("nav--visible"),s.classList.toggle("disable-scroll")}document.addEventListener("click",(s=>{t.contains(s.target)||e.contains(s.target)||!t.classList.contains("nav--visible")||n()})),document.addEventListener("keydown",(e=>{"Escape"===e.key&&t.classList.contains("nav--visible")&&n()})),e.addEventListener("click",n)})();
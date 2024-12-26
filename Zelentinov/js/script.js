"use strict";

const workItemList = document.querySelectorAll(".work__item");
const workContent = document.querySelector(".work__content");
const workShowList = document.querySelectorAll(".work__show");

workItemList.forEach(
  (item, number) => {
    item.addEventListener("click", () => {
      workContent.classList.add("visible");
      const currentWorkShow = workShowList[number]

      // if work is already open - close it
      const openShow = document.querySelector(".work__show.visible");
      if(openShow && openShow !== currentWorkShow){
        openShow.classList.remove("visible");
      }

      currentWorkShow.classList.add("visible");
    })
  }
);
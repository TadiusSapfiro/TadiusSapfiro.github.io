"use strict";
const workItemList = document.querySelectorAll(".work__item");
const workContent = document.querySelector(".work__content");
const workShowList = document.querySelectorAll(".work__show");
let openShow = document.querySelector(".work__show.visible");

const isMobile = () => window.innerWidth < 768;

const toggleWorkShow = (index) => {
  if (index < 0 || index >= workShowList.length) return;
  
  workContent.classList.add("visible");
  const currentWorkShow = workShowList[index];
  const clickedItem = workItemList[index];

  // Close previously open work
  if (openShow && openShow !== currentWorkShow) {
    openShow.classList.remove("visible");
  }

  // Toggle current work
  currentWorkShow.classList.add("visible");
  openShow = currentWorkShow;

  // Handle mobile positioning
  if (isMobile()) {
    // Remove mobile position from all items
    workItemList.forEach(item => {
      const content = item.nextElementSibling;
      if (content && content.classList.contains('work__content')) {
        content.classList.remove('mobile-position');
      }
    });

    // Insert work content after clicked item
    const nextItem = clickedItem.nextElementSibling;
    if (nextItem !== workContent) {
      clickedItem.insertAdjacentElement('afterend', workContent);
    }
    workContent.classList.add('mobile-position');
  }
};

// Add click handlers
workItemList.forEach((item, index) => {
  item.addEventListener("click", () => toggleWorkShow(index));
});

// Add resize listener to handle layout changes
window.addEventListener('resize', () => {
  if (!isMobile()) {
    workContent.classList.remove('mobile-position');
    // Reset content position to original container
    document.querySelector('.work__container').appendChild(workContent);
  }
});

// write code to close work content by pressing .work__content-close  
const workContentClose = document.querySelector(".work__close");
workContentClose.addEventListener('click', () => {
  // Hide the work content container
  workContent.classList.remove('visible');
  
  // Hide currently open work show if exists
  if (openShow) {
    openShow.classList.remove('visible');
    openShow = null;
  }
});
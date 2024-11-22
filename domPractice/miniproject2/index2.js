// script.js

document.addEventListener("DOMContentLoaded", () => {
    const availableList = document.getElementById("available-list");
    const selectedList = document.getElementById("selected-list");
  
    const moveAllRight = document.getElementById("move-all-right");
    const moveSelectedRight = document.getElementById("move-selected-right");
    const moveSelectedLeft = document.getElementById("move-selected-left");
    const moveAllLeft = document.getElementById("move-all-left");
  
    // Move all items from available to selected
    moveAllRight.addEventListener("click", () => {
      moveAll(availableList, selectedList);
    });
  
    // Move all items from selected to available
    moveAllLeft.addEventListener("click", () => {
      moveAll(selectedList, availableList);
    });
  
    // Move selected items from available to selected
    moveSelectedRight.addEventListener("click", () => {
      moveSelected(availableList, selectedList);
    });
  
    // Move selected items from selected to available
    moveSelectedLeft.addEventListener("click", () => {
      moveSelected(selectedList, availableList);
    });
  
    function moveAll(sourceList, targetList) {
      while (sourceList.firstChild) {
        targetList.appendChild(sourceList.firstChild);
      }
    }
  
    function moveSelected(sourceList, targetList) {
      const items = Array.from(sourceList.querySelectorAll("li input:checked")).map(
        (input) => input.parentElement
      );
  
      items.forEach((item) => {
        targetList.appendChild(item);
      });
    }
  });
  
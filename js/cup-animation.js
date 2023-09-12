let drinkBtn = document.querySelector(".drink-from-cup-btn");
let isDrinkActive = false;

let drinkImg = document.querySelector(".drink-item");

let plateAnimationEl = document.querySelector(".plate");
let cupAnimationEl = document.querySelector(".cup");


drinkBtn.addEventListener("click", () => {

  if (isDrinkActive) {
    console.log("Нет кофе");
    // drinkImg.classList.remove("drink-item-moving");
    // drinkImg.classList.add("drink-item");
    plateAnimationEl.classList.remove("plate_visible");
    plateAnimationEl.classList.add("plate_fade");
    cupAnimationEl.classList.remove("cup_visible");
    cupAnimationEl.classList.add("cup_fade");
    drinkBtn.innerHTML = "Выпить кофе";
    isDrinkActive = false;    
  } else {
    console.log("Есть кофе");
    // drinkImg.classList.remove("drink-item");
    // drinkImg.classList.add("drink-item-moving");
    plateAnimationEl.classList.remove("plate_fade");
    plateAnimationEl.classList.add("plate_visible");
    cupAnimationEl.classList.remove("cup_fade");
    cupAnimationEl.classList.add("cup_visible");
    drinkBtn.innerHTML = "Завершить кофепитие";
    isDrinkActive = true;
  }
  
  console.log(isDrinkActive);
  
});



let drinkBtn = document.querySelector(".drink-from-cup-btn");
let isDrinkActive = false;

let drinkImg = document.querySelector(".drink-item");

let plateAnimationEl = document.querySelector(".plate");
let cupAnimationEl = document.querySelector(".cup");


drinkBtn.addEventListener("click", () => {

  if (isDrinkActive) {
    plateAnimationEl.classList.remove("plate_visible");
    plateAnimationEl.classList.add("plate_fade");
    cupAnimationEl.classList.remove("cup_visible");
    cupAnimationEl.classList.add("cup_fade");
    drinkBtn.innerHTML = "Выпить кофе";
    isDrinkActive = false;    
  } else {
    plateAnimationEl.classList.remove("plate_fade");
    plateAnimationEl.classList.add("plate_visible");
    cupAnimationEl.classList.remove("cup_fade");
    cupAnimationEl.classList.add("cup_visible");
    drinkBtn.innerHTML = "Завершить кофепитие";
    isDrinkActive = true;
  }
  
  console.log(isDrinkActive);
  
});



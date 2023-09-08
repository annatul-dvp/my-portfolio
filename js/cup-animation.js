let drinkBtn = document.querySelector(".drink-from-cup-btn");
let isDrinkActive = false;

let drinkImg = document.querySelector(".drink-item");

let plateAnimationEl = document.querySelector(".plate");
let cupAnimationEl = document.querySelector(".cup");


drinkBtn.addEventListener("click", () => {

  if (isDrinkActive) {
    console.log("Нет кофе");
    drinkImg.classList.remove("drink-item_static");
    drinkImg.classList.add("drink-item_fade");
    drinkBtn.innerHTML = "Выпить кофе";
    isDrinkActive = false;    
  } else {
    console.log("Есть кофе");
    drinkImg.classList.remove("drink-item_fade");
    drinkImg.classList.add("drink-item_moving");
    setTimeout(() => {
      drinkImg.classList.remove("drink-item_moving");
      drinkImg.classList.add("drink-item_static");
    }, 2000)
    drinkBtn.innerHTML = "Завершить кофепитие";
    isDrinkActive = true;
  }
  
  console.log(isDrinkActive);
  
});



/*Letters plus cursor Animation*/
let paperStage = document.querySelector(".paper-stage");
let cursor = document.createElement("div");

paperStage.addEventListener("mouseenter", () => {
  paperStage.prepend(cursor);
  cursor.classList.add("paper-cursor");
});

paperStage.addEventListener("mouseleave", () => {
  cursor.classList.remove("paper-cursor");
  paperStage.removeChild(cursor)
});

paperStage.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY - paperStage.getBoundingClientRect().top + "px";
  cursor.style.left = e.clientX - paperStage.getBoundingClientRect().left + "px";

  paperStage.style.backgroundPositionY = (e.clientY - paperStage.getBoundingClientRect().top)/4 + "px";
  paperStage.style.backgroundPositionX  = (e.clientX - paperStage.getBoundingClientRect().left)/4 + "px";

  /*Добавляем следующие за курсором элементы*/
  let el = document.createElement("div");
  el.className = "paper-element";
  paperStage.prepend(el);

  el.style.top = e.clientY - paperStage.getBoundingClientRect().top - 15 + "px";
  el.style.left = e.clientX - paperStage.getBoundingClientRect().left + "px";


  setTimeout(() => {
    let text = document.querySelectorAll(".paper-element")[0];
    let directionX = Math.random() < .5 ? -1 : 1;
    let directionY = Math.random() < .5 ? -1 : 1;

    text.style.left = parseInt(text.style.left) - (directionX * Math.random()*400) + "px";
    text.style.top = parseInt(text.style.top) - (directionY * Math.random()*400) + "px";
    text.style.opacity = 0;
    text.style.transform = "scale(0.25)";
    text.innerHTML = randomText();

    setTimeout(() => {
      el.remove();
    }, 1000);

    function randomText() {
      let text = ("zxcvbnmasdfghjklqwertyuiop1234567890").split("");
      console.log(text)
      let letter = text[Math.floor(Math.random() * text.length)];
      return letter;
    }

  }, 10)
});
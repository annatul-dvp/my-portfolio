/*Buttons hover animation*/

let heroBtn = document.querySelector(".hero__btn");

heroBtn.addEventListener("mouseover", () => {
  heroBtn.classList.toggle("animate__animated");
  heroBtn.classList.toggle("animate__rubberBand");
});

heroBtn.addEventListener("mouseout", () => {
  heroBtn.classList.toggle("animate__animated");
  heroBtn.classList.toggle("animate__rubberBand");
});

let infoSlideBtns = document.querySelectorAll(".info-slide__btn");

for (let btn of infoSlideBtns) {
  
  btn.addEventListener("mouseover", () => {
    gsap.to(btn, {
      duration: 2,
      backgroundColor: "#D52027",
    });
  });
  
  btn.addEventListener("mouseout", () => {
    gsap.to(btn, {
      duration: 2,
      backgroundColor: "#FFFFFF",
    });
  });

}

/*Aboutme block animation */
let aboutmeItems = document.querySelectorAll(".aboutme-block__item");

for (let item of aboutmeItems) {
  item.addEventListener("mouseover", () => {
    gsap.to(item, {
      duration: 1,
      scale: 1.1,
      color: "#FFFFFF",
      backgroundColor: "#D52027",
      outlineColor: "#D52027",
      outlineStyle: "solid",
      outlineWidth: "2px7",
      borderColor: "#FFFFFF",  
      ease: "power2.out",
    });
  });
  
  item.addEventListener("mouseout", () => {
    gsap.to(item, {
      duration: 1,
      scale: 1,
      color: "#141024",
      backgroundColor: "#FFFFFF",
      outlineStyle: "none",
      borderColor: "rgba(20,16,36, 0.2)",
      ease: "power2.out",
    });
  });
}

let aboutmeItemOneLink = document.querySelector(".aboutme-item-one-link");
let aboutmeItemTwoLink = document.querySelector(".aboutme-item-two-link");
let aboutmeItemThreeLink = document.querySelector(".aboutme-item-three-link");

let aboutmeItemOne = document.querySelector(".aboutme-item-one");
let aboutmeItemTwo = document.querySelector(".aboutme-item-two");
let aboutmeItemThree = document.querySelector(".aboutme-item-three");

aboutmeItemOneLink.addEventListener("mouseover", () => {
  gsap.to(aboutmeItemOne, {
    duration: 1,
    scale: 1.1,
    color: "#FFFFFF",
    backgroundColor: "#D52027",
    outlineColor: "#D52027",
    outlineStyle: "solid",
    outlineWidth: "2px7",
    borderColor: "#FFFFFF",  
    ease: "power2.out",      
  });
});

aboutmeItemOneLink.addEventListener("mouseout", () => {
  gsap.to(aboutmeItemOne, {
    duration: 1,
    scale: 1,
    color: "#141024",
    backgroundColor: "#FFFFFF",
    outlineStyle: "none",
    borderColor: "rgba(20,16,36, 0.2)",
    ease: "power2.out",        
  });
});

aboutmeItemTwoLink.addEventListener("mouseover", () => {
  gsap.to(aboutmeItemTwo, {
    duration: 1,
    scale: 1.1,
    color: "#FFFFFF",
    backgroundColor: "#D52027",
    outlineColor: "#D52027",
    outlineStyle: "solid",
    outlineWidth: "2px7",
    borderColor: "#FFFFFF",  
    ease: "power2.out",
  });
});

aboutmeItemTwoLink.addEventListener("mouseout", () => {
  gsap.to(aboutmeItemTwo, {
    duration: 1,
    scale: 1,
    color: "#141024",
    backgroundColor: "#FFFFFF",
    outlineStyle: "none",
    borderColor: "rgba(20,16,36, 0.2)",
    ease: "power2.out",
  });
});

aboutmeItemThreeLink.addEventListener("mouseover", () => {
  gsap.to(aboutmeItemThree, {
    duration: 1,
    scale: 1.1,
    color: "#FFFFFF",
    backgroundColor: "#D52027",
    outlineColor: "#D52027",
    outlineStyle: "solid",
    outlineWidth: "2px7",
    borderColor: "#FFFFFF",  
    ease: "power2.out",
  });
});

aboutmeItemThreeLink.addEventListener("mouseout", () => {
  gsap.to(aboutmeItemThree, {
    duration: 1,
    scale: 1,
    color: "#141024",
    backgroundColor: "#FFFFFF",
    outlineStyle: "none",
    borderColor: "rgba(20,16,36, 0.2)",
    ease: "power2.out",
  });
});



/*Faling stars animation */
let fallingStarsBg = document.querySelector(".falling-stars-bg");
let fallingStarsTrigger = document.querySelector(".aboutme-block__title");
const amountFallingStars = 30;
let amount = 0;

fallingStarsTrigger.addEventListener("mouseenter", () => {
  for (let i=0; i < amountFallingStars; i++) {
    setTimeout(() => {
      if (i%2 === 0) {
        makeFallingStar(0);
      } else {
        makeFallingStar(1);
      }
      
    }, 100 * i)
  }
});

function makeFallingStar(starType) { 
  let span = document.createElement("span");
  switch (starType) {
    case 0: 
      span.classList.add("star");
      break;
    case 1:
      span.classList.add("dark-star");
      break;
    default:
      console.log("There are no a such type of star");
  }
  
  fallingStarsBg.appendChild(span);  

  let tl = gsap.timeline({
    paused: true,
    onComplete: () => {
      span.remove();
      // makeFallingStar();
    },
  });

  tl.set(span, {
    left: gsap.utils.random(0, fallingStarsBg.offsetWidth),
    top: 0,
  });
  
  tl.add("tl-beginning");
  tl.to(span, {
    x: gsap.utils.random(-50, 50),
    duration: 5,
  },"tl-beginning")  
  tl.to(span, {
    delay: 5,
    x: gsap.utils.random(-50, 50),
    duration: 5,
  },"tl-beginning")  
  tl.to(span, {
    y: fallingStarsBg.offsetHeight + 100,
    rotate: gsap.utils.random(45, 180),
    duration: gsap.utils.random(10, 25),    
  }, "tl-beginning");

  tl.play();
}

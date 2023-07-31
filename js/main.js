let bgImages = document.querySelectorAll(".animated-wrap");

gsap.registerPlugin(ScrollTrigger);

for (let bg of bgImages) {
  gsap.fromTo(
    bg,
    {
        clipPath: "circle(0% at 75% 20%)",
    },
    {
        clipPath: "circle(75% at 50% 50%)",
        ease: "none",

        scrollTrigger: {
            trigger: bg,
            scrub: 1,
            start: "top center",
            end: "top center-=200",
        },
    }
  );
}

let headerTl = gsap.timeline();

headerTl
  .add("header-start")
  .from(".header__title", {
    opacity: 0,
    x: 200,
    duration: 2, 
    ease: "expo.out",
  }, "header-start")
  .from(".s-one-link", {
    opacity: 0,
    x: 200,
    delay: 0.2,
    duration: 2, 
    ease: "expo.out",
  }, "header-start")
  .from(".s-two-link", {
    opacity: 0,
    x: 200,
    delay: 0.4,
    duration: 2, 
    ease: "expo.out",
  }, "header-start")
  .from(".s-three-link", {
    opacity: 0,
    x: 200,
    delay: 0.6,
    duration: 2, 
    ease: "expo.out",
  }, "header-start")
  .from(".header__link", {
    opacity: 0,
    x: 200,
    delay: 0.8,
    duration: 2, 
    ease: "expo.out",
  }, "header-start");

headerTl.play();

/*Hero Page Animation*/
let heroTl = gsap.timeline({delay:1.3});

heroTl  
  .from (".hero__title", {
    opacity: 0,
    x: 80,    
    duration: 2,
    ease: "expo.out",
  })
  .from(".hero__desc", {
    opacity: 0,
    x: 80,    
    duration: 2,
    ease: "expo.out",
  }, ">-1.5")
  .from(".hero__btn", {
    opacity: 0,   
    duration: 3,
    ease: "expo.out",
  }, ">-1.4")
  .from(".hero__img-front", {
    opacity: 0, 
    delay: 0.5,  
    duration: 1.8,
  }, "<")
  .from(".hero__img-back", {
    opacity: 0,   
    scale: 0.5,
    duration: 3,
    ease: "expo.out",
  }, ">-0.3");

heroTl.play();

let heroBtn = document.querySelector(".hero__btn");

heroBtn.addEventListener("mouseenter", () => {
  heroBtn.classList.toggle("animate__animated");
  heroBtn.classList.toggle("animate__rubberBand");
});

heroBtn.addEventListener("mouseout", () => {
  heroBtn.classList.toggle("animate__animated");
  heroBtn.classList.toggle("animate__rubberBand");
});

/*Faling stars animation */
let fallingStarsBg = document.querySelector(".falling-stars-bg");
let fallingStarsTrigger = document.querySelector(".aboutme-block__title");
let smtg = document.querySelector(".aboutme-block__title");
const amountFallingStars = 30;
let amount = 0;

fallingStarsTrigger.addEventListener("mouseenter", () => {
  console.log('In'); 
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
  
  tl.add('tl-beginning');
  tl.to(span, {
    x: gsap.utils.random(-50, 50),
    duration: 5,
  },'tl-beginning')  
  tl.to(span, {
    delay: 5,
    x: gsap.utils.random(-50, 50),
    duration: 5,
  },'tl-beginning')  
  tl.to(span, {
    y: fallingStarsBg.offsetHeight + 100,
    rotate: gsap.utils.random(45, 180),
    duration: gsap.utils.random(10, 25),    
  }, 'tl-beginning');

  tl.play();
}

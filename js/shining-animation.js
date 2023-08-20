const count = 50;
const blurCount = 10;
const stage = document.querySelector(".stage");

for (let i=0; i < count; i++) {
  setTimeout(() => {
    makeLight(i);
  }, 50 * i)
}

function makeLight(i) {
  let span = document.createElement("span");
  if (i < blurCount) {
    span.classList.add("blur");
  }
  if (i%2 === 0) {
    span.classList.add("light-span");
  } else {
    span.classList.add("light-span-two");
  }
  
  stage.appendChild(span);

  gsap.set(span, {
    left: gsap.utils.random(0, stage.offsetWidth),
    top: gsap.utils.random(0, stage.offsetHeight),
    scale: gsap.utils.random(0.8, 1.2, .1),
    opacity: 0,
  });
  
  let tl = gsap.timeline({
    paused: true,
    onComplete: () => {
      span.remove();
      makeLight(i);
    },
  });

  if (i < blurCount) {
    tl.to(span, {
      opacity: gsap.utils.random(.1, .2),
      duration: .3,
    });
    tl.to(span, {
      x: gsap.utils.random(-100, 100),
      y: gsap.utils.random(-100, 100),
      duration: gsap.utils.random(5, 7, 0.2),
      ease: Power0.easeNone,
    }, -.3);
    tl.to(span, {
      opacity: 0,
      duration: .3,
    }, ">-.3");
  } else {
    tl.to(span, {
      opacity: gsap.utils.random(.5, .8),
      duration: .3,
    });
    tl.to(span, {
      x: gsap.utils.random(-40, 40),
      y: gsap.utils.random(-40, 40),
      duration: gsap.utils.random(5, 7, 0.2),
      ease: Power0.easeNone,
    }, -.3);
    tl.to(span, {
      opacity: 0,
      duration: .3,
    }, ">-.3");
  }

  tl.play();
}
console.log("Я работаю!");

let scrollSTwoTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#s-two",
    start: "top center",
    end: "+=200", // end after scrolling 500px beyond the start
    scrub: 1,
    markers: false,
  }
});

scrollSTwoTl.from("#s-two", {
  x: "-100%",
  delay: 0,
  duration: 2,
  ease: "elastic.out(1, 0.5)",
});

let scrollSThreeTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#s-three",
    start: "top center",
    end: "bottom center",
    scrub: false,
    markers: false,
  }
});

scrollSThreeTl.from("#s-three", {
  x: "+100%",
  delay: 0,
  duration: 1.5,
  ease: "power4.out",
});

let scrollSFourTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#s-four",
    start: "top center",
    end: "bottom center",
    scrub: false,
    markers: false,
  }
});

scrollSFourTl.from("#s-four", {
  x: "-100%",
  delay: 0,
  duration: 1.5,
  ease: "power4.out",
});
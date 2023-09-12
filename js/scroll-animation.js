gsap.registerPlugin(ScrollToPlugin);

// pages scrolling animation with gsap
// let tlPages = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".s-two",
//     start: "top bottom",
//     end: "40% bottom",
//     scrub: true,
//     markers: true,
//   }
// });

// gsap.from(".s-two", {
//   x: "-100%",
  
// });

// gsap.from(".s-three", {
//   x: "100%",
//   scrollTrigger: {
//     trigger: ".s-three",
//     start: "top bottom",
//     end: "40% bottom",
//     scrub: true,
//     markers: true,
//   }
// });

// gsap.from(".s-four", {
//   x: "-100%",
//   scrollTrigger: {
//     trigger: ".s-four",
//     start: "top bottom",
//     end: "top 20%",
//     scrub: true,
//     markers: true,
//   }
// });

//smooth scroll
const lenis = new Lenis();

lenis.on('scroll', (e) => {
  // console.log(e);
})

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
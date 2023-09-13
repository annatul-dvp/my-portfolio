// gsap.registerPlugin(ScrollTrigger);

// let bgImages = document.querySelectorAll(".animated-wrap");

// for (let bg of bgImages) {
//   gsap.fromTo(
//     bg,
//     {
//         clipPath: "circle(0% at 75% 20%)",
//     },
//     {
//         clipPath: "circle(75% at 50% 50%)",
//         ease: "none",

//         scrollTrigger: {
//             trigger: bg,
//             scrub: 1,
//             start: "top center",
//             end: "top center-=200",
//         },
//     }
//   );
// }

let windowWidth = $(window).width();
let windowHeight = $(window).height();

/*animation of hero page only in landscape mode */
if(windowWidth > windowHeight) {
/*Start settings for pages animation */
  gsap.set(".header__title", {
    autoAlpha: 0,
    x: 200,
  });
  gsap.set(".s-one-link", {
    autoAlpha: 0,
    x: 200,
  });
  gsap.set(".s-two-link", {
    autoAlpha: 0,
    x: 200,
  });
  gsap.set(".s-three-link", {
    autoAlpha: 0,
    x: 200,
  });
  gsap.set(".s-four-link", {
    autoAlpha: 0,
    x: 200,
  });
  gsap.set(".header__link", {
    autoAlpha: 0,
    x: 200,
  });
  gsap.set (".hero__title", {
    autoAlpha: 0,
    x: 80,    
  });
  gsap.set(".hero__desc", {
    autoAlpha: 0,
    x: 80,    
  });
  gsap.set(".hero__btn", {
    autoAlpha: 0,
  });
  gsap.set(".hero__img-front", {
    autoAlpha: 0,
  });
  gsap.set(".hero__img-back", {
    autoAlpha: 0,
    scale: 0.5,
  });

  /*Header animation */

  let headerTl = gsap.timeline();

  headerTl
    .add("header-start")
    .to(".header__title", {
      autoAlpha: 1,
      x: 0,
      duration: 2, 
      ease: "expo.out",
    }, "header-start")
    .to(".s-one-link", {
      autoAlpha: 1,
      x: 0,
      delay: .2,
      duration: 2, 
      ease: "expo.out",
    }, "header-start")
    .to(".s-two-link", {
      autoAlpha: 1,
      x: 0,
      delay: .4,
      duration: 2, 
      ease: "expo.out",
    }, "header-start")
    .to(".s-three-link", {
      autoAlpha: 1,
      x: 0,
      delay: .6,
      duration: 2, 
      ease: "expo.out",
    }, "header-start")
    .to(".s-four-link", {
      autoAlpha: 1,
      x: 0,
      delay: .8,
      duration: 2, 
      ease: "expo.out",
    }, "header-start")
    .to(".header__link", {
      autoAlpha: 1,
      x: 0,
      delay: 1,
      duration: 2, 
      ease: "expo.out",
    }, "header-start");

  headerTl.play();

  /*Hero Page Animation*/
  let heroTl = gsap.timeline({delay: .6,});

  heroTl  
    .to (".hero__title", {
      autoAlpha: 1,
      x: 0,    
      duration: 2,
      ease: "expo.out",
    })
    .to(".hero__desc", {
      autoAlpha: 1,
      x: 0,    
      duration: 2,
      ease: "expo.out",
    }, ">-1.5")
    .to(".hero__btn", {
      autoAlpha: 1, 
      duration: 3,
      ease: "expo.out",
    }, ">-1.4")
    .to(".hero__img-front", {
      autoAlpha: 1,
      // delay: 0.1,  
      duration: 2,
      ease: "expo.out",
    }, "<")
    .to(".hero__img-back", {
      autoAlpha: 1,
      scale: 1,
      duration: 2,
      ease: "expo.out",
    }, ">-0.8");


  heroTl.play();
}

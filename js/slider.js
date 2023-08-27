/*Info Block slider*/
const infoSlider = new Swiper(".info-swiper", {
	slidesPerView: 1,
  speed: 200,
  spaceBetween: 106,
  centeredSlides: true,
  // mousewheel: true,
  pagination: {
    el: '.info-swiper__pagination',
    clickable: true,
  },
	navigation: {
    nextEl: ".info-swiper__btn-next",
    prevEl: ".info-swiper__btn-prev",
  },
});

let btnPrevInfoSlide = document.querySelector(".info-swiper__btn-prev");
let btnNextInfoSlide = document.querySelector(".info-swiper__btn-next");
let isInfoSlideAnimationPlayed = false;

function changeInfoSlideAnimation() {
  console.log("Status is changesd");
  isInfoSlideAnimationPlayed = !isInfoSlideAnimationPlayed;
  console.log(isInfoSlideAnimationPlayed);
}

infoSlider.on("slideChange", function() { 
  console.log("slideChange");
  gsap.set(".info-slide__name", {      
    opacity: 0,      
  })
  gsap.set(".info-slide__desc", {
    opacity: 0,
  })
  gsap.set(".info-slide__sub-title", {
    opacity: 0,
  })
  gsap.set(".info-slide__link", {
    opacity: 0,
  })
  gsap.set(".info-slide__btn", {      
    opacity: 0,
  })
  gsap.set(".info-slide__img", {    
    opacity: 0,      
  });
});

infoSlider.on("slideChangeTransitionEnd", function() {
  console.log("slideChangeTransitionEnd"); 
  let slideTl = gsap.timeline({
    // delay:.2,
  });

  slideTl
    .add ("info-slide")
    .to(".info-slide__name", {
      duration: .3,
      opacity: 1,
      ease: Sine.easeInOut,
    }, "info-slide")
    .to(".info-slide__desc", {
      duration: .3,
      delay: .1,
      opacity: 1,
      ease: Sine.easeInOut,
    }, "info-slide")
    .to(".info-slide__sub-title", {
      duration: .3,
      delay: .2,
      opacity: 1,
      ease: Sine.easeInOut,
    }, "info-slide")
    .to(".info-slide__link", {
      duration: .3,
      delay: .3,
      opacity: 1,
      ease: Sine.easeInOut,
    }, "info-slide")
    .to(".info-slide__btn", {
      delay: .4,
      duration: .3,
      opacity: 1,
      ease: Sine.easeInOut,
    }, "info-slide")
    .to(".info-slide__img", {
      delay: .5,
      duration: .5,
      opacity: 1,
      ease: Sine.easeInOut,
    }, "info-slide");
  slideTl.play();
});

/*Animation Block slider*/

const animSlider = new Swiper(".animation-works-swiper", {
	slidesPerView: 1,
  speed: 200,
  // spaceBetween: 106,
  centeredSlides: true,
  // mousewheel: true,
  pagination: {
    el: '.animation-works-swiper__pagination',
    clickable: true,
  },
	navigation: {
    nextEl: ".animation-works-swiper__btn-next",
    prevEl: ".animation-works-swiper__btn-prev",
  },
});
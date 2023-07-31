const infoSlider = new Swiper(".info-swiper", {
	slidesPerView: 1,
  speed: 200,
  spaceBetween: 106,
  centeredSlides: true,
  // mousewheel: true,
	navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
	// scrollbar: {
  //   el: ".swiper-scrollbar",
  //   draggable: true,
	// 	hide:true,
  // },
});

infoSlider.on("slideChange", function() {
  let slideTl = gsap.timeline({delay:.3});

  slideTl
    .add ("info-slide")
    .from(".info-slide__name", {
      duration: .6,
      opacity: 0,
      ease: Sine.easeInOut,
    }, "info-slide")
    .from(".info-slide__desc", {
      duration: .6,
      delay: .2,
      opacity: 0,
      ease: Sine.easeInOut,
    }, "info-slide")
    .from(".info-slide__img", {
      duration: .8,
      delay: .8,
      opacity: 0,
      ease: Sine.easeInOut,
    }, "info-slide");

  slideTl.play();
})

(function () {
  $.scrollify({
    section : "section, .footer",
    sectionName : "section-name",
    interstitialSection : ".footer",
    easing: "easeOutExpo",
    scrollSpeed: 1000,
    offset : 0,
    scrollbars: true,
    // standardScrollElements: "",
    setHeights: false,
    overflowScroll: true,
    updateHash: false,
    touchScroll:true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
  });

  $(".s-one-link").click(function () {
    $.scrollify.move("#s-one");
  });
  $(".s-two-link").click(function () {
    $.scrollify.move("#s-two");
  });
  $(".s-three-link").click(function () {
    $.scrollify.move("#s-three");
  });
  $(".s-four-link").click(function () {
    $.scrollify.move("#s-four");
  });
})();
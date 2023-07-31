(function () {
  $.scrollify({
    section : "section",
    sectionName : "section-name",
    // interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 3000,
    offset : 0,
    scrollbars: true,
    // standardScrollElements: "",
    setHeights: true,
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
})();
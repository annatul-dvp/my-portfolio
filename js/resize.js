let screeHeight = window.innerHeight;

function resetHeight(){
  // console.log(window.innerHeight);
  document.querySelector(":root").style
    .setProperty("--screen-heignt", window.innerHeight + "px");
  document.querySelector(":root").style
    .setProperty("--vh", window.innerHeight/100 + "px");
  console.log("resize");
}

resetHeight();
window.addEventListener("resize", resetHeight);

// let atualWindowWidth = $(window).width();

// $(window).resize(function(){
//   let currentWindowWidth = $(window).width();
//   if(atualWindowWidth!==currentWindowWidth){
//     atualWindowWidth = $(window).width();
//     window.addEventListener("resize", resetHeight);
//     console.log('Width changed');
//   }
// });


// screen.orientation.addEventListener("change", function(e) {
//   console.log('Orientation changed');
//   atualWindowWidth = $(window).width(); 
//   window.addEventListener("resize", resetHeight);
// });









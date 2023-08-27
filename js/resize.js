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


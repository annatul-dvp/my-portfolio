function resetHeight(){
  document.querySelector(':root').style
    .setProperty('--screen-heignt', window.innerHeight + 'px');
  document.querySelector(':root').style
    .setProperty('--vh', window.innerHeight/100 + 'px');
  console.log('resize');
}
window.addEventListener("resize", resetHeight);
resetHeight();
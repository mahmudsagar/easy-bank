// const btnHamburger = document.querySelector("#btnHamburger");
// const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function () {
  // console.log("open hamburger");

  if (header.classList.contains("open")) {
    //close hamburger menu
    // body.classList.remove('noscroll');
    header.classList.remove('open');
    fadElems.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    // hamburger menu
    // body.classList.add('noscroll');
    header.classList.add('open');
    fadElems.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});

// sticky top
const navbar = document.querySelector("nav")
const sticky = navbar.offsetTop;
window.onscroll = () =>{
  console.log('sticky')
  if(window.pageYOffset > sticky){
    navbar.classList.add("sticky")
  }
  else{
    navbar.classList.remove("sticky")
  }
}
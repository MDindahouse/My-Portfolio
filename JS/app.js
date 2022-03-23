const hamburger = document.querySelector(".header .nav-bar .nav-links .hamburger");
const mobile_menu = document.querySelector(".header .nav-bar .nav-links ul");
const menu_item = document.querySelectorAll(".header .nav-bar .nav-links ul li a");
const header = document.querySelector(".header.container");


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  const scroll_position = window.scrollY;
  if (scroll_position > 2) {
    header.style.backgroundColor = "#151D3B";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

let typed = new Typed(".typing", {
  strings: [ "Web Developer.", "Frontend Developer.", "JavaScript Developer." ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});


const button = document.getElementById("myBtn");
button.addEventListener("click", () => {

  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const button = document.getElementById("myBtn");
  
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    button.innerHTML = "Read More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    button.innerHTML = "Read Less";
    moreText.style.display = "inline"
  }
});
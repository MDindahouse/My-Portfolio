// Header | Hamburger section
const hamburger = document.querySelector(".header .nav_bar .nav_links .hamburger");
const mobile_menu = document.querySelector(".header .nav_bar .nav_links ul");
const menu_item = document.querySelectorAll(".header .nav_bar .nav_links ul li a");
const header = document.querySelector(".header.container");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	mobile_menu.classList.toggle("active");
});



menu_item.forEach((item) => {
	item.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	mobile_menu.classList.toggle("active");
	});
});



document.addEventListener("scroll", () => {
	const scroll_position = window.scrollY;
	if (scroll_position > 2) {
	header.style.backgroundColor = "#151D3B";
	} else {
	header.style.backgroundColor = "transparent";
	}
});
// End of Header / Hamburger section


// Typing Section
let typed = new Typed(".typing", {
	strings: ["Frontend Developer.", "JavaScript Developer." ],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
});
// End of Typing Section


// Animate On Scroll
	AOS.init({
	offSet: 120,
	duration: 1500,
	dataAosEasing: "ease-in-out",
	});
// End of Animate On Scroll


// Dark Theme
const darkIcon = document.getElementById("icon");

darkIcon.addEventListener("click", () => {
	document.body.classList.toggle("dark_theme");

	if (document.body.classList.contains("dark_theme")) {
		darkIcon.src = "Assets/Img/sun.png";
	} else {
		darkIcon.src = "Assets/Img/moon.png";
	}
});




// Read More Section
// const button = document.getElementById("myBtn");
// button.addEventListener("click", () => {
//   const dots = document.getElementById("dots");
//   const moreText = document.getElementById("more");
//   const button = document.getElementById("myBtn");

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     button.innerHTML = "Read More";
//     moreText.style.display = "none";
//   } else {
//     dots.style.display = "none";
//     button.style.display = "none";
//     moreText.style.display = "inline"
//   }
// });
// End of Read More Section


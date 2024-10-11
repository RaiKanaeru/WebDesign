// Gallery
let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");

let carouselDom = document.querySelector(".carousel");
let SliderDom = carouselDom.querySelector(".carousel .list");
let thumbnailBorderDom = document.querySelector(".carousel .thumbnail");
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
let timeDom = document.querySelector(".carousel .time");

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 500;
nextDom.onclick = function () {
  showSlider("next");
};
prevDom.onclick = function () {
  showSlider("prev");
};
let runTimeOut;
function showSlider(type) {
  let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
  let thumbnailItemsDom = document.querySelectorAll(
    ".carousel .thumbnail .item"
  );
  if (type === "next") {
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add("next");
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carouselDom.classList.add("prev");
  }
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, timeRunning);
}

// Navbar Scroll Bergulir
// window.onscroll = function () {
//   scrollFunction();
// };
// function scrollFunction() {
//   var header = document.getElementById("header");
//   var navLinks = document.querySelectorAll(".navbar a");
//   if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
//     header.style.backgroundColor = "rgba(254, 254, 254,1)";
//     header.style.backdropFilter = "blur(10px)";
//     navLinks.forEach(function (link) {
//       link.style.color = "black";
//       link.addEventListener("mouseover", function () {
//         link.style.color = "#37b837";
//       });
//       link.addEventListener("mouseout", function () {
//         link.style.color = "black";
//       });
//     });

//     var navLogoLinks = document.querySelectorAll(".nav-logo a");
//     for (var i = 0; i < navLogoLinks.length; i++) {
//       navLogoLinks[i].style.color = "black";
//     }
//   } else {
//     header.style.backgroundColor = "transparent";
//     header.style.backdropFilter = "none";
//     navLinks.forEach(function (link) {
//       link.style.color = "white";
//       link.addEventListener("mouseover", function () {
//         link.style.color = "#37b837";
//       });
//       link.addEventListener("mouseout", function () {
//         link.style.color = "white";
//       });
//     });

//     var navLogoLinks = document.querySelectorAll(".nav-logo a");
//     for (var i = 0; i < navLogoLinks.length; i++) {
//       navLogoLinks[i].style.color = "white";
//     }
//   }
// }

// Slider
// let counter = 1;
// setInterval(function () {
//   document.getElementById("radio" + counter).checked = true;
//   counter++;
//   if (counter > 3) {
//     counter = 1;
//   }
// }, 5000);

/*=============== SWIPER JS ===============*/
// let swiperCards = new Swiper(".card__content", {
//   loop: true,
//   spaceBetween: 32,
//   grabCursor: true,

//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//     dynamicBullets: true,
//   },

//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   breakpoints: {
//     600: {
//       slidesPerView: 2,
//     },
//     968: {
//       slidesPerView: 3,
//     },
//   },
// });

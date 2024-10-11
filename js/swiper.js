// Swiper JS
new Swiper(".card-wrapper", {
  // Optional parameters
  loop: true,
  spaceBetween: 30,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullts: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
document.addEventListener("aos:in", ({ detail }) => {
  console.log("Element animated in:", detail);
});

document.addEventListener("aos:out", ({ detail }) => {
  console.log("Element animated out:", detail);
});

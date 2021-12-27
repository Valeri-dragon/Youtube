const swiper = new Swiper(".subscriptions-video__slider", {
  // Optional parameters

  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1560: {
      slidesPerView: 5.4,
    },
    1400: {
      slidesPerView: 4.5,
    },
    1300: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".subscriptions-video-button-next",
    prevEl: ".subscriptions-video-button-prev",
  },
});
const swiper1 = new Swiper(".recommend-video__slider", {
  // Optional parameters

  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1600: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 2,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".recommend-video-button-next",
    prevEl: ".recommend-video-button-prev",
  },
});
const swiper2 = new Swiper(".food-chanel-video__slider", {
  // Optional parameters

  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1560: {
      slidesPerView: 5.5,
    },
    1400: {
      slidesPerView: 4.5,
    },
    1300: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".food-chanel-video-button-next",
    prevEl: ".food-chanel-video-button-prev",
  },
});
const searchButton = document.querySelector(".mobile-search");
const mobileSearch = document.querySelector(".search-group");
searchButton.addEventListener("click", ()=>{
  mobileSearch.classList.toggle("is-open");
})
if(document.documentElement.scrollWidth <= 640){
  swiper.destroy();
  swiper1.destroy();
  swiper2.destroy();
}
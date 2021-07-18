var swiper = new Swiper(".screens__card-review-container", {
  breakpoints:{
    567:{
      slidesPerView: 1,
    },
    700:{
      slidesPerView: 2,
    },
    1024:{
      slidesPerView:4,
      spaceBetween:20,
    }
  },
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
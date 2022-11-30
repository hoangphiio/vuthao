export default function swiperModule() {
  const swiperTablist = new Swiper(".tablist-inner-panel-swipper .swiper", {
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
    },
    pagination: {
      el: ".history-inner-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".tablist-swiper-next",
      prevEl: ".tablist-swiper-prev",
    },
  });

  const swiperHistory = new Swiper(".history-inner-swipper .swiper", {
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
    },
    pagination: {
      el: ".history-inner-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".tablist-swiper-next",
      prevEl: ".tablist-swiper-prev",
    },
  });

  const tablist = new Swiper(".swiper-container", {
    direction: "vertical",
    slidesPerView: 5,
    spaceBetween: 30,
    mousewheel: true,
    grabCursor: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  const swiperCard = new Swiper(".customer-inner-card .swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 2,
      },
      1160: {
        slidesPerView: 3,
      },
    },
  });
}

const swiper = new Swiper('.swiper', {
  cssMode: true,
  keyboard: true,
  loop: true,
  autoplay: {
    delay: 5000, // 5 segundos
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1, // Mostra apenas um slide por vez
  spaceBetween: 30, // Espaço entre os slides
}
);

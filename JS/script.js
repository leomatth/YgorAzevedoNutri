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
  slidesPerView: 2, // Mostra apenas um slide por vez
  spaceBetween: 50, // Espaço entre os slides
}
);

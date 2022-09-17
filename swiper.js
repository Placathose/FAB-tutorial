const swiper = new Swiper('.swiper', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: '.right',
    prevEl: '.left',
  },
  pagination: {
    el: '.pagination',
    type: 'bullets'
  },
  observer: true,
  // observeParents: true,
});
const swiper = new Swiper('.swiper', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  // navigation: {
  //   nextButton: '.right',
  //   prevButton: '.left',
  // },
  pagination: {
    el: '.pagination',
    type: 'bullets'
  },
  nextButton: '.right',
  prevButton: '.left',
  // observer: true,
  // observeSlideChildren: true,
  // observeParents: true,
});
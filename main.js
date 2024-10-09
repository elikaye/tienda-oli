/*==================SHOW MENU===================*/
const navMenu  = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

/*================MENU SHOW====================*/
/*VALIDATE IF CONSTANT EXISTS */ 
if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  })};

/*============HIDE SHOW=============*/
/*VALIDATE IF CONSTANT EXISTS */
if(navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  })};

/*============== IMAGE GALLERY===============*/

function imgGallery() {
  const mainImg = document.querySelector('.details__img'),
  smallImg = document.querySelectorAll('.details__small-img');

  smallImg.forEach((img) => {
    img.addEventListener('click', function () {
      mainImg.src = this.src;
    });

  });
}

imgGallery();
/*---------------SWIPER CATEGORIES-------------*/
/*---------------SWIPER CATEGORIES-------------*/
var swiperCategorias = new Swiper(".categorias__container",{
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});


  /*--------------SWIPER PRODUCTS--------------*/
var swiperProductos = new Swiper(".new__container",{
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});


/*---------------productos tabs----------------*/

const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[content]');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove('active-tab');
    });
  target.classList.add('active-tab');

  tab.forEach((tab) => {
    tab.classList.remove('active-tab');

   });

   tab.classList.add('active-tab');

  });

});




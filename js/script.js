const swiper = new Swiper('.swiper', {
  spacebetween: 40,
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 1000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  breakpoints: {
    1310: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 3.8,
    },
    992: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 2.2,
    },
    675: {
      slidesPerView: 2,
    },
    575: {
      slidesPerView: 1.8,
    },
    500: {
      slidesPerView: 1.6,
    },
    450: {
      slidesPerView: 1.4,
    },
    320: {
      slidesPerView: 1,
    },
  },
});

// Меню бургер
const burger = document.querySelector('.burger');
const menuNav = document.querySelector('.menu');
const navLink = document.querySelectorAll('.menu__list-link');

burger.addEventListener('click', mobileMenu);

function mobileMenu() {
  burger.classList.toggle('_active');
  menuNav.classList.toggle('_open');
}

// при нажатии на ссылку, меню закрывается
navLink.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
  burger.classList.toggle('_active');
  menuNav.classList.toggle('_open');
}

// плавная прокрутка к разделам
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href');
    document.querySelector('' + blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  })
}
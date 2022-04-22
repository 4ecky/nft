const swiper = new Swiper('.swiper',{

  slidesPerView: 4,
  spaceBetween: 40,
  slidesPerGroup: 1,
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 1000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
});
// МЕНЮ БУРГЕР
// 1. Мы должны получить нашу иконку
const iconMenu = document.querySelector('.header__burger');
// 2. Проверка на всякий пожарный
// 3. В условии делаем тоже, что и в первом пункте, только вместо .menu__icon получаем в константу .menu__body (53:56 - перенесли)
const menuBody = document.querySelector('.header__menu');
if (iconMenu) {
  // 4. создаем событие клик по иконке
  iconMenu.addEventListener('click', function (e) {
    //5. Обращаюсь к иконке, добавляю класс, который будет то появлятся(при нажатии на иконку) то пропадать(при закрытии, т.е. втором нажатии)
    iconMenu.classList.toggle('_active');
    // 6. Тоже самое делаем для menuBody, что и для iconMenu
    menuBody.classList.toggle('_active');
    // 7. Обращаемся к body и добавляем/убираем класс _lock, чтобы при открытом меню не скролилось
    document.body.classList.toggle('_lock');
  });
}


// Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });

  // Пишем функцию onMenuLinkClick
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    // условие
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      // высчитываем положение объекта с учетом высоты шапки.
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

      //  при клике  на раздел, меню пропадает и страница переводит на выбранный пункт
      // 1.Если объект иконки меню содержит класс _active, т.е. фактически это означает, что меню открыто, то в этот момент:
      if (iconMenu.classList.contains('_active')) {
        // 2. мы должны убрать классы, которые мы добавляем при открытии меню (заменить toggle на remove)
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
        document.body.classList.remove('_lock');
      }

      // кусочек кода, который заставит скролл прокрутиться к нужному месту
      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
      });
      e.preventDefault();
    }
  }
}
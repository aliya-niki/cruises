import {iosVhFix} from './utils/ios-vh-fix';
// import {initModals} from './modules/modals/init-modals';
import {FocusLock} from './utils/focus-lock.js';
import {ScrollLock} from './utils/scroll-lock.js';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  const focusLock = new FocusLock();
  const scrollLock = new ScrollLock();

  const navMain = document.querySelector('[data-navigation]');
  const header = document.querySelector('[data-header]');
  const navToggle = document.querySelector('[data-navigation-toggle]');
  const navLinks = document.querySelectorAll('[data-navigation-link]');

  const closeMenu = () => {
    navMain.classList.add('is-closed');
    navMain.classList.remove('is-open');
    header.classList.remove('is-open');
    focusLock.unlock();
    scrollLock.enableScrolling();
  };

  const openMenu = () => {
    navMain.classList.add('is-open');
    header.classList.add('is-open');
    navMain.classList.remove('is-closed');
    focusLock.lock('header');
    scrollLock.disableScrolling();
  };

  if (header) {
    header.classList.remove('no-js');
  }

  if (navMain) {
    navMain.classList.remove('no-js');
    navMain.classList.add('is-closed');
  }

  if (navLinks) {
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });
  }

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('is-closed')) {
        openMenu();
      } else {
        closeMenu();
      }
    });
  }

  // Form validation
  const consentInput = document.querySelector('[data-consent-input]');
  if (consentInput) {
    consentInput.addEventListener('blur', () => {
      let validityMessage = '';

      if (!consentInput.checked) {
        validityMessage = 'Для отправки формы необходимо подтвердить свое согласие. ';
      }
      consentInput.setCustomValidity(validityMessage);
      consentInput.reportValidity();
    });
  }

  const form = document.querySelector('[data-form]');
  if (form) {
    const consent = form.querySelector('[data-consent-input]');
    const name = form.querySelector('[data-name-input]');
    const phone = form.querySelector('[data-phone-input]');
    const email = form.querySelector('[data-email-input]');
    form.addEventListener('submit', function (evt) {
      if (!name.value || !phone.value || !email.value || !consent.checked) {
        evt.preventDefault();
      }
    });
  }

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  // window.addEventListener('load', () => {});
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)

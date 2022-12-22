import {FocusLock} from '../utils/focus-lock.js';
import {ScrollLock} from '../utils/scroll-lock.js';

const initMenu = () => {
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
};

export {initMenu};

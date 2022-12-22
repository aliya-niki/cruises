const initForm = () => {
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
};

export {initForm};

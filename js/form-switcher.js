const formElement = document.querySelector('.ad-form');
const fieldsets = formElement.querySelectorAll('fieldset');

const handlerTurnOffForm = function () {
  formElement.classList.add('ad-form--disabled');
  fieldsets.forEach((fieldset) => {
    fieldset.disabled = true;
  });
};

const handlerTurnOnForm = function () {
  formElement.classList.remove('ad-form--disabled');
  fieldsets.forEach((fieldset) => {
    fieldset.disabled = false;
  });
};

export {handlerTurnOffForm, handlerTurnOnForm};

import * as _ from 'lodash';

const form = document.querySelector('.feedback-form');
console.log(form);

updateForm();
const localData = {};

function updateForm() {
  try {
    const jsData = JSON.parse(localStorage.getItem('feedback-form-state'));

    jsData.email === undefined
      ? ''
      : (form.elements.email.value = jsData.email);
    jsData.message === undefined
      ? ''
      : (form.elements.message.value = jsData.message);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }

  form.addEventListener('submit', el => {
    event.preventDefault();
    form.elements.email.value = '';
    form.elements.message.value = '';

    localStorage.removeItem('feedback-form-state');
    console.log(localData);
  });
}

form.addEventListener(
  'input',
  _.throttle(el => {
    const jsData = JSON.parse(localStorage.getItem('feedback-form-state'));

    if (jsData !== null) {
      jsData.email === undefined
        ? (localData.email = '')
        : (localData.email = jsData.email);
      jsData.message === undefined
        ? (localData.message = '')
        : (localData.message = jsData.message);
    }

    localData[el.target.name] = el.target.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(localData));
  }, 500)
);

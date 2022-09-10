import * as _ from 'lodash';
// import { fromPairs } from 'lodash';

const form = document.querySelector('.feedback-form');
console.log(form);

updateForm();
const localData = {};

function updateForm() {
  try {
    const jsData = JSON.parse(localStorage.getItem('feedback-form-state'));
    console.log(jsData);
    form.elements.email.value = jsData.email;
    form.elements.message.value = jsData.message;
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
    localData[el.target.name] = el.target.value;
    console.log(localData);

    localStorage.setItem('feedback-form-state', JSON.stringify(localData));
  }, 500)
);

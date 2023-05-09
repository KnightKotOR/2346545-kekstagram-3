import { checkLength } from './util.js';

const form = document.querySelector('.img-upload__form');

const pristine  = new Pristine(form, {
  classTo: 'img-upload__text',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

const validateComment = function (value) {
  return checkLength(value, 240);
};

pristine.addValidator(form.querySelector('.text__description'),
  // eslint-disable-next-line no-use-before-define
  validateComment, 'Комментарий не должен превышать 240 символов');

form.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

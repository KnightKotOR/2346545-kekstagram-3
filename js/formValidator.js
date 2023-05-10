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

export const validateComment = function (v) {
  return checkLength(v, 140) && !checkLength(v, 19);
};

pristine.addValidator(form.querySelector('.text__description'),
  // eslint-disable-next-line no-use-before-define
  validateComment, 'Длина комментария должна входить диапозон 20-140 символов');

form.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

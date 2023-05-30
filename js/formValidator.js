import { checkLength } from './util.js';

const form = document.querySelector('.img-upload__form');

const regex = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

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

export function validateHashtag(hash) {
  return regex.test(hash) || checkLength(hash, 0);
}

pristine.addValidator(form.querySelector('.text__description'),
  validateComment, 'Длина комментария должна входить диапозон 20-140 символов');

pristine.addValidator(document.querySelector('.text__hashtags'),
  validateHashtag, 'Хештег начинается с #; Длина не превышает 20 символов');

form.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});

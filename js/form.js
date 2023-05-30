import {clearEffect} from './effect.js';
import {scaleValue} from './scale.js';
import { openError } from './fetch.js';
import { openSuccess } from './fetch.js';
import { validateComment, validateHashtag } from './formValidator.js';

const BACKEND_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

const downloadButton = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const hashtag = document.querySelector('.text__hashtags');
const comment = document.querySelector('.text__description');
const overlay = document.querySelector('.img-upload__overlay');
const preview = document.querySelector('.img-upload__preview');
const form = document.querySelector('.img-upload__form');
const body = document.querySelector('body');

export const escKey = function (e) {
  if (e.key === 'Escape'){
    e.preventDefault();
    // eslint-disable-next-line no-use-before-define
    closeWindow();
  }
};

const openWindow = function () {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  body.addEventListener('keydown', escKey);
};

const closeWindow = function () {
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', escKey);
  // eslint-disable-next-line no-use-before-define
  cleanForm();
};

const cleanForm = function () {
  downloadButton.value = '';
  hashtag.value = '';
  comment.value = '';
  scaleValue.value = '100%';
  preview.style = `transform: scale(${parseInt(scaleValue.value, 10) / 100})`;
  clearEffect();
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!validateComment(comment.value || !validateHashtag(hashtag.value))) {
    // eslint-disable-next-line no-console
    return (console.log('nonvalidate comment'));
  }
  const formData = new FormData(e.target);
  fetch(
    BACKEND_URL,
    {
      method: 'POST',
      body: formData,
    }
  )
    .then((response) => {
      if (response.ok) {
        closeWindow();
        openSuccess();
      } else {
        openError();
      }
    })
    .catch(openError);
});

downloadButton.addEventListener('change', () => { openWindow(); });

cancelButton.addEventListener('click', () => {closeWindow(); });

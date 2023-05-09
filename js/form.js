const downloadButton = document.querySelector('#upload-file');
const cancelButton = document.querySelector('#upload-cancel');
const hashtag = document.querySelector('.text__hashtags');
const comment = document.querySelector('.text__description');
const overlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');

const escKey = function (evt) {
  if (evt.key === 'Escape'){
    evt.preventDefault();
    // eslint-disable-next-line no-use-before-define
    closeDownloadWindow();
  }
};

const openDownloadWindow = function () {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
  body.addEventListener('keydown', escKey);
};

const cleanForm = function () {
  downloadButton.value = '';
  hashtag.value = '';
  comment.value = '';
};

const closeDownloadWindow = function () {
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', escKey);
  cleanForm();
};

downloadButton.addEventListener('change', () => { openDownloadWindow(); });

cancelButton.addEventListener('click', () => {closeDownloadWindow(); });


const success = document.querySelector('#success').content.querySelector('.success');
const successButton = success.querySelector('.success__button');

const error = document.querySelector('#error').content.querySelector('.error');
const errorButton = error.querySelector('.error__button');

const escSucces = function (e) {
  if (e.key === 'Escape'){
    e.preventDefault();
    // eslint-disable-next-line no-use-before-define
    closeSuccess();
  }
};

const escError = function (e) {
  if (e.key === 'Escape'){
    e.preventDefault();
    // eslint-disable-next-line no-use-before-define
    closeError();
  }
};


const closeSuccess = function () {
  success.classList.add('hidden');
  document.removeEventListener('click', closeSuccess);
  document.removeEventListener('keydown', escSucces);
};

const closeError = function (){
  error.classList.add('hidden');
  document.body.classList.add('modal-open');
  document.removeEventListener('click', closeError);
  document.removeEventListener('keydown', escError);
};

export const openSuccess = function (){
  document.addEventListener('click', closeSuccess);
  successButton.addEventListener('click', () => {
    closeSuccess();
  });
  success.classList.remove('hidden');
  document.body.append(success);
  document.addEventListener('keydown', escSucces);
};

export const openError= function (){
  document.addEventListener('click', closeError);
  errorButton.addEventListener('click', () => {
    closeError();
  });
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  error.classList.remove('hidden');
  document.body.classList.remove('modal-open');
  document.body.append(error);
  document.addEventListener('keydown', escError);
};

const preview = document.querySelector('.img-upload__preview');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleSmaller = document.querySelector('.scale__control--smaller');
export const scaleValue = document.querySelector('.scale__control--value');

const scaleFunction = function (sign, img, scale) {
  const curScale = parseInt(scale.value, 10);
  if (sign === 1 && curScale < 100 || sign === -1 && curScale > 25){
    scale.value = `${curScale + sign * 25}%`;
    img.style = `transform: scale(${parseInt(scale.value, 10) / 100})`;
  }
};

scaleBigger.addEventListener('click', () => {
  scaleFunction (1, preview, scaleValue);
});

scaleSmaller.addEventListener('click', () => {
  scaleFunction (-1, preview, scaleValue);
});

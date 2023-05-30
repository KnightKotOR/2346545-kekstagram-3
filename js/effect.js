const preview = document.querySelector('.img-upload__preview');
const effects = document.querySelector('.img-upload__effects').querySelectorAll('input[name="effect"]');

export const sliderElement = document.querySelector('.effect-level__slider');
const sliderValue = document.querySelector('.effect-level__value');

let newEffect = document.querySelector('.img-upload__effects').querySelectorAll('input[name="effect"]:checked');
export let curEffect = 'effects__preview--none';

function effectChanger(e) {
  for (const effect of effects){
    if (effect.checked){
      newEffect = effect;
      const effectClass = `effects__preview--${newEffect.value}`;
      preview.classList.remove(curEffect);
      preview.classList.add(effectClass);
      curEffect = effectClass;
      setSlider(e.target.value);
    }
  }
}

export function clearEffect() {
  document.querySelector('.img-upload__effects').querySelector('input[id="effect-none"]').checked = true;
  newEffect = 'effects__preview--none';
  sliderElement.classList.add('visually-hidden');
  effectChanger();
}

for (const effect of effects){
  effect.addEventListener('input', (e) => {effectChanger(e);});
}

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});

sliderElement.classList.add('visually-hidden');
sliderValue.value = 100;

sliderElement.noUiSlider.on('update', () => {
  sliderValue.value = sliderElement.noUiSlider.get();
  changeStyle(sliderValue.value);
});

function setSlider(arg) {
  if (arg === 'none') {
    sliderElement.classList.add('visually-hidden');
    preview.style.filter = '';
  }
  if (arg === 'chrome') {
    sliderElement.classList.remove('visually-hidden');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    });
  }
  if (arg === 'sepia') {
    sliderElement.classList.remove('visually-hidden');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    });
  }
  if (arg === 'marvin') {
    sliderElement.classList.remove('visually-hidden');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100
      },
      start: 100,
      step: 1
    });
  }
  if (arg === 'phobos') {
    sliderElement.classList.remove('visually-hidden');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3
      },
      start: 3,
      step: 0.1
    });
  }
  if (arg === 'heat') {
    sliderElement.classList.remove('visually-hidden');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3
      },
      start: 3,
      step: 0.1
    });
  }
}

function changeStyle(value) {
  for (const className of preview.classList) {
    if (className === 'effects__preview--chrome') {
      preview.style = `filter: grayscale(${value})`;
    }
    if (className === 'effects__preview--sepia') {
      preview.style = `filter: sepia(${value})`;
    }
    if (className === 'effects__preview--marvin') {
      preview.style = `filter: invert(${value}%)`;
    }
    if (className === 'effects__preview--phobos') {
      preview.style = `filter: blur(${value}px)`;
    }
    if (className === 'effects__preview--heat') {
      preview.style = `filter: brightness(${value})`;
    }
  }
}

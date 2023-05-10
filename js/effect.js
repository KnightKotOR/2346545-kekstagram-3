const preview = document.querySelector('.img-upload__preview');
const effects = document.querySelector('.img-upload__effects').querySelectorAll('input[name="effect"]');

let newEffect = document.querySelector('.img-upload__effects').querySelectorAll('input[name="effect"]:checked');
export let curEffect = 'effects__preview--none';

const effectChanger = function () {
  for (const effect of effects){
    if (effect.checked){
      newEffect = effect;
      const effectClass = `effects__preview--${newEffect.value}`;
      preview.classList.remove(curEffect);
      preview.classList.add(effectClass);
      curEffect = effectClass;
    }
  }
};

export const clearEffect = function () {
  document.querySelector('.img-upload__effects').querySelector('input[id="effect-none"]').checked = true;
  newEffect = 'effects__preview--none';
  effectChanger();
};

for (const effect of effects){
  effect.addEventListener('input', () => {effectChanger();});
}

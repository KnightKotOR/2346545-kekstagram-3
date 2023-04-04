const picTemplate = document.querySelector('#picture');
const picContainer = document.querySelector('.pictures');

export function insertMin(photos) {
  const pictureFragment = document.createDocumentFragment();
  for (const {url, likes, comments} of photos) {
    const picture = picTemplate.cloneNode(true).content;
    picture.querySelector('.picture__img').src = url;
    picture.querySelector('.picture__likes').textContent = likes;
    picture.querySelector('.picture__comments').textContent = comments.length;
    pictureFragment.appendChild(picture);
  }

  picContainer.appendChild(pictureFragment);
}

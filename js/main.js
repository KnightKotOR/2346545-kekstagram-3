//Задание 7 часть 2

import { generatePhotos } from './data.js';
import { insertMin } from './picMin.js';
import './form.js';
import './formValidator.js';

const pictures = generatePhotos(25);
insertMin(pictures);

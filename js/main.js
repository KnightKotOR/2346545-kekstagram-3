import { generatePhotos } from './data.js';
import { insertMin } from './picMin.js';

const pictures = generatePhotos(25);
console.log(pictures);
insertMin(pictures);

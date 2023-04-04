import { randInt } from './util.js';

const generatePhoto = (n) => ({
  id: n,
  url: `photos/${ n + 1 }.jpg`,
  description: `jpg № ${ n }`,
  likes: randInt(15, 200),
  comments: randInt(0, 200),
});

export const generatePhotos = (n) => {
  const data = [];
  for (let i = 0; i < n; i++) {
    data[i] = generatePhoto(i+1);
  }
  return data;
};

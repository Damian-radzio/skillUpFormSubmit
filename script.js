const memes = [
  './img/img1.webp',
  './img/img2.webp',
  './img/img3.webp',
  './img/img4.webp',
];

const chosenMeme = memes[Math.floor(Math.random() * memes.length)];
document.querySelector('.random-meme').src = chosenMeme;

require('../scss/styles.scss');
import { roundTo } from './util.js';

const init = () => {
  const letters = document.querySelectorAll('.letter');
  const letterBBox = letters[0].getBoundingClientRect();
  const scaleY = roundTo(window.innerHeight / letterBBox.height, 2);
  [...letters].forEach((letter) => {
    letter.style.transform = `scaleY(${scaleY})`;
  });
};

document.addEventListener('DOMContentLoaded', init);
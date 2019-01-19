require('../scss/styles.scss');
import { roundTo } from './util.js';

const init = () => {
  const container = document.querySelector('.grid');
  const containerBBox = container.getBoundingClientRect();
  const letters = document.querySelectorAll('.letter');
  const letterBBox = letters[0].getBoundingClientRect();
  const scaleY = roundTo(containerBBox.height / letterBBox.height, 2);
  [...letters].forEach((letter) => {
    letter.style.transform = `scaleY(${scaleY})`;
  });
};

document.addEventListener('DOMContentLoaded', init);
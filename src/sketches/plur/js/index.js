require('../scss/styles.scss');
import { roundTo } from './util.js';

const init = () => {
  const cells = document.querySelectorAll('.cell');
  console.log('cells length', cells.length);
  [...cells].map((cell) => {
    const cellBBox = cell.getBoundingClientRect();
    const cellWidth = cellBBox.width;
    const cellHeight = cellBBox.height;

    const letters = cell.querySelectorAll('.letter');
    [...letters].forEach((letter) => {
      const letterBBox = letter.getBoundingClientRect();
      const letterWidth = letterBBox.width;
      const letterHeight = letterBBox.height;

      const scaleX = roundTo(cellWidth / letterWidth, 2);
      const scaleY = roundTo((cellHeight * 2) / letterHeight, 2);
      letter.style.transform = `scale(${scaleX}, ${scaleY})`;
    });

  })
};

document.addEventListener('DOMContentLoaded', init);
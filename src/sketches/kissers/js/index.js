import '../scss/styles.scss';

const randomInteger = (min, max) => {
  return Math.floor(Math.random()*(max-min+1)+min);
};

const getRandomColor = () => {
  const channels = Array.from({length : 3}).map(_ => randomInteger(0, 255));
  return `rgb(${channels.join(',')})`;
};

const getRandomHueRotation = () => {
  return `${randomInteger(0, 360)}deg`;
}

const init = () => {
  const left = document.getElementById('left');
  const right = document.getElementById('right');
  const thresholdForContact = 0.05;
  window.addEventListener('mousemove', e => {
    const distanceFromCenter = Math.abs(e.clientX / window.innerWidth - 0.5) * 2;

    if (distanceFromCenter < thresholdForContact) {
      left.style.filter = `hue-rotate(${getRandomHueRotation()})`;
      right.style.filter = `hue-rotate(${getRandomHueRotation()})`;
      // left.style.backgroundColor = getRandomColor();
      // right.style.backgroundColor = getRandomColor();
    }

    const overlapArea = 1.145;
    const leftTranslate = (distanceFromCenter * overlapArea + (1 - overlapArea)) * -100;
    const rightTranslate = (distanceFromCenter * overlapArea + (1 - overlapArea)) * 100;
    left.style.transform = `translateX(${leftTranslate}%)`;
    right.style.transform = `translateX(${rightTranslate}%)`;

  });
};

document.addEventListener('DOMContentLoaded', init);
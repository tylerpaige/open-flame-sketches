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
  const rightTop = document.getElementById('right-top');
  const rightBottom = document.getElementById('right-bottom');
  const thresholdForContact = 0.05;
  const overlapArea = 1.17;
  window.addEventListener('mousemove', e => {
    const distanceFromCenter = Math.abs(e.clientX / window.innerWidth - 0.5) * 2;
  
    if (distanceFromCenter < thresholdForContact) {
      left.style.filter = `hue-rotate(${getRandomHueRotation()})`;
      const rightHue = getRandomHueRotation();
      rightTop.style.filter = `hue-rotate(${rightHue})`;
      rightBottom.style.filter = `hue-rotate(${rightHue})`;
    }

    const leftTranslate = (distanceFromCenter * overlapArea + (1 - overlapArea)) * -100;
    const rightTranslate = (distanceFromCenter * overlapArea + (1 - overlapArea)) * 100;
    left.style.transform = `translateX(${leftTranslate}%)`;
    rightTop.style.transform = `translateX(${rightTranslate}%)`;
    rightBottom.style.transform = `translateX(${rightTranslate}%)`;

  });
};

document.addEventListener('DOMContentLoaded', init);
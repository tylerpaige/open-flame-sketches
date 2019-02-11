import '../scss/styles.scss';
import { throttle } from 'lodash';

const randomInteger = (min, max) => {
  return Math.floor(Math.random()*(max-min+1)+min);
};

const getRandomColor = () => {
  const channels = Array.from({length : 3}).map(_ => randomInteger(0, 255));
  return `rgb(${channels.join(',')})`;
};

const getRandomHueRotation = () => {
  return `${randomInteger(0, 360)}deg`;
};

const swapColors = throttle((els, distanceFromCenter, thresholdForContact, force = false) => {
  if (force || distanceFromCenter < thresholdForContact) {
    els.left.style.filter = `hue-rotate(${getRandomHueRotation()})`;
    const rightHue = getRandomHueRotation();
    els.rightTop.style.filter = `hue-rotate(${rightHue})`;
    els.rightBottom.style.filter = `hue-rotate(${rightHue})`;
  }
}, 100);

const moveTogether = (els, thresholdForContact, overlapArea, distanceFromCenter) => {
  
  swapColors(els, distanceFromCenter, thresholdForContact);
  const imgWidthInVw = (window.innerHeight * (490 / 671)) / window.innerWidth * 100;
  const overlap = overlapArea * imgWidthInVw;
  const leftTranslate = (1 - distanceFromCenter) * (50 + overlap);
  const rightTranslate = -1 * (1 - distanceFromCenter) * (50 + overlap);
  els.left.style.transform = `translateX(${leftTranslate}vw)`;
  els.rightTop.style.transform = `translateX(${rightTranslate}vw)`;
  els.rightBottom.style.transform = `translateX(${rightTranslate}vw)`;
};

const handleMouseMove = throttle((e, els, thresholdForContact, overlapArea) => {
  const distanceFromCenter = Math.abs(e.clientX / window.innerWidth - 0.5) * 2;
  moveTogether(els, thresholdForContact, overlapArea, distanceFromCenter);
}, 100);


const init = () => {
  const left = document.getElementById('left');
  const rightTop = document.getElementById('right-top');
  const rightBottom = document.getElementById('right-bottom');
  const els = { left, rightTop, rightBottom };
  const thresholdForContact = 0.05;
  const overlapArea = 0.1;

  swapColors(els, 0, thresholdForContact, true);

  window.addEventListener('mousemove', e => {
    handleMouseMove(e, els, thresholdForContact, overlapArea)
  });

  let interval;
  let mobileDistanceMock = 1;
  let shouldReset = false;
  window.addEventListener('touchstart', () => {
    interval = setInterval(() => {
      moveTogether(els, thresholdForContact, overlapArea, mobileDistanceMock);
      if (mobileDistanceMock > 0) {
        mobileDistanceMock -= 0.05;
      } else {
        shouldReset = true;
      }
    }, 100);
  });

  window.addEventListener('touchend', () => {
    clearInterval(interval);

    if (shouldReset) {
      mobileDistanceMock = 1;
      shouldReset = false;
    }
  });

  window.addEventListener('touchcancel', () => {
    clearInterval(interval);
    mobileDistanceMock = 1;
  });

};

document.addEventListener('DOMContentLoaded', init);
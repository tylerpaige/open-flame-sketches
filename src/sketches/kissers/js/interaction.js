import { throttle } from 'lodash';

let RAF;
let MOBILE_DISTANCE_SAVER;

const randomInteger = (min, max) => {
  return Math.floor(Math.random()*(max-min+1)+min);
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

const mobileLoop = (startTime, endTime, els, thresholdForContact, overlapArea) => {
  const now = new Date().getTime();
  let distance = 1 - (now - startTime) / (endTime - startTime);
  distance = distance < 0 ? 0 : distance;
  MOBILE_DISTANCE_SAVER = distance;
  moveTogether(els, thresholdForContact, overlapArea, distance);

  RAF = requestAnimationFrame(() => {
    mobileLoop(startTime, endTime, els, thresholdForContact, overlapArea)
  });
};

const mobileResetLoop = (startTime, endTime, els, thresholdForContact, overlapArea) => {
  const now = new Date().getTime();
  const progress = (now - startTime) / (endTime - startTime);
  const end = 1;
  const start = MOBILE_DISTANCE_SAVER;
  const distance = (end - start) * progress + start;
  moveTogether(els, thresholdForContact, overlapArea, distance);

  if (distance < 1) {
    RAF = requestAnimationFrame(() => {
      mobileResetLoop(startTime, endTime, els, thresholdForContact, overlapArea)
    });
  } 
};



export default () => { 
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

  window.addEventListener('touchstart', () => {
    const startTime = new Date().getTime();
    const duration = 2000;
    const endTime = startTime + duration;
    mobileLoop(startTime, endTime, els, thresholdForContact, overlapArea);
  });

  window.addEventListener('touchend', () => {
    cancelAnimationFrame(RAF);
    const startTime = new Date().getTime();
    const duration = 300;
    const endTime = startTime + duration;
    mobileResetLoop(startTime, endTime, els, thresholdForContact, overlapArea);
  });

};


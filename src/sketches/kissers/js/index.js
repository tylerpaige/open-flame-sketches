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

const moveTogether = (els, thresholdForContact, overlapArea, distanceFromCenter) => {
  if (distanceFromCenter < thresholdForContact) {
    els.left.style.filter = `hue-rotate(${getRandomHueRotation()})`;
    const rightHue = getRandomHueRotation();
    els.rightTop.style.filter = `hue-rotate(${rightHue})`;
    els.rightBottom.style.filter = `hue-rotate(${rightHue})`;
  }

  const leftTranslate = (distanceFromCenter * overlapArea + (1 - overlapArea)) * -100;
  const rightTranslate = (distanceFromCenter * overlapArea + (1 - overlapArea)) * 100;
  els.left.style.transform = `translateX(${leftTranslate}%)`;
  els.rightTop.style.transform = `translateX(${rightTranslate}%)`;
  els.rightBottom.style.transform = `translateX(${rightTranslate}%)`;
};


const init = () => {
  const left = document.getElementById('left');
  const rightTop = document.getElementById('right-top');
  const rightBottom = document.getElementById('right-bottom');
  const els = { left, rightTop, rightBottom };
  const thresholdForContact = 0.05;
  const overlapArea = 1.17;
  window.addEventListener('mousemove', e => {
    const distanceFromCenter = Math.abs(e.clientX / window.innerWidth - 0.5) * 2;
    moveTogether(els, thresholdForContact, overlapArea, distanceFromCenter);
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
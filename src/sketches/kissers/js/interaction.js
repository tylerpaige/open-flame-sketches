import { throttle } from 'lodash';

let RAF;
let SHOULD_RESET;

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
  const distance = 1 - (now - startTime) / (endTime - startTime);
  const resetStartTime = now >= endTime ? now : startTime;
  const resetEndTime = now >= endTime ? now + 2000 : endTime;
  moveTogether(els, thresholdForContact, overlapArea, distance);

  RAF = requestAnimationFrame(() => {
    mobileLoop(resetStartTime, resetEndTime, els, thresholdForContact, overlapArea)
  });
};

const isChrome = () => {
  // please note, 
  // that IE11 now returns undefined again for window.chrome
  // and new Opera 30 outputs true for window.chrome
  // but needs to check if window.opr is not undefined
  // and new IE Edge outputs to true now for window.chrome
  // and if not iOS Chrome check
  // so use the below updated condition
  var isChromium = window.chrome;
  var winNav = window.navigator;
  var vendorName = winNav.vendor;
  var isOpera = typeof window.opr !== "undefined";
  var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
  var isIOSChrome = winNav.userAgent.match("CriOS");

  if (isIOSChrome) {
    return false;
  } else if(
    isChromium !== null &&
    typeof isChromium !== "undefined" &&
    vendorName === "Google Inc." &&
    isOpera === false &&
    isIEedge === false
  ) {
    // is Google Chrome
    return true;
  } else { 
    return false;
  }
}


export default () => {
  if (isChrome()) {
    document.body.classList.add('is-chrome');
  }

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
  });

  window.addEventListener('touchcancel', () => {
    cancelAnimationFrame(RAF);
  });

};


const open = document.querySelectorAll('.open');
const dropDownOpener = document.querySelectorAll('.dropDownOpener');
const menuBtn = document.querySelector('.menu-btn');
const header = document.querySelector('.header');
const [prevButton, nextButton] = document.querySelector('.slider').children;
const slides = document.querySelectorAll('.slides .slide');
const isMobile = /iphone|ipod|android|ie|blackberry|fennec/.test(
  navigator.userAgent.toLowerCase()
);

let currentSlide = 0;
let menu = false;

open.forEach(item => {
  item.onclick = e => {
    e.target.parentNode.classList.toggle('active');
  };
});

menuBtn.onclick = () => {
  header.classList.toggle('opened');
  menu = !menu;
  document.body.style.overflow = menu ? 'hidden' : 'unset';
};

dropDownOpener.forEach(item => {
  item.onclick = e => {
    e.target.parentNode.classList.toggle('active');
  };
});

//SCROLL EFFECT

window.addEventListener('scroll', e => {
  if (window.pageYOffset === 0) {
    header.classList.remove('white');
  } else {
    header.classList.add('white');
  }
});

//SLIDER

function changeSlide(param) {
  slides[currentSlide].className = 'slide';
  currentSlide =
    param === 'next'
      ? (currentSlide + 1) % slides.length
      : (currentSlide - 1) % slides.length;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  slides[currentSlide].className = 'slide showing';
}

nextButton.onclick = e => {
  changeSlide('next');
};
prevButton.onclick = e => {
  changeSlide('prev');
};

function detectSwipe(id, f) {
  let detect = {
      startX: 0,
      startY: 0,
      endX: 0,
      endY: 0,
      minX: 30,
      maxX: 30,
      minY: 50,
      maxY: 60
    },
    direction = null,
    element = document.getElementById(id);

  element.addEventListener('touchstart', function(event) {
    let touch = event.touches[0];
    detect.startX = touch.screenX;
    detect.startY = touch.screenY;
  });

  element.addEventListener('touchmove', function(event) {
    event.preventDefault();
    let touch = event.touches[0];
    detect.endX = touch.screenX;
    detect.endY = touch.screenY;
  });

  element.addEventListener('touchend', function(event) {
    if (
      Math.abs(detect.endX - detect.startX) > detect.minX &&
      Math.abs(detect.endY - detect.startY) < detect.maxY
    ) {
      direction = detect.endX > detect.startX ? 'right' : 'left';
    } else if (
      Math.abs(detect.endY - detect.startY) > detect.minY &&
      Math.abs(detect.endX - detect.startX) < detect.maxX
    ) {
      direction = detect.endY > detect.startY ? 'down' : 'up';
    }

    if (direction !== null && typeof f === 'function') {
      f(element, direction);
    }
  });
}
if (isMobile) {
  const autoPlay = setInterval(() => {
    changeSlide('next');
  }, 3000);
  const callSlideChanger = (el, dir) => {
    clearInterval(autoPlay);
    if (dir === 'left') {
      changeSlide('next');
    } else if (dir === 'right') {
      changeSlide('prev');
    }
  };
  detectSwipe('slider', callSlideChanger);
}



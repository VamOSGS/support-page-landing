const open = document.querySelectorAll('.open');
const dropDownOpener = document.querySelectorAll('.dropDownOpener');
const menuBtn = document.querySelector('.menu-btn');
const header = document.querySelector('.header');
const [prevButton, nextButton] = document.querySelector('.slider').children;
let slides = document.querySelectorAll('.slides .slide');
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

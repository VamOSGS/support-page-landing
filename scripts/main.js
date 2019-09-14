const open = document.querySelectorAll('.open');
const dropDownOpener = document.querySelectorAll('.dropDownOpener');
const menuBtn = document.querySelector('.menu-btn');
const header = document.querySelector('.header');
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

window.addEventListener('scroll', e => {
  if (window.pageYOffset === 0) {
    header.classList.remove('white');
  } else {
    header.classList.add('white');
  }
});

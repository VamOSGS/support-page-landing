const open = document.querySelectorAll('.open');
const dropDownOpener = document.querySelectorAll('.dropDownOpener');
const menuBtn = document.querySelector('.menu-btn');
const header = document.querySelector('.header');

open.forEach(item => {
  item.onclick = e => {
    e.target.parentNode.classList.toggle('active');
  };
});
dropDownOpener.onmouseover = e => {
  e.target.parentNode.classList.toggle('active');
};

menuBtn.onclick = () => {
  header.classList.toggle('opened');
};

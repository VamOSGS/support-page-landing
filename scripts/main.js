const open = document.querySelectorAll('.open');
const dropDownOpener = document.querySelectorAll('.dropDownOpener');
open.forEach(item => {
  item.onclick = e => {
    e.target.parentNode.classList.toggle('active');
  };
});
dropDownOpener.onmouseover = (e) => {
  e.target.parentNode.classList.toggle('active')
}
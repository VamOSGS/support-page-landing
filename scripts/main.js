const open = document.querySelectorAll('.open');
open.forEach(item => {
  item.onclick = e => {
    e.target.parentNode.classList.toggle('active');
  };
});

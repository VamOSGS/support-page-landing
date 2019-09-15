document.body.style.overflow = 'hidden';
document.body.style.height = '100%';
document.body.style.width = '100%';
document.body.style.position = 'fixed';

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    setTimeout(() => {
      document.querySelector('#preloader').classList.add('closed');
      document.body.style.overflow = 'unset';
      document.body.style.height = 'unset';
      document.body.style.width = 'unset';
      document.body.style.position = 'unset';
    }, 1500);
  }
};

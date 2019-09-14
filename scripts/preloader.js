document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    setTimeout(() => {
      document.querySelector('#preloader').classList.add('closed');
    }, 1500);
  }
};

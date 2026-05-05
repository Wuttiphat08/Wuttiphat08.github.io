let lastScroll = 0;
const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  
  if (currentScroll > lastScroll) {
    nav.style.top = '-70px';
  } else {
    nav.style.top = '0';
  }
  
  lastScroll = currentScroll;
});
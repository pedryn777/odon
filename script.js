const elements = document.querySelectorAll('section, header');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    const screen = window.innerHeight / 1.2;

    if (pos < screen) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});

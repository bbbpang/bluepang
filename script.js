function toggleWeek(el) {
  const content = el.nextElementSibling.nextElementSibling;
  const arrow = el.querySelector('.arrow');
  content.classList.toggle('open');

  if (content.classList.contains('open')) {
    arrow.style.transform = 'rotate(90deg)';
  } else {
    arrow.style.transform = 'rotate(0deg)';
  }
}

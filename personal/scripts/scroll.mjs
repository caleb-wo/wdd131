const scrollContainer = document.querySelector('#scrolling-menu');
scrollContainer.addEventListener('wheel', (evt) => {
const scrollLeft = scrollContainer.scrollLeft + evt.deltaX;
  scrollContainer.scrollLeft = scrollLeft;
});
  
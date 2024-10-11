const menuButton = document.getElementById('menu');
const header = document.getElementById('header');

menuButton.addEventListener('click', () => {
  header.classList.toggle('menu-active');
});

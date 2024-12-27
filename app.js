const homeLink = document.getElementById('home-link');
const dropdownMenu = document.getElementById('dropdown-menu');

homeLink.addEventListener('mouseover', () => {
  dropdownMenu.style.display = 'block';
});

homeLink.addEventListener('mouseout', () => {
  dropdownMenu.style.display = 'none';
});

const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', (event) => {
  event.preventDefault(); 
  window.location.href = loginBtn.getAttribute('href'); 
});

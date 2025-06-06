
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.classList.add("fade-out");

  // Optional: fully remove it from the DOM after fade-out
  setTimeout(() => {
    loader.remove();
  }, 3000); // Match this with your CSS transition duration
});
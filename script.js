
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

function revealOnScroll() {
  const reveals = document.querySelectorAll(".project-card");

  for (let el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);


function typeWriter(text, element, speed = 80) {
  let i = 0;
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  element.textContent = ""; // Clear current text
  type();
}

document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector(".hero-text h1");
  const originalText = "Growing One Line of Code at a Time";
  typeWriter(originalText, heading);
});

const backToTop = document.getElementById("backToTop");

window.onscroll = function () {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

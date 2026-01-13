// Mobile navbar toggle
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});


  

// Scroll animation
const elements = document.querySelectorAll(
  ".info-card, .contact-form"
);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

elements.forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});


const footer = document.querySelector(".footer");

const footerObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

footerObserver.observe(footer);

import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll('.tech-card');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Animate only once per card
      }
    });
  }, { threshold: 0.15 });

  cards.forEach(card => observer.observe(card));
});

window.addEventListener("load", function(){
  const loader = document.getElementById('loader');
  if(loader){
    loader.style.opacity = 0;
    setTimeout(() => loader.style.display = 'none', 500);
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const timelineItems = document.querySelectorAll('.timeline-item');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Animate only once
      }
    });
  }, { threshold: 0.15 });

  timelineItems.forEach(item => observer.observe(item));
});

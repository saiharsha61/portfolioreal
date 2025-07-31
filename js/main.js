// Fade-in animation on scroll
function revealSections() {
  document.querySelectorAll('.fade-in').forEach(sec => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      sec.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealSections);
window.addEventListener('DOMContentLoaded', revealSections);

// Smooth scrolling for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const el = document.querySelector(this.getAttribute('href'));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form dummy handler
document.addEventListener('DOMContentLoaded', function() {
  var form = document.getElementById('contactForm');
  if(form) {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      alert('Thank you for your message! (Connect with a service like Formspree to send real emails.)');
      form.reset();
    });
  }
});

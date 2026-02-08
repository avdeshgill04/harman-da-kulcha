// Harman da Kulcha — mobile menu & smooth behavior

document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('is-open');
      toggle.setAttribute('aria-label', navLinks.classList.contains('is-open') ? 'Close menu' : 'Open menu');
    });

    // Close menu when a link is clicked (for anchor links)
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('is-open');
      });
    });
  }
});

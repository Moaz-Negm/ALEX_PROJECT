// // Mobile nav toggle
// var navToggleButton = document.querySelector('.nav-toggle');
// var navMenu = document.getElementById('nav-menu');
// if (navToggleButton && navMenu) {
//   navToggleButton.addEventListener('click', function () {
//     var isOpen = navMenu.getAttribute('data-open') === 'true';
//     navMenu.setAttribute('data-open', String(!isOpen));
//     navToggleButton.setAttribute('aria-expanded', String(!isOpen));
//   });
// }

// // Year in footer
// var yearEl = document.getElementById('year');
// if (yearEl) {
//   yearEl.textContent = String(new Date().getFullYear());
// }

// // Close mobile menu when clicking anchor links
// document.addEventListener('click', function (e) {
//   var target = e.target;
//   if (target && target.matches && target.matches('a[href^="#"]')) {
//     if (navMenu && navMenu.getAttribute('data-open') === 'true') {
//       navMenu.setAttribute('data-open', 'false');
//       if (navToggleButton) navToggleButton.setAttribute('aria-expanded', 'false');
//     }
//   }
// });

// // Contact form handler (client-side only demo)
// var contactForm = document.getElementById('contact-form');
// if (contactForm) {
//   var statusEl = contactForm.querySelector('.form-status');
//   contactForm.addEventListener('submit', function (e) {
//     e.preventDefault();
//     if (!contactForm.checkValidity()) {
//       if (statusEl) statusEl.textContent = 'Please fill in all required fields correctly.';
//       return;
//     }
//     if (statusEl) statusEl.textContent = 'Thanks! Your message has been sent.';
//     contactForm.reset();
//   });
// }



const toggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark');

    themeIcon.src = body.classList.contains('dark')
     ? "images/sun.png"
     : "images/night.png";

})

const contactToggle = document.getElementById('contact-toggle');
const contactOptions = document.getElementById('contact-options');

contactToggle.addEventListener('click', () => {
  contactOptions.style.display =
    contactOptions.style.display === 'flex' ? 'none' : 'flex';
});


   
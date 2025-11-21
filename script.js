// Smooth scroll for in-page navigation
const navLinks = document.querySelectorAll('.nav a, .btn-primary[href^="#"]');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    const targetId = link.getAttribute('href');
    if (targetId.startsWith('#')) {
      event.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Simple form handling
const form = document.getElementById('booking-form');
const messageEl = document.getElementById('form-message');

form.addEventListener('submit', event => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const age = document.getElementById('age').value.trim();
  const sessionType = document.getElementById('sessionType').value;
  const availability = document.getElementById('availability').value.trim();
  const notes = document.getElementById('notes').value.trim();

  if (!name || !email || !age || !sessionType) {
    messageEl.textContent = 'Please fill in all required fields before sending.';
    messageEl.classList.add('error');
    return;
  }

  const emailTo = 'bookings@jttrauma.example';
  const subject = encodeURIComponent('New JT Trauma Therapy Booking Request');
  const bodyLines = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Age: ${age}`,
    `Preferred session type: ${sessionType}`,
    `Availability: ${availability || 'Not specified'}`,
    '',
    'Notes:',
    notes || 'No additional notes provided.'
  ];
  const body = encodeURIComponent(bodyLines.join('\n'));

  const mailtoLink = `mailto:${emailTo}?subject=${subject}&body=${body}`;
  window.location.href = mailtoLink;

  // Redirect to thank you page
  setTimeout(() => {
    window.location.href = 'thankyou.html';
  }, 500);
});

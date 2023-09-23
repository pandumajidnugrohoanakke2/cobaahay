// JavaScript for smooth scrolling to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
  
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // JavaScript for displaying current year in the footer
  const currentYear = new Date().getFullYear();
  document.querySelector('footer p').innerHTML = `Copyright &copy; ${currentYear} pandumajidnugroho`;
  
  // JavaScript for contact form validation
  const contactForm = document.getElementById('contact-form');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  
  contactForm.addEventListener('submit', function(e) {
    let valid = true;
  
    if (!isValidEmail(emailInput.value)) {
      valid = false;
      alert('Email tidak valid');
    }
  
    if (!isValidPhone(phoneInput.value)) {
      valid = false;
      alert('Nomor telepon tidak valid');
    }
  
    if (!valid) {
      e.preventDefault();
    }
  });
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function isValidPhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }
  
  // JavaScript for interactive portfolio gallery
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  portfolioItems.forEach(item => {
    item.addEventListener('click', function() {
      // You can implement your own logic here to display portfolio details or open a modal.
      alert('Klik pada portofolio item: ' + item.querySelector('h3').textContent);
    });
  });
  
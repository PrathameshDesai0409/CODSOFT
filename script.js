document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('nav ul li a[href^="#"]');
  
  for (const link of links) {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop - 80,
        behavior: 'smooth'
      });
    });
  }
});

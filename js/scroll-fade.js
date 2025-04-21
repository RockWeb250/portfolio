document.addEventListener("scroll", function() {
    const fadeElements = document.querySelectorAll('.fade-on-scroll');
    fadeElements.forEach(function(element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight) {
        element.classList.add('visible');
      }
    });
  });
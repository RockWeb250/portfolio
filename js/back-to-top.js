// Script pour le bouton de retour vers le haut
document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');
    
    // Apparaît quand on scrolle vers le bas
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    });
    
    // Retour en haut avec animation douce
    backToTopButton.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Ajoute une classe pour l'animation au clic
      backToTopButton.classList.add('clicked');
      
      // Animation de scroll vers le haut
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      
      // Retire la classe d'animation après
      setTimeout(() => {
        backToTopButton.classList.remove('clicked');
      }, 600);
    });
  });
// Script pour le bouton de retour vers le haut
document.addEventListener('DOMContentLoaded', function() {
  const backToTopButton = document.getElementById('back-to-top');
  
  // Gestion de l'apparition/disparition du bouton lors du scroll
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('visible');
      backToTopButton.classList.remove('hidden');
    } else {
      // Ajoute la classe "hidden" pour l'animation de disparition
      backToTopButton.classList.add('hidden');
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
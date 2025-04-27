document.addEventListener('DOMContentLoaded', function() {
  // Récupérer les éléments
  const cvButton = document.getElementById('cv-button');
  const modal = document.getElementById('cv-modal');
  const closeButton = document.querySelector('.modal-close');
  
  // Ouvrir la modal au clic sur le bouton CV
  cvButton.addEventListener('click', function(e) {
    e.preventDefault();
    modal.classList.add('active');
    // Empêcher le défilement du body quand la modal est ouverte
    document.body.style.overflow = 'hidden';
  });
  
  // Fermer la modal
  closeButton.addEventListener('click', function() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  });
  
  // Fermer la modal en cliquant en dehors du contenu
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
  
  // Fermer la modal avec la touche Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});

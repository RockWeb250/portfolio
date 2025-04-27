document.addEventListener('DOMContentLoaded', function() {
    // Créer le bouton hamburger
    const navbarToggle = document.createElement('div');
    navbarToggle.className = 'navbar-toggle';
    
    // Ajouter les 3 barres
    for (let i = 0; i < 3; i++) {
      const span = document.createElement('span');
      navbarToggle.appendChild(span);
    }
    
    // Insérer le menu hamburger dans la navbar
    const navbar = document.querySelector('.navbar .container');
    const links = document.querySelector('.navbar-links');
    navbar.insertBefore(navbarToggle, links);
    
    // Ajouter la fonctionnalité de toggle
    navbarToggle.addEventListener('click', function() {
      this.classList.toggle('active');
      links.classList.toggle('active');
    });
    
    // Fermer le menu quand on clique sur un lien
    const navLinks = document.querySelectorAll('.navbar-links a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navbarToggle.classList.remove('active');
        links.classList.remove('active');
      });
    });
  });
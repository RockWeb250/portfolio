document.addEventListener('DOMContentLoaded', function() {
    // Récupérer tous les liens qui pointent vers des ancres sur la page d'index
    const anchors = document.querySelectorAll('a[href^="index.html#"]');
    
    // Pour chaque lien
    anchors.forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        // Si nous sommes déjà sur la page index
        if (window.location.pathname.endsWith('index.html') || 
            window.location.pathname.endsWith('/')) {
          e.preventDefault();
          
          // Extraire l'ID de l'ancre
          const href = this.getAttribute('href');
          const targetId = href.substring(href.indexOf('#') + 1);
          const targetElement = document.getElementById(targetId);
          
          // Si l'élément cible existe
          if (targetElement) {
            // Défilement fluide vers l'élément
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
            
            // Mettre à jour l'URL sans recharger la page
            history.pushState(null, null, `#${targetId}`);
          }
        }
        // Sinon, laisse le navigateur gérer le lien normalement
      });
    });
  
    // Gestion du retour via ancre lors du chargement de la page
    window.addEventListener('load', function() {
      if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          setTimeout(() => {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }, 300); // Petit délai pour s'assurer que la page est entièrement chargée
        }
      }
    });
  });
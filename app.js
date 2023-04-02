// Vérifiez si le navigateur prend en charge l'API Fullscreen de JavaScript
if (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) {
  // Activez le mode plein écran lorsque la page est chargée
  document.documentElement.requestFullscreen();

  // Enregistrez l'état du mode plein écran dans le stockage local du navigateur
  localStorage.setItem('fullscreen', 'true');

  // Ajoutez un événement pour désactiver le mode plein écran lorsque l'utilisateur appuie sur la touche "Escape"
  document.addEventListener('fullscreenchange', function(event) {
    if (!document.fullscreenElement) {
      localStorage.setItem('fullscreen', 'false');
    }
  });
}

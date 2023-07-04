// Agrega la clase 'loading' al cuerpo del documento
document.body.classList.add('loading');

// Remueve la clase 'loading' después de un tiempo de espera simulado (por ejemplo, 3 segundos)
setTimeout(function() {
  document.body.classList.remove('loading');
  document.getElementById('loader-container').style.display = 'none';
}, 2000);
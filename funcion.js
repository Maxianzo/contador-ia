function contador() {
  // Establecer la fecha de inicio del contador
  var fechaInicio = new Date('2023-04-12T24:00:00Z');
  
  // Obtener la fecha actual en UTC
  var fechaActual = new Date(Date.now() + (new Date().getTimezoneOffset() * 60000));
  
  // Calcular la diferencia entre la fecha actual y la fecha de inicio
  var diferencia = fechaInicio - fechaActual;
  
  // Calcular los días, horas, minutos y segundos restantes
  var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
  
  // Mostrar el contador en el elemento HTML
  document.getElementById('contador').innerHTML = dias + 'd ' + horas + 'h ' + minutos + 'm ' + segundos + 's';
  
  // Actualizar el contador cada segundo
  setTimeout(contador, 1000);
  
  // Reiniciar el contador al finalizar
  if (diferencia <= 0) {
    fechaInicio = new Date(Date.now() + (new Date().getTimezoneOffset() * 60000));
    setTimeout(contador, 1000);
  }
}

// Iniciar el contador al cargar la página
window.onload = function() {
  contador();
};

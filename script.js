// Espera que todo el contenido HTML esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {

  // Selecciona todas las cajas con la clase "tarjeta"
  const tarjetas = document.querySelectorAll('.tarjeta');

  // Selecciona el cuadro flotante que mostrará el detalle de la tarjeta
  const detalle = document.getElementById('detalle-tarjeta');

  // Selecciona el título dentro del cuadro de detalle
  const tituloDetalle = document.getElementById('detalle-titulo');

  // Selecciona el texto/contenido dentro del cuadro de detalle
  const contenidoDetalle = document.getElementById('detalle-contenido');

  // Para cada tarjeta, agrega una función que se ejecuta cuando se hace clic
  tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('click', () => {

      // Toma el texto guardado en el atributo "data-titulo" de la tarjeta
      const titulo = tarjeta.getAttribute('data-titulo');

      // Toma el texto guardado en el atributo "data-contenido" de la tarjeta
      const contenido = tarjeta.getAttribute('data-contenido');

      // Si ambos datos existen, los muestra en el cuadro flotante
      if (titulo && contenido) {
        tituloDetalle.textContent = titulo;           // Muestra el título
        contenidoDetalle.textContent = contenido;     // Muestra el contenido
        detalle.classList.remove('detalle-oculto');   // Muestra el cuadro flotante (quitando la clase que lo oculta)
      }
    });
  });

  // Cuando alguien hace clic en cualquier parte del cuadro de detalle
  detalle.addEventListener('click', (e) => {
    // Si la persona hizo clic en el fondo (no en el contenido), se cierra el cuadro
    if (e.target === detalle) {
      detalle.classList.add('detalle-oculto'); // Se vuelve a ocultar el cuadro
    }
  });

  // Si la persona presiona la tecla ESC, también se cierra el cuadro flotante
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      detalle.classList.add('detalle-oculto'); // Se oculta el cuadro de detalle
    }
  });

});

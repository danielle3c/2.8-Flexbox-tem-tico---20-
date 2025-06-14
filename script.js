document.addEventListener('DOMContentLoaded', () => {
  const tarjetas = document.querySelectorAll('.tarjeta');
  const detalle = document.getElementById('detalle-tarjeta');
  const tituloDetalle = document.getElementById('detalle-titulo');
  const contenidoDetalle = document.getElementById('detalle-contenido');

  tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener('click', () => {
      const titulo = tarjeta.getAttribute('data-titulo');
      const contenido = tarjeta.getAttribute('data-contenido');

      if (titulo && contenido) {
        tituloDetalle.textContent = titulo;
        contenidoDetalle.textContent = contenido;
        detalle.classList.remove('detalle-oculto');
      }
    });
  });

  detalle.addEventListener('click', (e) => {
    // Cierra si clickeas fuera del contenido (en el fondo oscuro)
    if (e.target === detalle) {
      detalle.classList.add('detalle-oculto');
    }
  });

  // También cierra con tecla ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      detalle.classList.add('detalle-oculto');
    }
  });
});

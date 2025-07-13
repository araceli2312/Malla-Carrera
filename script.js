const materias = document.querySelectorAll(".materia");

function actualizarEstadoMaterias() {
  materias.forEach((materia) => {
    const requisitos = materia.dataset.reqs ? materia.dataset.reqs.split(",") : [];

    if (requisitos.length === 0) {
      materia.classList.add("desbloqueada");
      materia.classList.remove("bloqueada");
    } else {
      const desbloqueada = requisitos.every((reqId) =>
        document.querySelector(`[data-id="${reqId}"]`)?.classList.contains("aprobada")
      );
      if (desbloqueada) {
        materia.classList.add("desbloqueada");
        materia.classList.remove("bloqueada");
      } else {
        materia.classList.remove("desbloqueada");
        materia.classList.remove("aprobada");
        materia.classList.add("bloqueada");
      }
    }
  });
}

materias.forEach((materia) => {
  materia.addEventListener("click", () => {
    if (!materia.classList.contains("desbloqueada")) return;

    if (materia.classList.contains("aprobada")) {
      materia.classList.remove("aprobada");
    } else {
      materia.classList.add("aprobada");
    }

    actualizarEstadoMaterias();
  });
});

// Inicializar estados al cargar la página
actualizarEstadoMaterias();

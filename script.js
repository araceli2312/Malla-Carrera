const materias = document.querySelectorAll(".materia");

materias.forEach((materia) => {
  materia.addEventListener("click", () => {
    const id = materia.dataset.id;
    const requisitos = materia.dataset.reqs ? materia.dataset.reqs.split(",") : [];

    // Si ya está aprobada, la desmarca y bloquea dependientes
    if (materia.classList.contains("aprobada")) {
      materia.classList.remove("aprobada");

      materias.forEach((m) => {
        const reqs = m.dataset.reqs ? m.dataset.reqs.split(",") : [];
        if (reqs.includes(id)) {
          m.classList.remove("desbloqueada");
          if (!reqs.every((req) => document.querySelector(`[data-id="${req}"]`)?.classList.contains("aprobada"))) {
            m.classList.remove("aprobada");
          }
        }
      });

      return;
    }

    // Verifica requisitos
    const aprobadas = requisitos.every((reqId) =>
      document.querySelector(`[data-id="${reqId}"]`)?.classList.contains("aprobada")
    );

    if (aprobadas) {
      materia.classList.add("aprobada");
    }
  });
});

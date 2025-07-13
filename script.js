const materias = [
  {
    anio: "Primer Año",
    cuatrimestres: [
      {
        titulo: "1° Cuatrimestre",
        materias: [
          { nombre: "Lengua inglesa I", abre: ["Lengua inglesa II"] },
          { nombre: "Gramática inglesa I", abre: ["Gramática inglesa II"] },
          { nombre: "Fonética inglesa I", abre: ["Fonética inglesa II"] },
          { nombre: "Lengua española I", abre: ["Lengua española II"] },
          { nombre: "Introducción al ejercicio profesional" },
          { nombre: "Cosmovisión bíblico-cristiana" }
        ]
      },
      {
        titulo: "2° Cuatrimestre",
        materias: [
          { nombre: "Lengua inglesa II", requiere: ["Lengua inglesa I"], abre: ["Lengua inglesa III"] },
          { nombre: "Gramática inglesa II", requiere: ["Gramática inglesa I"], abre: ["Gramática inglesa III"] },
          { nombre: "Fonética inglesa II", requiere: ["Fonética inglesa I"], abre: ["Fonética inglesa III"] },
          { nombre: "Lengua española II", requiere: ["Lengua española I"] },
          { nombre: "Derecho constitucional y Administrativo", abre: ["Derecho civil"] },
          { nombre: "Antropología Bíblico-cristiana" }
        ]
      }
    ]
  }
  // Podés continuar con Segundo, Tercer y Cuarto año siguiendo este formato
];

const estadoMaterias = {};

function crearMalla() {
  const container = document.getElementById("malla");

  materias.forEach(anio => {
    const divAnio = document.createElement("div");
    divAnio.className = "anio";

    const tituloAnio = document.createElement("h2");
    tituloAnio.textContent = anio.anio;
    divAnio.appendChild(tituloAnio);

    anio.cuatrimestres.forEach(cuatri => {
      const divCuatrimestre = document.createElement("div");
      divCuatrimestre.className = "cuatrimestre";

      const tituloCuatri = document.createElement("h3");
      tituloCuatri.textContent = cuatri.titulo;
      divCuatrimestre.appendChild(tituloCuatri);

      const materiasContainer = document.createElement("div");
      materiasContainer.className = "materias";

      cuatri.materias.forEach(materia => {
        const div = document.createElement("div");
        div.className = "materia bloqueado";
        div.id = materia.nombre;
        div.textContent = materia.nombre;

        div.addEventListener("click", () => toggleAprobacion(materia));
        materiasContainer.appendChild(div);

        estadoMaterias[materia.nombre] = {
          aprobado: false,
          div,
          data: materia
        };
      });

      divCuatrimestre.appendChild(materiasContainer);
      divAnio.appendChild(divCuatrimestre);
    });

    container.appendChild(divAnio);
  });

  actualizarEstados();
}

function actualizarEstados() {
  for (const nombre in estadoMaterias) {
    const estado = estadoMaterias[nombre];
    const { requiere } = estado.data;

    const puedeAprobar = !requiere || requiere.every(r => estadoMaterias[r]?.aprobado);
    if (puedeAprobar) {
      estado.div.classList.remove("bloqueado");
    } else {
      estado.div.classList.add("bloqueado");
    }
  }
}

function toggleAprobacion(materia) {
  const estado = estadoMaterias[materia.nombre];
  const { requiere } = materia;

  const puedeAprobar = !requiere || requiere.every(r => estadoMaterias[r]?.aprobado);
  if (!puedeAprobar) return;

  estado.aprobado = !estado.aprobado;

  if (estado.aprobado) {
    estado.div.classList.add("aprobada");
  } else {
    estado.div.classList.remove("aprobada");
  }

  actualizarEstados();
}

window.onload = crearMalla;

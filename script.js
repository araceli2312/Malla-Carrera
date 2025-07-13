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
  },
  {
    anio: "Segundo Año",
    cuatrimestres: [
      {
        titulo: "1° Cuatrimestre",
        materias: [
          { nombre: "Lengua inglesa III", requiere: ["Lengua inglesa II"], abre: ["Lengua inglesa IV"] },
          { nombre: "Gramática inglesa III", requiere: ["Gramática inglesa II"], abre: ["Gramática inglesa IV"] },
          { nombre: "Fonética inglesa III", requiere: ["Fonética inglesa II"], abre: ["Fonética inglesa IV"] },
          { nombre: "Historia de la civilización inglesa I", abre: ["Historia de la civilización inglesa II"] },
          { nombre: "Traducción I", abre: ["Traducción II"] },
          { nombre: "Derecho civil", requiere: ["Derecho constitucional y Administrativo"], abre: ["Derecho comercial"] },
          { nombre: "Fundamentos del cristianismo" }
        ]
      },
      {
        titulo: "2° Cuatrimestre",
        materias: [
          { nombre: "Lengua inglesa IV", requiere: ["Lengua inglesa III"], abre: ["Lengua inglesa V"] },
          { nombre: "Gramática inglesa IV", requiere: ["Gramática inglesa III"], abre: ["Gramática inglesa V"] },
          { nombre: "Fonética inglesa IV", requiere: ["Fonética inglesa III"], abre: ["Fonética inglesa V"] },
          { nombre: "Historia de la civilización inglesa II", requiere: ["Historia de la civilización inglesa I"], abre: ["Historia de los Estados Unidos de América"] },
          { nombre: "Traducción II", requiere: ["Traducción I"], abre: ["Traducción científico-técnica"] },
          { nombre: "Introducción a la literatura anglosajona", abre: ["Literatura anglosajona"] },
          { nombre: "Principios de vida saludable" }
        ]
      }
    ]
  },
  {
    anio: "Tercer Año",
    cuatrimestres: [
      {
        titulo: "1° Cuatrimestre",
        materias: [
          { nombre: "Lengua inglesa V", requiere: ["Lengua inglesa IV"], abre: ["Lengua inglesa VI"] },
          { nombre: "Gramática inglesa V", requiere: ["Gramática inglesa IV"], abre: ["Fonética inglesa VI"] },
          { nombre: "Fonética inglesa V", requiere: ["Fonética inglesa IV"], abre: ["Fonética inglesa VI"] },
          { nombre: "Literatura anglosajona", requiere: ["Introducción a la literatura anglosajona"], abre: ["Literatura anglosajona II"] },
          { nombre: "Derecho comercial", requiere: ["Derecho civil"], abre: ["Literatura anglosajona II"] },
          { nombre: "Traducción científico-técnica", requiere: ["Traducción II"], abre: ["Traducción económica-financiera"] },
          { nombre: "Educación para la familia" }
        ]
      },
      {
        titulo: "2° Cuatrimestre",
        materias: [
          { nombre: "Lengua inglesa VI", requiere: ["Lengua inglesa V"], abre: ["Lengua inglesa VII"] },
          { nombre: "Fonética inglesa VI", requiere: ["Fonética inglesa V", "Gramática inglesa V"] },
          { nombre: "Historia de los Estados Unidos de América", requiere: ["Historia de la civilización inglesa II"] },
          { nombre: "Literatura anglosajona II", requiere: ["Literatura anglosajona", "Derecho comercial"] },
          { nombre: "Derecho procesal civil y penal", abre: ["Derecho laboral y seguridad social"] },
          { nombre: "Traducción económica-financiera", requiere: ["Traducción científico-técnica"], abre: ["Traducción jurídica", "Traducción literaria"] },
          { nombre: "Interpretación bíblica de la historia" }
        ]
      }
    ]
  },
  {
    anio: "Cuarto Año",
    cuatrimestres: [
      {
        titulo: "1° Cuatrimestre",
        materias: [
          { nombre: "Lengua inglesa VII", requiere: ["Lengua inglesa VI"], abre: ["Lengua inglesa VIII"] },
          { nombre: "Recursos tecnológicos para traductores" },
          { nombre: "Derecho laboral y seguridad social", requiere: ["Derecho procesal civil y penal"] },
          { nombre: "Traducción jurídica", requiere: ["Traducción económica-financiera"], abre: ["Práctica profesional"] },
          { nombre: "Traducción literaria", requiere: ["Traducción económica-financiera"], abre: ["Práctica profesional"] },
          { nombre: "Introducción a la interpretación", abre: ["Práctica de interpretación"] },
          { nombre: "Ciencia y fe" }
        ]
      },
      {
        titulo: "2° Cuatrimestre",
        materias: [
          { nombre: "Lengua inglesa VIII", requiere: ["Lengua inglesa VII"] },
          { nombre: "Seminario sobre nuevas especializaciones" },
          { nombre: "Práctica de interpretación", requiere: ["Introducción a la interpretación"] },
          { nombre: "Ética y deontología" },
          { nombre: "Educación para la familia" },
          { nombre: "Práctica profesional", requiere: ["Traducción jurídica", "Traducción literaria"] },
          { nombre: "Filosofía de la educación cristiana" }
        ]
      }
    ]
  }
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

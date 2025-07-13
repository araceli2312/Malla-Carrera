const materias = {
  "Primer Año": {
    "1° Cuatrimestre": [
      { nombre: "Lengua inglesa I", abre: ["Lengua inglesa II"] },
      { nombre: "Gramática inglesa I", abre: ["Gramática inglesa II"] },
      { nombre: "Fonética inglesa I", abre: ["Fonética inglesa II"] },
      { nombre: "Lengua española I", abre: ["Lengua española II"] },
      { nombre: "Introducción al ejercicio profesional" },
      { nombre: "Cosmovisión bíblico-cristiana" }
    ],
    "2° Cuatrimestre": [
      { nombre: "Lengua inglesa II", abre: ["Lengua inglesa III"] },
      { nombre: "Gramática inglesa II", abre: ["Gramática inglesa III"] },
      { nombre: "Fonética inglesa II", abre: ["Fonética inglesa III"] },
      { nombre: "Lengua española II" },
      { nombre: "Derecho constitucional y Administrativo", abre: ["Derecho civil"] },
      { nombre: "Antropología Bíblico-cristiana" }
    ]
  },
  "Segundo Año": {
    "1° Cuatrimestre": [
      { nombre: "Lengua inglesa III", abre: ["Lengua inglesa IV"] },
      { nombre: "Gramática inglesa III", abre: ["Gramática inglesa IV"] },
      { nombre: "Fonética inglesa III", abre: ["Fonética inglesa IV"] },
      { nombre: "Historia de la civilización inglesa I", abre: ["Historia de la civilización inglesa II"] },
      { nombre: "Traducción I", abre: ["Traducción II"] },
      { nombre: "Derecho civil", abre: ["Derecho comercial"] },
      { nombre: "Fundamentos del cristianismo" }
    ],
    "2° Cuatrimestre": [
      { nombre: "Lengua inglesa IV", abre: ["Lengua inglesa V"] },
      { nombre: "Gramática inglesa IV", abre: ["Gramática inglesa V"] },
      { nombre: "Fonética inglesa IV", abre: ["Fonética inglesa V"] },
      { nombre: "Historia de la civilización inglesa II", abre: ["Historia de los Estados Unidos de América"] },
      { nombre: "Traducción II", abre: ["Traducción científico-técnica"] },
      { nombre: "Introducción a la literatura anglosajona", abre: ["Literatura anglosajona"] },
      { nombre: "Principios de vida saludable" }
    ]
  },
  "Tercer Año": {
    "1° Cuatrimestre": [
      { nombre: "Lengua inglesa V", abre: ["Lengua inglesa VI"] },
      { nombre: "Gramática inglesa V", abre: ["Fonética inglesa VI"] },
      { nombre: "Fonética inglesa V", abre: ["Fonética inglesa VI"] },
      { nombre: "Literatura anglosajona", abre: ["Literatura anglosajona II"] },
      { nombre: "Derecho comercial", abre: ["Literatura anglosajona II"] },
      { nombre: "Traducción científico-técnica", abre: ["Traducción económica-financiera"] },
      { nombre: "Educación para la familia" }
    ],
    "2° Cuatrimestre": [
      { nombre: "Lengua inglesa VI", abre: ["Lengua inglesa VII"] },
      { nombre: "Fonética inglesa VI" },
      { nombre: "Historia de los Estados Unidos de América" },
      { nombre: "Literatura anglosajona II" },
      { nombre: "Derecho procesal civil y penal", abre: ["Derecho laboral y seguridad social"] },
      { nombre: "Traducción económica-financiera", abre: ["Traducción jurídica", "Traducción literaria"] },
      { nombre: "Interpretación bíblica de la historia" }
    ]
  },
  "Cuarto Año": {
    "1° Cuatrimestre": [
      { nombre: "Lengua inglesa VII", abre: ["Lengua inglesa VIII"] },
      { nombre: "Recursos tecnológicos para traductores" },
      { nombre: "Derecho laboral y seguridad social" },
      { nombre: "Traducción jurídica", abre: ["Práctica profesional"] },
      { nombre: "Traducción literaria", abre: ["Práctica profesional"] },
      { nombre: "Introducción a la interpretación", abre: ["Práctica de interpretación"] },
      { nombre: "Ciencia y fe" }
    ],
    "2° Cuatrimestre": [
      { nombre: "Lengua inglesa VIII" },
      { nombre: "Seminario sobre nuevas especializaciones" },
      { nombre: "Práctica de interpretación" },
      { nombre: "Ética y deontología" },
      { nombre: "Educación para la familia" },
      { nombre: "Práctica profesional" },
      { nombre: "Filosofía de la educación cristiana" }
    ]
  }
};

const estadoMaterias = {};

function crearMalla() {
  const malla = document.getElementById("malla");

  for (const [anio, cuatrimestres] of Object.entries(materias)) {
    const anioDiv = document.createElement("div");
    anioDiv.classList.add("anio");

    const tituloAnio = document.createElement("h2");
    tituloAnio.textContent = anio;
    anioDiv.appendChild(tituloAnio);

    for (const [cuatrimestre, materiasLista] of Object.entries(cuatrimestres)) {
      const cuatriDiv = document.createElement("div");
      cuatriDiv.classList.add("cuatrimestre");

      const sub = document.createElement("h3");
      sub.textContent = cuatrimestre;
      cuatriDiv.appendChild(sub);

      for (const materia of materiasLista) {
        const matDiv = document.createElement("div");
        matDiv.classList.add("materia");
        matDiv.textContent = materia.nombre;

        matDiv.addEventListener("click", () => toggleMateria(materia.nombre, matDiv, materia.abre));
        cuatriDiv.appendChild(matDiv);
      }

      anioDiv.appendChild(cuatriDiv);
    }

    malla.appendChild(anioDiv);
  }
}

function toggleMateria(nombre, elemento, abre = []) {
  if (estadoMaterias[nombre]) {
    estadoMaterias[nombre] = false;
    elemento.classList.remove("aprobada");
    if (abre) {
      abre.forEach(m => {
        const matEl = [...document.querySelectorAll('.materia')].find(el => el.textContent === m);
        if (matEl) matEl.classList.remove("desbloqueada");
      });
    }
  } else {
    estadoMaterias[nombre] = true;
    elemento.classList.add("aprobada");
    if (abre) {
      abre.forEach(m => {
        const matEl = [...document.querySelectorAll('.materia')].find(el => el.textContent === m);
        if (matEl) matEl.classList.add("desbloqueada");
      });
    }
  }
}

crearMalla();

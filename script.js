const materias = {
  "Primer Año": {
    "1° Cuatrimestre": [
      { nombre: "Lengua inglesa I", desbloquea: ["Lengua inglesa II"] },
      { nombre: "Gramática inglesa I", desbloquea: ["Gramática inglesa II"] },
      { nombre: "Fonética inglesa I", desbloquea: ["Fonética inglesa II"] },
      { nombre: "Lengua española I", desbloquea: ["Lengua española II"] },
      { nombre: "Introducción al ejercicio profesional" },
      { nombre: "Cosmovisión bíblico-cristiana" }
    ],
    "2° Cuatrimestre": [
      { nombre: "Lengua inglesa II", desbloquea: ["Lengua inglesa III"], requiere: ["Lengua inglesa I"] },
      { nombre: "Gramática inglesa II", desbloquea: ["Gramática inglesa III"], requiere: ["Gramática inglesa I"] },
      { nombre: "Fonética inglesa II", desbloquea: ["Fonética inglesa III"], requiere: ["Fonética inglesa I"] },
      { nombre: "Lengua española II", requiere: ["Lengua española I"] },
      { nombre: "Derecho constitucional y administrativo", desbloquea: ["Derecho civil"] },
      { nombre: "Antropología Bíblico-cristiana" }
    ]
  },
  "Segundo Año": {
    "1° Cuatrimestre": [
      { nombre: "Lengua inglesa III", desbloquea: ["Lengua inglesa IV"], requiere: ["Lengua inglesa II"] },
      { nombre: "Gramática inglesa III", desbloquea: ["Gramática inglesa IV"], requiere: ["Gramática inglesa II"] },
      { nombre: "Fonética inglesa III", desbloquea: ["Fonética inglesa IV"], requiere: ["Fonética inglesa II"] },
      { nombre: "Historia de la civilización inglesa I", desbloquea: ["Historia de la civilización inglesa II"] },
      { nombre: "Traducción I", desbloquea: ["Traducción II"] },
      { nombre: "Derecho civil", desbloquea: ["Derecho comercial"], requiere: ["Derecho constitucional y administrativo"] },
      { nombre: "Fundamentos del cristianismo" }
    ],
    "2° Cuatrimestre": [
      { nombre: "Lengua inglesa IV", desbloquea: ["Lengua inglesa V"], requiere: ["Lengua inglesa III"] },
      { nombre: "Gramática inglesa IV", desbloquea: ["Gramática inglesa V"], requiere: ["Gramática inglesa III"] },
      { nombre: "Fonética inglesa IV", desbloquea: ["Fonética inglesa V"], requiere: ["Fonética inglesa III"] },
      { nombre: "Historia de la civilización inglesa II", desbloquea: ["Historia de los Estados Unidos de América"], requiere: ["Historia de la civilización inglesa I"] },
      { nombre: "Traducción II", desbloquea: ["Traducción científico-técnica"], requiere: ["Traducción I"] },
      { nombre: "Introducción a la literatura anglosajona", desbloquea: ["Literatura anglosajona"] },
      { nombre: "Principios de vida saludable" }
    ]
  },
  "Tercer Año": {
    "1° Cuatrimestre": [
      { nombre: "Lengua inglesa V", desbloquea: ["Lengua inglesa VI"], requiere: ["Lengua inglesa IV"] },
      { nombre: "Gramática inglesa V", desbloquea: ["Fonética inglesa VI"], requiere: ["Gramática inglesa IV"] },
      { nombre: "Fonética inglesa V", desbloquea: ["Fonética inglesa VI"], requiere: ["Fonética inglesa IV"] },
      { nombre: "Literatura anglosajona", desbloquea: ["Literatura anglosajona II"], requiere: ["Introducción a la literatura anglosajona"] },
      { nombre: "Derecho comercial", requiere: ["Derecho civil"] },
      { nombre: "Traducción científico-técnica", desbloquea: ["Traducción económica-financiera"], requiere: ["Traducción II"] },
      { nombre: "Educación para la familia" }
    ],
    "2° Cuatrimestre": [
      { nombre: "Lengua inglesa VI", desbloquea: ["Lengua inglesa VII"], requiere: ["Lengua inglesa V"] },
      { nombre: "Fonética inglesa VI", requiere: ["Fonética inglesa V", "Gramática inglesa V"] },
      { nombre: "Historia de los Estados Unidos de América", requiere: ["Historia de la civilización inglesa II"] },
      { nombre: "Literatura anglosajona II", requiere: ["Literatura anglosajona", "Derecho comercial"] },
      { nombre: "Derecho procesal civil y penal", desbloquea: ["Derecho laboral y seguridad social"] },
      { nombre: "Traducción económica-financiera", desbloquea: ["Traducción jurídica", "Traducción literaria"], requiere: ["Traducción científico-técnica"] },
      { nombre: "Interpretación bíblica de la historia" }
    ]
  },
  "Cuarto Año": {
    "1° Cuatrimestre": [
      { nombre: "Lengua inglesa VII", desbloquea: ["Lengua inglesa VIII"], requiere: ["Lengua inglesa VI"] },
      { nombre: "Recursos tecnológicos para traductores" },
      { nombre: "Derecho laboral y seguridad social", requiere: ["Derecho procesal civil y penal"] },
      { nombre: "Traducción jurídica", desbloquea: ["Práctica profesional"], requiere: ["Traducción económica-financiera"] },
      { nombre: "Traducción literaria", desbloquea: ["Práctica profesional"], requiere: ["Traducción económica-financiera"] },
      { nombre: "Introducción a la interpretación", desbloquea: ["Práctica de interpretación"] },
      { nombre: "Ciencia y fe" }
    ],
    "2° Cuatrimestre": [
      { nombre: "Lengua inglesa VIII", requiere: ["Lengua inglesa VII"] },
      { nombre: "Seminario sobre nuevas especializaciones" },
      { nombre: "Práctica de interpretación", requiere: ["Introducción a la interpretación"] },
      { nombre: "Ética y deontología" },
      { nombre: "Educación para la familia" },
      { nombre: "Práctica profesional", requiere: ["Traducción jurídica", "Traducción literaria"] },
      { nombre: "Filosofía de la educación cristiana" }
    ]
  }
};

function crearMalla() {
  const contenedor = document.getElementById("malla");

  for (const anio in materias) {
    const anioDiv = document.createElement("div");
    anioDiv.className = "anio";
    const titulo = document.createElement("h2");
    titulo.textContent = anio;
    anioDiv.appendChild(titulo);

    for (const cuatri in materias[anio]) {
      const cuatriDiv = document.createElement("div");
      cuatriDiv.className = "cuatrimestre";
      const subtitulo = document.createElement("h3");
      subtitulo.textContent = cuatri;
      cuatriDiv.appendChild(subtitulo);

      materias[anio][cuatri].forEach(m => {
        const boton = document.createElement("button");
        boton.textContent = m.nombre;
        boton.className = "materia";
        boton.dataset.nombre = m.nombre;
        if (m.requiere) boton.dataset.requiere = JSON.stringify(m.requiere);
        if (m.desbloquea) boton.dataset.desbloquea = JSON.stringify(m.desbloquea);
        boton.disabled = m.requiere && m.requiere.length > 0;
        boton.addEventListener("click", () => toggleAprobado(boton));
        cuatriDiv.appendChild(boton);
      });

      anioDiv.appendChild(cuatriDiv);
    }

    contenedor.appendChild(anioDiv);
  }
}

function toggleAprobado(btn) {
  const nombre = btn.dataset.nombre;
  const desbloquea = JSON.parse(btn.dataset.desbloquea || "[]");
  const requiere = JSON.parse(btn.dataset.requiere || "[]");

  if (btn.classList.contains("aprobada")) {
    btn.classList.remove("aprobada");
    desbloquea.forEach(nombreDesbloqueado => {
      const otros = document.querySelectorAll(`[data-nombre='${nombreDesbloqueado}']`);
      otros.forEach(o => {
        o.disabled = true;
        o.classList.remove("aprobada");
        toggleAprobado(o, true);
      });
    });
  } else {
    if (requiere.some(r => !document.querySelector(`[data-nombre='${r}']`)?.classList.contains("aprobada"))) {
      alert("Necesitás aprobar las materias correlativas primero.");
      return;
    }
    btn.classList.add("aprobada");
    desbloquea.forEach(nombreDesbloqueado => {
      const otros = document.querySelectorAll(`[data-nombre='${nombreDesbloqueado}']`);
      otros.forEach(o => {
        if (!o.disabled) return;
        const requisitos = JSON.parse(o.dataset.requiere || "[]");
        const todosAprobados = requisitos.every(r =>
          document.querySelector(`[data-nombre='${r}']`)?.classList.contains("aprobada")
        );
        if (todosAprobados) o.disabled = false;
      });
    });
  }
}

crearMalla();

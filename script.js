// script.js
const materias = [
  { nombre: "Lengua inglesa I", cuatrimestre: "1° Año - 1° Cuatrimestre", abre: ["Lengua inglesa II"] },
  { nombre: "Gramática inglesa I", cuatrimestre: "1° Año - 1° Cuatrimestre", abre: ["Gramática inglesa II"] },
  { nombre: "Fonética inglesa I", cuatrimestre: "1° Año - 1° Cuatrimestre", abre: ["Fonética inglesa II"] },
  { nombre: "Lengua española I", cuatrimestre: "1° Año - 1° Cuatrimestre", abre: ["Lengua española II"] },
  { nombre: "Introducción al ejercicio profesional", cuatrimestre: "1° Año - 1° Cuatrimestre" },
  { nombre: "Cosmovisión bíblico-cristiana", cuatrimestre: "1° Año - 1° Cuatrimestre" },

  { nombre: "Lengua inglesa II", cuatrimestre: "1° Año - 2° Cuatrimestre", abre: ["Lengua inglesa III"], requiere: ["Lengua inglesa I"] },
  { nombre: "Gramática inglesa II", cuatrimestre: "1° Año - 2° Cuatrimestre", abre: ["Gramática inglesa III"], requiere: ["Gramática inglesa I"] },
  { nombre: "Fonética inglesa II", cuatrimestre: "1° Año - 2° Cuatrimestre", abre: ["Fonética inglesa III"], requiere: ["Fonética inglesa I"] },
  { nombre: "Lengua española II", cuatrimestre: "1° Año - 2° Cuatrimestre", requiere: ["Lengua española I"] },
  { nombre: "Derecho constitucional y Administrativo", cuatrimestre: "1° Año - 2° Cuatrimestre", abre: ["Derecho civil"] },
  { nombre: "Antropología Bíblico-cristiana", cuatrimestre: "1° Año - 2° Cuatrimestre" },

  // Puedes continuar agregando todas las demás materias aquí siguiendo este patrón
];

const estadoMaterias = {};

function crearTarjeta(materia) {
  const div = document.createElement("div");
  div.className = "materia bloqueado";
  div.id = materia.nombre;

  const titulo = document.createElement("h3");
  titulo.textContent = materia.nombre;
  div.appendChild(titulo);

  const sub = document.createElement("p");
  sub.className = "cuatrimestre";
  sub.textContent = materia.cuatrimestre;
  div.appendChild(sub);

  const btn = document.createElement("button");
  btn.textContent = "Aprobar";
  btn.disabled = true;
  btn.addEventListener("click", () => aprobarMateria(materia));
  div.appendChild(btn);

  document.getElementById("malla").appendChild(div);
  estadoMaterias[materia.nombre] = { aprobado: false, btn, div, data: materia };
}

function actualizarEstado() {
  materias.forEach(m => {
    const { requiere } = m;
    const estado = estadoMaterias[m.nombre];
    const puedeAprobar = !requiere || requiere.every(r => estadoMaterias[r]?.aprobado);
    if (puedeAprobar) {
      estado.div.classList.remove("bloqueado");
      estado.btn.disabled = false;
    } else {
      estado.div.classList.add("bloqueado");
      estado.btn.disabled = true;
    }
  });
}

function aprobarMateria(materia) {
  const estado = estadoMaterias[materia.nombre];
  estado.aprobado = true;
  estado.div.classList.add("aprobada");
  estado.btn.remove();
  actualizarEstado();
}

window.onload = () => {
  materias.forEach(crearTarjeta);
  actualizarEstado();
};

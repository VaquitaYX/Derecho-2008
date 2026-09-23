// Base de Datos de las Materias del Plan 2008 de la Licenciatura en Derecho (MEIF UV)
const subjectsData = [
  // Área de Formación Básica General (AFBG)
  { id: "afbg1", name: "Lectura y Redacción a través del Análisis del Mundo Contemp.", area: "AFBG", credits: 6, cycle: "1er Ciclo" },
  { id: "afbg2", name: "Habilidades del Pensamiento Crítico y Creativo", area: "AFBG", credits: 6, cycle: "1er Ciclo" },
  { id: "afbg3", name: "Inglés I", area: "AFBG", credits: 6, cycle: "1er Ciclo" },
  { id: "afbg4", name: "Inglés II", area: "AFBG", credits: 6, cycle: "2do Ciclo" },
  { id: "afbg5", name: "Computación Básica", area: "AFBG", credits: 6, cycle: "2do Ciclo" },

  // Área de Iniciación a la Disciplina (AID)
  { id: "aid1", name: "Derecho Romano", area: "AID", credits: 8, cycle: "1er Ciclo" },
  { id: "aid2", name: "Introducción al Derecho", area: "AID", credits: 8, cycle: "1er Ciclo" },
  { id: "aid3", name: "Teoría Política", area: "AID", credits: 8, cycle: "1er Ciclo" },
  { id: "aid4", name: "Teoría Económica", area: "AID", credits: 8, cycle: "1er Ciclo" },
  { id: "aid5", name: "Metodología de la Investigación Jurídica", area: "AID", credits: 8, cycle: "1er Ciclo" },
  { id: "aid6", name: "Optativa 1 AID (Metodología de la Ciencia del Derecho)", area: "AID", credits: 8, cycle: "2do Ciclo" },
  { id: "aid7", name: "Optativa 2 AID (Sociología Jurídica / Teoría del Estado)", area: "AID", credits: 8, cycle: "2do Ciclo" },

  // Área de Formación Disciplinar (AFD)
  { id: "afd1", name: "Derecho de Personas y Familia", area: "AFD", credits: 8, cycle: "2do Ciclo" },
  { id: "afd2", name: "Instituciones de Derecho Privado Romano", area: "AFD", credits: 8, cycle: "2do Ciclo" },
  { id: "afd3", name: "Derecho Constitucional Mexicano", area: "AFD", credits: 8, cycle: "3er Ciclo" },
  { id: "afd4", name: "Actos de Comercio y Sociedades Mercantiles", area: "AFD", credits: 8, cycle: "3er Ciclo" },
  { id: "afd5", name: "Derecho Penal General", area: "AFD", credits: 8, cycle: "3er Ciclo" },
  { id: "afd6", name: "Derecho Penal Especial", area: "AFD", credits: 8, cycle: "4to Ciclo" },
  { id: "afd7", name: "Derecho de Bienes y Sucesiones", area: "AFD", credits: 8, cycle: "4to Ciclo" },
  { id: "afd8", name: "Derecho Laboral", area: "AFD", credits: 8, cycle: "4to Ciclo" },
  { id: "afd9", name: "Derecho Internacional Público", area: "AFD", credits: 8, cycle: "4to Ciclo" },
  { id: "afd10", name: "Derecho Fiscal", area: "AFD", credits: 7, cycle: "5to Ciclo" },
  { id: "afd11", name: "Derecho Procesal Penal", area: "AFD", credits: 8, cycle: "5to Ciclo" },
  { id: "afd12", name: "Derecho Procesal", area: "AFD", credits: 7, cycle: "5to Ciclo" },
  { id: "afd13", name: "Títulos y Operaciones de Crédito", area: "AFD", credits: 8, cycle: "5to Ciclo" },
  { id: "afd14", name: "Derecho Procesal Civil", area: "AFD", credits: 8, cycle: "6to Ciclo" },
  { id: "afd15", name: "Derecho de los Contratos Civiles", area: "AFD", credits: 8, cycle: "6to Ciclo" },
  { id: "afd16", name: "Derecho Internacional Privado", area: "AFD", credits: 8, cycle: "6to Ciclo" },
  { id: "afd17", name: "Derecho Procesal Laboral", area: "AFD", credits: 8, cycle: "6to Ciclo" },
  { id: "afd18", name: "Filosofía del Derecho", area: "AFD", credits: 8, cycle: "7mo Ciclo" },
  { id: "afd19", name: "Derecho Procesal Administrativo / Fiscal", area: "AFD", credits: 7, cycle: "7mo Ciclo" },
  { id: "afd20", name: "Derecho de la Seguridad Social", area: "AFD", credits: 8, cycle: "7mo Ciclo" },
  { id: "afd21", name: "Procesos de Amparo", area: "AFD", credits: 7, cycle: "7mo Ciclo" },
  { id: "afd22", name: "Derecho de las Obligaciones Civiles", area: "AFD", credits: 8, cycle: "3er Ciclo" },
  { id: "afd23", name: "Derechos Fundamentales", area: "AFD", credits: 8, cycle: "3er Ciclo" },
  { id: "afd24", name: "Derecho Administrativo", area: "AFD", credits: 8, cycle: "4to Ciclo" },
  { id: "afd25", name: "Introducción al Amparo", area: "AFD", credits: 7, cycle: "5to Ciclo" },
  { id: "afd26", name: "Optativa AFD (Derecho Agrario / Mercantil / Tributario)", area: "AFD", credits: 7, cycle: "6to Ciclo" },

  // Área Terminal Obligatoria (AFTOB)
  { id: "aftob1", name: "Protocolo de Investigación Jurídica", area: "AFTOB", credits: 3, cycle: "7mo Ciclo" },
  { id: "aftob2", name: "Experiencia Recepcional", area: "AFTOB", credits: 12, cycle: "8vo Ciclo" },
  { id: "aftob3", name: "Servicio Social", area: "AFTOB", credits: 6, cycle: "8vo Ciclo" },

  // Área Terminal Optativa / Acentuación (AFTOP)
  { id: "aftop1", name: "Optativa 1 AFT (Según Área de Acentuación)", area: "AFTOP", credits: 7, cycle: "6to Ciclo" },
  { id: "aftop2", name: "Optativa 2 AFT (Según Área de Acentuación)", area: "AFTOP", credits: 7, cycle: "7mo Ciclo" },
  { id: "aftop3", name: "Optativa 3 AFT (Según Área de Acentuación)", area: "AFTOP", credits: 7, cycle: "8vo Ciclo" },

  // Área de Elección Libre (AFEL)
  { id: "afel1", name: "Electiva 1 (Libre Elección)", area: "AFEL", credits: 7, cycle: "6to Ciclo" },
  { id: "afel2", name: "Electiva 2 (Libre Elección)", area: "AFEL", credits: 7, cycle: "7mo Ciclo" }
];

// Estados posibles
const STATES = {
  PENDING: "state-pending",   // Pendiente [ ]
  PASSED: "state-passed",     // Cursada / Aprobada [✓]
  PLANNING: "state-planning", // Por Inscribir [★]
  SECOND: "state-second"      // Segunda Inscripción [⚠]
};

const STATE_ICONS = {
  "state-pending": "[ ]",
  "state-passed": "[✓]",
  "state-planning": "[★]",
  "state-second": "[⚠]"
};

// Objeto para almacenar el estado de cada asignatura
let userSubjectStates = {};

document.addEventListener("DOMContentLoaded", () => {
  loadStateFromLocalStorage();
  renderCurriculum();
  setupEventListeners();
  updateStats();
});

// Generar las tarjetas en la pantalla
function renderCurriculum() {
  const container = document.getElementById("curriculumGrid");
  container.innerHTML = "";

  subjectsData.forEach(sub => {
    const currentState = userSubjectStates[sub.id] || STATES.PENDING;

    const card = document.createElement("div");
    card.className = `subject-card ${currentState}`;
    card.dataset.id = sub.id;

    card.innerHTML = `
      <div class="subject-header">
        <span>${sub.cycle}</span>
        <span class="status-badge">${STATE_ICONS[currentState]}</span>
      </div>
      <div class="subject-title">${sub.name}</div>
      <div class="subject-footer">
        <span class="area-tag">${sub.area}</span>
        <span>${sub.credits} Cred.</span>
      </div>
    `;

    card.addEventListener("click", () => toggleSubjectState(sub.id));
    container.appendChild(card);
  });
}

// Cambiar el estado de forma cíclica al hacer clic
function toggleSubjectState(id) {
  const currentState = userSubjectStates[id] || STATES.PENDING;
  let nextState;

  if (currentState === STATES.PENDING) nextState = STATES.PASSED;
  else if (currentState === STATES.PASSED) nextState = STATES.PLANNING;
  else if (currentState === STATES.PLANNING) nextState = STATES.SECOND;
  else nextState = STATES.PENDING;

  userSubjectStates[id] = nextState;
  saveStateToLocalStorage();
  renderCurriculum();
  updateStats();
}

// Actualizar barra de progreso y resumen de créditos
function updateStats() {
  let totalCredits = 0;

  subjectsData.forEach(sub => {
    if (userSubjectStates[sub.id] === STATES.PASSED) {
      totalCredits += sub.credits;
    }
  });

  document.getElementById("approvedCredits").innerText = totalCredits;
  const percentage = Math.min((totalCredits / 350) * 100, 100);
  document.getElementById("progressBar").style.width = `${percentage}%`;

  // Actualizar datos para versión impresa
  const name = document.getElementById("studentName").value || "____________________";
  const studentId = document.getElementById("studentId").value || "____________________";
  
  document.getElementById("printStudentName").innerText = `Estudiante: ${name}`;
  document.getElementById("printStudentId").innerText = `Matrícula: ${studentId}`;
  document.getElementById("printCredits").innerText = `Créditos Acumulados: ${totalCredits} / 350 (${percentage.toFixed(1)}%)`;
}

// Event listeners para controles
function setupEventListeners() {
  document.getElementById("studentName").addEventListener("input", updateStats);
  document.getElementById("studentId").addEventListener("input", updateStats);

  document.getElementById("btnReset").addEventListener("click", () => {
    if (confirm("¿Deseas reiniciar todos los estados seleccionados?")) {
      userSubjectStates = {};
      saveStateToLocalStorage();
      renderCurriculum();
      updateStats();
    }
  });

  // Exportar como PNG
  document.getElementById("btnExportImage").addEventListener("click", () => {
    const area = document.getElementById("exportableArea");
    const printHeader = document.querySelector(".student-header-print");
    
    printHeader.style.display = "block";

    html2canvas(area, { scale: 2 }).then(canvas => {
      const link = document.createElement("a");
      link.download = `Malla_Derecho_UV_${document.getElementById("studentId").value || 'avance'}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
      printHeader.style.display = "none";
    });
  });

  // Exportar como PDF
  document.getElementById("btnExportPDF").addEventListener("click", () => {
    const { jsPDF } = window.jspdf;
    const area = document.getElementById("exportableArea");
    const printHeader = document.querySelector(".student-header-print");

    printHeader.style.display = "block";

    html2canvas(area, { scale: 2 }).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Malla_Derecho_UV_${document.getElementById("studentId").value || 'avance'}.pdf`);
      printHeader.style.display = "none";
    });
  });
}

// Almacenamiento local (LocalStorage)
function saveStateToLocalStorage() {
  localStorage.setItem("derecho_uv_states", JSON.stringify(userSubjectStates));
  localStorage.setItem("derecho_uv_name", document.getElementById("studentName").value);
  localStorage.setItem("derecho_uv_id", document.getElementById("studentId").value);
}

function loadStateFromLocalStorage() {
  const savedStates = localStorage.getItem("derecho_uv_states");
  if (savedStates) userSubjectStates = JSON.parse(savedStates);

  const savedName = localStorage.getItem("derecho_uv_name");
  if (savedName) document.getElementById("studentName").value = savedName;

  const savedId = localStorage.getItem("derecho_uv_id");
  if (savedId) document.getElementById("studentId").value = savedId;
}

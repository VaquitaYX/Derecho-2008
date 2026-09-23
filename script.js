// ESTRUCTURA COMPLETA DE MATERIAS ORGANIZADAS POR CICLOS (PLAN 2008 DERECHO UV)
const curriculumData = [
  {
    cycleName: "1er Ciclo",
    subjects: [
      { id: "aid_dromano", name: "Derecho Romano", area: "AID", credits: 8 },
      { id: "aid_introderecho", name: "Introducción al Derecho", area: "AID", credits: 8 },
      { id: "aid_tpolitica", name: "Teoría Política", area: "AID", credits: 8 },
      { id: "aid_teconomica", name: "Teoría Económica", area: "AID", credits: 8 },
      { id: "aid_metodologia", name: "Metodología de la Inv. Jurídica", area: "AID", credits: 8 },
      { id: "afbg_lectura", name: "Lectura y Redacción a Través del Anal. Contemp.", area: "AFBG", credits: 6 },
      { id: "afbg_pensamiento", name: "Habilidades del Pensamiento Crítico y Creativo", area: "AFBG", credits: 6 }
    ]
  },
  {
    cycleName: "2do Ciclo",
    subjects: [
      { id: "afd_personas", name: "Derecho de Personas y Familia", area: "AFD", credits: 8 },
      { id: "afd_instromano", name: "Instituciones de Derecho Privado Romano", area: "AFD", credits: 8 },
      { id: "aid_optativa1", name: "Optativa 1 AID (Metod. Ciencia del Derecho)", area: "AID", credits: 8 },
      { id: "aid_optativa2", name: "Optativa 2 AID (Sociología / Teoría del Estado)", area: "AID", credits: 8 },
      { id: "afbg_ingles1", name: "Inglés I", area: "AFBG", credits: 6 },
      { id: "afbg_ingles2", name: "Inglés II", area: "AFBG", credits: 6 },
      { id: "afbg_compu", name: "Computación Básica", area: "AFBG", credits: 6 }
    ]
  },
  {
    cycleName: "3er Ciclo",
    subjects: [
      { id: "afd_const", name: "Derecho Constitucional Mexicano", area: "AFD", credits: 8 },
      { id: "afd_comercio", name: "Actos de Comercio y Soc. Mercantiles", area: "AFD", credits: 8 },
      { id: "afd_penalgen", name: "Derecho Penal General", area: "AFD", credits: 8 },
      { id: "afd_obligaciones", name: "Derecho de las Obligaciones Civiles", area: "AFD", credits: 8 },
      { id: "afd_derechosfund", name: "Derechos Fundamentales", area: "AFD", credits: 8 }
    ]
  },
  {
    cycleName: "4to Ciclo",
    subjects: [
      { id: "afd_penalesp", name: "Derecho Penal Especial", area: "AFD", credits: 8 },
      { id: "afd_bienes", name: "Derecho de Bienes y Sucesiones", area: "AFD", credits: 8 },
      { id: "afd_laboral", name: "Derecho Laboral", area: "AFD", credits: 8 },
      { id: "afd_intpub", name: "Derecho Internacional Público", area: "AFD", credits: 8 },
      { id: "afd_admin", name: "Derecho Administrativo", area: "AFD", credits: 8 }
    ]
  },
  {
    cycleName: "5to Ciclo",
    subjects: [
      { id: "afd_fiscal", name: "Derecho Fiscal", area: "AFD", credits: 7 },
      { id: "afd_procpenal", name: "Derecho Procesal Penal", area: "AFD", credits: 8 },
      { id: "afd_procesal", name: "Derecho Procesal", area: "AFD", credits: 7 },
      { id: "afd_titulos", name: "Títulos y Operaciones de Crédito", area: "AFD", credits: 8 },
      { id: "afd_introamparo", name: "Introducción al Amparo", area: "AFD", credits: 7 }
    ]
  },
  {
    cycleName: "6to Ciclo",
    subjects: [
      { id: "afd_proccivil", name: "Derecho Procesal Civil", area: "AFD", credits: 8 },
      { id: "afd_contratos", name: "Derecho de los Contratos Civiles", area: "AFD", credits: 8 },
      { id: "afd_intpriv", name: "Derecho Internacional Privado", area: "AFD", credits: 8 },
      { id: "afd_proclaboral", name: "Derecho Procesal Laboral", area: "AFD", credits: 8 },
      { id: "afd_optativa", name: "Optativa AFD (Agrario / Mercantil / Tributario)", area: "AFD", credits: 7 },
      { id: "aftop_opt1", name: "Optativa 1 AFT (Según Área Acentuación)", area: "AFTOP", credits: 7 },
      { id: "afel_1", name: "Electiva 1 (AFEL)", area: "AFEL", credits: 7 }
    ]
  },
  {
    cycleName: "7mo Ciclo",
    subjects: [
      { id: "afd_filosofia", name: "Filosofía del Derecho", area: "AFD", credits: 8 },
      { id: "afd_procfiscal", name: "Derecho Procesal Admin. / Fiscal", area: "AFD", credits: 7 },
      { id: "afd_seguridadsoc", name: "Derecho de la Seguridad Social", area: "AFD", credits: 8 },
      { id: "afd_procamparo", name: "Procesos de Amparo", area: "AFD", credits: 7 },
      { id: "aftob_protocolo", name: "Protocolo de Inv. Jurídica", area: "AFTOB", credits: 3 },
      { id: "aftop_opt2", name: "Optativa 2 AFT (Según Área Acentuación)", area: "AFTOP", credits: 7 },
      { id: "afel_2", name: "Electiva 2 (AFEL)", area: "AFEL", credits: 7 }
    ]
  },
  {
    cycleName: "8vo Ciclo",
    subjects: [
      { id: "aftob_recepcional", name: "Experiencia Recepcional", area: "AFTOB", credits: 12 },
      { id: "aftob_servicio", name: "Servicio Social", area: "AFTOB", credits: 6 },
      { id: "aftop_opt3", name: "Optativa 3 AFT (Según Área Acentuación)", area: "AFTOP", credits: 7 }
    ]
  }
];

// Colores por Área Curricular
const AREA_BACKGROUNDS = {
  AFBG: "var(--area-afbg)",
  AID: "var(--area-aid)",
  AFD: "var(--area-afd)",
  AFTOB: "var(--area-aftob)",
  AFTOP: "var(--area-aftop)",
  AFEL: "var(--area-afel)"
};

// Estados y Símbolos para accesibilidad
const STATES = {
  PENDING: "state-pending",
  PASSED: "state-passed",
  PLANNING: "state-planning",
  SECOND: "state-second"
};

const STATE_SYMBOLS = {
  "state-pending": "[ ]",
  "state-passed": "[✓]",
  "state-planning": "[★]",
  "state-second": "[⚠]"
};

let userStates = {};

document.addEventListener("DOMContentLoaded", () => {
  loadData();
  buildMalla();
  setupListeners();
  calculateStats();
});

// Construir la malla en formato de columnas por ciclos
function buildMalla() {
  const container = document.getElementById("mallaGrid");
  container.innerHTML = "";

  curriculumData.forEach(col => {
    const cycleCol = document.createElement("div");
    cycleCol.className = "cycle-column";

    const header = document.createElement("div");
    header.className = "cycle-header";
    header.innerText = col.cycleName;
    cycleCol.appendChild(header);

    col.subjects.forEach(sub => {
      const currentState = userStates[sub.id] || STATES.PENDING;

      const card = document.createElement("div");
      card.className = `subject-card ${currentState}`;
      card.style.backgroundColor = AREA_BACKGROUNDS[sub.area] || "#fff";
      card.dataset.id = sub.id;

      card.innerHTML = `
        <div class="card-top">
          <span class="area-code">${sub.area}</span>
          <span class="status-icon">${STATE_SYMBOLS[currentState]}</span>
        </div>
        <div class="subject-title">${sub.name}</div>
        <div class="card-bottom">
          <span>${sub.credits} Cred.</span>
        </div>
      `;

      card.addEventListener("click", () => toggleSubject(sub.id));
      cycleCol.appendChild(card);
    });

    container.appendChild(cycleCol);
  });
}

// Rotación de estados al hacer clic
function toggleSubject(id) {
  const current = userStates[id] || STATES.PENDING;
  let next;

  if (current === STATES.PENDING) next = STATES.PASSED;
  else if (current === STATES.PASSED) next = STATES.PLANNING;
  else if (current === STATES.PLANNING) next = STATES.SECOND;
  else next = STATES.PENDING;

  userStates[id] = next;
  saveData();
  buildMalla();
  calculateStats();
}

// Calcular créditos aprobados
function calculateStats() {
  let passedCredits = 0;

  curriculumData.forEach(col => {
    col.subjects.forEach(sub => {
      if (userStates[sub.id] === STATES.PASSED) {
        passedCredits += sub.credits;
      }
    });
  });

  document.getElementById("approvedCredits").innerText = passedCredits;
  const percentage = Math.min((passedCredits / 350) * 100, 100);
  document.getElementById("progressBar").style.width = `${percentage}%`;

  // Actualizar datos de impresión
  const nameVal = document.getElementById("studentName").value || "___________________________";
  const idVal = document.getElementById("studentId").value || "___________";

  document.getElementById("printStudentName").innerText = nameVal;
  document.getElementById("printStudentId").innerText = idVal;
  document.getElementById("printCredits").innerText = `${passedCredits} / 350 (${percentage.toFixed(1)}%)`;
}

// Controladores de eventos
function setupListeners() {
  document.getElementById("studentName").addEventListener("input", calculateStats);
  document.getElementById("studentId").addEventListener("input", calculateStats);

  document.getElementById("btnReset").addEventListener("click", () => {
    if (confirm("¿Seguro que deseas reiniciar los estados de todas las materias?")) {
      userStates = {};
      saveData();
      buildMalla();
      calculateStats();
    }
  });

  // Guardar como Imagen PNG
  document.getElementById("btnExportImage").addEventListener("click", () => {
    const area = document.getElementById("exportableArea");
    const printHeader = document.querySelector(".print-header");
    printHeader.style.display = "block";

    html2canvas(area, { scale: 2, useCORS: true }).then(canvas => {
      const link = document.createElement("a");
      link.download = `Malla_Derecho_UV_${document.getElementById("studentId").value || 'avance'}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
      printHeader.style.display = "none";
    });
  });

  // Guardar como PDF
  document.getElementById("btnExportPDF").addEventListener("click", () => {
    const { jsPDF } = window.jspdf;
    const area = document.getElementById("exportableArea");
    const printHeader = document.querySelector(".print-header");
    printHeader.style.display = "block";

    html2canvas(area, { scale: 2 }).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("landscape", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Malla_Derecho_UV_${document.getElementById("studentId").value || 'avance'}.pdf`);
      printHeader.style.display = "none";
    });
  });
}

// Persistencia en LocalStorage
function saveData() {
  localStorage.setItem("derecho_uv_malla_states", JSON.stringify(userStates));
  localStorage.setItem("derecho_uv_malla_name", document.getElementById("studentName").value);
  localStorage.setItem("derecho_uv_malla_id", document.getElementById("studentId").value);
}

function loadData() {
  const saved = localStorage.getItem("derecho_uv_malla_states");
  if (saved) userStates = JSON.parse(saved);

  const savedName = localStorage.getItem("derecho_uv_malla_name");
  if (savedName) document.getElementById("studentName").value = savedName;

  const savedId = localStorage.getItem("derecho_uv_malla_id");
  if (savedId) document.getElementById("studentId").value = savedId;
}

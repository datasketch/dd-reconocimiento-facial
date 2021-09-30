import { renderMappedInitiative } from "../utils/render";
import { Modal } from "../utils/modal";

const initiativesParent = document.querySelector(".initiatives-container");
const res = document.querySelector("#data-iniciativasMapeadas");
const body = document.querySelector("body");
const buttonParent = document.querySelector("#button-container");
const buttonFilter = document.querySelectorAll(".button-filter");
const selectCountries = document.querySelector("#filterByCountries");
const selectState = document.querySelector("#filterByState");
const selectArea = document.querySelector("#filterByArea");
const selectImpactAudit = document.querySelector("#filterByImpactAudit");
const selectIncident = document.querySelector("#filterByIncident");
const initiativeMessage = document.querySelectorAll(".initiative-message");
const filterInitiative = document.querySelectorAll(".filter-initiative");
res.remove();

// show mappeds init
const showMappedInitiatives = (data) => {
  initiativesParent.innerHTML = "";
  let sort = data.sort((a, b) => {
    if (a.pais > b.pais) return 1;
    if (a.pais < b.pais) return -1;
    return 0;
  });
  sort.forEach((item) => renderMappedInitiative(initiativesParent, item));
};

// show mappeds by country
const showMappedByCountry = (data, country) => {
  const result = data.filter((item) => item.pais === country);

  initiativesParent.innerHTML = "";
  result.forEach((item) => renderMappedInitiative(initiativesParent, item));
};

// show mappeds by state
const showMappedByState = (data, state) => {
  const result = data.filter((item) => item.status === state);

  initiativesParent.innerHTML = "";
  result.forEach((item) => renderMappedInitiative(initiativesParent, item));
};

// show mappeds by area
const showMappedByArea = (data, area) => {
  const result = data.filter((item) => item.area === area);

  initiativesParent.innerHTML = "";
  result.forEach((item) => renderMappedInitiative(initiativesParent, item));
};

// show mappeds by impact audit
const showMappedByImpactAudit = (data, impact) => {
  const result = data.filter((item) => item.impacto === impact);

  initiativesParent.innerHTML = "";
  result.forEach((item) => renderMappedInitiative(initiativesParent, item));
};

// show mappeds by incident
const showMappedByIncident = (data, incident) => {
  const result = data.filter((item) => item.incidentes === incident);

  initiativesParent.innerHTML = "";
  result.forEach((item) => renderMappedInitiative(initiativesParent, item));
};

const showModalMappedInitiatives = (id) => {
  const data = JSON.parse(res.value);
  const result = data.filter((item) => item.id === +id);
  return result;
};

// INIT MAPPEDS
const init = () => {
  showMappedInitiatives(JSON.parse(res.value));
};
init();

// showMappedByCountry(JSON.parse(res.value), "Colombia");

// showMappedByState(JSON.parse(res.value), "En proceso de implementación");

// EVENT HANDLERS

initiativesParent.addEventListener("click", function (e) {
  const childElement = e.target.closest(".modal-button--open");
  if (!childElement) return;

  // show data per index json
  const id = childElement.getAttribute("data-id");
  const result = showModalMappedInitiatives(id)[0];

  let data = new Object(result);
  data = {
    aplicacionAsistenciaSocial: data.aplicacionAsistenciaSocial,
    aplicacionEducacion: data.aplicacionEducacion,
    aplicacionElecciones: data.aplicacionElecciones,
    aplicacionOtro: data.aplicacionOtro,
    aplicacionSalud: data.aplicacionSalud,
    aplicacionSeguridadPublica: data.aplicacionSeguridadPublica,
    aplicacionTransporte: data.aplicacionTransporte,
    descripcion: data.descripcion,
    status: data.status,
    id: data.id,
    nombre: data.nombre,
    pais: data.pais,
    proveedores: [
      data.proveedor1,
      data.proveedor2,
      data.proveedor3,
      data.proveedor4,
    ],
  };
  const modal = new Modal(body, data, 1);
});

buttonParent.addEventListener("click", function (e) {
  const button = e.target.closest(".button-filter");
  const id = button.getAttribute("data-tab");

  // Reset mapped initiatives
  showMappedInitiatives(JSON.parse(res.value));

  // Reset active
  buttonFilter.forEach((button) => {
    button.classList.remove("button-filter--active");
  });

  // Reset initiative message
  initiativeMessage.forEach((message) => {
    message.classList.add("hidden");
  });

  // Reset filter initiative
  filterInitiative.forEach((initiative) => {
    initiative.classList.add("hidden");
  });

  // Show active button filter
  if (!button.classList.contains("button-filter--active"))
    button.classList.add("button-filter--active");

  // Show initiative message
  initiativeMessage[id].classList.remove("hidden");

  // Show filter initiative
  if (!filterInitiative[id]) return;
  filterInitiative[id].classList.remove("hidden");
});

// Show mapped by countries event
selectCountries.addEventListener("change", function (e) {
  if (e.target.value === "Todos") showMappedInitiatives(JSON.parse(res.value));
  else showMappedByCountry(JSON.parse(res.value), e.target.value);
});

// show mapped by state event
selectState.addEventListener("change", function (e) {
  if (e.target.value === "Todos") showMappedInitiatives(JSON.parse(res.value));
  else showMappedByState(JSON.parse(res.value), e.target.value);
});

// show mapped by area event
selectArea.addEventListener("change", function (e) {
  if (e.target.value === "Todos") showMappedInitiatives(JSON.parse(res.value));
  else showMappedByArea(JSON.parse(res.value), e.target.value);
});

// show mapped by impact audit event
selectImpactAudit.addEventListener("change", function (e) {
  if (e.target.value === "Todos") showMappedInitiatives(JSON.parse(res.value));
  else showMappedByImpactAudit(JSON.parse(res.value), e.target.value);
});

// show mapped by incident event
selectIncident.addEventListener("change", function (e) {
  if (e.target.value === "Todos") showMappedInitiatives(JSON.parse(res.value));
  else showMappedByIncident(JSON.parse(res.value), e.target.value);
});

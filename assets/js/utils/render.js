const renderMappedInitiative = (parentEl, data) => {
  const html = `
      <div class="initiatives">
          <div class="initiatives-padding">
              <span class="initiatives-country">${data.pais}</span>
              <h3 class="initiatives-title">
                  ${data.nombre}
              </h3>
          </div>
          <button data-id="${data.id}"
              class="initiatives-button modal-button--open">
              Ver ficha
              <img class="initiatives-image" src="/images/public/icons/icon-arrow-right.svg" alt="icon arrow right">
          </button>
      </div>
      `;
  parentEl.insertAdjacentHTML("beforeend", html);
};

export { renderMappedInitiative };

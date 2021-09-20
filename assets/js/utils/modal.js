class Modal {
  // Variables
  #parentEl;
  #dataBase;
  #option;

  // Constructor
  constructor(parentEl, dataBase, opc) {
    this.#parentEl = parentEl;
    this.#dataBase = dataBase;
    this.#option = opc;
    this._openModal(this.#option);

    // Event handlers

    // Close modal
    document
      .querySelector(".modal-button--close")
      .addEventListener("click", this._closeModal);
    document
      .querySelector(".modal-overlay")
      .addEventListener("click", this._closeModal);
    window.addEventListener("keydown", (e) => {
      if (
        e.key === "Escape" &&
        document
          .querySelector(".modal-overlay")
          .classList.contains("modal-overlay-active")
      )
        this._closeModal();
    });
  }
  // Funciones
  _renderModalIniciativas() {
    let html = `
    <div class="modal">
            <div class="modal-left">
                <span class="modal-country">${this.#dataBase.pais}</span>
                <h3 class="modal-title">
                    ${this.#dataBase.nombre}
                </h3>
                <p class="modal-description">
                    ${this.#dataBase.descripcion}
                </p>
            </div>
            <div class="modal-right">
                <span class="modal-estado-implementacion">Estado de la implementación</span>
                <ul class="modal-list">
                    <li class="modal-list-content">${this.#dataBase.estado}</li>
                </ul>

                <span class="modal-area-aplicacion">Área de aplicación</span>
                <ul class="modal-list">
                    <li class="modal-list-content">Seguridad publica y Transporte</li>
                </ul>

                <span class="modal-proveedores">Proveedores</span>
                <ul class="modal-list--blue-light">
                  ${this._renderModalProvider()}
                </ul>
            </div>
            <button class="modal-button--close">
                <i class="fas fa-times modal-icon"></i>
            </button>
        </div>
        <div class="modal-overlay"></div>
        `;
    this.#parentEl.insertAdjacentHTML("beforeend", html);
  }

  _renderModalProviders() {
    const html = `
      <div class="modal">
          <div class="modal-left">
              <span class="modal-country">${this.#dataBase.pais}</span>
              <h3 class="modal-title">
                 ${this.#dataBase.nombre}
              </h3>
              <p class="modal-link">Sitio web: <a class="modal-underline" target="_blank" href="${this.#dataBase.sitioWeb}">${this.#dataBase.sitioWeb}</a></p>
          </div>
          <div class="modal-right modal-right-dark">
              <span class="modal-proveedores">Sistemas que ha desarrollado</span>
              <p class="modal-description modal-list--blue-light">
              ${this.#dataBase.sistemaDesarrollado}
              </p>
          </div>
          <button class="modal-button--close">
              <i class="fas fa-times modal-icon"></i>
          </button>
      </div>
      <div class="modal-overlay"></div>
    `;
    this.#parentEl.insertAdjacentHTML("beforeend", html);
  }

  _renderModalProvider() {
    let html = "";

    let string = this.#dataBase.proveedores.filter((item) => item.length > 0);

    if (string.length > 0) {
      string.forEach((item) => {
        html += `<li class="modal-list-content">${item}</li>`;
      });
    } else {
      html += `<li class="modal-list-content">Sin proveedores</li>`;
    }

    return html;
  }

  _openModal(opc) {
    if (opc === 1) {
      this._renderModalIniciativas();
      setTimeout(() => {
        document.querySelector(".modal").classList.add("modal-active");
        document
          .querySelector(".modal-overlay")
          .classList.add("modal-overlay-active");
      }, 150);
    } else if (opc === 2) {
      this._renderModalProviders();
      setTimeout(() => {
        document.querySelector(".modal").classList.add("modal-active");
        document
          .querySelector(".modal-overlay")
          .classList.add("modal-overlay-active");
      }, 150);
    }
  }

  _closeModal() {
    document.querySelector(".modal").classList.remove("modal-active");
    document
      .querySelector(".modal-overlay")
      .classList.remove("modal-overlay-active");

    setTimeout(() => {
      document.querySelector(".modal").remove();
      document.querySelector(".modal-overlay").remove();
    }, 300);
  }
}

export { Modal };

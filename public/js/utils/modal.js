(()=>{var o=class{#l;#e;#a;constructor(e,l,a){this.#l=e,this.#e=l,this.#a=a,this._openModal(this.#a),document.querySelector(".modal-button--close").addEventListener("click",this._closeModal),document.querySelector(".modal-overlay").addEventListener("click",this._closeModal),window.addEventListener("keydown",s=>{s.key==="Escape"&&document.querySelector(".modal-overlay").classList.contains("modal-overlay-active")&&this._closeModal()})}_renderModalIniciativas(){let e=`
    <div class="modal">
            <div class="modal-left">
                <span class="modal-country">${this.#e.pais}</span>
                <h3 class="modal-title">
                    ${this.#e.nombre}
                </h3>
                <p class="modal-description">
                    ${this.#e.descripcion}
                </p>
            </div>
            <div class="modal-right">
                <span class="modal-estado-implementacion">Estado de la implementaci\xF3n</span>
                <ul class="modal-list">
                    <li class="modal-list-content">${this.#e.status}</li>
                </ul>

                <span class="modal-area-aplicacion">\xC1rea de aplicaci\xF3n</span>
                <ul class="modal-list">
                    ${this._renderModalArea()}
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
        `;this.#l.insertAdjacentHTML("beforeend",e)}_renderModalProviders(){let e=`
      <div class="modal">
          <div class="modal-left">
              <span class="modal-country">${this.#e.pais}</span>
              <h3 class="modal-title">
                 ${this.#e.nombre}
              </h3>
              <p class="modal-link">Sitio web: <a class="modal-underline" target="_blank" href="${this.#e.sitioWeb}">${this.#e.sitioWeb}</a></p>
          </div>
          <div class="modal-right modal-right-dark">
              <span class="modal-proveedores">Sistemas que ha desarrollado</span>
              <p class="modal-description modal-list--blue-light">
              ${this.#e.sistemaDesarrollado}
              </p>
          </div>
          <button class="modal-button--close">
              <i class="fas fa-times modal-icon"></i>
          </button>
      </div>
      <div class="modal-overlay"></div>
    `;this.#l.insertAdjacentHTML("beforeend",e)}_renderModalArea(){let e="",l=[...this.#e.area];return l.length>0&&l.forEach(a=>{e+=`<li class="modal-list-content">${a}</li>`}),console.log(e),e}_renderModalProvider(){let e="",l=this.#e.proveedores.filter(a=>a.length>0);return l.length>0?l.forEach(a=>{e+=`<li class="modal-list-content">${a}</li>`}):e+='<li class="modal-list-content">Sin proveedores</li>',e}_openModal(e){e===1?(this._renderModalIniciativas(),setTimeout(()=>{document.querySelector(".modal").classList.add("modal-active"),document.querySelector(".modal-overlay").classList.add("modal-overlay-active")},300)):e===2&&(this._renderModalProviders(),setTimeout(()=>{document.querySelector(".modal").classList.add("modal-active"),document.querySelector(".modal-overlay").classList.add("modal-overlay-active")},300))}_closeModal(){document.querySelector(".modal").classList.remove("modal-active"),document.querySelector(".modal-overlay").classList.remove("modal-overlay-active"),setTimeout(()=>{document.querySelector(".modal").remove(),document.querySelector(".modal-overlay").remove()},300)}};})();

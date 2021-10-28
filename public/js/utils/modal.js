(()=>{var o=class{#l;#s;#e;#a=document.documentElement.lang;constructor(s,a,l){this.#l=s,this.#s=a,this.#e=l,this._openModal(this.#e),document.querySelector(".modal-button--close").addEventListener("click",this._closeModal),document.querySelector(".modal-overlay").addEventListener("click",this._closeModal),window.addEventListener("keydown",e=>{e.key==="Escape"&&document.querySelector(".modal-overlay").classList.contains("modal-overlay-active")&&this._closeModal()})}_renderModalIniciativas(){let s="";this.#a==="es"?s=`
    <div class="modal">
            <div class="modal-left">
                <span class="modal-country">${this.#s.pais}</span>
                <h3 class="modal-title">
                    ${this.#s.nombre}
                </h3>
                <p class="modal-description">
                    ${this.#s.descripcion}
                </p>
            </div>
            <div class="modal-right">
                <span class="modal-estado-implementacion">Estado de la implementaci\xF3n</span>
                <ul class="modal-list">
                    <li class="modal-list-content">${this.#s.status}</li>
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
        `:this.#a==="en"?s=`
    <div class="modal">
            <div class="modal-left">
                <span class="modal-country">${this.#s.pais}</span>
                <h3 class="modal-title">
                    ${this.#s.nombre}
                </h3>
                <p class="modal-description">
                    ${this.#s.descripcion}
                </p>
            </div>
            <div class="modal-right">
                <span class="modal-estado-implementacion">Implementation status</span>
                <ul class="modal-list">
                    <li class="modal-list-content">${this.#s.status}</li>
                </ul>

                <span class="modal-area-aplicacion">Application area</span>
                <ul class="modal-list">
                    ${this._renderModalArea()}
                </ul>

                <span class="modal-proveedores">Providers</span>
                <ul class="modal-list--blue-light">
                  ${this._renderModalProvider()}
                </ul>
            </div>
            <button class="modal-button--close">
                <i class="fas fa-times modal-icon"></i>
            </button>
        </div>
        <div class="modal-overlay"></div>
        `:s=`
    <div class="modal">
            <div class="modal-left">
                <span class="modal-country">${this.#s.pais}</span>
                <h3 class="modal-title">
                    ${this.#s.nombre}
                </h3>
                <p class="modal-description">
                    ${this.#s.descripcion}
                </p>
            </div>
            <div class="modal-right">
                <span class="modal-estado-implementacion">Status de implementa\xE7\xE3o</span>
                <ul class="modal-list">
                    <li class="modal-list-content">${this.#s.status}</li>
                </ul>

                <span class="modal-area-aplicacion">Area de aplica\xE7\xE3o</span>
                <ul class="modal-list">
                    ${this._renderModalArea()}
                </ul>

                <span class="modal-proveedores">Provedores</span>
                <ul class="modal-list--blue-light">
                  ${this._renderModalProvider()}
                </ul>
            </div>
            <button class="modal-button--close">
                <i class="fas fa-times modal-icon"></i>
            </button>
        </div>
        <div class="modal-overlay"></div>
        `,this.#l.insertAdjacentHTML("beforeend",s)}_renderModalProviders(){let s="";this.#a==="es"?s=`
      <div class="modal">
          <div class="modal-left">
              <span class="modal-country">${this.#s.pais}</span>
              <h3 class="modal-title">
                 ${this.#s.nombre}
              </h3>
              <p class="modal-link">Sitio web: <a class="modal-underline" target="_blank" href="${this.#s.sitioWeb}">${this.#s.sitioWeb}</a></p>
          </div>
          <div class="modal-right modal-right-dark">
              <span class="modal-proveedores">Sistemas que ha desarrollado</span>
              <p class="modal-description modal-list--blue-light">
              ${this.#s.sistemaDesarrollado}
              </p>
          </div>
          <button class="modal-button--close">
              <i class="fas fa-times modal-icon"></i>
          </button>
      </div>
      <div class="modal-overlay"></div>
    `:this.#a==="en"?s=`
      <div class="modal">
          <div class="modal-left">
              <span class="modal-country">${this.#s.pais}</span>
              <h3 class="modal-title">
                 ${this.#s.nombre}
              </h3>
              <p class="modal-link">Web site: <a class="modal-underline" target="_blank" href="${this.#s.sitioWeb}">${this.#s.sitioWeb}</a></p>
          </div>
          <div class="modal-right modal-right-dark">
              <span class="modal-proveedores">Systems that have developed</span>
              <p class="modal-description modal-list--blue-light">
              ${this.#s.sistemaDesarrollado}
              </p>
          </div>
          <button class="modal-button--close">
              <i class="fas fa-times modal-icon"></i>
          </button>
      </div>
      <div class="modal-overlay"></div>
    `:s=`
      <div class="modal">
          <div class="modal-left">
              <span class="modal-country">${this.#s.pais}</span>
              <h3 class="modal-title">
                 ${this.#s.nombre}
              </h3>
              <p class="modal-link">Site web: <a class="modal-underline" target="_blank" href="${this.#s.sitioWeb}">${this.#s.sitioWeb}</a></p>
          </div>
          <div class="modal-right modal-right-dark">
              <span class="modal-proveedores">Sistemas que desenvolveramo</span>
              <p class="modal-description modal-list--blue-light">
              ${this.#s.sistemaDesarrollado}
              </p>
          </div>
          <button class="modal-button--close">
              <i class="fas fa-times modal-icon"></i>
          </button>
      </div>
      <div class="modal-overlay"></div>
    `,this.#l.insertAdjacentHTML("beforeend",s)}_renderModalArea(){let s="",a=[...this.#s.area];return a.length>0&&a.forEach(l=>{s+=`<li class="modal-list-content">${l}</li>`}),s}_renderModalProvider(){let s="",a=this.#s.proveedores.filter(l=>l.length>0);return a.length>0?a.forEach(l=>{s+=`<li class="modal-list-content">${l}</li>`}):this.#a==="es"?s+='<li class="modal-list-content">Sin proveedores</li>':this.#a==="en"?s+='<li class="modal-list-content">Without providers</li>':s+='<li class="modal-list-content">Sem provedores</li>',s}_openModal(s){s===1?(this._renderModalIniciativas(),setTimeout(()=>{document.querySelector(".modal").classList.add("modal-active"),document.querySelector(".modal-overlay").classList.add("modal-overlay-active")},300)):s===2&&(this._renderModalProviders(),setTimeout(()=>{document.querySelector(".modal").classList.add("modal-active"),document.querySelector(".modal-overlay").classList.add("modal-overlay-active")},300))}_closeModal(){document.querySelector(".modal").classList.remove("modal-active"),document.querySelector(".modal-overlay").classList.remove("modal-overlay-active"),setTimeout(()=>{document.querySelector(".modal").remove(),document.querySelector(".modal-overlay").remove()},300)}};})();

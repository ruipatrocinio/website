class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header>
            <div class="header-left">
            </div>
            <a class="header-title" href="/">Rui Patrocínio</a>
            <div class="header-right">
            </div>
        </header>
        `
    }
}
  
customElements.define('main-header', Header);


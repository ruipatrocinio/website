class Footer extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer>
            <center>
                <p><small>Copyright &copy; 2023 Rui Patrocínio. All rights reserved.</small></p>
                <ul>
                    <li><a href="https://www.linkedin.com/in/ruipatrocinio/" target="_blank">
                        <img class="linkedin-icon" src="/icons/linkedin.svg" width="20px" height="20px" alt="linkedin icon">
                    </a></li>
                    <li><a href="https://www.twitter.com/ruimpatrocinio/" target="_blank">
                        <img class="twitter-icon" src="/icons/twitter.svg" width="20px" height="20px" alt="twitter icon">  
                    </a></li>
                </ul>
            </center>
        </footer>
        `
    }
}
  
customElements.define('main-footer', Footer);
import config from '../config';

class DWFooter extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <div class="copyright">
                    Copyright &copy; 2021 - ${config.site.company}
                </div>
            </footer>
        `;
    }

}

customElements.define('dw-footer', DWFooter);
export class PCOWebComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        const linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'stylesheet');
        linkElement.setAttribute('href', 'src/index.css');
        this.shadowRoot!.appendChild(linkElement);
        this.render();
    }
    
    render() {}
}
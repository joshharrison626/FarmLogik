import { PCOWebComponent } from "./PCOWebComponent";

const CLASS_MAP = {
    default: [
        'w-full',
        'pr-4',
        'py-2',
        'rounded-lg',
        'border',
        'border-gray-300',
        'focus:outline-none',
        'focus:border-blue-500',
        'invalid:border-red-500',
    ],
    noIcon: [
        'pl-4',
    ],
    withIcon: [
        'pl-10',
    ],
};

export class TextField extends PCOWebComponent {

    constructor() {
        super();
    }

    label: string = '';
    placeholder: string = '';
    value: string = '';
    elem: HTMLInputElement = document.createElement('input');
    labelElem: HTMLLabelElement = document.createElement('label');
    required: boolean = false;
    icon: HTMLElement | null = null;
    onChange: (value: string) => void = () => {};
    pattern: string = '';
    ariaLabel: string = '';
    classes: string[] = [...CLASS_MAP.default];

    connectedCallback() {
        this.label = this.getAttribute('label') || '';
        this.placeholder = this.getAttribute('placeholder') || '';
        this.value = this.getAttribute('value') || '';
        this.required = this.hasAttribute('required');
        this.pattern = this.getAttribute('pattern') || '';
        this.ariaLabel = this.getAttribute('ariaLabel') || '';
        this.onChange = this.getAttribute('onChange') ? () => eval(this.getAttribute('onChange')!) : this.onChange;
        // this.icon = this.getAttribute('icon') || null;

        if (this.label) {
            this.labelElem.innerText = this.label;
        }

        super.connectedCallback();
    }

    render() {
        this.elem.type = 'text';
        this.elem.placeholder = this.placeholder;
        this.elem.value = this.value;
        this.elem.required = this.required;
        this.elem.pattern = this.required ? (this.pattern || '') : '';
        this.elem.classList.add(...this.classes);
        if (this.icon) {
            this.elem.classList.add(...CLASS_MAP.withIcon);
            this.shadowRoot!.appendChild(this.icon);
        } else {
            this.elem.classList.add(...CLASS_MAP.noIcon);
        }
        this.elem.onchange = () => this.onChange(this.elem.value);
        this.elem.setAttribute('aria-label', this.ariaLabel);

        if (this.label) {
            this.shadowRoot!.appendChild(this.labelElem);
            this.labelElem.appendChild(this.elem);
        } else {
            this.shadowRoot!.appendChild(this.elem);
        }
    }
}

customElements.define('pco-text-field', TextField);
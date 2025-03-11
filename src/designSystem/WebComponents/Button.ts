import { PCOWebComponent } from "./PCOWebComponent";

type ButtonPriority = 'primary' | 'secondary' | 'tertiary';

const CLASS_MAP: Record<ButtonPriority | 'default', string[]> = {
    default: [
        'flex',
        'items-center',
        'justify-center',
        'h-12',
        'rounded-md',
        'px-4',
        'py-2',
        'transition-colors',
        'w-fit'
    ],
    primary: [
        'bg-blue-600',
        'text-white',
        'shadow-lg',
        'hover:bg-blue-700',
    ],
    secondary: [
        'bg-white',
        'text-blue-600',
        'shadow-md',
        'hover:bg-gray-50',
    ],
    tertiary: [
        'bg-transparent',
        'text-blue-600',
        'shadow-none',
        'hover:underline',
        'focus:underline',
    ],
};

export class Button extends PCOWebComponent {
    constructor() {
        super();
    }

    label: string = '';
    onClick: () => void = () => {};
    classes: string[] = [...CLASS_MAP.default];
    elem: HTMLButtonElement = document.createElement('button');
    priority: ButtonPriority = 'primary';

    connectedCallback() {
        this.priority = this.getAttribute('priority') as ButtonPriority || this.priority;
        this.setClassesForPriority();
        this.label = this.innerHTML || this.getAttribute('label') || '';
        this.onClick = this.getAttribute('onClick') ? () => eval(this.getAttribute('onClick')!) : this.onClick;
        super.connectedCallback();
    }

    static get observedAttributes() {
        return ['priority'];
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (name === 'priority' && oldValue && oldValue !== newValue) {
            this.priority = newValue as ButtonPriority;
            this.setClassesForPriority();
        }
    }

    setClassesForPriority() {
        this.classes = [...CLASS_MAP.default, ...CLASS_MAP[this.priority as ButtonPriority]];
        this.elem.className = this.classes.join(' ');
    }

    render() {
        this.setClassesForPriority();
        this.elem.onclick = this.onClick;
        this.elem.innerHTML = this.label;
        this.shadowRoot!.appendChild(this.elem);
    }
}

customElements.define('pco-button', Button);
import { PCOWebComponent } from "./PCOWebComponent";

const CLASS_MAP = {
    listContainer: [
        'hidden',
        'list-none',
        'absolute',
        'm-0',
        'bg-white',
        'border',
        'border-gray-300',
        'rounded-sm',
        'shadow-md',
    ],
    listItem: [
        'cursor-pointer',
        'p-4',
        'hover:bg-gray-100',
    ],
};

class DropdownMenu extends PCOWebComponent {
    private buttonElement!: HTMLButtonElement;
    private listContainer!: HTMLUListElement;
    private isOpen: boolean = false;
  
    constructor() {
      super();
    }
  
    connectedCallback() {
      super.connectedCallback();
      const items = this.getAttribute('items');
      if (items) {
        this.renderListItems(JSON.parse(items));
      }
    }
  
    attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
      if (name === 'items') {
        this.renderListItems(JSON.parse(newValue));
      }
    }
  
    static get observedAttributes() {
      return ['items'];
    }

    generateRandomId() {
        return Math.random().toString(36).substr(2, 9);
    }
  
    toggleDropdown() {
      this.isOpen = !this.isOpen;
      this.buttonElement.setAttribute('aria-expanded', String(this.isOpen));
      this.listContainer.classList.toggle('hidden', !this.isOpen);
    }
  
    renderListItems(items: string[]) {
      this.listContainer.innerHTML = '';
      items.forEach((item) => {
        const listItem = document.createElement('li') as HTMLLIElement;
        listItem.textContent = item;
        listItem.classList.add(...CLASS_MAP.listItem);
        listItem.setAttribute('role', 'menuitem');
        listItem.setAttribute('tabindex', '-1');  // Makes items focusable
        listItem.onclick = () => this.selectItem(item);
        this.listContainer.appendChild(listItem);
      });
    }
  
    selectItem(item: string) {
      this.dispatchEvent(new CustomEvent('select', { detail: item }));
      this.toggleDropdown();
    }

    render() {
      this.buttonElement = document.createElement('pco-button') as HTMLButtonElement;
      this.buttonElement.id = this.generateRandomId();
      this.buttonElement.textContent = 'Settings';
      this.buttonElement.setAttribute('aria-haspopup', 'true');
      this.buttonElement.setAttribute('aria-expanded', 'false');
      this.buttonElement.onclick = this.toggleDropdown.bind(this);
  
      this.listContainer = document.createElement('ul');
      this.listContainer.classList.add(...CLASS_MAP.listContainer);
      this.listContainer.setAttribute('role', 'menu');
      this.listContainer.setAttribute('aria-labelledby', this.buttonElement.id);
      this.shadowRoot!.append(this.buttonElement, this.listContainer);
    }
  }
  
  customElements.define('dropdown-menu', DropdownMenu);
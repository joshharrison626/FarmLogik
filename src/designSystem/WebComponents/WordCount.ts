import { PCOWebComponent } from "./PCOWebComponent";

export type WordCountProps = {
    children: React.ReactNode;
};

class WordCount extends PCOWebComponent {
  constructor() {
    super();
  }

  private wordCount: number = 0;
  color: string = "blue";

  countWords(node: HTMLElement) {
    const text = node.textContent || node.innerText;
    const words = text.split(" ").filter((word: string) => word !== "");
    return words.length;
  }

  connectedCallback() {
    this.color = this.getAttribute("color") || this.color;
    this.wordCount = this.countWords(this.parentNode! as HTMLElement);
    // this.attachShadow({ mode: "open" });
    // this.render();

    super.connectedCallback();
  }

  render() {
    this.shadowRoot!.innerHTML = `
      <style>
        p {
          color: ${this.color};
        }
      </style>
      <p>Word Count: <span id="wordCount">${this.wordCount}</span></p>
    `;
  }
}

customElements.define("word-count", WordCount);

export default WordCount;
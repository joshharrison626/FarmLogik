declare global {
    interface JSX {
        IntrinsicElements: {
            'word-count': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
            // Add other custom elements here
        };
    }
}

declare class WordCount extends HTMLElement {
    constructor();
    private wordCount;
    countWords(node: HTMLElement): number;
    connectedCallback(): void;
    render(): void;
}
export interface TextareaAutosizerOptions {
    minHeight?: number;
    maxHeight?: number;
}

export class TextareaAutosizer {
    #refTextarea: HTMLTextAreaElement | null = null;
    #resizeObserver: ResizeObserver | null = null;
    #resizeListener: () => void;

    constructor() {
        this.#resizeListener = this.#resizeTextarea.bind(this);
        if (typeof window !== 'undefined' && window.Math === Math && typeof window.ResizeObserver !== 'undefined') {
            this.#resizeObserver = new ResizeObserver(this.#resizeListener);
        }
    }

    set(element: HTMLTextAreaElement, options: TextareaAutosizerOptions): TextareaAutosizer {
        this.#refTextarea = element;

        this.updateOptions(options);
        
        this.#refTextarea.addEventListener('input', this.#resizeListener);

        if (this.#resizeObserver) {
            this.#resizeObserver.observe(this.#refTextarea);
        } else {
            window.addEventListener('resize', this.#resizeListener);
        }
        
        return this;
    }

    updateOptions(options: TextareaAutosizerOptions): void {
        if(options.minHeight) {
            this.#refTextarea.style.minHeight = `${options.minHeight}px`;
        }

        if(options.maxHeight) {
            this.#refTextarea.style.maxHeight = `${options.maxHeight}px`;
        }

        this.#resizeTextarea();
    }
    
    remove(): TextareaAutosizer {
        this.#refTextarea.removeEventListener('input', this.#resizeListener);

        if (this.#resizeObserver) {
            this.#resizeObserver.unobserve(this.#refTextarea);
        } else {
            window.removeEventListener('resize', this.#resizeListener);
        }

        this.#refTextarea.style.removeProperty('height');
        this.#refTextarea.style.removeProperty('min-height');
        this.#refTextarea.style.removeProperty('max-height');
        this.#refTextarea.style.removeProperty('overflow-y');

        return this;
    }
    
    #resizeTextarea(): void {
        if (!this.#refTextarea || this.#refTextarea.tagName !== 'TEXTAREA') return;

        this.#refTextarea.style.overflowY = 'hidden';
        this.#refTextarea.style.height = '0';

        const elementComputedStyle = window.getComputedStyle(this.#refTextarea);
        
        const currentHeight = this.#refTextarea.scrollHeight + parseInt(
            elementComputedStyle.height,
            10
        ) - this.#refTextarea.clientHeight;

        if (currentHeight < 0) return;

        const maxHeight = parseInt(
            elementComputedStyle.maxHeight,
            10
        );

        if (maxHeight && currentHeight >= maxHeight) {
            this.#refTextarea.style.overflowY = 'auto';
        }

        this.#refTextarea.style.height = `${currentHeight}px`;
    } 
}

export const setTextareaAutosizer = (
    element: HTMLTextAreaElement,
    options: TextareaAutosizerOptions
) => new TextareaAutosizer().set(element, options);

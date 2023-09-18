interface TextareaAutosizerOptions {
    minHeight?: number;
    maxHeight?: number;
}

export class TextareaAutosizer {
    #element: HTMLTextAreaElement | null = null;
    #setHeightEvent: () => void;

    constructor() {
        this.#setHeightEvent = this.#setHeight.bind(this);
    }

    set(element: HTMLTextAreaElement, options: TextareaAutosizerOptions): TextareaAutosizer {
        this.#element = element;
        this.updateOptions(options);

        this.#setHeight();
        
        this.#element.addEventListener('input', this.#setHeightEvent);
        window.addEventListener('resize', this.#setHeightEvent);
        
        return this;
    }

    updateOptions(options: TextareaAutosizerOptions): void {
        if(options.minHeight) {
            this.#element.style.minHeight = `${options.minHeight}px`;
        }

        if(options.maxHeight) {
            this.#element.style.maxHeight = `${options.maxHeight}px`;
        }
    }
    
    remove(): TextareaAutosizer {
        this.#element.removeEventListener('input', this.#setHeightEvent);
        window.removeEventListener('resize', this.#setHeightEvent);
        
        return this;
    }

    
    #setHeight(): void {
        if (!this.#element || this.#element.tagName !== 'TEXTAREA') return;

        this.#element.style.overflowY = 'hidden';

        const elementComputedStyle = window.getComputedStyle(this.#element);
        
        const outerHeight: number = parseInt(
            elementComputedStyle.height,
            10
        );
    
        const diff: number = outerHeight - this.#element.clientHeight;
        
        this.#element.style.height = '0';
        
        let currentHeight = this.#element.scrollHeight + diff;;

        if (currentHeight > 0) {
            const maxHeight = parseInt(
                elementComputedStyle.maxHeight,
                10
            );

            if (maxHeight && currentHeight >= maxHeight) {
                this.#element.style.overflowY = 'auto';
            }

            this.#element.style.height = `${currentHeight}px`;
        } else {
            this.#element.style.removeProperty('height');
        }
    }
        
}

export const setTextareaAutosizer = (
    element: HTMLTextAreaElement,
    options: TextareaAutosizerOptions
) => new TextareaAutosizer().set(element, options);


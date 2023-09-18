export interface TextareaAutosizerOptions {
    minHeight?: number;
    maxHeight?: number;
}
export declare class TextareaAutosizer {
    #private;
    constructor();
    set(element: HTMLTextAreaElement, options: TextareaAutosizerOptions): TextareaAutosizer;
    updateOptions(options: TextareaAutosizerOptions): void;
    remove(): TextareaAutosizer;
}
export declare const setTextareaAutosizer: (element: HTMLTextAreaElement, options: TextareaAutosizerOptions) => TextareaAutosizer;
//# sourceMappingURL=index.d.ts.map
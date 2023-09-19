import { setTextareaAutosizer } from './textarea-autosizer.js';

setTextareaAutosizer(
    document.querySelector('textarea'), 
    { 
        minHeight: 60,
        maxHeight: 240
    }
);

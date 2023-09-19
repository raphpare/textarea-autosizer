import { setTextareaAutosizer } from '../../lib/index.esm.js';

setTextareaAutosizer(
    document.querySelector('textarea'), 
    { 
        minHeight: 60,
        maxHeight: 240
    }
);

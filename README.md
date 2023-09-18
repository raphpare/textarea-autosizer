# Textarea Autosizer
Textarea Autosizer automatically resizes the height of a textarea based on the content entered or pasted inside it.

## Getting Started
1. [Install](#install)
2. [Examples](#examples)
2. [Methods](#methods)

## Install

### npm
```
npm i textarea-autosizer --save
```

### Yarn

```
yarn add textarea-autosizer
```

## Examples

### HTML
``` HTML
<textarea>Text</textarea>
```

### TypeScript
#### setTextareaAutosizer() Fonction
``` TS
import { setTextareaAutosizer } from 'textarea-autosizer';

const refTextarea = document.querySelector('textarea');
const textareaAutosizer = setTextareaAutosizer(refTextarea);

// Remove textareaAutosizer
// textareaAutosizer.remove();

```

#### TextareaAutosizer Class
``` TS
import { TextareaAutosizer } from 'textarea-autosizer';

const refTextarea = document.querySelector('textarea');

const textareaAutosizer = new TextareaAutosizer();
textareaAutosizer.set(refTextarea);


## Methods

### TextareaAutosizer.set(htmlTextAreaElement, options)
Initializing the textarea.

**options**
| Attribute | Description |
| -- | -- | -- |
| minHeight?: `number` | Minimum height of textarea |
| maxHeight?: `number` | Maximum height of textarea |


### TextareaAutosizer.remove()
Remove automatic textarea resizing.

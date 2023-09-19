# Textarea Autosizer [dependency-free]
Textarea Autosizer automatically resizes the height of a textarea based on the content entered or pasted inside it.

[Live example](https://raphpare.github.io/textarea-autosizer)

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

## [Examples](https://raphpare.github.io/textarea-autosizer)

### HTML
``` HTML
<textarea></textarea>
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
```

## Methods

### TextareaAutosizer.set(htmlTextAreaElement, options)
Initializing the Textarea Autosizer.

#### Options
| Attribute | Description |
| -- | -- |
| minHeight?: `number` | Minimum height of textarea |
| maxHeight?: `number` | Maximum height of textarea |


### TextareaAutosizer.remove()
Remove automatic textarea resizing.

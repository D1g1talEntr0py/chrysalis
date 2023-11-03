# chrysalis
JavaScript Utility Modules and Extensions

This is a collection of various utility functions.
You can either import an ES module or add to the prototype of an existing object.

### Installation:
```bash
npm install @d1g1tal/chrysalis --save
```

### Usage:
```javascript
import { _arrayIsEmpty } from '@d1g1tal/chrysalis';

const array = [];

console.log(`Array is empty? ${_arrayIsEmpty(array)}`); // Array is empty? true
```

### Available ESM Modules:
- _arrayInsert
- _arrayIsEmpty
- _arrayRemove
- _asciiToHex
- _booleanParse
- _defineProperties
- _elementSiblings
- _toggleElementClasses
- _asciiToHex
- _hexToAscii

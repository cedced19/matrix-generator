# int-matrix-generator

A tool to generate matrix of random integer with line and column number.

```
npm install --save int-matrix-generator
```

## matrixGenerator(line, column, min, max)
```javascript
var matrixGenerator = require('int-matrix-generator');
matrixGenerator(3, 4, -10, 10);
// => [ [ -2, 1, 3, 5 ], [ -9, -1, -9, 4 ], [ -9, -5, -2, -5 ] ]
```
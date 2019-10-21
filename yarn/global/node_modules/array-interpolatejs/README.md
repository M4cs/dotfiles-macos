# array-interpolatejs
Interpolate an array of numbers in js

## Requirements
* node 8.0 or higher (need fancy syntax features thats why 8+)
* npm or yarn

## Installation

`npm install array-interpolatejs`

## Usage
```javascript
const { interpolateArray } = require('array-interpolatejs')

interpolateArray(3)([1, 2, 3])
//[1, 2, 3]

interpolateArray(5)([1, 2, 3])
//[1, 1.5, 2, 2.5, 3]

iterpolateArray(4)([5, 9, 500, 30, 80, 5, 9])
//[5, 500, 80, 9]

interpolateArray(9)([9])
//[9, 9, 9, 9, 9, 9, 9, 9, 9]
```

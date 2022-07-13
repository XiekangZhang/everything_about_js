# everything_about_js

## JavaScript from Youtube

### Comments

- // in-line comment
- /\*\* \*/ multi-line comment

### Data Types

- undefined, null, boolean, string, symbol, number and object (key, value)
- var vs let vs const
  - var global or local variable, however var and let do not have any differences, duplicate name possible
  - let besides, block scope, and no duplicate name possible
  - const constant

### Array

- array.push(): add an element at the end
- array.unshift(): add an element at the begining
- array.pop(): remove the last element
- array.shift(): remove the first element
- array.filter(_func_)
- array.map(_func_)
- array.reduce(_func_)
- _arr2_ = [_...arr1_]: copy a array, this also calls spread operator

### Equal Sign

- == type conversion
- === stict comparison

### Object

- delete _object.property_
- Object.freeze(_object_)

### Functions

- function() {}
- const func = () => {} for multi-lines or => for one-line

### Unlimited args

- ...args

### Destructuring Assignment

- const {_objectProp_: _varName_} = _object_
- const [z, x, , y] = [1, 2, 3, 4, 5, 6]: z = 1, x = 2, y = 4
- const [, , ...arr] = [1, 2, 3, 4, 5, 6]: arr = [3, 4, 5, 6]

### Template Literals

- `Hello, my name is ${person.name}!`

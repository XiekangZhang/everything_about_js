// * destructuring with an object
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

const half = (function () {
  return function half({ max, min }) {
    return (max + min) / 2.0;
  };
})();

console.log(stats);
console.log(half(stats));

// * class
function makeClass() {
  class Vegetable {
    constructor(name) {
      this._name = name;
    }
    get name() {
      return this._name;
    }
    set name(name) {
      this._name = name;
    }
  }
  return Vegetable;
}

const Vegetable = makeClass();
const carrot = new Vegetable("carrot");
console.log(carrot.name);
carrot.name = "small carrot";
console.log(carrot.name);

// * import
import {capitalizeString} from "./string_function.js";

const cap = capitalizeString("hello!");
console.log(cap);

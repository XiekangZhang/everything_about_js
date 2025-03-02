import { Dog } from "./dog_constructor.js";

// 1st we need an object that inherits from the dog prototype
var aDog = new Dog();

// using empty dog instance to make the show dog prototype
// turning our dog instance into a show dog prototype
function ShowDog(name, breed, weight, handler) {
  //this.name = name;
  //this.breed = breed;
  //this.weight = weight;
  Dog.call(this, name, breed, weight); // like super() in java
  this.handler = handler;
}

// * set prototype of ShowDog to be a new instance of Dog
ShowDog.prototype = new Dog();
ShowDog.prototype.constructor = ShowDog;

ShowDog.prototype.league = "Webville";
ShowDog.prototype.stack = function () {
  console.log("Stack");
};
ShowDog.prototype.bait = function () {
  console.log("Bait");
};
ShowDog.prototype.gait = function (kind) {
  console.log(kind + "ing");
};
ShowDog.prototype.groom = function () {
  console.log("Groom");
};

var scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
scotty.stack();
scotty.bark();
console.log(scotty.league);
console.log(scotty.species);
if (scotty instanceof Dog) {
  console.log("Scotty is a Dog");
}
if (scotty instanceof ShowDog) {
  console.log("Scotty is a ShowDog");
}

//
var fido = new Dog("Fido", "Mixed", 38);
if (fido instanceof Dog) {
  console.log("Fido is a Dog");
}

if (fido instanceof ShowDog) {
  console.log("Fido is a ShowDog");
}

console.log("Fido constructor is " + fido.constructor);
console.log("Scotty constructor is " + scotty.constructor);

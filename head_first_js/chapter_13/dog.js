function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

// using prototype for inheritance
Dog.prototype.species = "Canine";
Dog.prototype.sitting = false;

// * function() should not be ignored, if you working with this.
Dog.prototype.bark = function () {
  if (this.weight > 25) {
    console.log(this.name + " says Woof!");
  } else {
    console.log(this.name + " says Yip!");
  }
};

Dog.prototype.run = () => {
  console.log("Run!");
};

Dog.prototype.wag = () => {
  console.log("Wag!");
};

var fido = new Dog("Fido", "Mixed", 38);
var fluffy = new Dog("Fluffy", "Poodle", 30);
var spot = new Dog("Spot", "Chihuahua", 10);

fido.bark();
fido.run();
fido.wag();

fluffy.bark();
fluffy.run();
fluffy.wag();

spot.bark();
spot.run();
spot.wag();

// overwrite function
spot.bark = function () {
  console.log(this.name + " says big WOOF!");
};

spot.bark();

// add new function
Dog.prototype.sit = function () {
  // * how the sitting property works --> the first time we get the value of sitting, we're getting it from the prototype
  // * But then we set sitting to true, that happens in the object instance, not the prototype
  if (this.sitting) {
    console.log(this.name + " is already sitting");
  } else {
    this.sitting = true;
    console.log(this.name + " is now sitting");
  }
};

var barnaby = new Dog("Barnaby", "Basset Hound", 55);
barnaby.sit();
barnaby.sit();

spot.sit();
spot.sit();

// hasOwnProperty
console.log(spot.hasOwnProperty("species"));
console.log(fido.hasOwnProperty("species"));

console.log(spot.hasOwnProperty("sitting"));
console.log(fido.hasOwnProperty("sitting"));
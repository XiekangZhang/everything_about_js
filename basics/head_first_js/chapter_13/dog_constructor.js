export function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.prototype.species = "Canine";

Dog.prototype.bark = function () {
  if (this.weight > 25) {
    console.log(this.name + " says Woof!");
  } else {
    console.log(this.name + " says Yip!");
  }
};

Dog.prototype.run = function () {
  console.log("Run!");
};

Dog.prototype.wag = function () {
  console.log("Wag!");
};



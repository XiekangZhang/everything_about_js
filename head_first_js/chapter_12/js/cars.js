function Car(params) {
  this.make = params.make;
  this.model = params.model;
  this.year = params.year;
  this.color = params.color;
  this.passengers = params.passengers;
  this.convertible = params.convertible;
  this.mileage = params.mileage;
  this.started = false;

  this.start = () => {
    console.log("You turn the key and the " + this.make + " starts up.");
    this.started = true;
  };
  this.stop = () => {
    console.log("You turn the key and the " + this.make + " shuts off.");
    this.started = false;
  };
  this.drive = () => {
    if (this.started) {
      console.log(this.make + " " + this.model + " goes zoom zoom!");
    } else {
      console.log("Start the engine first.");
    }
  };
}

var cadiParams = {
  make: "GM",
  model: "Cadillac",
  year: 1955,
  color: "tan",
  passengers: 5,
  convertible: false,
  mileage: 12892,
};

var cadi = new Car(cadiParams);
cadi.start();
cadi.drive();
cadi.drive();
cadi.stop();

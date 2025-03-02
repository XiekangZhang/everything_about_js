// * pass function as argument
var passengers = [
  { name: "Jane Doloop", paid: true, ticket: "coach" },
  { name: "Dr. Evel", paid: true, ticket: "firstclass" },
  { name: "Sue Property", paid: false, ticket: "firstclass" },
  { name: "John Funcall", paid: true, ticket: "coach" },
];

function processPassengers(passengers, testFunction) {
  for (var i = 0; i < passengers.length; i++) {
    if (testFunction(passengers[i])) {
      return false;
    }
  }
  return true;
}

function checkNoFlyList(passenger) {
  return passenger.name === "Dr. Evel";
}

function checkNotPaid(passenger) {
  return !passenger.paid;
}

var allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
  console.log(
    "The plane can't take off: we have a passenger on the no-fly-list."
  );
}

var allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
  console.log("The plane can't take off: not everyone has paid.");
}

// * return function
function addN(n) {
  var adder = function (x) {
    return n + x;
  };
  return adder;
}

console.log(addN(2)(9));

//
function createDrinkOrder(passenger) {
  var orderFunction;

  if (passenger.ticket === "firstclass") {
    orderFunction = function () {
      alert("Would you like a cocktail or wine?");
    };
  } else if (passenger.ticket === "premium") {
    orderFunction = function () {
      alert("Would you like cola, water or wine?");
    };
  } else {
    orderFunction = function () {
      alert("Your choice is cola or water.");
    };
  }
  return orderFunction;
}

//
function printPassenger(passenger) {
  var message = passenger.name;
  if (passenger.paid) {
    message = message + " has paid";
  } else {
    message = message + " has not paid";
  }
  console.log(message);
  return false;
}

function processPassengers(passengers, printPassenger) {
  for (var i = 0; i < passengers.length; i++) {
    printPassenger(passengers[i]);
  }
}

processPassengers(passengers, printPassenger);

//
function createDinnerOrderFunction(passenger) {
  var orderFunction;
  if (passenger.ticket === "firstclass") {
    orderFunction = function () {
      alert("Would you like chicken or pasta?");
    };
  } else if (passenger.ticket === "premium") {
    orderFunction = function () {
      alert("Would you like a snack box or cheese plate?");
    };
  } else {
    orderFunction = function () {
      alert("Would you like peanuts or pretzels?");
    };
  }
  return orderFunction;
}

function serveCustomer(passenger) {
  var getDrinkOrderFunction = createDrinkOrder(passenger);
  getDrinkOrderFunction();

  var getDinnerOrderFunction = createDinnerOrderFunction(passenger);
  getDinnerOrderFunction();
}

function servePassengers(passengers) {
  for (var i = 0; i < passengers.length; i++) {
    serveCustomer(passengers[i]);
  }
}

servePassengers(passengers);

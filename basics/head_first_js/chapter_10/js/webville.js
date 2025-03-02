var products = [
  { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
  { name: "Orange", calories: 160, color: "orange", sold: 12101 },
  { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
  { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
  { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
  { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
  { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
  { name: "Water", calories: 0, color: "clear", sold: 62123 },
];

//
function compareNumbers(num1, num2) {
  if (num1 > num2) {
    return 1; // * num1 after num2
  } else if (num1 === num2) {
    return 0; // * num1 and num2 are equal, leave at the place
  } else {
    return -1; // * num1 before num2
  }
}

function compareNumbersDesc(num1, num2) {
  if (num1 < num2) {
    return 1;
  } else if (num1 === num2) {
    return 0;
  } else {
    return -1;
  }
}

var numbersArray = [60, 50, 62, 58, 54, 54];
numbersArray.sort(compareNumbers);
console.log(numbersArray);
numbersArray.sort(compareNumbersDesc);
console.log(numbersArray);

//

function compareSold(colaA, colaB) {
  if (colaA.sold > colaB.sold) {
    return 1;
  } else if (colaA.sold === colaB.sold) {
    return 0;
  } else {
    return -1;
  }
}

function printProducts(products) {
  for (var i = 0; i < products.length; i++) {
    console.log(
      "Name: " +
        products[i].name +
        ", Calories: " +
        products[i].calories +
        ", Color: " +
        products[i].color +
        ", Sold: " +
        products[i].sold
    );
  }
}

products.sort(compareSold);
printProducts(products);
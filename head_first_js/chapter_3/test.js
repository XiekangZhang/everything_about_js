var age = 7;

function addOne(x) {
  x = x + 1;
}
addOne(age);
console.log(age); // 7
// ! the real impact of pass-by-value is that any changes to a parameter's value within the function will affect only the parameter,
// ! not the original variable passed to the function.
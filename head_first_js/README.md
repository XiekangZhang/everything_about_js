# Getting functional

## pass-by-value & pass-by-reference

- pass-by-value: the value of a variable is passed to a function/method.
- pass-by-refrence: a refrence to that variable is passed to the function, which gives a way to change the contents of the variable
- JavaScript is pass-by-value (pass-by-copy)

## The short lives of variables

- GLOBALS live as long as the page. A global variable begins life when its JavaScript is loaded into the page.
- LOCAL variables typically disappear when your function ends.

## JavaScript objects

- JavaScript objects are just a collection of properties.

## Getting to know the DOM

- DOM stands for document object model --> interacting with your web page
- when you load a page into the browser, not only does the browser parse the HTML and then render it to the display, it also creates a set of objects that represent your markup. These objects are stored in the DOM.
- When you're dealing with the DOM it's important to execute your code only after the page is fully loaded.

## event handler = callback

- `window.onload = function_name`: a function will be executed after full-loading of a page

## null vs undefined vs NaN

- `null`: an object should be but one can't be created or found
- `undefined`: a variable hasn't been initialized, or an object with a missing property, or an array with a missing value
- `NaN != NaN`: return always TRUE --> RIGHT: `isNaN(myNum)`, WRONG: `myNum == NaN` --> `typeof 0/0` returns _number_
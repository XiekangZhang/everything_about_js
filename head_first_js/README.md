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

## null vs undefined vs NaN

- `null`: an object should be but one can't be created or found
- `undefined`: a variable hasn't been initialized, or an object with a missing property, or an array with a missing value
- `NaN != NaN`: return always TRUE --> RIGHT: `isNaN(myNum)`, WRONG: `myNum == NaN` --> `typeof 0/0` returns _number_

## == vs ===

- `==`: equality --> if the two values have the same type, just compare them; if the two values have different types, try to convert them into the same type and then compare them.
- `===`: strict equality --> two values are strictly equal only if they have the same type and the same value.

## type conversions

- `+`: does not convert string to number --> `3 + "4" = "34"` & `"4" + 3 = "43"` --> left-to-right associaticity --> `1+2+"pizzas" = "3 pizzas"` --> `3 + Number("4")`
- `* | / | -`: try to convert the string to number
- falsey: undefined, null, 0, empty string, and NaN

## Event Handler

- Whenever there's an event, there is an opportunity for your code to handle it.
- A handler is just a function. When an event occurs, its handler function is called.
- Event Handler = callback = listener

### how the event object works

- one _event object_ including general and specific information will be assigned to the event handler.
  - `eventObj.target`: the object on which the event occurred
  - `eventObj.type`: a string, like "click" or "load", that tells you what just happened
  - `eventObj.timeStamp`: when your event happened
  - `eventObj.keyCode`: what key the user just pressed
  - `eventObj.clientX`: how far from the left side of the browser window the user clicked
  - `eventObj.clientY`: how far from the top of the browser window the user clicked
  - `eventObj.touches`: using a touch device? find out how many fingers are touching the screen

### useful event handler

- `window.onload = function_name`: a function will be executed after full-loading of a page
- `setTimeout(function_name, time_in_mills)`
- `setInterval(function_name, time_in_mills)`

## function declaration vs function expression

- function declaration: `var fly = function(...){// code here!}` --> a function is created and setup before the rest of the code gets evaluated
- function expression: `function quack(...){// code here!}` --> a function is created as the code executes, at runtime
- you can assign functions to variables.
- you can pass functions to functions.
- you can return functions from functions.

# fcc-quizzes

## About
_My solutions to 
[FreeCodeCamp](https://learn.freecodecamp.org/) quizzes for reference._

# Quizzes 
## Introduction to Basic Algorithm Scripting
1.  [Convert Celsius to Fahrenheit](#1.-Convert-Celsius-to-Fahrenheit)
2.  [Reverse a String](#2.-Reverse-a-String)
3.  [Factorialize a Number](#3.-Factorialize-a-Number)


### [1. Convert Celsius to Fahrenheit](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/convert-celsius-to-fahrenheit)

_The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32._

```js
function convertToF(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

convertToF(30);
```

### [2. Reverse a String](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string)

_Reverse the provided string. Your result must be a string._
```js
function reverseString(str) {
  return (str.split("").reverse().join(''))
}

reverseString("hello");
```

### [3. Factorialize a Number](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number/)

_Return the factorial of the provided integer. Only integers greater than or equal to zero will be supplied to the function._
```js
function factorialize(num) {
  if ( num <= 1) {
    return 1;
  } 
  return num *(factorialize(num -1));
  }
factorialize(5);
```
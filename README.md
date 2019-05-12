# fcc-quizzes

[FreeCodeCamp](https://learn.freecodecamp.org/) 
## Introduction to Basic Algorithm Scripting

[Basic Algorithm Scripting: Convert Celsius to Fahrenheit](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/convert-celsius-to-fahrenheit)

_The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celsius representing a temperature in Celsius. Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit._

```
function convertToF(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

convertToF(30);
```

[Reverse a String](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string)

_Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string._
```
function reverseString(str) {
  return (str.split("").reverse().join(''))
}

reverseString("hello");
```
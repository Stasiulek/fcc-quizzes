# fcc-quizzes

## About
_My solutions to 
[FreeCodeCamp](https://learn.freecodecamp.org/) quizzes for reference._

# Quizzes 
## Introduction to Basic Algorithm Scripting
*   [Convert Celsius to Fahrenheit](#convert-celsius-to-fahrenheit)
*   [Reverse a String](#reverse-a-string)
*   [Factorialize a Number](#factorialize-a-number)
*   [Find the Longest Word in a String](#find-the-longest-word-in-a-string)
*   [Return Largest Numbers in Arrays](#return-largest-numbers-in-arrays)
*   [Repeat a String Repeat a String](#repeat-a-string-repeat-a-string)
*   [Truncate a String](#truncate-a-string)
* [Finders Keepers](#finders-keepers)




### [Convert Celsius to Fahrenheit](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/convert-celsius-to-fahrenheit)

_The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32._

```js
function convertToF(celsius) {
  let fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

convertToF(30);
```

<div align="right">
    <b><a href="#quizzes">↥ back to top</a></b>
</div>


### [Reverse a String](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/reverse-a-string)

_Reverse the provided string. Your result must be a string._
```js
function reverseString(str) {
  return (str.split("").reverse().join(''))
}

reverseString("hello");
```
<div align="right">
    <b><a href="#quizzes">↥ back to top</a></b>
</div>

### [Factorialize a Number](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/factorialize-a-number/)

_Return the factorial of the provided integer. Only integers greater than or equal to zero will be supplied to the function._
```js
//recursive
function factorialize(num) {
  if ( num <= 1) {
    return 1;
  } 
  return num *(factorialize(num -1));
  }
factorialize(5);
```

```js
//iterative
function factorialize(num) {
  for (var i = num - 1; i >= 1; i--){
    num *= i;
  }
  console.log(num);
}

factorialize(5);
```

<div align="right">
    <b><a href="#quizzes">↥ back to top</a></b>
</div>

### [Find the Longest Word in a String](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string)

_Return the length of the longest word in the provided sentence. Your response should be a number._

```js
function findLongestWordLength(str) {
  //turn sentence into an array of strings
  var arrOfStrigns = str.split(" ");

var arrOfLengths = [];
  for (var i = 0; i < arrOfStrigns.length; i++){
    console.log(arrOfStrigns[i].length);
    arrOfLengths.push(arrOfStrigns[i].length)
  }
  console.log(arrOfLengths);
  console.log(Math.max.apply(null, arrOfLengths));
  //get length of each array of strings
return (Math.max.apply(null, arrOfLengths));
  //get largest number
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
```
<div align="right">
    <b><a href="#quizzes">↥ back to top</a></b>
</div>

### [Return Largest Numbers in Arrays](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays)

_Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays._

```js
function largestOfFour(arr) {
  var smallArr = [];
  for (var i = 0; i <= arr.length - 1; i++) {
    smallArr.push(((Math.max.apply(null, arr[i]))));
  }
  console.log(smallArr);
  return smallArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```
<div align="right">
    <b><a href="#quizzes">↥ back to top</a></b>
</div>

### [Repeat a String Repeat a String](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string/)

_Repeat a given string ```str``` (first argument) for ```num``` times (second argument). Return an empty string if ```num``` is not a positive number._

```js
function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num < 1) {
return "";
  } else {
    var longStr = "";
    // var strArry = []
    for (var i = 1; i <= num; i++) {
     longStr += str;
    }
    // longStr = strArry.join("");
  }
  return longStr;
}

repeatStringNumTimes("abc", 1);
```

### [Truncate a String](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string)

_Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ```...``` ending._

```js
function truncateString(str, num) {
//   if (num < str.length) {
//     return(str.substring(0,num) + '...');
//   } else {
//  return str;
//   }
// }
return num < str.length ? str.substring(0,num) + '...' : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
```


<div align="right">
    <b><a href="#quizzes">↥ back to top</a></b>
</div>

### [Finders Keepers](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers)

_Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument). If no element passes the test, return undefined._

```js
function findElement(arr, func) {
  for (var i = 0; i <= arr.length; i++) {
    let num = arr[i];
    if (func(num)) {
      return num
    }
  }
  return undefined
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
```
<div align="right">
    <b><a href="#quizzes">↥ back to top</a></b>
</div>
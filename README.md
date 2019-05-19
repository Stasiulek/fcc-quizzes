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
*   [Boo who](#boo-who)
*   [Title Case a Sentence](#title-case-a-sentence)
*   [Falsy Bouncer](#falsy-bouncer)
*   [Slice and Splice](#slice-and-splice)
*   [Where do I Belong](#wwere-do-i-belong)
*   [Mutations](#mutations)



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

### [Boo who](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/boo-who)

_Check if a value is classified as a boolean primitive. Return true or false._
```js
function booWho(bool) {
    return typeof bool === 'boolean' ? true: false;
}
booWho(null);
```
<div align="right">
    <b><a href="#quizzes">↥ back to top</a></b>
</div>


### [Title Case a Sentence](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence)

_Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.For the purpose of this exercise, you should also capitalize connecting words like "the" and "of"._
```js
//v1
function titleCase(str) {
    var stringSplit = (str.split(' '));
    var arrFirstLetter = [];
    var arrRestOfString = [];
    var lowerCaseStr = [];
    var finalArr = [];
    
    for (var i = 0; i < stringSplit.length; i++) {
        arrFirstLetter.push((stringSplit[i][0].toUpperCase()));
        arrRestOfString.push(stringSplit[i].slice(1))
    }
    
    for (var i = 0; i < arrRestOfString.length; i++) {
        lowerCaseStr.push(arrRestOfString[i].toLowerCase());
    }
    
    for (var i = 0; i < lowerCaseStr.length; i++) {
        finalArr.push(arrFirstLetter[i] + lowerCaseStr[i])
    }
    return finalArr.join(' ');

}

titleCase("sHoRt AnD sToUt");
```
<div align="right">
    <b><a href="#quizzes">↥ back to top</a></b>
</div>

### [Slice and Splice](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice)

_You are given two arrays and an index.
Use the array methods slice and splice to copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs._

```js
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  var newArr = arr2.slice();

  for (var i=0; i < arr1.length; i++) {
    newArr.splice(n, 0, arr1[i]);
    n++
  }
  return newArr;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
```

<div align="right">
    <b><a href="#quizzes">↥ back to top</a></b>
</div>

### [Falsy Bouncer](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer)

_Remove all falsy values from an array._

```js
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(Boolean);
}

bouncer([7, "ate", "", false, 9]);
```
<div align="right">
    <b><a href="#quizzes">↥ back to top</a></b>
</div>

### [Where do I Belong](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong)

_Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1)._

```js
function getIndexToIns(arr, num) {
  function sortNumber(a, b) {
    return a - b;
  }
  var sortedArr = arr.sort(sortNumber);

  if (arr.length === 0) {
    return 0
  }
  for (var i = 0; i < sortedArr.length; i++) {
    if (num <= sortedArr[i]) {
      return i;
    } else if (num > sortedArr[sortedArr.length - 1]) {
      return sortedArr.length
    }
  }
}

getIndexToIns([2, 5, 10], 15);
```
<div align="right">
    <b><a href="#quizzes">↥ back to top</a></b>
</div>

### [Mutations](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations/)

_Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array (ignoring case)._

```js
function mutation(arr) {
  var newArr1 = arr[0].toLowerCase();
  var newArr2 = arr[1].toLowerCase();
  for (var i = 0; i < newArr2.length; i++) {
    if ((newArr1.indexOf(newArr2[i])) < 0) {
      return false
    }    
  }
  return true
}

mutation(["hello", "hey"]);
```

<div align="right">
    <b><a href="#quizzes">↥ back to top</a></b>
</div>


### [Write Number In Expanded Form](https://www.codewars.com/kata/write-number-in-expanded-form/javascript)

_You will be given a number and you will need to return it as a string in Expanded Form. For example:
expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0._

```js
function expandedForm(num) {

    numString = num.toString();
    var arrLong = [];
    for (var i = 0; i < numString.length; i++) {
        if (numString[i] !== '0') {
            arrLong.push(numString[i] +
                "0".repeat(numString.length - i - 1));
        }
    }
    return(arrLong.join(' + '));
}

expandedForm(70304);
```
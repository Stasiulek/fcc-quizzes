//given
function factorialize(num) {
  return num;
}

factorialize(5);

//solution using recursion
function factorialize(num) {
  if (num <= 1) {
    return 1;
  }
  return num * (factorialize(num - 1));
}
factorialize(5);

//solution using iteration
function factorialize(num) {
  for (var i = num - 1; i >= 1; i--) {
    //num = num * i;
    num *= i;
  }
  console.log(num);
}

factorialize(5);
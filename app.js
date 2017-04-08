'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:
"The sum of 4 and 7 is 11."
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/


// I'm going to write a function called sum
// the function sum will return an array
// the first element in the array is the sum of the two numbers
// the second element is a concatenated string
// the second element exactly follows the example and uses the values that were input into the function

function sum(a,b){
  var total = a + b;
  var result = ('The sum of '+ a + ' and '+ b + ' is '+ total+ '.');
  return [total, result];


}

// Here is the test for sum(); uncomment it to run it
testSum(4,7);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
"The product of 5 and 9 is 45."
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a,b){ //eslint-disable-line
  var totalProduct = a * b;
  var resultMultiply = ('The product of ' + a + ' and ' + b + ' is ' + totalProduct + '.');
  return [totalProduct,resultMultiply];
}
// Here is the test for multiply(); uncomment it to run it
testMultiply(5,9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:
Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."
IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// I can treat my function INSIDE MY FUNCTION as a variable

// Write your code here
function sumAndMultiply(a,b,c){ //eslint-disable-line
  var s = sum(sum(a,b)[0],c);
  var mult = multiply(multiply(a,b)[0],c);

  var thirdElement = a + ' and ' + b + ' and ' + c + ' sum to ' + s[0] + '.';
  var fourthElement = 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + mult[0] + '.';

  return [s[0],mult[0],thirdElement,fourthElement];

}


// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4,7,5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
"2,3,4 was passed in as an array of numbers, and 9 is their sum."
IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this.
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/


// write a function called sumArray() that passes in an array of numbers as its argument
// the function will return an array
// the first element of the returned array is the sum of the numbers in the array
// the second element in the returned array is a string
// the string uses the values that were input into the function, and follows this example "2,3,4 was passed in as an array of numbers, and 9 is their sum."
// use your sum function to do addition
var testArray = [2,3,4]; //eslint-disable-line

function sumArray(testArray){
  var start = 0; //eslint-disable-line
  for(var i = 0; i < testArray.length; i++) {
  start = sum(start,testArray[i])[0];
  }
  var secondElement = (testArray + ' was passed in as an array of numbers, and ' + start + ' is their sum.')
  return [start,secondElement];
}


// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:
"The numbers 2,3,4 have a product of 24."
IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this.
Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// write a function called multiplyArray() that passes in an array of numbers as its argument
// the function will return an array
// the first element of the returned array is the product of the numbers in the array
// the second element in the returned array is a string
// the string uses the values that were input into the function, and follows this example The numbers 2,3,4 have a product of 24.
// use your sum function to do addition

function multiplyArray(testArray){
  var start = 1;//eslint-disable-line
  for(var i = 0; i < testArray.length; i++) {
    start = multiply(start,testArray[i])[0];
  }
  var second = ('The numbers ' + testArray + ' have a product of ' + start + '.');
  return [start,second];
}

// console.log(multiplyArray(testArray));

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(2,3,4);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.

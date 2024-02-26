"use strict";

// Task 1: Basic Try-Catch Usage
/*
Wrap the code inside a try-catch block to catch potential errors.
Log 'An error occurred' in the catch block.
*/

function task1() {
  try {
    //a + b;
    throw new Error("Oops, something went wrong!");
  } catch (error) {
    console.log(error.message);
  }
}

// task1();

// Task 2: Catching ReferenceError
/*
Attempt to access an undefined variable inside a try block.
Catch the ReferenceError and log it to the console.
*/

function task2() {
  try {
    console.log(num);
  } catch (ReferenceError) {
    console.log(ReferenceError.message);
  }
}

// task2();

// Task 3: Using Finally
/*
Use a try-catch-finally block. In the finally block, log 'Execution completed'.
*/

function task3() {
  try {
    console.log(num);
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Execution completed");
  }
}

// task3();

// Task 4: Nested Try-Catch
/*
Inside a try block, nest another try-catch block.
Simulate an error in the nested try block and handle it in the nested catch block.
*/

function task4() {
  try {
    console.log("Inside try block");
    // throw new Error("Nested error occured");
    try {
      throw new Error("Nested error occured");
    } catch (error) {
      console.log("Inner error: ", error.message);
    } finally {
      console.log("Nested execution completed");
    }
  } catch (error) {
    console.log("Other error: ", error.message);
  } finally {
    console.log("Execution completed");
  }
}

// task4();

// Task 5: Function with Try-Catch
/*
Create a function that uses try-catch to handle an array index out of bounds error.
*/

function task5(array, index) {
  try {
    if (array[index] == undefined) {
      throw new Error("Index out of bound");
    }
    console.log(array[index]);
  } catch (error) {
    console.log("Input error: ", error.message);
  } finally {
    console.log("Execution completed");
  }
}

task5([1, 2, 3], -1);

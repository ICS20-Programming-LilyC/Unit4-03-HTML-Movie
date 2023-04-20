// Copyright (c) 2022 Lily Carroll All rights reserved
//
// Created by: Lily C
// Created on: 04/18/2023
// This file contains the JS functions for index.html

"use strict"

function userAgeSent() {
  
  //initializing and declaring variables
  let age = parseInt(document.getElementById("user-age").value);
  let message = "";
  
  //definiing constants: first age:17, second age: 13 and third age:5
  const FIRST_THRESHOLD = 17;
  const SECOND_THRESHOLD = 13;
  const THIRD_THRESHOLD = 5;
  
  //beginning if statement: if user age is greater than or equal to 17
  if (age >= FIRST_THRESHOLD) {
    message = "You're eligable to watch an R-rated movies by yourself.";
  }

  //otherwise, if age is greater than or equal to 13
  else if (age >= SECOND_THRESHOLD) {
    message = "You're eligable to watch PG-13 rated movies by yourself.";
  }

  //otherwise, if age is greater than or equal to 5
  else if (age >= THIRD_THRESHOLD) {
    message = "You're eligable to watch G or PG rated movies by yourself.";
  }

  //else (any age under 5)
  else if (age <5) {
   message = "You should be supervised while watching a movie. Movies are fun, but it is recomended at your age to watch a family friendly movie or have supervision from a responsible adult.";
 }

  //else (if age is not entered)
  else {
    message = "Please enter age.";
  }

  //what should be displayed with all of the options
  document.getElementById("results").innerHTML = message;
}
// Copyright (c) 2022 Lily Carroll All rights reserved
//
// Created by: Lily C
// Created on: 04/18/2023
// This file contains the JS functions for index.html

"use strict"

// This function allows for a specific output when the user input text field is left empty.
function isEmpty(str) {
  return !str || 0 === str.length;
}

// This function determines which movie rating the user is eligible to go see, given their inputed age.
function userAgeSent() {

  // Establishing constants: first age threshold is 17, second threshold is 13 and third threshold is 5.
  const FIRST_THRESHOLD = 17;
  const SECOND_THRESHOLD = 13;
  const THIRD_THRESHOLD = 5;

  // Define message that will be displayed as result after the appropriate input.
  let message = "";
  
  // Get the user's age from input form
  let userAgeSent = parseInt(document.getElementById("user-age").value);
  
  // First if statement: if user age is greater than or equal to 17, then display that they can see an R-rated movie alone.
  if (userAgeSent >= FIRST_THRESHOLD) {
    message = "You're eligible to watch R-rated movies by yourself.";
  }
    
  // Otherwise, if age is greater than or equal to 13, then display that they can see a PG-13 rated movie alone.
  else if (userAgeSent >= SECOND_THRESHOLD) {
    message = "You're eligible to watch PG-13 rated movies by yourself.";
  }
    
  // Otherwise, if age is greater than or equal to 5, display that they can see a G or PG rated movie alone.
  else if (userAgeSent >= THIRD_THRESHOLD) {
    message = "You're eligible to watch G or PG rated movies by yourself.";
  }

  // Otherwise, if age is less than 0, display that they must enter a valid number for their age.
  else if (userAgeSent < 0) {
    message = "Please enter a valid number for your age.";
  }

  // Otherwise, if nothing is entered or if the number 0 is entered, display that they msut enter their age.
  else if (isEmpty(userAgeSent)) {
    message = "Please enter your age.";
  }
    
  //else, any age less than 5.
  else {
    message = "You should be supervised while watching a movie. Movies are fun, but it is recommended at your age to watch a family friendly movie or have supervision from a responsible adult.";
  }
  
  // Display the results to the user from the "results" div in index.html.
  document.getElementById("results").innerHTML = message + " Happy movie watching!";
}
######  OVERWRITE  #########
#####----------------###
#####----------------###
#####  WEEK NUMBER 14  #########
#####  class day 01  #########
#####


##########################
##########################
###   ./01-arrays.js  
##########################


// A JavaScript array is much like a Python list
// Here, start with a blank array
var lettersArray = ["a", "b", "c", "d"];

// Display the array in console
console.log("An array of letters:");
console.log(lettersArray);

// Use indexing to access an array item
console.log("Use indexing to access an array item:");
var firstLetter = lettersArray[0];
var secondLetter = lettersArray[1];
console.log(firstLetter);
console.log(secondLetter);


// Use push() to append an item to an array
lettersArray.push("e");
lettersArray.push("f");
console.log("Use push() to append an item to an array:");
console.log(lettersArray);
console.log("==========");

// Use slice() to return selected items of an array
console.log("Use slice() to return selected items of an array");
var slicedArray1 = lettersArray.slice(1);
// Return the first three items of an array
var slicedArray2 = lettersArray.slice(0, 3);
// Return the second and third items of an array
var slicedArray3 = lettersArray.slice(1, 3);

console.log(slicedArray1);
console.log(slicedArray2);
console.log(slicedArray3);

console.log("==========");

// Use join() to return items of an array into a single string
var joinedArray = lettersArray.join(", ");
console.log("Use join() to return items of an array into a single string:");
console.log(joinedArray);

anotherJoinedArray = lettersArray.join("***");
console.log(anotherJoinedArray);
console.log("==========");

// A JavaScript string
var soundOfMusic = "The hills are alive with the sound of music";

console.log("This is a string:");
console.log(soundOfMusic);

// Use indexing to access a string character
console.log("Use indexing to access a string character:");
console.log(soundOfMusic[0]);
console.log(soundOfMusic[5]);

// Split a string into an array of substrings
// Here, split the string where spaces are found
var soundArray = soundOfMusic.split(" ");

console.log("Use split() to split a string into an array of substrings:");
console.log(soundArray);
##########################
##########################
###   ./01-conditional-check.js  
##########################


var x = 1;
var y = 10;

// Checks if one value is equal to another
if (x === 1) {
  console.log("x is equal to 1");
}

// Checks if one value is NOT equal to another
if (y !== 1) {
  console.log("y is not equal to 1");
}

// Checks if one value is less than another
if (x < y) {
  console.log("x is less than y");
}

// Checks if one value is greater than another
if (y > x) {
  console.log("y is greater than x");
}

// Checks if a value is less than or equal to another
if (x >= 1) {
  console.log("x is greater than or equal to 1");
}

// Checks for two conditions to be met using &&
if (x === 1 && y === 10) {
  console.log("Both values returned true");
}

// Checks if either of two conditions is met using ||
if (x < 45 || y < 5) {
  console.log("One or the other statements were true");
}

// if-else if-else
if (y < 5) {
  console.log("x is less than 10 and y is less than 5");
}
else if (y === 5) {
  console.log("x is less than 10 and y is equal to 5");
}
else {
  console.log("x is less than 10 and y is greater than 5");
}

// Nested if statements
if (x < 10) {
  if (y < 5) {
    console.log("x is less than 10 and y is less than 5");
  }
  else if (y === 5) {
    console.log("x is less than 10 and y is equal to 5");
  }
  else {
    console.log("x is less than 10 and y is greater than 5");
  }
}
##########################
##########################
###   ./01-functions.js  
##########################


// Simple log statement
function printHello() {
  console.log("Hello there!");
}

// Takes two numbers and adds them
function addition(a, b) {
  return a + b;
}

// Run the code in the `printHello` function
printHello();

// Log results of addition function
console.log(addition(44, 50));

// This function accepts a parameter and iterates through an array
function listLoop(userList) {
  for (var i = 0; i < userList.length; i++) {
    console.log(userList[i]);
  }
}

var friends = ["Sarah", "Greg", "Cindy", "Jeff"];
listLoop(friends);

// Functions can call other functions
function doubleAddition(c, d) {
  var total = addition(c, d) * 2;

  return total;
}

// Log results of doubleAddition function
console.log(doubleAddition(3, 4));


// Javascript built in functions
var longDecimal = 112.34534454;
var roundedDecimal = Math.floor(longDecimal);
console.log(roundedDecimal);
console.log(Number.parseFloat(longDecimal).toFixed(2));
##########################
##########################
###   ./01-hello-variable-world.js  
##########################


// Create a variable called "name" that holds a string
var name = "Homer Simpson";

// Create a variable called "country" that holds a string
var country = "United States";

// Create a variable called "age" that holds an integer
var age = 26;

// Create a variable called "hourlyWage" that holds an integer
var hourlyWage = 15;

// Calculate the "dailyWage" for the user
var dailyWage = hourlyWage * 8;

// Create a variable that holds a number as a string
var weeklyHours = "40";

// Create a variable called 'weeklyWage' that converts a string into an integer
var weeklyWage = hourlyWage * parseInt(weeklyHours);

// Create a variable called "satisfied" that holds a boolean
var satisfied = true;

// Print out "Hello <name>!"
console.log(`Hello ${name}!`);

// Print out what country the user entered
console.log(`You live in ${country}.`);

// Print out the user's age
console.log(`You are ${age} years old.`);

// Print out the daily wage that was calculated
console.log(`You make ${dailyWage} dollars per day.`);

// Print out the weekly wage that was calculated
console.log(`You make ${weeklyWage} dollars per week.`);


// Using an IF statement to print out whether the users were satisfied
if (satisfied === true) {
  console.log("You are satisfied with your pay.");
}
else {
  console.log("You are not satisfied with your pay.");
}
##########################
##########################
###   ./01-loops_index.js  
##########################


// Prototypical use case increments loop counter by one on each iteration
for (var i = 0; i < 10; i++) {
  console.log("Iteration #", i);
}

// Looping through an array
var students = ["Johnny", "Tyler", "Bodhi", "Pappas"];

for (var j = 0; j < students.length; j++) {
  console.log(students[j]);
}
##########################
##########################
###   ./01-movieScores_index.js  
##########################


// Array of movie ratings
var movieScores = [
  4.4,
  3.3,
  5.9,
  8.8,
  1.2,
  5.2,
  7.4,
  7.5,
  7.2,
  9.7,
  4.2,
  6.9
];

// Starting a rating count
var sum = 0;

// Arrays to hold movie scores
var goodMovieScores = [];
var okMovieScores = [];
var badMovieScores = [];

// Use a for loop to iterate through the movie scores
for (var i = 0; i < movieScores.length; i++) {

  // Add each score to the ratings count
  var score = movieScores[i];
  sum += score;

  // If the movie's rating is greater than 7, add it to the list of good movies
  if (score > 7) {
    goodMovieScores.push(score);
  }
  // If the movie's rating is between 5 and 7, add it to the list of "Ok" movies
  else if (score <= 7 && score > 5) {
    okMovieScores.push(score);
  }
  // Otherwise, if the movie's rating is less than or equal to 5, add it to the list of bad movies
  else {
    badMovieScores.push(score);
  }
}

// Find the average score
var avg = sum / movieScores.length;

// Store the length of movie ratings
var numGoodMovies = goodMovieScores.length;
var numOkMovies = okMovieScores.length;
var numBadMovies = badMovieScores.length;

// Print results
console.log("---------");
console.log(`There are ${numGoodMovies} good movies.`);
console.log(`There are ${numOkMovies} ok movies.`);
console.log(`There are ${numBadMovies} bad movies.`);
console.log(`The average movie rating is ${avg}.`);
console.log("---------");
##########################
##########################
###   ./01-StuStats-app.js  
##########################


// Array of movie ratings
var movieScore = [4.4, 3.3, 5.9, 8.8, 1.2, 5.2, 7.4, 7.5, 7.2, 9.7, 4.2, 6.9];

// Mean is the average of all the values.
function mean(arr) {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  var meanValue = total / arr.length;

  return meanValue;
}

// Variance can be found by subtracting the mean from each number in the data set,
// squaring the result, and
// then averaging the square differences.
function variance(arr) {
  var meanValue = mean(arr);
  var total = 0;

  for (var i = 0; i < arr.length; i++) {
    total += (arr[i] - meanValue) ** 2;
  }
  var varianceValue = total / arr.length;
  return varianceValue;
}


// Standard deviation is the square root of the variance
function standardDeviation(arr) {
  var varianceValue = variance(arr);
  var standardDeviationValue = Math.sqrt(varianceValue);

  return standardDeviationValue;
}

console.log("Movie Statistical Analysis");
console.log("--------------------------");
console.log(`The mean is : ${mean(movieScore)}`);
console.log(`The variance is : ${variance(movieScore)}`);
console.log(`The standard deviation is : ${standardDeviation(movieScore)}`);
console.log("");

var monthlyAvgRainFall = [3.03, 2.48, 3.23, 3.15, 4.13, 3.23];
console.log("Rainfall Statistical Analysis");
console.log("--------------------------");
console.log(`The mean is : ${mean(monthlyAvgRainFall)}`);
console.log(`The variance is : ${variance(monthlyAvgRainFall)}`);
console.log(`The standard deviation is : ${standardDeviation(monthlyAvgRainFall)}`);
console.log("");

var mileRuns = [5.06, 4.54, 5.56, 4.40, 7.10];
console.log("Mile Run Statistical Analysis");
console.log("--------------------------");
console.log(`The mean is : ${mean(mileRuns)}`);
console.log(`The variance is : ${variance(mileRuns)}`);
console.log(`The standard deviation is : ${standardDeviation(mileRuns)}`);
console.log("");




#####----------------###
#####----------------###
#####  END OF WEEK NUMBER 14
#####  END OF class day 01
########################


## Appending 
#####----------------###
#####----------------###
#####  WEEK NUMBER 14  #########
#####  class day 02  #########
#####


##########################
##########################
###   ./01-index.js  
##########################


// Array of student names
var students = ["Johnny", "Tyler", "Bodhi", "Pappas"];

// This function will be called for each element in the array
function printName(name) {
  console.log(name);
}

// Loop through each student name and call the printName function
for (var i = 0; i < students.length; i++) {
  printName(students[i]);
}

// `forEach` automatically iterates (loops) through each item and
// calls the supplied function for that item.
// This is equivalent to the for loop above.
students.forEach(printName);

// You can also define an anonymous function inline
students.forEach(function(name) {
  console.log(name);
});
##########################
##########################
###   ./02-index.js  
##########################


// Array of movie ratings
var movieScores = [
  4.4,
  3.3,
  5.9,
  8.8,
  1.2,
  5.2,
  7.4,
  7.5,
  7.2,
  9.7,
  4.2,
  6.9
];

// Starting a rating count
var sum = 0;

// Arrays to hold movie scores
var goodMovieScores = [];
var okMovieScores = [];
var badMovieScores = [];

// Use forEach to call a function on each element
movieScores.forEach(function(score) {
  // Add each score to the ratings count
  sum += score;

  // If the movie's rating is greater than 7, add it to the list of good movies
  if (score > 7) {
    goodMovieScores.push(score);
  }
  // If the movie's rating is between 5 and 7, add it to the list of "Ok" movies
  else if (score <= 7 && score > 5) {
    okMovieScores.push(score);
  }
  // Otherwise, if the movie's rating is less than or equal to 5, add it to the list of bad movies
  else {
    badMovieScores.push(score);
  }
});

// Find the average score
var avg = sum / movieScores.length;

// Store the length of movie ratings
var numGoodMovies = goodMovieScores.length;
var numOkMovies = okMovieScores.length;
var numBadMovies = badMovieScores.length;

// Print results
console.log("---------");
console.log(`There are ${numGoodMovies} good movies.`);
console.log(`There are ${numOkMovies} ok movies.`);
console.log(`There are ${numBadMovies} bad movies.`);
console.log(`The average movie rating is ${avg}.`);
console.log("---------");
##########################
##########################
###   ./03-index.js  
##########################


// A JavaScript object is similar to a Python dictionary
var movie = {
  name: "Star Wars",
  year: 1977,
  profitable: true,
  sequels: [5, 6, 1, 2, 3, "The Last Jedi"]
};

// JavaScript also allows value lookup via dot notation
console.log(movie.name);
console.log(movie.year);
console.log(movie.sequels[0]);

// JS also allows value lookup via bracket notation--note the similarity to Python
// console.log(movie["name"]);

// Add a key-value pair to an existing object
movie.rating = 8.5;
console.log(movie);

// Delete a key-value pair
delete movie.sequels;
console.log(movie);

// Check whether a key exists in an object
if ("rating" in movie) {
  console.log("This movie has a rating!");
}

for (var prop in movie) {
  console.log(movie[prop]);
}

// Built-in object methods in JavaScript
// An array of objects
var people = {
  mom: "wilma flintstone",
  dad: "fred flintstone",
  daughter: "pebbles",
  son: "bambam"
};

// Display the entire object, both keys and values
console.log(people);

// Display only the keys of the object
console.log(Object.keys(people));

// Display only the values of the object
console.log(Object.values(people));

// Display a key-value pair held in an array
console.log(Object.entries(people));
##########################
##########################
###   ./04-index.js  
##########################


function wordCount(myString) {
  // Convert string to an array of words
  var stringArray = myString.split(" ");

  // An object to hold word frequency
  var wordFrequency = {};

  // Iterate through the array
  for (var i = 0; i < stringArray.length; i++) {
    var currentWord = stringArray[i];
    // If the word has been seen before...
    if (currentWord in wordFrequency) {
      // Add one to the counter
      wordFrequency[currentWord] += 1;
    }
    else {
      // Set the counter at 1
      wordFrequency[currentWord] = 1;
    }
  }
  console.log(wordFrequency);
  return wordFrequency;
}

wordCount("I yam what I yam and always will be what I yam");
##########################
##########################
###   ./05-map.js  
##########################


var theStagesOfJS = ["confidence", "sadness", "confusion", "realization", "debugging", "satisfaction"];

// Using the .map method
var mapSimpleArray = theStagesOfJS.map(function(item) {
  return item;
});

console.log(mapSimpleArray);

// Map will also provide the index position of the array.
// This is similar to enumerate in Python.
var mapArrayWithIndex = theStagesOfJS.map(function(item, index) {
  return `Stage ${index}: ${item}`;
});

console.log(mapArrayWithIndex);

// Note: The original array is unchanged
console.log(theStagesOfJS);

// Mapping over an array of objects
var students = [
    { name: "Malcolm", score: 80 },
    { name: "Zoe", score: 85 },
    { name: "Kaylee", score: 99 },
    { name: "Simon", score: 99 },
    { name: "Wash", score: 79 }
];

console.log(students)

var names = students.map(function(student) {
  return student.name;
});


console.log(names)

var scores = students.map(function(student) {
  return student.score;
});


console.log(scores)

// Map vs forEach
// Part A
var forEachStages = theStagesOfJS.forEach(function(each, index) {
  // the return of forEach is ignored
  return `Stage ${index + 1}: ${each}`;
});

// undefined
console.log(forEachStages);

// unaltered
console.log(theStagesOfJS);

// Part B
theStagesOfJS.forEach(function(each, index) {
  // The original array is mutated with forEach
  theStagesOfJS[index] = `Stage ${index + 1}: ${each}`;
});

// Note that the original array has been altered (mutated)
console.log(theStagesOfJS);

// Challenge Activity!
var princesses = [
  { name: "Rapunzel", age: 18 },
  { name: "Mulan", age: 16 },
  { name: "Anna", age: 18 },
  { name: "Moana", age: 16 }
];

// Log the name of each princess, follow by a colon, followed by their age
// forEach: executes a provided function once for each array element
princesses.forEach(function(princess) {
  console.log(`${princess.name}: ${princess.age}`);
});

// Create an array of just the names from the princesses array
// map: creates a new array with the results of calling a provided function on every element in the calling array
var names = princesses.map(function(princess) {
  return princess.name;
});
console.log("names: ", names);
##########################
##########################
###   ./06-arrow.js  
##########################


var theStagesOfJS = ["confidence", "sadness", "confusion", "realization", "debugging", "satisfaction"];
var students = [
  { name: "Malcolm", score: 80 },
  { name: "Zoe", score: 85 },
  { name: "Kaylee", score: 99 },
  { name: "Simon", score: 99 },
  { name: "Wash", score: 79 }
];

// An Arrow function is a new concise syntax for function
// Arrow functions allow us to drop the `function` keyword and just show the parameters.
// Note: The fat arrow `=>` that was added to indicate an arrow function.
var mapArrow1 = theStagesOfJS.map((item) => {
  return item;
});

// For functions with a single return line, we can drop the curly braces.
// var mapArrow2 = theStagesOfJS.map(item => return item);

// And finally, we can just drop the `return` keyword. The return is implied.
var mapArrow3 = theStagesOfJS.map(item => item);

// Functions with more than one parameter still need the parenthesis
var mapReturn2 = theStagesOfJS.map((item, index) => {
  return `Stage ${index}: ${item}`;
});

// We can also drop the curly braces here
var mapReturn2 = theStagesOfJS.map((item, index) => `Stage ${index}: ${item}`);

// Map and Arrow makes it really easy to build an array of values for an
// array of objects
var names = students.map(student => student.name);

var scores = students.map(student => student.score);

// Challenge Activity!
var princesses = [
  { name: "Rapunzel", age: 18 },
  { name: "Mulan", age: 16 },
  { name: "Anna", age: 18 },
  { name: "Moana", age: 16 }
];

// log the name of each princess, follow by a colon, followed by their age
// forEach: executes a provided function once for each array element
princesses.forEach(princess => console.log(`${princess.name}: ${princess.age}`));

// create an array of just the names from the princesses array
// map: creates a new array with the results of calling a provided function on every element in the calling array
var names = princesses.map(princess => princess.name);
console.log("names: ", names);
##########################
##########################
###   ./07-index.js  
##########################


var userInfo = {
  name: "Eric",
  age: 32,
  location: "North America"
};

// Use `Object.values` and `forEach` to iterate through keys
Object.keys(userInfo).forEach(key => console.log(key));

// Use `Object.values` and `forEach` to iterate through values
Object.values(userInfo).forEach(value => console.log(value));

// Use `Object.entries` and `forEach` to iterate through keys and values
Object.entries(userInfo).forEach(([key, value]) => console.log(`Key: ${key} and Value ${value}`));


// Array of objects
var users = [
  { name: "Eric", age: 32, location: "North America" },
  { name: "Sally", age: 23, location: "Europe" },
  { name: "Cassandra", age: 27, location: "North America" }];

// Loop through array of objects then each object
users.forEach((user) => {
  console.log(user);

  // Get the entries for each object in the array
  Object.entries(user).forEach(([key, value]) => {
    // Log the key and value
    console.log(`Key: ${key} and Value ${value}`);
  });
});
##########################
##########################
###   ./08-index.js  
##########################


var recipes = [
  { dish: "Fried fish", spice: "Dorrigo" },
  { dish: "Crab Rangoon", spice: "Akudjura" },
  { dish: "Pickled Okra", spice: "Chili pepper" },
  { dish: "Macaroni salad", spice: "Pepper" },
  { dish: "Apple butter", spice: "Avens" },
  { dish: "Pepperoni Pizza", spice: "Asafoetida" },
  { dish: "Hog fry", spice: "Peppermint" },
  { dish: "Corn chowder", spice: "Akudjura" },
  { dish: "Home fries", spice: "Celery leaf" },
  { dish: "Hot chicken", spice: "Boldo" }];

// Create empty arrays to store the dish and spice values
var dishes = [];
var spices = [];

// Iterate through each recipe object
recipes.forEach((recipe) => {

  // Iterate through each key and value
  Object.entries(recipe).forEach(([key, value]) => {

    // Use the key to determine which array to push the value to
    if (key === "dish") {
      dishes.push(value);
    }
    else {
      spices.push(value);
    }
   });
});

// Iterate through each recipe object

recipes.forEach((recipe) => {
  dishes.push(recipe.dish);
  spices.push(recipe.spice);
});


// BONUS - Use map to build both arrays of dish and spice values
var dishesMapped = recipes.map(recipe => recipe.dish);
var spicesMapped = recipes.map(recipe => recipe.spice);

console.log(dishesMapped);
console.log(spicesMapped);
##########################
##########################
###   ./09-filter.js  
##########################


// filter()
// An array of objects, representing a cartoon family
var simpsons = [{
  name: "Homer",
  age: 45
}, {
  name: "Lisa",
  age: 8
}, {
  name: "Marge",
  age: 43
}, {
  name: "Bart",
  age: 10
}, {
  name: "Maggie",
  age: 1
}];

// Create a custom filtering function
function selectYounger(person) {
  return person.age < 30;
}

// filter() uses the custom function as its argument
var youngSimpsons = simpsons.filter(selectYounger);

// Test
console.log(youngSimpsons);
`##########################
##########################
###   ./10-index.js  
##########################


// An array of objects
var roster = [{
  name: "Doug",
  position: "Quarterback",
  madeTeam: true
},
{
  name: "Antonio",
  position: "Tight End",
  madeTeam: true
},
{
  name: "Nick",
  position: "Kicker",
  madeTeam: false
},
{
  name: "Ereck",
  position: "Offensive Live",
  madeTeam: false
},
{
  name: "AJ",
  position: "Line Backer",
  madeTeam: true
}
];

// Create a custom function to return players who made the team
function madeCut(player) {
  // return player.madeTeam == true;
  // A more concise way to express a boolean conditional
  return player.madeTeam;
}

// Call the custom function with filter()
var playersOnTeam = roster.filter(madeCut);

// Display the results
console.log(playersOnTeam);

// Determine how many players made the cut, and how many did not
var numberOfPlayers = playersOnTeam.length;
var numberOfCutPlayers = roster.length - numberOfPlayers;

// Display the results
console.log(`${numberOfPlayers} players made the team.`);
console.log(`${numberOfCutPlayers} players were cut.`);




#####----------------###
#####----------------###
#####  END OF WEEK NUMBER 14
#####  END OF class day 02
########################


## Appending 
#####----------------###
#####----------------###
#####  WEEK NUMBER 14  #########
#####  class day 03  #########
#####


##########################
##########################
###   ./01-index.js  
##########################


// Select the text of an HTML element
var text1 = d3.select(".text1").text();
console.log("text1 says: ", text1);

var text2 = d3.select("#text2").text();
console.log("text2 says: ", text2);

// Modify the text of an HTML element
d3.select(".text1").text("Hey, I changed this!");

// Capture the HTML of a selection
var myLink = d3.select(".my-link").html();
console.log("my-link: ", myLink);

// Select an element's child element
// An object is returned
var myLinkAnchor = d3.select(".my-link>a");
console.log(myLinkAnchor);

// // Capture the child element's href attribute
var myLinkAnchorAttribute = myLinkAnchor.attr("href");
console.log("myLinkAnchorAttribute: " + myLinkAnchorAttribute);

// Change an element's attribute
myLinkAnchor.attr("href", "https://python.org");

// Use chaining to join methods
d3.select(".my-link>a").attr("href", "https://nytimes.org").text("Now this is a link to the NYT!!");

// Select all list items, then change their font color
d3.selectAll("li").style("color", "blue");

// Create a new element
var li1 = d3.select("ul").append("li");
li1.text("A new item has been added!");

// Use chaining to create a new element and set its text
var li2 = d3.select("ul").append("li").text("Another new item!");
##########################
##########################
###   ./02-app.js  
##########################


// The new student and grade to add to the table
var newGrade = ["Wash", 79];

// Use D3 to select the table
var table = d3.select("table");

// Use d3 to create a bootstrap striped table
// http://getbootstrap.com/docs/3.3/css/#tables-striped
table.attr("class", "table table-striped");

// Use D3 to select the table body
var tbody = d3.select("tbody");

// Append one table row `tr` to the table body
var row = tbody.append("tr");

// Append one cell for the student name
row.append("td").text(newGrade[0]);

// Append one cell for the student grade
row.append("td").text(newGrade[1]);
##########################
##########################
###   ./03-index.js  
##########################


// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// // Step 1: Loop Through `data` and console.log each weather report object
data.forEach(function(weatherReport) {
  console.log(weatherReport);
});

// // Step 2:  Use d3 to append one table row `tr` for each weather report object
// // Don't worry about adding cells or text yet, just try appending the `tr` elements.
data.forEach(function(weatherReport) {
  console.log(weatherReport);
  var row = tbody.append("tr");
});

// // Step 3:  Use `Object.entries` to console.log each weather report value
// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");

//   Object.entries(weatherReport).forEach(function([key, value]) {
//     console.log(key, value);
//   });
// });

// // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
data.forEach(function(weatherReport) {
  console.log(weatherReport);
  var row = tbody.append("tr");

  Object.entries(weatherReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
  });
});

// // Step 5: Use d3 to update each cell's text with
// // weather report values (weekday, date, high, low)
data.forEach(function(weatherReport) {
  console.log(weatherReport);
  var row = tbody.append("tr");
  Object.entries(weatherReport).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});

// BONUS: Refactor to use Arrow Functions!
data.forEach((weatherReport) => {
  var row = tbody.append("tr");
  Object.entries(weatherReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
##########################
##########################
###   ./04-index.js  
##########################


// Getting a reference to the button on the page with the id property set to `click-me`
var button = d3.select("#click-me");

// Getting a reference to the input element on the page with the id property set to 'input-field'
var inputField = d3.select("#input-field");

// This function is triggered when the button is clicked
function handleClick() {
  console.log("A button was clicked!");

  // We can use d3 to see the object that dispatched the event
  console.log(d3.event.target);
}

// We can use the `on` function in d3 to attach an event to the handler function
button.on("click", handleClick);

// You can also define the click handler inline
button.on("click", function() {
  console.log("Hi, a button was clicked!");
  console.log(d3.event.target);
});

// Event handlers are just normal functions that can do anything you want
button.on("click", function() {
  d3.select(".giphy-me").html("<img src='https://gph.to/2Krfn0w' alt='giphy'>");
});

// Input fields can trigger a change event when new text is entered.
inputField.on("change", function() {
  var newText = d3.event.target.value;
  console.log(newText);
});
##########################
##########################
###   ./05-app.js  
##########################


// grab references to the input element and the output div
var text = d3.select("#text");
var output = d3.select(".output");

// Function to reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Function to handle input change
function handleChange(event) {
  // grab the value of the input field
  var inputText = d3.event.target.value;

  // reverse the input string
  var reversedInput = reverseString(inputText);

  // Set the output text to the reversed input string
  output.text(reversedInput);
}

text.on("change", handleChange);
##########################
##########################
###   ./05-bonus-app.js  
##########################


// grab references to the input element and the output div
var text = d3.select("#text");
var output = d3.select(".output");

function counter(text) {

  // convert text to lowercase characters (chars)
  var chars = text
    .toLowerCase()
    .replace(/\s+/g, "")
    .split("");

  var counts = {};
  chars.forEach((char) => {
    if (char in counts) {
      counts[char] += 1;
    }
    else {
      counts[char] = 1;
    }
  });

  return counts;
}

// Function to handle input change
function handleChange(event) {
  // grab the value of the input field
  var value = d3.event.target.value;

  // clear the existing output
  output.html("");

  var frequencyCounts = counter(value);
  Object.entries(frequencyCounts).forEach(([key, value]) => {
    var li = output.append("li").text(`${key}: ${value}`);
  });

}

text.on("change", handleChange);
##########################
##########################
###   ./06-app.js  
##########################


// Randomly select an episode number for Star Wars
var text = d3.select(".star-wars")
  .text(Math.floor(Math.random() * 8) + 1);

// Select the upvote and downvote buttons
var upvote = d3.select(".upvote");
var downvote = d3.select(".downvote");

// Select the counter h1 element
var counter = d3.select(".counter");

// Use D3 `.on` to attach a click handler for the upvote
upvote.on("click", function() {
  // Select the current count
  var currentCount = parseInt(counter.text());

  // Upvotes should increment the counter
  currentCount += 1;

  // Set the counter h1 text to the new count
  counter.text(currentCount);
});

// Use d3 `.on` to attach a click handler for the downvote
downvote.on("click", function() {
  // Select the current count
  var currentCount = parseInt(counter.text());

  // Downvotes should decrement the counter
  currentCount -= 1;

  // Set the counter h1 text to the new count
  counter.text(currentCount);
});
##########################
##########################
###   ./07-app.js  
##########################


d3.selectAll("button").on("click", function() {
  // What will be logged out? What is `this` in this case?
  console.log(this);
  // Answer: It will console log the `button` element.
});

d3.selectAll("li").on("click", function() {
  // you can select the element just like any other selection
  var listItem = d3.select(this);
  listItem.style("color", "blue");

  var listItemText = listItem.text();
  console.log(listItemText);
});
##########################
##########################
###   ./08-index.js  
##########################


// Select the button
var button = d3.select("#button");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#example-form-input");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  // Set the span tag in the h1 element to the text
  // that was entered in the form
  d3.select("h1>span").text(inputValue);
});
##########################
##########################
###   ./09-app.js  
##########################


// Assign the data from `data.js` to a descriptive variable
var people = data;

// Select the button
var button = d3.select("#button");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#patient-form-input");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(people);

  var filteredData = people.filter(person => person.bloodType === inputValue);

  console.log(filteredData);

  // BONUS: Calculate summary statistics for the age field of the filtered data

  // First, create an array with just the age values
  var ages = filteredData.map(person => person.age);

  // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
  var mean = math.mean(ages);
  var median = math.median(ages);
  var mode = math.mode(ages);
  var variance = math.var(ages);
  var standardDeviation = math.std(ages);

  // Then, select the unordered list element by class name
  var list = d3.select(".summary");

  // remove any children from the list to
  list.html("");

  // append stats to the list
  list.append("li").text(`Mean: ${mean}`);
  list.append("li").text(`Median: ${median}`);
  list.append("li").text(`Mode: ${mode}`);
  list.append("li").text(`Variance: ${variance}`);
  list.append("li").text(`Standard Deviation: ${standardDeviation}`);
});




#####----------------###
#####----------------###
#####  END OF WEEK NUMBER 14
#####  END OF class day 03
########################



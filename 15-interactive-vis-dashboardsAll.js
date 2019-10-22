#####----------------###
#####----------------###
#####  WEEK NUMBER 15  #########
#####  class day 1  #########
#####


##########################
##########################
###   ./01-es6-solved.js  
##########################


/*
ES6 CONST/LET EXAMPLES
*/

// 1. Scope and `let` keyword

// using var
function logger() {
  // returns "undefined", but code still runs.
  console.log(x);
  var x = "hi";
}
logger();

// using let
function logger2() {
  // ReferenceError: y is not defined. Code will stop execution.
  console.log(y);
  let y = "hello";
}
// logger2();


// 2. Example of const for constant value

// this value is constant, and will refuse attempts at re-assignment.
const myPets = ["dog", "cat", "rabbit", "some endangered species of sea turtle"];

// myPets = "ferret"; //This will not work - stops execution

// myPets = ["wolf", "giraffe", "parrot"]; //This will not work either

// HOWEVER, we can still manipulate Objects and Arrays!
console.log("before: ", myPets);
myPets.pop();
console.log("after: ", myPets);
##########################
##########################
###   ./02-plots.js  
##########################


// Part 1
// var trace1 = {
//   x: ["beer", "wine", "martini", "margarita",
//     "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//   y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//   type: "bar"
// };
//
// var data = [trace1];
//
// var layout = {
//   title: "'Bar' Chart"
// };
//
// Plotly.newPlot("plot", data, layout);


// // Part 2 - Adding attributes
// var trace1 = {
//   x: ["beer", "wine", "martini", "margarita",
//       "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//   y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//   type: "bar"
// };

// var data = [trace1];

// var layout = {
//   title: "'Bar' Chart",
//   xaxis: { title: "Drinks"},
//   yaxis: { title: "% of Drinks Ordered"}
// };

// Plotly.newPlot("plot", data, layout);


// // Part 3 - Line Chart
var trace1 = {
  x: ["beer", "wine", "martini", "margarita",
      "ice tea", "rum & coke", "mai tai", "gin & tonic"],
  y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
  type: "line"
};

var data = [trace1];

var layout = {
  title: "'LIne' Chart",
};

// Plotly.newPlot("plot", data, layout);

// // Part 4 - Broken Pie Chart
// var trace1 = {
//   x: ["beer", "wine", "martini", "margarita",
//       "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//   y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//   type: "pie"
// };

// var data = [trace1];

// var layout = {
//   title: "'Bar' Chart",
// };

// Plotly.newPlot("plot", data, layout);


// // Part 5 - Working Pie Chart
// var trace1 = {
//   labels: ["beer", "wine", "martini", "margarita",
//       "ice tea", "rum & coke", "mai tai", "gin & tonic"],
//   values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//   type: 'pie'
// };

// var data = [trace1];

// var layout = {
//   title: "'Bar' Chart",
// };

// Plotly.newPlot("plot", data, layout);

##########################
##########################
###   ./03-plots.js  
##########################


var eyeColor = ["Brown", "Brown", "Brown", "Brown", "Brown",
  "Brown", "Brown", "Brown", "Green", "Green",
  "Green", "Green", "Green", "Blue", "Blue",
  "Blue", "Blue", "Blue", "Blue"];
var eyeFlicker = [26.8, 27.9, 23.7, 25, 26.3, 24.8,
  25.7, 24.5, 26.4, 24.2, 28, 26.9,
  29.1, 25.7, 27.2, 29.9, 28.5, 29.4, 28.3];

// Create the Trace
var trace1 = {
  x: eyeColor,
  y: eyeFlicker,
  type: "bar"
};

// Create the data array for the plot
var data = [trace1];

// Define the plot layout
var layout = {
  title: "Eye Color vs Flicker",
  xaxis: { title: "Eye Color" },
  yaxis: { title: "Flicker Frequency" }
};

// Plot the chart to a div tag with id "bar-plot"
Plotly.newPlot("bar-plot", data, layout);
##########################
##########################
###   ./04-plots.js  
##########################


/**
 * Generates an array of random numbers between 0 and 9
 * @param {integer} n: length of array to generate
 */
function randomNumbersBetween0and9(n) {
  var randomNumberArray = [];
  for (var i = 0; i < n; i++) {
    randomNumberArray.push(Math.floor(Math.random() * 10));
  }
  return randomNumberArray;
}

// Create our first trace
var trace1 = {
  x: [1, 2, 3, 4, 5],
  y: randomNumbersBetween0and9(5),
  type: "scatter"
};

// Create our second trace
var trace2 = {
  x: [1, 2, 3, 4, 5],
  y: randomNumbersBetween0and9(5),
  type: "scatter"
};

// The data array consists of both traces
var data = [trace1, trace2];

// Note that we omitted the layout object this time
// This will use default parameters for the layout
Plotly.newPlot("plot", data);
##########################
##########################
###   ./05-plots.js  
##########################


// Trace1 for the Greek Data
var trace1 = {
  x: data.map(row => row.pair),
  y: data.map(row => row.greekSearchResults),
  text: data.map(row => row.greekName),
  name: "Greek",
  type: "bar"
};

// Trace 2 for the Roman Data
var trace2 = {
  x: data.map(row => row.pair),
  y: data.map(row => row.romanSearchResults),
  text: data.map(row => row.romanName),
  name: "Roman",
  type: "bar"
};

// Combining both traces
var data = [trace1, trace2];

// Apply the group barmode to the layout
var layout = {
  title: "Greek vs Roman gods search results",
  barmode: "group"
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);
##########################
##########################
###   ./06-slicing.js  
##########################


// Array of names
const names = ["Jane", "John", "Jimbo", "Jedediah"];

// Slices first two names
const left = names.slice(0, 2);
console.log(left);

// Slices last two names and return
const right = names.slice(2, 4);
console.log(right);
##########################
##########################
###   ./06-sorting.js  
##########################


// Sorts descending
[3, 2, -120].sort(function compareFunction(firstNum, secondNum) {
   // resulting order is (3, 2, -120)
  return secondNum - firstNum;
});


// Sorts ascending
[3, 2, -120].sort(function compareFunction(firstNum, secondNum) {
  // resulting order is (-120, 2, 3)
  return firstNum - secondNum;
});

// Arrow Function
[3, 2, -120].sort((first, second) => first - second);

##########################
##########################
###   ./07-plots.js  
##########################


// Sort the data array using the greekSearchResults value
data.sort(function(a, b) {
  return parseFloat(b.greekSearchResults) - parseFloat(a.greekSearchResults);
});

// Slice the first 10 objects for plotting
data = data.slice(0, 10);

// Reverse the array due to Plotly's defaults
data = data.reverse();

// Trace1 for the Greek Data
var trace1 = {
  x: data.map(row => row.greekSearchResults),
  y: data.map(row => row.greekName),
  text: data.map(row => row.greekName),
  name: "Greek",
  type: "bar",
  orientation: "h"
};

// data
var data = [trace1];

// Apply the group bar mode to the layout
var layout = {
  title: "Greek gods search results",
  margin: {
    l: 100,
    r: 100,
    t: 100,
    b: 100
  }
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);
##########################
##########################
###   ./08-plots.js  
##########################



// Create the Traces
var trace1 = {
  x: data.year,
  y: data.high_jump,
  mode: "markers",
  type: "scatter",
  name: "high jump",
  marker: {
    color: "#2077b4",
    symbol: "hexagram"
  }
};

var trace2 = {
  x: data.year,
  y: data.discus_throw,
  mode: "markers",
  type: "scatter",
  name: "discus throw",
  marker: {
    color: "orange",
    symbol: "diamond-x"
  }
};

var trace3 = {
  x: data.year,
  y: data.long_jump,
  mode: "markers",
  type: "scatter",
  name: "long jump",
  marker: {
    color: "rgba(156, 165, 196, 1.0)",
    symbol: "cross"
  }
};

// Create the data array for the plot
var data = [trace1, trace2, trace3];

// Define the plot layout
var layout = {
  title: "Olympic trends over the years",
  xaxis: { title: "Year" },
  yaxis: { title: "Olympic Event" }
};

// Plot the chart to a div tag with id "plot"
Plotly.newPlot("plot", data, layout);




#####----------------###
#####----------------###
#####  END OF WEEK NUMBER 15
#####  END OF class day 1
########################



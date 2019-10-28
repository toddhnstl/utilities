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


## Appending 
#####----------------###
#####----------------###
#####  WEEK NUMBER 15  #########
#####  class day 2  #########
#####


##########################
##########################
###   ./01-plots.js  
##########################


// just draws the first graph
function init() {
  data = [{
    x: [1, 2, 3, 4, 5],
    y: [0, 0, 0, 0, 0] }];
  var LINE = document.getElementById("plot");
  Plotly.plot(LINE, data);
}

function updatePlotly(newx, newy) {
  var LINE = document.getElementById("plot");

  // Note the extra brackets around 'newx' and 'newy'
  Plotly.restyle(LINE, "x", [newx]);
  Plotly.restyle(LINE, "y", [newy]);
}

function getData(dataset) {

  // Initialize empty arrays to contain our axes
  var x = [];
  var y = [];

  // Fill the x and y arrays as a function of the selected dataset
  switch (dataset) {
  case "dataset1":
    x = [1, 2, 3, 4, 5];
    y = [0.1, 0.2, 0.3, 0.4, 0.5];
    break;
  case "dataset2":
    x = [10, 20, 30, 40, 50];
    y = [1, 10, 100, 1000, 10000];
    break;
  case "dataset3":
    x = [100, 200, 300, 400, 500];
    y = [10, 100, 50, 10, 0];
    break;
  default:
    x = [1, 2, 3, 4, 5];
    y = [0, 0, 0, 0, 0];
    break;
  }

  updatePlotly(x, y);
}

init();
##########################
##########################
###   ./02-plots.js  
##########################


function init() {
  var data = [{
    values: [1, 2, 3, 39],
    labels: ["Spotify", "Soundcloud", "Pandora", "Itunes"],
    type: "pie"
  }];

  var layout = {
    height: 600,
    width: 800
  };

  Plotly.plot("pie", data, layout);
}

function updatePlotly(newdata) {
  var PIE = document.getElementById("pie");
  Plotly.restyle(PIE, "values", [newdata]);
}

function getData(dataset) {
  var data = [];
  switch (dataset) {
  case "dataset1":
    data = [1, 2, 3, 39];
    break;
  case "dataset2":
    data = [10, 20, 30, 37];
    break;
  case "dataset3":
    data = [100, 200, 300, 23];
    break;
  default:
    data = [0, 0, 0, 0];
  }
  updatePlotly(data);
}

init();
##########################
##########################
###   ./03-demo.js  
##########################


const url = "https://api.spacexdata.com/v2/launchpads";

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
});

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);
##########################
##########################
###   ./04-plots.js  
##########################


var apiKey = "YOUR KEY HERE";

/* global Plotly */
var url =
  `https://www.quandl.com/api/v3/datasets/WIKI/AMZN.json?start_date=2016-10-01&end_date=2017-10-01&api_key=${apiKey}`;

/**
 * Helper function to select stock data
 * Returns an array of values
 * @param {array} rows
 * @param {integer} index
 * index 0 - Date
 * index 1 - Open
 * index 2 - High
 * index 3 - Low
 * index 4 - Close
 * index 5 - Volume
 */
function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}

function buildPlot() {
  d3.json(url).then(function(data) {

    // Grab values from the data json object to build the plots
    var name = data.dataset.name;
    var stock = data.dataset.dataset_code;
    var startDate = data.dataset.start_date;
    var endDate = data.dataset.end_date;
    var dates = unpack(data.dataset.data, 0);
    var closingPrices = unpack(data.dataset.data, 1);

    var trace1 = {
      type: "scatter",
      mode: "lines",
      name: name,
      x: dates,
      y: closingPrices,
      line: {
        color: "#17BECF"
      }
    };

    var data = [trace1];

    var layout = {
      title: `${stock} closing prices`,
      xaxis: {
        range: [startDate, endDate],
        type: "date"
      },
      yaxis: {
        autorange: true,
        type: "linear"
      }
    };

    Plotly.newPlot("plot", data, layout);

  });
}

buildPlot();
##########################
##########################
###   ./05-plots.js  
##########################


/**
 * Helper function to select stock data
 * Returns an array of values
 * @param {array} rows
 * @param {integer} index
 * index 0 - Date
 * index 1 - Open
 * index 2 - High
 * index 3 - Low
 * index 4 - Close
 * index 5 - Volume
 */
function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}

// Submit Button handler
function handleSubmit() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input value from the form
  var stock = d3.select("#stockInput").node().value;
  console.log(stock);

  // clear the input value
  d3.select("#stockInput").node().value = "";

  // Build the plot with the new stock
  buildPlot(stock);
}

function buildPlot(stock) {
  var apiKey = "YOUR KEY HERE";

  var url = `https://www.quandl.com/api/v3/datasets/WIKI/${stock}.json?start_date=2016-10-01&end_date=2017-10-01&api_key=${apiKey}`;

  d3.json(url).then(function(data) {

    // Grab values from the response json object to build the plots
    var name = data.dataset.name;
    var stock = data.dataset.dataset_code;
    var startDate = data.dataset.start_date;
    var endDate = data.dataset.end_date;
    var dates = unpack(data.dataset.data, 0);
    var closingPrices = unpack(data.dataset.data, 1);

    var trace1 = {
      type: "scatter",
      mode: "lines",
      name: name,
      x: dates,
      y: closingPrices,
      line: {
        color: "#17BECF"
      }
    };

    var data = [trace1];

    var layout = {
      title: `${stock} closing prices`,
      xaxis: {
        range: [startDate, endDate],
        type: "date"
      },
      yaxis: {
        autorange: true,
        type: "linear"
      }
    };

    Plotly.newPlot("plot", data, layout);

  });
}

// Add event listener for submit button
d3.select("#submit").on("click", handleSubmit);
##########################
##########################
###   ./06-plots.js  
##########################


/**
 * Helper function to select stock data
 * Returns an array of values
 * @param {array} rows
 * @param {integer} index
 * index 0 - Date
 * index 1 - Open
 * index 2 - High
 * index 3 - Low
 * index 4 - Close
 * index 5 - Volume
 */
function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}

// Submit Button handler
function handleSubmit() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input value from the form
  var stock = d3.select("#stockInput").node().value;
  console.log(stock);

  // clear the input value
  d3.select("#stockInput").node().value = "";

  // Build the plot with the new stock
  buildPlot(stock);
}

function buildPlot(stock) {
  var apiKey = "s3EeyUFJHTF8yPpmLVsm";

  var url = `https://www.quandl.com/api/v3/datasets/WIKI/${stock}.json?start_date=2016-10-01&end_date=2017-10-01&api_key=${apiKey}`;

  d3.json(url).then(function(data) {

    // Grab values from the response json object to build the plots
    var name = data.dataset.name;
    var stock = data.dataset.dataset_code;
    var startDate = data.dataset.start_date;
    var endDate = data.dataset.end_date;
    var dates = unpack(data.dataset.data, 0);
    var openingPrices = unpack(data.dataset.data, 1);
    var highPrices = unpack(data.dataset.data, 2);
    var lowPrices = unpack(data.dataset.data, 3);
    var closingPrices = unpack(data.dataset.data, 4);

    var trace1 = {
      type: "scatter",
      mode: "lines",
      name: name,
      x: dates,
      y: closingPrices,
      line: {
        color: "#17BECF"
      }
    };

    // Candlestick Trace
    var trace2 = {
      type: "candlestick",
      x: dates,
      high: highPrices,
      low: lowPrices,
      open: openingPrices,
      close: closingPrices
    };

    var data = [trace1, trace2];

    var layout = {
      title: `${stock} closing prices`,
      xaxis: {
        range: [startDate, endDate],
        type: "date"
      },
      yaxis: {
        autorange: true,
        type: "linear"
      }
    };

    Plotly.newPlot("plot", data, layout);
  });
}

// Add event listener for submit button
d3.select("#submit").on("click", handleSubmit);
##########################
##########################
###   ./07-plots.js  
##########################


/**
 * Helper function to select stock data
 * Returns an array of values
 * @param {array} rows
 * @param {integer} index
 * index 0 - Date
 * index 1 - Open
 * index 2 - High
 * index 3 - Low
 * index 4 - Close
 * index 5 - Volume
 */
function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}

// Calculate a rolling average for an array
function rollingAverage(arr, windowPeriod = 10) {
  // rolling averages array to return
  var averages = [];

  // Loop through all of the data
  for (var i = 0; i < arr.length - windowPeriod + 1; i++) {
    // calculate the average for a window of data
    var sum = 0;
    for (var j = 0; j < windowPeriod; j++) {
      sum += arr[i + j];
    }
    // calculate the average and push it to the averages array
    averages.push(sum / windowPeriod);
  }
  return averages;
}

// Submit Button handler
function handleSubmit() {
  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input value from the form
  var stock = d3.select("#stockInput").node().value;
  console.log(stock);

  // clear the input value
  d3.select("#stockInput").node().value = "";

  // Build the plot with the new stock
  buildPlot(stock);
}

function buildPlot(stock) {
  var apiKey = "YOUR KEY HERE";

  var url = `https://www.quandl.com/api/v3/datasets/WIKI/${stock}.json?start_date=2016-10-01&end_date=2017-10-01&api_key=${apiKey}`;

  d3.json(url).then(function(data) {

    // Grab values from the response json object to build the plots
    var name = data.dataset.name;
    var stock = data.dataset.dataset_code;
    var startDate = data.dataset.start_date;
    var endDate = data.dataset.end_date;
    var dates = unpack(data.dataset.data, 0);
    var openingPrices = unpack(data.dataset.data, 1);
    var highPrices = unpack(data.dataset.data, 2);
    var lowPrices = unpack(data.dataset.data, 3);
    var closingPrices = unpack(data.dataset.data, 4);
    var rollingPeriod = 30;
    var rollingAvgClosing = rollingAverage(closingPrices, rollingPeriod);

    var trace1 = {
      type: "scatter",
      mode: "lines",
      name: name,
      x: dates,
      y: closingPrices,
      line: {
        color: "#17BECF"
      }
    };

    // Candlestick Trace
    var trace2 = {
      type: "candlestick",
      x: dates,
      high: highPrices,
      low: lowPrices,
      open: openingPrices,
      close: closingPrices
    };

    // Rolling Averages Trace
    var trace3 = {
      type: "scatter",
      mode: "lines",
      name: "Rolling",
      x: dates.slice(0, dates.length - rollingPeriod),
      y: rollingAvgClosing
    };

    var data = [trace1, trace2, trace3];

    var layout = {
      title: `${stock} closing prices`,
      xaxis: {
        range: [startDate, endDate],
        type: "date"
      },
      yaxis: {
        autorange: true,
        type: "linear"
      }
    };

    Plotly.newPlot("plot", data, layout);

  });
}

// Add event listener for submit button
d3.select("#submit").on("click", handleSubmit);
##########################
##########################
###   ./08-plots.js  
##########################


var apiKey = "YOUR KEY HERE";

/**
 * Helper function to select stock data
 * Returns an array of values
 * @param {array} rows
 * @param {integer} index
 * index 0 - Date
 * index 1 - Open
 * index 2 - High
 * index 3 - Low
 * index 4 - Close
 * index 5 - Volume
 */
function unpack(rows, index) {
  return rows.map(function(row) {
    return row[index];
  });
}

function getMonthlyData() {

  var queryUrl = `https://www.quandl.com/api/v3/datasets/WIKI/AMZN.json?start_date=2016-10-01&end_date=2017-10-01&collapse=monthly&api_key=${apiKey}`;
  d3.json(queryUrl).then(function(data) {
    var dates = unpack(data.dataset.data, 0);
    var openPrices = unpack(data.dataset.data, 1);
    var highPrices = unpack(data.dataset.data, 2);
    var lowPrices = unpack(data.dataset.data, 3);
    var closingPrices = unpack(data.dataset.data, 4);
    var volume = unpack(data.dataset.data, 5);
    buildTable(dates, openPrices, highPrices, lowPrices, closingPrices, volume);
  });
}

function buildTable(dates, openPrices, highPrices, lowPrices, closingPrices, volume) {
  var table = d3.select("#summary-table");
  var tbody = table.select("tbody");
  var trow;
  for (var i = 0; i < 12; i++) {
    trow = tbody.append("tr");
    trow.append("td").text(dates[i]);
    trow.append("td").text(openPrices[i]);
    trow.append("td").text(highPrices[i]);
    trow.append("td").text(lowPrices[i]);
    trow.append("td").text(closingPrices[i]);
    trow.append("td").text(volume[i]);
  }
}

function buildPlot() {
  var url = `https://www.quandl.com/api/v3/datasets/WIKI/AMZN.json?start_date=2016-10-01&end_date=2017-10-01&api_key=${apiKey}`;

  d3.json(url).then(function(data) {

    // Grab values from the response json object to build the plots
    var name = data.dataset.name;
    var stock = data.dataset.dataset_code;
    var startDate = data.dataset.start_date;
    var endDate = data.dataset.end_date;
    var dates = unpack(data.dataset.data, 0);
    var openingPrices = unpack(data.dataset.data, 1);
    var highPrices = unpack(data.dataset.data, 2);
    var lowPrices = unpack(data.dataset.data, 3);
    var closingPrices = unpack(data.dataset.data, 4);

    getMonthlyData();

    var trace1 = {
      type: "scatter",
      mode: "lines",
      name: name,
      x: dates,
      y: closingPrices,
      line: {
        color: "#17BECF"
      }
    };

    // Candlestick Trace
    var trace2 = {
      type: "candlestick",
      x: dates,
      high: highPrices,
      low: lowPrices,
      open: openingPrices,
      close: closingPrices
    };

    var data = [trace1, trace2];

    var layout = {
      title: `${stock} closing prices`,
      xaxis: {
        range: [startDate, endDate],
        type: "date"
      },
      yaxis: {
        autorange: true,
        type: "linear"
      },
      showlegend: false
    };

    Plotly.newPlot("plot", data, layout);

  });
}

buildPlot();

// BONUS - Dynamically add the current date to the report header
var monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var today = new Date();
var date = `${monthNames[today.getMonth()]} ${today.getFullYear().toString().substr(2, 2)}`;

d3.select("#report-date").text(date);




#####----------------###
#####----------------###
#####  END OF WEEK NUMBER 15
#####  END OF class day 2
########################


## Appending 
#####----------------###
#####----------------###
#####  WEEK NUMBER 15  #########
#####  class day 3  #########
#####


##########################
##########################
###   ./consolidate/01-app.py  
##########################


from flask import Flask, jsonify, render_template
app = Flask(__name__)


@app.route("/")
def index():
    return render_template('index.html')


@app.route("/line")
def test():
    data = [{
        "x": [1, 2, 3, 4, 5],
        "y": [1, 2, 4, 8, 16]}]

    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)
##########################
##########################
###   ./consolidate/02-app.py  
##########################


from lyrics import get_lyrics

from flask import Flask, jsonify, render_template
app = Flask(__name__)


@app.route("/")
def index():
    return render_template('index.html')


@app.route("/pie")
def rick():

    lyrics = get_lyrics()
    labels, values = zip(*lyrics.items())
    data = [{
        "labels": labels,
        "values": values,
        "type": "pie"}]

    return jsonify(data)


if __name__ == "__main__":
    app.run(debug=True)
##########################
##########################
###   ./consolidate/02-lyrics.py  
##########################


from collections import Counter


def get_lyrics():
    with open('lyrics.txt') as fh:
        lyrics = [line.strip() for line in fh if line.strip()]
        return Counter(lyrics)


if __name__ == '__main__':
    lyrics = get_lyrics()
    labels, values = zip(*lyrics.items())

    print(labels, values)
##########################
##########################
###   ./consolidate/03-app.js  
##########################


// Plot the default route once the page loads
var defaultURL = "/emoji_char";
d3.json(defaultURL).then(function(data) {
  var data = [data];
  var layout = { margin: { t: 30, b: 100 } };
  Plotly.plot("bar", data, layout);
});

// Update the plot with new data
function updatePlotly(newdata) {
  Plotly.restyle("bar", "x", [newdata.x]);
  Plotly.restyle("bar", "y", [newdata.y]);
}

// Get new data whenever the dropdown selection changes
function getData(route) {
  console.log(route);
  d3.json(`/${route}``NOTE: ONE BACKTICK HERE).then(function(data) {
    console.log("newdata", data);
    updatePlotly(data);
  });
}
##########################
##########################
###   ./consolidate/03-app.py  
##########################


import pandas as pd

from flask import (
    Flask,
    render_template,
    jsonify)

from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

# The database URI
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///db/emoji.sqlite"

db = SQLAlchemy(app)


# Create our database model
class Emoji(db.Model):
    __tablename__ = 'emoji'

    id = db.Column(db.Integer, primary_key=True)
    emoji_char = db.Column(db.String)
    emoji_id = db.Column(db.String)
    name = db.Column(db.String)
    score = db.Column(db.Integer)

    def __repr__(self):
        return '<Emoji %r>' % (self.name)


# Create database tables
@app.before_first_request
def setup():
    # Recreate database each time for demo
    # db.drop_all()
    db.create_all()


@app.route("/")
def home():
    """Render Home Page."""
    return render_template("index.html")


@app.route("/emoji_char")
def emoji_char_data():
    """Return emoji score and emoji char"""

    # Query for the top 10 emoji data
    results = db.session.query(Emoji.emoji_char, Emoji.score).\
        order_by(Emoji.score.desc()).\
        limit(10).all()

    # Create lists from the query results
    emoji_char = [result[0] for result in results]
    scores = [int(result[1]) for result in results]

    # Generate the plot trace
    trace = {
        "x": emoji_char,
        "y": scores,
        "type": "bar"
    }
    return jsonify(trace)


@app.route("/emoji_id")
def emoji_id_data():
    """Return emoji score and emoji id"""

    # Query for the emoji data using pandas
    query_statement = db.session.query(Emoji).\
        order_by(Emoji.score.desc()).\
        limit(10).statement
    df = pd.read_sql_query(query_statement, db.session.bind)

    # Format the data for Plotly
    trace = {
        "x": df["emoji_id"].values.tolist(),
        "y": df["score"].values.tolist(),
        "type": "bar"
    }
    return jsonify(trace)


@app.route("/emoji_name")
def emoji_name_data():
    """Return emoji score and emoji name"""

    # Query for the top 10 emoji data
    results = db.session.query(Emoji.name, Emoji.score).\
        order_by(Emoji.score.desc()).\
        limit(10).all()
    df = pd.DataFrame(results, columns=['name', 'score'])

    # Format the data for Plotly
    plot_trace = {
        "x": df["name"].values.tolist(),
        "y": df["score"].values.tolist(),
        "type": "bar"
    }
    return jsonify(plot_trace)


if __name__ == '__main__':
    app.run(debug=True)
##########################
##########################
###   ./consolidate/04-app.js  
##########################


/* data route */
var url = "/data";

function buildPlot() {
  d3.json(url).then(function(response) {

    console.log(response);
    var trace = {
      type: "scatter",
      mode: "lines",
      name: "Bigfoot Sightings",
      x: response.map(data => data.year),
      y: response.map(data => data.sightings),
      line: {
        color: "#17BECF"
      }
    };

    var data = [trace];

    var layout = {
      title: "Bigfoot Sightings Per Year",
      xaxis: {
        type: "date"
      },
      yaxis: {
        autorange: true,
        type: "linear"
      }
    };

    Plotly.newPlot("plot", data, layout);
  });
}

buildPlot();
##########################
##########################
###   ./consolidate/04-app.py  
##########################


# import necessary libraries
from sqlalchemy import func
import pandas as pd

from flask import (
    Flask,
    render_template,
    jsonify)

from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///db/bigfoot.sqlite"

db = SQLAlchemy(app)


class Bigfoot(db.Model):
    __tablename__ = 'bigfoot'

    id = db.Column(db.Integer, primary_key=True)
    number = db.Column(db.Integer)
    title = db.Column(db.String)
    classification = db.Column(db.String)
    timestamp = db.Column(db.String)
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float)

    def __repr__(self):
        return '<BigFoot %r>' % (self.name)


# Create database classes
@app.before_first_request
def setup():
    # Recreate database each time for demo
    # db.drop_all()
    db.create_all()


# Create a route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html")


# Query the database and return the jsonified results
@app.route("/data")
def data():
    sel = [func.strftime("%Y", Bigfoot.timestamp), func.count(Bigfoot.timestamp)]
    results = db.session.query(*sel).\
        group_by(func.strftime("%Y", Bigfoot.timestamp)).all()
    df = pd.DataFrame(results, columns=['year', 'sightings'])
    return jsonify(df.to_dict(orient="records"))


if __name__ == "__main__":
    app.run(debug=True)
##########################
##########################
###   ./consolidate/05-app.py  
##########################


# import necessary libraries
from flask import (
    Flask,
    render_template,
    jsonify,
    request)


app = Flask(__name__)


@app.route("/")
def home():
    return "Welcome!"


# Create a list to hold our data
my_data = []


@app.route("/api/data")
def data():
    print(my_data)
    return jsonify(my_data)


@app.route("/send", methods=["GET", "POST"])
def send():
    if request.method == "POST":
        nickname = request.form["nickname"]
        age = request.form["age"]

        form_data = {
            "nickname": nickname,
            "age": int(age)
        }

        my_data.append(form_data)

        return "Thanks for the form data!"

    return render_template("form.html")


if __name__ == "__main__":
    app.run(debug=True)
##########################
##########################
###   ./consolidate/06-app.py  
##########################


# import necessary libraries
from flask import (
    Flask,
    render_template,
    jsonify,
    request)

from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///db/db.sqlite"

db = SQLAlchemy(app)


class Pet(db.Model):
    __tablename__ = 'pets'

    id = db.Column(db.Integer, primary_key=True)
    nickname = db.Column(db.String(64))
    pettype = db.Column(db.String(64))
    age = db.Column(db.Integer)

    def __repr__(self):
        return '<Pet %r>' % (self.nickname)


@app.before_first_request
def setup():
    # Recreate database each time for demo
    db.drop_all()
    db.create_all()


@app.route("/send", methods=["GET", "POST"])
def send():
    if request.method == "POST":
        nickname = request.form["nickname"]

        pet = Pet(nickname=nickname, age=age)
        db.session.add(pet)
        db.session.commit()

        return "Thanks for the form data!"

    return render_template("form.html")


@app.route("/api/data")
def list_pets():
    results = db.session.query(Pet.nickname, Pet.age).all()

    pets = []
    for result in results:
        pets.append({
            "nickname": result[0],
            "age": result[1]
        })
    return jsonify(pets)


@app.route("/")
def home():
    return "Welcome!"


if __name__ == "__main__":
    app.run()
##########################
##########################
###   ./consolidate/07-app.js  
##########################


function buildPlot() {
    /* data route */
  var url = "/api/pals";
  d3.json(url).then(function(response) {

    console.log(response);

    var data = response;

    var layout = {
      scope: "usa",
      title: "Pet Pals",
      showlegend: false,
      height: 600,
            // width: 980,
      geo: {
        scope: "usa",
        projection: {
          type: "albers usa"
        },
        showland: true,
        landcolor: "rgb(217, 217, 217)",
        subunitwidth: 1,
        countrywidth: 1,
        subunitcolor: "rgb(255,255,255)",
        countrycolor: "rgb(255,255,255)"
      }
    };

    Plotly.newPlot("plot", data, layout);
  });
}

buildPlot();
##########################
##########################
###   ./consolidate/07-app.py  
##########################


# import necessary libraries
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

from flask_sqlalchemy import SQLAlchemy

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Database Setup
#################################################
app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///db/pets.sqlite"

db = SQLAlchemy(app)


class Pet(db.Model):
    __tablename__ = 'pets'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(64))
    lat = db.Column(db.Float)
    lon = db.Column(db.Float)

    def __repr__(self):
        return '<Pet %r>' % (self.name)


@app.before_first_request
def setup():
    # Recreate database each time for demo
    # db.drop_all()
    db.create_all()


# create route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html")


# Query the database and send the jsonified results
@app.route("/send", methods=["GET", "POST"])
def send():
    if request.method == "POST":
        name = request.form["petName"]
        lat = request.form["petLat"]
        lon = request.form["petLon"]

        pet = Pet(name=name, lat=lat, lon=lon)
        db.session.add(pet)
        db.session.commit()
        return redirect("/", code=302)

    return render_template("form.html")


@app.route("/api/pals")
def pals():
    results = db.session.query(Pet.name, Pet.lat, Pet.lon).all()

    hover_text = [result[0] for result in results]
    lat = [result[1] for result in results]
    lon = [result[2] for result in results]

    pet_data = [{
        "type": "scattergeo",
        "locationmode": "USA-states",
        "lat": lat,
        "lon": lon,
        "text": hover_text,
        "hoverinfo": "text",
        "marker": {
            "size": 50,
            "line": {
                "color": "rgb(8,8,8)",
                "width": 1
            },
        }
    }]

    return jsonify(pet_data)


if __name__ == "__main__":
    app.run()




#####----------------###
#####----------------###
#####  END OF WEEK NUMBER 15
#####  END OF class day 3
########################



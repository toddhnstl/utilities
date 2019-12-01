#####----------------###
#####----------------###
#####  WEEK NUMBER 16  #########
#####  class day 01  #########
#####


##########################
##########################
###   ./01-demo.js  
##########################


// 1-.each()
d3.select("ul").selectAll("li");

d3.select("ul").selectAll("li")
    .each(function(d, i) {
      console.log("element", this);
      console.log("data", d);
      console.log("index", i);
    });


// 2-.data()
// Access elements' data
// returns an array of undefined items
d3.select("ul").selectAll("li").data();

// Assign data to elements in the selector object
// not enough
var arr = [50, 55];
d3.select("ul").selectAll("li").data(arr);
d3.select("ul").selectAll("li").data();

// just right
var arr = [50, 55, 53];
d3.select("ul").selectAll("li").data(arr);
d3.select("ul").selectAll("li").data();

// too many
var arr = [50, 55, 53, 56, 68];
d3.select("ul").selectAll("li").data(arr);
d3.select("ul").selectAll("li").data();

// trying to reassign with not enough
var arr = [1, 2];
d3.select("ul").selectAll("li").data(arr);
d3.select("ul").selectAll("li").data();


// 3-Multiple Methods
var arr = [50, 55, 53];

d3.select("ul").selectAll("li")
    .data(arr)
    .text(function(d) {
      return d;
    });

// Modify the returned data
d3.select("ul").selectAll("li")
    .data(arr)
    .text(function(d) {
      return d + 1000;
    });


// 4-.enter()
// New data points are ignored here
var arr = [50, 55, 53, 56, 68];

d3.select("ul").selectAll("li")
    .data(arr)
    .text(function(d) {
      return d;
    });

// append affects existing elements = FAIL!
var arr = [50, 55, 53, 56, 68];
d3.select("ul").selectAll("li")
    .data(arr)
    .append("li")
    .text(function(d) {
      return d;
    });

// Use `enter` to create new elements
var arr = [50, 55, 53, 56, 68];
// First, update existing elements
d3.select("ul")
    .selectAll("li")
    .data(arr)
    .text(function(d) {
      return d;
    });

// Second, create new elements for extra data points
d3.select("ul")
    .selectAll("li")
    .data(arr)
    .enter()
    .append("li")
    .text(function(d) {
      return d;
    });


// 5-.exit()
// Finally, what if we remove an item?
var arr = [50, 55];
d3.select("ul")
    .selectAll("li")
    .data(arr)
    .exit()
    .remove();
##########################
##########################
###   ./02-demo.js  
##########################


var complexData = [{
  title: "javascript",
  url: "https://media.giphy.com/media/10bdAP4IOmoN7G/giphy.gif"
},
{
  title: "python",
  url: "https://media.giphy.com/media/2yP1jNgjNAkvu/giphy.gif"
},
{
  title: "css",
  url: "https://media.giphy.com/media/TsxMkIKHpvFaU/giphy.gif"
}
];

d3.select(".img-gallery").selectAll("div")
  .data(complexData)
  .enter() // creates placeholder for new data
  .append("div") // appends a div to placeholder
  .classed("col-md-4 thumbnail", true) // sets the class of the new div
  .html(function(d) {
    return `<img src="${d.url}">`;
  }); // sets the html in the div to an image tag with the link
##########################
##########################
###   ./03-table.js  
##########################


var austinWeather = [{
  date: "2018-02-01",
  low: 51,
  high: 76
},
{
  date: "2018-02-02",
  low: 47,
  high: 59
},
{
  date: "2018-02-03",
  low: 44,
  high: 59
},
{
  date: "2018-02-04",
  low: 52,
  high: 73
},
{
  date: "2018-02-05",
  low: 47,
  high: 71
}
];

d3.select("tbody")
  .selectAll("tr")
  .data(austinWeather)
  .enter()
  .append("tr")
  .html(function(d) {
    return `<td>${d.date}</td><td>${d.low}</td><td>${d.high}</td>`;
  });
##########################
##########################
###   ./04-demo.js  
##########################


var austinTemps = [76, 59, 59, 73, 71];

/** *********************************************************
 * 1. Basic Data Bind
 ********************************************************** */

// Basic Bind - Updates current elements
var austinTemps = [76, 59, 59, 73, 71];
d3.selectAll("#content").selectAll(".temps")
    .data(austinTemps)
    .style("height", function(d) {
      return d + "px";
    });


/** *********************************************************
 * 2. Updates only the new elements
 ********************************************************** */
// Enter - Updates New Elements
var austinTemps = [76, 59, 59, 73, 71];
d3.select("#content").selectAll(".temps")
    .data(austinTemps)
    .enter()
    .append("div")
    .classed("temps", true)
    .style("height", function(d) {
      return d + "px";
    });


/** *********************************************************
 * 3. Enter - Updates Only Old Elements
 ********************************************************** */
var austinTemps = [76, 59, 59, 73, 71];
var selection = d3.select("#content").selectAll(".temps")
    .data(austinTemps);

selection.enter()
    .append("div")
    .classed("temps", true);

selection.style("height", function(d) {
  return d + "px";
});


/** *********************************************************
 * 4. Enter - Updates All Elements
 ********************************************************** */
var austinTemps = [76, 59, 59, 73, 71];
var selection = d3.select("#content").selectAll(".temps")
    .data(austinTemps);

selection.enter()
    .append("div")
    .classed("temps", true)
    .merge(selection)
    .style("height", function(d) {
      return d + "px";
    });


/** *********************************************************
// 5. Exit Pattern
********************************************************** */
var austinTemps = [76];

var selection = d3.select("#content").selectAll(".temps")
    .data(austinTemps);

selection.enter()
    .append("div")
    .classed("temps", true)
    .merge(selection)
    .style("height", function(d) {
      return d + "px";
    });

selection.exit().remove();

/** *********************************************************
 * 6. Enter - Update - Exit Pattern Function
 * https://bl.ocks.org/mbostock/3808218
 ********************************************************** */

function update(data) {

  var selection = d3.select("#content").selectAll(".temps")
        .data(data);

  selection.enter()
        .append("div")
        .classed("temps", true)
        .merge(selection)
        .style("height", function(d) {
          return d + "px";
        });

  selection.exit().remove();
}

/* Test 1 */
var austinTemps = [100, 103, 105, 110, 100, 98];
update(austinTemps);

/* Test 2 */
austinTemps = [80];
update(austinTemps);
##########################
##########################
###   ./07demo.js  
##########################


// Part 1
// Generating an SVG - BUllsEye

var svg = d3.select("body").append("svg");

svg.attr("width", "100px").attr("height", "100px");

// Part 2
// Binding the SVG to data

var circles = svg.selectAll("circle");

var rValues = [40, 25, 10];

circles.data(rValues)
    .enter()
    .append("circle")
    .attr("cx", 50)
    .attr("cy", 50)
    .attr("r", function(d) {
      return d;
    })
    .attr("stroke", "black")
    .attr("stroke-width", "5")
    .attr("fill", "red");
##########################
##########################
###   ./08-app.js  
##########################


// Data which we will be using to build our chart
var booksReadThisYear = [15];

// Append the SVG wrapper to the page, set its height and width, and create a variable which references it
var svg = d3.select("#svg-area")
  .append("svg")
  .attr("height", "600")
  .attr("width", "400");

// Append a rectangle and set its height in relation to the booksReadThisYear value
svg.append("rect")
  .classed("bar", true) // for bonus
  .data(booksReadThisYear)
  .attr("width", 100)
  .attr("height", function(d) {
    return d * 10;
  })
  .attr("x", 0)
  .attr("y", 0);
##########################
##########################
###   ./09-app.js  
##########################


// Dataset we will be using to set the height of our rectangles
var booksReadThisYear = [17, 23, 20, 34];

// Setting variable for height and width for ease of calculations
var svgHeight = 600;
var svgWeight = 400;

// Append an SVG wrapper to the page and set a variable equal to a reference to it
var svg = d3.select("#svg-area")
  .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWeight);

// Vertical Bar Chart
// Selects all rectangles currently on the page - which is none - and binds our dataset to them. If there are no rectangles, it will append one for each piece of data.
svg.selectAll("rect")
  .data(booksReadThisYear)
  .enter()
  .append("rect")
  .classed("bar", true)
  .attr("width", 50)
  // Setting the height of our rectangles now uses an anonymous function that selects a single piece of data from our dataset and multiplies it by 10
  .attr("height", function(data) {
    return data * 10;
  })
  // Setting the height of our rectangles now uses an anonymous function that selects a single piece of data from our dataset and multiplies it by 10
  .attr("x", function(data, index) {
    return index * 60;
  });
  // for bonus 2
  // .attr("y", function(d) {
  //   return svgHeight - d * 10;
  // });

// Horizontal Bar Chart
// svg.selectAll("rect")
//   .data(booksReadThisYear)
//   .enter().append("rect")
//   .attr("width", function(d) {
//     return d * 10;
//   })
//   .attr("height", 50)
//   .attr("x", 0)
//   .attr("y", function(d, i) {
//     return i * 60;
//   });
##########################
##########################
###   ./10-app.js  
##########################


// Dataset we will be using to set the height of our rectangles.
var booksReadThisYear = [17, 23, 20, 34];

// Setting the dimensions for the SVG container
var svgHeight = 600;
var svgWidth = 400;

var svg = d3
  .select("#svg-area")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// svgGroup now refers to the `g` (group) element appended.
// The SVG group would normally be aligned to the top left edge of the chart.
// Now it is offset to the right and down using the transform attribute
var svgGroup = svg.append("g")
  .attr("transform", "translate(50, 100)");

// Selects all rectangles currently on the page - which is none - and binds our dataset to them. If there are no rectangles, it will append one for each piece of data.
svgGroup.selectAll("rect")
  .data(booksReadThisYear)
  .enter()
  .append("rect")
  .attr("width", 50)
  .attr("height", function(data) {
    return data * 10;
  })
  .attr("x", function(data, index) {
    return index * 60;
  })
  .attr("y", function(data) {
    return 600 - data * 10;
  })
  .attr("class", "bar");




#####----------------###
#####----------------###
#####  END OF WEEK NUMBER 16
#####  END OF class day 01
########################


## Appending 
#####----------------###
#####----------------###
#####  WEEK NUMBER 16  #########
#####  class day 02  #########
#####


##########################
##########################
###   ./01-questions.js  
##########################


// Answer the following questions after discussing with a partner.

/* 1. What does SVG stand for? How are they used with D3?

* Scalable Vector Graphics

* Allows us to define our own graphics, like shapes and lines, giving us flexibility to build our custom charts. */


/* 2. What is data binding?

* Attaching data to specific HTML elements in the DOM. */


/* 3. Given the following and an HTML page with no elements currently in the body,
use the enter() pattern to render three <li> elements to the page with text matching
the integers in the array. */

var arr = [1, 2, 3];
var ul = d3.select("body").append("ul");
// YOUR CODE HERE//
var selection = ul.selectAll("li") // creates virtual selection
  .data(arr) // binds data
  .enter()
  .append("li") // appends li element for each item in array (since there are currently none)
  .text(function(d) {
    return d;
  }); // sets the text of each element to match the items in array


/* 4. Imagine three <li> elements already exist on the page.  Create code to update the text of those elements while also adding three new elements to match the array below. */
// Leave the number 3 code uncommented as it is needed for number 4 to work properly.
var arr = [1, 1, 2, 3, 5, 8];
var ul = d3.select("ul");
// YOUR CODE HERE //
var selection = ul.selectAll("li")
  .data(arr);
selection.enter()
  .append("li")
  .merge(selection)
  .text(function(d) {
    return d;
  });


/* Bonus - Refactor your solution to number 4 above using the ES6 syntax for arrow functions. Then, modify the code to set the text of each
element to "<index in the array>: <item from the array>" */
// Be sure to comment out your number 4 (not the arr or ul variables) before running your bonus code.
// // YOUR CODE HERE //
// var selection = ul.selectAll("li") // creates virtual selection
//   .data(arr); // binds data
// selection.enter()
//   .append("li") // appends li element for each item in array (since there are currently none)
//   .merge(selection)
//   .text((d, i) => `${i}: ${d}`); // uses arrow function and template literals to set text
##########################
##########################
###   ./02-app.js  
##########################


// Load data from hours-of-tv-watched.csv
d3.csv("./hours-of-tv-watched.csv").then(function(tvData) {

  console.log(tvData);

  // log a list of names
  var names = tvData.map(data => data.name);
  console.log("names", names);

  // Cast each hours value in tvData as a number using the unary + operator
  tvData.forEach(function(data) {
    data.hours = +data.hours;
    console.log("Name:", data.name);
    console.log("Hours:", data.hours);
  });
}).catch(function(error) {
  console.log(error);
});
##########################
##########################
###   ./03-app.js  
##########################


// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 660;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3
  .select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and down to adhere
// to the margins set in the "chartMargin" object.
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// Load data from hours-of-tv-watched.csv
d3.csv("hours-of-tv-watched.csv", function(error, tvData) {

  // Log an error if one exists
  if (error) return console.warn(error);

  // Print the tvData
  console.log(tvData);

  // Cast the hours value to a number for each piece of tvData
  tvData.forEach(function(data) {
    data.hours = +data.hours;
  });

  var barSpacing = 10; // desired space between each bar
  var scaleY = 10; // 10x scale on rect height

  // @TODO
  // Create a 'barWidth' variable so that the bar chart spans the entire chartWidth.
  var barWidth = (chartWidth - (barSpacing * (tvData.length - 1))) / tvData.length;

  // Create code to build the bar chart using the tvData.
  chartGroup.selectAll(".bar")
    .data(tvData)
    .enter()
    .append("rect")
    .classed("bar", true)
    .attr("width", d => barWidth)
    .attr("height", d => d.hours * scaleY)
    .attr("x", (d, i) => i * (barWidth + barSpacing))
    .attr("y", d => chartHeight - d.hours * scaleY);
});
##########################
##########################
###   ./04-app.js  
##########################


// Part 1: Max, Min, Extent
var dataArr = [10, 20, 2000];

console.log("min value ", d3.min(dataArr));
console.log("max value ", d3.max(dataArr));
console.log("min and max values ", d3.extent(dataArr));

// Part 2: scaleLinear
// Imagine you have test scores with possible scores from 0 to 100,
// and you want to graph them in an SVG that is 1000 pixels high.

var testScores = [50, 90, 95, 75, 85];

// a. hard-coded

var yScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, 1000]);

console.log(`50 returns ${yScale(50)}`);
console.log(`75 returns ${yScale(75)}`);
console.log(`100 returns ${yScale(100)}`);

// b. max and min
var svgHeight = 1000;

var yScale = d3.scaleLinear()
  .domain([0, d3.max(testScores)])
  .range([0, svgHeight]);


console.log(`50 returns ${yScale(50)}`);
console.log(`75 returns ${yScale(75)}`);
console.log(`95 returns ${yScale(95)}`);


// c. extent
var yScale = d3.scaleLinear()
  .domain(d3.extent(testScores))
  .range([0, svgHeight]);


console.log(`50 returns ${yScale(50)}`);
console.log(`75 returns ${yScale(75)}`);
console.log(`95 returns ${yScale(95)}`);

// Part 3: scaleBand
// Imagine you want to visualize student grade information on a bar chart.
svgHeight = 600;
var svgWidth = 1000;

testScores = [90, 85, 75, 90];
var students = ["Han", "Sarah", "Matt", "Ruchi"];

var xScale = d3.scaleBand()
  .domain(students)
  .range([0, svgWidth]);

console.log(`Han's x-coordinate: ${xScale("Han")}`);
console.log(`Sarah's x-coordinate: ${xScale(students[1])}`);
console.log(`Matt's x-coordinate: ${xScale("Matt")}`);
console.log(`Ruchi's x-coordinate: ${xScale(students[3])}`);

console.log(`Each band is ${xScale.bandwidth()} pixels wide.`);

// The y values are scaled separately.

var yScale = d3.scaleLinear()
  .domain([0, 100])
  .range([0, svgHeight]);

console.log(`The height of Han's bar: ${yScale(testScores[0])}`);
##########################
##########################
###   ./05-app.js  
##########################


// data
var dataArray = [1, 2, 3];
var dataCategories = ["one", "two", "three"];

// svg container
var svgHeight = 400;
var svgWidth = 1000;

// margins
var margin = {
  top: 50,
  right: 50,
  bottom: 50,
  left: 50
};

// chart area minus margins
var chartHeight = svgHeight - margin.top - margin.bottom;
var chartWidth = svgWidth - margin.left - margin.right;

// create svg container
var svg = d3.select("#svg-area").append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// shift everything over by the margins
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// scale y to chart height
var yScale = d3.scaleLinear()
  .domain([0, d3.max(dataArray)])
  .range([chartHeight, 0]);

// scale x to chart width
var xScale = d3.scaleBand()
  .domain(dataCategories)
  .range([0, chartWidth])
  .padding(0.05);

// create axes
var yAxis = d3.axisLeft(yScale);
var xAxis = d3.axisBottom(xScale);

// set x to the bottom of the chart
chartGroup.append("g")
  .attr("transform", `translate(0, ${chartHeight})`)
  .call(xAxis);

// set y to the y axis
// This syntax allows us to call the axis function
// and pass in the selector without breaking the chaining
chartGroup.append("g")
  .call(yAxis);

/* Note: The above code is equivalent to this:
    var g = chartGroup.append("g");

    yAxis(g);
*/
// Append Data to chartGroup
chartGroup.selectAll(".bar")
  .data(dataArray)
  .enter()
  .append("rect")
  .classed("bar", true)
  .attr("x", (d, i) => xScale(dataCategories[i]))
  .attr("y", d => yScale(d))
  .attr("width", xScale.bandwidth())
  .attr("height", d => chartHeight - yScale(d));
##########################
##########################
###   ./06-app.js  
##########################


// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 660;

// Define the chart's margins as an object
var chartMargin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;
var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3.select("body")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and to the bottom
var chartGroup = svg.append("g")
  .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// Load data from hours-of-tv-watched.csv
// YOUR CODE HERE
d3.csv("./hours-of-tv-watched.csv").then(function (tvData) {
  console.log(tvData);
  // Cast the hours value to a number for each piece of tvData
  tvData.forEach(function (data) {
    data.hours = +data.hours;
  });

  // Configure a band scale for the horizontal axis with a padding of 0.1 (10%)
  var xScale = d3.scaleBand()
    .domain(tvData.map(d => d.name))
    .range([0, chartWidth])
    .padding(0.1);

  // Create a linear scale for the vertical axis.
  var yScale = d3.scaleLinear()
    .domain([0, d3.max(tvData, d => d.hours)])
    .range([chartHeight, 0]);

  // Create two new axes functions passing our scales in as arguments
  var yAxis = d3.axisLeft(yScale);
  var xAxis = d3.axisBottom(xScale);

  // Append two SVG group elements to the chartGroup area,
  // and create the bottom and left axes inside of them
  chartGroup.append("g")
    .attr("transform", `translate(0, ${chartHeight})`)
    .call(xAxis);

  chartGroup.append("g")
    .call(yAxis);

  // Create one SVG rectangle per piece of tvData
  // Use the linear and band scales to position each rectangle within the chart
  chartGroup.selectAll(".bar")
    .data(tvData)
    .enter()
    .append("rect")
    .classed("bar", true)
    .attr("x", (d, i) => xScale(d.name))
    .attr("y", d => yScale(d.hours))
    .attr("width", xScale.bandwidth())
    .attr("height", d => chartHeight - yScale(d.hours))
});##########################
##########################
###   ./07-path-2.js  
##########################


// Generating a Path with D3 and an Array

var coordinates = [
  [100, 120],
  [200, 250],
  [300, 160],
  [400, 200]
];

var lineGenerator = d3.line();

console.log("Drawing commands:", lineGenerator(coordinates));

var svg = d3.select("#path-2");

svg.append("path")
  .attr("fill", "none")
  .attr("stroke", "blue")
  .attr("stroke-width", 5)
  .attr("d", lineGenerator(coordinates));
##########################
##########################
###   ./07-path-3.js  
##########################


// Scaling and Using Accessor Functions

var dataArray = [
  { x: 10, y: 12 },
  { x: 20, y: 25 },
  { x: 30, y: 16 },
  { x: 40, y: 20 }
];

var xScale = d3.scaleLinear()
  .domain([0, d3.max(dataArray, d => d.x)])
  .range([0, 400]);

var yScale = d3.scaleLinear()
  .domain([0, d3.max(dataArray, d => d.y)])
  .range([0, 250]);

var lineGenerator = d3.line()
  .x(d => xScale(d.x))
  .y(d => yScale(d.y));

console.log("Drawing commands:", lineGenerator(dataArray));

var svg = d3.select("#path-3");

svg.append("path")
  .attr("fill", "none")
  .attr("stroke", "orange")
  .attr("stroke-width", 5)
  .attr("d", lineGenerator(dataArray));
##########################
##########################
###   ./08-app.js  
##########################


var svgWidth = 1000;
var svgHeight = 500;

// create an SVG element
var svg = d3.select("#svg-area")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Load csv data
d3.csv("NCHS_life_expectancy_at_birth.csv", function(error, lifeData) {

  if (error) return console.warn(error);

  console.log(lifeData);

  // cast the data from the csv as numbers
  lifeData.forEach(function(data) {
    data.year = +data.year;
    data.lifeExpectancy = +data.lifeExpectancy;
  });

  // Create a scale for your independent (x) coordinates
  var xScale = d3.scaleLinear()
    .domain(d3.extent(lifeData, d => d.year))
    .range([0, svgWidth]);

  // Create a scale for your dependent (y) coordinates
  var yScale = d3.scaleLinear()
    .domain([0, d3.max(lifeData, d => d.lifeExpectancy)])
    .range([svgHeight, 0]);

  // create a line generator function and store as a variable
  // use the scale functions for x and y data
  var createLine = d3.line()
    .x(data => xScale(data.year))
    .y(data => yScale(data.lifeExpectancy));

  // Append a path element to the svg, make sure to set the stroke, stroke-width, and fill attributes.
  svg.append("path")
    .attr("stroke", "black")
    .attr("stroke-width", "1")
    .attr("fill", "none")
    .attr("d", createLine(lifeData));

});
##########################
##########################
###   ./09-app.js  
##########################


// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 500;

// Define the chart's margins as an object
var margin = {
  top: 60,
  right: 60,
  bottom: 60,
  left: 60
};

// Define dimensions of the chart area
var chartWidth = svgWidth - margin.left - margin.right;
var chartHeight = svgHeight - margin.top - margin.bottom;

// Select body, append SVG area to it, and set its dimensions
var svg = d3.select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Append a group area, then set its margins
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Configure a parseTime function which will return a new Date object from a string
var parseTime = d3.timeParse("%Y");

// Load data from forcepoints.csv
d3.csv("forcepoints.csv").then(function(forceData) {

  // Print the forceData
  console.log(forceData);

  // Format the date and cast the force value to a number
  forceData.forEach(function(data) {
    data.date = parseTime(data.date);
    data.force = +data.force;
  });

  // Configure a time scale
  // d3.extent returns the an array containing the min and max values for the property specified
  var xTimeScale = d3.scaleTime()
    .domain(d3.extent(forceData, data => data.date))
    .range([0, chartWidth]);

  // Configure a linear scale with a range between the chartHeight and 0
  var yLinearScale = d3.scaleLinear()
    .domain([0, d3.max(forceData, data => data.force)])
    .range([chartHeight, 0]);

  // Create two new functions passing the scales in as arguments
  // These will be used to create the chart's axes
  var bottomAxis = d3.axisBottom(xTimeScale);
  var leftAxis = d3.axisLeft(yLinearScale);

  // Configure a line function which will plot the x and y coordinates using our scales
  var drawLine = d3.line()
    .x(data => xTimeScale(data.date))
    .y(data => yLinearScale(data.force));

  // Append an SVG path and plot its points using the line function
  chartGroup.append("path")
    // The drawLine function returns the instructions for creating the line for forceData
    .attr("d", drawLine(forceData))
    .classed("line", true);

  // Append an SVG group element to the chartGroup, create the left axis inside of it
  chartGroup.append("g")
    .classed("axis", true)
    .call(leftAxis);

  // Append an SVG group element to the chartGroup, create the bottom axis inside of it
  // Translate the bottom axis to the bottom of the page
  chartGroup.append("g")
    .classed("axis", true)
    .attr("transform", `translate(0, ${chartHeight})`)
    .call(bottomAxis);
}).catch(function(error) {
  console.log(error);
});
##########################
##########################
###   ./10-app.js  
##########################


// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 500;

// Define the chart's margins as an object
var margin = {
  top: 60,
  right: 60,
  bottom: 60,
  left: 60
};

// Define dimensions of the chart area
var chartWidth = svgWidth - margin.left - margin.right;
var chartHeight = svgHeight - margin.top - margin.bottom;

// Select body, append SVG area to it, and set its dimensions
var svg = d3.select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Append a group area, then set its margins
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Configure a parseTime function which will return a new Date object from a string
var parseTime = d3.timeParse("%B");

// Load data from miles-walked-this-month.csv
d3.csv("miles-walked-this-month.csv", function(error, milesData) {

  // Throw an error if one occurs
  if (error) throw error;

  // Print the milesData
  console.log(milesData);

  // Format the date and cast the miles value to a number
  milesData.forEach(function(data) {
    data.date = parseTime(data.date);
    data.miles = +data.miles;
  });

  // Configure a time scale with a range between 0 and the chartWidth
  // Set the domain for the xTimeScale function
  // d3.extent returns the an array containing the min and max values for the property specified
  var xTimeScale = d3.scaleTime()
    .range([0, chartWidth])
    .domain(d3.extent(milesData, data => data.date));

  // Configure a linear scale with a range between the chartHeight and 0
  // Set the domain for the xLinearScale function
  var yLinearScale = d3.scaleLinear()
    .range([chartHeight, 0])
    .domain([0, d3.max(milesData, data => data.miles)]);

  // Create two new functions passing the scales in as arguments
  // These will be used to create the chart's axes
  var bottomAxis = d3.axisBottom(xTimeScale);
  var leftAxis = d3.axisLeft(yLinearScale);

  // Configure a drawLine function which will use our scales to plot the line's points
  var drawLine = d3
    .line()
    .x(data => xTimeScale(data.date))
    .y(data => yLinearScale(data.miles));

  // Append an SVG path and plot its points using the line function
  chartGroup.append("path")
    // The drawLine function returns the instructions for creating the line for milesData
    .attr("d", drawLine(milesData))
    .classed("line", true);

  // Append an SVG group element to the SVG area, create the left axis inside of it
  chartGroup.append("g")
    .classed("axis", true)
    .call(leftAxis);

  // Append an SVG group element to the SVG area, create the bottom axis inside of it
  // Translate the bottom axis to the bottom of the page
  chartGroup.append("g")
    .classed("axis", true)
    .attr("transform", "translate(0, " + chartHeight + ")")
    .call(bottomAxis);
});




#####----------------###
#####----------------###
#####  END OF WEEK NUMBER 16
#####  END OF class day 02
########################


## Appending 
#####----------------###
#####----------------###
#####  WEEK NUMBER 16  #########
#####  class day 03  #########
#####


##########################
##########################
###   ./01-app.js  
##########################


// Step 1: Set up our chart
//= ================================
var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 50
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Step 2: Create an SVG wrapper,
// append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
// =================================
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Step 3:
// Import data from the donuts.csv file
// =================================
d3.csv("donuts.csv").then(function(donutData) {
  // Step 4: Parse the data
  // Format the data and convert to numerical and date values
  // =================================
  // Create a function to parse date and time
  var parseTime = d3.timeParse("%d-%b");

  // Format the data
  donutData.forEach(function(data) {
    data.date = parseTime(data.date);
    data.morning = +data.morning;
    data.evening = +data.evening;
  });

  // Step 5: Create the scales for the chart
  // =================================
  var xTimeScale = d3.scaleTime()
    .domain(d3.extent(donutData, d => d.date))
    .range([0, width]);

  var yLinearScale = d3.scaleLinear().range([height, 0]);

  // Step 6: Set up the y-axis domain
  // ==============================================
  // @NEW! determine the max y value
  // find the max of the morning data
  var morningMax = d3.max(donutData, d => d.morning);

  // find the max of the evening data
  var eveningMax = d3.max(donutData, d => d.evening);

  var yMax;
  if (morningMax > eveningMax) {
    yMax = morningMax;
  }
  else {
    yMax = eveningMax;
  }

  // var yMax = morningMax > eveningMax ? morningMax : eveningMax;

  // Use the yMax value to set the yLinearScale domain
  yLinearScale.domain([0, yMax]);


  // Step 7: Create the axes
  // =================================
  var bottomAxis = d3.axisBottom(xTimeScale).tickFormat(d3.timeFormat("%d-%b"));
  var leftAxis = d3.axisLeft(yLinearScale);

  // Step 8: Append the axes to the chartGroup
  // ==============================================
  // Add x-axis
  chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

  // Add y-axis
  chartGroup.append("g").call(leftAxis);

  // Step 9: Set up two line generators and append two SVG paths
  // ==============================================

  // Line generator for morning data
  var line1 = d3.line()
    .x(d => xTimeScale(d.date))
    .y(d => yLinearScale(d.morning));

  // Line generator for evening data
  var line2 = d3.line()
    .x(d => xTimeScale(d.date))
    .y(d => yLinearScale(d.evening));

  // Append a path for line1
  chartGroup
    .append("path")
    .attr("d", line1(donutData))
    .classed("line green", true);

  // Append a path for line2
  chartGroup
    .data([donutData])
    .append("path")
    .attr("d", line2)
    .classed("line orange", true);

}).catch(function(error) {
  console.log(error);
});
##########################
##########################
###   ./02-app.js  
##########################


// Step 1: Set up our chart
//= ================================
var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 50
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Step 2: Create an SVG wrapper,
// append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
// =================================
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Step 3:
// Import data from the donuts.csv file
// =================================
d3.csv("donuts.csv").then(function(donutData) {
  // Step 4: Parse the data
  // Format the data and convert to numerical and date values
  // =================================
  // Create a function to parse date and time
  var parseTime = d3.timeParse("%d-%b");

  // Format the data
  donutData.forEach(function(data) {
    data.date = parseTime(data.date);
    data.morning = +data.morning;
    data.evening = +data.evening;
  });

  // Step 5: Create Scales
  //= ============================================
  var xTimeScale = d3.scaleTime()
    .domain(d3.extent(donutData, d => d.date))
    .range([0, width]);

  var yLinearScale1 = d3.scaleLinear()
    .domain([0, d3.max(donutData, d => d.morning)])
    .range([height, 0]);

  var yLinearScale2 = d3.scaleLinear()
    .domain([0, d3.max(donutData, d => d.evening)])
    .range([height, 0]);

  // Step 6: Create Axes
  // =============================================
  var bottomAxis = d3.axisBottom(xTimeScale).tickFormat(d3.timeFormat("%d-%b"));
  var leftAxis = d3.axisLeft(yLinearScale1);
  var rightAxis = d3.axisRight(yLinearScale2);


  // Step 7: Append the axes to the chartGroup
  // ==============================================
  // Add bottomAxis
  chartGroup.append("g").attr("transform", `translate(0, ${height})`).call(bottomAxis);

  // Add leftAxis to the left side of the display
  chartGroup.append("g").call(leftAxis);

  // Add rightAxis to the right side of the display
  chartGroup.append("g").attr("transform", `translate(${width}, 0)`).call(rightAxis);


  // Step 8: Set up two line generators and append two SVG paths
  // ==============================================
  // Line generators for each line
  var line1 = d3
    .line()
    .x(d => xTimeScale(d.date))
    .y(d => yLinearScale1(d.morning));

  var line2 = d3
    .line()
    .x(d => xTimeScale(d.date))
    .y(d => yLinearScale2(d.evening));


  // Append a path for line1
  chartGroup.append("path")
    .data([donutData])
    .attr("d", line1)
    .classed("line green", true);

  // Append a path for line2
  chartGroup.append("path")
    .data([donutData])
    .attr("d", line2)
    .classed("line orange", true);

}).catch(function(error) {
  console.log(error);
});
##########################
##########################
###   ./03-app.js  
##########################


// Step 1: Set up our chart
//= ================================
var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 50
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Step 2: Create an SVG wrapper,
// append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
// =================================
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Step 3:
// Import data from the donuts.csv file
// =================================
d3.csv("donuts.csv").then(function(donutData) {
  // Step 4: Parse the data
  // Format the data and convert to numerical and date values
  // =================================
  // Create a function to parse date and time
  var parseTime = d3.timeParse("%d-%b");

  // Format the data
  donutData.forEach(function(data) {
    data.date = parseTime(data.date);
    data.morning = +data.morning;
    data.evening = +data.evening;
  });

  // Step 5: Create Scales
  //= ============================================
  var xTimeScale = d3.scaleTime()
    .domain(d3.extent(donutData, d => d.date))
    .range([0, width]);

  var yLinearScale1 = d3.scaleLinear()
    .domain([0, d3.max(donutData, d => d.morning)])
    .range([height, 0]);

  var yLinearScale2 = d3.scaleLinear()
    .domain([0, d3.max(donutData, d => d.evening)])
    .range([height, 0]);

  // Step 6: Create Axes
  // =============================================
  var bottomAxis = d3.axisBottom(xTimeScale).tickFormat(d3.timeFormat("%d-%b"));
  var leftAxis = d3.axisLeft(yLinearScale1);
  var rightAxis = d3.axisRight(yLinearScale2);


  // Step 7: Append the axes to the chartGroup - ADD STYLING
  // ==============================================
  // Add bottomAxis
  chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

  // CHANGE THE TEXT TO THE CORRECT COLOR
  chartGroup.append("g")
    .attr("stroke", "green") // NEW!
    .call(leftAxis);

  // CHANGE THE TEXT TO THE CORRECT COLOR
  chartGroup.append("g")
    .attr("transform", `translate(${width}, 0)`)
    .attr("stroke", "orange") // NEW!
    .call(rightAxis);


  // Step 8: Set up two line generators and append two SVG paths
  // ==============================================
  // Line generators for each line
  var line1 = d3
    .line()
    .x(d => xTimeScale(d.date))
    .y(d => yLinearScale1(d.morning));

  var line2 = d3
    .line()
    .x(d => xTimeScale(d.date))
    .y(d => yLinearScale2(d.evening));

  // Append a path for line1
  chartGroup.append("path")
    .data([donutData])
    .attr("d", line1)
    .classed("line green", true);

  // Append a path for line2
  chartGroup.append("path")
    .data([donutData])
    .attr("d", line2)
    .classed("line orange", true);

  // NEW! Step 9: Add color coded titles to the x-axis
  // YOUR CODE HERE

  chartGroup.append("text")
    // Position the text
    // Center the text:
    // (https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-anchor)
    .attr("transform", `translate(${width / 2}, ${height + margin.top + 20})`)
    .attr("text-anchor", "middle")
    .attr("font-size", "16px")
    .attr("fill", "green")
    .text("Morning Donut Craving Level");

  chartGroup.append("text")
    .attr("transform", `translate(${width / 2}, ${height + margin.top + 37})`)
    .attr("text-anchor", "middle")
    .attr("font-size", "16px")
    .attr("fill", "orange")
    .text("Evening Donut Craving Level");

}).catch(function(error) {
  console.log(error);
});
##########################
##########################
###   ./04-app.js  
##########################


// Chart Params
var svgWidth = 960;
var svgHeight = 500;

var margin = { top: 20, right: 40, bottom: 60, left: 50 };

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3
  .select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Import data from an external CSV file
d3.csv("data.csv", function(error, smurfData) {
  if (error) throw error;

  console.log(smurfData);
  console.log([smurfData]);

  // Create a function to parse date and time
  var parseTime = d3.timeParse("%d-%b-%Y");

  // Format the data
  smurfData.forEach(function(data) {
    data.date = parseTime(data.date);
    data.dow_index = +data.dow_index;
    data.smurf_sightings = +data.smurf_sightings;
  });

  // Create scaling functions
  var xTimeScale = d3.scaleTime()
    .domain(d3.extent(smurfData, d => d.date))
    .range([0, width]);

  var yLinearScale1 = d3.scaleLinear()
    .domain([0, d3.max(smurfData, d => d.dow_index)])
    .range([height, 0]);

  var yLinearScale2 = d3.scaleLinear()
    .domain([0, d3.max(smurfData, d => d.smurf_sightings)])
    .range([height, 0]);

  // Create axis functions
  var bottomAxis = d3.axisBottom(xTimeScale)
    .tickFormat(d3.timeFormat("%d-%b-%Y"));
  var leftAxis = d3.axisLeft(yLinearScale1);
  var rightAxis = d3.axisRight(yLinearScale2);

  // Add x-axis
  chartGroup.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

  // Add y1-axis to the left side of the display
  chartGroup.append("g")
    // Define the color of the axis text
    .classed("green", true)
    .call(leftAxis);

  // Add y2-axis to the right side of the display
  chartGroup.append("g")
    // Define the color of the axis text
    .classed("blue", true)
    .attr("transform", `translate(${width}, 0)`)
    .call(rightAxis);

  // Line generators for each line
  var line1 = d3.line()
    .x(d => xTimeScale(d.date))
    .y(d => yLinearScale1(d.dow_index));

  var line2 = d3.line()
    .x(d => xTimeScale(d.date))
    .y(d => yLinearScale2(d.smurf_sightings));

  // Append a path for line1
  chartGroup.append("path")
    .data([smurfData])
    .attr("d", line1)
    .classed("line green", true);

  // Append a path for line2
  chartGroup.append("path")
    .data([smurfData])
    .attr("d", line2)
    .classed("line blue", true);

  // Append axes titles
  chartGroup.append("text")
  .attr("transform", `translate(${width / 2}, ${height + margin.top + 20})`)
    .classed("dow-text text", true)
    .text("Dow Index");

  chartGroup.append("text")
  .attr("transform", `translate(${width / 2}, ${height + margin.top + 37})`)
    .classed("smurf-text text", true)
    .text("Smurf Sightings");
});
##########################
##########################
###   ./05-app.js  
##########################


// data
var dataArray = [1, 2, 3];
var dataCategories = ["one", "two", "three"];

function makeResponsive() {

    // if the SVG area isn't empty when the browser loads,
    // remove it and replace it with a resized version of the chart
  var svgArea = d3.select("body").select("svg");

  if (!svgArea.empty()) {
    svgArea.remove();
  }

    // svg params
  var svgHeight = window.innerHeight;
  var svgWidth = window.innerWidth;

    // margins
  var margin = {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50
  };

    // chart area minus margins
  var chartHeight = svgHeight - margin.top - margin.bottom;
  var chartWidth = svgWidth - margin.left - margin.right;

    // create svg container
  var svg = d3.select("body").append("svg")
        .attr("height", svgHeight)
        .attr("width", svgWidth);

    // shift everything over by the margins
  var chartGroup = svg.append("g")
        .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // scale y to chart height
  var yScale = d3.scaleLinear()
        .domain([0, d3.max(dataArray)])
        .range([chartHeight, 0]);

    // scale x to chart width
  var xScale = d3.scaleBand()
        .domain(dataCategories)
        .range([0, chartWidth])
        .padding(0.1);

    // create axes
  var yAxis = d3.axisLeft(yScale);
  var xAxis = d3.axisBottom(xScale);

    // set x to the bottom of the chart
  chartGroup.append("g")
        .attr("transform", `translate(0, ${chartHeight})`)
        .call(xAxis);

    // set y to the y axis
  chartGroup.append("g")
        .call(yAxis);


  chartGroup.selectAll("rect")
        .data(dataArray)
        .enter()
        .append("rect")
        .attr("x", (d, i) => xScale(dataCategories[i]))
        .attr("y", d => yScale(d))
        .attr("width", xScale.bandwidth())
        .attr("height", d => chartHeight - yScale(d))
        .attr("fill", "green")
        // event listener for onclick event
        .on("click", function(d, i) {
          alert(`Hey! You clicked bar ${dataCategories[i]}!`);
        })
        // event listener for mouseover
        .on("mouseover", function() {
          d3.select(this)
                .attr("fill", "red");
        })
        // event listener for mouseout
        .on("mouseout", function() {
          d3.select(this)
                .attr("fill", "green");
        });
}

makeResponsive();

// Event listener for window resize.
// When the browser window is resized, makeResponsive() is called.
d3.select(window).on("resize", makeResponsive);
##########################
##########################
###   ./06-app.js  
##########################


// The code for the chart is wrapped inside a function
// that automatically resizes the chart
function makeResponsive() {

  // if the SVG area isn't empty when the browser loads, remove it
  // and replace it with a resized version of the chart
  var svgArea = d3.select("body").select("svg");
  if (!svgArea.empty()) {
    svgArea.remove();
  }

  // SVG wrapper dimensions are determined by the current width
  // and height of the browser window.
  var svgWidth = window.innerWidth;
  var svgHeight = window.innerHeight;

  var margin = {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50
  };

  var height = svgHeight - margin.top - margin.bottom;
  var width = svgWidth - margin.left - margin.right;

  // data
  var pizzasEatenByMonth = [15, 5, 25, 18, 12, 22, 0, 4, 15, 10, 21, 2];
  var months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // append svg and group
  var svg = d3.select(".chart")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth);

  var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // scales
  var xScale = d3.scaleLinear()
    .domain([0, pizzasEatenByMonth.length])
    .range([0, width]);

  var yScale = d3.scaleLinear()
    .domain([0, d3.max(pizzasEatenByMonth)])
    .range([height, 0]);

  // line generator
  var line = d3.line()
    .x((d, i) => xScale(i))
    .y(d => yScale(d));

  // create path
  chartGroup.append("path")
    .attr("d", line(pizzasEatenByMonth))
    .attr("fill", "none")
    .attr("stroke", "blue");

  // append circles to data points
  var circlesGroup = chartGroup.selectAll("circle")
    .data(pizzasEatenByMonth)
    .enter()
    .append("circle")
    .attr("cx", (d, i) => xScale(i))
    .attr("cy", d => yScale(d))
    .attr("r", "5")
    .attr("fill", "red");

  // Step 1: Append a div to the body to create tooltips, assign it a class
  // =======================================================
  var toolTip = d3.select("body").append("div")
    .attr("class", "tooltip");

  // Step 2: Add an onmouseover event to display a tooltip
  // ========================================================
  circlesGroup.on("mouseover", function(d, i) {
    toolTip.style("display", "block");
    toolTip.html(`Pizzas eaten: <strong>${pizzasEatenByMonth[i]}</strong>`)
      .style("left", d3.event.pageX + "px")
      .style("top", d3.event.pageY + "px");
  })
    // Step 3: Add an onmouseout event to make the tooltip invisible
    .on("mouseout", function() {
      toolTip.style("display", "none");
    });
}

// When the browser loads, makeResponsive() is called.
makeResponsive();

// When the browser window is resized, responsify() is called.
d3.select(window).on("resize", makeResponsive);
##########################
##########################
###   ./07-app.js  
##########################


// The code for the chart is wrapped inside a function that
// automatically resizes the chart
function makeResponsive() {

  // if the SVG area isn't empty when the browser loads,
  // remove it and replace it with a resized version of the chart
  var svgArea = d3.select("body").select("svg");

  // clear svg is not empty
  if (!svgArea.empty()) {
    svgArea.remove();
  }

  // SVG wrapper dimensions are determined by the current width and
  // height of the browser window.
  var svgWidth = window.innerWidth;
  var svgHeight = window.innerHeight;

  var margin = {
    top: 50,
    bottom: 50,
    right: 50,
    left: 50
  };

  var height = svgHeight - margin.top - margin.bottom;
  var width = svgWidth - margin.left - margin.right;

  // Append SVG element
  var svg = d3
    .select(".chart")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth);

  // Append group element
  var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // Read CSV
  d3.csv("norway_medals.csv", function(err, medalData) {

    // create date parser
    var dateParser = d3.timeParse("%d-%b");

    // parse data
    medalData.forEach(function(data) {
      data.date = dateParser(data.date);
      data.medals = +data.medals;
    });

    // create scales
    var xTimeScale = d3.scaleTime()
      .domain(d3.extent(medalData, d => d.date))
      .range([0, width]);

    var yLinearScale = d3.scaleLinear()
      .domain([0, d3.max(medalData, d => d.medals)])
      .range([height, 0]);

    // create axes
    var xAxis = d3.axisBottom(xTimeScale);
    var yAxis = d3.axisLeft(yLinearScale).ticks(6);

    // append axes
    chartGroup.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis);

    chartGroup.append("g")
      .call(yAxis);

    // line generator
    var line = d3.line()
      .x(d => xTimeScale(d.date))
      .y(d => yLinearScale(d.medals));

    // append line
    chartGroup.append("path")
      .data([medalData])
      .attr("d", line)
      .attr("fill", "none")
      .attr("stroke", "red");

    // append circles
    var circlesGroup = chartGroup.selectAll("circle")
      .data(medalData)
      .enter()
      .append("circle")
      .attr("cx", d => xTimeScale(d.date))
      .attr("cy", d => yLinearScale(d.medals))
      .attr("r", "10")
      .attr("fill", "gold")
      .attr("stroke-width", "1")
      .attr("stroke", "black");

    // date formatter to display dates nicely
    var dateFormatter = d3.timeFormat("%d-%b");

    // Step 1: Append tooltip div
    var toolTip = d3.select("body")
      .append("div")
      .classed("tooltip", true);

    // Step 2: Create "mouseover" event listener to display tooltip
    circlesGroup.on("mouseover", function(d) {
      toolTip.style("display", "block")
          .html(
            `<strong>${dateFormatter(d.date)}<strong><hr>${d.medals}
        medal(s) won`)
          .style("left", d3.event.pageX + "px")
          .style("top", d3.event.pageY + "px");
    })
      // Step 3: Create "mouseout" event listener to hide tooltip
      .on("mouseout", function() {
        toolTip.style("display", "none");
      });

  });
}

// When the browser loads, makeResponsive() is called.
makeResponsive();

// When the browser window is resized, makeResponsive() is called.
d3.select(window).on("resize", makeResponsive);
##########################
##########################
###   ./08-app.js  
##########################


// The code for the chart is wrapped inside a function that
// automatically resizes the chart
function makeResponsive() {

  // if the SVG area isn't empty when the browser loads,
  // remove it and replace it with a resized version of the chart
  var svgArea = d3.select("body").select("svg");

  // clear svg is not empty
  if (!svgArea.empty()) {
    svgArea.remove();
  }

  // SVG wrapper dimensions are determined by the current width and
  // height of the browser window.
  var svgWidth = window.innerWidth;
  var svgHeight = window.innerHeight;

  var margin = {
    top: 50,
    bottom: 50,
    right: 50,
    left: 50
  };

  var height = svgHeight - margin.top - margin.bottom;
  var width = svgWidth - margin.left - margin.right;

  // Append SVG element
  var svg = d3
    .select(".chart")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth);

  // Append group element
  var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

  // Read CSV
  d3.csv("norway_medals.csv").then(function(medalData) {

      // create date parser
      var dateParser = d3.timeParse("%d-%b");

      // parse data
      medalData.forEach(function(data) {
        data.date = dateParser(data.date);
        data.medals = +data.medals;
      });

      // create scales
      var xTimeScale = d3.scaleTime()
        .domain(d3.extent(medalData, d => d.date))
        .range([0, width]);

      var yLinearScale = d3.scaleLinear()
        .domain([0, d3.max(medalData, d => d.medals)])
        .range([height, 0]);

      // create axes
      var xAxis = d3.axisBottom(xTimeScale).tickFormat(d3.timeFormat("%d-%b"));
      var yAxis = d3.axisLeft(yLinearScale).ticks(6);

      // append axes
      chartGroup.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(xAxis);

      chartGroup.append("g")
        .call(yAxis);

      // line generator
      var line = d3.line()
        .x(d => xTimeScale(d.date))
        .y(d => yLinearScale(d.medals));

      // append line
      chartGroup.append("path")
        .data([medalData])
        .attr("d", line)
        .attr("fill", "none")
        .attr("stroke", "red");

      // append circles
      var circlesGroup = chartGroup.selectAll("circle")
        .data(medalData)
        .enter()
        .append("circle")
        .attr("cx", d => xTimeScale(d.date))
        .attr("cy", d => yLinearScale(d.medals))
        .attr("r", "10")
        .attr("fill", "gold")
        .attr("stroke-width", "1")
        .attr("stroke", "black");

      // Date formatter to display dates nicely
      var dateFormatter = d3.timeFormat("%d-%b");

      // Step 1: Initialize Tooltip
      var toolTip = d3.tip()
        .attr("class", "tooltip")
        .offset([80, -60])
        .html(function(d) {
          return (`<strong>${dateFormatter(d.date)}<strong><hr>${d.medals}
          medal(s) won`);
        });

      // Step 2: Create the tooltip in chartGroup.
      chartGroup.call(toolTip);

      // Step 3: Create "mouseover" event listener to display tooltip
      circlesGroup.on("mouseover", function(d) {
        toolTip.show(d, this);
      })
      // Step 4: Create "mouseout" event listener to hide tooltip
        .on("mouseout", function(d) {
          toolTip.hide(d);
        });
    }).catch(function(error) {
      console.log(error);
    });
}

// When the browser loads, makeResponsive() is called.
makeResponsive();

// When the browser window is resized, makeResponsive() is called.
d3.select(window).on("resize", makeResponsive);
##########################
##########################
###   ./09-app.js  
##########################


var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
var svg = d3.select(".chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Import Data
d3.csv("hairData.csv")
  .then(function(hairData) {

    // Step 1: Parse Data/Cast as numbers
    // ==============================
    hairData.forEach(function(data) {
      data.hair_length = +data.hair_length;
      data.num_hits = +data.num_hits;
    });

    // Step 2: Create scale functions
    // ==============================
    var xLinearScale = d3.scaleLinear()
      .domain([20, d3.max(hairData, d => d.hair_length)])
      .range([0, width]);

    var yLinearScale = d3.scaleLinear()
      .domain([0, d3.max(hairData, d => d.num_hits)])
      .range([height, 0]);

    // Step 3: Create axis functions
    // ==============================
    var bottomAxis = d3.axisBottom(xLinearScale);
    var leftAxis = d3.axisLeft(yLinearScale);

    // Step 4: Append Axes to the chart
    // ==============================
    chartGroup.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(bottomAxis);

    chartGroup.append("g")
      .call(leftAxis);

    // Step 5: Create Circles
    // ==============================
    var circlesGroup = chartGroup.selectAll("circle")
    .data(hairData)
    .enter()
    .append("circle")
    .attr("cx", d => xLinearScale(d.hair_length))
    .attr("cy", d => yLinearScale(d.num_hits))
    .attr("r", "15")
    .attr("fill", "pink")
    .attr("opacity", ".5");

    // Step 6: Initialize tool tip
    // ==============================
    var toolTip = d3.tip()
      .attr("class", "tooltip")
      .offset([80, -60])
      .html(function(d) {
        return (`${d.rockband}<br>Hair length: ${d.hair_length}<br>Hits: ${d.num_hits}`);
      });

    // Step 7: Create tooltip in the chart
    // ==============================
    chartGroup.call(toolTip);

    // Step 8: Create event listeners to display and hide the tooltip
    // ==============================
    circlesGroup.on("click", function(data) {
      toolTip.show(data, this);
    })
      // onmouseout event
      .on("mouseout", function(data, index) {
        toolTip.hide(data);
      });

    // Create axes labels
    chartGroup.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left + 40)
      .attr("x", 0 - (height / 2))
      .attr("dy", "1em")
      .attr("class", "axisText")
      .text("Number of Billboard 100 Hits");

    chartGroup.append("text")
      .attr("transform", `translate(${width / 2}, ${height + margin.top + 30})`)
      .attr("class", "axisText")
      .text("Hair Metal Band Hair Length (inches)");
  });
##########################
##########################
###   ./10-app.js  
##########################


// data
var dataArray = [1, 2, 3];
var dataCategories = ["one", "two", "three"];

// svg container
var height = 600;
var width = 1000;

// margins
var margin = {
  top: 50,
  right: 50,
  bottom: 50,
  left: 50
};

// chart area minus margins
var chartHeight = height - margin.top - margin.bottom;
var chartWidth = width - margin.left - margin.right;

// create svg container
var svg = d3.select("body").append("svg")
    .attr("height", height)
    .attr("width", width);

// shift everything over by the margins
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

// scale y to chart height
var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataArray)])
    .range([chartHeight, 0]);

// scale x to chart width
var xScale = d3.scaleBand()
    .domain(dataCategories)
    .range([0, chartWidth])
    .padding(0.1);

// create axes
var yAxis = d3.axisLeft(yScale);
var xAxis = d3.axisBottom(xScale);

// set x to the bottom of the chart
chartGroup.append("g")
    .attr("transform", `translate(0, ${chartHeight})`)
    .call(xAxis);

// set y to the y axis
chartGroup.append("g")
    .call(yAxis);

// Create the rectangles using data binding
var barsGroup = chartGroup.selectAll("rect")
    .data(dataArray)
    .enter()
    .append("rect")
    .attr("x", (d, i) => xScale(dataCategories[i]))
    .attr("y", d => yScale(d))
    .attr("width", xScale.bandwidth())
    .attr("height", d => chartHeight - yScale(d))
    .attr("fill", "green");

// Create the event listeners with transitions
barsGroup.on("mouseover", function() {
  d3.select(this)
            .transition()
            .duration(500)
            .attr("fill", "red");
})
    .on("mouseout", function() {
      d3.select(this)
            .transition()
            .duration(500)
            .attr("fill", "green");
    });
##########################
##########################
###   ./11-app.js  
##########################


// SVG wrapper dimensions are determined by the current width
// and height of the browser window.
var svgWidth = 1200;
var svgHeight = 660;

var margin = {
  top: 50,
  right: 50,
  bottom: 50,
  left: 50
};

var height = svgHeight - margin.top - margin.bottom;
var width = svgWidth - margin.left - margin.right;

// data
var pizzasEatenByMonth = [15, 5, 25, 18, 12, 22, 0, 4, 15, 10, 21, 2];
var months = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// append svg and group
var svg = d3.select(".chart")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// scales
var xScale = d3.scaleLinear()
  .domain([0, pizzasEatenByMonth.length])
  .range([0, width]);

var yScale = d3.scaleLinear()
  .domain([0, d3.max(pizzasEatenByMonth)])
  .range([height, 0]);

// line generator
var line = d3.line()
  .x((d, i) => xScale(i))
  .y(d => yScale(d));

// create path
chartGroup.append("path")
  .attr("d", line(pizzasEatenByMonth))
  .attr("fill", "none")
  .attr("stroke", "green");

// append circles to data points
var circlesGroup = chartGroup.selectAll("circle")
  .data(pizzasEatenByMonth)
  .enter()
  .append("circle")
  .attr("r", "10")
  .attr("fill", "red");

// Event listeners with transitions
circlesGroup.on("mouseover", function() {
  d3.select(this)
    .transition()
    .duration(1000)
    .attr("r", 20)
    .attr("fill", "lightblue");
})
  .on("mouseout", function() {
    d3.select(this)
      .transition()
      .duration(1000)
      .attr("r", 10)
      .attr("fill", "red");
  });

// transition on page load
chartGroup.selectAll("circle")
  .transition()
  .duration(1000)
  .attr("cx", (d, i) => xScale(i))
  .attr("cy", d => yScale(d));
##########################
##########################
###   ./12-app.js  
##########################


var svgWidth = 960;
var svgHeight = 500;

var margin = {
  top: 20,
  right: 40,
  bottom: 80,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart,
// and shift the latter by left and top margins.
var svg = d3
  .select(".chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Append an SVG group
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Initial Params
var chosenXAxis = "hair_length";

// function used for updating x-scale var upon click on axis label
function xScale(hairData, chosenXAxis) {
  // create scales
  var xLinearScale = d3.scaleLinear()
    .domain([d3.min(hairData, d => d[chosenXAxis]) * 0.8,
      d3.max(hairData, d => d[chosenXAxis]) * 1.2
    ])
    .range([0, width]);

  return xLinearScale;

}

// function used for updating xAxis var upon click on axis label
function renderAxes(newXScale, xAxis) {
  var bottomAxis = d3.axisBottom(newXScale);

  xAxis.transition()
    .duration(1000)
    .call(bottomAxis);

  return xAxis;
}

// function used for updating circles group with a transition to
// new circles
function renderCircles(circlesGroup, newXScale, chosenXaxis) {

  circlesGroup.transition()
    .duration(1000)
    .attr("cx", d => newXScale(d[chosenXAxis]));

  return circlesGroup;
}

// function used for updating circles group with new tooltip
function updateToolTip(chosenXAxis, circlesGroup) {

  if (chosenXAxis === "hair_length") {
    var label = "Hair Length:";
  }
  else {
    var label = "# of Albums:";
  }

  var toolTip = d3.tip()
    .attr("class", "tooltip")
    .offset([80, -60])
    .html(function(d) {
      return (`${d.rockband}<br>${label} ${d[chosenXAxis]}`);
    });

  circlesGroup.call(toolTip);

  circlesGroup.on("mouseover", function(data) {
    toolTip.show(data);
  })
    // onmouseout event
    .on("mouseout", function(data, index) {
      toolTip.hide(data);
    });

  return circlesGroup;
}

// Retrieve data from the CSV file and execute everything below
d3.csv("hairData.csv").then(function(hairData, err) {
  if (err) throw err;

  // parse data
  hairData.forEach(function(data) {
    data.hair_length = +data.hair_length;
    data.num_hits = +data.num_hits;
    data.num_albums = +data.num_albums;
  });

  // xLinearScale function above csv import
  var xLinearScale = xScale(hairData, chosenXAxis);

  // Create y scale function
  var yLinearScale = d3.scaleLinear()
    .domain([0, d3.max(hairData, d => d.num_hits)])
    .range([height, 0]);

  // Create initial axis functions
  var bottomAxis = d3.axisBottom(xLinearScale);
  var leftAxis = d3.axisLeft(yLinearScale);

  // append x axis
  var xAxis = chartGroup.append("g")
    .classed("x-axis", true)
    .attr("transform", `translate(0, ${height})`)
    .call(bottomAxis);

  // append y axis
  chartGroup.append("g")
    .call(leftAxis);

  // append initial circles
  var circlesGroup = chartGroup.selectAll("circle")
    .data(hairData)
    .enter()
    .append("circle")
    .attr("cx", d => xLinearScale(d[chosenXAxis]))
    .attr("cy", d => yLinearScale(d.num_hits))
    .attr("r", 20)
    .attr("fill", "pink")
    .attr("opacity", ".5");

  // Create group for  2 x- axis labels
  var labelsGroup = chartGroup.append("g")
    .attr("transform", `translate(${width / 2}, ${height + 20})`);

  var hairLengthLabel = labelsGroup.append("text")
    .attr("x", 0)
    .attr("y", 20)
    .attr("value", "hair_length") // value to grab for event listener
    .classed("active", true)
    .text("Hair Metal Ban Hair Length (inches)");

  var albumsLabel = labelsGroup.append("text")
    .attr("x", 0)
    .attr("y", 40)
    .attr("value", "num_albums") // value to grab for event listener
    .classed("inactive", true)
    .text("# of Albums Released");

  // append y axis
  chartGroup.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x", 0 - (height / 2))
    .attr("dy", "1em")
    .classed("axis-text", true)
    .text("Number of Billboard 500 Hits");

  // updateToolTip function above csv import
  var circlesGroup = updateToolTip(chosenXAxis, circlesGroup);

  // x axis labels event listener
  labelsGroup.selectAll("text")
    .on("click", function() {
      // get value of selection
      var value = d3.select(this).attr("value");
      if (value !== chosenXAxis) {

        // replaces chosenXaxis with value
        chosenXAxis = value;

        // console.log(chosenXAxis)

        // functions here found above csv import
        // updates x scale for new data
        xLinearScale = xScale(hairData, chosenXAxis);

        // updates x axis with transition
        xAxis = renderAxes(xLinearScale, xAxis);

        // updates circles with new x values
        circlesGroup = renderCircles(circlesGroup, xLinearScale, chosenXAxis);

        // updates tooltips with new info
        circlesGroup = updateToolTip(chosenXAxis, circlesGroup);

        // changes classes to change bold text
        if (chosenXAxis === "num_albums") {
          albumsLabel
            .classed("active", true)
            .classed("inactive", false);
          hairLengthLabel
            .classed("active", false)
            .classed("inactive", true);
        }
        else {
          albumsLabel
            .classed("active", false)
            .classed("inactive", true);
          hairLengthLabel
            .classed("active", true)
            .classed("inactive", false);
        }
      }
    });
}).catch(function(error) {
  console.log(error);
});




#####----------------###
#####----------------###
#####  END OF WEEK NUMBER 16
#####  END OF class day 03
########################



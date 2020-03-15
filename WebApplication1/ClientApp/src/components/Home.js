import React, { Component } from 'react';
import * as d3 from 'd3';


export class Home extends Component {
  static displayName = Home.name;

    
    componentDidMount() {

        this.populateWeatherData2();
     
    }




  render () {
    return (
      <div>
            <h1>Hello, world! 6666</h1>
            <div ref="temperatures"></div>
        <p>Welcome to your new single-page application, built with:</p>
        <ul>
          <li><a href='https://get.asp.net/'>ASP.NET Core</a> and <a href='https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx'>C#</a> for cross-platform server-side code</li>
          <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
          <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
        </ul>
        <p>To help you get started, we have also set up:</p>
        <ul>
          <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
          <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
          <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
        </ul>
        <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
      </div>
    );
}

    async populateWeatherData2() {

        // data that you want to plot, I've used separate arrays for x and y values
        var xdata = [5, 10, 15, 20],
            ydata = [3, 17, 4, 70];

        // size and margins for the chart
        var margin = { top: 20, right: 15, bottom: 60, left: 60 }
            , width = 960 - margin.left - margin.right
            , height = 500 - margin.top - margin.bottom;

        // x and y scales, I've used linear here but there are other options
        // the scales translate data values to pixel values for you
        var x = d3.scaleLinear()
            .domain([0, d3.max(xdata)])  // the range of the values to plot
            .range([0, width]);        // the pixel range of the x-axis

        var y = d3.scaleLinear()
            .domain([0, d3.max(ydata)])
            .range([height, 0]);

        // the chart object, includes all margins
        var chart = d3.select(this.refs.temperatures)
            .append('svg:svg')
            .attr('width', width + margin.right + margin.left)
            .attr('height', height + margin.top + margin.bottom)
            .attr('class', 'chart')

        // the main object where the chart and axis will be drawn
        var main = chart.append('g')
            .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
            .attr('width', width)
            .attr('height', height)
            .attr('class', 'main')

        var g = main.append("svg:g");

        g.selectAll("scatter-dots")
            .data(ydata)  // using the values in the ydata array
            .enter().append("svg:circle")  // create a new circle for each value
            .attr("cy", function (d) { return y(d); }) // translate y value to a pixel
            .attr("cx", function (d, i) { return x(xdata[i]); }) // translate x value
            .attr("r", 10) // radius of circle
            .style("opacity", 0.6); // opacity of circle

    }


async populateWeatherData() {

    const temperatureData = [8, 5, 13, 9, 12];

    // data that you want to plot, I've used separate arrays for x and y values
    var xdata = [5, 10, 15, 20],
        ydata = [3, 17, 4, 70];



    // size and margins for the chart
    var margin = { top: 20, right: 15, bottom: 60, left: 60 }
        , width = 960 - margin.left - margin.right
        , height = 500 - margin.top - margin.bottom;

    // x and y scales, I've used linear here but there are other options
    // the scales translate data values to pixel values for you
    var x = d3.scaleLinear()
        .domain([0, d3.max(xdata)])  // the range of the values to plot
        .range([0, width]);        // the pixel range of the x-axis

    var y = d3.scaleLinear()
        .domain([0, d3.max(ydata)])
        .range([height, 0]);

    // the chart object, includes all margins
    var chart = d3.select(this.refs.temperatures)
        .append('svg:svg')
        .attr('width', width + margin.right + margin.left)
        .attr('height', height + margin.top + margin.bottom)
        .attr('class', 'chart')

    // the main object where the chart and axis will be drawn
    var main = chart.append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
        .attr('width', width)
        .attr('height', height)
        .attr('class', 'main')







    //// draw the x axis
    //var xAxis = d3.svg.axis()
    //    .scale(x)
    //    .orient('bottom');

    //    //    var x = d3.scaleLinear()
    //    //    .domain([0, 4000])
    //    //.range([0, width]);


    //main.append('g')
    //    .attr('transform', 'translate(0,' + height + ')')
    //    .attr('class', 'main axis date')
    //    .call(d3.axisBottom(xAxis));



    //// draw the y axis
    //var yAxis = d3.svg.axis()
    //    .scale(y)
    //    .orient('left');

    //main.append('g')
    //    .attr('transform', 'translate(0,0)')
    //    .attr('class', 'main axis date')
    //    .call(d3.axisLeft( yAxis));


        //    var x = d3.scaleLinear()  
        //.range([0, width]);


        //       svg.append("g")
        //    .attr("transform", "translate(0," + height + ")")
        //    .call(d3.axisBottom(x));





    // draw the graph object
    var g = main.append("svg:g");

    g.selectAll("scatter-dots")
        .data(ydata)  // using the values in the ydata array
        .enter().append("svg:circle")  // create a new circle for each value
        .attr("cy", function (d) { return y(d); }) // translate y value to a pixel
        .attr("cx", function (d, i) { return x(xdata[i]); }) // translate x value
        .attr("r", 10) // radius of circle
        .style("opacity", 0.6); // opacity of circle









    ////let d = d3.select(this.refs.temperatures)
    ////.selectAll("h2")
    ////.data(temperatureData)
    ////.enter()
    ////    .append("h2")
    ////    .text("New Temperature");

    //// set the dimensions and margins of the graph
    //var margin = { top: 10, right: 30, bottom: 30, left: 60 },
    //    width = 460 - margin.left - margin.right,
    //    height = 400 - margin.top - margin.bottom;

    //// append the svg object to the body of the page
    //var svg = d3.select(this.refs.temperatures)
    //    .append("svg")
    //    .attr("width", width + margin.left + margin.right)
    //    .attr("height", height + margin.top + margin.bottom)
    //    .append("g")
    //    .attr("transform",
    //        "translate(" + margin.left + "," + margin.top + ")");

    ////1710, 208500
    //var data = { GrLivArea: 1710, SalePrice: 208500};

    //var x = d3.scaleLinear()
    //   // .domain([0, 4000])
    //    .range([0, width]);
    //svg.append("g")
    //    .attr("transform", "translate(0," + height + ")")
    //    .call(d3.axisBottom(x));

    //// Add Y axis
    //var y = d3.scaleLinear()
    ////    .domain([0, 500000])
    //    .range([height, 0]);
    //     svg.append("g")
    //    .call(d3.axisLeft(y));




    //// draw the graph object
    //var g = main.append("svg:g");


    //// Add dots
    ////svg.append('g')
    ////    .selectAll("dot")
    ////    .data(ydata)
    ////    .enter()
    ////    .append("circle")
    ////    .attr("cy", function (d) { return y(d); }) // translate y value to a pixel
    ////    .attr("cx", function (d, i) { return x(xdata[i]); }) // translate x value
    ////    .attr("r", 1.5)
    ////    .style("fill", "#69b3a2")
    //g.selectAll("scatter-dots")
    //    .data(ydata)  // using the values in the ydata array
    //    .enter().append("svg:circle")  // create a new circle for each value
    //    .attr("cy", function (d) { return y(d); }) // translate y value to a pixel
    //    .attr("cx", function (d, i) { return x(xdata[i]); }) // translate x value
    //    .attr("r", 10) // radius of circle
    //    .style("opacity", 0.6); // opacity of circle

    //Read the data
    //d3.csv("https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/2_TwoNum.csv", function (data) {

    //    // Add X axis
    //    var x = d3.scaleLinear()
    //        .domain([0, 4000])
    //        .range([0, width]);
    //    svg.append("g")
    //        .attr("transform", "translate(0," + height + ")")
    //        .call(d3.axisBottom(x));

    //    // Add Y axis
    //    var y = d3.scaleLinear()
    //        .domain([0, 500000])
    //        .range([height, 0]);
    //    svg.append("g")
    //        .call(d3.axisLeft(y));

    //    // Add dots
    //    svg.append('g')
    //        .selectAll("dot")
    //        .data(data)
    //        .enter()
    //        .append("circle")
    //        .attr("cx", function (d) { return x(d.GrLivArea); })
    //        .attr("cy", function (d) { return y(d.SalePrice); })
    //        .attr("r", 1.5)
    //        .style("fill", "#69b3a2")
    //});
    //    const response = await fetch('tester');
    //    //    const response = await fetch('weatherforecast');
    //    const data = await response.json();
    //    this.setState({ forecasts: data, loading: false });
    //}


}
}
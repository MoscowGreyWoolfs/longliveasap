import React, { Component } from 'react';
import * as d3 from 'd3';


export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
      this.state = { forecasts: [], loading: true };
      this.populateWeatherData3 = this.populateWeatherData3.bind(this);;
  }

  componentDidMount() {
      this.populateWeatherData();
  
  }

   

    static renderForecastsTable(forecasts) {

       // let t = FetchData.this.createDiv();

        var newDiv = document.createElement("div");
        newDiv.innerHTML = "<h1>Привет!</h1>";

        return (
      
          <table className='table table-striped' aria-labelledby="tabelLabel">
            <thead>
              <tr>
                        <th>id</th>
                        <th>v1</th>
                        <th>v2</th>
                        <th>4</th>
         
              </tr>
            </thead>
            <tbody>
              {forecasts.map(x =>
                <tr key={x.date}>
                      <td>{x.id}</td>
                      <td>{x.v1}</td>
                      <td>{x.v2}</td>
                      <td>{x.name}</td>
              
                </tr>
              )}
            </tbody>
            </table>
          
        );
    }

    static createDiv(forecasts) {

        var t = React.createElement('div', null, null);
     
        return (
            t
        );
    }

    static draw(ob) {


        return (
          ob
        );
    }


    populateWeatherData3() {


         var xdata1 = this.state.forecasts[0].v1;
         let xdata = this.state.forecasts.map(({ v1 }) => v1)
         let ydata = this.state.forecasts.map(({ v2 }) => v2)
         console.log(xdata);


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

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchData.renderForecastsTable(this.state.forecasts);



        let contents2 = this.state.loading
                ? <p><em>Loading...</em></p>
                : FetchData.createDiv(this.state.forecasts);
    
    //  this.populateWeatherData3(forecasts);


    return (
      <div>
            <h1 id="tabelLabel" >Weather forecast</h1>
            <div ref="temperatures"></div>
            <p>This component demonstrates fetching data from the server.</p>

            <button className="btn btn-primary" onClick={this.populateWeatherData3}>Increment</button>

            {contents}
            {contents2}
      
      </div>
    );
    }

    async populateWeatherData() {
      //const response = await fetch('tester');
      const response = await fetch('weatherforecast');
    const data = await response.json();
    this.setState({ forecasts: data, loading: false });
    }

    async populateWeatherData2() {


        var xdata = this.state.forecasts[0].v1;
        var ydata = this.state.forecasts[0].v1;

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


}

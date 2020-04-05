import React, { Component } from 'react';
import * as d3 from 'd3';

export class VKstat extends Component {
    static displayName = VKstat.name;

    constructor(props) {
        super(props);
        this.state = { items: [], loading: true };
        this.bars = this.bars.bind(this);
    }


    componentDidMount() {
        this.VKstat();    
    }


    bars() {
        var margin = { top: 20, right: 20, bottom: 70, left: 40 },
            width = 600 - margin.left - margin.right,
            height = 300 - margin.top - margin.bottom;

        let ydata = this.state.items.map(({ count }) => count)
        let xdata = this.state.items.map(({ title }) => title)

        // Parse the date / time
        //var parseDate = d3.time.format("%Y-%m").parse;

        //var x = d3.scale.ordinal().rangeRoundBands([0, width], .05);
        //var y = d3.scale.linear().range([height, 0]);

        //var xAxis = d3.svg.axis()
        //    .scale(x)
        //    .orient("bottom")
        //    .tickFormat(d3.time.format("%Y-%m"));

        //var yAxis = d3.svg.axis()
        //    .scale(y)
        //    .orient("left")
        //    .ticks(10);


        var xAxis = d3.scaleLinear()
            .domain([0, d3.max(xdata)])  // the range of the values to plot
            .range([0, width]);        // the pixel range of the x-axis

        var yAxis = d3.scaleLinear()
            .domain([0, d3.max(ydata)])
            .range([height, 0]);


        //var yAxisD = d3.svg.axis()
        //    .scale(ydata)
        //    .orient("left")
        //    .ticks(10);


        var svg = d3.select(this.refs.temperatures).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");


        //x.domain(this.state.items.map(function (d) { return d.title; }));
        //y.domain(this.state.items.map(function (d) { return d.count; }));
   //   y.domain([0, d3.max(data, function (d) { return d.value; })]);


        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis)
            .selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", "-.55em")
            .attr("transform", "rotate(-90)");

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 6)
            .attr("dy", ".71em")
            .style("text-anchor", "end");
            //.text("Value ($)");

        svg.selectAll("bar")
            .data(ydata)
            .enter().append("rect")
            .style("fill", "steelblue")
            .attr("x", function (d, i) { return (15 * i + 5); })
            .attr("width", 5)
            .attr("y", function (d) { return yAxis(d); })
            .attr("height", function (d) { return height -  yAxis(d); });

        // .attr("x", function (d) { return xdata(xAxis); })
            //.attr("width", xdata.rangeBand())
            //.attr("y", function (d) { return ydata(d.value); })
            //.attr("height", function (d) { return height - ydata(d.value); });
     

     
    }



    static renderVKFriends(items) {

        return (
            <table className='table table-striped' aria-labelledby="tabelLabel" >
                <thead>
                    <tr>
                        <th>title</th>
                        <th>count</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(x =>
                        <tr key={x.count}>
                            <td>{x.title}</td>
                            <td>{x.count}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
           //<td>{(f => { var t = (x.city != null) ? x.city.title : 0; })}</td>
    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : VKstat.renderVKFriends(this.state.items);

        return (
            <div>
                <h1 id="tabelLabel" >Data</h1>
                <div ref="temperatures"></div>        
                <button className="btn btn-primary" onClick={this.bars}>Increment</button>
                {contents}

            </div>
        );
    }

    async VKstat() {
        const responseb = await fetch('vkagr');
        const data = await responseb.json();
        this.setState({ items: data, loading: false });
    }
}

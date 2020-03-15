import React, { Component } from 'react';


//class s extends Component {
//    const

//}

export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }


    //////componentDidMount() {
    //////    this.populateWeatherData();
    //////}

  render() {
    return (
      <div>
        <h1>Counter</h1>

        <p>This is a simple example of a React component.</p>

            <p aria-live="polite">Current count: <strong>{this.state.currentCount}</strong></p> 

          

        <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
      </div>
    );
    }



    //async populateWeatherData() {
    //    const response = await fetch('weatherforecast');
    //    const data = await response.json();
    //    this.setState({ forecasts: data, loading: false });
    //}


}

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Nicole Nemiroff Psychotherapy</h1>
          <h3 className="App-intro">This site is currently under construction. Please come back soon.</h3>
          <h3 className="App-intro App-lower">In the meantime, feel free to contact me at:</h3>
        </div>
        <div>
        <p className="App-contact">
          <a href="mailto:nicole.nemiroff@gmail.com">
              nicole.nemiroff@gmail.com
            </a> 

            &nbsp;&nbsp;&nbsp; 

            <a href="tel:14155859934">+1(415) 484-9934</a>
        </p>
        <p className="App-contact App-lower">
            <a href="https://www.google.com/maps/place/219,+3150+18th+St,+San+Francisco,+CA+94110/@37.7622588,-122.4185229,
                  17z/data=!3m1!4b1!4m5!3m4!1s0x808f7e3af2e063d5:0xe2c3e00a9954dda2!8m2!3d37.7622588!4d-122.4141455">
              3150 18th St. San Francisco, CA 
            </a>
        </p>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
// import circleServices from '../../services/circleServices'
import Circles from '../../components/Circles/Circles'
import CircleSelector from '../../components/CircleSelector/CircleSelector'

class App extends Component {
  /*--- State ---*/
  constructor() {
    super();
    this.state = {
      circleIndex: [],
    };
  }


  /*--- Handle Methods ---*/
  handleClick = (event) => {
    console.log(event.target.id);
    this.setState({
      circleIndex: parseInt(event.target.id)
    })
  }

  /*--- Lifecycle Methods ---*/

  render() {
    return (
      <div className="App">
        <header className="App-header">Unit 4 Final Assessment</header>
        <div className='container'>
          <CircleSelector
            handleClick={this.handleClick}
            circleIndex={this.state.circleIndex}
          />
          <Circles
            circleIndex={this.state.circleIndex}
          />
        </div>
      </div>
    );
  }
}
export default App;

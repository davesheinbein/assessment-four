import React, { Component } from 'react';
import './App.css';
import circleServices from '../../services/circleServices'
import Circles from '../../components/Circles'

class App extends Component {
  /*--- State ---*/
  constructor() {
    super();
    this.state = {
      cicles: [],
    };
  }

  getInitialState() {
    return {

    };
  }

  /*--- Handle Methods ---*/
  handleClickUpdate = () => {

  }

  /*--- Lifecycle Methods ---*/
  // async componentDidMount = () => {
    // const circles = await circleServices.index();
    // this.setState({ cicles });
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">Assessment 4</header>
        <div>
          <Circles />
        </div>
      </div>
    );
  }
}
export default App;

import React, { Component } from 'react';
import './App.css';
import * as data from './plants.json';

class App extends Component {
  state = {
    plantList: [],
  }
  
  componentDidMount() {
    this.setState({
      plantList: data.default
    });
  };

  render() {
    const { plantList } = this.state;

    const renderPlants =  plantList.map((plant, i) => {
          return (
            <ul key={i}>
              <li>{plant.name}</li>
              <li>{plant.water_after}</li>
            </ul>
          )
        })

    return (
      <div>
        {renderPlants}
      </div>
    )
  }

}

export default App;

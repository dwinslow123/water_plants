import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
import * as data from './plants.json';

class App extends Component {
  state = {
    plantList: [],
    date: new Date('December 16, 2019 00:00:00')
  };

  handleNewDate = (date) => {
    this.setState({
      date: date
    });
  };

  handleYesterdayDate = (date) => {
    date = this.state.date;
    date.setDate(date.getDate() -1);
    this.setState({
      date: date
    });
  };

  handleTomorrowDate = (date) => {
    date = this.state.date;
    date.setDate(date.getDate() + 1);
    this.setState({
      date: date
    });
  };
  
  handleNameClick = (e) => {
    this.setState({
      plantList: e.target.value,
    });
  };

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
        <DatePicker
          selected={ this.state.date }
          onChange={ this.handleNewDate }
        />
        {renderPlants}
        <button onClick={ this.handleYesterdayDate }>Yesterday</button>
      <button onClick={ this.handleTomorrowDate }>Tomorrow</button>
      </div>
    )
  }

}

export default App;

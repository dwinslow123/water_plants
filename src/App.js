import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ListGroup from 'react-bootstrap/ListGroup';
import * as data from './plants.json';

import './custom.scss';
import './App.scss';

class App extends Component {
  state = {
    plantList: [],
    date: new Date()
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
  
  componentDidMount() {
    this.setState({
      plantList: data.default
    });
  };

  render() {
    const { plantList, date } = this.state;
    const renderPlants = plantList.map((plant, i) => {
      const startDate = new Date('December 16, 2019 00:00:00');
      const today = (date.getDate() % startDate.getDate());

      if (date.getDay() === 0 || date.getDay() === 6) {
        return null;
      } else if (((date.getDay() - 1 === 0) || (date.getDay() +1 === 6)) || (today % parseInt(plant.water_after) === 0)) {
        return (
          <ListGroup>
            <ListGroup.Item>{plant.name}</ListGroup.Item>
          </ListGroup>
        )
      }
      return null;
    })

    return (
      <div class="main-app">
        <div class="date-nav">
        <button onClick={ this.handleYesterdayDate }>Yesterday</button>
        <DatePicker
          selected={ this.state.date }
          onChange={ this.handleNewDate }
        />
      <button onClick={ this.handleTomorrowDate }>Tomorrow</button>
      </div>
          {renderPlants}
      </div>
    )
  }
}

export default App;

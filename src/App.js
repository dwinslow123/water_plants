import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DayOfTheWeek } from './components/DayOfTheWeek';
import { Header } from './components/Header';
import * as data from './plants.json';

import './scss/custom.scss';
import './scss/App.scss';

import {ListGroup, Button} from 'react-bootstrap/';

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
          <Header />
          <div class="date-nav">
            <DatePicker
              selected={ this.state.date }
              onChange={ this.handleNewDate }
            />
            <div class="instructions">
              <p>Click on the date above to select a date in the future</p>
              <p>Or use the buttons below to move between the days</p>
            </div>
            <div class="nav-buttons">
              <Button variant="secondary" onClick={ this.handleYesterdayDate }>Yesterday</Button>
              <Button variant="secondary" onClick={ this.handleTomorrowDate }>Tomorrow</Button>
            </div>
          </div>
            <DayOfTheWeek day={ date.getDay() }/>
            {renderPlants}
        </div>
    )
  }
}

export default App;

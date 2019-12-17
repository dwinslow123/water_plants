import React from 'react';

export const DayOfTheWeek = (props) => {
  switch(props.day) {
    case 0:
      return (
        <div>
          <h2>Sunday</h2>
        </div>
      )
    case 1:
      return (
        <div>
          <h2>Monday Plants to Water</h2>
        </div>
      )
    case 2:
      return (
        <div>
          <h2>Tuesday Plants to Water</h2>
        </div>
      )
    case 3:
      return (
        <div>
          <h2>Wednesday Plants to Water</h2>
        </div>
      )
    case 4:
      return (
        <div>
          <h2>Thursday Plants to Water</h2>
        </div>
      )
    case 5:
      return (
        <div>
          <h2>Friday Plants to Water</h2>
        </div>
      )
    case 6:
      return (
        <div>
          <h2>Saturday</h2>
        </div>
      )
    default:
      return props;
  }
}
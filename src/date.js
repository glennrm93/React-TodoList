import React from "react";

const todaysDate = new Date();
const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const day = dayNames[todaysDate.getDay()];
const month = monthNames[todaysDate.getMonth()];
const year = todaysDate.getFullYear();
const date = todaysDate.getDate();

export const DateHeader = () => {
  return (
    <div className="date-header">
      <div className="date-summary">
        <div>
          <span className="date-int">{date}</span>
        </div>
        <div className="month-year-small">
          <div>
            <small>{month}</small>
          </div>
          <div>
            <small>{year}</small>
          </div>
        </div>
      </div>
      <div>
        <span>{day}</span>
      </div>
    </div>
  );
};

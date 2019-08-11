import React, { useState, useEffect } from "react";
import style from "./style";
import moment from "moment";

export default function Results(props) {
  // const [departures, setDepart]

  let departures = [];
  let arrivals = [];

  if (props.trains) {
    props.trains.forEach(train => {
      departures.push(train.depart);
      arrivals.push(train.arrive);
    });
  }

  if (props.trains.length === 0) {
    return <span>Train times for this route not available.</span>;
  } else {
    return (
      <div className={style.resultsContainer}>
        <div className={style.trainTimes}>
          <span>Depart from </span>
          <div>{props.origin}</div>
          <ul>
            {departures.map((time, i) => (
              <li key={i}>{moment(time).calendar()}</li>
            ))}
          </ul>
        </div>
        <div className={style.trainTimes}>
          <span>Arrive at </span>
          <div>{props.destination}</div>

          <ul>
            {arrivals.map((time, i) => (
              <li key={i}>{moment(time).calendar()}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

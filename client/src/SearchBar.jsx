import React, { useState, useEffect } from "react";
import DestAutoComplete from "./DestAutoComplete";
import stations from "../../server/helpers/stations";
import style from "./style";

export default function SearchBar(props) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(updateOrigin);
    }
  }

  function updateOrigin({ coords }) {
    //set origin value

    // let lat = 40.215359;
    // let long = -74.014786;
    let lat = coords.latitude;
    let long = coords.longitude;
    let origin = getOriginStation(lat, long);
    setOrigin(origin);
  }

  function getOriginStation(lat, long) {
    let nearest = {};

    for (let i = 0; i < stations.length; i++) {
      let station = stations[i];
      let difference = 0;
      let stationLat = parseFloat(station["stop_lat"]);
      let stationLong = parseFloat(station["stop_lon"]);

      difference += Math.abs(lat - stationLat);
      difference += Math.abs(long - stationLong);

      nearest[difference] = station;
    }

    let smallestDistance = Object.keys(nearest).sort()[0];
    let origin = nearest[smallestDistance];
    let originName = origin.stop_name;
    return originName;
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.getTrains(origin, destination);
  }

  useEffect(getLocation);

  return (
    <form className={style.searchBar}>
      <label>Origin</label>
      <input
        type="text"
        value={origin}
        onChange={e => {
          setOrigin(e.target.value);
        }}
        className={style.origin}
      />
      <label>Destination</label>
      <div className={style.destination}>
        <DestAutoComplete setDestination={setDestination} />
      </div>
      <input type="submit" value="submit" onClick={handleSubmit} />
    </form>
  );
}

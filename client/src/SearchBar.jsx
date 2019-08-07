import React, { useState } from "react";

export default function SearchBar(props) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");

  return (
    <form>
      <label>
        Origin
        <input
          type="text"
          value={origin}
          onChange={e => {
            setOrigin(e.target.value);
          }}
        />
      </label>
      <label>
        Destination
        <input
          type="text"
          value={destination}
          onChange={e => {
            setDestination(e.target.value);
          }}
        />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
}

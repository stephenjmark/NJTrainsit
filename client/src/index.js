import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SearchBar />
      </React.Fragment>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);

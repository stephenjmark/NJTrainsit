import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./SearchBar";
import Results from "./Results";
import axios from "axios";
import style from "./style";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showResults: false,
      trains: [],
      origin: "",
      destination: ""
    };

    this.getTrains = this.getTrains.bind(this);
  }

  getTrains(origin, destination) {
    axios
      .get("/trains", {
        params: {
          origin: origin,
          destination: destination
        }
      })
      .then(({ data }) => {
        this.setState({
          trains: data,
          showResults: !this.state.showResults,
          origin: origin,
          destination: destination
        });
      })
      .catch(e => console.log(e));
  }

  render() {
    return (
      <React.Fragment>
        <div className={style.outer}>
          <div className={style.container}>
            <span className={style.title}>New Jersey Transit Train Times</span>
            <SearchBar getTrains={this.getTrains} className={style.header} />
            {this.state.showResults ? (
              <Results
                trains={this.state.trains}
                origin={this.state.origin}
                destination={this.state.destination}
                className={style.card}
              />
            ) : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App name="Jane" />, mountNode);

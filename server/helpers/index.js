module.exports = {
  getTrains: (data, destination) => {
    let trains = data["STATION"]["ITEMS"]["ITEM"];
    let result = [];
    console.log(trains);

    //iterate through trains

    for (let i = 0; i < trains.length; i++) {
      let train = trains[i];
      let stops = train["STOPS"]["STOP"];

      //find which trains stop at desired destination
      for (let j = 0; j < stops.length; j++) {
        let stop = stops[j];
        let name = stop["NAME"];
        if (name === "Newark Penn Station") {
          result.push({
            depart: train["SCHED_DEP_DATE"],
            arrive: stop["TIME"]
          });

          //return first 5 trains
          if (result.length === 5) return result;
        }
      }
    }

    //return 0-4 trains
    return result;
  }
};

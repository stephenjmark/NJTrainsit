module.exports = {
  getTrains: (data, destination) => {
    let trains = data["STATION"]["ITEMS"]["ITEM"];
    let result = [];
    console.log(trains);

    trains.forEach(train => {
      let stops = train["STOPS"]["STOP"];
      stops.forEach(stop => {
        let name = stop["NAME"];
        if (name === "Newark Penn Station") {
          result.push({
            depart: train["SCHED_DEP_DATE"],
            arrive: stop["TIME"]
          });
        }
      });
    });

    return result;
  }
};

require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const parser = require("body-parser");
const axios = require("axios");
const xml2js = require("xml2js-es6-promise");
const { getTrains, getShortcode } = require("./helpers");
const app = express();
const port = process.env.PORT || 4000;

app.use(express.static("./dist"));

app.use(morgan("dev"));
app.use(parser.json());

const parse = async () => {
  parseString(data, (err, result) => {
    if (err) throw err;
    return result;
  });
};

//recieving data from API and parsing json
app.get("/trains", (req, res) => {
  const origin = req.query.origin;
  const destination = req.query.destination;
  const originShort = getShortcode(origin);

  axios
    .get(
      `http://traindata.njtransit.com:8092/njttraindata.asmx/getTrainScheduleJSON?username=${
        process.env.NJUSER
      }&password=${process.env.NJPASS}&station=${originShort}`
    )
    .then(({ data }) => {
      let string = data.split(">")[2];
      string = string.split("<")[0];
      console.log(string);

      res.status(200).send(getTrains(JSON.parse(string), destination));
    })
    .catch(e => {
      console.log(e);
      res.sendStatus(500);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

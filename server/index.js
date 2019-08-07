const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

app.use(express.static("./dist"));

app.use(morgan("dev"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

const express = require("express");
var cors = require("cors");
let data = require("./data");
const { request } = require("http");
const { response } = require("express");
const app = express();
const port = 3001;

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (request, response) => {
  response.json(data.quizes);
});

app.post("/score", (request, response) => {
  let score = request.body;
  data.scores.push(score);
  response.json({ message: "The score saved successfully." });
});

app.listen(port, () => {
  console.log("server app listening at port " + port);
});

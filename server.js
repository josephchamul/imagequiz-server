const express = require("express");
var cors = require("cors");
let data = require("./data");
const { request } = require("http");
const { response } = require("express");
const app = express();
const port = process.env.PORT || 3002;

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log("Image Quiz API listening at port " + port);
});

app.get("/", (request, response) => {
  response.send("Welcome to Image Quiz API");
});

app.get("/quizzes", (request, response) => {
  let metadata = data.quizes.map((x) => {
    return { name: x.name, id: x.id, picture: x.picture };
  });
  response.json(metadata);
});

app.post("/score", (request, response) => {
  let score = request.body;
  data.scores.push(score);
  response.json({ message: "The score saved successfully." });
});

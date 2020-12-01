const express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
let data = require("./data");
const app = express();
const port = process.env.PORT || 3002;

//middlewares
app.use(cors());
app.use(bodyParser.json());

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

app.get("/questions/:quizid", (request, response) => {
  let quizid = request.params.quizid;
  let found = data.quizes.find((x) => x.id === Number(quizid));
  if (found) {
    response.json(found.questions);
  } else {
    response
      .status(404)
      .json({ error: `Quiz with id ${quizid} does not exist` });
  }
});

app.post("/score", (request, response) => {
  let username = request.body.username;
  let quizid = request.body.quizid;
  let score = request.body.score;
  data.scores.push({ score: score, quizid: quizid, username: username });
  response.json({ messsage: "The score was added successfully" });
});

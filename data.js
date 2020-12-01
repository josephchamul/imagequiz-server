//the question that wiil be asked
let q1 = {
  picture: "daffodil.png",
  correct: "Daffodil",
  answers: ["Daisy", "Lily", "Daffodil", "Tulip"],
};

let q2 = {
  picture: "daisy.jpg",
  correct: "Daisy",
  answers: ["Daisy", "Lily", "Daffodil", "Tulip"],
};

let q3 = {
  picture: "cherryblossom.png",
  correct: "Cherryblossom",
  answers: ["Daisy", "Lily", "Daffodil", "Cherryblossom"],
};

let q4 = {
  picture: "tulip.png",
  correct: "Tulip",
  answers: ["Daisy", "Lily", "Daffodil", "Tulip"],
};

let q5 = {
  picture: "sunflower.png",
  correct: "Sunflower",
  answers: ["Sunflower", "Lily", "Daffodil", "Cherryblossom"],
};

let q6 = {
  picture: "rose.png",
  correct: "Rose",
  answers: ["Daisy", "Lily", "Rose", "Tulip"],
};

let q7 = {
  picture: "waterlily.png",
  correct: "Waterlily",
  answers: ["Daisy", "Sunflower", "Waterlily", "Tulip"],
};

let q8 = {
  picture: "lily.jpg",
  correct: "Lily",
  answers: ["Daisy", "Lily", "Daffodil", "Tulip"],
};

//the quizzes
let quiz1 = {
  name: "quiz 1",
  id: 1,
  picture: "rose.png",
  questions: [q1, q2, q3, q4, q5, q6],
};
let quiz2 = {
  name: "quiz 2",
  id: 2,
  picture: "sunflower.png",
  questions: [q5, q8, q7, q6, q2, q4],
};
let quiz3 = {
  name: "quiz 3",
  id: 3,
  picture: "tulip.png",
  questions: [q4, q8, q6, q3, q1, q7],
};

let quizes = [quiz1, quiz2, quiz3];
let scores = [];

module.exports.scores = scores;
module.exports.quizes = quizes;

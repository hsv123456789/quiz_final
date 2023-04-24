const mongoose = require("mongoose");

const resultModal = mongoose.Schema({
  rollNo: { type: String, required: true },
  totalQuizPoints: { type: String, required: true },
  totalCorrectQuestions: { type: String, required: true },
});

module.exports = mongoose.model("Result", resultModal);

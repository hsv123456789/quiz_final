const express = require("express");
const router = express.Router();
const resultModal = require("../modals/result");

router.get("/", async (request, response) => {
  const result = await resultModal.find();
  response.json(result);
});
router.get("/:rollno", async (request, response) => {
  try {
    const rollno = request.params.rollno;
    const result = await resultModal.findOne({ rollNo: rollno });
    if (result) {
      response.json({ message: `Roll number ${rollno} exists` });
    } else {
      response.json({ message: `Roll number ${rollno} does not exist` });
    }
  } catch (err) {
    response.json({ err: err.message });
  }
});

router.post("/", async (request, response) => {
  try {
    const rollno = request.body.rollno;
    const totalQuizPoints = request.body.totalQuizPoints;
    const totalCorrectQuestions = request.body.totalCorrectQuestions;

    const newResult = await resultModal.create({
      rollNo: rollno,
      totalQuizPoints: totalQuizPoints,
      totalCorrectQuestions: totalCorrectQuestions,
    });
    response.json(newResult);
  } catch (err) {
    response.json({ error: err.message });
  }
});
router.delete("/:id", async (request, response) => {
  try {
    await resultModal.findByIdAndRemove(request.params.id);
    response.json({ message: "Project removed sucessfully" });
  } catch (error) {
    response.send({ error: error.message });
  }
});
router.delete("/", async (request, response) => {
  try {
    await resultModal.deleteMany({});
    response.json({ message: "All the files have been deleted sucessfully" });
  } catch (err) {
    response.json({ error: err.message });
  }
});
module.exports = router;

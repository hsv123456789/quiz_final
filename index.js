const express = require("express");
const mongoose = require("mongoose");
const port = 3000;
const mongooseUrl =
  "mongodb+srv://hsv123456789:vaishnavee@cluster0.yzu2ier.mongodb.net/?retryWrites=true&w=majority";
const app = express();
const resultRouter = require("./routes/results");
const cors = require("cors");
app.use(cors());
app.use(express.json());

mongoose.connect(mongooseUrl);

app.use("/results", resultRouter);
app.listen(port, () => {
  console.log(`The app has started in the port ${port}`);
});

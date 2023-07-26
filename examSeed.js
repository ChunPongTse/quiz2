const express = require('express')
const mongoose = require("mongoose");

const app = express();

//create and/or connect to a db
//mongoose.connect("mongodb://localhost:27017/Exams23002", {
//  useNewUrlParser: true,
//});

app.use(express.json());

const uri = "mongodb+srv://tempuser:123@cluster0.f9d6o.gcp.mongodb.net/Exams23002";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

//creating schema
const examSchema = new mongoose.Schema({
  name: String,
  sid: String,
},{
  collection: "examrecords"
});

// defining model
const Exam = mongoose.model("Exam", examSchema);

const mylibrary = [
  { name: 'Chun Pong Tse', sid: '300357369' },
];

//Exam.deleteMany({}, function (err) {
//  if (err) {
//    console.log(err);
//  } else {
//    console.log("Successfully deleted all documents from the 'Exam' collection.");

    Exam.insertMany(mylibrary, function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Successfully saved the 'mylibrary' in the 'Exam' collection.");
      }
    });
//  }
//});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

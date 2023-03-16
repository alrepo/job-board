const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const bodyParser = require("body-parser");
const { Schema } = require('mongoose');

let app = express();

app.use(bodyParser.urlencoded({extended:true}));

// enable CORS
app.use(cors());

mongoose.connect("mongodb://localhost:27017/jobs", {
  useNewUrlParser: true})
.then(() => console.log('Database connected!'))
.catch(err => console.error(err));

const JobsSchema = {
    jobID: String,
    jobTitle: String,
    companyName: String,
    companyLogo: String,
    companyDescription: String,
    jobDescription: String,
    emailToApply: String,
    linkToApply: String,
    location: String,
    salary: Number,
    jobCategory: String,
    companyCategory: String,
    cardOptions: {
      fixed: Number,
      highlight: Boolean,
      showLogo: Boolean
    },
    demoCard: Boolean
  };
const JobPost = mongoose.model("JobPost", JobsSchema);

app.post('/api/new-post', (req, res) => {
  const jobPost = new JobPost(req.body);
  jobPost.save()
  .then(() => {
    console.log(req.body);
    res.send('db updated successfully!');
  })
  .catch(err => {
    console.error(err);
    res.status(400).send('Error saving to database');
  });
  
});

app.get('/jobs/publish-post', (req, res) => {
  res.send('Hello from the server!');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

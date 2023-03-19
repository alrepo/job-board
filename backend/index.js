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
    salary: String,
    jobCategory: String,
    companyCategory: String,
    cardOptions: {
      fixed: Number,
      highlight: Boolean,
      showLogo: Boolean
    },
    timePosted: String,
    demoCard: Boolean
  };
const CompanyPosts = mongoose.model("CompanyPosts", JobsSchema);

app.post('/api/new-post', (req, res) => {
  const company = new CompanyPosts(JSON.parse(Object.keys(req.body)[0]));
  company.save()
  .then(() => {
    console.log(Object.keys(req.body)[0]);
    res.send('db updated successfully!');
  })
  .catch(err => {
    console.error(err);
    res.status(400).send('Error saving to database');
  });
  
});


app.get('/api/jobs', async (req,res) => {
  try {
    const result = await CompanyPosts.find();
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving data from database');
  }
});



// app.get('/jobs/publish-post', (req, res) => {
//   res.send('Hello from the server!');
// });

const port = process.env.PORT || 5002;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

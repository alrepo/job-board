const express = require('express');
const cors = require('cors'); // add this line
const bodyParser = require("body-parser");
const { redirect } = require('react-router-dom');
let app = express();

app.use(bodyParser.urlencoded({extended:true}));

// enable CORS
app.use(cors());

app.post('/api/new-post', (req, res) => {
  res.send('Hello from the server!');
});
app.get('/jobs/publish-post', (req, res) => {
  res.send('Hello from the server!');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

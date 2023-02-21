// Importing express module
const express = require('express');
const path = require('path');
const app = express();
const cors = require('cors');
const static_path = path.join(__dirname,"public");
app.use(express.static(static_path));
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.post('/', (req, res) => {
  console.log('i am up');
  console.log(req.body);
  if (req.body.username == 'aryan' && req.body.password == '9721') {
    res.send("success");

  } else {
    res.send("failure");

  }

});

app.listen(3000, () => {
  console.log('Our express server is up on port 3000');
});
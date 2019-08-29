const db = require('../db');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '../client/dist'));

app.get('/api/reviews/:id', (req, res) => {
  db.ReviewComment.find({listingID: req.params.id}, (error, data) => {
    if(error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(data);
    }
  })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
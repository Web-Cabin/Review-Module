const db = require('../db');
const express = require('express')

const app = express();
const PORT = 3000;

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
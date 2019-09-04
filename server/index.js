const db = require('../db');
const express = require('express');
var cors = require('cors');

const app = express();
const PORT = 3002;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}./../client/dist`));

app.get('/api/listings/:id', (req, res) => {
  console.log(req.params.id);

  db.ReviewComment.find({listingID: `${req.params.id}`}, (error, data) => {
    if(error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(data);
    }
  })
})

// app.get('/bundle.js', (req, res) => {
//   res.sendFile('../client/dist/bundle.js', (error) => {
//     if (error) {
//       console.log('Wendy is cool');
//     } else {
//       console.log('Han is a pleb');
//     }
//   })
// })

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/review', {useNewUrlParser: true});

console.log('we are in');

var reviewCommentSchema = new mongoose.Schema({
  'name': String,
  'profilePic': String,
  'message' : String,
  'date' : String,
  'overAllReview' : Number,
  'accuracy' : Number,
  'location' : Number,
  'communication' : Number,
  'checkIn' : Number,
  'cleanliness' : Number,
  'value' : Number,
  'responseComment' : String
});

var reviewComment = mongoose.model('reviewComment', reviewCommentSchema);


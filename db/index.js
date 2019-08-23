var mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/review', {useNewUrlParser: true});

var reviewCommentSchema = new mongoose.Schema({
  'listingID' : Number,
  // 'id': Number, 
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
  // 'hostName': String,
  // 'hostPic' : String,
  // 'hostDate' : String,
  // 'hostMessage' : String,
});


const ReviewComment = mongoose.model('ReviewComment', reviewCommentSchema);

module.exports = {
  ReviewComment: ReviewComment,
  reviewCommentSchema: reviewCommentSchema,
};


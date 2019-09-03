const mongoose = require('mongoose');
const db = require('./db/index');
const faker = require('faker');

// class ReviewSeed {
//   constructor() {
//     this.review = [];
//   }

  var createReviews = () => {
    const years = [2017, 2018, 2019];

    for(let i = 1; i <= 100; i++) {
      for (let j = 0; j < Math.floor(Math.random() * (50)); j++) {
        var review = {};
        review.listingID = i;
        review.name = faker.name.findName();
        review.profilePic = faker.image.avatar();
        review.message = faker.lorem.paragraph();
        review.date = `${faker.date.month()} ${years[Math.floor(Math.random()* (3))]}`;
        review.overAllRating = faker.random.number({
          min: 1,
          max: 5,
        });
        review.accuracy = faker.random.number({
          min: 1,
          max: 5,
        });
        review.location = faker.random.number({
          min: 1,
          max: 5,
        });
        review.communication = faker.random.number({
          min: 1,
          max: 5,
        });
        review.checkIn = faker.random.number({
          min: 1,
          max: 5,
        });
        review.cleanliness = faker.random.number({
          min: 1,
          max: 5,
        });
        review.value = faker.random.number({
          min: 1,
          max: 5,
        });
        // console.log(review);
        db.ReviewComment.create(review, function(err) {
          if(err) {
            console.log('error');
          }
        });
      }
    }
  }
createReviews();

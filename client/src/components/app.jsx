import React, { Component } from 'react';
import $ from 'jquery';
import CommentList from './CommentList.jsx';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';


class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      reviews: [],
      avg_accuracy : 0,
      avg_location : 0,
      avg_communication : 0,
      avg_checkIn : 0,
      avg_cleanliness : 0,
      avg_value : 0,
    };
    this.setReviews = this.setReviews.bind(this);
  }

  
  componentDidMount() {
    this.fetchReviews();
  }

  
  fetchReviews() {
    $.get('/api/reviews/2', (reviews) => {
      this.setReviews(reviews);
    });
  }
  
  setReviews(data) {
    this.setState({
      reviews: data,
      avg_accuracy: data.reduce((total, review) => total + review.accuracy, 0) / data.length,
      avg_location: data.reduce((total, review) => total + review.location, 0) / data.length,
      avg_communication: data.reduce((total, review) => total + review.communication, 0) / data.length,
      avg_checkIn: data.reduce((total, review) => total + review.checkIn, 0) / data.length,
      avg_cleanliness: data.reduce((total, review) => total + review.cleanliness, 0) / data.length,
      avg_value: data.reduce((total, review) => total + review.value, 0) / data.length,
    });
    const overallRating = (this.state.avg_accuracy
      + this.state.avg_location
      + this.state.avg_communication
      + this.state.avg_checkIn
      + this.state.avg_cleanliness
      + this.state.avg_value) / 6;
    const roundedTotalRating = Math.round(overallRating * 2) / 2;
    this.setState({
      avg_overallRating: roundedTotalRating,
    });
    console.log(this.state.avg_accuracy)
  }



  render() {
    const { reviews } = this.state;
    const { avg_overallRating } = this.state;
    const { avg_accuracy } = this.state;
    const { avg_location } = this.state;
    const { avg_communication } = this.state;
    const { avg_checkIn } = this.state;
    const { avg_cleanliness } = this.state;
    const { avg_value } = this.state;

    return(
    <div>
      <h1>{reviews.length} Reviews</h1>
      <div>
        <StarRatings
        rating={avg_overallRating}
        starDimension="20px"
        starRatedColor="teal"
        numberOfStars={5}
        name="rating"
        />
      </div>
      <div>
        <h2>Accuracy</h2>
        <div>
          <StarRatings
            rating={avg_accuracy}
            starDimension="20px"
            starRatedColor="teal"
            numberOfStars={5}
            name="rating"
          />
        </div>
      </div>
      <div>
        <h2>Communication</h2>
        <div>
          <StarRatings
            rating={avg_communication}
            starDimension="20px"
            starRatedColor="teal"
            numberOfStars={5}
            name="rating"
          />
        </div>
      </div>
      <div>
        <h2>Cleanliness</h2>
        <div>
          <StarRatings
            rating={avg_cleanliness}
            starDimension="20px"
            starRatedColor="teal"
            numberOfStars={5}
            name="rating"
          />
        </div>
      </div>
      <div>
        <h2>Location</h2>
        <div>
          <StarRatings
            rating={avg_location}
            starDimension="20px"
            starRatedColor="teal"
            numberOfStars={5}
            name="rating"
          />
        </div>
      </div>
      <div>
        <h2>Check-In</h2>
        <div>
          <StarRatings
            rating={avg_checkIn}
            starDimension="20px"
            starRatedColor="teal"
            numberOfStars={5}
            name="rating"
          />
        </div>
      </div>
      <div>
        <h2>Value</h2>
        <div>
          <StarRatings
            rating={avg_value}
            starDimension="20px"
            starRatedColor="teal"
            numberOfStars={5}
            name="rating"
          />
        </div>
      </div>
      <div>
        <CommentList reviews={this.state.reviews}/>
      </div>
    </div>
    )
  };
};

export default App;
import React, { Component } from 'react';
import $ from 'jquery';
import CommentList from './CommentList.jsx';

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
    return(
    <div>
      <h1>AirBNB Reviews</h1>
      <CommentList reviews={this.state.reviews}/>
    </div>
    )
  };
};

export default App;
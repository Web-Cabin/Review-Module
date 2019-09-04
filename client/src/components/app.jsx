import React, { Component } from 'react';
import $ from 'jquery';
import CommentList from './CommentList.jsx';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';
import Search from './Search.jsx';

const WholeReviewDiv = styled.div`
  display: block;
  box-sizing: border-box;
`;

const OverallStar = styled.div`
  display: flex;
  margin-top: 5px;
`;

const SubStar = styled.div`
  display: flex;
  margin-top: 5px;
  height: 30px;
`;

const StarBox = styled.div`
  display: block;
  box-sizing: border-box;
`;

const LeftBox = styled.div`
  width: 50%;
  float: left;
`;

const RightBox = styled.div`
  width: 50%;
  float: right;
`;

const MainHeader = styled.h2`
  font-size: 24px;
  font-weight: 800;
  color: #484848;
  font-family: Arial, Helvetica, sans-serif;
`;

const SubHeader = styled.h3`
  font-size: 14px;
  color: #484848;
  font-family: Arial, Helvetica, sans-serif;
`;

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
      searchValue: '',
    };
    this.setReviews = this.setReviews.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  
  componentDidMount() {
    this.fetchReviews();
  }

  
  fetchReviews() {
    const id = 2;
    $.get(`http://localhost:3002/api/listings/${id}`, (reviews) => {
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
  };

  handleSearch(searchedTerm) {
    this.setState({ searchedTerm });
  }

  clearSearch() {
    this.setState({ searchedTerm: null });
  }

  filterReviewsBySearchedTerm() {
    const { searchValue } = this.state;
    const { reviews } = this.state;
    const results = [];
    if (searchValue) {
      reviews.filter((review) => {
        if (review.reviewText.indexOf(searchValue) > -1) {
          results.push(review);
        }
        return undefined;
      });
      return results;
    }
    return reviews;
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
    <WholeReviewDiv>
      <OverallStar style={{ borderBottomStyle: 'solid', borderBottomWidth: '1px', borderBottomColor: '#e4e4e4' }}>
      <MainHeader>{reviews.length} Reviews</MainHeader>
      <div style={{ marginTop: '25px', marginLeft: '15px', marginRight: 'auto' }}>
        <StarRatings
          rating={avg_overallRating}
          starDimension="20px"
          starRatedColor="teal"
          numberOfStars={5}
          name="rating"
        />
      </div>
      <Search handleSearch={this.handleSearch} />
      </OverallStar>
      <StarBox>
        <LeftBox>
          <SubStar>
            <SubHeader>Accuracy</SubHeader>
            <div style={{ marginTop: '10px', marginLeft: '53px', float: 'right' }}>
              <StarRatings
                rating={avg_accuracy}
                starDimension="20px"
                starRatedColor="teal"
                numberOfStars={5}
                name="rating"
              />
            </div>
          </SubStar>
          <SubStar>
        <SubHeader>Communication</SubHeader>
        <div style={{ marginTop: '10px', marginLeft: '15px', float: 'right' }}>
          <StarRatings
            rating={avg_communication}
            starDimension="20px"
            starRatedColor="teal"
            numberOfStars={5}
            name="rating"
          />
        </div>
          </SubStar>
          <SubStar style={{ marginBottom: '25px' }}>
          <SubHeader>Cleanliness</SubHeader>
          <div style={{ marginTop: '10px', marginLeft: '44px', float: 'right' }}>
            <StarRatings
              rating={avg_cleanliness}
              starDimension="20px"
              starRatedColor="teal"
              numberOfStars={5}
              name="rating"
            />
          </div>
          </SubStar>
        </LeftBox>
        <RightBox>
          <SubStar>
        <SubHeader>Location</SubHeader>
        <div style={{ marginTop: '10px', marginLeft: '18px', float: 'right' }}>
          <StarRatings
            rating={avg_location}
            starDimension="20px"
            starRatedColor="teal"
            numberOfStars={5}
            name="rating"
          />
        </div>
          </SubStar>
          <SubStar>
        <SubHeader>Check-In</SubHeader>
        <div style={{ marginTop: '10px', marginLeft: '15px', float: 'right' }}>
          <StarRatings
            rating={avg_checkIn}
            starDimension="20px"
            starRatedColor="teal"
            numberOfStars={5}
            name="rating"
          />
        </div>
          </SubStar>
          <SubStar>
        <SubHeader>Value</SubHeader>
        <div style={{ marginTop: '10px', marginLeft: '39px', float: 'right' }}>
          <StarRatings
            rating={avg_value}
            starDimension="20px"
            starRatedColor="teal"
            numberOfStars={5}
            name="rating"
          />
        </div>
          </SubStar>
        </RightBox>
      </StarBox>
      <div>
        <CommentList reviews={this.state.reviews}/>
      </div>
    </WholeReviewDiv>
    )
  };
};

export default App;
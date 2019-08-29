import React, { Component } from 'react';
import $ from 'jquery';
import CommentList from './CommentList.jsx';

class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      reviews: []
    }
  }

  
  componentDidMount() {
    console.log('i am in DidMount')
    this.fetchReviews();
  }

  setReviews(data) {
    console.log('i am in setReviews');
    this.setState({
      reviews: data
    });
  }
  
  fetchReviews() {
    var setReviews = this.setReviews.bind(this);
    $.get('/api/reviews/2').done(setReviews)
    .fail(console.log('failed the setState'));
  }
  
  render() {
    return(
    <div>
      <h1>Hello</h1>
      <CommentList reviews={this.state.reviews}/>
    </div>
    )
  };
};

export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import CommentList from './components/CommentList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      reviews: []
    }
  }

  setReviews(data) {
    this.setState({
      reviews: data
    });
  }

  componentDidMount() {
    var setReviews = this.setReviews.bind(this);
    $.get('/api/reviews/:id').done(setReviews);
  }

  render() {
    return(
    <div>
      <div>Hello</div>
      <CommentList reviews={this.state.reviews}/>
    </div>
    )
  };
};

ReactDOM.render(<App />, document.getElementById('app'));
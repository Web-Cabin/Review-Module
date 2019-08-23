import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

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
    <div></div>
    )
  };
};

ReactDOM.render(<App />, document.getElementById('app'));
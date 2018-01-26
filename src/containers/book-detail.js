import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

  render() {
    if (!this.props.book) {
      return (
        <div> select a book pls ! </div>
      );
    }


    return (
      <div>
      <h3> Book Details </h3>
        Title: {this.props.book.title}
        <hr/>
        Pages: {this.props.book.pages}
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);

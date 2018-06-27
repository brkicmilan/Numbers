import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getPhoneNumberWithReviewer, clearPhoneNumber } from '../../actions';
import { connect } from 'react-redux';

class NumberView extends Component {

  componentWillMount() {
    this.props.dispatch(getPhoneNumberWithReviewer(this.props.match.params.id))
  }

  componentWillUnmount() {
    this.props.dispatch(clearPhoneNumber())
  }

  renderPhoneBook = (numbers) => (
    numbers.number ?
      <div className="br_container">
        <div className="br_header">
          <h3>First name: </h3>
          <h5>{numbers.number.firstname}</h5>
        </div>
        <div className="br_header">
          <h3>Last name: </h3>
          <h5>{numbers.number.lastname}</h5>
        </div>
        <div className="br_header">
          <h3>Number: </h3><h5>+381{numbers.number.telephonenumber}</h5>
        </div>
        <Link to={`/user/edit-post/${numbers.number._id}`} >
          <div className="loadmore">
            Edit phone number
          </div>
        </Link>
      </div>
      : null
  )

  render() {
    let numbers = this.props.phoneBook;
    return (
      <div>
        {this.renderPhoneBook(numbers)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    phoneBook: state.phoneBook
  }
}

export default connect(mapStateToProps)(NumberView);  
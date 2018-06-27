import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addNumber, clearNewNumber } from '../../actions';

class AddNumber extends Component {

  state = {
    formdata: {
      firstname: '',
      lastname: '',
      telephonenumber: ''
    }
  }

  handleInput = (event, name) => {
    const newFormdata = {
      ...this.state.formdata
    }
    newFormdata[name] = event.target.value

    this.setState({
      formdata: newFormdata
    })
  }

  showNewNumber = (number) => (
    number.post ?
      <div className="conf_link">
        Post Added <Link to={`/numbers/${number.bookId}`}>
          Click the link to see the post
        </Link>
      </div>
      : null

  )

  submitForm = (e) => {
    e.preventDefault();
    this.props.dispatch(addNumber({
      ...this.state.formdata,
      ownerId: this.props.user.login.id
    }))

  }

  componentWillUnmount() {
    this.props.dispatch(clearNewNumber())
  }

  render() {
    return (
      <div className="rl_container article">
        <form onSubmit={this.submitForm}>
          <h2>Add a element</h2>
          <div className="form_element">
            <input
              type="text"
              placeholder="Enter first name"
              value={this.state.formdata.firstname}
              onChange={(event) => this.handleInput(event, 'firstname')}
            />
          </div>
          <div className="form_element">
            <input
              type="text"
              placeholder="Enter last name"
              value={this.state.formdata.lastname}
              onChange={(event) => this.handleInput(event, 'lastname')}
            />
          </div>
          <div className="form_element">
            <input
              type="text"
              placeholder="Enter telephone number"
              value={this.state.formdata.telephonenumber}
              onChange={(event) => this.handleInput(event, 'telephonenumber')}
            />
          </div>
          <button type="submit">Add element</button>
          {
            this.props.phoneBook.newnumber ?
              this.showNewNumber(this.props.phoneBook.newnumber)
              : null
          }
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    phoneBook: state.phoneBook
  }
}

export default connect(mapStateToProps)(AddNumber);
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPhoneNumberWithReviewer, updatePhoneNumber, clearNumber, deleteNumber } from '../../actions';

class EditNumber extends PureComponent {

  state = {
    formdata: {
      _id: this.props.match.params.id,
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

  submitForm = (e) => {
    e.preventDefault();
    this.props.dispatch(updatePhoneNumber(this.state.formdata))

  }

  deletePost = () => {
    this.props.dispatch(deleteNumber(this.props.match.params.id))
  }

  redirectHome = () => {
    setTimeout(() => {
      this.props.history.push('/')
    }, 1000)
  }

  componentWillMount() {
    this.props.dispatch(getPhoneNumberWithReviewer(this.props.match.params.id))
  }

  componentWillReceiveProps(nextProps) {
    let number = nextProps.phoneBook.number;
    this.setState({
      formdata: {
        _id: number._id,
        firstname: number.firstname,
        lastname: number.lastname,
        telephonenumber: number.telephonenumber
      }
    })
  }

  componentWillUnmount() {
    this.props.dispatch(clearNumber())
  }

  render() {
    let phoneBook = this.props.phoneBook;
    return (
      <div className="rl_container article">
        {
          phoneBook.updateNumber ?
            <div className="edit_confirm">
              Post updated , <Link to={`/numbers/${phoneBook.number._id}`}>
                Click here to see your post
          </Link>
            </div>
            : null
        }
        {
          phoneBook.postDeleted ?
            <div className="red_tag">
              Post Deleted
              {this.redirectHome()}
            </div>
            : null
        }
        <form onSubmit={this.submitForm}>
          <h2>Edit element</h2>
          <div className="form_element">
            <input
              type="text"
              placeholder="Enter first name"
              value={this.state.formdata.firstname || ''}
              onChange={(event) => this.handleInput(event, 'firstname')}
            />
          </div>
          <div className="form_element">
            <input
              type="text"
              placeholder="Enter last name"
              value={this.state.formdata.lastname || ''}
              onChange={(event) => this.handleInput(event, 'lastname')}
            />
          </div>
          <div className="form_element">
            <input
              type="text"
              placeholder="Enter telephone number"
              value={this.state.formdata.telephonenumber || ''}
              onChange={(event) => this.handleInput(event, 'telephonenumber')}
            />
          </div>
          <button type="submit">Edit element</button>
          <div className="delete_post">
            <div className="button"
              onClick={this.deletePost}
            >
              Delete element
            </div>
          </div>
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

export default connect(mapStateToProps)(EditNumber);
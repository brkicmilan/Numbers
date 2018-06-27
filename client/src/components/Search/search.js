import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPhoneNumbers } from '../../actions';

import PhoneBookItem from '../../widgetsUI/phoneNumberItems';

class Search extends Component {

  state = {
    query: ''
  }

  componentWillMount() {
    this.props.dispatch(getPhoneNumbers(0, 0, 'desc'))
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }

  renderItems = (phoneBook) => (
    phoneBook.list ? phoneBook.list.map(item => (
      this.state.query !== '' ?
        item.lastname.toLowerCase().search(this.state.query.toLowerCase()) !== -1 ||
          item.firstname.toLowerCase().search(this.state.query.toLowerCase()) !== -1 ?
          <PhoneBookItem {...item} key={item._id} />
          : null
        : <PhoneBookItem {...item} key={item._id} />
    ))
      : <div>Loading</div>
  )

  render() {
    return (
      <div>
        <input
          className="search"
          placeholder="Search phone numbers"
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        {this.renderItems(this.props.phoneBook)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    phoneBook: state.phoneBook
  }
}

export default connect(mapStateToProps)(Search);
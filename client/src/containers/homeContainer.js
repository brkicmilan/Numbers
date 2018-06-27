import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { getPhoneNumbers } from '../actions';

// import PhoneBookItem from '../widgetsUI/phoneNumberItems';

class HomeContainer extends Component {

  // componentWillMount() {
  //   this.props.dispatch(getPhoneNumbers(3, 0, 'desc'))
  // }

  // renderItems = (phoneBook) => (
  //   phoneBook.list ? phoneBook.list.map(item => (
  //     <PhoneBookItem {...item} key={item._id} />
  //   ))
  //     : null
  // )

  // loadmore = () => {
  //   let count = this.props.phoneBook.list.length;
  //   this.props.dispatch(getPhoneNumbers(3, count, 'desc', this.props.phoneBook.list))
  // }

  render() {
    return (
      <div>
        {/* {this.renderItems(this.props.phoneBook)}
        <div className="loadmore"
          onClick={this.loadmore}>
          Load More
        </div> */}
        <div className="logout_container">
          <h1>
            Please log in to see the numbers
          </h1>
          <div className="rl_container article">
            <Link to={`/login`}>
              <button>
                Click to log in
            </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     phoneBook: state.phoneBook
//   }
// }

// export default connect(mapStateToProps)(HomeContainer);
export default HomeContainer;
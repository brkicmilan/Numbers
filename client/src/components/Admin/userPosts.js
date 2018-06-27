import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserPosts } from '../../actions';
import moment from 'moment-js';
import { Link } from 'react-router-dom';

class UserPosts extends Component {

  componentWillMount() {
    this.props.dispatch(getUserPosts(this.props.user.login.id))
  }

  showUserPosts = (user) => (
    user.UserPosts ?
      user.UserPosts.map(item => (
        <tr key={item.id}>
          <td><Link to={`/user/edit-post/${item._id}`}>{item.firstName}</Link></td>
          <td>{item.lastname}</td>
          <td>{moment(item.createAt).format("MM/DD/YY")}</td>
        </tr>
      ))
      : <div>No user number</div>
  )


  render() {
    let user = this.props.user;
    return (
      <div className="user_posts">
        <h4>Your reviews:</h4>
        <table>
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {this.showUserPosts(user)}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(UserPosts);
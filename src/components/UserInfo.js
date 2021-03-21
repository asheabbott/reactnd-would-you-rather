import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './UserInfo.css';

class UserInfo extends Component {
  static propTypes = {
    users: PropTypes.object.isRequired,
    authUser: PropTypes.string.isRequired,
    signOut: PropTypes.func.isRequired,
  }

  render() {
    const {users, authUser, signOut} = this.props;

    return (
      <div className='user-info container'>
        <div className='greeting'>Hello, {users[authUser].name}.</div>
        <div className='profile-photo' style={{backgroundImage: `url(${users[authUser].avatarURL})`}}></div>
        <button className='link' onClick={signOut}>Sign Out</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  authUser: state.authUser,
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch({type: 'SIGN_OUT'}),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
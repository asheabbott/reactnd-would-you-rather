import React, {Component} from 'react';
import {connect} from 'react-redux';
import LogoNav from './LogoNav';
import UserInfo from './UserInfo';
import './Header.css';

class Header extends Component {
  render() {
    const {authUser} = this.props;

    return (
      <header>
        <LogoNav />
        {authUser !== '' && <UserInfo />}
      </header>
    );
  }
}

export default connect(state => ({
  authUser: state.authUser,
}))(Header);
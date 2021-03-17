import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import './Leaderboard.css';

class Leaderboard extends Component {
  render() {
    const {authUser} = this.props;

    return (
      <Fragment></Fragment>
    );
  }
}

export default connect(state => ({
  authUser: state.authUser,
}))(Leaderboard);
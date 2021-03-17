import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import './AddQuestion.css';

class AddQuestion extends Component {
  render() {
    const {authUser} = this.props;

    return (
      <Fragment></Fragment>
    );
  }
}

export default connect(state => ({
  authUser: state.authUser,
}))(AddQuestion);
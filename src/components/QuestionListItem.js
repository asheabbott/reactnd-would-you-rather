import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class QuestionListItem extends Component {
  static propTypes = {
    users: PropTypes.object.isRequired,
    question: PropTypes.object.isRequired,
  }
  render() {
    const {users, question} = this.props;

    return (
      <li key={question.id}>
        <p className='author'>{`${users[question.author].name} asks:`}</p>
        <p>{`Would you rather ${question.optionOne.text} or ${question.optionTwo.text}?`}</p>
      </li>
    );
  }
}

export default connect(state => ({
  users: state.users,
}))(QuestionListItem);
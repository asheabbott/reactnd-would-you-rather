import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

class QuestionListItem extends Component {
  static propTypes = {
    users: PropTypes.object.isRequired,
    question: PropTypes.object.isRequired,
  }
  
  render() {
    const {users, question} = this.props;

    return (
      <li key={question.id} className='question-box'>
        <div className='content'>
          <div className='avatar'>
            <div className='avatar-img' style={{backgroundImage: `url(${users[question.author].avatarURL})`}}></div>
          </div>
          <div className='text'>
            <p className='author'><span>{users[question.author].name}</span> asks:</p>
            <p className='question-text'>Would you rather {question.optionOne.text} or {question.optionTwo.text}?</p>
          </div>
        </div>
        <Link className='btn' to={`/questions/${question.id}`}>View question</Link>
      </li>
    );
  }
}

export default connect(state => ({
  users: state.users,
}))(QuestionListItem);
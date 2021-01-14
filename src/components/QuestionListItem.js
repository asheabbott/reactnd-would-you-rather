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
      <li key={question.id}>
        <div className='content'>
          <div className='avatar'>
            <img src={users[question.author].avatarURL} alt=''></img>
          </div>
          <div className='text'>
            <p className='author'><span>{users[question.author].name}</span> asks:</p>
            <p>{`Would you rather ${question.optionOne.text} or ${question.optionTwo.text}?`}</p>
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
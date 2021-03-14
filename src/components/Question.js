import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './Question.css';

class Question extends Component {
  static propTypes = {
    users: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    authUser: PropTypes.string.isRequired,
  }

  render() {
    const {users, questions, authUser} = this.props;
    const questionID = this.props.match.params.id;
    const question = questions[questionID];

    const statusText = !Object.keys(users[authUser].answers).includes(question.id) ? 'You’ve already answered this question.' : 'You haven\'t answered this question yet.';

    return (
      <section className='question'>
        <div className='headings'>
          <h1 className='page-title'>Question</h1>
          <h2 className='question-status-text'>{statusText}</h2>
        </div>
        <div className='question-box'>
          <div className='content'>
            <div className='avatar'>
              <img src={users[question.author].avatarURL} alt=''></img>
            </div>
            <div className='text'>
              <p className='author'><span>{users[question.author].name}</span> asks:</p>
              {!Object.keys(users[authUser].answers).includes(question.id) 
                ? <div className='question-details'>
                    <p className='question-text'>{`Would you rather ${question.optionOne.text} or ${question.optionTwo.text}?`}</p>
                    {/* vv TO DO: Get question answers; calculate % of answer one; get auth user answer vv */}
                    <p className='answer-stats'>{`Would you rather ${question.optionOne.text} or ${question.optionTwo.text}?`}</p>
                    {/* vv TO DO: Get question answers; calculate % of answer two; get auth user answer vv */}
                    <p className='answer-stats'>{`Would you rather ${question.optionOne.text} or ${question.optionTwo.text}?`}</p>
                  </div>
                : <div className='question-details'>
                    <p>Would you rather</p>
                    {/* TO DO: Set up controlled radio button; handle input */}
                  </div>
              }
            </div>
          </div>
          {!Object.keys(users[authUser].answers).includes(question.id) 
            ? null
            : <button>View question</button>
          }
        </div>
      </section>
    );
  }
}

export default connect(state => ({
  users: state.users,
  questions: state.questions,
  authUser: state.authUser,
}))(Question);
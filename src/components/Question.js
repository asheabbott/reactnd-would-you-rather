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

  formSubmit = (event) => {

  }

  render() {
    const {users, questions, authUser} = this.props;
    const questionID = this.props.match.params.id;
    const question = questions[questionID];

    const statusText = Object.keys(users[authUser].answers).includes(question.id) ? 'You’ve already answered this question.' : 'You haven\'t answered this question yet.';

    const optionOneVotes = questions[questionID]['optionOne']['votes'].length;
    const optionTwoVotes = questions[questionID]['optionTwo']['votes'].length;
    const totalVotes = optionOneVotes + optionTwoVotes;
    const optionOnePercentage = (optionOneVotes / totalVotes) * 100;
    const optionTwoPercentage = (optionTwoVotes / totalVotes) * 100;

    const userAnswer = users[authUser].answers[questionID];
    const userAnswerIndicator = '(This is your answer.)';
    const questionStatus = userAnswer ? 'answered' : 'unanswered';

    console.log(userAnswer);

    return (
      <section className={`question ${questionStatus}`}>
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
              {Object.keys(users[authUser].answers).includes(question.id) 
                ? <div className='question-details'>
                    <p className='question-text'>Would you rather {question.optionOne.text} or {question.optionTwo.text}?</p>
                    <div className='answer-stats'>
                      <p>{optionOnePercentage}% of people — {optionOneVotes} out of {totalVotes} answers — would rather <strong>{question.optionOne.text}</strong>.</p>
                      {userAnswer === 'optionOne'
                        ? <p className='user-answer-indicator'>{userAnswerIndicator}</p>
                        : null
                      }
                    </div>
                    <div className='answer-stats'>
                      <p>{optionTwoPercentage}% of people — {optionTwoVotes} out of {totalVotes} answers — would rather <strong>{question.optionTwo.text}</strong>.</p>
                      {userAnswer === 'optionTwo'
                        ? <p className='user-answer-indicator'>{userAnswerIndicator}</p>
                        : null
                      }
                    </div>
                  </div>
                : <div className='question-details'>
                    <p>Would you rather</p>
                    {/* TO DO: Set up controlled radio button; handle input */}
                    <form>
                      <div className='radio'>
                        <label>
                          <input
                            type='radio'
                            value='Male'
                            checked=''
                            onChange=''
                          />
                          Male
                        </label>
                      </div>
                      <div className='radio'>
                        <label>
                          <input
                            type='radio'
                            value='Female'
                            checked=''
                            onChange=''
                          />
                          Female
                        </label>
                      </div>
                      <div className='radio'>
                        <label>
                          <input
                            type='radio'
                            value='Other'
                            checked=''
                            onChange=''
                          />
                          Other
                        </label>
                      </div>
                    </form>
                  </div>
              }
            </div>
          </div>
          {Object.keys(users[authUser].answers).includes(question.id) 
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
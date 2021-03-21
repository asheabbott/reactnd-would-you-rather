import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import NotFound from './NotFound';
import {handleAddAnswer} from '../actions/shared';
import './Question.css';

class Question extends Component {
  static propTypes = {
    users: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    authUser: PropTypes.string.isRequired,
  }

  state = {
    answer: 'optionOne',
  }

  handleChange = event => {
    this.setState({
      answer: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const {authUser} = this.props;
    const questionID = this.props.match.params.id;
    const answer = this.state.answer;

    this.props.dispatch(handleAddAnswer(authUser, questionID, answer));
  }

  render() {
    const {users, questions, authUser} = this.props;
    const questionID = this.props.match.params.id;
    const question = questions[questionID];

    if (!Object.keys(questions).includes(questionID)) {
      return <NotFound />;
    }

    const statusText = Object.keys(users[authUser].answers).includes(question.id) ? 'You’ve already answered this question.' : 'You haven\'t answered this question yet.';

    const optionOneVotes = questions[questionID]['optionOne']['votes'].length;
    const optionTwoVotes = questions[questionID]['optionTwo']['votes'].length;
    const totalVotes = optionOneVotes + optionTwoVotes;
    const optionOnePercentage = (optionOneVotes / totalVotes) * 100;
    const optionTwoPercentage = (optionTwoVotes / totalVotes) * 100;

    const userAnswer = users[authUser].answers[questionID];
    const userAnswerIndicator = '(This is your answer.)';
    const questionStatus = userAnswer ? 'answered' : 'unanswered';

    return (
      <section className={`question ${questionStatus}`}>
        <div className='headings'>
          <h1 className='page-title'>Question</h1>
          <h2 className='question-status-text'>{statusText}</h2>
        </div>
        <div className='question-box'>
          <div className='content'>
            <div className='avatar'>
              <div className='avatar-img' style={{backgroundImage: `url(${users[question.author].avatarURL})`}}></div>
            </div>
            <div className='text'>
              <p className='author'><span>{users[question.author].name}</span> asks:</p>
              {Object.keys(users[authUser].answers).includes(question.id) 
                ? <div className='question-details'>
                    <p className='question-text'>Would you rather {question.optionOne.text} or {question.optionTwo.text}?</p>
                    <div className='answer-stats'>
                      <p><strong>{optionOnePercentage.toFixed(0)}%</strong> of people — {optionOneVotes} out of {totalVotes} answers — would rather <strong>{question.optionOne.text}</strong>.</p>
                      {userAnswer === 'optionOne'
                        ? <p className='user-answer-indicator'>{userAnswerIndicator}</p>
                        : null
                      }
                    </div>
                    <div className='answer-stats'>
                      <p><strong>{optionTwoPercentage.toFixed(0)}%</strong> of people — {optionTwoVotes} out of {totalVotes} answers — would rather <strong>{question.optionTwo.text}</strong>.</p>
                      {userAnswer === 'optionTwo'
                        ? <p className='user-answer-indicator'>{userAnswerIndicator}</p>
                        : null
                      }
                    </div>
                  </div>
                : <div className='question-details'>
                    <p className='question-intro'>Would you rather</p>
                    <form id='answerInput' onSubmit={this.handleSubmit}>
                      <div className='radio'>
                        <label>
                          <input
                            type='radio'
                            name='answers'
                            value='optionOne'
                            checked={this.state.answer === 'optionOne'}
                            onChange={this.handleChange}
                          />
                          {question.optionOne.text} or
                        </label>
                      </div>
                      <div className='radio'>
                        <label>
                          <input
                            type='radio'
                            name='answers'
                            value='optionTwo'
                            checked={this.state.answer === 'optionTwo'}
                            onChange={this.handleChange}
                          />
                          {question.optionTwo.text}
                        </label>
                      </div>
                    </form>
                  </div>
              }
            </div>
          </div>
          {Object.keys(users[authUser].answers).includes(question.id) 
            ? null
            : <button type='submit' form='answerInput'>Submit answer</button>
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
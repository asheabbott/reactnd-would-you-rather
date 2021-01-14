import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import QuestionListItem from './QuestionListItem';
import './QuestionList.css';

class QuestionList extends Component {
  static propTypes = {
    users: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    authUser: PropTypes.string.isRequired,
  }

  state = {
    answered: false,
  }

  handleAnsweredToggle = event => {
    this.setState({
      answered: event.target.getAttribute('value'),
    })

    // TO DO: Questions toggle only works first time
  }

  render() {
    const {users, questions, authUser} = this.props;
    const {answered} = this.state;

    return (
      <Fragment>
        <h1>
          <span 
            className='answered-toggle false'
            value={false}
            onClick={this.handleAnsweredToggle}>
              Unanswered Questions
          </span> / <span
            className='answered-toggle true'
            value={true}
            onClick={this.handleAnsweredToggle}>
              Answered Questions
          </span>
        </h1>

        <ul className='question-list'>
          {answered === false
            ? Object.keys(questions).filter(question => Object.keys(users[authUser].answers).includes(question)).map(questionID => (
              <QuestionListItem
                key={questionID}
                question={questions[questionID]}
              />
            ))
            : Object.keys(questions).filter(question => !Object.keys(users[authUser].answers).includes(question)).map(questionID => (
              <QuestionListItem
                key={questionID}
                question={questions[questionID]}
              />
            ))}
        </ul>
      </Fragment>
    );
  }
}

export default connect(state => ({
  users: state.users,
  questions: state.questions,
  authUser: state.authUser,
}))(QuestionList);
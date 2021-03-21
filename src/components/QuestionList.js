import React, {Component} from 'react';
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
    answered: 'false',
  }

  handleAnsweredToggle = event => {
    this.setState({
      answered: event.target.getAttribute('value'),
    });
  }

  render() {
    const {users, questions, authUser} = this.props;
    const {answered} = this.state;

    return (
      <section className='question-list'>
        <h1 className='answered-toggle'>
          <span 
            role='button'
            value='false'
            active={answered === 'false' ? 'active' : 'inactive'}
            onClick={this.handleAnsweredToggle}>
              Unanswered Questions
          </span> / <span
            role='button'
            value='true'
            active={answered === 'true' ? 'active' : 'inactive'}
            onClick={this.handleAnsweredToggle}>
              Answered Questions
          </span>
        </h1>

        <ul className='questions'>
          {answered === 'true'
            ? Object.values(questions).sort((a, b) => b.timestamp - a.timestamp).filter(question => Object.keys(users[authUser].answers).includes(question.id)).map(question => (
              <QuestionListItem
                key={question.id}
                question={question}
              />
            ))
            : Object.values(questions).sort((a, b) => b.timestamp - a.timestamp).filter(question => !Object.keys(users[authUser].answers).includes(question.id)).map(question => (
              <QuestionListItem
                key={question.id}
                question={question}
              />
            ))
          }
        </ul>
      </section>
    );
  }
}

export default connect(state => ({
  users: state.users,
  questions: state.questions,
  authUser: state.authUser,
}))(QuestionList);
import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import QuestionListItem from './QuestionListItem';

class QuestionList extends Component {
  static propTypes = {
    users: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired,
    authUser: PropTypes.string.isRequired,
  }

  state = {
    answered: false,
  }

  render() {
    const {users, questions, authUser} = this.props;
    // const {answered} = this.state;

    return (
      <div>
        <h1>
          Unanswered Questions
        </h1>
        
        {/* NEXT: Figure out how to pull in unanswered questions; may want to change below function to something like filter questions array by user question IDs or NOT user question IDs */}

        <ul>
          {Object.keys(users[authUser].answers).map(questionID => (
            <QuestionListItem
              key={questionID}
              question={questions[questionID]}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(state => ({
  users: state.users,
  questions: state.questions,
  authUser: state.authUser,
}))(QuestionList);
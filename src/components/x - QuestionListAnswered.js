import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import QuestionListItem from './QuestionListItem';

class QuestionListAnswered extends Component {
  static propTypes = {
    questions: PropTypes.object.isRequired,
  }

  render() {
    const {questions} = this.props;

    return (
      <div>
        <h1>
          <Link to='/'>Unanswered Questions</Link>
          / Answered Questions
        </h1>
        <ul>
          {Object.values(questions).map(question => (
            <QuestionListItem
              key={question.id}
              question={question}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(state => ({
  questions: state.questions,
}))(QuestionListAnswered);
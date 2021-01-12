import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import QuestionListItem from './QuestionListItem';

class QuestionListUnanswered extends Component {
  static propTypes = {
    questions: PropTypes.object.isRequired,
  }

  render() {
    const {questions} = this.props;

    return (
      <div>
        <h1>
          Unanswered Questions / 
          <Link to='/?questions=answered'>Answered Questions</Link>
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
}))(QuestionListUnanswered);
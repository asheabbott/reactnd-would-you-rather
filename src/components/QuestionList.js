import React, {Component} from 'react';
import QuestionListUnanswered from './QuestionListUnanswered';

class QuestionList extends Component {
  render() {
    return (
      <div>Question List
        <QuestionListUnanswered />
      </div>
    );
  }
}

export default QuestionList;
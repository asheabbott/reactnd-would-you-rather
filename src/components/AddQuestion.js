import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import './AddQuestion.css';

class AddQuestion extends Component {
  handleSubmit = () => {

  }

  render() {
    const {authUser} = this.props;

    return (
      <section className='add-question'>
        <div className='headings'>
          <h1 className='page-title'>Ask a Question</h1>
          <h2>Please enter the answer options for your question and click the submit button.</h2>
        </div>
        <div className='question-box'>
          <div className='content'>
          <p className='question-intro'>Would you rather</p>
          <form id='questionInput' onSubmit={this.handleSubmit}>
            <div className='option-input'>
              <input type='text' name='optionOne' placeholder='Option 1' /> or
            </div>
            <div className='option-input'>
              <input type='text' name='optionTwo' placeholder='Option 2' /> ?
            </div>
          </form>
          </div>
          <button type='submit' form='questionInput'>Submit question</button>
        </div>
      </section>
    );
  }
}

export default connect(state => ({
  authUser: state.authUser,
}))(AddQuestion);
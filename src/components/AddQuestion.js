import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {handleAddQuestion} from '../actions/shared';
import './AddQuestion.css';

class AddQuestion extends Component {
  static propTypes = {
    authUser: PropTypes.string.isRequired,
  }

  state = {
    optionOneText: '',
    optionTwoText: '',
    author: this.props.authUser,
  }

  handleChange = event => {
    const value = event.target.value;
    this.setState(state => ({
      ...state,
      [event.target.name]: value,
    }));
  }

  handleSubmit = event => {
    event.preventDefault();

    const {optionOneText, optionTwoText, author} = this.state;
    const {dispatch} = this.props;
    const question = {optionOneText, optionTwoText, author};

    dispatch(handleAddQuestion(question))
      .then(() => {
        this.props.history.push('/');
      });
  }

  render() {
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
              <input 
                type='text' 
                name='optionOneText' 
                placeholder='Option 1'
                onChange = {this.handleChange} 
              /> or
            </div>
            <div className='option-input'>
              <input 
                type='text' 
                name='optionTwoText' 
                placeholder='Option 2' 
                onChange = {this.handleChange} 
              /> ?
            </div>
          </form>
          </div>
          <button 
            type='submit' 
            form='questionInput'>
              Submit question
          </button>
        </div>
      </section>
    );
  }
}

export default connect(state => ({
  authUser: state.authUser,
}))(AddQuestion);
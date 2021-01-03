import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {handleInitialData} from '../actions/shared';
import QuestionList from './QuestionList';

class App extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    const {dispatch} = this.props;
    
    dispatch(handleInitialData());
  }

  render() {
    if (this.props.loading === true) {
      return <h3>Loading</h3>
    }
    
    return (
      <div>
        Hello, world.
        <QuestionList />
      </div>
    );
  }
}

export default connect(state => ({
  loading: state.loading,
}))(App);
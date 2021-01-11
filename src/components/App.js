import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {handleInitialData} from '../actions/shared';
import SignIn from './SignIn';
import Header from './Header';
import QuestionList from './QuestionList';
import Question from './Question';
import './App.css';

class App extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    authUser: PropTypes.string.isRequired,
  }

  componentDidMount() {
    const {dispatch} = this.props;
    
    dispatch(handleInitialData());
  }

  render() {
    const {loading, authUser} = this.props;

    if (loading === true) {
      return (
        <main>
          <p>Loading</p>
        </main>
      );
    }
    
    return (
      <Fragment>
        <Header />
        <main>
          {authUser === ''
            ? <SignIn />
            : <Fragment>
                <Route exact path='/' component={QuestionList} />
                <Route path='/questions/:id' component={Question} />
              </Fragment>}
        </main>
      </Fragment>
    );
  }
}

export default connect(state => ({
  loading: state.loading,
  authUser: state.authUser,
}))(App);
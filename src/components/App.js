import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';
import {handleInitialData} from '../actions/shared';
import SignIn from './SignIn';
import Header from './Header';
import QuestionList from './QuestionList';
import Question from './Question';
import NotFound from './NotFound';
import AddQuestion from './AddQuestion';
import Leaderboard from './Leaderboard';
import 'focus-visible/dist/focus-visible.js';
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
          <div className='loading'>
            <div className='loading-inner'>
              <div className='icon'></div>
              <p>Loading</p>
            </div>
          </div>
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
                <Switch>
                  <Route exact path='/' component={QuestionList} />
                  <Route exact path='/questions/:id' component={Question} />
                  <Route exact path='/add' component={AddQuestion} />
                  <Route exact path='/leaderboard' component={Leaderboard} />
                  <Route component={NotFound} />
                </Switch>
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
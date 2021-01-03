import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleInitialData} from '../actions/shared';

class App extends Component {
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
      </div>
    );
  }
}

export default connect(state => ({
  loading: state.loading,
}))(App);
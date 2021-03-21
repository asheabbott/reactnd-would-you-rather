import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {handleSignIn} from '../actions/authUser';
import './SignIn.css'

class SignIn extends Component {
  static propTypes = {
    users: PropTypes.object.isRequired,
  }

  state = {
    selected: 'placeholder',
  }

  handleChange = event => {   
    this.setState({
      selected: event.target.value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const {dispatch} = this.props;
    const {selected} = this.state;

    dispatch(handleSignIn(selected));
  }

  render() {
    const {users} = this.props;
    const {selected} = this.state;

    return (
      <section className='sign-in'>
        <h1>Sign In</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='user-list'>
            <div className='avatar'>
              <div className='avatar-img' style={{backgroundImage: selected !== 'placeholder' ? `url(${users[selected].avatarURL})` : 'url(/images/avatar-placeholder.svg)'}}></div>
            </div>
            <div className='user-select'>
              <select defaultValue='placeholder' value={this.state.value} onChange={this.handleChange}>
                <option disabled value='placeholder'>Select user</option>
                {Object.entries(users).map(user => (
                  <option key={user[1].id} value={user[1].id}>
                    {user[1].name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <input type="submit" value="Submit" disabled={selected === 'placeholder'} />
        </form>
      </section>
    );
  }
}

export default connect(state => ({
  users: state.users,
}))(SignIn);
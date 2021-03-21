import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './Leaderboard.css';

class Leaderboard extends Component {
  static propTypes = {
    users: PropTypes.object.isRequired,
  }

  render() {
    const {users} = this.props;

    return (
      <section className='leaderboard'>
        <h1>Leaderboard</h1>

        <ul className='board'>
          {Object.values(users).sort((a, b) => (b.questions.length + Object.keys(b.answers).length) - (a.questions.length + Object.keys(a.answers).length)).map((user, index) => {
            const rank = index + 1;
            const avatarURL = user.avatarURL;
            const name = user.name;
            const asked = user.questions.length;
            const answered = Object.keys(user.answers).length;
            const score = asked + answered;

            return (
              <li key={user.id} className='item'>
                <div className='item-inner'>
                  <div className='rank'>
                    <div className='rank-inner'>
                      {rank}
                    </div>
                  </div>
                  <div className='avatar'>
                    <div className='avatar-img' style={{backgroundImage: `url(${avatarURL})`}}></div>
                  </div>
                  <div className='details'>
                    <h2 className='name'>{name}</h2>
                    <p>Questions <span className='no-wrap'>asked: <span className='count'>{asked}</span></span></p>
                    <p>Questions <span className='no-wrap'>answered: <span className='count'>{answered}</span></span></p>
                  </div>
                  <div className='score-box'>
                    <div className='heading'>
                      Score
                    </div>
                    <div className='score'>
                      <div className='score-inner'>
                        {score}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default connect(state => ({
  users: state.users,
}))(Leaderboard);
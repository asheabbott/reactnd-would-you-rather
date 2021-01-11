import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import './LogoNav.css';

class LogoNav extends Component {
  static propTypes = {
    authUser: PropTypes.string.isRequired,
  }

  state = {
    windowSize: window.innerWidth,
    hamburgerMenu: false,
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = event => {
    this.setState({
      windowSize: window.innerWidth,
    }, () => {
      const hamburger = document.querySelector('.hamburger');

      const {windowSize} = this.state;

      if (hamburger && windowSize >= 768) {
        if (hamburger.classList.contains('open')) {
          hamburger.classList.remove('open');
        }
        
        this.setState({
          hamburgerMenu: false,
        });
      }
    });
  }

  handleHamburger = event => {
    const {hamburgerMenu} = this.state;

    event.target.closest('.hamburger').classList.toggle('open');

    this.setState({
      hamburgerMenu: !hamburgerMenu,
    });
  }

  render() {
    const {authUser} = this.props;
    const {hamburgerMenu} = this.state;

    return (
      <div className='logo-nav container'>
        <div className='logo'>
          Would You Rather?
        </div>

        {authUser !== '' && (
          <Fragment>
            <div className='hamburger' onClick={this.handleHamburger}>
              {hamburgerMenu === false ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faTimes} />}
            </div>
            <nav className='main-nav'>
              <Link to='/'>Dashboard</Link>
              <Link to='/add'>New Question</Link>
              <Link to='/leaderboard'>Leaderboard</Link>
            </nav>
          </Fragment>
        )}
      </div>
    );
  }
}

export default connect(state => ({
  authUser: state.authUser,
}))(LogoNav);
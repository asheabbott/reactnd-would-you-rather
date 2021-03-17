import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
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

    event.target.closest('.hamburger').classList.toggle('is-active');

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
          <Link to='/'>
            Would You Rather?
          </Link>
        </div>

        {authUser !== '' && (
          <Fragment>
            <button className='hamburger' aria-label='Main Navigation' aria-controls='navigation' aria-expanded={hamburgerMenu === true ? true : false} onClick={this.handleHamburger}>
              <span className='hamburger-box'>
                <span className='hamburger-inner'></span>
              </span>
            </button> 
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
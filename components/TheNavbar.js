import React, { Component } from 'react';
import Link from 'next/link';
import getConfig from 'next/config';
import Router from 'next/router';
import { toggleContactForm } from '../lib/utility';
import { auth } from '../lib/base';

const headerStyle = {
  borderBottom: '1px solid #3EC6E0'
};

const { publicRuntimeConfig } = getConfig();

class TheNavbar extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      signedIn: false
    };
  }

  signOut = async () => {
    await auth.signOut();
    localStorage.removeItem(publicRuntimeConfig.localStorageUserId);
    if (this._isMounted) {
      this.setState({
        signedIn: false
      });
    }
    Router.push('/');
  };

  toggleMobileMenu() {
    //TODO: close menu on scroll down
    // TODO: I don't like this approach. I need to think in react way
    const navbarBurger = document.querySelector('.navbar-burger');
    const target = navbarBurger.dataset.target;
    const navbarMenu = document.getElementById(target);
    navbarBurger.classList.toggle('is-active');
    navbarMenu.classList.toggle('is-active');
  }

  componentDidMount() {
    this._isMounted = true;
    auth.onAuthStateChanged(user => {
      if (user) {
        // signed in
        if (this._isMounted) {
          this.setState({
            signedIn: true
          });
        }
      }
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <nav
        className="navbar is-transparent is-fixed-top is-dark"
        role="navigation"
        aria-label="main navigation"
        style={headerStyle}
      >
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">
              <h1 className="is-size-3">Therapy Center</h1>
            </a>
          </Link>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarItems"
            onClick={this.toggleMobileMenu}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarItems" className="navbar-menu">
          <div className="navbar-end">
            <Link href="#theLocation">
              <a className="navbar-item">Location</a>
            </Link>
            <Link href="/about">
              <a className="navbar-item">About</a>
            </Link>
            <Link href="/terms">
              <a className="navbar-item">Terms</a>
            </Link>
            <Link href="/faq">
              <a className="navbar-item">FAQ</a>
            </Link>
            <Link href="#">
              <a className="navbar-item" onClick={toggleContactForm}>
                Contact
              </a>
            </Link>
            {this.state.signedIn ? (
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link">MoHo</a>

                <div className="navbar-dropdown">
                  <a className="navbar-item">My profile</a>
                  <hr className="navbar-divider" />
                  <a className="navbar-item" onClick={this.signOut}>
                    <strong>Sign out</strong>
                  </a>
                </div>
              </div>
            ) : (
              <Link href="/signin">
                <a className="navbar-item">Sign in</a>
              </Link>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default TheNavbar;

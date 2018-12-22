import React, { Component } from 'react';
import Link from 'next/link';
import { toggleContactForm } from '../lib/utility';

const headerStyle = {
  borderBottom: '1px solid #3EC6E0'
};

class TheNavbar extends Component {
  toggleMobileMenu() {
    //TODO: close menu on scroll down
    const navbarBurger = document.querySelector('.navbar-burger');
    const target = navbarBurger.dataset.target;
    const navbarMenu = document.getElementById(target);
    navbarBurger.classList.toggle('is-active');
    navbarMenu.classList.toggle('is-active');
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
          </div>
        </div>
      </nav>
    );
  }
}

export default TheNavbar;

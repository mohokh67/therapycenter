import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

const headerStyle = {
  borderBottom: '1px solid #3EC6E0'
};

export default function TheNavBar (props) {

  return(
    <nav
      className="navbar is-transparent is-fixed-top is-dark"
      role="navigation"
      aria-label="main navigation"
      style={headerStyle}
    >
      <div className="navbar-brand">
        <NavLink to="/" className="navbar-item">
            <h1 className="is-size-3">Therapy Center</h1>
        </NavLink>

        <a
          href="/"
          role="button"
          className="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarItems"
          // onClick={this.toggleMobileMenu}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarItems" className="navbar-menu">
        <div className="navbar-end">
          <NavHashLink smooth to="/#theLocation" className="navbar-item" activeClassName="selected">Location</NavHashLink>
          <NavLink to="/about" className="navbar-item" activeClassName="selected">About</NavLink>
          <NavLink to="/terms" className="navbar-item" activeClassName="selected">Terms</NavLink>
          <NavLink to="/faq" className="navbar-item" activeClassName="selected">FAQ</NavLink>
          <Link to="#" className="navbar-item" onClick={props.showContactForm}>Contact</Link>
          { props.authenticated ? (
            <div className="navbar-item has-dropdown is-hoverable">
              <span className="navbar-link">MoHo</span>

              <div className="navbar-dropdown">
                <NavLink to="#" className="navbar-item" activeClassName="selected">My profile</NavLink>
                <hr className="navbar-divider" />
                <NavLink to="#" className="navbar-item" onClick={props.logout}>
                  <strong>Sign out</strong>
                </NavLink>
              </div>
            </div>
          ) : (
            <NavLink to="/signin" className="navbar-item" activeClassName="selected">Sign in</NavLink>
          )}
        </div>
      </div>
    </nav>
  )
}

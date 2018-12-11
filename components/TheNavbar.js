import React, { Component } from 'react';
import Link from 'next/link';

const headerStyle = {
  borderBottom: '1px solid #3EC6E0'
};

class TheNavbar extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', () => {
      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll('.navbar-burger'),
        0
      );

      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
          el.addEventListener('click', () => {
            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
          });
        });
      }
    });
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
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarItems" className="navbar-menu">
          <div className="navbar-end">
            <Link href="#">
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
              <a className="navbar-item">Contact</a>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default TheNavbar;

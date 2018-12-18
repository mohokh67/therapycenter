import React, { Component, Fragment } from 'react';
import Link from 'next/link';

class CalendarView extends Component {
  populateClassName(view) {
    return this.props.view === view ? 'tag is-primary' : 'tag is-light';
  }
  render() {
    return (
      <Fragment>
        <div className="level">
          <div className="level-left" />
          <div className="level-right">
            <Link
              as={`/book/${this.props.title}/weekly`}
              href={`/book?title=${this.props.title}&view=weekly`}
            >
              <a className={this.populateClassName('weekly')}>Weekly</a>
            </Link>

            <Link
              as={`/book/${this.props.title}/fortnight`}
              href={`/book?title=${this.props.title}&view=fortnight`}
            >
              <a className={this.populateClassName('fortnight')}>Fortnight</a>
            </Link>

            <Link
              as={`/book/${this.props.title}/monthly`}
              href={`/book?title=${this.props.title}&view=monthly`}
            >
              <a className={this.populateClassName('monthly')}>Monthly</a>
            </Link>
          </div>
        </div>
        <style jsx>{`
          a {
            margin: 0.2rem;
          }
        `}</style>
      </Fragment>
    );
  }
}

export default CalendarView;

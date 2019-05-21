import React from 'react';
import { Link } from 'react-router-dom';

export default function CalendarView(props) {
  const populateClassName = view => {
    return props.view === view ? 'calendar-view tag is-primary' : 'calendar-view tag is-light';
  }

  return (
    <div className="level">
      <div className="level-left" />
      <div className="level-right">
        <Link
          to={`/book/${props.massageId}/weekly`}
          className={populateClassName('weekly')}>Weekly</Link>

        <Link
          to={`/book/${props.massageId}/fortnight`}
          className={populateClassName('fortnight')}>Fortnight</Link>

        <Link
          to={`/book/${props.massageId}/monthly`}
          className={populateClassName('monthly')}>Monthly</Link>
      </div>
    </div>
  );
}

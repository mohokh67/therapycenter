import Link from 'next/link';
import Router from 'next/router';

export default () => (
  <footer className="footer has-background-grey-dark has-text-white-ter">
    <div className="container">
      <div className="level">
        <div className="level-left">
          <span>
            <address className="with-icon">
              <i className="material-icons">location_on</i>
              174 Gloucester Road, Bristol, BS7 8NU
            </address>
            <a href="tel:01173297893" className="with-icon">
              <i className="material-icons">phone_iphone</i> 0117 329 7893
            </a>
            <a href="tel:07935636185" className="with-icon">
              <i className="material-icons">phone</i> 079 35 6361 85
            </a>
          </span>
        </div>
        <div>
          <span className="with-icon">
            <i className="material-icons">schedule</i> Opening Hours:
          </span>
          <p>Monday – Friday 9 am – 6 pm</p>
          <p>Saturday – Sunday 11 am – 5 pm</p>
        </div>
      </div>
    </div>
  </footer>
);

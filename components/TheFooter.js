import Link from 'next/link';
import Router from 'next/router';

export default () => (
  <footer className="footer has-background-grey-dark has-text-white-ter">
    <div className="container">
      <div className="level">
        <div className="level-left footer__item">
          <span>
            <address>
              <i className="fa fa-map-marker fa-lg" aria-hidden="true" /> 174
              Gloucester Road, Bristol, BS7 8NU
            </address>
            <br />
            <i className="fa fa-phone fa-lg" aria-hidden="true" />
            <a
              href="tel:01173297893"
              className="link pointer has-text-grey-lighter"
            >
              0117 329 7893
            </a>
            <br />
            <i className="fa fa-mobile fa-lg" aria-hidden="true" />
            <a
              href="tel:07935636185"
              className="link pointer has-text-grey-lighter"
            >
              079 35 6361 85
            </a>
          </span>
        </div>
        <div className="level-right footer__item">
          <span>
            Opening Hours:
            <br />
            Monday – Friday 9 am – 6 pm
            <br />
            Saturday – Sunday 11 am – 5 pm
            <br />
          </span>
        </div>
      </div>
    </div>
  </footer>
);

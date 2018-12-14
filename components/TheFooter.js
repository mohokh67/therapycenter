const footerStyle = {
  'padding-bottom': '2rem'
};
export default () => (
  <footer
    className="footer has-background-grey-dark has-text-white-ter"
    style={footerStyle}
  >
    <div className="container">
      <div className="columns">
        <div className="column">
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

        <div className="column">
          <p>Join our mailing list for offers</p>
          <style jsx>{`
            p {
              padding-bottom: 0.4rem;
            }
          `}</style>

          <div className="field is-horizontal">
            <div className="field-body">
              <div className="field">
                <div className="control has-icons-left">
                  <input
                    className="input is-small"
                    type="email"
                    placeholder="Email"
                  />
                  <span className="icon is-small is-left">
                    <i className="material-icons">email</i>
                  </span>
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <button className="button is-primary is-small">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="column">
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

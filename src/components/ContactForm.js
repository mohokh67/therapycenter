import React from 'react';

export default function ContactForm(props) {
  const subscried = () => {
    console.log('subscribed');
  }

  const modalClassNames = props.show ? "modal contact-form-modal is-active" : "modal contact-form-modal";

  return (
    <div className={modalClassNames}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Contact us</p>
          <button
            className="delete"
            aria-label="close"
            onClick={props.hideForm}
          />
        </header>
        <section className="modal-card-body">
          <div className="field">
            <label className="label">Name</label>
            <div className="control has-icons-left">
              <input
                className="input is-small"
                type="text"
                placeholder="Your name"
              />
              <span className="icon is-small is-left">
                <i className="material-icons">perm_identity</i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
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
            <label className="label">Mobile</label>
            <div className="control has-icons-left">
              <input
                className="input is-small"
                type="text"
                placeholder="Mobile number"
              />
              <span className="icon is-small is-left">
                <i className="material-icons">phone_iphone</i>
              </span>
            </div>
          </div>

          <div className="field">
            <label className="label">Message</label>
            <div className="control">
              <textarea
                className="textarea"
                placeholder="Textarea"
                rows="3"
              />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input type="checkbox" onChange={subscried} />
                &nbsp;Add me to mailing list for offers
              </label>
            </div>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link">Send</button>
            </div>
            <div className="control">
              <button className="button is-text" onClick={props.hideForm}>
                Cancel
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

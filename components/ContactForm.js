import React, { Component } from 'react';
import { toggleContactForm } from '../lib/utility';

export default class ContactForm extends Component {
  render() {
    return (
      <div className="modal contact-form-modal">
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Contact us</p>
            <button
              className="delete"
              aria-label="close"
              onClick={toggleContactForm}
            />
          </header>
          <section className="modal-card-body">
            <div class="field">
              <label class="label">Name</label>
              <div class="control has-icons-left">
                <input
                  class="input is-small"
                  type="text"
                  placeholder="Your name"
                />
                <span class="icon is-small is-left">
                  <i class="material-icons">perm_identity</i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control has-icons-left">
                <input
                  class="input is-small"
                  type="email"
                  placeholder="Email input"
                />
                <span class="icon is-small is-left">
                  <i class="material-icons">email</i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Mobile</label>
              <div class="control has-icons-left">
                <input
                  class="input is-small"
                  type="text"
                  placeholder="Mobile number"
                />
                <span class="icon is-small is-left">
                  <i class="material-icons">stay_primary_portrait</i>
                </span>
              </div>
            </div>

            <div class="field">
              <label class="label">Message</label>
              <div class="control">
                <textarea class="textarea" placeholder="Textarea" rows="3" />
              </div>
            </div>

            <div class="field">
              <div class="control">
                <label class="checkbox">
                  <input type="checkbox" checked />
                  &nbsp;Add me to mailing list for offers and newsletter
                </label>
              </div>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button class="button is-link">Send</button>
              </div>
              <div class="control">
                <button class="button is-text" onClick={toggleContactForm}>
                  Cancel
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

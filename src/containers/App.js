import React, { useEffect } from "react";
import { auth } from './../lib/base';
import Routes from "./../components/Routes";

import { connect } from 'react-redux';
import { singout, signin } from '../actions/authActions';
import { showForm, hideForm } from '../actions/contactFormActions';

import TheNavBar from './../components/TheNavbar';
import TheFooter from './../components/TheFooter';
import ContactForm from './../components/ContactForm';


import '../assets/sass/styles.scss'
import '../assets/css/style.css'

function App(props) {

  const logout = async () => {
    await auth.signOut();
    props.signOut();
    localStorage.removeItem(process.env.REACT_APP_LOCALSTORAGE_USER_ID);
    // props.history.push('/');
    // console.log(props)
  };

  useEffect(() => {
    new Promise((resolve, reject) => {
      auth.onAuthStateChanged(user => {
        if (user && !props.auth.authenticated) {
          props.signIn(user);
        }
        resolve();
      });
    })
  }, [props])

  return (
    <div className="site">
      <TheNavBar
        logout={logout}
        authenticated={props.auth.authenticated}
        username={props.auth.username}
        showContactForm={props.showContactForm} />
      <main className="site-content">
        <Routes />
      </main>
      <TheFooter />
      <ContactForm
        show={props.contactForm.visible}
        hideForm={props.hideContactForm} />
    </div>
  );
}


const mapStoreToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => {
      dispatch(singout());
    },
    signIn: user => {
      dispatch(signin(user));
    },
    showContactForm: () => {
      dispatch(showForm());
    },
    hideContactForm: () => {
      dispatch(hideForm());
    }
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(App);
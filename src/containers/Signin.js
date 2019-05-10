import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { auth, firebase } from '../lib/base';
import { signin } from '../actions/authActions';

import { isEmpty } from '../lib/utility';
import { findByField, create } from './../lib/firestoreHelper';



function Signin(props) {
  const localStorageUserId = process.env.REACT_APP_LOCALSTORAGE_USER_ID;

  const authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    auth.signInWithPopup(authProvider).then(result => {
      const authUser = {
        uid: result.user.uid,
        email: result.user.email,
        name: result.user.displayName,
        photo: result.user.photoURL
      };
      props.signin(result.user.uid);
      authHandler(authUser);
    });
  };

  const authHandler = async (authUser) => {
    // check if user exists in users collection
    const foundUser = await findByField({
      collectionName: 'users',
      fieldName: 'uid',
      value: authUser.uid
    });
    if (isEmpty(foundUser)) {
      const createdUser = await create({
        collectionName: 'users',
        document: authUser
      });
      localStorage.setItem(localStorageUserId, createdUser.id);
    } else {
      localStorage.setItem(localStorageUserId, foundUser.id);
    }

    props.history.push('/');

    // findByField({
    //   collectionName: 'users',
    //   fieldName: 'uid',
    //   value: authUser.uid
    // }).then(foundUser => {
    //   if (isEmpty(foundUser)) {
    //     // it is an empty object
    //     // add the user to users collection and go to home page
    //     create({
    //       collectionName: 'users',
    //       document: authUser
    //     }).then(createdUser => {
    //       localStorage.setItem(localStorageUserId, createdUser.id);
    //     });
    //   } else {
    //     // if yes, go to home page
    //     localStorage.setItem(localStorageUserId, foundUser.id);
    //   }
    // }).then(() => {
    //   props.history.push('/')
    // });
  };

  useEffect(() => {
    if(props.auth.authenticate){
      // this is not working
      props.history.push('/')
    } else {
      console.log('not auth')
    }
  });



    return (
      <>
        <div className="container is-fluid">
          <div className="columns is-multiline signin">
            <div className="column is-one-third is-offset-one-third has-text-centered button-container">
              <button
                className="button google is-fullwidth"
                onClick={() => authenticate('Google')}
              >
                <span className="icon">
                  <i className="fab fa-google" />
                </span>
                <span>Login with Google</span>
              </button>

              <button
                className="button facebook is-fullwidth"
                onClick={() => authenticate('Facebook')}
              >
                <span className="icon">
                  <i className="fab fa-facebook" />
                </span>
                <span>Login with Facebook</span>
              </button>
            </div>
          </div>
        </div>
      </>
    );

}


const mapStoreToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => {
  return {
    signin: userId => {
      dispatch(signin(userId));
    }
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Signin);
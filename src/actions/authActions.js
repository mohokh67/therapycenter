// import { auth } from "./../lib/base";
// import { findName } from './../lib/usersCollection';

export function signin(user) {
  return {
      type: 'SIGNIN',
      payload: user
  };
}

export function singout() {
  return {
      type: 'SIGNOUT',
      payload: 0
  };
}

// export function signin(user) {

//   return async dispatch => {
//     const thisUser = await findName(user.uid);
//     console.log(thisUser);
//     const x = {
//       uid: user.uid,
//       displayName: thisUser.name
//     }
//     dispatch({
//       type: 'SIGNIN',
//       payload: x
//     });
//   }
// }

// export function isLoggedIn() {
//   return dispatch => {
//     new Promise((resolve, reject) => {
//       auth.onAuthStateChanged(user => {
//         if (user) {
//           dispatch({
//             type: 'IS_LOGGED_IN',
//             payload: user.uid
//           });
//         } else {
//           dispatch({
//             type: 'IS_LOGGED_IN',
//             payload: 0
//           });
//         }
//         resolve();
//       });
//     })
//   }
// }

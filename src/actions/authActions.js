// import { auth } from "./../lib/base";

export function signin(authUserId) {
  return {
      type: 'SIGNIN',
      payload: authUserId
  };
}

export function singout() {
  return {
      type: 'SIGNOUT',
      payload: 0
  };
}

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

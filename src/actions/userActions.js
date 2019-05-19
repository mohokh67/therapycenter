// import { futureAppointmentsCount, findName } from './../lib/usersCollection';
import { futureAppointmentsCount } from './../lib/usersCollection';
const maximumAppointmentCount = parseInt(process.env.REACT_APP_BOOKING_MAX_NUMBER);

export function isAllowedToBook(userId) {

  return async dispatch => {
    const totalAppointments = await futureAppointmentsCount(userId);
    dispatch({
      type: 'ALLOW_TO_BOOK',
      payload: totalAppointments < maximumAppointmentCount ? true : false
    });
  }
}

export function disallowToBook() {
  return{
    type: 'ALLOW_TO_BOOK',
    payload: false
  }
}

/*
export function totalAppointmentsInFutur(userId) {

  return async dispatch => {
    const totalAppointments = await futureAppointmentsCount(userId);
    dispatch({
      type: 'TOTAL_APPOINTMENTS',
      payload: totalAppointments
    });
  }
}

export function signin(user) {

  return async dispatch => {
    const thisUser = await findName(user.uid);
    console.log(thisUser);
    const x = {
      uid: user.uid,
      displayName: thisUser.name
    }
    dispatch({
      type: 'SIGNIN',
      payload: x
    });
  }
}
*/

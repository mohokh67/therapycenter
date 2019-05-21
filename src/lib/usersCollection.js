import moment from 'moment';
import { firestore } from './base';
import { find } from './firestoreHelper';
import { isEmpty } from './utility';

const collectionName = 'users';
const bookingsCollectionName = 'bookings';


export async function futureAppointmentsCount(id) {

  return new Promise((resolve, reject) => {
    const dateTimeStamp = moment().format('YYYYMMDD');
    firestore
      .collection(bookingsCollectionName)
      .where('userId', '==', id)
      .where('date', '>=', dateTimeStamp)
      .get()
      .then(snapshot => {
        console.log(snapshot.docs.length);
        //console.log(snapshot);
        resolve(snapshot.docs.length);
      });
  });
}

export async function findName(id) {
  const user = await find({
    collectionName,
    id
  });

  if(!isEmpty(user)){
    return user.name;
  }

  return '';
}
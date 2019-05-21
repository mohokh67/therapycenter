import { firestore } from "./base";

const collectionName = "bookings";

export function find({ date, startFrom }) {
  return new Promise((resolve, reject) => {
    firestore
      .collection(collectionName)
      .where("date", "==", date)
      .where("startFrom", "==", startFrom)
      .limit(1)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          resolve(null);
        }

        let data;

        snapshot.forEach(doc => {
          data = {
            id: doc.id,
            ...doc.data()
          };
        });
        resolve(data);
      });
  });
}

export function hasBooked({ date, startFrom }) {
  return new Promise((resolve, reject) => {
    firestore
      .collection(collectionName)
      .where("date", "==", date)
      .where("startFrom", "==", startFrom)
      .limit(1)
      .get()
      .then(snapshot => {
        if (snapshot.empty) {
          resolve(false);
        }
        resolve(true);
      });
  });
}

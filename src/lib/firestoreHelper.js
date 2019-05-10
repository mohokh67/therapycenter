import { firestore } from './base';

export function find({ id, collectionName }) {
  return new Promise((resolve, reject) => {
    firestore
      .collection(collectionName)
      .doc(id)
      .get()
      .then(doc => {
        if (doc.exists) {
          resolve({
            id: doc.id,
            ...doc.data()
          });
        } else {
          resolve({});
        }
      });
  });
}

/*
function findAll(collectionName) {
  const data = [];
  return new Promise((resolve, reject) => {
    firestore
      .collection(collectionName)
      .orderBy('createdAt', 'desc')
      .get()
      .then(documentSet => {
        if (documentSet != null) {
          documentSet.forEach(doc => {
            data.push({
              id: doc.id,
              ...doc.data()
            });
          });
        }
        resolve(data);
      });
  });
}
*/

export function create({ collectionName, document }) {

  return new Promise((resolve, reject) => {
    firestore
    .collection(collectionName)
    .add(document)
    .then(createdDocument => {
      resolve(createdDocument);
    });
  });
}

export function findByField({ collectionName, fieldName, value }) {
  return new Promise((resolve, reject) => {
    firestore
      .collection(collectionName)
      .where(fieldName, '==', value)
      .limit(1)
      .get()
      .then(snapshot => {
        if (snapshot.docs.length === 1) {
          const doc = snapshot.docs[0];
          if (doc.exists) {
            resolve({
              id: doc.id,
              ...doc.data()
            });
          } else {
            resolve({});
          }
        } else {
          resolve({});
        }
      });
  });
}
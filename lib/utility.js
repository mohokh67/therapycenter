import { firebase, firestore, auth } from './base';

function toggleContactForm() {
  console.log('📧 Toggle contact form');
  const contactFormModal = document.querySelector('.contact-form-modal');
  contactFormModal.classList.toggle('is-active');
}

function fetchItem({ resource }) {
  // console.log('🔥‍', `Looking into ${resource}`)
  return new Promise((resolve, reject) => {
    const ref = firebase.database().ref(resource);
    // console.log('URL:', ref.child(id).toString())
    ref.once('value', snapshot => {
      resolve(snapshot.val());
    });
  });
}

function findById({ id, resource }) {
  // console.log('🔥‍', `In ${resource} looking for id: ${id}`)
  return new Promise((resolve, reject) => {
    const ref = firebase.database().ref(resource);
    // console.log('URL:', ref.child(id).toString())
    ref.child(id).once('value', snapshot => {
      resolve(snapshot.val());
    });
  });
}

function fetchItems({ ids, resource }) {
  ids = Array.isArray(ids) ? ids : Object.keys(ids);
  return Promise.all(ids.map(id => fetchItem(id, resource)));
}

function fetchCollectionDocs(collectionName) {
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

function fetchDocumentFromCollection({ id, collectionName }) {
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

function fetchDocumentFromCollectionByFieldName({
  collectionName,
  fieldName,
  value
}) {
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

function isEmpty(obj) {
  return obj.constructor === Object && Object.keys(obj).length === 0;
}

export {
  toggleContactForm,
  fetchItem,
  fetchDocumentFromCollectionByFieldName,
  isEmpty
};

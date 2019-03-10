import { firebase } from './base';

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

export { toggleContactForm, fetchItem };

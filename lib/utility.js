function toggleContactForm() {
  console.log('📧 Toggle contact form');
  const contactFormModal = document.querySelector('.contact-form-modal');
  contactFormModal.classList.toggle('is-active');
}

export { toggleContactForm };

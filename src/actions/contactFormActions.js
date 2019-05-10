export function showForm() {
  return {
      type: 'SHOW_CONTACT_FORM',
      payload: true
  };
}

export function hideForm() {
  return {
      type: 'HIDE_CONTACT_FORM',
      payload: false
  };
}
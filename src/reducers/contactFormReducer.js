const initialState = {
  visible: false
}

const contactFormReducer = (state = initialState, action) => {
  switch(action.type){

    case 'SHOW_CONTACT_FORM':
      state = {
        ...state,
        visible: true
      };
      break;

    case 'HIDE_CONTACT_FORM':
      state = {
        ...state,
        visible: false
      };
      break;

    default:
      break;

  }

  return state;
}

export default contactFormReducer;
const bookingReducer = (state = {}, action) => {
  switch(action.type){

    case 'XX':
      state = {
        ...state,
        authenticated: true,
        authUserId: action.payload
      };
      break;

    default:
      break;

  }

  return state;
}

export default bookingReducer;
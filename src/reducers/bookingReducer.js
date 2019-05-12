const bookingReducer = (state = {}, action) => {
  switch(action.type){

    case 'XX':
      state = {
        ...state,
        authenticated: true,
        userId: action.payload
      };
      break;

    default:
      break;

  }

  return state;
}

export default bookingReducer;
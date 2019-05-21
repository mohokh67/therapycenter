const initialState = {
  totalBooking: 0,
  allowToBook: true
}

const userReducer = (state = initialState, action) => {
  switch(action.type){

    case 'ALLOW_TO_BOOK':
      state = {
        ...state,
        allowToBook: action.payload
      };
      break;

    case 'TOTAL_APPOINTMENTS':
      state = {
        ...state,
        totalBooking: action.payload
      };
      break;

    default:
      break;

  }

  return state;
}

export default userReducer;
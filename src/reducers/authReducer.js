const initialState = {
  userId: 0,
  authenticated: false,
  username: 'Guest'
}

const authReducer = (state = initialState, action) => {
  switch(action.type){

    case 'SIGNIN':
      state = {
        ...state,
        authenticated: true,
        userId: action.payload.uid,
        username: action.payload.displayName
      };
      break;

    case 'SIGNOUT':
      state = {
        ...state,
        authenticated: false,
        userId: 0,
        username: 'Guest'
      };
      break;

    // case 'IS_LOGGED_IN':
    //   state = {
    //     ...state,
    //     authenticated: (action.payload === 0 ? false : true ),
    //     userId: action.payload
    //   };
    //   break;

    default:
      break;

  }

  return state;
}

export default authReducer;
const initialState = {
  authUserId: 0,
  authenticated: false
}

const authReducer = (state = initialState, action) => {
  switch(action.type){

    case 'SIGNIN':
      state = {
        ...state,
        authenticated: true,
        authUserId: action.payload
      };
      break;

    case 'SIGNOUT':
      state = {
        ...state,
        authenticated: false,
        authUserId: 0
      };
      break;

    case 'IS_LOGGED_IN':
      state = {
        ...state,
        authenticated: (action.payload === 0 ? false : true ),
        authUserId: action.payload
      };
      break;

    default:
      break;

  }

  return state;
}

export default authReducer;
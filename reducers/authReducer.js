const initialState = {
  authUserId: 0,
  auth: false
}

const authReducer = (state = initialState, action) => {
  switch(action.type){

    case 'SIGNIN':
      state = {
        ...state,
        auth: true,
        authUserId: action.payload
      };
      break;

    case 'SIGNOUT':
      state = {
        ...state,
        auth: false,
        authUserId: 0
      };
      break;

    default:
      break;

  }

  return state;
}

export default authReducer;
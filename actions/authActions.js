export function signIn(authUserId) {
  return {
      type: 'SIGNIN',
      payload: authUserId
  };
}

export function signOut() {
  return {
      type: 'SIGNOUT',
      payload: 0
  };
}


import { action, observable } from 'mobx';
import { useStaticRendering } from 'mobx-react';

const isServer = !process.browser;
useStaticRendering(isServer);

class AuthStore {
  @observable authId = null;
  @observable loggedIn = false;

  // constructor(isServer, initialData = {}) {
  //   this.lastUpdate =
  //     initialData.lastUpdate != null ? initialData.lastUpdate : Date.now()
  //   this.light = !!initialData.light
  // }

  @action authorise = userId => {
    this.authId = userId;
    this.loggedIn = true;
  };

  @action signout = () => {
    this.authId = null;
    this.loggedIn = false;
  };
}

let authStore = null;

export function initializeAuthStore(initialData) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return new AuthStore(isServer, initialData);
  }
  if (authStore === null) {
    authStore = new AuthStore(isServer, initialData);
  }
  return authStore;
}

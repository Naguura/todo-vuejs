import { createStore } from 'vuex'
import { login } from './modules/login.js';
import { createUser } from './modules/createUser.js';

export const store = createStore({
  modules: {
    login,
    createUser
  }
})
import axios from 'axios';

const state = {
	users: []
}

const actions = {
	addNewUser({ commit }) {
		commit('ADD_USER', )
	},

	async getUserss({ commit }) {
		axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response =>  {
				let users = response.data
				commit('SET_POSTS', users)
			})
			.catch( error => {
				console.log(error)
			})
	}

}

const mutations = {
	ADD_USER(state, newUser) {
		state.users = [...state.users, newUser]
	},

	SET_POSTS(state, users) {
		state.users = users
	}
}

export const createUser = {
  namespaced: true,
  state,
  mutations,
	actions
};
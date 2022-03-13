<template>
  <div class="modal-overlay">
    <div class="modal">
			<form @submit='sendData'>
        <label>Name :</label>
        <input type="text" v-model="user.name">
        <label>UserName :</label>
        <input type="text" v-model="user.userName">
				<label>Email :</label>
        <input type="text" v-model="user.email">
				<label>Street :</label>
        <input type="text" v-model="user.address.street">
				<label>Suite :</label>
        <input type="text" v-model="user.address.suite">
				<label>City :</label>
        <input type="text" v-model="user.address.city">
				<label>Zipcode :</label>
        <input type="text" v-model="user.address.zipcode">
				<label>Lat :</label>
        <input type="text" v-model="user.address.geo.lat">
				<label>Long :</label>
        <input type="text" v-model="user.address.geo.long">
				<label>phone :</label>
        <input type="text" v-model="user.phone">
				<label>website :</label>
        <input type="text" v-model="user.website">
				<label>Company Name :</label>
        <input type="text" v-model="user.company.name">
				<label>catchPhrase :</label>
        <input type="text" v-model="user.company.catchPhrase">
				<label>bs :</label>
        <input type="text" v-model="user.company.bs">
				<input class="button" type="submit" value='save' @click='mapMutation'>
      </form>

			<button class="button" >
				<router-link to='/'>Save and go Back</router-link>
			</button>

    </div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			user: {
        id: this.$store.state.createUser.users.length + 1,
				name: 'Default',
				userName: 'Default',
				email: 'Default',
        address: {
          street: 'Default',
          suite: 'Default',
          city: 'Default',
          zipcode: 'Default',
          geo: {
            lat: 'Default',
            long: 'Default',
          }
        },
				phone: 'Default',
				website: 'Default',
        company: {
          name: 'Default',
          catchPhrase: 'Default',
          bs: 'Default'
        },
			}
		}
	},

  methods: {
    mapMutation(e) {
      let user = this.user
      this.$store.commit('createUser/ADD_USER', user)
      e.preventDefault()
    }
  },

	computed: {
    sendData() {
      return this.$store.state.createUser.users
    }
  }
}
</script>

<style lang="scss" scoped>
	.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  text-align: center;
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  padding: 60px 0;
  border-radius: 20px;
}

button {
  background-color: #ac003e;
  width: 150px;
  height: 40px;
  color: white;
  font-size: 14px;
  border-radius: 16px;
  margin-top: 50px;
}

a {
  all: unset;
}
</style>
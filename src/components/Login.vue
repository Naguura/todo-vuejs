<template>
  <div id="login" class="leftpane">
    <div>
      <h4>
        <div class="leftpane-title">System</div>
      </h4>
    </div>
    <div class="login-form" v-if='$store.state.login.isLogin === false'>
      <div label-for="usernameLabel1">
        <input id="usernameInput"
                type="text"
                name="username"
                v-model="username"
                required
                placeholder="Enter username...">
      </div>
      <div id="exampleInputGroup2"
            label-for="exampleInput2">
        <input id="exampleInput2"
              type="password"
              name="password"
              v-model="password"
              required
              placeholder="Enter password...">
      </div>
    </div>
    <div v-if='$store.state.login.isLogin === false'>
      <button  class='button' @click="doLogin" size="lg">Login</button>
    </div>
    <div v-if='$store.state.login.isLogin === true'>
      <button  @click="doLogout" class='button' size="lg">LogOut</button>
    </div>
  </div>
</template>

<script>
import {  mapActions } from 'vuex'

export default {
	name: 'login-component',

  data: () => ({
    username: "",
    password: "",
  }),

  methods: {
    ...mapActions('login', {login: 'login'}, 'logout', {logout: 'logout'}),
    doLogin() {
      const { username, password } = this;
      if(this.username != "" && this.password != "") {
        this.login({ username, password });
      }else{
        alert('Please fill the text!');
      }
    },

    doLogout() {
      this.$store.dispatch('login/logout')
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  appearance: button;
  background-color: #0054FE;
  border-width: 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif;
  font-size: 100%;
  height: 48px;
  width: 195px;
  left: 0px;
  top: 0px;
  border-radius: 8px;;
}

.leftpane {
  position: absolute;
  width: 245px;
  height: 716px;
  left: -3px;
  top: 0px;

  background: #FFFFFF;
  box-shadow: 4px 0px 4px rgba(43, 45, 55, 0.01);
}

.login-form {
  padding-top: 5px;
}
</style>
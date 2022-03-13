<template>
  <div v-if='$store.state.login.isLogin === true' class="adduser-pane">
    <button class="button" type="button" @click="addNewUser">
      <router-link to='/CreateUser'>Add User</router-link>
    </button>

</div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'add-user',

  setup() {
    const modalActive = ref(true);
    const toggleModal = () => {
      modalActive.value = !modalActive.value;
    };
    return { modalActive, toggleModal };
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

.adduser-pane {
  width: 72%;
  height: 100%;
  position: relative;
  float: right;
  padding: 10px;
  margin-bottom: 5px;
  border-collapse: collapse;
}

a {
  all: unset;
}
</style>


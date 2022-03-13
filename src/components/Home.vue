<template>
  <div class="main">
    <Header/>
    <Login/>
    <add-user/>
    <base-users/>
  </div>
</template>

<script>
import Header from './Header.vue'
import Login from './Login.vue'
import AddUser from './createUser/AddUser.vue'
import BaseUsers from './users/BaseUsers.vue'

export default {
  name: 'home-page',
  components: {
    Header,
    AddUser,
    Login,
    BaseUsers
  }
}
</script>

<style lang="scss" scoped>
</style>
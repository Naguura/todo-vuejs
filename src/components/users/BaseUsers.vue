<template>
  <div class="rightpane card" v-if='$store.state.login.isLogin === true'>
    <users/>
  </div>
</template>

<script>
import Users from './Users.vue'

export default {
  name: 'base-users',
  components: {
    Users
  }
}
</script>

<style lang="scss" scoped>

.rightpane {
  width: 72%;
  height: 100%;
  position: relative;
  float: right;
  padding: 10px;
  border-collapse: collapse;
}

.card {
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
}
</style>
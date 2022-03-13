<template>
  <div>
    <div>
      <h1 class='title'>Users</h1>
    </div>
    <div class="user-item content-header">
        <div>Name</div>
        <div>UserName</div>
        <div>email</div>
        <div>Address</div>
        <div>Company</div>
        <div>Options</div>
      </div>
    <div v-for='user in users' :key="user.id">
      <User :user="user"/>
    </div>
  </div>
</template>

<script>
import User from './UserItem.vue'

export default {
  name: 'users-item',
  data(){
    return {
      testArray: []
    }
  },
  components: {
    User
  },

  async created(){
    this.$store.dispatch('createUser/getUserss')
  },

  watch: {
    users (newCount, oldCount) {
      return newCount.length <= oldCount.length ? this.testArray = oldCount : ''
    }
  },

  computed: {
    users() {
      return this.$store.state.createUser.users
    }
  }
}
</script>

<style lang="scss" scoped>
  .user-item {
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    animation-duration: 0.3s;
  }

  .content-header{
    font-weight: bold;
  }

.title {
  /*position: absolute;*/
  height: 24px;
  left: 0%;
  right: 89.13%;
  top: calc(50% - 24px/2 + 0.09px);

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 24px;
  /* identical to box height, or 160% */

  color: #20253A;
}
</style>
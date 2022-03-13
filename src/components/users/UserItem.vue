<template>
  <div class='todo-item'>
    <span> {{ user.name }} </span>
    <span> {{ user.username }} </span>
    <span> {{ user.email }} </span>
    <span> {{ completeAdress(user) }} </span>
    <span> {{ completeCompany(user) }} </span>
    <div>
      <router-link :to="{ name: 'UserTodos', params: { id: user.id, name: user.name }}">View ToDos</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'user-item',
  props: ['user'],

  methods: {
    completeAdress(user){
      let address = user.address
      return `${address.street}, ${address.suite} - ${address.city}`
    },
    completeCompany(user){
      return `${user.company.name}`
    }
  }
}
</script>

<style>
  .todo-item {
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    animation-duration: 0.3s;
  }
</style>
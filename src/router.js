import { createRouter, createWebHistory } from "vue-router";
import BaseUsers from '@/components/users/BaseUsers.vue'
import Users from '@/components/users/Users.vue'
import UserTodos from '@/components/users/UserTodos.vue'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import CreateUser from '@/components/createUser/CreateUser.vue'


const routes = [
  { path: '/base-users', name: 'BaseUsers', component: BaseUsers },
  { path: '/users', name: 'Users', component: Users },
  { path: '/user-todos/:id', name: 'UserTodos', component: UserTodos, props: true },
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/CreateUser', name: 'CreateUser', component: CreateUser },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router

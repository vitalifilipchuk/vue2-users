<template>
  <div id="app">
    <Header @logout-user="logoutUser" :isLoggedIn="isLoggedIn" />
    <router-view @login-user="loginUser" @register-user="registerUser" @logout-user="logoutUser" :users="users" />
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
      isLoggedIn: false,
      users: []
    }
  },
  mounted() {
    if (localStorage.currentLoggedUser) {
      this.isLoggedIn = true
    }
    if (localStorage.users) {
      this.users = JSON.parse(localStorage.getItem("users"))
    }
  },
  methods: {
    logoutUser() {
      localStorage.removeItem('currentLoggedUser')
      this.isLoggedIn = false
      this.$router.push({ name: 'Home' })
    },
    loginUser(name) {
      localStorage.setItem('currentLoggedUser', name)
      this.isLoggedIn = true
      this.$router.push({ name: 'Account' })
    },
    registerUser(user) {
      this.users.push({name: user.name, password: user.password})
      localStorage.setItem('users',JSON.stringify(this.users))
      localStorage.setItem('currentLoggedUser', user.name)
      this.isLoggedIn = true
      this.$router.push({ name: 'Account' })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.container {
  max-width: 1000px;
  padding: 0 20px;
  margin: 0 auto;
}

input.error {
  border: 1px solid red;
}
</style>

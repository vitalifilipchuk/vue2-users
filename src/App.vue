<template>
  <div id="app">
    <Header :isLoggedIn="isLoggedIn" />
    <router-view/>
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
      loggedIn: false
    }
  },
  computed: {
    isLoggedIn: function() {
      if (localStorage.getItem("currentLoggedUser")) {
        return true
      }
      else {
        return false
      }
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

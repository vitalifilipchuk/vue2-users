<template>
  <div class="account">
    <div class="container">
      <h1>Особистий кабінет</h1>
      <Logout @logout-user="$emit('logout-user')" :isLoggedIn="isLoggedIn" v-if="isLoggedIn" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Account',
  components: {
  }
}
</script>

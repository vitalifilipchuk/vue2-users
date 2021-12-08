<template>
  <div class="home">
    <div v-if="users.length > 0">
      <div :key="user.name" v-for="user in users">
        {{ user.name }}
      </div>
    </div>
    <div v-if="users.length === 0">
      <div>
        test
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  props: {
    users: Array
  }
}
</script>

<template>
  <div class="home">
    <div class="container">
      <div v-if="users.length > 0">
        <div :key="user.name" v-for="user in users">
          {{ user.name }}
        </div>
      </div>
      <div v-if="users.length === 0">
        <div>
          <Button @btn-click="showPopup" :btnClass="'login-btn'" :text="'Зареєструватися'" />
        </div>
        <RegisterPopup @close-popup="closePopup" @register-user="emitUser" :popupActive="popupActive" />
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Button from '../components/Button'
import RegisterPopup from '../components/RegisterPopup'

export default {
  name: 'Home',
  data() {
    return {
      popupActive: false
    }
  },
  props: {
    users: Array
  },
  components: {
    Button,
    RegisterPopup
  },
  methods: {
    showPopup() {
      this.popupActive = true
    },
    closePopup() {
      this.popupActive = false
    },
    emitUser(user) {
      this.$emit('register-user', user)
    }
  }
}
</script>

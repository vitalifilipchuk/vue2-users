<template>
  <div class="home">
    <div class="container">
      <div class="dashboard" v-if="users.length > 0">
        <div class="dashboard__item" :key="user.name" v-for="user in users">
          {{ user.name }}
        </div>
      </div>
      <div v-if="users.length === 0">
        <p>Не створено жодного користувача.</p>
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

<style>
.dashboard {
  padding: 16px 12px;
  border: 2px solid #00a1e4;
  border-radius: 10px;
}

.dashboard__item {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 6px;
}

.dashboard__item:last-child {
  margin-bottom: 0;
}
</style>

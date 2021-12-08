<template>
  <div class="container">
    <div class="registration">
      <h1>Registration Form</h1>
      <RegistrationForm @register-user="emitUser" />
    </div>
  </div>
</template>

<script>
import RegistrationForm from '../components/RegistrationForm'

export default {
  name: 'Registration',
  components: {
    RegistrationForm
  },
  methods: {
    emitUser(user) {
      this.$emit('register-user', user)
    }
  }
}
</script>

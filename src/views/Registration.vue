<template>
  <div class="container">
    <div class="registration">
      <h1>Registration Form</h1>
      <RegistrationForm 
        @registerUser="user => this.$emit('registerUser', user)" 
      />
    </div>
  </div>
</template>

<script>
import RegistrationForm from '../components/RegistrationForm'

export default {
  name: 'Registration',
  components: {
    RegistrationForm
  }
}
</script>

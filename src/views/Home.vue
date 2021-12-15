<template>
  <div class="home">
    <div class="container">
      <div 
        class="dashboard" 
        v-if="users.length > 0"
      >
        <div 
          class="dashboard__item" 
          :key="user.name" 
          v-for="user in users"
        >
          {{ user.name }}
        </div>
      </div>
      <div v-if="users.length === 0">
        <p>Не створено жодного користувача.</p>
        <div>
          <Button 
            class="login-btn" 
            :text="'Зареєструватися'" 
            @click.native="showPopup"  
          />
        </div>
        <RegisterPopup 
          :popupActive="popupActive" 
          @closePopup="closePopup" 
          @registerUser="user => this.$emit('registerUser', user)" 
        />
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
  components: {
    Button,
    RegisterPopup
  },
  props: {
    users: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      popupActive: false
    }
  },
  methods: {
    showPopup() {
      this.popupActive = true
    },
    closePopup() {
      this.popupActive = false
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

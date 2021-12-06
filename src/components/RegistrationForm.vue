<template>
    <form 
    @submit.prevent="validateForm" 
    class="form registration-form"
    >
        <div class="form__row">
            <input 
            type="text" 
            v-model="user.name" 
            name="name"
            :class="{error: loginError}"
            />
        </div>
        <div class="form__row">
            <input 
            type="text" 
            v-model="user.password" 
            name="password"
            :class="{error: pwdError}"
            />
        </div>
        <div class="form__row">
            <input 
            type="text" 
            v-model="user.repeatpwd" 
            name="repeatpwd"
            :class="{error: repeatpwdError}"
            />
        </div>
        <input type="submit" value="Регістрація" class="btn btn--block">

        <div class="form__errors" v-if="errors.length">
            <ul>
                <li v-for="error in errors">{{ error }}</li>
            </ul>
        </div>
    </form>
</template>

<script>
export default {
    name: 'RegistrationForm',
    data() {
        return {
            loginError: false,
            pwdError: false,
            repeatpwdError: false,
            errors: [],
            user: {
                name: '',
                password: '',
                repeatpwd: ''
            }
        }
    },
    methods: {
        validateForm() {
            if (!this.user.name) {
                this.errors.push('Потрібно вказати логін!')
                this.loginError = true
            }

            if (this.user.name.length < 3) {
                this.errors.push('Логін повинен бути довжиною 4 символи або більше')
                this.loginError = true
            }

            if(!this.user.password) {
                this.errors.push('Потрібно вказати пароль!')
                this.pwdError = true
            }

            if(this.user.password < 5) {
                this.errors.push('Пароль повинен бути довжиною 6 символів або більше')
                this.pwdError = true
            }
        }
    }
}
</script>

<style>
</style>
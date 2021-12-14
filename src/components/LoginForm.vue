<template>
    <form 
        class="form login-form"
        @submit.prevent="submitHandler" 
    >
        <div class="form__row">
            <input 
            type="text" 
            v-model="name" 
            name="name"
            placeholder="Логін"
            :class="{error: loginError || (errors.name && errors.name.length)}"
            />
        </div>
        <div class="form__row">
            <input 
            type="password" 
            v-model="password" 
            name="password"
            placeholder="Пароль"
            :class="{error: pwdError || (errors.password && errors.password.length)}"
            />
        </div>
        <input type="submit" value="Увійти" class="btn btn--block login-btn">

        <div 
            class="form__errors" 
            v-if="!errors.formIsValid"
        >
            <ul>
                <li v-for="error in errors.name">{{ error }}</li>
                <li v-for="error in errors.password">{{ error }}</li>
            </ul>
        </div>
    </form>
</template>

<script>
import validationMixin from './mixins/validationMixin'

export default {
    name: 'LoginForm',
    mixins: [validationMixin],
    data() {
        return {
            errors: {},
            name: '',
            password: '',
            pwdError: false,
            loginError: false
        }
    },
    methods: {
        submitHandler() {
            this.pwdError = false
            this.loginError = false

            this.errors = this.validateForm({name: this.name, password: this.password})

            console.log(this.errors)

            if (this.errors.formIsValid) {
                let usersData = JSON.parse(localStorage.getItem("users"))
                let findExistingUser = usersData.filter(user => user.name === this.name)
                if (findExistingUser.length) {
                    if (findExistingUser[0].password === this.password) {
                        this.$emit('login-user', this.name)
                    }
                    else {
                        this.errors.push('Неправильно вказаний пароль')
                        this.pwdError = true
                    }
                }
                else {
                    this.errors.push('Користувача з таким логіном не існує')
                    this.loginError = true
                }

                

            }
        }
    }
}
</script>

<style>
</style>
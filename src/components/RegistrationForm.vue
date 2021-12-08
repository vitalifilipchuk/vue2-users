<template>
    <form 
    @submit.prevent="submitHandler" 
    class="form registration-form"
    >
        <div class="form__row">
            <input 
            type="text" 
            v-model="name" 
            name="name"
            placeholder="Логін"
            :class="{error: loginError}"
            />
        </div>
        <div class="form__row">
            <input 
            type="password" 
            v-model="password" 
            name="password"
            placeholder="Пароль"
            :class="{error: pwdError}"
            />
        </div>
        <div class="form__row">
            <input 
            type="password" 
            v-model="confirmPassword" 
            name="confirmPassword"
            placeholder="Повторіть пароль"
            :class="{error: confirmPasswordError}"
            />
        </div>
        <input type="submit" value="Реєстрація" class="btn btn--block">

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
            confirmPasswordError: false,
            alreadyExistError: false,
            errors: [],
            name: '',
            password: '',
            confirmPassword: ''
        }
    },
    methods: {
        submitHandler() {
            this.loginError = false
            this.pwdError = false
            this.confirmPasswordError = false
            this.alreadyExistError = false

            if (!this.name) {
                this.errors.push('Потрібно вказати логін!')
                this.loginError = true
            }

            if (this.name.length < 3) {
                this.errors.push('Логін повинен бути довжиною 3 символи або більше')
                this.loginError = true
            }

            if(!this.password) {
                this.errors.push('Потрібно вказати пароль!')
                this.pwdError = true
            }

            if(this.password.length < 5) {
                this.errors.push('Пароль повинен бути довжиною 5 символів або більше')
                this.pwdError = true
            }

            if (this.password !== this.confirmPassword) {
                this.errors.push('Впевніться, що правильно ввели повторний пароль')
                this.confirmPasswordError = true
            }

            if (!(this.loginError || this.pwdError || this.confirmPasswordError)) {
                let usersData = JSON.parse(localStorage.getItem("users"))
                if (usersData === null) {
                    let newUser = {name: this.name, password: this.password}
                    this.$emit('register-user', newUser)
                }
                else {
                    let findExistingUser = usersData.filter(user => user.name === this.name)
                    if (findExistingUser.length) {
                        this.errors.push('Користувач з таким логіном вже існує!')
                        this.alreadyExistError = true
                        this.loginError = true
                    }
                    else {
                        let newUser = {name: this.name, password: this.password}
                        this.$emit('register-user', newUser)
                    }
                }
            }
        }
    }
}
</script>

<style>
</style>
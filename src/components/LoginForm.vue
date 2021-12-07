<template>
    <form 
    @submit.prevent="submitHandler" 
    class="form login-form"
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
        <input type="submit" value="Увійти" class="btn btn--block">

        <div class="form__errors" v-if="errors.length">
            <ul>
                <li v-for="error in errors">{{ error }}</li>
            </ul>
        </div>
    </form>
</template>

<script>
export default {
    name: 'LoginForm',
    data() {
        return {
            loginError: false,
            pwdError: false,
            errors: [],
            name: '',
            password: '',
            repeatpwd: ''
        }
    },
    methods: {
        submitHandler() {
            this.loginError = false
            this.pwdError = false

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

            if (!(this.loginError || this.pwdError)) {
                let usersData = JSON.parse(localStorage.getItem("users"))
                let findExistingUser = usersData.filter(user => user.name === this.name)
                if (findExistingUser.length) {
                    if (findExistingUser[0].password === this.password) {
                        localStorage.setItem('currentLoggedUser', this.name)
                        this.$router.push({ name: 'Account' })
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
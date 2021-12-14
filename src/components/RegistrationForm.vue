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
import validationMixin from './mixins/validationMixin';

export default {
    name: 'RegistrationForm',
   // mixins: ['validationMixin'],
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
.form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.form__row {
    max-width: 420px;
    width: 100%;
    margin-bottom: 20px;
}
.form__row input {
    width: 100%;
    background: #fefefe;
    line-height: 24px;
    font-size: 16px;
    border-radius: 7px;
    padding: 18px 23px 18px 16px;
    height: 60px;
    border: 1px solid #c3c3c3;
    box-shadow: 0 2px 20px rgba(0,114,162,.07);
}

input.error {
  border: 1px solid red;
}

.form__row input.error {
  border: 1px solid red;
}

.form__errors {
    color: red;
}

.form .btn {
    max-width: 320px;
}
</style>
<template>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <router-link to="/">Головна</router-link>
                <router-link v-if="!isLoggedIn" to="/login">Увійти</router-link>
                <router-link v-if="!isLoggedIn" to="/registration">Реєстрація</router-link>
                <router-link v-if="isLoggedIn" to="/account">Особистий кабінет</router-link>
                <Logout v-if="isLoggedIn" />
            </div>
        </div>
    </header>
</template>

<script>
import Logout from '../components/Logout'

export default {
    name: 'Header',
    props: ['isLoggedIn'],
    components: {
        Logout
    }
}
</script>

<style>

</style>
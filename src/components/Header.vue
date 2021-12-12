<template>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <router-link to="/">Головна</router-link>
                <router-link v-if="!isLoggedIn" to="/login">Увійти</router-link>
                <router-link v-if="!isLoggedIn" to="/registration">Реєстрація</router-link>
                <router-link v-if="isLoggedIn" to="/account">Особистий кабінет</router-link>
                <Button @btn-click="$emit('logout-user')" :btnClass="'logout-btn'" :text="'Вийти'" :isLoggedIn="isLoggedIn" v-if="isLoggedIn" />
            </div>
        </div>
    </header>
</template>

<script>
import Button from '../components/Button'

export default {
    name: 'Header',
    props: ['isLoggedIn'],
    components: {
        Button
    }
}
</script>

<style>
    .header {
        padding: 20px 0;
    }
    .header__inner {
        display: flex;
        align-items: center;
    }

    .header__inner > :first-child {
        margin-right: auto;
    }

    .header__inner > :last-child {
        margin-right: 0;
    }

    .header__inner a {
        display: inline-block;
        margin-right: 15px;
        color: #000;
        font-size: 18px;
        font-weight: 600;
        transition: 0.4s;
    }

    .header__inner a:hover {
        color: #00a1e4;
    }
</style>
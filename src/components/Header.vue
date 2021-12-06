<template>
    <header class="header">
        <div class="container">
            <div class="header__inner">
                <router-link to="/">Головна</router-link>
                <router-link to="/login">Увійти</router-link>
                <router-link to="/registration">Реєстрація</router-link>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',

}
</script>

<style>

</style>
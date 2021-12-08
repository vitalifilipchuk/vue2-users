<template>
    <div 
    @click="logout"
    class="logout-btn btn"
    >
    Вийти
    </div>
</template>

<script>
export default {
    name: 'Logout',
    data() {
        return {

        }
    },
    methods: {
        logout() {
            this.$emit('logout-user')
            // localStorage.removeItem('currentLoggedUser')
            // this.$router.push({ name: 'Home' })
        }
    }
}
</script>

<style>
</style>
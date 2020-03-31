<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/dev.jpg">
        <MainComponent msg="Welcome to Goralex"/>
    </div>
</template>

<script>
    import MainComponent from './components/MainComponent.vue'

    export default {
        name: 'app',
        components: {
            MainComponent
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>

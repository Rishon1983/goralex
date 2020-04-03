<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/dev.jpg">
        <MainComponent/>
        <DeleteButtonComponent/>
    </div>
</template>

<script>
    import MainComponent from './components/MainComponent'
    import DeleteButtonComponent from './components/DeleteButtonComponent'

    export default {
        name: 'app',
        components: {
            MainComponent,
            DeleteButtonComponent
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

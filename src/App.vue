<template>
    <div id="app">
        <HeaderComponent/>
        <MainNavBarComponent/>
        <!-- route outlet -->
        <!-- component matched by the route will render here -->
        <router-view></router-view>
    </div>
</template>

<script>

    import MainNavBarComponent from "./components/MainNavBarComponent";
    import HeaderComponent from "./components/HeaderComponent";

    export default {
        name: 'app',
        components: {
            HeaderComponent,
            MainNavBarComponent
        }
    }
</script>

<style lang="scss">
    @font-face {
        font-family: Roboto;
        src: url('fonts/roboto/Roboto-Regular.ttf');
    }

    @font-face {
        font-family: Gotu;
        src: url('fonts/gotu/Gotu-Regular.ttf');
    }

    @font-face {
        font-family: Lobster;
        src: url('fonts/lobster/Lobster-Regular.ttf');
    }

    html, body {
        padding: 0;
        margin: 0;
    }

    #app {
        /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
        font-family: Roboto, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;

        div, input, button {
            box-sizing: border-box;
        }
    }
</style>

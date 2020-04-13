<template>
    <div v-if="isShowBackdrop" id="backdrop" class="backdrop-component page-section">
        <div class="container"></div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "BackdropComponent",
        computed: {
            ...mapState({
                isShowBackdrop: state => state.main.isShowBackdrop
            })
        }
    }
</script>

<style lang="scss" scoped>
    #backdrop.backdrop-component {
        .container {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1000;
            width: 100vw;
            height: 100vh;
            background-color: #000;
            opacity: .5;
        }
    }
</style>
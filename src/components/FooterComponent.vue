<template>
    <div id="footer" class="footer-component">
        <div>Copyright © GorAlex {{currentYear}}</div>
    </div>
</template>

<script>
    export default {
        name: "FooterComponent",
        computed: {
            currentYear: () => {
                return new Date().getFullYear();
            }
        }
    }
</script>

<style lang="scss" scoped>

    #footer {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 55px;
        color: #ffffff;
        background-color: #25242c;
    }

    /*media*/
    @media screen and (max-width: 1200px) {
    }

    @media screen and (max-width: 1000px) {
    }

    @media screen and (max-width: 770px) {
    }
</style>
<template>
    <section id="main-header" class="header">
        <div @click="activeHome" class="header-text-container">
            <router-link to="/" tag="div" class="header-text">GA</router-link>
        </div>
    </section>
</template>

<script>
    import routes from "../routes";

    export default {
        name: "HeaderComponent",
        data() {
            return {
                backgroundImg: ""
            };
        },
        methods: {
            activeHome() {
                routes.forEach(oneRoute => {
                    oneRoute.tags.forEach(tag => {
                        tag.active = false;
                    })
                })
            }
        }

    }
</script>

<style lang="scss" scoped>

    #main-header.header {
        display: flex;
        align-items: center;
        height: 40vh;
        background-color: #ffffff;
        color: #fff;
        background-image: url("../assets/headerImgBig.jpg");
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-position: center center;
        background-size: cover;

        .header-text {
            display: none;
            font-family: 'Lobster', Lobster, Arial, sans-serif;
            color: #bdbdbd;
        }
    }

    /*media*/
    @media screen and (max-width: 1200px) {
    }

    @media screen and (max-width: 1000px) {
    }

    @media screen and (max-width: 770px) {
        #main-header.header {
            height: 20vh;

            .header-text {
            }
        }
    }
</style>
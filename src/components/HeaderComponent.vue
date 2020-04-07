<template>
    <div class="header">
        <div class="logo"></div>
        <div @click="activeHome" class="header-text-container">
            <router-link to="/" tag="div" class="header-text" data-text="gorALeX">gorALex</router-link>
        </div>
    </div>
</template>

<script>
    import routes from "../routes";

    export default {
        name: "HeaderComponent",
        data() {
            return {
                backgroundImg: ""
            }
        },
        methods: {
            activeHome() {
                routes.forEach(oneRoute => {
                    oneRoute.tags.forEach(tag => {
                        tag.active = false
                    })
                })
            }
        }

    }
</script>

<style lang="scss" scoped>

    .header {
        display: flex;
        align-items: center;
        height: 500px;
        background-color: #ffffff;
        color: #fff;
        background-image: url("../assets/headerImg.jpg");
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-position: center center;
        background-size: cover;

        .header-text {
            color: white; /* Fallback: assume this color ON TOP of image */
            /*background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRuVFILgW3IkpYAh3-q12oKmtEjL3PIwrBYySeMAo4hTOkwkjk8&usqp=CAU") no-repeat;*/
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
</style>
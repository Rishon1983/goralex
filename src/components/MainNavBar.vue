<template>
    <div class="main-nav-bar">
        <!-- use router-link component for navigation. -->
        <!-- specify the link by passing the `to` prop. -->
        <!-- <router-link> will be rendered as an `<a>` tag by default -->
        <div v-for="(oneRoute, index) in displayRoutes" :key="index" class="one-route">
            <div @click="resetTags" class="main-nav-bar-option-container">
                <router-link v-if="oneRoute.tags.length === 0" :to="oneRoute.path" tag="div"
                             class="main-nav-bar-option">
                    {{oneRoute.name}}
                </router-link>
            </div>
            <div v-for="(oneTag, index) in oneRoute.tags" :key="index" class="sub-nav-bar-option-container"
                 @click="activeTag(oneRoute.tags, index)">
                <router-link :to="oneRoute.path" :class="{active: oneTag.active}" tag="div" class="sub-nav-bar-option">
                    {{oneTag.name}}
                </router-link>
            </div>

        </div>
    </div>
</template>

<script>
    import routes from "../routes";

    export default {
        name: "MainNavBar",
        data() {
            return {
                displayRoutes: []
            }
        },
        computed: {},
        methods: {
            activeTag(tags, activeIndex) {
                tags.forEach((tag, index) => {
                    if (index === activeIndex) {
                        tag.active = true
                    } else {
                        tag.active = false
                    }
                })
            },
            resetTags() {
                this.displayRoutes.forEach(oneRoute => {
                    oneRoute.tags.forEach(tag => {
                        tag.active = false
                    })
                })
            }
        },
        created() {
            this.displayRoutes = routes.filter(route => {
                return route.name !== '404'
            });
        }
    }
</script>

<style lang="scss" scoped>
    .main-nav-bar {
        position: sticky;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 55px;
        width: 100%;
        background-color: #25242c;
        list-style-type: none;
        padding: 0;
        margin: 0;
        color: #ffffff;

        .one-route {
            display: flex;
            height: 100%;

            .main-nav-bar-option {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                padding: 0 15px;

                a {
                    text-decoration: none;
                }

                &.router-link-exact-active {
                    background-color: #000000;
                    color: #ffffff;
                }

                &:not(.router-link-exact-active) {
                    &:hover {
                        cursor: pointer;
                        background-color: #d9d9d9;
                        color: #000000;
                    }
                }
            }

            .sub-nav-bar-option-container {
                display: flex;

                .sub-nav-bar-option {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                    padding: 0 15px;
                    cursor: pointer;

                    &.active {
                        background-color: #000000;
                        color: #ffffff;
                    }

                    &:not(.active) {
                        &:hover {
                            cursor: pointer;
                            background-color: #d9d9d9;
                            color: #000000;
                        }
                    }
                }
            }

        }
    }
</style>
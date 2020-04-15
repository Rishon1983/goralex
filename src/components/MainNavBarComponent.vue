<template>
    <div id="main-nav-bar" class="main-nav-bar-component">
        <div class="container">
            <div @click="activeRoute()" class="header-text-container">
                <router-link to="/" tag="div" class="header-text" data-text="gorALeX">GorAlex</router-link>
            </div>
            <div @click="isOpenMenu = !isOpenMenu" class="display-route">
                <font-awesome-icon v-if="!isOpenMenu" class="icon" :icon="['fas', 'chevron-circle-down']"/>
                <font-awesome-icon v-if="isOpenMenu" class="icon" :icon="['fas', 'chevron-circle-up']"/>
                <div class="text">{{selectedTagName}}</div>
            </div>
            <div class="menu" :class="{hide: !isOpenMenu}">
                <!-- use router-link component for navigation. -->
                <!-- specify the link by passing the `to` prop. -->
                <!-- <router-link> will be rendered as an `<a>` tag by default -->
                <div v-for="(oneRoute, index) in displayRoutes" :key="index" class="one-route">
                    <div @click="activeRoute(oneRoute)" class="main-nav-bar-option-container">
                        <router-link v-if="oneRoute.tags.length === 0" :to="oneRoute.path" tag="div"
                                     class="main-nav-bar-option one-option">
                            {{oneRoute.name}}
                        </router-link>
                    </div>
                    <div v-for="(oneTag, index) in oneRoute.tags" :key="index" class="sub-nav-bar-option-container"
                         @click="activeTag(oneRoute.tags, index)">
                        <router-link :to="oneRoute.path" :class="{active: oneTag.active}" tag="div"
                                     class="sub-nav-bar-option one-option">
                            {{oneTag.name}}
                        </router-link>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import routes from "../routes";

    export default {
        name: "MainNavBarComponent",
        data() {
            return {
                displayRoutes: [],
                selectedTagName: 'GorAlex',
                isOpenMenu: false
            };
        },
        computed: {},
        methods: {
            activeTag(tags, activeIndex) {
                tags.forEach((tag, index) => {
                    if (index === activeIndex) {
                        tag.active = true;
                        this.selectedTagName = tag.name;
                        document.getElementById(tag.path).scrollIntoView({behavior: "smooth"});
                    } else {
                        tag.active = false;
                    }
                });
                this.isOpenMenu = false;
            },
            resetTags() {
                this.displayRoutes.forEach(oneRoute => {
                    oneRoute.tags.forEach(tag => {
                        tag.active = false;
                    })
                });
            },
            activeRoute(route = this.displayRoutes[0]) {
                this.resetTags();
                this.selectedTagName = route.name;
                this.isOpenMenu = false;
                document.getElementById('app').scrollIntoView({behavior: "smooth"});
            },
            handleScroll() {
                let pageOffset = window.pageYOffset || document.documentElement.scrollTop;
                if (pageOffset === 0) {
                    this.resetTags();
                    this.selectedTagName = 'GorAlex';
                } else {
                    let pageSections = document.getElementsByClassName('page-section');
                    for (let pageSection of pageSections) {
                        if (pageSection.offsetTop <= pageOffset + 55) {
                            const id = pageSection.getAttribute('id');

                            this.displayRoutes.forEach(oneRoute => {
                                oneRoute.tags.forEach(tag => {
                                    if (tag.path === id) {
                                        tag.active = true;
                                        this.selectedTagName = tag.name;
                                    } else {
                                        tag.active = false;
                                    }
                                })
                            });
                        }
                    }
                }
            }
        },
        created() {
            this.displayRoutes = routes.filter(route => {
                return route.name !== '404';
            });
            window.addEventListener('scroll', this.handleScroll);
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>

<style lang="scss" scoped>
    #main-nav-bar.main-nav-bar-component {
        position: sticky;
        top: 0;
        z-index: 500;

        .container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            background-color: #25242c;
            list-style-type: none;
            padding: 0;
            margin: 0;
            color: #ffffff;

            .display-route {
                display: none;
            }

            .header-text-container {
                height: 55px;

                .header-text {
                    position: absolute;
                    height: 55px;
                    top: 0;
                    left: 0;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 2.1em;
                    font-size: 2.1em;
                    font-family: 'Lobster', Lobster, Arial, sans-serif;

                    &:hover {
                        cursor: pointer;
                        color: #c5c5c5;
                    }
                }
            }

            .menu {
                display: flex;
                align-items: center;
                justify-content: center;
                height: auto;

                .one-route {
                    display: flex;
                    height: 100%;

                    .one-option {
                        height: 55px;
                    }

                    .main-nav-bar-option {
                        display: flex;
                        justify-content: center;
                        align-items: center;
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


        }
    }

    /*media*/
    @media screen and (max-width: 1200px) {
    }

    @media screen and (max-width: 1000px) {
        #main-nav-bar.main-nav-bar-component {
            .container {
                .header-text-container {
                    .header-text {
                        padding: 0 .5em;
                        font-size: 1.5em;
                    }
                }

                .menu {
                    .one-route {
                        .one-option {
                            padding: 0 8px !important;
                            border-inline-start: 0.5px solid #424040;;
                        }

                        &:last-child {
                            border-inline-end: 0.5px solid #424040;;
                        }
                    }
                }
            }
        }

    }

    @media screen and (max-width: 770px) {
        #main-nav-bar.main-nav-bar-component {
            .container {
                .display-route {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 55px;
                    padding: 0 0.7em;
                    background-color: #000000;

                    .icon {
                        margin: 0 7px;
                    }

                    &:hover {
                        cursor: pointer;
                    }
                }

                .menu {
                    position: absolute;
                    top: 54px;
                    width: fit-content;
                    flex-direction: column;
                    background-color: #25242c;
                    box-shadow: 0 4px 9px 0 rgba(44, 62, 80, 0.75);

                    .one-route {
                        width: 100%;
                        flex-direction: column;
                        border: none !important;

                        .one-option {
                            width: 100%;
                            border: none !important;
                        }
                    }

                    &.hide {
                        display: none;
                    }
                }
            }
        }
    }
</style>
<template>
    <section id="coding" class="coding-component page-section">
        <div class="container">
            <header class="main-title title">Coding</header>
            <div v-for="(project, index) in projects" :key="index" class="one-project">
                <header class="title">{{project.title}}</header>
                <div class="description">{{project.description}}</div>
                <div v-if="project.pathMode === 'link'" class="project-link">
                    <font-awesome-icon class="icon" :icon="['fab', 'github']"/>
                    <a class="link" target="_blank" :href="project.href">{{project.title}}</a>
                </div>
                <button v-if="project.pathMode === 'button'" @click="setProjectsContent(project)">
                    <router-link :to="'/projects'" tag="div"
                                 class="main-nav-bar-option one-option">Open project
                    </router-link>
                </button>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapActions} from 'vuex';
    import ChatComponent from "./ChatComponent";

    export default {
        name: "CodingComponent",
        data() {
            return {
                projects: [
                    {
                        title: 'Harmony synel countdown timer',
                        description: `Harmony-synel-countdown-timer is a userscript that adds an element with
                    countdown timer working hours. It shows how many hours you need to work today, as well as the total
                    number of hours for the current month. The calculation is based on how many hours left or how many
                    hours worked more.
                    If the shift is not active (not started or finished), you can see only current month hours.
                    When there is an active shift, the countdown timer will show daily and monthly hours.
                    You can minimize or drag the countdown timer.`,
                        pathMode: 'link',
                        href: 'https://github.com/Rishon1983/harmony-synel-countdown-timer',
                        img: '',
                        component: ''
                    },
                    {
                        title: 'Basic chat',
                        description: 'This chat created for learning socket.io.',
                        pathMode: 'button',
                        href: '',
                        img: '',
                        component: ChatComponent
                    }
                ]
            }
        },
        methods: {
            ...mapActions('main', [
                'isShowBackdropAction',
                'setProjectsContentComponent'
            ]),
            setProjectsContent(project) {
                this.setProjectsContentComponent(project.component);
            }
        },
    }
</script>

<style lang="scss" scoped>
    #coding.coding-component {
        background-color: #ffffff;

        .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .main-title {
                width: 65%;
                margin-bottom: 50px;
            }

            .one-project {
                width: 65%;
                padding: 30px 0;
                border-bottom: 1px solid #e0e0e0;

                .title {
                    font-size: 1.2em;
                    margin-bottom: .5em;
                    font-weight: bold;
                }

                .description {
                    margin-bottom: .5em;
                }

                .project-link {
                    display: flex;
                    align-items: center;

                    .icon {
                        font-size: 2em;
                        margin-inline-end: 0.3em;
                    }
                }

                button {
                    height: 35px;
                    width: 95px;
                    margin-top: 15px;
                    cursor: pointer;
                    padding: 0;

                    .main-nav-bar-option.one-option {
                        height: 100%;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                }
            }
        }
    }
</style>
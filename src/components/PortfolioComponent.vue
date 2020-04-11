<template>
    <div id="portfolio" class="portfolio-component page-section">
        <div class="container">
            <div class="main-title title">Portfolio</div>
            <div class="portfolio-projects-container">
                <div v-for="(oneProject, index) in portfolioProjects" :key="index"
                     @click="openCloseProjectLocally(oneProject)"
                     class="portfolio-project">
                    <img class="project-image" alt="project image" :src="getImgPath(oneProject)">
                    <div class="project-name">{{oneProject.name}}</div>
                    <div class="portfolio-hover">{{oneProject.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "PortfolioComponent",
        data() {
            return {
                portfolioProjects: [
                    {
                        name: 'Air Doctor',
                        site: 'https://air-dr.com/',
                        image: 'air-dr.jpg',
                        description: `Worked at the present job (hippotec).`,
                        date: '2017'
                    },
                    {
                        name: 'Probuild',
                        site: 'https://www.probuild.co.il/',
                        image: 'probuild.jpg',
                        description: `Worked at the present job (hippotec).`,
                        date: '2016-2017, 2018-2020'
                    },
                    {
                        name: 'Musah',
                        site: 'https://musah.co.il/site/',
                        image: 'musah.jpg',
                        description: `I'm one of the creators of project. Adding, systematization of information etc.`,
                        date: '2015'
                    },
                    {
                        name: 'Petek Design',
                        site: 'http://petek-design.com/',
                        image: 'petek-design.jpg',
                        description: `Few changes to design: used Photoshop, worked with CSS.`,
                        date: '2015'
                    },
                    {
                        name: 'Victoria-I.H.C.',
                        site: 'http://v-ihc.com/',
                        image: 'vihc.jpg',
                        description: `My first work. It's simple website.`,
                        date: '2013'
                    }
                ]
            }
        },
        methods: {
            getImgPath(project) {
                return require(`@/assets/portfolio/` + project.image)
            },
            ...mapActions('portfolioProjectDetails', [
                'openCloseProject'
            ]),
            ...mapActions('main', [
                'isShowBackdropAction'
            ]),
            openCloseProjectLocally(oneProject) {
                this.openCloseProject(oneProject)
                this.isShowBackdropAction()
            }
        }
    }
</script>

<style lang="scss" scoped>
    #portfolio.portfolio-component {
        display: flex;
        justify-content: center;

        .container {
            max-width: 1200px;
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .main-title {
                margin-bottom: 50px;
            }

            .portfolio-projects-container {
                display: flex;
                justify-content: center;
                width: 100%;
                flex-wrap: wrap;

                .portfolio-project {
                    width: 31%;
                    height: 15em;
                    margin: 2% 1%;
                    display: flex;
                    flex-direction: column;
                    position: relative;
                    box-shadow: 0 1px 5px 0 rgba(44, 62, 80, 0.75);

                    .project-image {
                        width: 100%;
                        height: 12rem;
                        border: 1px solid #ced4da;
                    }

                    .project-name {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: #ffffff;
                        background-color: #2c3e50;
                        height: 3rem;
                    }

                    .portfolio-hover {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: all ease .7s;
                        opacity: 0;
                        background: rgba(0, 0, 0, .7);
                        font-size: 3em;
                        color: #ffffff;
                        font-family: 'Lobster', Lobster, Arial, sans-serif;
                    }

                    &:hover {
                        cursor: pointer;

                        .portfolio-hover {
                            opacity: 1;
                        }
                    }
                }
            }
        }
    }
</style>
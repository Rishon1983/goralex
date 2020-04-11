<template>
    <div v-if="isOpenProject" id="portfolio-project-details" class="portfolio-project-details-component">
        <div class="container">
            <div class="header">
                <font-awesome-icon @click="openCloseProjectLocally" class="icon" :icon="['fas', 'times']"/>
            </div>
            <div class="main-title title">{{projectName}}</div>
            <img class="project-image" alt="project image" :src="getImgPath(projectImage)">
            <div class="project-description">{{projectDescription}}</div>
            <a :href="projectSite" class="link" target="_blank">{{projectSite}}</a>
            <div class="date">{{projectDate}}</div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        name: "PortfolioProjectDetails",
        data() {
            return {}
        },
        computed: {
            ...mapState({
                isOpenProject: state => state.portfolioProjectDetails.isOpenProject,
                projectName: state => state.portfolioProjectDetails.openPortfolioProject.name,
                projectSite: state => state.portfolioProjectDetails.openPortfolioProject.site,
                projectImage: state => state.portfolioProjectDetails.openPortfolioProject.image,
                projectDescription: state => state.portfolioProjectDetails.openPortfolioProject.description,
                projectDate: state => state.portfolioProjectDetails.openPortfolioProject.date
            })
        },
        methods: {
            ...mapActions('main', [
                'isShowBackdropAction',
            ]),
            ...mapActions('portfolioProjectDetails', [
                'openCloseProject',
            ]),
            openCloseProjectLocally() {
                this.openCloseProject()
                this.isShowBackdropAction()
            },
            getImgPath(image) {
                return require(`@/assets/portfolio/` + image)
            },
        },
    }
</script>

<style lang="scss" scoped>
    #portfolio-project-details.portfolio-project-details-component {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        z-index: 1100;
        display: flex;
        align-items: center;
        justify-content: center;

        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            height: calc(100% - 6em);
            width: calc(80% - 6em);
            margin: 3em;
            padding: 0;
            background-color: #fff;
            border: 1px solid rgba(0, 0, 0, .2);
            border-radius: .3rem;
            overflow: auto;

            .header {
                width: 100%;
                display: flex;
                justify-content: flex-end;
                padding-top: 4em;
                padding-inline-end: 4em;

                .icon {
                    font-size: 6em;
                    color: #d0d0d0;

                    &:hover {
                        cursor: pointer;
                        color: #bdbbbb;
                    }
                }
            }

            .title {
                margin-bottom: 20px;
            }

            .project-image {
                width: 45em;
                box-shadow: 0 1px 5px 0 rgba(44, 62, 80, .75);
            }

            .project-description {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 70%;
                font-size: 1.4em;
                margin: 1em 0;
            }

            .link {
                font-size: 1.2em;
            }

            .date {
                font-size: 1.1em;
                font-weight: bold;
                margin-top: 2em;
            }
        }
    }
</style>
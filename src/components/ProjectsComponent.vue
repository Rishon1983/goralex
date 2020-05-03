<template>
    <section id="projects" class="projects-component">
        <div class="container">
            <component :is="projectsContentComponent"></component>
        </div>
    </section>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        name: "ProjectsComponent",
        data() {
            return {
            }
        },
        computed: {
            ...mapState({
                projectsContentComponent: state => state.main.projectsContentComponent
            })
        },

    }
</script>

<style lang="scss" scoped>
    #projects.projects-component {
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

</style>
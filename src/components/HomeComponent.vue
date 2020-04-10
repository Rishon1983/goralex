<template>
    <div class="home-component">
        <AboutComponent/>
        <EducationComponent/>
        <SkillsComponent/>
    </div>
</template>

<script>
    import AboutComponent from "./AboutComponent";
    import EducationComponent from "./EducationComponent";
    import SkillsComponent from "./SkillsComponent";

    export default {
        name: "HomeComponent",
        components: {
            AboutComponent,
            EducationComponent,
            SkillsComponent
        }
    }
</script>

<style lang="scss">
    .page-section {
        padding: 100px 100px;

        &:nth-child(odd) {
            background-color: #f8f9fa;
        }

        &:nth-child(even) {
            background-color: #ffffff;
        }
    }

    .main-title {
        font-size: 50px;
        font-family: 'Lobster', Lobster, Arial, sans-serif;
    }

    a.download {
        text-decoration: none;
        color: #4d7bff;

        &:hover {
            text-decoration: underline;
        }
    }
</style>
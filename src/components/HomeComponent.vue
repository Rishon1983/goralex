<template>
    <div class="home-component">
        <AboutComponent/>
        <EducationComponent/>
        <SkillsComponent/>
        <ContactComponent/>
    </div>
</template>

<script>
    import AboutComponent from "./AboutComponent";
    import EducationComponent from "./EducationComponent";
    import SkillsComponent from "./SkillsComponent";
    import ContactComponent from "./ContactComponent";

    export default {
        name: "HomeComponent",
        components: {
            AboutComponent,
            EducationComponent,
            SkillsComponent,
            ContactComponent
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
        font-size: 3.1rem;
        font-family: 'Lobster', Lobster, Arial, sans-serif;
    }

    a.download {
        text-decoration: none;
        color: #2f5ad6;

        &:hover {
            text-decoration: underline;
        }
    }
</style>
<template>
    <div class="home-component">
        <AboutComponent/>
        <EducationComponent/>
        <SkillsComponent/>
        <PortfolioComponent/>
        <ContactComponent/>
        <PortfolioProjectDetailsComponent/>
        <BackdropComponent/>
    </div>
</template>

<script>
    import AboutComponent from "./AboutComponent";
    import EducationComponent from "./EducationComponent";
    import SkillsComponent from "./SkillsComponent";
    import PortfolioComponent from "./PortfolioComponent";
    import ContactComponent from "./ContactComponent";
    import PortfolioProjectDetailsComponent from "./PortfolioProjectDetailsComponent";
    import BackdropComponent from "./BackdropComponent";

    export default {
        name: "HomeComponent",
        components: {
            AboutComponent,
            EducationComponent,
            SkillsComponent,
            PortfolioComponent,
            ContactComponent,
            PortfolioProjectDetailsComponent,
            BackdropComponent
        }
    }
</script>

<style lang="scss">
    .page-section {
        padding: 6.2em;

        &:nth-child(odd) {
            background-color: #f8f9fa;
        }

        &:nth-child(even) {
            background-color: #ffffff;
        }
    }

    .main-title {
        font-size: 3.1em;
        font-family: 'Lobster', Lobster, Arial, sans-serif;
    }

    a.download, a.link {
        text-decoration: none;
        color: #2f5ad6;

        &:hover {
            text-decoration: underline;
        }
    }
</style>
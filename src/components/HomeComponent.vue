<template>
    <div class="home-component">
        <AboutComponent/>
        <EducationComponent/>
        <SkillsComponent/>
        <PortfolioComponent/>
        <ContactComponent/>
        <PortfolioProjectDetailsComponent/>
        <BackdropComponent/>
        <FooterComponent/>
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
    import FooterComponent from "./FooterComponent";

    export default {
        name: "HomeComponent",
        components: {
            AboutComponent,
            EducationComponent,
            SkillsComponent,
            PortfolioComponent,
            ContactComponent,
            PortfolioProjectDetailsComponent,
            BackdropComponent,
            FooterComponent
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
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3.1em;
        font-family: 'Lobster', Lobster, Arial, sans-serif;
        width: 100%;
    }

    a.download, a.link {
        text-decoration: none;
        color: #2f5ad6;

        &:hover {
            text-decoration: underline;
        }
    }

    address {
        font-style: normal;
    }

    menu {
        padding: 0;
        margin: 0;
    }

    span.span-inline {
        margin-inline-end: 5px;
        flex: none;
    }

    /*media*/
    @media screen and (max-width: 1200px) {
        .page-section {
            padding: 4.2em;
        }
    }

    @media screen and (max-width: 1000px) {
    }

    @media screen and (max-width: 770px) {
        .page-section {
            padding: 4em 1em;
        }
        .main-title {
            font-size: 2.3em;
        }
    }
</style>
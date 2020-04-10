<template>
    <div id="education" class="education-component page-section">
        <div class="container">
            <div class="main-title title">Education</div>
            <img alt="logo" class="hit" src="@/assets/education/degree.jpg">
        </div>
    </div>
</template>

<script>
    export default {
        name: "EducationComponent"
    }
</script>

<style lang="scss" scoped>
    #education.education-component{
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .title {
                margin-bottom: 50px;
            }

            img {
                max-width: 30%;
            }

        }
    }

</style>
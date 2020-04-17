<template>
    <section id="education" class="education-component page-section">
        <div class="container">
            <header class="main-title title">Education</header>
            <img alt="logo" class="hit" src="@/assets/education/degree.jpg">
        </div>
    </section>
</template>

<script>
    export default {
        name: "EducationComponent"
    }
</script>

<style lang="scss" scoped>
    #education.education-component {
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

    /*media*/
    @media screen and (max-width: 1200px) {
        #education.education-component {
            .container {
                img {
                    max-width: 40%;
                }
            }
        }
    }

    @media screen and (max-width: 1000px) {
        #education.education-component {
            .container {
                img {
                    max-width: 60%;
                }
            }
        }
    }

    @media screen and (max-width: 770px) {
        #education.education-component {
            .container {
                img {
                    max-width: 75%;
                }
            }
        }
    }

</style>
<template>
    <div id="skills" class="skills-component page-section">
        <div class="container">
            <div class="main-title title">Programming skills</div>
            <div class="skills-container">
                <div v-for="(skill, index) of skills" :key="index" class="one-skill">
                    <div class="logo-container">
                        <img :src="getLogoPath(skill)">
                    </div>
                    <div class="skill-info">
                        <div class="title">{{skill.name}}</div>
                        <div class="description" v-html="skill.description"></div>
                    </div>
                </div>
            </div>
            <a href="/CV/Grades.pdf" class="download" download="Grades-Alexander Gorbatovsky">Download grades</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SkillsComponent",
        data() {
            return {
                skills: [
                    {
                        name: 'Vue.js',
                        logoPath: 'vuejs.png',
                        description: 'Use at the present job (hippotec).'
                    },
                    {
                        name: 'AngularJS',
                        logoPath: 'angularjs.png',
                        description: 'Use at the present job (hippotec).'
                    },
                    {
                        name: 'Knockout.js',
                        logoPath: 'knockout.png',
                        description: 'Use at the present job (hippotec).'
                    },
                    {
                        name: 'jQuery',
                        logoPath: 'jq.png',
                        description: 'Use at the present job (hippotec).'
                    },
                    {
                        name: 'JavaScript',
                        logoPath: 'js.png',
                        description: 'Use at the present job (hippotec). Worked as a freelancer.'
                    },
                    {
                        name: 'Node.js',
                        logoPath: 'nodejs.png',
                        description: 'Use at the present job (hippotec).'
                    },
                    {
                        name: 'PHP',
                        logoPath: 'php.png',
                        description: `Use at the present job (hippotec). Worked on the project <a href="http://musah.co.il/" target="_blank">musah.co.il</a>.`
                    },
                    {
                        name: 'Bootstrap',
                        logoPath: 'bootstrap.png',
                        description: 'Use at the present job (hippotec).'
                    },
                    {
                        name: 'HTML5',
                        logoPath: 'html5.png',
                        description: 'Use at the present job (hippotec).'
                    },
                    {
                        name: 'SCSS',
                        logoPath: 'scss.png',
                        description: 'Use at the present job (hippotec).'
                    },
                    {
                        name: 'CSS3',
                        logoPath: 'css3.png',
                        description: 'Use at the present job (hippotec).'
                    },
                    {
                        name: 'MongoDB',
                        logoPath: 'mongo.png',
                        description: 'Use at the present job (hippotec).'
                    },
                    {
                        name: 'MySQL',
                        logoPath: 'mysql.png',
                        description: 'Use at the present job (hippotec).'
                    },
                    {
                        name: 'XAMPP',
                        logoPath: 'xampp.png',
                        description: 'I have a practice of using XAMMP.'
                    },
                    {
                        name: 'WordPress',
                        logoPath: 'wordpress.png',
                        description: 'Worked as a freelancer on several small projects.'
                    },
                    {
                        name: 'SVG',
                        logoPath: 'svg.png',
                        description: 'Created new font icons at the present job (hippotec).'
                    },
                    {
                        name: '.NET',
                        logoPath: 'dotNET.png',
                        description: `Course at the Institute "HIT". </br>Grade: 81`
                    },
                    {
                        name: 'Android',
                        logoPath: 'android.png',
                        description: `Course at the Institute "HIT". </br>Grade: 100`
                    },
                    {
                        name: 'jQuery Mobile',
                        logoPath: 'jquerymobile.png',
                        description: `It was part of the course "Android". </br>Grade: 100`
                    },
                    {
                        name: 'Facebook API',
                        logoPath: 'fbApi.png',
                        description: `Used on several small projects. It was part of the course "Android". </br>Grade: 100`
                    },
                    {
                        name: 'J2EE',
                        logoPath: 'j2ee.png',
                        description: `Course at the Institute "HIT". </br>Grade: 83`
                    },
                    {
                        name: 'Java',
                        logoPath: 'java.png',
                        description: `Course at the Institute "HIT". </br>Grade: 92`
                    },
                    {
                        name: 'Scala',
                        logoPath: 'scala.png',
                        description: `It was part of the course "Java". </br>Grade: 92`
                    },
                    {
                        name: 'C/C++',
                        logoPath: 'cAndCPP.png',
                        description: `Two course at the Institute "HIT". </br>C grade: 76 </br>C++ grade: 81`
                    },

                ]
            }
        },
        methods: {
            getLogoPath(skill) {
                return require(`@/assets/skills/` + skill.logoPath)
            }
        }
    }
</script>

<style lang="scss" scoped>
    #skills.skills-component {
        display: flex;
        justify-content: center;

        .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 1200px;
            width: 100%;

            .main-title {
                margin-bottom: 50px;
            }

            .skills-container {
                display: flex;
                width: 100%;
                flex-wrap: wrap;

                .one-skill {
                    width: 31%;
                    margin: 2% 1%;
                    display: flex;

                    .logo-container {
                        width: 100px;
                        height: 100px;
                        flex: none;

                        img {
                            height: 100%;
                            width: 100%;
                            object-fit: contain;
                        }
                    }

                    .skill-info {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        padding: 10px;

                        .title {
                            font-weight: bold;
                        }
                    }
                }
            }

            a.download {
                margin-top: 60px;
            }
        }
    }
</style>
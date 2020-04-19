<template>
    <section id="about" class="about-component page-section">
        <div class="container">
            <div class="title-container">
                <header class="main-title title">About me</header>
                <header class="main-title title">Alexander Gorbatovsky</header>
                <div class="profile-img-container">
                    <img alt="my photo" src="@/assets/about/my-photo.png">
                </div>
                <header class="title prof">Full stack web developer</header>
                <div class="title-info">
                    <div class="one-raw">
                        <font-awesome-icon :icon="['fas', 'caret-right']"/>
                        <div class="text">Able to work individually or in a team.</div>
                    </div>
                    <div class="one-raw">
                        <font-awesome-icon :icon="['fas', 'caret-right']"/>
                        <div class="text">Attention to detail.</div>
                    </div>
                    <div class="one-raw">
                        <font-awesome-icon :icon="['fas', 'caret-right']"/>
                        <div class="text">Creative thinker, energetic, innovative.</div>
                    </div>
                </div>
            </div>
            <div class="timeline-content">
                <div class="timeline">
                    <div class="timeline-image">
                        <img alt="logo" class="hit" src="@/assets/about/hit.jpg">
                    </div>
                    <div class="timeline-panel">
                        <div class="timeline-title-container">
                            <header class="timeline-title">2009-2013</header>
                            <header class="timeline-sub-title">B.Sc.,Computer Science (Holon Institute of Technology)</header>
                        </div>
                        <div class="timeline-body">
                            <div>
                                <font-awesome-icon class="icon" :icon="['fas', 'chevron-circle-right']"/>
                                <div>Web programming: JavaScript, HTML, CSS, MySQL</div>
                            </div>
                            <div>
                                <font-awesome-icon class="icon" :icon="['fas', 'chevron-circle-right']"/>
                                <div>Mobile programming: Android, jQuery mobile</div>
                            </div>
                            <div>
                                <font-awesome-icon class="icon" :icon="['fas', 'chevron-circle-right']"/>
                                <div>Programming: C / C ++ / C#.NET, Java / J2EE, Scala</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-image">
                        <img alt="logo" src="@/assets/about/gigya.jpg">
                    </div>
                    <div class="timeline-panel">
                        <div class="timeline-title-container">
                            <header class="timeline-title">2010-2015:</header>
                            <header class="timeline-sub-title">Network Operations Center at Gigya</header>
                        </div>
                        <div class="timeline-body">
                            <div>
                                <font-awesome-icon class="icon" :icon="['fas', 'chevron-circle-right']"/>
                                <div>Client-Server tests using Fiddler</div>
                            </div>
                            <div>
                                <font-awesome-icon class="icon" :icon="['fas', 'chevron-circle-right']"/>
                                <div>QA manual tests and assistance in bugs fixing</div>
                            </div>
                            <div>
                                <font-awesome-icon class="icon" :icon="['fas', 'chevron-circle-right']"/>
                                <div>Technical and customer support, HelpDesk</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-image">
                        <img alt="logo" src="@/assets/about/freelancer.jpg">
                    </div>
                    <div class="timeline-panel">
                        <div class="timeline-title-container">
                            <header class="timeline-title">2015-2016:</header>
                            <header class="timeline-sub-title">Freelancer Web Developer</header>
                        </div>
                        <div class="timeline-body">
                            <div>
                                <font-awesome-icon class="icon" :icon="['fas', 'chevron-circle-right']"/>
                                <div>Building server-side using PHP, MySQL</div>
                            </div>
                            <div>
                                <font-awesome-icon class="icon" :icon="['fas', 'chevron-circle-right']"/>
                                <div>Building client-side using JavaScript, HTML, CSS</div>
                            </div>
                            <div>
                                <font-awesome-icon class="icon" :icon="['fas', 'chevron-circle-right']"/>
                                <div>Using libraries like jQuery, Bootstrap</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-image">
                        <img alt="logo" src="@/assets/about/hippotec.png">
                    </div>
                    <div class="timeline-panel">
                        <div class="timeline-title-container">
                            <header class="timeline-title">2016-Present</header>
                            <header class="timeline-sub-title">Web Developer at Hippotec Ltd</header>
                        </div>
                        <div class="timeline-body">
                            <div>
                                <font-awesome-icon class="icon" :icon="['fas', 'chevron-circle-right']"/>
                                <div>Building client-side using Vue.js, AngularJS, Knockout.js, JavaScript, jQuery</div>
                            </div>
                            <div>
                                <font-awesome-icon class="icon" :icon="['fas', 'chevron-circle-right']"/>
                                <div>Bootstrap, HTML5, SCSS</div>
                            </div>
                            <div>
                                <font-awesome-icon class="icon" :icon="['fas', 'chevron-circle-right']"/>
                                <div>Building server-side using Node.js, PHP, MongoDB</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="timeline">
                    <div class="timeline-image">
                        Now
                    </div>
                </div>
            </div>
            <div class="cv-container">
                <a href="/CV/CV.pdf" class="download" download="CV-Alexander Gorbatovsky">Download CV</a>
                <a href="/CV/CV-hebrew.pdf" class="download" download="CV-hebrew Alexander Gorbatovsky">Download CV in
                    Hebrew</a>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "AboutComponent",
    }
</script>

<style lang="scss" scoped>
    #about.about-component {
        display: flex;
        justify-content: center;
        align-items: center;

        .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 1200px;
            width: 100%;

            .title-container {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                .title {
                    margin-bottom: 10px;

                    &.prof {
                        font-family: "Lobster", Lobster, Arial, sans-serif;
                        font-size: 2em;
                    }
                }

                .profile-img-container {
                    width: 200px;
                    height: 200px;
                    display: flex;
                    color: #fff;
                    border: 7px solid #e9ecef;
                    border-radius: 50%;
                    background-color: #2c3e50;
                    margin: 10px;

                    img {
                        max-width: 100%;
                        object-fit: cover;
                        border-radius: 50%;
                    }
                }

                .title-info {
                    display: flex;
                    flex-direction: column;

                    .one-raw {
                        display: flex;
                        align-items: center;
                        line-height: 22px;

                        .text {
                            margin-inline-start: 6px;
                        }
                    }
                }
            }


            .timeline-content {
                position: relative;
                width: 100%;

                .timeline {
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    height: 280px;
                    width: 100%;
                    position: relative;

                    .timeline-image {
                        position: absolute;
                        width: 170px;
                        height: 170px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        color: #fff;
                        border: 7px solid #e9ecef;
                        border-radius: 50%;
                        background-color: #2c3e50;
                        top: calc(50% - 85px);
                        left: calc(50% - 85px);
                        font-family: 'Lobster', Lobster, Arial, sans-serif;
                        font-size: 35px;

                        img {
                            max-width: 100%;
                            height: 100%;
                            object-fit: cover;
                            border-radius: 50%;
                        }
                    }

                    .timeline-panel {
                        width: 100%;

                        .timeline-title-container {
                            font-size: 1.2em;
                            margin-bottom: 0.3em;
                            font-weight: bold;
                        }

                        .timeline-body {
                            line-height: 22px;

                            div {
                                display: flex;
                                align-items: center;

                                .icon {
                                    font-size: 0.9em;
                                    margin-inline-end: 6px;
                                }
                            }
                        }
                    }

                    &:before {
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        left: calc(50% - 2px);
                        width: 2px;
                        content: "";
                        background-color: #e9ecef;
                    }

                    &:first-child {
                        &:before {
                            top: 50%;
                        }
                    }

                    &:last-child {
                        &:before {
                            bottom: 50%;
                        }
                    }

                    &:nth-child(odd) {
                        .timeline-panel {
                            padding-inline-end: calc(50% + 85px);
                        }
                    }

                    &:nth-child(even) {
                        .timeline-panel {
                            padding-inline-start: calc(50% + 140px);
                        }
                    }

                }
            }

            .cv-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 40px;
            }
        }
    }

    /*media*/
    @media screen and (max-width: 1200px) {
        #about.about-component {
            .container {
                .timeline-content {
                    .timeline {
                        .timeline-image {
                            width: 140px;
                            height: 140px;
                            left: calc(50% - 71px);
                        }

                        &:nth-child(odd) {
                            .timeline-panel {
                                padding-inline-end: calc(50% + 85px);
                            }
                        }

                        &:nth-child(even) {
                            .timeline-panel {
                                padding-inline-start: calc(50% + 70px);
                            }
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1000px) {
        #about.about-component {
            .container {
                .timeline-content {
                    .timeline {
                        height: 250px;

                        .timeline-image {
                            width: 120px;
                            height: 120px;
                            left: 0;
                        }

                        &:nth-child(odd), &:nth-child(even) {
                            .timeline-panel {
                                padding-inline-start: 140px;
                                padding-inline-end: 0;
                            }
                        }

                        &:before {
                            left: 60px;
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 770px) {
        #about.about-component {
            .container {
                .title-container {
                    .profile-img-container {
                        width: 150px;
                        height: 150px;
                    }
                }

                .timeline-content {
                    .timeline {
                        .timeline-image {
                            width: 100px;
                            height: 100px;
                            left: 0;
                        }

                        .timeline-panel {
                            .timeline-title-container {
                                font-size: 1em;
                            }

                            .timeline-body {
                                font-size: 1em;
                            }
                        }

                        &:nth-child(odd), &:nth-child(even) {
                            .timeline-panel {
                                padding-inline-start: 115px;
                            }
                        }

                        &:last-child {
                            height: 150px;

                            .timeline-image {
                                top: 50px;
                            }
                        }

                        &:before {
                            left: 50px;
                        }
                    }
                }
            }
        }
    }
</style>
<template>
    <div id="coding" class="coding-component page-section">
        <div class="container">
            <div class="main-title title">Coding</div>
            <div class="one-project">
                <div class="title">Harmony synel countdown timer</div>
                <div class="description">Harmony-synel-countdown-timer is a userscript that adds an element with
                    countdown timer working hours. It shows how many hours you need to work today, as well as the total
                    number of hours for the current month. The calculation is based on how many hours left or how many
                    hours worked more.
                    If the shift is not active (not started or finished), you can see only current month hours.
                    When there is an active shift, the countdown timer will show daily and monthly hours.
                    You can minimize or drag the countdown timer.
                </div>
                <div class="project-link">
                    <font-awesome-icon class="icon" :icon="['fab', 'github']"/>
                    <a class="link" target="_blank" href="https://github.com/Rishon1983/harmony-synel-countdown-timer">Harmony
                        synel countdown timer</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CodingComponent"
    }
</script>

<style lang="scss" scoped>
    #coding.coding-component {
        background-color: #ffffff;

        .container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .main-title {
                width: 65%;
                margin-bottom: 50px;
            }

            .one-project {
                width: 65%;

                .title {
                    font-size: 1.2em;
                    margin-bottom: .5em;
                    font-weight: bold;
                }

                .description {
                    margin-bottom: .5em;
                }

                .project-link {
                    display: flex;
                    align-items: center;

                    .icon {
                        font-size: 2em;
                        margin-inline-end: 0.3em;
                    }
                }
            }
        }
    }
</style>
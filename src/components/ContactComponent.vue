<template>
    <div id="contact" class="contact-component page-section">
        <div class="container">
            <div class="main-title title">Contact me</div>
            <div class="map-container">
                <iframe width="100%" height="400px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                        src="http://maps.google.com/maps?hl=en&amp;ie=UTF8&amp;ll=31.9654205,34.659786&amp;t=m&amp;z=10&amp;output=embed&q=Rishon LeTsiyon, Israel&zoom=10"></iframe>
            </div>
            <div class="form-mail-container">
                <div class="form-body">
                    <div class="mail-container">
                        <input id="contact-name" type="text" placeholder="Your Name *" v-model="mailForm.name">
                        <input id="contact-email" type="email" placeholder="Your Email *" :class="['', isEmailValid()]"
                               v-model="mailForm.email">
                    </div>
                    <div class="mail-container">
                    <textarea id="contact-msg" v-model="mailForm.message"
                              placeholder="Your Message *" maxlength="999"
                              style="resize:none"></textarea>
                    </div>
                </div>
                <div class="form-button">Send Message</div>
            </div>
            <div class="contact-info-container">
                <div class="contact-info">
                    <div class="one-contact big-container">
                        <a href="mailto:goralexcontact@gmail.com" target="_blank">
                            <div class="icon-container">
                                <font-awesome-icon class="icon" :icon="['fas', 'envelope']"/>
                            </div>
                            <div class="title">goralexcontact@gmail.com</div>
                        </a>
                    </div>
                    <div class="one-contact big-container">
                        <a href="tel:+9720547980108">
                            <div class="icon-container">
                                <font-awesome-icon class="icon" :icon="['fas', 'phone']"/>
                            </div>
                            <div class="title">(+972) 054-7980108</div>
                        </a>
                    </div>
                </div>
                <div class="contact-info social-networks">
                    <div class="one-contact">
                        <a href="https://www.linkedin.com/in/goralex" target="_blank">
                            <div class="icon-container">
                                <font-awesome-icon class="icon" :icon="['fab', 'linkedin-in']"/>
                            </div>
                        </a>
                    </div>
                    <div class="one-contact">
                        <a href="https://www.facebook.com/gorbatovsky" target="_blank">
                            <div class="icon-container">
                                <font-awesome-icon class="icon" :icon="['fab', 'facebook-f']"/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ContactComponent",
        data() {
            return {
                mailForm: {
                    name: '',
                    email: '',
                    message: ''
                },
            };
        },
        methods: {
            isEmailValid() {
                let reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return (this.mailForm.email === '') ? "" : (reg.test(this.mailForm.email)) ? 'has-success' : 'has-error';
            },
        }
    }
</script>

<style lang="scss" scoped>
    #contact.contact-component {
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .main-title {
                margin-bottom: 50px;
            }

            .map-container {
                width: 60%;
            }

            .form-mail-container {
                width: 60%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                margin: 40px 0 40px 0;

                .form-body {
                    width: 100%;
                    display: flex;

                    .mail-container {
                        width: 50%;
                        height: 150px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;

                        input, textarea {
                            padding: 20px;
                            border: 1px solid #ced4da;
                            border-radius: .25em;
                            font-size: 1em;
                            font-weight: 400;
                            line-height: 1.5;

                            &:focus {
                                border-color: #2c3e50;
                                outline: 0;
                                box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(44, 62, 80, .6);
                            }

                            &.has-error {
                                border-color: #a94442;
                                box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);
                            }
                        }

                        input {
                            margin: 0 10px 0 0;
                        }

                        textarea {
                            font-family: Roboto, Arial, sans-serif;
                            margin: 0 0 0 10px;
                            height: 100%;
                            font-size: 1em;
                            font-weight: 400;
                            line-height: 1.5;
                        }
                    }
                }

                .form-button {
                    height: 60px;
                    width: 20%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #2c3e50;
                    color: #ffffff;
                    border-radius: .25em;
                    font-size: 1em;
                    font-weight: 400;
                    margin: 20px;

                    &:hover {
                        background-color: #2f5ad6;
                        transition: all ease .5s;
                        cursor: pointer;
                    }
                }

            }

            .contact-info-container {
                .contact-info {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .one-contact {

                        a {
                            display: flex;
                            align-items: center;
                            flex-direction: column;
                            text-decoration: none;

                            .title {
                                font-family: 'Avenir', Helvetica, Arial, sans-serif;
                                color: #2c3e50;
                                font-size: 1.1em;
                                margin-top: 5px;
                            }
                        }

                        .icon-container {
                            width: 50px;
                            height: 50px;
                            background-color: #2c3e50;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            border-radius: 50%;
                            transition: all .3s;

                            svg {
                                height: 30px;
                                width: 30px;
                                color: #ffffff;
                            }
                        }

                        &.big-container {
                            width: 250px;
                            margin: 5px;
                            padding: 12px 15px;
                            background-color: #e7eaec;
                        }

                        &:hover {
                            .icon-container {
                                background-color: #2f5ad6;
                            }
                        }
                    }

                    &.social-networks {
                        margin: 25px;

                        .one-contact {
                            margin: 0 10px;
                        }
                    }
                }
            }
        }
    }
</style>
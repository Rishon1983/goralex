<template>
    <section id="chat" class="chat-component page-section">
        <div class="container">
            <header class="main-title title">Chat</header>
            <div v-if="!logged" class="login-container">
                <div class="login-input-container">
                    <input v-model="userName" placeholder="Please, enter your name">
                    <button @click="addUser">Login</button>
                </div>
            </div>
            <div class="chat-container">
                <div class="chat-msgs-and-users">
                    <div class="chat-msgs">

                    </div>
                    <div class="users">

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import io from 'socket.io-client';

    export default {
        name: "ChatComponent",
        data() {
            return {
                socket: null,
                logged: false,
                userName: '',
                users: []
            }
        },
        created() {
            this.socket = io('http://localhost');
            this.socket.on('connect', (data) => {
                console.log('Connected!');
            });
            this.socket.on('login', (data) => {
                console.log('login!');
                this.logged = true;
            });
            this.socket.on('user-joined', (data) => {
                console.log('user-joined!');
            });
            this.socket.on('update-users', users => {
                console.log('update-users!');
                this.users = users;
            });
        },
        beforeDestroy() {
            this.socket.disconnect();
        },
        methods: {
            addUser() {
                this.socket.emit('add-user', this.userName);
            }
        }
    }
</script>

<style lang="scss" scoped>
    #chat.chat-component {
        background-color: #ffffff;

        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .login-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;


                .login-input-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    input {
                        height: 30px;
                        margin: 0 5px;
                        padding-inline-start: 5px;
                    }

                    button {
                        height: 30px;
                        margin: 0 5px;
                    }
                }


            }
        }
    }

</style>
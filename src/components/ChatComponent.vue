<template>
    <section id="chat" class="chat-component page-section">
        <div class="container">
            <header class="main-title title">Chat</header>
        </div>
    </section>
</template>

<script>
    export default {
        name: "ChatComponent"
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
        }
    }

</style>
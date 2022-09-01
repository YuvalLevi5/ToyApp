<template>
    <h1>im working here</h1>
    <section class="chat-room">
        <h1>chat</h1>
        <ul v-if="msgs" class="clean-list">
            <li v-for="(msg, idx) in msgs" :key="idx">
                {{ msg.from }} : {{ msg.txt }}
            </li>
        </ul>

        <form @submit.prevent="sendMsg">
            <input type="text" v-model="msg.txt" />
            <button>Send</button>
        </form>

    </section>
</template>

<script>
import { socketService } from '../services/socket.service'
export default {

    data() {
        return {
            msg: { from: (this.$store.getters.loggedinUser ? this.$store.getters.loggedinUser.username : 'guest'), txt: '' },
            msgs: [],
            isTypeing: false,
            msgTyping: '',
            topic: null
        }
    },

    async created() {
        const { id } = this.$route.params;
        this.topic = id
        await socketService.setup();
        socketService.emit('chat-topic', this.topic)
        socketService.on('history-msg', msgs => this.msgs = msgs)
        socketService.on('chat-addMsg', this.addMsg)
    },
    destroyed() {
        this.msgs = []
        socketService.off('chat-addMsg', this.addMsg)
        socketService.terminate();
    },

    methods: {
        addMsg(msg) {
            this.msgs.push(msg)
        },
        sendMsg() {
            if (!this.msg.txt) return
            socketService.emit('chat-newMsg', this.msg)
            this.msg.txt = ''
        }
    },
}
</script>

<style>
</style>
module.exports = connectSockets
var msgs = {}
function connectSockets(io) {
    io.on('connection', socket => {

        socket.on('chat topic', topic=>{
            if (socket.myTopic) {
                socket.leave(socket.myTopic)
            }
            socket.join(topic)
            socket.myTopic = topic;

            if(msgs[topic]){
            io.to(socket.myTopic).emit('history msg', msgs[topic]) 
            }
        })

        socket.on('chat newMsg', msg => {
            if (!msgs[socket.myTopic]) msgs[socket.myTopic] = []
            msgs[socket.myTopic].push(msg)
            io.to(socket.myTopic).emit('chat addMsg', msg)
        })

    })
}
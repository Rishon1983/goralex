import socket from "socket.io";

const initSocket = (server) => {
    let users = [];
    let io = socket(server);

    /*io.on('connection', (socket) => {
        console.log('made socket connection', socket.id);

        socket.on('disconnect', () => {
            console.log('disconnect')
        });
    });*/

    // Chatroom

    io.on('connection', (socket) => {
        let addedUser = false;
        console.log('connection!')

        // when the client emits 'new message', this listens and executes
        socket.on('new message', (data) => {
            // we tell the client to execute 'new message'
            socket.broadcast.emit('new message', {
                username: socket.username,
                message: data
            });
        });

        // when the client emits 'add user', this listens and executes
        socket.on('add-user', (username) => {
            console.log(username)
            if (addedUser) return;

            // we store the username in the socket session for this client
            socket.username = username;
            addedUser = true;
            socket.emit('login', {
                users: users
            });
            // echo globally (all clients) that a person has connected
            socket.broadcast.emit('user-joined', {
                username: socket.username,
                users: users
            });
        });

        // when the client emits 'typing', we broadcast it to others
        socket.on('typing', () => {
            socket.broadcast.emit('typing', {
                username: socket.username
            });
        });

        // when the client emits 'stop typing', we broadcast it to others
        socket.on('stop-typing', () => {
            socket.broadcast.emit('stop-typing', {
                username: socket.username
            });
        });

        // when the user disconnects.. perform this
        socket.on('disconnect', () => {
            if (addedUser) {
                users = users.filter(user => {
                    return user.id !== socket.id;
                });

                // echo globally that this client has left
                socket.broadcast.emit('user-left', {
                    username: socket.username,
                    users: users
                });
            }
        });
    });
}


export {initSocket};
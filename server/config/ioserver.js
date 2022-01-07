const { Server } = require("socket.io")
const config = require("./index.js")

const ioserver = (server) => {

    const io = new Server(server, {
        cors: {
            origin: config.ServerName,
            method: ["POST"]
        },
    })

    io.on("connection", socket => {
        console.log(socket.id);

        // to disconnect from server
        socket.io("disconnect", () => {
            console.log("user disconnected", socket.id)
        })
    });
}

module.exports = ioserver;
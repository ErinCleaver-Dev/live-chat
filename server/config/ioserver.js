const { Server } = require("socket.io")
const config = require("./index.js")

const ioserver = (server) => {

    const io = new Server(server, {
        cors: {
            origin: config.ServerName,
            method: ["POST", "GET"]
        },
    })

    io.on("connection", socket => {
        console.log("User connected to server: ", socket.id);

        // to disconnect from server
        socket.io("disconnect", () => {
            console.log("user disconnected from server: ", socket.id)
        })
    });
}

module.exports = ioserver;
const config = {
    development: {
        port: process.env.PORT || 3001,
    },
    cookie: "x-auth-token",
    ServerName: "http://localhost:3000"
};

module.exports = config;
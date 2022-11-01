module.exports = {
    HOST: "containers-us-west-60.railway.app",
    USER: "ZjvIqzPNaxRRBg6FnRKL",
    PASSWORD: "ZjvIqzPNaxRRBg6FnRKL",
    DB: "railway",
    DIALECT : "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

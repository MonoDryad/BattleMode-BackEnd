module.exports = {
    HOST: "containers-us-west-63.railway.app",
    USER: "postgres",
    PASSWORD: "0uAusIm0rYrYKr55NWYq",
    DB: "railway",
    DIALECT : "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}

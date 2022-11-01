const app = require('./src/app')

const PORT = process.env.PORT || 7108

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${7108}/api `)
})

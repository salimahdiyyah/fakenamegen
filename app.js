const express = require('express')
const path = require('path')
const faker = require('faker')

const app = express()
const port = 3000 || process.env.port

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index2.html'))
})

app.get('/generate', (req, res) => {
    const randomName = faker.name.findName()
    res.send(randomName)
})

app.listen(port, () => {
    console.log(`server running in http://localhost:${port}`)
})
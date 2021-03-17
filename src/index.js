const express = require("express")

const app = express()

app.use(express.json())

app.get('/clients', (request, response) => {
    return response.json({ message: "Hello World" })
})

app.post('/clients', (request, response) => {
    return response.json({ message: true })
})

const port = 3333
app.listen(port, () => {
    console.log(`Server is runner in port: ${port}`)
})
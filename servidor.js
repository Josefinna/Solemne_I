const express = require('express')
const app = express()
const path = require('path')
const PORT = 8000

app.get('/', (req, res) => {
    console.log('GET request recibida.')
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.listen(PORT, () => {
    console.log('Este servidor está escuchando al port: ' + PORT)
})

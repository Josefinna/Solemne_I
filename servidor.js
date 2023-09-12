const express = require('express')
const app = express()
const path = require('path')
const PORT = 8000
app.use(express.static('public'))

app.get('/', (req, res) => {
    console.log('GET request recibida.')
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.listen(PORT, () => {
    console.log('Este servidor está escuchando al port: ' + PORT)
})

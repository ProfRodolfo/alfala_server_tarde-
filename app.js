import express from 'express'

const app = express()

const port = 8000

app.get('/', (req, res) =>{
    res.send("Seu nome Jovem2")
})

app.listen(port, () =>{
    console.log(`Estudando na porta ${port}`)
})
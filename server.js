const express = require('express')
const cors = require('cors')

const {Cadastro} = require('./src/models/Cadastro')

require('dotenv/config')
require('./src/database')

const PORT = process.env.SERVER_PORT || 3333
const app = express()
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.post("/api/cadastros", async(req,res)=>{
    try {
        const novoCadastro = await Cadastro.create(req.body)
        res.status(201).json(novoCadastro)
    } catch (error) {
        console.error('Erro ao criar cadastro:', error)
        res.status(500).json({error:"Erro interno do servidor"})
    }
})
app.use((err, req , res, next) => {
    console.error(err)
    res.status(500).send('Algo deu Errado')
})
app.listen(PORT, () => {
    console.log("Server ir running on port" + PORT);
})


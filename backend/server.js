import express  from 'express'
import fs from 'fs'
import cors from 'cors'

const app=express()

app.use(cors())
app.use(express.json())

app.get('/seats/:id',(req,res)=>{
    constmovieId=req.params.id
    const data=fs.read
})
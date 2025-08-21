const express = require('express')
const noteModel = require('./models/notes.model')

const app = express()
app.use(express.json())


app.post('/notes', async(req,res )=> {
     const {title,description} = req.body

     const notes = await noteModel.create({
        title: title,
        description: description
     })
     res.send(notes)
})

app.get('/notes',async(req,res)=>{


    const notes = await noteModel.find()


    res.send(notes)
})



app.delete('/notes',async(req,res)=>{


    await noteModel.findOneAndDelete({
        _id: req.params.id
    })
})


app.patch('/notes',async(req,res)=>{
    const id =  req.params.id
    const {description } = req.body.description
   

    await noteModel.findOneAndUpdate({
        _id:id
    },{
        description: description
    })


})


module.exports = app
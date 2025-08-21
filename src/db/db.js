const mongoose = require('mongoose')



const ConnectDB = () => {
  
    mongoose.connect("mongodb+srv://kodr2:gN2TPjkxWhFnaS0w@day1.alvgdas.mongodb.net/day-3")
    .then(()=>{
        console.log("database is connected ")
    })
    .catch((error)=>{
        console.log("error in database",error)
    })

}

module.exports = ConnectDB()
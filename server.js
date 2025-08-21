const app = require('./src/app')


ConnectDB()




app.listen(3000,()=>{
    console.log('server is Running on the port 3000')
})
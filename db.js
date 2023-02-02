const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
require('dotenv').config()

  const con = mongoose.connect("mongodb+srv://EV:Mahi123@cluster0.tadgngw.mongodb.net/interview1?retryWrites=true&w=majority")

.then(success => {
    console.log('database connected')
})
.catch(error => {
    console.log("error while connecting database", error)
})
const mongoose = require('mongoose')
const connection=mongoose.connect("mongodb+srv://subrat:nayak@cluster0.ccovhmt.mongodb.net/Fitness?retryWrites=true&w=majority")
module.exports={
    connection
}
const mongoose = require('mongoose')

//放到数据库里
const { Schema } = mongoose
const usersSchema = new Schema({
  name: String,
  password:String
})

const usersModel = mongoose.model('users', usersSchema)

module.exports = {
  usersModel
}
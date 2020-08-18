const mongoose = require('mongoose')

//放到数据库里
const { Schema } = mongoose
const studentsSchema = new Schema({
  name: String,
  gender:String,
  age:Number,
  major:String,
  createdAt:{ type:Date, default: new Date()},   //数据库里有录入时间
  updatedAt:{ type:Date, default: new Date()},
})

const studentsModel = mongoose.model('students', studentsSchema)

module.exports = {
  studentsModel
}
const mongoose = require('mongoose')

async function welcome(ctx,next) {
//   ctx.state = {
//     title: 'Koa2'
//   }
  try {
    const students = await studentsModel.find({}).lean()
    ctx.state = {
      students
    }
    await ctx.render('login',ctx.state)
  } catch (error) {
    console.log(error)
  }
  
}

//放到数据库里
const { Schema } = mongoose
const studentsSchema = new Schema({
  name: String,
  gender:Number,
  age:Number,
  major:String,
})

const studentsModel = mongoose.model('students', studentsSchema)

async function login(ctx,next){
  const { name, gender,age,major } = ctx.request.body
  let data = {
    name,
    gender,
    age,
    major
  }
  const studentModel = new studentsModel(data)
  await studentModel.save()


  ctx.response.body = {
    status: 'success'
  }

}
  
module.exports = {
  welcome,
  login
}
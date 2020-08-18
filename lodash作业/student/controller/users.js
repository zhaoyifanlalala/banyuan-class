const _ = require('lodash')

const moment = require('moment')

const services = require('../services/login')
const { find } = require('lodash')

async function welcome(ctx,next) {

//   const students = await studentsModel.find({}).lean()
//   ctx.state = {
//     students
//   }

  const data = ctx.request.query

  // const students = await services.getStudent(data)

  let students = await services.getStudent(data)

  // console.log(students)

  _.map(students,(item)=>{
    if (item.gender == '1') {
      return item.gender = '男'
    }else{
      return item.gender = '女'
    }
  })



  // console.log(students)
  ctx.state = {
    students
  }

  await ctx.render('login',ctx.state)
 
  
}



async function login(ctx,next){
    

  const data = ctx.request.body
//   const { name, gender,age,major } = ctx.request.body
//   let data = {
//     name,
//     gender,
//     age,
//     major
//   }

  //添加学生
  let result = await services.login(data)

  result.students = await services.getStudent({})
  _.map(result.students,(item)=>{
    if (item.gender == '1') {
      return item.gender = '男'
    }else{
      return item.gender = '女'
    }
  })


  ctx.response.body = result
}



//后加的 只显示男或女
async function selector(ctx,next){
    
  const { gender } = ctx.request.body

  let genderData = {}

  if (gender == 0) {
    genderData = await services.findGender({gender: '0'})
  }else{
    genderData = await services.findGender({gender: '1'})
  }

  console.log(genderData)
  ctx.response.body = genderData
}
  
module.exports = {
  welcome,
  login,
  selector
}
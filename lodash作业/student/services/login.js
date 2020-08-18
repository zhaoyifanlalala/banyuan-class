const moment = require('moment')
const { insertOne, find } = require('../models/login')


/**
 * 增加学生
 */
async function login(data) {

// 。。。
  const { name } = data

  let result = { status : 'success'}

  if(name){

  // 插入数据库
    await insertOne(data)
  }else{

    result.status = 'falied'
    result.message = '没有用户名'
  }

  return result
}


/**
 * 获取学生
 */
async function getStudent(data){
  return await find(
    {
      createdAt:{
        $lte:moment().toDate(),
      // $gte:moment().subtract(1,'day')
        $gte:moment().subtract(1,'day').toDate()
      }
    })
}


async function findGender(query){
  return await find(query)
}

module.exports = {
  login,
  getStudent,
  findGender
}
const { usersModel } = require('./schema/user')

/**
 * 插入一条数据
 */
async function insertOne(data) {

  const model = new usersModel(data)

  await model.save()
}


/**
 * 查找对应数据
 */
async function find(query) {

  return usersModel.find(query)
}


/**
 * 查找一条对应数据
 */
async function findOne(query) {

  return usersModel.findOne(query)
}


module.exports = {
  insertOne,
  find,
  findOne
}
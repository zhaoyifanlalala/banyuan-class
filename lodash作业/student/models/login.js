const { studentsModel } = require('./schema/login')

async function insertOne(data){

  const studentModel = new studentsModel(data)
  await studentModel.save()
  
}

async function find(query){

  return studentsModel.find(query)
    
}
    
module.exports = {
  insertOne,
  find
}
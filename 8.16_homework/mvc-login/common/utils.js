/**
 * 正则要求，检测姓名
 */

function checkName(name) {

  let partten = /^[a-zA-Z0-9_-]{4,16}$/

  return partten.test(name)
}

//检测密码
function checkPassword(password) {

  let partten = /^\w{8,15}$/

  return partten.test(password)
}


module.exports = {
  checkName,
  checkPassword
}
let nameEle = document.getElementsByClassName('name')[0]
let passwordEle = document.getElementsByClassName('password')[0]
let btn = document.getElementsByClassName('regist-btn')[0]

let loginNameEle = document.getElementsByClassName('login-name')[0]
let loginPasswordEle = document.getElementsByClassName('login-password')[0]
let loginBtn = document.getElementsByClassName('login-btn')[0]

let nameEnable = false
let passwordEnable = false


/**
 * 检测姓名是否符合要求
 * 发送到后端，姓名符合正则要求，以及姓名是否重复
 */
nameEle.onblur = function () {
  $.ajax({
    type:'post',
    url:'http://localhost:3000/user/checkName',
    data:{
      name: nameEle.value
    },
    success:(result)=>{
      nameEnable = result.flag
      enableButton()

      if (!result.flag) {
        alert(result.message)
      }
    },
    error:(error)=>{
      console.log(error)
    }
  })
}


//检测密码是否符合要求
passwordEle.onblur = function () {
  let password = passwordEle.value
  if (password) {

    let flag = checkPassword(password)

    passwordEnable = flag

    enableButton()
  }
}


/**
 * 激活button
 */
function enableButton() {
  btn.disabled = !(nameEnable && passwordEnable)
}


function checkPassword(password) {
  let partten = /^\w{8,15}$/
  return partten.test(password)
}

btn.onclick = function () {
  $.ajax({
    type:'post',
    url:'http://localhost:3000/user/regist',
    data:{
      name:nameEle.value,
      password:passwordEle.value
    },
    success:(result)=>{
      if (result.status === 'success') {
        alert('注册成功')
      }
    },
    error:(error)=>{
      console.log(error)
    }
  })
}

loginBtn.onclick = function () {

  let loginName = loginNameEle.value
  let loginPassword = loginPasswordEle.value

  //如果input都不为空
  if (loginName && loginPassword) {
    $.ajax({
      type:'post',
      url:'http://localhost:3000/user/login',
      data:{
        name:loginNameEle.value,
        password:loginPasswordEle.value
      },
      success:(result)=>{
        console.log(result)
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }
}
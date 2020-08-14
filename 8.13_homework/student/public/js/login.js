// 获取selector中option的方式
let majorSelector = document.getElementsByClassName('major')[0]

let genderSelector = document.getElementsByClassName('gender')[0]

// const majorValue = major.value

let nameEle = document.getElementsByClassName('name')[0]

// const genderValue = gender.value

let ageEle = document.getElementsByClassName('age')[0]

let btnEle = document.getElementsByClassName('submit-btn')[0]



function getMajor() {

  const majorIndex = majorSelector.selectedIndex

  const major = majorSelector.options[majorIndex]

  return major.value
}


function getGender() {
    
  const genderIndex = genderSelector.selectedIndex

  const gender = genderSelector.options[genderIndex]

  return gender.value
}


btnEle.onclick = function () {
  $.ajax({
    type: 'post',
    url: 'http://localhost:3000/login',
    data: {
      name:nameEle.value,
      gender: getGender(),
      age:ageEle.value,
      major:getMajor(),
    },
    success: (result) => {
      alert('提交成功')
    },
    error: () => {
      console.log(error)
    }
  })
}
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




//后加的 只显示男或女
let newgenderSelector = document.getElementsByClassName('newgender')[0]

//后加的 只显示男或女
function newgetGender() {
    
  const newgenderIndex = newgenderSelector.selectedIndex

  const newgender = newgenderSelector.options[newgenderIndex]

  return newgender.value
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
      if(result.status === 'success'){

        // console.log(result.students)

        $('.student-list').html('')

        let html = ''

        result.students.forEach((item)=>{

        //   // let gender = item.gender == 1 ? '男' : '女'

          html += `<div><span>${item.name} ${item.gender} ${item.age}岁  学习${item.major}</span></div>`

        })
        // console.log(html)

        $('.student-list').html(html)

        alert('存入成功')

      }else{
        alert(result.message)
      }
    },
    error: () => {
      console.log(error)
    }
  })
}




//后加的 只显示男或女
newgenderSelector.onchange = function(){
  
  // 获取select的值
  $.ajax({
    type: 'post',
    url: 'http://localhost:3000/selector',
    data:{
      gender: newgetGender()
    },
    success:(result)=>{
      
      // 清空
      // 重新渲染
      
      $('.student-list').html('')

      let genderhtml = ''

      console.log(result)
      result.forEach((item)=>{
        if (item.gender == '1') {
          item.gender = '男'
        }else{
          item.gender = '女'
        }
        genderhtml += `<div><span>${item.name} ${item.gender} ${item.age}岁  学习${item.major}</span></div>`

        $('.student-list').html(genderhtml)
      })

      alert('显示成功')

    }
  })
}
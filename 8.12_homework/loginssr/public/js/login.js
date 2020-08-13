var nameEle = document.getElementsByClassName('username')[0];
var passwordEle = document.getElementsByClassName('password')[0];
var checkedEle = document.getElementsByClassName('checked')[0];
var buttonEle = document.getElementsByClassName('login-btn')[0];


/* 检测结果 */
var nameTestResult = false;
var passowrdTestResult = false;


// /* 检测名字 */
nameEle.onblur = function() {

    // value
    var name = nameEle.value;

    // reg
    var partten = /^[a-zA-Z0-9_-]{4,16}$/;

    var flag = partten.test(name);

    var warning = document.getElementsByClassName('warningname')[0];

    if (flag) {
        if (warning) {

            warning.remove();
        }

    } else {
        var ele = createWarning('warningname', '用户名格式错误,4到16位');
        if (!warning) {
            nameEle.after(ele);
        }
    }

    nameTestResult = flag;
    enableButton();
}


// /* 检测密码 */
passwordEle.onblur = function() {

    // value
    var password = passwordEle.value;

    // reg
    var partten = /^\w{8,15}$/;

    var flag = partten.test(password);

    var warning = document.getElementsByClassName('warningpassword')[0];

    if (flag) {
        if (warning) {

            warning.remove();
        }

    } else {
        var ele = createWarning('warningpassword', '密码格式错误，password的长度8到15位');
        if (!warning) {
            passwordEle.after(ele);
        }
    }

    passowrdTestResult = flag;

    enableButton();
}


checkedEle.onblur = function() {

    var password = passwordEle.value;
    var checked = checkedEle.value;

    var warning = document.getElementsByClassName('warningchecked')[0];

    if (password == checked) {
        if (warning) {

            warning.remove();
        }
    } else {
        var ele = createWarning('warningchecked', '两次输入的密码不一致');
        if (!warning) {
            checkedEle.after(ele);
        }
    }

    enableButton();
}


/* 激活button */
function enableButton() {
    buttonEle.disabled = !(nameTestResult && passowrdTestResult)
}

// /* 创建提示元素 */
function createWarning(target, content) {

    var ele = document.createElement('div');

    ele.className = target;

    ele.innerHTML = content;

    return ele;
}

buttonEle.onclick = function() {
    var name = nameEle.value;
    var password = passwordEle.value;
    var checked = checkedEle.value;

    $.ajax({
        type: 'post',
        url: 'http://localhost:3000/regist',
        data: {
            name,
            password,
            checked
        },
        success: (result) => {
            console.log(result);
        },
        error: () => {
            console.log(error);
        }
    })
}
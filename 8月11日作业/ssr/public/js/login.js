let btn = document.getElementsByClassName('login-btn')[0]
let nameInput = document.getElementsByClassName('username')[0]
let passwordInput = document.getElementsByClassName('password')[0]

btn.onclick = function() {
    if (nameInput.value && passwordInput.value) {
        $.ajax({
            type: 'post',
            url: 'http://localhost:3000/login',
            data: {
                name: nameInput.value,
                password: passwordInput.value
            },
            success: (result) => {
                console.log(result)
                    // location.href = "http://localhost:3000/testlogin"
            },
            error: () => {

            }
        })
    }
}
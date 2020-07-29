window.onload = function() {
    var container = document.getElementsByClassName('container')[0]
    var banner = document.getElementsByClassName('banner')[0]
    var li = document.getElementsByClassName('banner-li')
    var img = document.getElementsByClassName('banner-img')[0]
    var buttonContainer = document.getElementsByClassName('button_container')[0]
    var arrows = document.getElementsByClassName('arrow')
    var buttons = document.getElementsByClassName('button_container_circle')

    var prev = document.getElementsByClassName('prev')[0]
    var next = document.getElementsByClassName('next')[0]
    var index = 1

    var timer
    StopAnimation()
    StartAnimation()

    controlMouse()

    BindClickButton()

    container.style.width = img.offsetWidth + "px"
    container.style.height = img.offsetHeight + 'px'
    container.style.overflow = "hidden"


    banner.style.width = img.offsetWidth * li.length + 'px'
    banner.style.height = img.offsetHeight + 'px'
    banner.style.left = -(img.offsetWidth) + 'px'

    for (let i = 0; i < arrows.length; i++) {
        arrows[i].style.top = parseInt(img.offsetHeight) / 2 - parseInt(arrows[i].offsetHeight) / 2 + 'px'
    }


    buttonContainer.style.top = img.offsetHeight - 40 + "px";
    buttonContainer.style.left = (img.offsetWidth - buttonContainer.offsetWidth) / 2 + 'px';


    prev.onclick = function() {
        index--
        animate()
    }
    next.onclick = function() {
        index++
        animate()
    }

    function animate() {
        banner.style.transition = '0.3s'
        banner.style.left = -parseInt(img.offsetWidth) * index + 'px'

        if (index === 0) {
            index = li.length - 2
            reLocation()
        } else if (index === li.length - 1) {
            index = 1
            reLocation()
        }
        controlButton()
    }

    function reLocation() {
        setTimeout(() => {
            banner.style.transition = "0s"
            banner.style.left = -parseInt(img.offsetWidth) * index + 'px'
        }, 300)
    }
    // function reLocation() {
    //     banner.style.transition = "0s";
    //     banner.style.left = -parseInt(img.offsetWidth) * index + "px";
    //     window.requestAnimationFrame(reLocation);
    // }


    function controlButton() {
        var key
        if (index == 0) {
            key = 5
        } else if (index == li.length - 1) {
            key = 1
        } else {
            key = index
        }

        for (var i = 0; i < buttons.length; i++) {
            if (key == buttons[i].getAttribute('index')) {
                buttons[i].className = 'button_container_circle on'
            } else {
                buttons[i].className = 'button_container_circle'
            }
        }
    }

    function BindClickButton() {
        for (var i = 0; i < buttons.length; i++) {
            (function(ii) {
                buttons[ii].onclick = function() {
                    // console.log(111)
                    index = buttons[ii].getAttribute('index')
                    animate()
                }
            })(i)

        }
    }

    // 定时自动轮播
    function StartAnimation() {
        timer = setInterval(() => {
            next.onclick()
        }, 2000)
    }
    // 停止动画
    function StopAnimation() {
        if (timer) {
            clearInterval(timer)
        }
    }


    function controlMouse() {
        container.onmouseover = function() {
            StopAnimation()
        }
        container.onmouseout = function() {
            StartAnimation()
        }
    }






}
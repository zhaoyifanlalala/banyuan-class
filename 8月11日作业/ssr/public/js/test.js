let input1 = document.getElementsByClassName('input1')[0]
let input2 = document.getElementsByClassName('input2')[0]

init()

// let input = JSON.parse($.cookie('input'));



let data = $.cookie('form') ? JSON.parse($.cookie('form')) : {};


input1.onblur = function() {
    data.input1 = input1.value;
    $.cookie('form', JSON.stringify(data));

    // $.cookie('input1', input1.value);
}

input2.onblur = function() {
    data.input2 = input2.value;
    $.cookie('form', JSON.stringify(data));
    // $.cookie('input2', input2.value);
}


function init() {

    // console.log($.cookie('input1'))
    // if ($.cookie('input1')) {

    //     input1.value = $.cookie('input1');
    // }

    // if ($.cookie('input2')) {

    //     input2.value = $.cookie('input2');
    // }


    if ($.cookie('form')) {

        let data = JSON.parse($.cookie('form'));
        // if (data) {
        input1.value = data.input1 || '';
        input2.value = data.input2 || '';
        // }

    }
}
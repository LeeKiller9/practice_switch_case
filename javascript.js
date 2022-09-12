function check_browser() {
    let browser = prompt("Enter browser name!")
    switch (browser) {
        case 'Edge':
            alert("You've got the Edge!")
            break
        case 'Chrome':
        case 'Firefox':
        case 'Safari':
        case 'Opera':
            alert('Okay we support these browsers too')
            break
        default:
            alert('We hope that this page looks ok!')
    }
}

function input_a() {
    let a = prompt('a?', '')
    switch (a) {
        case 0:
            alert(0)
            break
        case 1:
            alert(1)
            break
        case 2:
        case 3:
            alert('2,3')
            break
    }
}

function check_number_if_statement() {
    let value = parseInt(prompt('Type a number', '0'))
    if (value > 0) {
        alert(1);
    } else if (value < 0) {
        alert(-1);
    } else {
        alert(0);
    }
}

function check_number_switch_statement() {
    let number = parseInt(prompt('Type a number', '0'))
    let abs_value = Math.abs(number)
    let value = number / abs_value
    switch (value) {
        case 1:
            alert(1)
            break
        case -1:
            alert(-1)
            break
        default:
            alert(0)
    }
}
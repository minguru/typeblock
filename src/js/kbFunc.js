// keyboard reacting function scripts

const { $keyboard, $main, kbLayout } = require('./kbGen')
const { $tbTextarea } = require('./tbGen')

const keys = $keyboard.childNodes

function keyPress(e, t, k) {
    // e = eventType
    // t = type : pressed or released
    // k = key elements
    $tbTextarea.focus()

    let evtType = e.type
    let pkey

    if (evtType === 'keydown' || 'keyup') pkey = e.code
    if (evtType === 'mousedown' || 'mouseup') pkey = e.target.getAttribute('data-keyCode')
    
    k.forEach((key, idx) => {
        const kcode = key.getAttribute('data-keyCode')
        if (pkey == kcode) t ? key.classList.add('p') : key.classList.remove('p')
    })

    if (evtType === 'mousedown') {
        // typing text on textarea
        const keyValue = e.target.getAttribute('data-keyname')
        if (!(keyValue.length > 1)) $tbTextarea.value = `${$tbTextarea.value}${keyValue.toString()}`
        else if (keyValue == 'spacebar') $tbTextarea.value = `${$tbTextarea.value} `
        else if (keyValue == 'backspace') $tbTextarea.value = `${$tbTextarea.value.substring(0, $tbTextarea.value.length - 1)}`
    }
}

window.addEventListener('keydown', (e) => {
    keyPress(e, true, keys)
})

window.addEventListener('keyup', (e) => {
    keyPress(e, false, keys)
})

keys.forEach((key, idx) => {
    key.addEventListener('mousedown', (e) => {
        keyPress(e, true, keys)
    })
    key.addEventListener('mouseup', (e) => {
        keyPress(e, false, keys)
    })
    key.addEventListener('mouseout', (e) => {
        keyPress(e, false, keys)
    })
})
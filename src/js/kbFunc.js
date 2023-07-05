const { $keyboard, $main, kbLayout } = require('./kbGen')

function keyPress(e, t) {
    // t = type : pressed or released
    const pkey = e.code
    const keys = $keyboard.childNodes
    
    keys.forEach((key, idx) => {
        const kcode = key.getAttribute('data-keyCode')
        if (pkey == kcode) t ? key.classList.add('p') : key.classList.remove('p')
    })
}

window.addEventListener('keydown', (e) => {
    keyPress(e, true)
})

window.addEventListener('keyup', (e) => {
    keyPress(e, false)
})

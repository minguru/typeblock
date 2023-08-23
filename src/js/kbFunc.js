// keyboard reacting function scripts

const { $keyboard, $main, kbLayout } = require('./kbGen')
const { $tbTextarea } = require('./tbGen')

const keys = $keyboard.querySelectorAll('key')

/**
 * @description graphic keyboard pressing visualizer
 * @param {Event} evt 
 * @param {Boolean} state
*/
let capslock = false
const keyPress = (evt, state) => {
    const e = evt,
          t = evt.type
          tg = t === 'mousedown' ? evt.target : t === 'keydown' ? evt.code : null,
          s = state

    if (s) {
        // press
        if (t === 'keydown') {
            keys.forEach((key, idx) => {
                tg === key.getAttribute('data-keycode') ? key.classList.add('p') : false
            })
        }
        if (t === 'mousedown') {
            tg.classList.add('p')

            const keyData = tg.getAttribute('data-keydata')
            switch(keyData) {
                case 'backspace':
                    $tbTextarea.value = `${$tbTextarea.value.substr(0, $tbTextarea.value.length - 1)}`
                    break
                case 'lsb':
                    $tbTextarea.value = `${$tbTextarea.value}${capslock ? '{' : '['}`
                    break
                case 'rsb':
                    $tbTextarea.value = `${$tbTextarea.value}${capslock ? '}' : ']'}`
                    break
                case 'backdash':
                    $tbTextarea.value = `${$tbTextarea.value}${capslock ? '|' : '\\'}`
                    break
                case 'minus':
                    $tbTextarea.value = `${$tbTextarea.value}${capslock ? '_' : '-'}`
                    break
                case 'equal':
                    $tbTextarea.value = `${$tbTextarea.value}${capslock ? '+' : '='}`
                    break
                case 'colon':
                    $tbTextarea.value = `${$tbTextarea.value}${capslock ? ':' : ';'}`
                    break
                case 'quote':
                    $tbTextarea.value = `${$tbTextarea.value}${capslock ? '"' : '\''}`
                    break
                case 'lt':
                    $tbTextarea.value = `${$tbTextarea.value}${capslock ? '<' : ','}`
                    break
                case 'gt':
                    $tbTextarea.value = `${$tbTextarea.value}${capslock ? '>' : '.'}`
                    break
                case 'dash':
                    $tbTextarea.value = `${$tbTextarea.value}${capslock ? '?' : '/'}`
                    break
                case 'capslock':
                    if (capslock) {
                        capslock = false
                        tg.classList.remove('active')
                    } else {
                        capslock = true
                        tg.classList.add('active')
                    }
                    break;
                case 'spacebar':
                    $tbTextarea.value = `${$tbTextarea.value} `
                    break
                default:
                    keyData.length <= 1 ? $tbTextarea.value = `${$tbTextarea.value}${capslock ? keyData.toUpperCase() : keyData.toLowerCase()}` : false
                    break
            }
        }
    } else {
        // release press
        keys.forEach((key, idx) => { key.classList.remove('p') })
    }
}

window.addEventListener('keydown', e => {
    $tbTextarea.focus()
    keyPress(e, true)
})
window.addEventListener('keyup', e => {
    keyPress(e, false)
})

keys.forEach((key, idx) => {
    key.addEventListener('mousedown', e => {
        keyPress(e, true)
    })
    key.addEventListener('mouseup', e => {
        keyPress(e, false)
    })
})
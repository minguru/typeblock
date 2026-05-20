// Keyboard generate scripts

const kbLayout = {
    R4: [
        {data: 'tilde', unit: 'u1', code: 'Backquote'}, {data: '1', unit: 'u1', code: 'Digit1'}, {data: '2', unit: 'u1', code: 'Digit2'}, {data: '3', unit: 'u1', code: 'Digit3'}, {data: '4', unit: 'u1', code: 'Digit4'}, {data: '5', unit: 'u1', code: 'Digit5'}, {data: '6', unit: 'u1', code: 'Digit6'}, {data: '7', unit: 'u1', code: 'Digit7'}, {data: '8', unit: 'u1', code: 'Digit8'}, {data: '9', unit: 'u1', code: 'Digit9'}, {data: '0', unit: 'u1', code: 'Digit0'}, {data: 'minus', unit: 'u1', code: 'Minus'}, {data: 'equal', unit: 'u1', code: 'Equal'}, {data: 'backspace', unit: 'u1h', code: 'Backspace'} // 14
    ],
    R3: [
        {data: 'tab', unit: 'u1h', code: 'Tab'}, {data: 'q', unit: 'u1', code: 'KeyQ'}, {data: 'w', unit: 'u1', code: 'KeyW'}, {data: 'e', unit: 'u1', code: 'KeyE'}, {data: 'r', unit: 'u1', code: 'KeyR'}, {data: 't', unit: 'u1', code: 'KeyT'}, {data: 'y', unit: 'u1', code: 'KeyY'}, {data: 'u', unit: 'u1', code: 'KeyU'}, {data: 'i', unit: 'u1', code: 'KeyI'}, {data: 'o', unit: 'u1', code: 'KeyO'}, {data: 'p', unit: 'u1', code: 'KeyP'}, {data: 'lsb', unit: 'u1', code: 'BracketLeft'}, {data: 'rsb', unit: 'u1', code: 'BracketRight'}, {data: 'backdash', unit: 'u1', code: 'Backslash'} // 14
    ],
    R2: [
        {data: 'capslock', unit: 'u1tq', code: 'CapsLock'}, {data: 'a', unit: 'u1', code: 'KeyA'}, {data: 's', unit: 'u1', code: 'KeyS'}, {data: 'd', unit: 'u1', code: 'KeyD'}, {data: 'f', unit: 'u1', code: 'KeyF'}, {data: 'g', unit: 'u1', code: 'KeyG'}, {data: 'h', unit: 'u1', code: 'KeyH'}, {data: 'j', unit: 'u1', code: 'KeyJ'}, {data: 'k', unit: 'u1', code: 'KeyK'}, {data: 'l', unit: 'u1', code: 'KeyL'}, {data: 'colon', unit: 'u1', code: 'Semicolon'}, {data: 'quote', unit: 'u1', code: 'Quote'}, {data: 'enter', unit: 'u1tq', code: 'Enter'} // 13
    ],
    R1: [
        {data: 'lshift', unit: 'u2q', code: 'ShiftLeft'}, {data: 'z', unit: 'u1', code: 'KeyZ'}, {data: 'x', unit: 'u1', code: 'KeyX'}, {data: 'c', unit: 'u1', code: 'KeyC'}, {data: 'v', unit: 'u1', code: 'KeyV'}, {data: 'b', unit: 'u1', code: 'KeyB'}, {data: 'n', unit: 'u1', code: 'KeyN'}, {data: 'm', unit: 'u1', code: 'KeyM'}, {data: 'lt', unit: 'u1', code: 'Comma'}, {data: 'gt', unit: 'u1', code: 'Period'}, {data: 'dash', unit: 'u1', code: 'Slash'}, {data: 'rshift', unit: 'u2q', code: 'ShiftRight'} // 12
    ],
    bR1: [
        {data: 'lctrl', unit: 'u1h', code: 'ControlLeft'}, {data: 'lopt', unit: 'u1h', code: 'AltLeft'}, {data: 'lcmnd', unit: 'u1tq', code: 'MetaLeft'}, {data: 'spacebar', unit: 'u5', code: 'Space'}, {data: 'rcmnd', unit: 'u1tq', code: 'MetaRight'}, {data: 'ropt', unit: 'u1h', code: 'AltRight'}, {data: 'rctrl', unit: 'u1h', code: 'ControlRight'} // 7
    ]
}

// main element
const $main = document.querySelector('main')

// keyboard element
const keyboard = document.createElement('keyboard')

for (rown in kbLayout) {
    for (let i = 0; i < kbLayout[rown].length; i++) {
        const key = document.createElement('key')
        key.className = `${rown} ${kbLayout[rown][i].unit}`
        key.setAttribute('data-keydata', kbLayout[rown][i].data)
        key.setAttribute('data-keycode', kbLayout[rown][i].code)
        keyboard.appendChild(key)
    }
}

// generate keyboard
$main.appendChild(keyboard)

// select keyboard after rendering
const $keyboard = document.querySelector('keyboard')

module.exports = { kbLayout, $main, $keyboard }

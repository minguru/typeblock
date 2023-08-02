// Keyboard generate scripts

const kbLayout = {
    R4: [
        {name: 'tilde', unit: 'u1', code: 'Backquote'}, {name: '1', unit: 'u1', code: 'Digit1'}, {name: '2', unit: 'u1', code: 'Digit2'}, {name: '3', unit: 'u1', code: 'Digit3'}, {name: '4', unit: 'u1', code: 'Digit4'}, {name: '5', unit: 'u1', code: 'Digit5'}, {name: '6', unit: 'u1', code: 'Digit6'}, {name: '7', unit: 'u1', code: 'Digit7'}, {name: '8', unit: 'u1', code: 'Digit8'}, {name: '9', unit: 'u1', code: 'Digit9'}, {name: '0', unit: 'u1', code: 'Digit0'}, {name: 'minus', unit: 'u1', code: 'Minus'}, {name: 'equal', unit: 'u1', code: 'Equal'}, {name: 'backspace', unit: 'u1h', code: 'Backspace'} // 14
    ],
    R3: [
        {name: 'tab', unit: 'u1h', code: 'Tab'}, {name: 'q', unit: 'u1', code: 'KeyQ'}, {name: 'w', unit: 'u1', code: 'KeyW'}, {name: 'e', unit: 'u1', code: 'KeyE'}, {name: 'r', unit: 'u1', code: 'KeyR'}, {name: 't', unit: 'u1', code: 'KeyT'}, {name: 'y', unit: 'u1', code: 'KeyY'}, {name: 'u', unit: 'u1', code: 'KeyU'}, {name: 'i', unit: 'u1', code: 'KeyI'}, {name: 'o', unit: 'u1', code: 'KeyO'}, {name: 'p', unit: 'u1', code: 'KeyP'}, {name: 'lsb', unit: 'u1', code: 'BracketLeft'}, {name: 'rsb', unit: 'u1', code: 'BracketRight'}, {name: 'backdash', unit: 'u1', code: 'Backslash'} // 14
    ],
    R2: [
        {name: 'capslock', unit: 'u1tq', code: 'CapsLock'}, {name: 'a', unit: 'u1', code: 'KeyA'}, {name: 's', unit: 'u1', code: 'KeyS'}, {name: 'd', unit: 'u1', code: 'KeyD'}, {name: 'f', unit: 'u1', code: 'KeyF'}, {name: 'g', unit: 'u1', code: 'KeyG'}, {name: 'h', unit: 'u1', code: 'KeyH'}, {name: 'j', unit: 'u1', code: 'KeyJ'}, {name: 'k', unit: 'u1', code: 'KeyK'}, {name: 'l', unit: 'u1', code: 'KeyL'}, {name: 'colon', unit: 'u1', code: 'Semicolon'}, {name: 'quote', unit: 'u1', code: 'Quote'}, {name: 'enter', unit: 'u1tq', code: 'Enter'} // 13
    ],
    R1: [
        {name: 'lshift', unit: 'u2q', code: 'ShiftLeft'}, {name: 'z', unit: 'u1', code: 'KeyZ'}, {name: 'x', unit: 'u1', code: 'KeyX'}, {name: 'c', unit: 'u1', code: 'KeyC'}, {name: 'v', unit: 'u1', code: 'KeyV'}, {name: 'b', unit: 'u1', code: 'KeyB'}, {name: 'n', unit: 'u1', code: 'KeyN'}, {name: 'm', unit: 'u1', code: 'KeyM'}, {name: 'lt', unit: 'u1', code: 'Comma'}, {name: 'gt', unit: 'u1', code: 'Period'}, {name: 'dash', unit: 'u1', code: 'Slash'}, {name: 'rshift', unit: 'u2q', code: 'ShiftRight'} // 12
    ],
    bR1: [
        {name: 'lctrl', unit: 'u1h', code: 'ControlLeft'}, {name: 'lopt', unit: 'u1h', code: 'AltLeft'}, {name: 'lcmnd', unit: 'u1tq', code: 'MetaLeft'}, {name: 'spacebar', unit: 'u5', code: 'Space'}, {name: 'rcmnd', unit: 'u1tq', code: 'MetaRight'}, {name: 'ropt', unit: 'u1h', code: 'AltRight'}, {name: 'rctrl', unit: 'u1h', code: 'ControlRight'} // 7
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
        key.setAttribute('data-keyName', kbLayout[rown][i].name)
        key.setAttribute('data-keyCode', kbLayout[rown][i].code)
        keyboard.appendChild(key)
    }
}

// generate keyboard
$main.appendChild(keyboard)

// select keyboard after rendering
const $keyboard = document.querySelector('keyboard')

module.exports = { kbLayout, $main, $keyboard }

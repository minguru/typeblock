// Keyboard generation

const kbLayout = {
    R4: [
        {name: 'tilde', unit: 'u1'}, {name: '1', unit: 'u1'}, {name: '2', unit: 'u1'}, {name: '3', unit: 'u1'}, {name: '4', unit: 'u1'}, {name: '5', unit: 'u1'}, {name: '6', unit: 'u1'}, {name: '7', unit: 'u1'}, {name: '8', unit: 'u1'}, {name: '9', unit: 'u1'}, {name: '0', unit: 'u1'}, {name: 'minus', unit: 'u1'}, {name: 'equal', unit: 'u1'}, {name: 'backspace', unit: 'u1h'} // 14
    ],
    R3: [
        {name: 'tab', unit: 'u1h'}, {name: 'q', unit: 'u1'}, {name: 'w', unit: 'u1'}, {name: 'e', unit: 'u1'}, {name: 'r', unit: 'u1'}, {name: 't', unit: 'u1'}, {name: 'y', unit: 'u1'}, {name: 'u', unit: 'u1'}, {name: 'i', unit: 'u1'}, {name: 'o', unit: 'u1'}, {name: 'p', unit: 'u1'}, {name: 'lsb', unit: 'u1'}, {name: 'rsb', unit: 'u1'}, {name: 'backdash', unit: 'u1'} // 14
    ],
    R2: [
        {name: 'capslock', unit: 'u1tq'}, {name: 'a', unit: 'u1'}, {name: 's', unit: 'u1'}, {name: 'd', unit: 'u1'}, {name: 'f', unit: 'u1'}, {name: 'g', unit: 'u1'}, {name: 'h', unit: 'u1'}, {name: 'j', unit: 'u1'}, {name: 'k', unit: 'u1'}, {name: 'l', unit: 'u1'}, {name: 'colon', unit: 'u1'}, {name: 'quote', unit: 'u1'}, {name: 'enter', unit: 'u1tq'} // 13
    ],
    R1: [
        {name: 'lshift', unit: 'u2q'}, {name: 'z', unit: 'u1'}, {name: 'x', unit: 'u1'}, {name: 'c', unit: 'u1'}, {name: 'v', unit: 'u1'}, {name: 'b', unit: 'u1'}, {name: 'n', unit: 'u1'}, {name: 'm', unit: 'u1'}, {name: 'lt', unit: 'u1'}, {name: 'gt', unit: 'u1'}, {name: 'dash', unit: 'u1'}, {name: 'rshift', unit: 'u2q'} // 12
    ],
    bR1: [
        {name: 'lctrl', unit: 'u1h'}, {name: 'lopt', unit: 'u1h'}, {name: 'lcmnd', unit: 'u1tq'}, {name: 'spacebar', unit: 'u5'}, {name: 'rcmnd', unit: 'u1tq'}, {name: 'ropt', unit: 'u1h'}, {name: 'rctrl', unit: 'u1h'} // 7
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
        key.setAttribute('aria-keytype', kbLayout[rown][i].name)
        keyboard.appendChild(key)
    }
}

// generate keyboard
$main.appendChild(keyboard)

// select keyboard after rendering
const $keyboard = document.querySelector('keyboard')

console.log($keyboard)
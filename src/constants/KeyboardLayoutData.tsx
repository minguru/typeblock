interface KeyData {
  data: string,
  unit: string,
  code: string,
  text?: string[],
  key?: string
}

interface KeyboardLayoutData {
  R4: KeyData[],
  R3: KeyData[],
  R2: KeyData[],
  R1: KeyData[],
  bR1: KeyData[]
}

const KeyboardLayoutData: KeyboardLayoutData = {
    R4: [
      {data: 'tilde', unit: 'u1', code: 'Backquote', text: ['~', '`'], key: '`'},
      {data: '1', unit: 'u1', code: 'Digit1', text: ['!', '1'], key: '1'},
      {data: '2', unit: 'u1', code: 'Digit2', text: ['@', '2'], key: '2'},
      {data: '3', unit: 'u1', code: 'Digit3', text: ['#', '3'], key: '3'},
      {data: '4', unit: 'u1', code: 'Digit4', text: ['$', '4'], key: '4'},
      {data: '5', unit: 'u1', code: 'Digit5', text: ['%', '5'], key: '5'},
      {data: '6', unit: 'u1', code: 'Digit6', text: ['^', '6'], key: '6'},
      {data: '7', unit: 'u1', code: 'Digit7', text: ['&', '7'], key: '7'},
      {data: '8', unit: 'u1', code: 'Digit8', text: ['*', '8'], key: '8'},
      {data: '9', unit: 'u1', code: 'Digit9', text: ['(', '9'], key: '9'},
      {data: '0', unit: 'u1', code: 'Digit0', text: [')', '0'], key: '0'},
      {data: 'minus', unit: 'u1', code: 'Minus', text: ['_', '-'], key: '-'},
      {data: 'equal', unit: 'u1', code: 'Equal', text: ['+', '='], key: '='},
      {data: 'backspace', unit: 'u1h', code: 'Backspace', text: ['⌫'], key: 'Backspace'} // 14
    ],
    R3: [
      {data: 'tab', unit: 'u1h', code: 'Tab', text: ['⇥'], key: ''},
      {data: 'q', unit: 'u1', code: 'KeyQ', text: ['Q', 'ㅂ'], key: 'q'},
      {data: 'w', unit: 'u1', code: 'KeyW', text: ['W', 'ㅈ'], key: 'w'},
      {data: 'e', unit: 'u1', code: 'KeyE', text: ['E', 'ㄷ'], key: 'e'},
      {data: 'r', unit: 'u1', code: 'KeyR', text: ['R', 'ㄱ'], key: 'r'},
      {data: 't', unit: 'u1', code: 'KeyT', text: ['T', 'ㅅ'], key: 't'},
      {data: 'y', unit: 'u1', code: 'KeyY', text: ['Y', 'ㅛ'], key: 'y'},
      {data: 'u', unit: 'u1', code: 'KeyU', text: ['U', 'ㅕ'], key: 'u'},
      {data: 'i', unit: 'u1', code: 'KeyI', text: ['I', 'ㅑ'], key: 'i'},
      {data: 'o', unit: 'u1', code: 'KeyO', text: ['O', 'ㅐ'], key: 'o'},
      {data: 'p', unit: 'u1', code: 'KeyP', text: ['P', 'ㅔ'], key: 'p'},
      {data: 'lsb', unit: 'u1', code: 'BracketLeft', text: ['{', '['], key: '['},
      {data: 'rsb', unit: 'u1', code: 'BracketRight', text: ['}', ']'], key: ']'},
      {data: 'backdash', unit: 'u1', code: 'Backslash', text: ['|', '\\'], key: '\\'} // 14
    ],
    R2: [
      {data: 'capslock', unit: 'u1tq', code: 'CapsLock', text: ['⇪'], key: ''},
      {data: 'a', unit: 'u1', code: 'KeyA', text: ['A', 'ㅁ'], key: 'a'},
      {data: 's', unit: 'u1', code: 'KeyS', text: ['S', 'ㄴ'], key: 's'},
      {data: 'd', unit: 'u1', code: 'KeyD', text: ['D', 'ㅇ'], key: 'd'},
      {data: 'f', unit: 'u1', code: 'KeyF', text: ['F', 'ㄹ'], key: 'f'},
      {data: 'g', unit: 'u1', code: 'KeyG', text: ['G', 'ㅎ'], key: 'g'},
      {data: 'h', unit: 'u1', code: 'KeyH', text: ['H', 'ㅗ'], key: 'h'},
      {data: 'j', unit: 'u1', code: 'KeyJ', text: ['J', 'ㅓ'], key: 'j'},
      {data: 'k', unit: 'u1', code: 'KeyK', text: ['K', 'ㅏ'], key: 'k'},
      {data: 'l', unit: 'u1', code: 'KeyL', text: ['L', 'ㅣ'], key: 'l'},
      {data: 'colon', unit: 'u1', code: 'Semicolon', text: [':', ';'], key: ';'},
      {data: 'quote', unit: 'u1', code: 'Quote', text: ['"', "'"], key: "'"},
      {data: 'enter', unit: 'u1tq', code: 'Enter', text: ['⏎'], key: ''} // 13
    ],
    R1: [
      {data: 'lshift', unit: 'u2q', code: 'ShiftLeft', text: ['⇧'], key: ''},
      {data: 'z', unit: 'u1', code: 'KeyZ', text: ['Z', 'ㅋ'], key: 'z'},
      {data: 'x', unit: 'u1', code: 'KeyX', text: ['X', 'ㅌ'], key: 'x'},
      {data: 'c', unit: 'u1', code: 'KeyC', text: ['C', 'ㅊ'], key: 'c'},
      {data: 'v', unit: 'u1', code: 'KeyV', text: ['V', 'ㅍ'], key: 'v'},
      {data: 'b', unit: 'u1', code: 'KeyB', text: ['B', 'ㅠ'], key: 'b'},
      {data: 'n', unit: 'u1', code: 'KeyN', text: ['N', 'ㅜ'], key: 'n'},
      {data: 'm', unit: 'u1', code: 'KeyM', text: ['M', 'ㅡ'], key: 'm'},
      {data: 'lt', unit: 'u1', code: 'Comma', text: ['<', ','], key: ','},
      {data: 'gt', unit: 'u1', code: 'Period', text: ['>', '.'], key: '.'},
      {data: 'dash', unit: 'u1', code: 'Slash', text: ['?', '/'], key: '/'},
      {data: 'rshift', unit: 'u2q', code: 'ShiftRight', text: ['⇧'], key: ''} // 12
    ],
    bR1: [
      {data: 'lctrl', unit: 'u1h', code: 'ControlLeft', text: ['⌃', 'control'], key: ''},
      {data: 'lopt', unit: 'u1h', code: 'AltLeft', text: ['⌥', 'option'], key: ''},
      {data: 'lcmnd', unit: 'u1tq', code: 'MetaLeft', text: ['⌘', 'command'], key: ''},
      {data: 'spacebar', unit: 'u5', code: 'Space', text: [], key: ' '},
      {data: 'rcmnd', unit: 'u1tq', code: 'MetaRight', text: ['⌘', 'command'], key: ''},
      {data: 'ropt', unit: 'u1h', code: 'AltRight', text: ['⌥', 'option'], key: ''},
      {data: 'rctrl', unit: 'u1h', code: 'ControlRight', text: ['⌃', 'control'], key: ''} // 7
    ]
}

export default KeyboardLayoutData

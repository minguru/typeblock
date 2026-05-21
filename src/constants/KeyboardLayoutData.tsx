interface KeyData {
  data: string,
  unit: string,
  code: string,
  text?: string[]
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
      {data: 'tilde', unit: 'u1', code: 'Backquote', text: ['~', '`']}, 
      {data: '1', unit: 'u1', code: 'Digit1', text: ['!', '1']}, 
      {data: '2', unit: 'u1', code: 'Digit2', text: ['@', '2']}, 
      {data: '3', unit: 'u1', code: 'Digit3', text: ['#', '3']}, 
      {data: '4', unit: 'u1', code: 'Digit4', text: ['$', '4']}, 
      {data: '5', unit: 'u1', code: 'Digit5', text: ['%', '5']}, 
      {data: '6', unit: 'u1', code: 'Digit6', text: ['^', '6']},
      {data: '7', unit: 'u1', code: 'Digit7', text: ['&', '7']},
      {data: '8', unit: 'u1', code: 'Digit8', text: ['*', '8']},
      {data: '9', unit: 'u1', code: 'Digit9', text: ['(', '9']},
      {data: '0', unit: 'u1', code: 'Digit0', text: [')', '0']},
      {data: 'minus', unit: 'u1', code: 'Minus', text: ['_', '-']},
      {data: 'equal', unit: 'u1', code: 'Equal', text: ['+', '=']},
      {data: 'backspace', unit: 'u1h', code: 'Backspace', text: ['⌫']} // 14
    ],
    R3: [
      {data: 'tab', unit: 'u1h', code: 'Tab', text: ['⇥']},
      {data: 'q', unit: 'u1', code: 'KeyQ', text: ['Q', 'ㅂ']},
      {data: 'w', unit: 'u1', code: 'KeyW', text: ['W', 'ㅈ']},
      {data: 'e', unit: 'u1', code: 'KeyE', text: ['E', 'ㄷ']},
      {data: 'r', unit: 'u1', code: 'KeyR', text: ['R', 'ㄱ']},
      {data: 't', unit: 'u1', code: 'KeyT', text: ['T', 'ㅅ']},
      {data: 'y', unit: 'u1', code: 'KeyY', text: ['Y', 'ㅛ']},
      {data: 'u', unit: 'u1', code: 'KeyU', text: ['U', 'ㅕ']},
      {data: 'i', unit: 'u1', code: 'KeyI', text: ['I', 'ㅑ']},
      {data: 'o', unit: 'u1', code: 'KeyO', text: ['O', 'ㅐ']},
      {data: 'p', unit: 'u1', code: 'KeyP', text: ['P', 'ㅔ']},
      {data: 'lsb', unit: 'u1', code: 'BracketLeft', text: ['{', '[']},
      {data: 'rsb', unit: 'u1', code: 'BracketRight', text: ['}', ']']},
      {data: 'backdash', unit: 'u1', code: 'Backslash', text: ['|', '\\']} // 14
    ],
    R2: [
      {data: 'capslock', unit: 'u1tq', code: 'CapsLock', text: ['⇪']},
      {data: 'a', unit: 'u1', code: 'KeyA', text: ['A', 'ㅁ']},
      {data: 's', unit: 'u1', code: 'KeyS', text: ['S', 'ㄴ']},
      {data: 'd', unit: 'u1', code: 'KeyD', text: ['D', 'ㅇ']},
      {data: 'f', unit: 'u1', code: 'KeyF', text: ['F', 'ㄹ']},
      {data: 'g', unit: 'u1', code: 'KeyG', text: ['G', 'ㅎ']},
      {data: 'h', unit: 'u1', code: 'KeyH', text: ['H', 'ㅗ']},
      {data: 'j', unit: 'u1', code: 'KeyJ', text: ['J', 'ㅓ']},
      {data: 'k', unit: 'u1', code: 'KeyK', text: ['K', 'ㅏ']},
      {data: 'l', unit: 'u1', code: 'KeyL', text: ['L', 'ㅣ']},
      {data: 'colon', unit: 'u1', code: 'Semicolon', text: [':', ';']},
      {data: 'quote', unit: 'u1', code: 'Quote', text: ['"', "'"]},
      {data: 'enter', unit: 'u1tq', code: 'Enter', text: ['⏎']} // 13
    ],
    R1: [
      {data: 'lshift', unit: 'u2q', code: 'ShiftLeft', text: ['⇧']},
      {data: 'z', unit: 'u1', code: 'KeyZ', text: ['Z', 'ㅋ']},
      {data: 'x', unit: 'u1', code: 'KeyX', text: ['X', 'ㅌ']},
      {data: 'c', unit: 'u1', code: 'KeyC', text: ['C', 'ㅊ']},
      {data: 'v', unit: 'u1', code: 'KeyV', text: ['V', 'ㅍ']},
      {data: 'b', unit: 'u1', code: 'KeyB', text: ['B', 'ㅠ']},
      {data: 'n', unit: 'u1', code: 'KeyN', text: ['N', 'ㅜ']},
      {data: 'm', unit: 'u1', code: 'KeyM', text: ['M', 'ㅡ']},
      {data: 'lt', unit: 'u1', code: 'Comma', text: ['<', ',']},
      {data: 'gt', unit: 'u1', code: 'Period', text: ['>', '.']},
      {data: 'dash', unit: 'u1', code: 'Slash', text: ['?', '/']},
      {data: 'rshift', unit: 'u2q', code: 'ShiftRight', text: ['⇧']} // 12
    ],
    bR1: [
      {data: 'lctrl', unit: 'u1h', code: 'ControlLeft', text: ['⌃', 'control']},
      {data: 'lopt', unit: 'u1h', code: 'AltLeft', text: ['⌥', 'option']},
      {data: 'lcmnd', unit: 'u1tq', code: 'MetaLeft', text: ['⌘', 'command']},
      {data: 'spacebar', unit: 'u5', code: 'Space', text: []},
      {data: 'rcmnd', unit: 'u1tq', code: 'MetaRight', text: ['⌘', 'command']},
      {data: 'ropt', unit: 'u1h', code: 'AltRight', text: ['⌥', 'option']},
      {data: 'rctrl', unit: 'u1h', code: 'ControlRight', text: ['⌃', 'control']} // 7
    ]
};

export default KeyboardLayoutData;

// typing box function scripts

const { $main, $tbSentence, $tbTextarea } = require('./tbGen')

/**
 * Generate sentence and ready for verify from typing
 * @param {Element} el 
 * @param {String} str 
 */
function SentenceGenerate(el, str) {
    el.innerText = str
    const sentenceString = el.innerText

    el.innerText = ''
    for (let char of sentenceString) {
        const c = document.createElement('c')
        c.innerText = `${char}`
        el.append(c)
    }
}
SentenceGenerate($tbSentence, 'This is the practice sentence for typing practice prototype model. Please typing this.')

function VerifySentence() {
    
}

function TypingTracking() {
    
}

$tbTextarea.addEventListener('keydown', (e) => {
    const kcode = e.keyCode
    kcode == 13 ? e.preventDefault() : false
})

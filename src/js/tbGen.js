// typing box generate scripts

const $main = document.querySelector('main')

const tbContainer = document.createElement('typingbox')
const tbSentence = document.createElement('sentence')
const tbTextarea = document.createElement('textarea')
tbTextarea.id = 'tbInput'
tbTextarea.setAttribute('rows', '1')

tbSentence.innerText = 'Hi, This is the typing practice prototype. Please enjoy this. Thanks!'

tbContainer.appendChild(tbSentence)
tbContainer.appendChild(tbTextarea)

$main.append(tbContainer)

const $tbSentence = document.querySelector('sentence')
const $tbTextarea = document.querySelector('textarea#tbInput')

module.exports = { $main, $tbSentence, $tbTextarea }

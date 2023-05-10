const sentences = require('./sentences')

// defines all unchangeable variables
const l1 = document.querySelector(".line1")
const l2 = document.querySelector(".line2")
const l3 = document.querySelector(".line3")
const sb = document.querySelector(".spacebar")

const island = document.querySelector(".blockKeyboard")
const textArea = document.querySelector(".typingBox")
const loading = document.querySelector(".loading")
const $main = document.querySelector("main")
const $body = document.querySelector("body")


/**
 * Verifying to is this mobile or others
 * @returns boolean
 */
function isMobile() {
    const UserAgent = navigator.userAgent
    let moAgent = (UserAgent.match(/iPhone|iPod|Android|Window CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|EMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null) ? true : false
        if (moAgent) {
            // mobile
            return true
        } else if (!moAgent) {
            // pc
            return false
        } else {
            // ??
            alert("잘못된 접근입니다.")
            window.close()
        }
}

/**
 * Displaying an error screen
 */
function displayError() {
    $main.remove()
    let dispErr = document.querySelector(".error") ? true : false
    if (dispErr) document.querySelector(".error").remove()
    let err = document.createElement("div")
    err.className = "error"
    err.innerHTML = `
        <figure>
            <img src="/src/assets/images/error.svg" alt="we're sorry" title="edited image from Blue & Yellow Emoticon from Kakao Emoticon">
            <figcaption>image copyright by Kakao Daum. Blue & Yellow Emoticon</figcaption>
        </figure>
        <h2>Sorry! It is not available in mobile environment!</h2>
        <div class="hint">
            <p class="mes"><i>😂</i>Try again with PC Browser</p>
        </div>
    `
    $body.appendChild(err)
    let $err = document.querySelector(".error")
    $err.style.animation = "fIn 1s var(--easeInOutQuart) both"
    $err.style.WebkitAnimation = "fIn 1s var(--easeInOutQuart) both"
}


// mcMode check and image preloading
window.addEventListener("DOMContentLoaded", function() {
    if (isMobile()) displayError()
    let mcModeSt = localStorage.getItem("mcMode")
    if (mcModeSt == 0) {
        mcModeBtn.checked = false
        mcModeOff()
    } else if (mcModeSt == 1) {
        mcModeBtn.checked = true
        mcModeOn()
    }
    // image pre-loading
    let images = [
        '/src/assets/images/error.svg',
        '/src/assets/images/mc/grss_b.png',
        '/src/assets/images/mc/grss_s.png',
        '/src/assets/images/mc/grss_t.png',
        '/src/assets/images/mc/skele.gif',
        '/src/assets/images/mc/snd.jpg',
        '/src/assets/images/mc/spinHead.gif',
        '/src/assets/images/mc/wtr.gif'
    ]
    for (let i = 0; i < images.length; i++) {
        let img = new Image()
        img.src = images[i]
    }
})


// loading function 
window.addEventListener("load", function() {
    loading.style.animation = "fOut 1s var(--easeInOutQuart) both"
    loading.style.WebkitAnimation = "fOut 1s var(--easeInOutQuart) both"
    if (!isMobile()) {
        $main.style.animation = "fIn 1s var(--easeInOutQuart) both"
        $main.style.WebkitAnimation = "fIn 1s var(--easeInOutQuart) both"
    } else {
        displayError()
    }
    

    this.setTimeout(function() {
        $main.classList.remove("unloaded")
    },100)
    
    setTimeout(function() {
        loading.remove()
        $main.style.opacity = 1
        $main.style.transition = "initial"
    },1000)
})


// keyboard design visualize
/**
 * Key pressing
 * @param {element} el key block line element
 * @param {number} n children index number
 */
function pressed(el, n) {
    el.children[n].classList.add("pressed")
}
/**
 * Key blurring
 * @param {element} el key block line element
 * @param {number} n children index number
 */
function blured(el, n) {
    el.children[n].classList.remove("pressed")
}

/**
 * Spacebar pressing
 * @param {element} el spacebar element
 */
function sc(el) {
    el.classList.add("pressed")
    island.style.transform = `translateY(2.5rem)`
}
/**
 * Spacebar blurring
 * @param {element} el spacebar element
 */
function scu(el) {
    el.classList.remove("pressed")
    island.style.transform = ``
}


// key down event
document.addEventListener("keydown", function (e) {
    let kc = e.code

    switch (kc) {
        case "KeyQ":
            pressed(l1, 0)
            break
        case "KeyW":
            pressed(l1, 1)
            break
        case "KeyE":
            pressed(l1, 2)
            break
        case "KeyR":
            pressed(l1, 3)
            break
        case "KeyT":
            pressed(l1, 4)
            break
        case "KeyY":
            pressed(l1, 5)
            break
        case "KeyU":
            pressed(l1, 6)
            break
        case "KeyI":
            pressed(l1, 7)
            break
        case "KeyO":
            pressed(l1, 8)
            break
        case "KeyP":
            pressed(l1, 9)
            break

        case "KeyA":
            pressed(l2, 0)
            break
        case "KeyS":
            pressed(l2, 1)
            break
        case "KeyD":
            pressed(l2, 2)
            break
        case "KeyF":
            pressed(l2, 3)
            break
        case "KeyG":
            pressed(l2, 4)
            break
        case "KeyH":
            pressed(l2, 5)
            break
        case "KeyJ":
            pressed(l2, 6)
            break
        case "KeyK":
            pressed(l2, 7)
            break
        case "KeyL":
            pressed(l2, 8)
            break
        case "Quote":
            pressed(l2, 9)
            break
        case "Backspace":
            pressed(l2, 10)
            break
            
        case "KeyZ":
            pressed(l3, 0)
            break
        case "KeyX":
            pressed(l3, 1)
            break
        case "KeyC":
            pressed(l3, 2)
            break
        case "KeyV":
            pressed(l3, 3)
            break
        case "KeyB":
            pressed(l3, 4)
            break
        case "KeyN":
            pressed(l3, 5)
            break
        case "KeyM":
            pressed(l3, 6)
            break
        case "Comma":
            pressed(l3, 7)
            break
        case "Period":
            pressed(l3, 8)
            break
        case "Slash":
            pressed(l3, 9)
            break
        case "ShiftLeft":
            pressed(l3, 10)
            break
        case "ShiftRight":
            pressed(l3, 10)
            break

        case "Space":
            sc(sb)
            break
    }
})

// key up event
document.addEventListener("keyup", function(e) {
    let ukc = e.code

    switch (ukc) {
        case "KeyQ":
            blured(l1, 0)
            break
        case "KeyW":
            blured(l1, 1)
            break
        case "KeyE":
            blured(l1, 2)
            break
        case "KeyR":
            blured(l1, 3)
            break
        case "KeyT":
            blured(l1, 4)
            break
        case "KeyY":
            blured(l1, 5)
            break
        case "KeyU":
            blured(l1, 6)
            break
        case "KeyI":
            blured(l1, 7)
            break
        case "KeyO":
            blured(l1, 8)
            break
        case "KeyP":
            blured(l1, 9)
            break

        case "KeyA":
            blured(l2, 0)
            break
        case "KeyS":
            blured(l2, 1)
            break
        case "KeyD":
            blured(l2, 2)
            break
        case "KeyF":
            blured(l2, 3)
            break
        case "KeyG":
            blured(l2, 4)
            break
        case "KeyH":
            blured(l2, 5)
            break
        case "KeyJ":
            blured(l2, 6)
            break
        case "KeyK":
            blured(l2, 7)
            break
        case "KeyL":
            blured(l2, 8)
            break
        case "Quote":
            blured(l2, 9)
            break
        case "Backspace":
            blured(l2, 10)
            break
            
        case "KeyZ":
            blured(l3, 0)
            break
        case "KeyX":
            blured(l3, 1)
            break
        case "KeyC":
            blured(l3, 2)
            break
        case "KeyV":
            blured(l3, 3)
            break
        case "KeyB":
            blured(l3, 4)
            break
        case "KeyN":
            blured(l3, 5)
            break
        case "KeyM":
            blured(l3, 6)
            break
        case "Comma":
            blured(l3, 7)
            break
        case "Period":
            blured(l3, 8)
            break
        case "Slash":
            blured(l3, 9)
            break
        case "ShiftLeft":
            blured(l3, 10)
            break
        case "ShiftRight":
            blured(l3, 10)
            break

        case "Space":
            scu(sb)
            break
    }
})


// typing practice main functions
const curstc = document.getElementById("curSen")
const typenow = document.getElementById("typeNow")
const senbox = document.getElementById("senBox")

const ts_wpm = document.getElementById("ts-wpm")
const ts_cpm = document.getElementById("ts-cpm")
const t_acc = document.getElementById("t-acc")
const t_done = document.getElementById("t-done")
// const t_timer = document.getElementById("t-timer")
const t_logger = document.querySelector(".t-logger")


/**
 * define function that get selector's index number from their parent node
 * @param {element} sel selected element
 * @returns index number
 */
function getIndex(sel) {
    let elem = sel
    for (let i = 0; i < elem.parentElement.children.length; i++) {
        if (elem.parentElement.children[i] === elem) {
            return i
        }
    }
}

// shift element define
let shift = document.querySelector(".shift")
let shiftOnOff = 0
/**
 * Key pressing by mouse click function
 * @param {element} el key block element
 */
function clickTyping(el) {
    let t = el.innerText
    let curtype = document.getElementById("typeNow")

    if (el.classList.contains("backspace")) {
        if (typenow.value != "") {
            typenow.value = typenow.value.slice(0, typenow.value.length-1)
        }
    } else if (el.classList.contains("shift")) {
        if (shiftOnOff == 0) {
            // on
            shift.classList.add("active")
            shiftOnOff = 1
        } else {
            // off
            shift.classList.remove("active")
            shiftOnOff = 0
        }
    } else if (el.classList.contains("nenter")) {
        if (shiftOnOff == 0) typenow.value = typenow.value + "'"
        else typenow.value = typenow.value + '"'
    } else if (el.classList.contains("qm")) {
        if (shiftOnOff == 0) typenow.value = typenow.value + "/"
        else typenow.value = typenow.value + '?'
    } else if (el.classList.contains("lt")) {
        if (shiftOnOff == 0) typenow.value = typenow.value + ","
        else typenow.value = typenow.value + '<'
    } else if (el.classList.contains("gt")) {
        if (shiftOnOff == 0) typenow.value = typenow.value + "."
        else typenow.value = typenow.value + '>'
    } else {
        if (shiftOnOff == 0) {
            // type lower case
            typenow.value = typenow.value + t.substr(0,1).toLowerCase()
        } else {
            // type upper case
            typenow.value = typenow.value + t.substr(0,1)
        }
    }
    
    txtChk(curtype)
}
// key click event
const keys = document.querySelectorAll(".key span > div")
for (let i = 0; i < keys.length; i++) {
    let cldK = keys[i].parentElement
    let line = cldK.parentElement
    keys[i].addEventListener("mousedown", function(e) {
        pressed(line, getIndex(cldK))
    })
    keys[i].addEventListener("mouseup", function(e) {
        blured(line, getIndex(cldK))
        // type on textarea
        clickTyping(cldK)
    })
    keys[i].addEventListener("mouseout", function(e) {
        blured(line, getIndex(cldK))
    })
    // after that, we have to make typing on input box when it clicked
}
// spacebar typing with click event
const spacebar = document.querySelector(".spacebar")
spacebar.addEventListener("mouseup", e => {
    typenow.value = typenow.value + " "
    txtChk(typenow)
})

// ground(spacebar) click event
sb.addEventListener("mousedown", function() {
    sc(sb)
})
sb.addEventListener("mouseup", function() {
    scu(sb)
    textArea.value = textArea.value + " "
})
sb.addEventListener("mouseout", function() {
    scu(sb)
})


// winkEmoji click event
// let goBack = document.querySelector(".spacebar span div b")
// goBack.addEventListener("click", function() {
//     history.back()
// })


// minecraft texture mode
let mcModeBtn = document.querySelector("#mcMode")
let skelly = document.querySelector(".skelly")
/**
 * minecraft texture mode on
 */
function mcModeOn() {
    for (let i = 0; i < island.children.length; i++) {
        island.children[i].classList.add("mcModed")
    }
    $main.classList.add("mcModed")
    skelly.classList.add("mcModed")
    localStorage.setItem("mcMode", 1)
}
/**
 * minecraft texture mode off
 */
function mcModeOff() {
    for (let i = 0; i < island.children.length; i++) {
        island.children[i].classList.remove("mcModed")
    }
    $main.classList.remove("mcModed")
    skelly.classList.remove("mcModed")
    localStorage.setItem("mcMode", 0)
}

mcModeBtn.addEventListener("change", function() {
    if (this.checked) {
        mcModeOn()
    } else {
        mcModeOff()
    }
})


/**
 * sentence generate
 */
function txtNext() {
    randomSentence = Math.floor(Math.random() * sentences.length)
    curstc.value = sentences[randomSentence]

    let css = curstc.value
    senbox.innerText = css
    senbox.innerHTML = senbox.innerText.replace(/\S/g,"<span>$&</span>")

    for (let i = 0; i < senbox.childNodes.length; i++) {
        let cs = document.createElement("span")
        cs.innerHTML = " "
        if (senbox.childNodes[i].nodeName == "#text") {
            senbox.insertBefore(cs, senbox.childNodes[i+1])
            senbox.childNodes[i].remove()
        }
    }
}txtNext()

// timer function
let timer,
maxTime = 60 * 10,
timeLeft = maxTime,
isTyping = true
/**
 * Timer initialize
 */
function initTimer() {
    if (timeLeft > 0) {
        timeLeft--
        // t_timer.innerHTML = `${Math.round(timeLeft / 10)}s`

        let cpm = Math.round(((charIdx - mistakes) / (maxTime - timeLeft)) * maxTime)
        cpm = cpm < 0 || !cpm || cpm == Infinity ? 0 : cpm
        ts_cpm.innerHTML = cpm

        let wpm = Math.round((((charIdx - mistakes) / 5) / (maxTime - timeLeft)) * maxTime)
        wpm = wpm < 0 || !wpm || wpm == Infinity ? 0 : wpm
        ts_wpm.innerHTML = wpm
    } else {
        clearInterval(timer)
    }
}

// typing text compare function
let charIdx = mistakes = 0
/**
 * Check typed texts are goes right
 * @param {element} txt typed texts
 */
function txtChk(txt) {
    // txt == typenow
    let spans = document.querySelectorAll("#senBox span")
    let tch = txt.value.split('')[charIdx]
    let cch = spans[charIdx] ? spans[charIdx].innerText : null

    // initialize timer
    if (isTyping) {
        timer = setInterval(initTimer, 100)
        isTyping = false
    }

    // validation
    if (cch != null) {
        if (tch == null || undefined) { // backspace function
            let xx = spans[charIdx-1] ? spans[charIdx-1] : false
            if (xx == spans[charIdx-1]) {
                if (spans[charIdx-1].classList.contains("xx")) mistakes--
            }
            spans[charIdx-1].classList.remove("xx")
            charIdx--
        } else {
            if (tch === cch) {
                spans[charIdx].classList.remove("xx")
            } else {
                mistakes++
                spans[charIdx].classList.add("xx")
            }
            charIdx++
        }
    } else {
        if (tch != null || undefined) txtDone()
        else {
            if (spans[charIdx-1].classList.contains("xx")) mistakes--
            spans[charIdx-1].classList.remove("xx")
            charIdx--
        }
    }

    // accuracy compute
    let t_acc_EachScore = 100 / curstc.value.length
    let t_acc_MinusScore = Math.ceil(t_acc_EachScore * mistakes)
    let t_Acc_Score = 100 - t_acc_MinusScore
    t_acc.innerHTML = t_Acc_Score
}

typenow.addEventListener("input", e => {
    txtChk(typenow)
})
let trig = false
/**
 * typing finish animation rotate degree calculate function
 */
function islandRotate() { // set rotate value when island jumping
    let rn = Math.floor(Math.random() * 13) // random 0~12
    let pom = () => {
        let oot = Math.floor((Math.random() * (1-0+1)) + 0) // random 0 or 1
        if (oot == 1) return true
        else return false
    }
    if (!pom()) island.style.setProperty('--island-rotate', `${-rn}deg`)
    else island.style.setProperty('--island-rotate', `${rn}deg`)
}
typenow.addEventListener("keyup", e => {
    let kc = e.code
    let defLen = curstc.value.length
    let curLen = typenow.value.length
    if (defLen <= curLen) {
        if (kc == "Enter" || kc == "Space") {
            txtDone()
            islandRotate()
            island.style.animation = `succeed 1s var(--easeInOutBack) both`
            setTimeout(() => {
                island.style.animation = ``
            }, 1000)
        }
    }
    if (kc == "Enter") {
        if (defLen > curLen && !trig) {
            trig = true
            island.style.animation = `shake 500ms ease both`
            setTimeout(() => {
                island.style.animation = ``
                trig = false
            }, 500)
        }
    }

    // when all texts removed, reset the type states
    if (typenow.value == "") {
        txtReset()
    }
})

// focusing function
document.addEventListener("keydown", e => {
    typenow.focus()
})
textArea.addEventListener("click", e => {
    typenow.focus()
})

/**
 * jQuery index() function
 * @param {element} e parent node what indexing children
 * @returns child index number
 */
function isIndex(e) {
    for (let i = 0; i < e.parentNode.childNodes.length; i++) {
        if (e.parentNode.childNodes[i] == e) {
            return i
        }
    }
}

/**
 * sentence reset function
 */
function txtReset() {
    let spans = document.querySelectorAll("#senBox span")
    spans.forEach(span => {
        span.classList.remove("xx")
        charIdx = 0
        mistakes = 0
    })
    clearInterval(timer)
    // t_timer.innerHTML = '60s'
    t_acc.innerHTML = 0
    ts_wpm.innerHTML = 0
    ts_cpm.innerHTML = 0
    timeLeft = maxTime
    isTyping = true
}

// reset things when typing has done
let t_done_it = parseInt(t_done.innerText)
/**
 * typed sentence done function
 */
function txtDone() {
    typenow.value =""
    t_done_it++
    t_done.innerHTML = t_done_it
    
    typelogger()
    doneAnim()
    txtReset()
    txtNext()
}
/**
 * finish animation reset
 */
function doneAnim() {
    island.style.animation = ``
}


// calculate average value of whole typed and logged states (cpm, wpm, accuracy ...)
let cpm_avg, wpm_avg, acc_avg
/**
 * calculating average
 * @param {Array} d array data of values that calculating
 * @param {number} i index number
 * @returns average value
 */
function avgCalc(d, i) {
    let sum = 0
    for ( let j = 0; j < d.length; j++ ) {
        sum += parseInt(d[j][i])
    }
    return Math.round(sum / d.length)
}
/**
 * get calculated data function
 */
function getAverages(data) {
    cpm_avg = avgCalc(data, 0)
    wpm_avg = avgCalc(data, 1)
    acc_avg = avgCalc(data, 2)
    // console.log(cpm_avg, wpm_avg, acc_avg)
}

// typed states log
let typeLog = []
/**
 * record to log of typing
 */
function typelogger() {
    let cpm = ts_cpm.innerText
    let wpm = ts_wpm.innerText
    let acc = t_acc.innerText
    let atmpt = parseInt(t_done.innerText)
    let sentence = curstc.value
    let logarr = [cpm, wpm, acc, atmpt, sentence]
    typeLog.push(logarr)

    // display to elements
    let log = document.createElement("div")
    log.innerHTML = `cpm <span>${cpm}</span> | wpm <span>${wpm}</span> | acc <span>${acc}</span>`
    let befLog = t_logger.querySelector("div:first-child")
    t_logger.insertBefore(log, befLog)
    getAverages(typeLog)

    // record log in Result section
    recordResult(atmpt, cpm, wpm, acc, sentence)
}




/**
 * hamburger button function
 */
function hamburger() {
    let ishammed = hambtn.getAttribute("data-active") != "false" ? true : false
    let nav = document.querySelector("nav")

    if (!ishammed) {
        // when inactivated
        hambtn.setAttribute("data-active", "true")
        nav.classList.add("active")
    } else {
        // when activated
        hambtn.setAttribute("data-active", "false")
        nav.classList.remove("active")
    }
}
const $nav = document.querySelector("nav")
const hambtn = document.querySelector(".navham")
const uiNavSects = document.getElementById("ui-nav-sections")
hambtn.addEventListener("click", () => {hamburger()})
window.addEventListener("click", e => { // click out of nav then goes to default
    let cp = !e.target.closest('nav, .navham, .ham-menu') ? true : false
    if ($nav.classList.contains("active") && cp) {
        $nav.classList.remove("active")
        setTimeout(() => {
            hambtn.setAttribute("data-active", "false")
        }, 800)
    }
})
// hamburger button function end





// hamburger section open function

const hammenus = document.querySelectorAll(".ham-menu")
/**
 * hamburger menu list click function
 * @param {element} menu navigation menu element
 */
function ham_menu_open(menu) {
    uiNavSects.style.display = "block"

    // exit button createment
    const exitbtn = document.createElement("span")
    exitbtn.className = "nav-section-exit-btn"

    let nav = menu.parentElement
    let btn
    for (let i = 0; i < nav.children.length; i++) {
        if (nav.children[i] == menu) {
            btn = menu.innerText.toLowerCase()
            hammenus.forEach(menuu => {
                menuu.style.width = `0%`
                if (menuu.id.toString() == btn) {
                    menuu.style.width = `100%`
                    menuu.setAttribute('data-active', true)
                    menuu.appendChild(exitbtn)
                }
            })
        }
    }

    exitbtn.addEventListener("click", e => {
        let section = exitbtn.parentElement
        section.style.width = `0%`
        setTimeout(() => {
            uiNavSects.style.display = "none"
        }, 800)
    })
}
const hambtns = document.querySelectorAll("nav>ul li")
hambtns.forEach(btn => {
    btn.addEventListener("click", e => {
        ham_menu_open(btn)
    })
})

// hamburger section open function end


const result_table = document.querySelector("#result .result-box table tbody")
let result_index = 1
/**
 * record typed log in Result section of nav menu
 * @param {number} i attempt index number
 * @param {number} cpm cpm value
 * @param {number} wpm wpm value
 * @param {number} acc accuracy value
 * @param {string} sen typed sentence
 */
function recordResult(i, cpm, wpm, acc, sen) {
    if (document.querySelector(".nottypedyet")) {
        document.querySelector(".nottypedyet").remove()
        document.querySelector("#result thead").style.display = "table-header-group"
    }
    let tr = document.createElement("tr")
    result_table.appendChild(tr)
    function cTd(val) {
        let td = document.createElement("td")
        td.innerHTML = val
        tr.append(td)
    }
    cTd(i); cTd(cpm); cTd(wpm); cTd(acc); cTd(sen)
}

module.exports = application
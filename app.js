const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

const randomSquare = () => {
    squares.forEach(square =>{
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')
//    console.log(randomSquare)
    hitPosition = randomSquare.id

}

squares.forEach(square =>{
    square.addEventListener('mousedown',() => {
        if(square.id == hitPosition){
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

const movemole = () => {
    timerId= setInterval(randomSquare,500)
}

movemole()

const stopCount = () => {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime== 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
    }
}

let countDownTimerId = setInterval(stopCount, 1000)

randomSquare()
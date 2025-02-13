//lista de cores aleatórias

const container = document.getElementById('container')

const colors = [
    '#770941',
    '#A2630B',
    '#DD673A',
    '#404F85',
    '#FC6BAA',
    '#23F086',
    '#93495D'
]

const boxes = 500

for (let index = 0; index < boxes; index++) {

    //criar um elemento HTML
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = randomColor()
        square.style.boxShadow = `0 0 2px ${randomColor()}, 0 0 10px ${randomColor()}`
    })

    square.addEventListener('mouseout', () => {
        square.style.backgroundColor = '#1d1d1d'
        square.style.boxShadow = `0 0 2px #000`
    })
    container.appendChild(square)
}

function randomColor() {
    const numAleatorio = Math.floor(Math.random() * colors.length)
    return colors[numAleatorio]
}
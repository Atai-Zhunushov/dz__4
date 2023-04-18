/////1

let number = 0
const text = document.getElementById('h2')
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
btn1.addEventListener('click' , () => {
    number ++
    text.innerText = number
    text.style.color = 'green'
})
btn2.addEventListener('click' , () => {
    if (number > 0) {
        number --
        text.innerText = number
        text.style.color = 'blue'
    }
})

///////2
const div = document.getElementById('block')
div.addEventListener('mousemove' , (event) => {
    console.log(event.x , event.y)
})

/////3

let lightRed = document.getElementById('red')
let lightYellow = document.getElementById('yellow')
let lightGreen = document.getElementById('green')
const input = prompt('введите цвет').trim().toLowerCase()
if (input === 'красный') {
    lightRed.style.background = 'red'
    alert('стоп!')
} else if (input === 'желтый') {
    lightYellow.style.background = 'yellow'
    alert('приготовьтесь!')
} else if (input === 'зеленый') {
    lightGreen.style.background = 'green'
    alert('можете идти!')
} else {
    alert('вводите цвета!')
}



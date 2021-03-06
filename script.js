let canvas = document.getElementById('snake')
let context = canvas.getContext('2d')
let box = 32

let score = document.getElementById('score')
let pont = document.getElementById('pont')

const button = document.querySelector('.buttons')
const modalWrapper = document.querySelector('.modal-wrapper')


let snake = []
snake[0] = {
  x: 8 * box, //256
  y: 8 * box  //256
}

let direction = "left"

let food = {
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box
}


 

  button.addEventListener("click", close)
  
  function open() {
    modalWrapper.classList.add('active')
  }
  
  function close() {
    location.reload()
  }
  


function createBg(){
  context.fillStyle = '#fcfcfc'
  context.fillRect(0, 0, 16 * box, 16 * box)
}

function createSnake() {
  for(i = 0; i < snake.length; i++) {
    context.fillStyle = '#07ef1b'
    context.fillRect(snake[i].x, snake[i].y, 30, 30)
  }
}

function createFood() {
  context.fillStyle = '#91EEFF'
  context.fillRect(food.x, food.y, 30, 30)
}

document.addEventListener('keydown', update);

function update(event) {
  if (event.keyCode == 37 && direction != 'right') direction = 'left'
  if (event.keyCode == 38 && direction != 'down') direction = 'up'
  if (event.keyCode == 39 && direction != 'left') direction = 'right'
  if (event.keyCode == 40 && direction != 'up') direction = 'down'
}

function startGame() {
  if (snake[0].x > 15 * box) snake[0].x = 0
  if (snake[0].x < 0) snake[0].x = 15 * box
  if (snake[0].y > 15 * box) snake[0].y = 0
  if (snake[0].y < 0) snake[0].y = 15 * box

for(i = 1; i < snake.length; i++) {
  if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
    clearInterval(game)
    open()
  }
}
createBg()
createSnake()
createFood()

  let snakeX = snake[0].x
  let snakeY = snake[0].y

  if(direction == 'right') snakeX += box ;
  if(direction == 'left') snakeX -= box;
  if(direction == 'up') snakeY -= box;
  if(direction == 'down') snakeY += box;

  if (snakeX != food.x || snakeY != food.y) {
    snake.pop()
  }else {
    food.x = Math.floor(Math.random() * 15 + 1) * box
    food.y = Math.floor(Math.random() * 15 + 1) * box
    
    score.innerHTML = snake.length
    pont.innerHTML = `pontuacao final: ${snake.length}`
  }

  let newHead = {
    x: snakeX,
    y: snakeY
  }
  
  snake.unshift(newHead)
}
let game = setInterval(startGame, 200)



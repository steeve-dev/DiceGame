//Fichier pour les visuels canvas

//dé 1

const diceOne = () => {
const un = document.getElementById('diceCanvas');
let ctx = un.getContext('2d');
ctx.beginPath()
ctx.fillStyle= 'white'
ctx.fillRect(0, 0, 100, 100)
ctx.fill()

ctx.beginPath()
ctx.arc(50, 50, 10, 0, Math.PI * 2);
ctx.fillStyle = 'red';
ctx.fill()
}


//dé 2
const diceTwo = () => {
const deux = document.getElementById('diceCanvas');
let ctx2 = deux.getContext('2d');
ctx2.beginPath()
ctx2.fillStyle= 'white'
ctx2.fillRect(0, 0, 100, 100)
ctx2.fill()
ctx2.beginPath()
ctx2.arc(70, 30, 9, 0, Math.PI * 2);
ctx2.fillStyle = 'red';
ctx2.fill()
ctx2.arc(30, 70, 9, 0, Math.PI * 2 )
ctx2.fillStyle = 'red';
ctx2.fill()
}

//dé 3
const diceThree = () => {
const trois = document.getElementById('diceCanvas');
let ctx3 = trois.getContext('2d');

ctx3.beginPath()
ctx3.fillStyle= 'white'
ctx3.fillRect(0, 0, 100, 100)
ctx3.fill()

ctx3.beginPath()
ctx3.arc(75, 25, 8, 0, Math.PI * 2);
ctx3.fillStyle = 'red';
ctx3.fill()
ctx3.arc(25, 75, 8, 0, Math.PI * 2 )
ctx3.fillStyle = 'red';
ctx3.fill()
ctx3.arc(50, 50, 8, 0, Math.PI * 2)
ctx3.fillStyle = 'red';
ctx3.fill()
}

//dé 4

const diceFour = () => {
const quatre = document.getElementById('diceCanvas');
let ctx4 = quatre.getContext('2d');

ctx4.beginPath()
ctx4.fillStyle= 'white'
ctx4.fillRect(0, 0, 100, 100)
ctx4.fill()

ctx4.beginPath()
ctx4.arc(25, 75, 8, 0, Math.PI * 2);
ctx4.fillStyle = 'red';
ctx4.fill()
ctx4.beginPath()
ctx4.arc(75, 75, 8, 0, Math.PI * 2);
ctx4.fillStyle = 'red';
ctx4.fill()
ctx4.arc(25, 25, 8, 0, Math.PI * 2);
ctx4.fillStyle = 'red';
ctx4.fill()
ctx4.beginPath()
ctx4.arc(75, 25, 8, 0, Math.PI * 2);
ctx4.fillStyle = 'red';
ctx4.fill()
}


//dé 5
const diceFive = () => {
const cinq = document.getElementById('diceCanvas');
let ctx5 = cinq.getContext('2d');

ctx5.beginPath()
ctx5.fillStyle= 'white'
ctx5.fillRect(0, 0, 100, 100)
ctx5.fill()

ctx5.beginPath()
ctx5.arc(75, 25, 8, 0, Math.PI * 2);
ctx5.fillStyle = 'red';
ctx5.fill()
ctx5.beginPath()
ctx5.arc(25, 75, 8, 0, Math.PI * 2);
ctx5.fillStyle = 'red';
ctx5.fill()
ctx5.arc(25, 25, 8, 0, Math.PI * 2);
ctx5.fillStyle = 'red';
ctx5.fill()
ctx5.beginPath()
ctx5.arc(75, 75, 8, 0, Math.PI * 2);
ctx5.fillStyle = 'red';
ctx5.fill()
ctx5.beginPath()
ctx5.arc(50, 50, 8, 0, Math.PI * 2);
ctx5.fillStyle = 'red';
ctx5.fill()
}

//dé 6
const diceSix = () => {

const six = document.getElementById('diceCanvas');
let ctx6 = six.getContext('2d');

ctx6.beginPath()
ctx6.fillStyle= 'white'
ctx6.fillRect(0, 0, 100, 100)
ctx6.fill()

ctx6.beginPath()
ctx6.arc(30, 25, 8, 0, Math.PI * 2);
ctx6.fillStyle = 'red'
ctx6.fill()
ctx6.arc(30, 50, 8, 0, Math.PI * 2);
ctx6.fillStyle = 'red';
ctx6.fill()
ctx6.arc(30, 75, 8, 0, Math.PI * 2);
ctx6.fillStyle = 'red'
ctx6.fill()
ctx6.beginPath()
ctx6.arc(70, 25, 8, 0, Math.PI * 2)
ctx6.fillStyle = 'red'
ctx6.fill()
ctx6.arc(70, 50, 8, 0, Math.PI * 2)
ctx6.fillStyle = 'red'
ctx6.fill()
ctx6.arc(70, 75, 8, 0, Math.PI * 2)
ctx6.fillStyle = 'red'
ctx6.fill()
}

//dé de transition
const diceWhite = () => {
  const white = document.getElementById('diceCanvas');
  let ctx = white.getContext('2d');
  
  ctx.beginPath()
  ctx.fillStyle= 'white'
  ctx.fillRect(0, 0, 100, 100)
  ctx.fill()

}
//Point rouge joueur 1 actif
const isPlayer1Active = () => {
  const isPlayer1 = document.getElementById('isPlayer1Active')
  let context = isPlayer1.getContext('2d')

  context.beginPath()
  context.arc(30, 30, 8, 0, Math.PI * 2);
  context.fillStyle = 'red'
  context.fill()
}

//Point rouge joueur 1 non actif
const isPlayer1NoActive = () => {
  const isPlayer1 = document.getElementById('isPlayer1Active')
  let context = isPlayer1.getContext('2d')

  context.beginPath()
  context.arc(30, 30, 12, 0, Math.PI * 2);
  context.fillStyle = 'rgb(240, 240, 240)'
  context.fill()
}

//Point rouge joueur 2 actif
const isPlayer2active = () => {
  
  const isPlayer2 = document.getElementById('isPlayer2Active')
  let context = isPlayer2.getContext('2d')

  context.beginPath()
  context.arc(30, 30, 8, 0, Math.PI * 2);
  context.fillStyle = 'red'
  context.fill()
}

//Point rouge joueur 2 non actif
const isPlayer2NoActive = () => {
  const isPlayer2 = document.getElementById('isPlayer2Active')
  let context = isPlayer2.getContext('2d')

  context.beginPath()
  context.arc(30, 30, 12, 0, Math.PI * 2);
  context.fillStyle = 'white'
  context.fill()
}


const newGameCanvas = document.getElementById('newGameCanvas')
let ctxnew = newGameCanvas.getContext('2d')

ctxnew.beginPath()
ctxnew.arc(50, 50, 15, 0, Math.PI * 2)
ctxnew.strokeStyle = 'red'
ctxnew.stroke()
ctxnew.beginPath()
ctxnew.moveTo(40, 50)
ctxnew.lineTo(60, 50)
ctxnew.moveTo(50, 40)
ctxnew.lineTo(50, 60)
ctxnew.strokeStyle = 'red'
ctxnew.stroke()
ctxnew.closePath()


const rollDiceCanvas = document.getElementById('rollDiceLogo')
let ctxRoll = rollDiceCanvas.getContext('2d')

ctxRoll.beginPath()
ctxRoll.arc(50, 50, 15, 0, Math.PI * 2)
ctxRoll.strokeStyle = 'red'
ctxRoll.stroke()
ctxRoll.moveTo(31, 52)
ctxRoll.lineTo(35, 46)
ctxRoll.lineTo(39, 52)
ctxRoll.moveTo(69, 48)
ctxRoll.lineTo(65, 54)
ctxRoll.lineTo(61, 48)
ctxRoll.stroke()
ctxRoll.closePath()


const holdCanvas = document.getElementById('holdCanvas')
let ctxHold = holdCanvas.getContext('2d')

ctxHold.beginPath()
ctxHold.strokeStyle = 'red'
ctxHold.strokeRect(35, 35, 30, 30)
ctxHold.moveTo(50, 25)
ctxHold.lineTo(50, 50)
ctxHold.lineTo(43, 43)
ctxHold.moveTo(50, 50)
ctxHold.lineTo(57, 43)

ctxHold.stroke()
ctxHold.closePath()
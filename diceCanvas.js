function entierAleatoire(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}



//dé 1

const diceOne = () => {
const un = document.getElementById('un');
let ctx = un.getContext('2d');

ctx.beginPath()
ctx.arc(50, 50, 10, 0, Math.PI * 2);
ctx.fillStyle = 'red';
ctx.fill()
}


//dé 2
const diceTwo = () => {
const deux = document.getElementById('un');
let ctx2 = deux.getContext('2d');

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
const trois = document.getElementById('un');
let ctx3 = trois.getContext('2d');

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
const quatre = document.getElementById('un');
let ctx4 = quatre.getContext('2d');

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
const cinq = document.getElementById('un');
let ctx5 = cinq.getContext('2d');

ctx5.beginPath()
ctx5.arc(75, 25,8, 0, Math.PI * 2);
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

const six = document.getElementById('un');
let ctx6 = six.getContext('2d');

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

const dice = document.getElementById('bouton')

dice.addEventListener('click', function() {
  let entier = entierAleatoire(1, 6)
  console.log(entier);
  if (entier == 1){
    diceOne()
  }
  else if (entier == 2){
    diceTwo()
  }
  else if (entier == 3){
    diceThree()
  }
  else if (entier == 4){
    diceFour()
  }
  else if (entier == 5){
    diceFive()
  }
  else if (entier == 6){
    diceSix()
  }

})

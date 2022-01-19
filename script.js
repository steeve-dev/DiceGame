function entierAleatoire(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}




let scoreGlobalPlayer1
let scoreGlobalPlayer2

function game() {

  scoreGlobalPlayer1 = 0
  scoreGlobalPlayer2 = 0
  let tour = 1

  function scoreGlobalPlayer21() {
    document.getElementById('scoreGlobalPlayer2').innerHTML = scoreGlobalPlayer2
  }
  
  function scoreGlobalPlayer11() {
    document.getElementById('scoreGlobalPlayer1').innerHTML = scoreGlobalPlayer1
  }
  playGame()

  
  function playGame(){
    let scoreRoundPlayer1 = 0
    let scoreRoundPlayer2 = 0
    tour = tour + 1

    //fonctions pour l'affichage des différents scores
    function scoreRoundPlayer11() {
      document.getElementById('scoreRoundPlayer1').innerHTML = scoreRoundPlayer1
    }
    
    function scoreRoundPlayer21() {
      document.getElementById('scoreRoundPlayer2').innerHTML = scoreRoundPlayer2
    }

  
    scoreGlobalPlayer11()
    scoreRoundPlayer11()
    scoreGlobalPlayer21()
    scoreRoundPlayer21()
    console.log(`tour : ${tour}`)
    
    const play1 = () => {
      
      isPlayer2NoActive()
      isPlayer1Active()
      console.log(`global J1 début tour play 1 : ${scoreGlobalPlayer1}`);
  
      const dicePlay1 = document.getElementById('rollDice')
      dicePlay1.addEventListener('click', diceClicked) 
    
      const holdPlayer1 = document.getElementById('hold')
      holdPlayer1.addEventListener('click', holdClicked)
    
      function diceClicked(){
    
        let entier = entierAleatoire(1, 6)
        console.log(entier);
        if (entier == 1){
          diceOne()
          scoreRoundPlayer1 = 0
          dicePlay1.removeEventListener('click', diceClicked)
          holdPlayer1.removeEventListener('click', holdClicked)
          playGame()
        }
        else if (entier == 2){
          diceTwo()
          scoreRoundPlayer1 = scoreRoundPlayer1 + 2
        }
        else if (entier == 3){
          diceThree()
          scoreRoundPlayer1 = scoreRoundPlayer1 + 3
        }
        else if (entier == 4){
          diceFour()
          scoreRoundPlayer1 = scoreRoundPlayer1 + 4
        }
        else if (entier == 5){
          diceFive()
          scoreRoundPlayer1 = scoreRoundPlayer1 + 5
        }
        else {
          diceSix()
          scoreRoundPlayer1 = scoreRoundPlayer1 + 6
        }
        scoreRoundPlayer11()
      }
      
      
      function holdClicked(){
        scoreGlobalPlayer1 = scoreGlobalPlayer1 + scoreRoundPlayer1
        scoreRoundPlayer1 = 0
        console.log('hold player1');
        
        holdPlayer1.removeEventListener('click', holdClicked)
        dicePlay1.removeEventListener('click', diceClicked)
        scoreGlobalPlayer11()
        scoreRoundPlayer11()
        playGame()
      }

      
    }
  
    const play2 = () => {
      //diceWhite();
      isPlayer1NoActive()
      isPlayer2active()
      
      console.log(`global J2 début tour play 1 : ${scoreGlobalPlayer2}`);

      const dicePlay2 = document.getElementById('rollDice')
      dicePlay2.addEventListener('click', diceClicked2)
    
      const holdPlayer2 = document.getElementById('hold')
      holdPlayer2.addEventListener('click', holdClicked2)
    
      function diceClicked2(){
    
        let entier = entierAleatoire(1, 6)
        console.log(entier);
        if (entier == 1){
          diceOne()
          scoreRoundPlayer2 = 0
          dicePlay2.removeEventListener('click', diceClicked2)
          holdPlayer2.removeEventListener('click', holdClicked2)
          playGame()
        }
        else if (entier == 2){
          diceTwo()
          scoreRoundPlayer2 = scoreRoundPlayer2 + 2
        }
        else if (entier == 3){
          diceThree()
          scoreRoundPlayer2 = scoreRoundPlayer2 + 3
        }
        else if (entier == 4){
          diceFour()
          scoreRoundPlayer2 = scoreRoundPlayer2 + 4
        }
        else if (entier == 5){
          diceFive()
          scoreRoundPlayer2 = scoreRoundPlayer2 + 5
        }
        else {
          diceSix()
          scoreRoundPlayer2 = scoreRoundPlayer2 + 6
        }
        scoreRoundPlayer21()
      }
      

      function holdClicked2(){
        scoreGlobalPlayer2 = scoreGlobalPlayer2 + scoreRoundPlayer2
        scoreRoundPlayer2 = 0
        console.log('hold player 2');
        holdPlayer2.removeEventListener('click', holdClicked2)
        dicePlay2.removeEventListener('click', diceClicked2)
        scoreGlobalPlayer21()
        scoreRoundPlayer21()
        playGame()
        
      }
    
      
    }
  
  
  

    //Conditions de fin de partie
    if ((scoreGlobalPlayer1 > 99) || (scoreGlobalPlayer2 > 99)){
      if(scoreGlobalPlayer1 > 99){
        alert('félicitation Player 1, vous avez gagné!!')
      }
      else if (scoreGlobalPlayer2 > 99){
        alert('félicitation Player 2, vous avez gagné!!')
      }
      
      game()
    }

    
    else {
      if(tour%2 == 0){
        play1()
      }
      else {
        play2()
      }
    }

    //const newGame = document.getElementById('newGame')
    //newGame.addEventListener('click', () =>{
    //  endGame = true
    //})

  }

}







game()










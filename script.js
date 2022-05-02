function entierAleatoire(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let scoreRoundPlayer1
let scoreRoundPlayer2

function game() {
  let scoreGlobalPlayer1 = 0
  let scoreGlobalPlayer2 = 0
  let tour = 0
  //fonctions pour l'affichage du score "global"
  function scoreGlobalPlayer21() {
    document.getElementById('scoreGlobalPlayer2').innerHTML = scoreGlobalPlayer2
  }
  
  function scoreGlobalPlayer11() {
    document.getElementById('scoreGlobalPlayer1').innerHTML = scoreGlobalPlayer1
  }

  playGame()

  
  function playGame(){
    scoreRoundPlayer1 = 0
    scoreRoundPlayer2 = 0
    tour = tour + 1

   
    //fonctions pour l'affichage des scores "round"
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
    
    const play1 = () => {
      
      console.log(`tour : ${tour}`)


      isPlayer2NoActive()
      isPlayer1Active()
  
      const dicePlay = document.getElementById('rollDice')
      dicePlay.addEventListener('click', diceClicked) 
    
      const holdPlayer = document.getElementById('hold')
      holdPlayer.addEventListener('click', holdClicked)
    
      function diceClicked(){
        console.log('on entre dans le diceclicked');
    
        let entier = entierAleatoire(1, 6)
        
        if (entier == 1){
          diceOne()
          scoreRoundPlayer1 = 0
          dicePlay.removeEventListener('click', diceClicked)
          holdPlayer.removeEventListener('click', holdClicked)
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
        return
      }
      
      
      function holdClicked(){
        console.log('on entre dans le "hold"');
        scoreGlobalPlayer1 = scoreGlobalPlayer1 + scoreRoundPlayer1
        scoreRoundPlayer1 = 0
        holdPlayer.removeEventListener('click', holdClicked)
        dicePlay.removeEventListener('click', diceClicked)
        playGame()

      }
    }
    
  
    const play2 = () => {
      console.log(`tour : ${tour}`)


      //diceWhite();
      isPlayer1NoActive()
      isPlayer2active()
      
      console.log(`global J2 début tour play 1 : ${scoreGlobalPlayer2}`);
      const dicePlay = document.getElementById('rollDice')
      dicePlay.addEventListener('click', diceClicked)
    
      const holdPlayer = document.getElementById('hold')
      holdPlayer.addEventListener('click', holdClicked)

    
      function diceClicked(){
    
        let entier = entierAleatoire(1, 6)
        console.log(entier);
        if (entier == 1){
          diceOne()
          scoreRoundPlayer2 = 0
          dicePlay.removeEventListener('click', diceClicked)
          holdPlayer.removeEventListener('click', holdClicked)
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
      
      function holdClicked(){
        scoreGlobalPlayer2 = scoreGlobalPlayer2 + scoreRoundPlayer2
        scoreRoundPlayer2 = 0
        console.log('hold player 2');
        holdPlayer.removeEventListener('click', holdClicked)
        dicePlay.removeEventListener('click', diceClicked)
        playGame()
      }


    }

    
    
    if ((scoreGlobalPlayer1 > 99) || (scoreGlobalPlayer2 > 99)){
      if(scoreGlobalPlayer1 > 99){
        alert('félicitation Player 1, vous avez gagné!!')
      }
      else if (scoreGlobalPlayer2 > 99){
        alert('félicitation Player 2, vous avez gagné!!')
      }
      console.log('je rentre dans le if');
      game()
    }
    
    else {

      if(tour%2 == 0){
        play2()
      }
      else {
        play1()
      }
      console.log('je rentre dans le else de fin de parie');
    }
  }

}





game()









const rollButton = document.querySelector( '#roll-button' );
const player1Dice = document.querySelector( '.player1' );
const player2Dice = document.querySelector( '.player2' );


rollButton.addEventListener( 'click', ()=>{
        player1Dice.classList.add( 'dice1Animation' );
        player2Dice.classList.add( 'dice2Animation' );


        player1Dice.addEventListener( 'animationend', () => { /*removes animation class to be retriggered once complete.  */
            player1Dice.classList.remove( 'dice1Animation' );
          });
        
          player2Dice.addEventListener( 'animationend', () => {
            player2Dice.classList.remove( 'dice2Animation' );
          });

})
play(); // This is your main function that runs when the page loads

function play(){
   var min = 1;
   var max = 50;
   var rNum = Math.floor((Math.random() * max) + min) ;
   var question = " " ;
   var name = " " ;
   var guess ;
   var isPlaying = true;
   var tries = 0;

   name = prompt("What is your name?") ;
   question = prompt ("Nice to meet you, " + name + "! Do you wanna play a game?") ;

   while(isPlaying) {
    guess = prompt("Guess a number between " + min + " and " + max + ":") ;

    if (guess > rNum){
        alert ("WRONG TRAINEE, GO LOWER");
        tries++;
    }else 
    if (guess < rNum){
        alert ("WRONG TRAINEE, GO HIGHER"); 
        tries++;
    }else
    if (guess == rNum){
        tries++;
        alert ("WINNER WINNER CHICKEN DINNER! You have a guess total of " + tries + "!");
      isPlaying = false ;
    }
   }
   
}

function playAgain(name){
    question = prompt("Welcome back," + name + "! Would you like to go another round?") ;
    if (question === no || nope) {
        alert ("See you next time," + name + "!") ;


}
}

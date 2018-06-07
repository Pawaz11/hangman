//create an array to store the words
var arrayOfWords = ["JAVA","JAVASCRIPT","PYTHON","PHP","HTML"];
var rand = Math.floor(Math.random() * arrayOfWords.length);
var word;
var remainingCharacters;
var correctChars = 0;
var lives = 0;
var parts = 0;

//function to delete add parts as a wrong letter is clicked
function hanging(){
  var x=0;
  $('.hangman-items').each(function(){
    if(x<parts){
      $(this).css({"display":"block"});
    }
    x++;
  });
}

//create a reset function that will return the game back to its original state.
function reset(){
  playAud();
  $('.hangman-items').css({"display":"none"});
  $(".win").css({"opacity":"0"});
  $(".lost").css({"opacity":"0"});
  $("#lostModal").css("display", "none");
  lives = 10;
  $("h3").html("You have: " + lives + " lives left");
  correctChars = 0;
  parts = 0;
  rand = Math.floor(Math.random() * arrayOfWords.length);
  word = arrayOfWords[rand];
  remainingCharacters = word.length;
  $(".word").html('');

  //update the box with a space and underline for every remaining character
  for (var i = 0; i <remainingCharacters; i++) {
      var content = $(".word").html();
      $(".word").html(content+' _');
    }
}

function updateDisplay() {
  remainingCharacters--;//updating how many chars left
  var updateContent='';
  for (var i = 0; i <correctChars; i++) {
    updateContent = updateContent + word.charAt(i);
  }

  $(".word").html(updateContent);//set box to show the character player got correct
  console.log('Updating this amount of chars '+remainingCharacters);

  for (var i = 0; i <remainingCharacters; i++) {//update the box with a space and underline for every remaining character
      var content = $(".word").html();
      $(".word").html(content+' _');
    }
}

function matchWordCharsToClick(){
  //Event click for letters
  $(".letters").click(function(){
    //assigns the current character in the word to currentCharacter
    var currentCharacter = word.charAt(correctChars);
    //clickedCharacter is the letter the user click
    var clickedCharacter = $(this).html();

    //if the clicked character is the currentCharacter it increments chacacter by 1
    if (clickedCharacter==currentCharacter) {
      correctChars++;
      updateDisplay();
      if (remainingCharacters==0) {
            console.log("You win!");
            $(".win").fadeTo('slow',1,function(){});
            pauseAud();
            winApplauseSound();
        }
          //If the guess is wrong, a body part is added and score is //decreased by 1.
          }else if (clickedCharacter != currentCharacter) {
              lives--;
              parts++;
              hanging();
              $("h3").html("You have: " + lives + " lives left");

          if (lives == 0){
            $(".lost").fadeTo('slow',1,function(){});
            $("#lostModal").css("display", "block");
            pauseAud();
            gameOverSound();
        }
      }
      clickAudio();
  });
}
//Audio controls
function playAud() {
    bgAudio.play();
}
function pauseAud() {
    bgAudio.pause();
}
function clickAudio(){
  clickAud.play();
}
function gameOverSound(){
  gameOverAud.play();
}
function winApplauseSound(){
  winApplauseAud.play();
}


$(document).ready(function(){

  // for (var i = 0; i <remainingCharacters; i++) {//update the box with a space and underline for every remaining character
  //     var content = $(".word").html();
  //     $(".word").html(content+' _ ');
  //   }

  // Audio imports
  var bgAudio = document.getElementById("bgAudio");
  var clickAud = document.getElementById("clickAud");
  var gameOverAud = document.getElementById("gameOver");
  var winApplauseAud = document.getElementById("winApplause");


  console.log("Dom loaded");
  
  $("#myModal").css("display","block");


  $( "#closeInstructions" ).click(function() {
    $("#myModal").css("display", "none");
    playAud();
  });

  $( "#closeGameOver" ).click(function() {
    $("#lostModal").css("display", "none");
  });

  $( "#myModal" ).click(function() {
    $("#myModal").css("display", "none");
    playAud();
  });


  $( ".modal-content").click(function() {
    event.stopPropagation();
  });


  matchWordCharsToClick();
  reset();
});

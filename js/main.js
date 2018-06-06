//create an array to store the words
var arrayOfWords = ["JAVA","CSHARP","JAVASCRIPT","PYTHON","PHP","HTML","CSS"];
var rand = Math.floor(Math.random() * arrayOfWords.length);
var word;
var remainingCharacters;
var correctChars = 0;
var lives = 0;
var parts = 0;

function hanging(){
  var x=0;
  $('.hangman-items').each(function(){
    if(x<parts){
      $(this).css({"display":"block"});
    }
    x++;
  });
}

//Create a reset function that will return the game back to its original state.
function reset(){
  $('.hangman-items').css({"display":"none"});
  $(".win").css({"opacity":"0"});
  $(".lost").css({"opacity":"0"});
  lives = 10;
  $("h3").html("You have: " + lives + " lives left");
  remainingCharacters = 0;
  correctChars = 0;
  parts = 0;
  rand = Math.floor(Math.random() * arrayOfWords.length);
  word= arrayOfWords[rand];
  remainingCharacters = word.length;
  $(".word").html('');
  for (var i = 0; i <=remainingCharacters; i++) {//update the box with a space and underline for every remaining character
      var content = $(".word").html();
      $(".word").html(content+' _ ');
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
      $(".word").html(content+' _ ');
    }
}

function matchWordCharsToClick(){
  //event click for letters
  $(".letters").click(function(){
    var currentCharacter = word.charAt(correctChars);
    var clickedCharacter = $(this).html();

    if (clickedCharacter==currentCharacter) {
      correctChars++;
      updateDisplay();
      if (remainingCharacters==0) {
            console.log("You win!");
            $(".win").fadeTo('slow',1,function(){});

        }
          //If the guess is wrong, a body part is added and score is decreased by 1.
          }else if (clickedCharacter != currentCharacter) {
              lives--;
              parts++;
              hanging();
              $("h3").html("You have: " + lives + " lives left");

              if (lives == 0){
                // $("h2").html("You lost!");
                // $(".lost").css({"display":"block"});
                // $("h2").css({"color": "red"});
                $(".lost").fadeTo('slow',1,function(){});
        }
      }
  });
}


$(document).ready(function(){
  console.log("Dom loaded");
  reset();
  matchWordCharsToClick();


  //Select a random word from the array and display underlines for the length of the word
    //Select word from the array

    //Display word to screen

    //Underline characters for the length of the word

});

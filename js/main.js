//create an array to store the words
var arrayOfWords = ["SCHOOL","LONDON","JAVASCRIPT","MACBOOK"];
var rand = Math.floor(Math.random() * arrayOfWords.length);
var word = arrayOfWords[rand];
var remainingCharacters = word.length;
var correctChars = 0;
var lives = 10;
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
function unhang(){
  $('.hangman-items').css({"display":"none"});
}

function updateDisplay() {
  remainingCharacters--;//updating how many chars left
  var updateContent='';
  for (var i = 0; i <correctChars; i++) {
    updateContent = updateContent + word.charAt(i);
  }

  $(".word").html(updateContent);//set box to show the character player got correct
  console.log('im updating this amount of chars '+remainingCharacters);
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
            $("h2").css({"display": "inline-block"});

        }
    }else if (clickedCharacter != currentCharacter) {
        lives-- ;
        parts++;
        hanging();
        $("h3").html("You have: " + lives + " lives left");

        if (lives == 0){
          $("h2").html("You lost!");
          $("h2").css({"display":"inline-block"});
          $("h2").css({"color": "red"});
        }
      }


      for (var i = lives; i <= correctChars; i++) {
        $( "div:nth-type-of()" ).css({"display": "block"});

        // $(".scaffold-top").css({"display": "block"});
        $(".scaffold-left").css({"display": "block"});
        // $(".rope").css({"display": "block"});
        // $(".head").css({"display": "block"});
        // $(".leftarm").css({"display": "block"});
        // $(".rightarm").css({"display": "block"});
        // $(".torso").css({"display": "block"});
        // $(".leftleg").css({"display": "block"});
        // $(".rightleg").css({"display": "block"});
        // $(".pelvis").css({"display": "block"});
      }

      // if (correctChars <= lives) {
      // } else  if (true) {
      //
      // }else if (true) {
      //
      // }{
      //
      // }
  });
}


$(document).ready(function(){
  console.log("Dom loaded");
  for (var i = 0; i <=remainingCharacters; i++) {//update the box with a space and underline for every remaining character
      var content = $(".word").html();
      $(".word").html(content+' _ ');
    }
  matchWordCharsToClick();
  unhang();
// function javascript(){
//   //gets the word school from array
//   var word = arrayOfWords[2];
//   addDivs(word);
//   //event click for letters
//   $(".letters").click(function(){
//   //if the letter is correct, then hide the letter
//   var alpha = $(this).html();
//
//   // for (var i = 0; i < word.length; i++) {
//   //     var content = $(".word").html();
//   //     $(".word").html(content+' _');
//   // }
// });
// }

// function alphabetClick(){
//   $(".letters").click(function(){
//    var alpha = $(".letters").innerText;
//    if (alpha == "A") {
//      $(".letters").hide();
//    }
//   })

  //Select a random word from the array and display underlines for the length of the word
    //Select word from the array

    //Display word to screen

    //Underline characters for the length of the word


  //create a function that will match the clicked letter to the letters in the word.


  //If the letters match then hide the guessed letters.


  //If the guess is wrong, a body part is added and score is decreased by 1.


  //Create a reset function that will return the game back to its original state.

});

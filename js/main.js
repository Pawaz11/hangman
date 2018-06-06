//create an array to store the words
var arrayOfWords = ["JAVA","JAVASCRIPT","PYTHON","PHP","HTML"];
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
  $("#lostModal").css("display", "none");
  lives = 10;
  $("h3").html("You have: " + lives + " lives left");
  correctChars = 0;
  parts = 0;
  rand = Math.floor(Math.random() * arrayOfWords.length);
  word = arrayOfWords[rand];
  remainingCharacters = word.length;
  $(".word").html('');
  for (var i = 0; i <remainingCharacters; i++) {//update the box with a space and underline for every remaining character
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
          //If the guess is wrong, a body part is added and score is //decreased by 1.
          }else if (clickedCharacter != currentCharacter) {
              lives--;
              parts++;
              hanging();
              $("h3").html("You have: " + lives + " lives left");

              if (lives == 0){
                $(".lost").fadeTo('slow',1,function(){});
                $("#lostModal").css("display", "block");
        }
      }
  });
}

$(document).ready(function(){

  // for (var i = 0; i <remainingCharacters; i++) {//update the box with a space and underline for every remaining character
  //     var content = $(".word").html();
  //     $(".word").html(content+' _ ');
  //   }

  console.log("Dom loaded");
  $("#myModal").css("display","block");


  $( "#closeInstructions" ).click(function() {
    $("#myModal").css("display", "none");
  });

  $( "#closeGameOver" ).click(function() {
    $("#lostModal").css("display", "none");
  });

  $( "#myModal" ).click(function() {
    $("#myModal").css("display", "none");
  });

  $( "#lostModal" ).click(function() {
    $("#lostModal").css("display", "none");
  });

  $( ".modal-content").click(function() {
    event.stopPropagation();
  });



  // $( ".close" ).click(function() {
  //   $("#lostModal").hide();
  // });

  // $( ".close" ).click(function() {
  //   $("#wonModal").hide();
  // });
  
  matchWordCharsToClick();
  reset();
});

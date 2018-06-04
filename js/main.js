$(document).ready(function(){

  console.log("Dom loaded");


  //create an array to store the words
  var arrayOfWords = ["SCHOOL","London","Javascript"];
  var lives = 10;
  var rand = Math.floor(Math.random() * arrayOfWords.length);


  school();
  function school(){
    //gets the word school from array
    var word = arrayOfWords[0];
    //event click for letters
    // $('.word').html('_ _ _ _ _ _');

    var buttonClick = $(".letters").click(function(){
      //if the letter is correct, then hide the letter
    var alpha = $(this).html();

    for (var i = 0; i <= word.length; i++) {
      if (word.charAt(i) === alpha ) {
        $(".word ." + i).html(alpha)
      }
    }

    
// if (string1.charAt(i) == string2.charAt(j))
  });



  }
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

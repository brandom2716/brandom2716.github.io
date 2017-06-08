$(document).ready(function(){
     var card_array = ["fish", "fish", "turtle", "turtle", "pig", "pig", "dog", "dog", "cat", "cat", "snake",   
     "snake", "bird", "bird", "goat", "goat", "hamster", "hamster", "dragon", "dragon"];
  
     //function that takes an array and returns a randomly shuffled version
     function shuffle(array) {
         var currentIndex = array.length, temporaryValue, randomIndex ;
         // While there remain elements to shuffle...
         while (0 !== currentIndex) {
              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex -= 1;
              // And swap it with the current element.
              temporaryValue = array[currentIndex];
              array[currentIndex] = array[randomIndex];
              array[randomIndex] = temporaryValue;
         }
         return array;
      }
      var shuffled_array = shuffle(card_array);
  
      //populate page with cards with content from randomized array
      for(i in shuffled_array){
          $('#card_holder').append("<div class='card'><p>"+shuffled_array[i]+"</p></div>");
      }
  
      //general game flow, clicking on cards to reveal content
      var click_count = 0; //at start of game, no clicks have happened
      var first_click = "first"; //create variables to keep track of selections
      var second_click = "second";
      $('.card').on('click', function(){
          if(click_count === 0){
              $(this).find('p').css('opacity', '1').addClass('clicked');
              first_click = $(this).find('p').text();
              click_count = 1;
          }
          else {
              $(this).find('p').css('opacity', '1').addClass('clicked');
              second_click = $(this).find('p').text();
              if(first_click === second_click){
                  $('.clicked').css('font-weight', 'bold').removeClass('clicked');
              }
              else { //this waits a second, then makes the cards invisible again
                  setTimeout(function(){$('.clicked').css('opacity', '0').removeClass('clicked')}, 1000); 
              }
              click_count = 0; 
         }
  });
     //click function
     $('#clear').on('click', function(){
          $('#card_holder').html("");
           var shuffled_array = shuffle(card_array);

           //populate page with cards with content from randomized array
           for(i in shuffled_array){
                $('#card_holder').append("<div class='card'><p>"+shuffled_array[i]+"</p></div>");
           }
     });
  //clear the board and reset the cards when the clear button is clicked, and re-shuffle the cards

});

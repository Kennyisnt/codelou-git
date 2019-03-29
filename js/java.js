
const pokeResults = document.querySelector('.pokeResults');
const pokeSubmit = document.querySelector('button.pokeSubmit');


//Sets Pokemon Array/Table for the Quiz
//Will Need To Randomize This List for a More Unique Variety
//Do I even need all 100??
const Pokemon = ['Voltorb', 'Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto', 'Pidgeot', 'Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Pikachu', 'Raichu', 'Sandshrew', 'Sandslash', 'Nidoran♀', 'Nidorina', 'Nidoqueen', 'Nidoran♂', 'Nidorino', 'Nidoking', 'Clefairy', 'Clefable', 'Vulpix', 'Ninetales', 'Jigglypuff', 'Wigglytuff', 'Zubat', 'Golbat', 'Oddish', 'Gloom', 'Vileplume', 'Paras', 'Parasect', 'Venonat', 'Venomoth', 'Diglett', 'Dugtrio', 'Meowth', 'Persian', 'Psyduck', 'Golduck', 'Mankey', 'Primeape', 'Growlithe', 'Arcanine', 'Poliwag', 'Poliwhirl', 'Poliwrath', 'Abra', 'Kadabra', 'Alakazam', 'Machop', 'Machoke', 'Machamp', 'Bellsprout', 'Weepinbell', 'Victreebel', 'Tentacool', 'Tentacruel', 'Geodude', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowpoke', 'Slowbro', 'Magnemite', 'Magneton', "Farfetch'd", 'Doduo', 'Dodrio', 'Seel', 'Dewgong', 'Grimer', 'Muk', 'Shellder', 'Cloyster', 'Gastly', 'Haunter', 'Gengar', 'Onix', 'Drowzee', 'Hypno', 'Krabby', 'Kingler']




function pokeQuiz(){
    var pokeMonth = document.querySelector('input.pokeMonth').value;
    var pokeDay  = document.querySelector('input.pokeDay').value;
    var pokeYear  = document.querySelector('input.pokeYear').value;
    pokeMonth = parseInt(pokeMonth);
    pokeDay = parseInt(pokeDay);
    pokeYear = parseInt(pokeYear);
    // $('.pokeHider').hide();
    // Code Checker - MDY
    if (pokeMonth>12) {
      alert("Please Enter the Month Again - This must be between 0-12");
      end;
    } else if (pokeMonth==0) {
      alert("Please use a valid month. 0 Is not a Valid Month.")
      end;
    }
  // Day Checker
    if (pokeDay>31) {
      alert("Please Enter the Day Again - This must be between 0-31");
      end;
    } else if (pokeDay==0) {
      alert("Please use a valid day. 0 Is not a Valid day.")
      end;
    }
  // Year Checker
    if (pokeYear>100) {
      alert("Please enter the two digit year. ('0' will work for 2000)");
      end;
    }
    pokeResults.innerHTML = "<h2>Your Team Is ... "  + Pokemon[pokeMonth] + " " + Pokemon[pokeDay] + " " + Pokemon[pokeYear] + "</h2>";
}

// When the Initial Pokeball is clicked - the pokeball will reveal the quiz
$('.pokeKazam').on('click', 'button', function(event) {
  $(event.target).hide();
  $('.pokeQuestion').hide();
  $('.pokeHider').show();
});


// Hides Quiz Initially
$('.pokeHider').hide();

$('.contactButton').click(function(event) {
  $(".contactMeHere").fadeOut(30).fadeIn(1000);
});
$('.aboutButton').click(function(event) {
  $(".aboutMe").fadeOut(30).fadeIn(1000);
});

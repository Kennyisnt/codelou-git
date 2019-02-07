var pokeMonth = document.querySelector('input.pokeMonth');
var pokeDay  = document.querySelector('input.pokeDay');
var pokeYear  = document.querySelector('input.pokeYear');

const pokeSubmit = document.querySelector('button.pokeSubmit');


var Pokemon = ['Voltorb', 'Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise', 'Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto', 'Pidgeot', 'Rattata', 'Raticate', 'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Pikachu', 'Raichu', 'Sandshrew', 'Sandslash', 'Nidoran♀', 'Nidorina', 'Nidoqueen', 'Nidoran♂', 'Nidorino', 'Nidoking', 'Clefairy', 'Clefable', 'Vulpix', 'Ninetales', 'Jigglypuff', 'Wigglytuff', 'Zubat', 'Golbat', 'Oddish', 'Gloom', 'Vileplume', 'Paras', 'Parasect', 'Venonat', 'Venomoth', 'Diglett', 'Dugtrio', 'Meowth', 'Persian', 'Psyduck', 'Golduck', 'Mankey', 'Primeape', 'Growlithe', 'Arcanine', 'Poliwag', 'Poliwhirl', 'Poliwrath', 'Abra', 'Kadabra', 'Alakazam', 'Machop', 'Machoke', 'Machamp', 'Bellsprout', 'Weepinbell', 'Victreebel', 'Tentacool', 'Tentacruel', 'Geodude', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Slowpoke', 'Slowbro', 'Magnemite', 'Magneton', "Farfetch'd", 'Doduo', 'Dodrio', 'Seel', 'Dewgong', 'Grimer', 'Muk', 'Shellder', 'Cloyster', 'Gastly', 'Haunter', 'Gengar', 'Onix', 'Drowzee', 'Hypno', 'Krabby', 'Kingler']

// Turning Off Prompts
// pokeMonth = prompt("Please Enter The Month You were Born 01-January, 12-December");
// pokeDay = prompt("Please enter the day that you were born 01, 02, 03... 31");
// pokeYear = prompt("Please enter the 2 diget year that you were born. (1999 = '99', 2000 = '00')");



pokeSubmit.addEventListener('click', () => {
  // descriptionP.innerHTML = descriptionInput.value + ':';
  var pokeMonth = document.querySelector('input.pokeMonth');
  var pokeDay  = document.querySelector('input.pokeDay');
  var pokeYear  = document.querySelector('input.pokeYear');
  pokeMonth = parseInt(pokeMonth);
  pokeDay = parseInt(pokeDay);
  pokeYear = parseInt(pokeYear);
  document.write("<h1>Your Team Is .. " + Pokemon[pokeMonth] + " " + Pokemon[pokeDay] + " " + Pokemon[pokeYear] + "</h1>");

});

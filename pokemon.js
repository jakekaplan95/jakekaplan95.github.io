


// Start with Data for Pokemone Mew
var pokemonData = {};


// Attemp to link code through Ajax for a single pokemon
$.ajax({
  url: `https://pokeapi.co/api/v2/pokemon/151`
}).then(
  function(data){
    pokemonData = data;
    revealStats();
    console.log(pokemonData)
  })




// Variables for pokemon paramaters for JSON
function revealStats() {

  var nameInfo = $('#name')
  var idInfo = $('#identifier')
  var typeInfo = $('#type')
  var abilityInfo = $('#ability')
  var healthInfo = $('#health')
  var attackInfo = $('#attack')
  var defenseInfo = $('#defense')

  // Text result bringing pokemon stats to form
  nameInfo.text("Name: " + pokemonData.name)
  idInfo.text("Id #: " + pokemonData.id)
  typeInfo.text("Type: " + pokemonData.types[0].type.name)
  abilityInfo.text("Ability: " + pokemonData.abilities[0].ability.name)


  pokemonData.stats.forEach((item) => {
      if(item.stat.name === "hp") {
          healthInfo.text("Health: " + item.base_stat)
      }
      if(item.stat.name === "attack") {
          attackInfo.text("Attack: " + item.base_stat)
      }
      if(item.stat.name === "defense") {
          defenseInfo.text("Defense: " + item.base_stat)
      }
  })
  }

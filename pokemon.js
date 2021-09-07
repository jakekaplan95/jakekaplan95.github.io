


// Start with Data for Pokemone Mew
var pokemonData = {};


// Variables for pokemon paramaters for JSON
var nameInfo = $('#name')
var idInfo = $('#identifier')
var typeInfo = $('#type')
var abilityInfo = $('#ability')
var healthInfo = $('#health')
var attackInfo = $('#attack')
var defenseInfo = $('#defense')


function displayData() {

  // Text result bringing pokemon stats to form
  nameInfo.text("Name: " + pokemonData.name)
  idInfo.text("Id #: " + pokemonData.id)
  typeInfo.text("Type: " + pokemonData.types[0].type.name)
  abilityInfo.text("Ability: " + pokemonData.abilities[0].ability.name)

  // Looping through stats to determine hp/attack/defense
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
};

  // Creating a listener for the button to catch pokemon by ID
let generate = $("#submit");
generate.on("click", function(event) {

  var inputVal = $("#userInput").value

  // Attemp to link code through Ajax for a single pokemon
$.ajax({
  url: 'https://pokeapi.co/api/v2/pokemon/' + inputVal
    }).then(
function(data){
  pokemonData = data;
  displayData()
  },

  // Attempting to check and alert if input does not have a result
  function(error){
    console.log("There is no Pokemon found", error)
    alert("There is no Pokemon found, please try again")
  });
});

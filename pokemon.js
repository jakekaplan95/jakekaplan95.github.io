// Start with Data for Pokemone Mew

var data = {
    "abilities": [
      {
        "ability": {
          "name": "synchronize",
          "url": "https://pokeapi.co/api/v2/ability/28/"
        },
        "is_hidden": false,
        "slot": 1
      }
    ],
    "base_experience": 270,
    "stats": [
        {
          "base_stat": 100,
          "effort": 3,
          "stat": {
            "name": "hp",
            "url": "https://pokeapi.co/api/v2/stat/1/"
          }
        },
        {
          "base_stat": 100,
          "effort": 0,
          "stat": {
            "name": "attack",
            "url": "https://pokeapi.co/api/v2/stat/2/"
          }
        },
        {
          "base_stat": 100,
          "effort": 0,
          "stat": {
            "name": "defense",
            "url": "https://pokeapi.co/api/v2/stat/3/"
          }
        },
        {
          "base_stat": 100,
          "effort": 0,
          "stat": {
            "name": "special-attack",
            "url": "https://pokeapi.co/api/v2/stat/4/"
          }
        },
        {
          "base_stat": 100,
          "effort": 0,
          "stat": {
            "name": "special-defense",
            "url": "https://pokeapi.co/api/v2/stat/5/"
          }
        },
        {
          "base_stat": 100,
          "effort": 0,
          "stat": {
            "name": "speed",
            "url": "https://pokeapi.co/api/v2/stat/6/"
          }
        }
      ],
      "types": [
        {
          "slot": 1,
          "type": {
            "name": "psychic",
            "url": "https://pokeapi.co/api/v2/type/14/"
          }
        }
      ],
      "weight": 40

};

// Variables for pokemon paramaters for JSON
var typeInfo = $('#type')
var abilityInfo = $('#ability')
var healthInfo = $('#health')
var attackInfo = $('#attack')
var defenseInfo = $('#defense')

// Text result bringing pokemon stats to form
typeInfo.text("Type: " + data.types[0].type.name)
abilityInfo.text("Ability: " + data.abilities[0].ability.name)


data.stats.forEach((item) => {
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

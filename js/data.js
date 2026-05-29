window.pokemonData = [
  {
    national_dex: 1,
    name: "Bulbasaur",
    types: ["Grass", "Poison"],
    abilities: ["Overgrow", "Chlorophyll"],
    generations: {
      "1": {
        base_stats: { hp: 45, attack: 49, defense: 49, special_attack: 65, special_defense: 65, speed: 45 },
        moves: {
          level_up: [
            { level: 1, name: "Tackle" },
            { level: 1, name: "Growl" },
            { level: 7, name: "Leech Seed" },
            { level: 13, name: "Vine Whip" },
            { level: 20, name: "Poison Powder" },
            { level: 27, name: "Razor Leaf" },
            { level: 34, name: "Growth" },
            { level: 41, name: "Sleep Powder" },
            { level: 48, name: "Solar Beam" }
          ],
          tm: ["Swords Dance", "Toxic", "Body Slam", "Take Down", "Double-Edge", "Mega Drain", "Solar Beam", "Double Team", "Reflect", "Rest", "Substitute", "Cut"]
        },
        entry: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
      }
    }
  },
  {
    national_dex: 2,
    name: "Ivysaur",
    types: ["Grass", "Poison"],
    abilities: ["Overgrow", "Chlorophyll"],
    generations: {
      "1": {
        base_stats: { hp: 60, attack: 62, defense: 63, special_attack: 80, special_defense: 80, speed: 60 },
        moves: {
          level_up: [
            { level: 1, name: "Tackle" },
            { level: 1, name: "Growl" },
            { level: 7, name: "Leech Seed" },
            { level: 13, name: "Vine Whip" },
            { level: 20, name: "Poison Powder" },
            { level: 27, name: "Razor Leaf" },
            { level: 34, name: "Growth" },
            { level: 41, name: "Sleep Powder" },
            { level: 48, name: "Solar Beam" }
          ],
          tm: ["Swords Dance", "Toxic", "Body Slam", "Take Down", "Double-Edge", "Mega Drain", "Solar Beam", "Double Team", "Reflect", "Rest", "Substitute", "Cut"]
        },
        entry: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
      }
    }
  },
  {
    national_dex: 3,
    name: "Venusaur",
    types: ["Grass", "Poison"],
    abilities: ["Overgrow", "Chlorophyll"],
    generations: {
      "1": {
        base_stats: { hp: 80, attack: 82, defense: 83, special_attack: 100, special_defense: 100, speed: 80 },
        moves: {
          level_up: [
            { level: 1, name: "Tackle" },
            { level: 1, name: "Growl" },
            { level: 7, name: "Leech Seed" },
            { level: 13, name: "Vine Whip" },
            { level: 20, name: "Poison Powder" },
            { level: 27, name: "Razor Leaf" },
            { level: 34, name: "Growth" },
            { level: 41, name: "Sleep Powder" },
            { level: 48, name: "Solar Beam" }
          ],
          tm: ["Swords Dance", "Toxic", "Body Slam", "Take Down", "Double-Edge", "Hyper Beam", "Mega Drain", "Solar Beam", "Double Team", "Reflect", "Rest", "Substitute", "Cut"]
        },
        entry: "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
      }
    }
  },
  {
    national_dex: 4,
    name: "Charmander",
    types: ["Fire"],
    abilities: ["Blaze", "Solar Power"],
    generations: {
      "1": {
        base_stats: { hp: 39, attack: 52, defense: 43, special_attack: 60, special_defense: 50, speed: 65 },
        moves: {
          level_up: [
            { level: 1, name: "Scratch" },
            { level: 1, name: "Growl" },
            { level: 4, name: "Ember" },
            { level: 8, name: "Smokescreen" },
            { level: 12, name: "Dragon Breath" },
            { level: 17, name: "Fire Fang" },
            { level: 20, name: "Slash" },
            { level: 24, name: "Flamethrower" }
          ],
          tm: ["Swords Dance", "Toxic", "Body Slam", "Take Down", "Double-Edge", "Fire Blast", "Swift", "Skull Bash", "Rest", "Substitute", "Cut"]
        },
        entry: "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
      }
    }
  },
  {
    national_dex: 5,
    name: "Charmeleon",
    types: ["Fire"],
    abilities: ["Blaze", "Solar Power"],
    generations: {
      "1": {
        base_stats: { hp: 58, attack: 64, defense: 58, special_attack: 80, special_defense: 65, speed: 80 },
        moves: {
          level_up: [
            { level: 1, name: "Scratch" },
            { level: 1, name: "Growl" },
            { level: 4, name: "Ember" },
            { level: 8, name: "Smokescreen" },
            { level: 12, name: "Dragon Breath" },
            { level: 17, name: "Fire Fang" },
            { level: 20, name: "Slash" },
            { level: 24, name: "Flamethrower" },
            { level: 28, name: "Dragon Claw" }
          ],
          tm: ["Swords Dance", "Toxic", "Body Slam", "Take Down", "Double-Edge", "Fire Blast", "Swift", "Skull Bash", "Rest", "Substitute", "Cut", "Dragon Claw"]
        },
        entry: "It has a barbaric nature. In battle, it whips its fiery tail around and slashes the opponent.",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
      }
    }
  },
  {
    national_dex: 6,
    name: "Charizard",
    types: ["Fire", "Flying"],
    abilities: ["Blaze", "Solar Power"],
    generations: {
      "1": {
        base_stats: { hp: 78, attack: 84, defense: 78, special_attack: 109, special_defense: 85, speed: 100 },
        moves: {
          level_up: [
            { level: 1, name: "Scratch" },
            { level: 1, name: "Growl" },
            { level: 4, name: "Ember" },
            { level: 8, name: "Smokescreen" },
            { level: 12, name: "Dragon Breath" },
            { level: 17, name: "Fire Fang" },
            { level: 20, name: "Slash" },
            { level: 24, name: "Flamethrower" },
            { level: 28, name: "Dragon Claw" },
            { level: 32, name: "Air Slash" },
            { level: 36, name: "Flamethrower" },
            { level: 40, name: "Dragon Dance" }
          ],
          tm: ["Swords Dance", "Toxic", "Body Slam", "Take Down", "Double-Edge", "Hyper Beam", "Fire Blast", "Swift", "Skull Bash", "Rest", "Substitute", "Cut", "Fly", "Dragon Claw"]
        },
        entry: "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
      }
    }
  },
  {
    national_dex: 7,
    name: "Squirtle",
    types: ["Water"],
    abilities: ["Torrent", "Rain Dish"],
    generations: {
      "1": {
        base_stats: { hp: 44, attack: 48, defense: 65, special_attack: 50, special_defense: 64, speed: 43 },
        moves: {
          level_up: [
            { level: 1, name: "Tackle" },
            { level: 1, name: "Tail Whip" },
            { level: 4, name: "Water Gun" },
            { level: 7, name: "Withdraw" },
            { level: 10, name: "Bubble" },
            { level: 13, name: "Bite" },
            { level: 16, name: "Water Pulse" },
            { level: 19, name: "Aqua Tail" }
          ],
          tm: ["Swords Dance", "Toxic", "Body Slam", "Take Down", "Double-Edge", "Surf", "Ice Beam", "Blizzard", "Bubble Beam", "Waterfall", "Rest", "Substitute", "Cut"]
        },
        entry: "After birth, its back swells and hardens into a shell. It sprays foam from its mouth.",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
      }
    }
  },
  {
    national_dex: 8,
    name: "Wartortle",
    types: ["Water"],
    abilities: ["Torrent", "Rain Dish"],
    generations: {
      "1": {
        base_stats: { hp: 59, attack: 63, defense: 80, special_attack: 65, special_defense: 80, speed: 58 },
        moves: {
          level_up: [
            { level: 1, name: "Tackle" },
            { level: 1, name: "Tail Whip" },
            { level: 4, name: "Water Gun" },
            { level: 7, name: "Withdraw" },
            { level: 10, name: "Bubble" },
            { level: 13, name: "Bite" },
            { level: 16, name: "Water Pulse" },
            { level: 20, name: "Aqua Tail" },
            { level: 24, name: "Rapid Spin" }
          ],
          tm: ["Swords Dance", "Toxic", "Body Slam", "Take Down", "Double-Edge", "Surf", "Ice Beam", "Blizzard", "Waterfall", "Rest", "Substitute", "Cut"]
        },
        entry: "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
      }
    }
  },
  {
    national_dex: 9,
    name: "Blastoise",
    types: ["Water"],
    abilities: ["Torrent", "Rain Dish"],
    generations: {
      "1": {
        base_stats: { hp: 79, attack: 83, defense: 100, special_attack: 85, special_defense: 105, speed: 78 },
        moves: {
          level_up: [
            { level: 1, name: "Tackle" },
            { level: 1, name: "Tail Whip" },
            { level: 4, name: "Water Gun" },
            { level: 7, name: "Withdraw" },
            { level: 10, name: "Bubble" },
            { level: 13, name: "Bite" },
            { level: 16, name: "Water Pulse" },
            { level: 20, name: "Aqua Tail" },
            { level: 24, name: "Rapid Spin" },
            { level: 28, name: "Hydro Pump" },
            { level: 32, name: "Skull Bash" }
          ],
          tm: ["Swords Dance", "Toxic", "Body Slam", "Take Down", "Double-Edge", "Surf", "Ice Beam", "Blizzard", "Hyper Beam", "Waterfall", "Rest", "Substitute", "Cut"]
        },
        entry: "It crushes its foes by using its weight. It is also able to shoot water from the cannons on its back.",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
      }
    }
  },
  {
    national_dex: 10,
    name: "Caterpie",
    types: ["Bug"],
    abilities: ["Shield Dust", "Run Away"],
    generations: {
      "1": {
        base_stats: { hp: 45, attack: 30, defense: 35, special_attack: 20, special_defense: 20, speed: 45 },
        moves: {
          level_up: [
            { level: 1, name: "Tackle" },
            { level: 1, name: "String Shot" }
          ],
          tm: []
        },
        entry: "It releases a stench from its antennae to repel enemies. It grows by molting its skin.",
        sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
      }
    }
  }
];
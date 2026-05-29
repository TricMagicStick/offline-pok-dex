window.pokemonData = [
  {
    national_dex: 1,
    name: "Bulbasaur",
    types: ["Grass", "Poison"],
    abilities: ["Overgrow", "Chlorophyll"],
    base_stats: { hp: 45, attack: 49, defense: 49, special_attack: 65, special_defense: 65, speed: 45 },
    entry: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    moves: { level_up: [{ level: 1, name: "Tackle" }, { level: 1, name: "Growl" }, { level: 3, name: "Vine Whip" }, { level: 7, name: "Growth" }, { level: 9, name: "Leech Seed" }, { level: 13, name: "Razor Leaf" }], tm: ["Swords Dance", "Toxic", "Body Slam", "Take Down", "Double-Edge", "Mega Drain", "Solar Beam", "Double Team", "Reflect", "Rest", "Substitute", "Cut"], egg: ["Light Screen", "Charm", "Magical Leaf"] }
  },
  {
    national_dex: 2,
    name: "Ivysaur",
    types: ["Grass", "Poison"],
    abilities: ["Overgrow", "Chlorophyll"],
    base_stats: { hp: 60, attack: 62, defense: 63, special_attack: 80, special_defense: 80, speed: 60 },
    entry: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    moves: { level_up: [{ level: 1, name: "Tackle" }, { level: 1, name: "Growl" }, { level: 3, name: "Vine Whip" }, { level: 7, name: "Growth" }, { level: 9, name: "Leech Seed" }, { level: 13, name: "Razor Leaf" }, { level: 15, name: "Poison Powder" }, { level: 20, name: "Sleep Powder" }], tm: ["Swords Dance", "Toxic", "Body Slam", "Take Down", "Double-Edge", "Mega Drain", "Solar Beam", "Double Team", "Reflect", "Rest", "Substitute", "Cut"], egg: ["Light Screen", "Charm"] }
  },
  {
    national_dex: 3,
    name: "Venusaur",
    types: ["Grass", "Poison"],
    abilities: ["Overgrow", "Chlorophyll"],
    base_stats: { hp: 80, attack: 82, defense: 83, special_attack: 100, special_defense: 100, speed: 80 },
    entry: "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    moves: { level_up: [{ level: 1, name: "Tackle" }, { level: 1, name: "Growl" }, { level: 3, name: "Vine Whip" }, { level: 7, name: "Growth" }, { level: 9, name: "Leech Seed" }, { level: 13, name: "Razor Leaf" }, { level: 15, name: "Poison Powder" }, { level: 20, name: "Sleep Powder" }, { level: 23, name: "Seed Bomb" }, { level: 28, name: "Take Down" }, { level: 31, name: "Sweet Scent" }, { level: 39, name: "Synthesis" }, { level: 45, name: "Petal Dance" }], tm: ["Swords Dance", "Toxic", "Body Slam", "Take Down", "Double-Edge", "Hyper Beam", "Mega Drain", "Solar Beam", "Double Team", "Reflect", "Rest", "Substitute", "Cut"], egg: ["Light Screen", "Charm"] }
  },
  {
    national_dex: 4,
    name: "Charmander",
    types: ["Fire"],
    abilities: ["Blaze", "Solar Power"],
    base_stats: { hp: 39, attack: 52, defense: 43, special_attack: 60, special_defense: 50, speed: 65 },
    entry: "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    moves: { level_up: [{ level: 1, name: "Scratch" }, { level: 1, name: "Growl" }, { level: 4, name: "Ember" }, { level: 8, name: "Smokescreen" }, { level: 12, name: "Dragon Breath" }, { level: 17, name: "Fire Fang" }, { level: 20, name: "Slash" }, { level: 24, name: "Flamethrower" }], tm: ["Swords Dance", "Toxic", "Body Slam", "Take Down", "Double-Edge", "Fire Blast", "Swift", "Skull Bash", "Rest", "Substitute", "Cut"], egg: ["Belly Drum", "Ancient Power", "Beat Up", "Bite"] }
  },
  {
    national_dex: 5,
    name: "Charmeleon",
    types: ["Fire"],
    abilities: ["Blaze", "Solar Power"],
    base_stats: { hp: 58, attack: 64, defense: 58, special_attack: 80, special_defense: 65, speed: 80 },
    entry: "It has a barbaric nature. In battle, it whips its fiery tail around and slashes the opponent.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    moves: { level_up: [{ level: 1, name: "Scratch" }, { level: 1, name: "Growl" }, { level: 4, name: "Ember" }, { level: 8, name: "Smokescreen" }, { level: 12, name: "Dragon Breath" }, { level: 17, name: "Fire Fang" }, { level: 20, name: "Slash" }, { level: 24, name: "Flamethrower" }, { level: 28, name: "Dragon Claw" }], tm: ["Swords Dance", "Toxic", "Body Slam", "Take Down", "Double-Edge", "Fire Blast", "Swift", "Skull Bash", "Rest", "Substitute", "Cut", "Dragon Claw"], egg: ["Belly Drum", "Ancient Power", "Beat Up", "Bite"] }
  },
  {
    national_dex: 6,
    name: "Charizard",
    types: ["Fire", "Flying"],
    abilities: ["Blaze", "Solar Power"],
    base_stats: { hp: 78, attack: 84, defense: 78, special_attack: 109, special_defense: 85, speed: 100 },
    entry: "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    moves: { level_up: [{ level: 1, name: "Scratch" }, { level: 1, name: "Growl" }, { level: 4, name: "Ember" }, { level: 8, name: "Smokescreen" }, { level: 12, name: "Dragon Breath" }, { level: 17, name: "Fire Fang" }, { level: 20, name: "Slash" }, { level: 24, name: "Flamethrower" }, { level: 28, name: "Dragon Claw" }, { level: 32, name: "Air Slash" }, { level: 36, name: "Flamethrower" }, { level: 40, name: "Dragon Dance" }], tm: ["Swords Dance", "Toxic", "Body Slam", "Take Down", "Double-Edge", "Hyper Beam", "Fire Blast", "Swift", "Skull Bash", "Rest", "Substitute", "Cut", "Fly", "Dragon Claw"], egg: ["Belly Drum", "Ancient Power", "Beat Up", "Bite"] }
  },
  {
    national_dex: 7,
    name: "Squirtle",
    types: ["Water"],
    abilities: ["Torrent", "Rain Dish"],
    base_stats: { hp: 44, attack: 48, defense: 65, special_attack: 50, special_defense: 64, speed: 43 },
    entry: "After birth, its back swells and hardens into a shell. It sprays foam from its mouth.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    moves: { level_up: [{ level: 1, name: "Tackle" }, { level: 1, name: "Tail Whip" }, { level: 4, name: "Water Gun" }, { level: 7, name: "Withdraw" }, { level: 10, name: "Bubble" }, { level: 13, name: "Bite" }, { level: 16, name: "Water Pulse" }, { level: 19, name: "Aqua Tail" }], tm: ["Swords Dance", "Toxic", "Body Slam", "Take Down", "Double-Edge", "Surf", "Ice Beam", "Blizzard", "Bubble Beam", "Waterfall", "Rest", "Substitute", "Cut"], egg: ["Aqua Jet", "Aqua Ring", "Brine", "Flail", "Mirror Coat"] }
  },
  {
    national_dex: 8,
    name: "Wartortle",
    types: ["Water"],
    abilities: ["Torrent", "Rain Dish"],
    base_stats: { hp: 59, attack: 63, defense: 80, special_attack: 65, special_defense: 80, speed: 58 },
    entry: "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    moves: { level_up: [{ level: 1, name: "Tackle" }, { level: 1, name: "Tail Whip" }, { level: 4, name: "Water Gun" }, { level: 7, name: "Withdraw" }, { level: 10, name: "Bubble" }, { level: 13, name: "Bite" }, { level: 16, name: "Water Pulse" }, { level: 20, name: "Aqua Tail" }, { level: 24, name: "Rapid Spin" }], tm: ["Swords Dance", "Toxic", "Body Slam", "Take Down", "Double-Edge", "Surf", "Ice Beam", "Blizzard", "Waterfall", "Rest", "Substitute", "Cut"], egg: ["Aqua Jet", "Aqua Ring", "Brine", "Flail"] }
  },
  {
    national_dex: 9,
    name: "Blastoise",
    types: ["Water"],
    abilities: ["Torrent", "Rain Dish"],
    base_stats: { hp: 79, attack: 83, defense: 100, special_attack: 85, special_defense: 105, speed: 78 },
    entry: "It crushes its foes by using its weight. It is also able to shoot water from the cannons on its back.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    moves: { level_up: [{ level: 1, name: "Tackle" }, { level: 1, name: "Tail Whip" }, { level: 4, name: "Water Gun" }, { level: 7, name: "Withdraw" }, { level: 10, name: "Bubble" }, { level: 13, name: "Bite" }, { level: 16, name: "Water Pulse" }, { level: 20, name: "Aqua Tail" }, { level: 24, name: "Rapid Spin" }, { level: 28, name: "Hydro Pump" }, { level: 32, name: "Skull Bash" }], tm: ["Swords Dance", "Toxic", "Body Slam", "Take Down", "Double-Edge", "Surf", "Ice Beam", "Blizzard", "Hyper Beam", "Waterfall", "Rest", "Substitute", "Cut"], egg: ["Aqua Jet", "Aqua Ring", "Brine", "Flail"] }
  },
  {
    national_dex: 10,
    name: "Caterpie",
    types: ["Bug"],
    abilities: ["Shield Dust", "Run Away"],
    base_stats: { hp: 45, attack: 30, defense: 35, special_attack: 20, special_defense: 20, speed: 45 },
    entry: "It releases a stench from its antennae to repel enemies. It grows by molting its skin.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    moves: { level_up: [{ level: 1, name: "Tackle" }, { level: 1, name: "String Shot" }], tm: [], egg: [] }
  },
  {
    national_dex: 11,
    name: "Metapod",
    types: ["Bug"],
    abilities: ["Shed Skin"],
    base_stats: { hp: 50, attack: 20, defense: 55, special_attack: 25, special_defense: 25, speed: 30 },
    entry: "A steel-hard shell protects its body. It quietly endures attacks while awaiting evolution.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    moves: { level_up: [{ level: 1, name: "Harden" }], tm: [], egg: [] }
  },
  {
    national_dex: 12,
    name: "Butterfree",
    types: ["Bug", "Flying"],
    abilities: ["Compound Eyes", "Tinted Lens"],
    base_stats: { hp: 60, attack: 45, defense: 50, special_attack: 90, special_defense: 80, speed: 70 },
    entry: "It loves the nectar of flowers. It can locate flower patches using its sense of smell.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    moves: { level_up: [{ level: 1, name: "Confusion" }, { level: 1, name: "Gust" }, { level: 5, name: "Supersonic" }, { level: 9, name: "Poison Powder" }, { level: 13, name: "Stun Spore" }, { level: 17, name: "Sleep Powder" }, { level: 21, name: "Psybeam" }, { level: 25, name: "Silver Wind" }, { level: 29, name: "Safeguard" }, { level: 33, name: "Air Slash" }], tm: ["Toxic", "Double-Edge", "Hyper Beam", "Psychic", "Double Team", "Reflect", "Rest", "Substitute", "Cut", "Fly"], egg: ["Psybeam", "Silver Wind"] }
  },
  {
    national_dex: 13,
    name: "Weedle",
    types: ["Bug", "Poison"],
    abilities: ["Shield Dust", "Run Away"],
    base_stats: { hp: 40, attack: 35, defense: 30, special_attack: 20, special_defense: 20, speed: 50 },
    entry: "It releases a stench from its antennae to repel enemies. It grows by molting its skin.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    moves: { level_up: [{ level: 1, name: "Poison Sting" }, { level: 1, name: "String Shot" }], tm: [], egg: [] }
  },
  {
    national_dex: 14,
    name: "Kakuna",
    types: ["Bug", "Poison"],
    abilities: ["Shed Skin"],
    base_stats: { hp: 45, attack: 25, defense: 50, special_attack: 25, special_defense: 25, speed: 35 },
    entry: "A steel-hard shell protects its body. It quietly endures attacks while awaiting evolution.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    moves: { level_up: [{ level: 1, name: "Harden" }], tm: [], egg: [] }
  },
  {
    national_dex: 15,
    name: "Beedrill",
    types: ["Bug", "Poison"],
    abilities: ["Swarm", "Sniper"],
    base_stats: { hp: 65, attack: 90, defense: 40, special_attack: 45, special_defense: 80, speed: 75 },
    entry: "It has three poisonous stingers on its forelegs and tail. They are used to jab its enemy repeatedly.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    moves: { level_up: [{ level: 1, name: "Poison Sting" }, { level: 1, name: "String Shot" }, { level: 10, name: "Fury Attack" }, { level: 15, name: "Focus Energy" }, { level: 20, name: "Twineedle" }, { level: 25, name: "Rage" }, { level: 30, name: "Pin Missile" }], tm: ["Swords Dance", "Toxic", "Double-Edge", "Hyper Beam", "Double Team", "Reflect", "Rest", "Substitute", "Cut"], egg: [] }
  },
  {
    national_dex: 16,
    name: "Pidgey",
    types: ["Normal", "Flying"],
    abilities: ["Keen Eye", "Tangled Feet"],
    base_stats: { hp: 40, attack: 45, defense: 40, special_attack: 35, special_defense: 35, speed: 56 },
    entry: "It has an extremely sharp sense of direction. It can unerringly return home to its nest, however far it may be removed from its familiar surroundings.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    moves: { level_up: [{ level: 1, name: "Tackle" }, { level: 5, name: "Sand Attack" }, { level: 9, name: "Gust" }, { level: 13, name: "Quick Attack" }, { level: 17, name: "Whirlwind" }, { level: 21, name: "Wing Attack" }], tm: ["Toxic", "Double-Edge", "Double Team", "Reflect", "Rest", "Substitute", "Cut", "Fly"], egg: ["Steel Wing", "Air Cutter"] }
  },
  {
    national_dex: 17,
    name: "Pidgeotto",
    types: ["Normal", "Flying"],
    abilities: ["Keen Eye", "Tangled Feet"],
    base_stats: { hp: 63, attack: 60, defense: 55, special_attack: 50, special_defense: 50, speed: 71 },
    entry: "It has outstanding vision. It can spot a Caterpie moving among the leaves from over 100 yards away.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    moves: { level_up: [{ level: 1, name: "Tackle" }, { level: 1, name: "Sand Attack" }, { level: 1, name: "Gust" }, { level: 5, name: "Sand Attack" }, { level: 9, name: "Gust" }, { level: 13, name: "Quick Attack" }, { level: 17, name: "Whirlwind" }, { level: 22, name: "Wing Attack" }], tm: ["Toxic", "Double-Edge", "Double Team", "Reflect", "Rest", "Substitute", "Cut", "Fly"], egg: ["Steel Wing", "Air Cutter"] }
  },
  {
    national_dex: 18,
    name: "Pidgeot",
    types: ["Normal", "Flying"],
    abilities: ["Keen Eye", "Tangled Feet"],
    base_stats: { hp: 83, attack: 80, defense: 75, special_attack: 70, special_defense: 70, speed: 101 },
    entry: "It spreads its gorgeous wings widely to scare its enemies. It can fly at Mach 2 speed.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    moves: { level_up: [{ level: 1, name: "Tackle" }, { level: 1, name: "Sand Attack" }, { level: 1, name: "Gust" }, { level: 5, name: "Sand Attack" }, { level: 9, name: "Gust" }, { level: 13, name: "Quick Attack" }, { level: 17, name: "Whirlwind" }, { level: 22, name: "Wing Attack" }, { level: 27, name: "Agility" }], tm: ["Toxic", "Double-Edge", "Hyper Beam", "Double Team", "Reflect", "Rest", "Substitute", "Cut", "Fly"], egg: ["Steel Wing", "Air Cutter"] }
  },
  {
    national_dex: 19,
    name: "Rattata",
    types: ["Normal"],
    abilities: ["Run Away", "Guts"],
    base_stats: { hp: 30, attack: 56, defense: 35, special_attack: 25, special_defense: 35, speed: 72 },
    entry: "It has a very keen sense of smell. It can locate food even when it is buried deep underground.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    moves: { level_up: [{ level: 1, name: "Tackle" }, { level: 1, name: "Tail Whip" }, { level: 4, name: "Quick Attack" }, { level: 7, name: "Focus Energy" }, { level: 10, name: "Bite" }, { level: 13, name: "Hyper Fang" }], tm: ["Toxic", "Double-Edge", "Double Team", "Reflect", "Rest", "Substitute", "Cut"], egg: ["Counter", "Flame Wheel", "Fury Swipes"] }
  },
  {
    national_dex: 20,
    name: "Raticate",
    types: ["Normal"],
    abilities: ["Run Away", "Guts"],
    base_stats: { hp: 55, attack: 81, defense: 60, special_attack: 50, special_defense: 70, speed: 97 },
    entry: "Its hind feet are webbed. They act as flippers, so it can swim in rivers and lakes.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    moves: { level_up: [{ level: 1, name: "Tackle" }, { level: 1, name: "Tail Whip" }, { level: 4, name: "Quick Attack" }, { level: 7, name: "Focus Energy" }, { level: 10, name: "Bite" }, { level: 13, name: "Hyper Fang" }, { level: 16, name: "Scary Face" }], tm: ["Toxic", "Double-Edge", "Hyper Beam", "Double Team", "Reflect", "Rest", "Substitute", "Cut"], egg: ["Counter", "Flame Wheel", "Fury Swipes"] }
  },
  {
    national_dex: 21,
    name: "Spearow",
    types: ["Normal", "Flying"],
    abilities: ["Keen Eye", "Tangled Feet"],
    base_stats: { hp: 40, attack: 60, defense: 30, special_attack: 31, special_defense: 31, speed: 70 },
    entry: "It flaps its short wings busily to fly. Using its beak, it searches in grass for prey.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
    moves: { level_up: [{ level: 1, name: "Peck" }, { level: 1, name: "Growl" }, { level: 5, name: "Leer" }, { level: 9, name: "Fury Attack" }, { level: 13, name: "Pursuit" }, { level: 17, name: "Aerial Ace" }], tm: ["Toxic", "Double-Edge", "Double Team", "Reflect", "Rest", "Substitute", "Cut", "Fly"], egg: ["Quick Attack", "Faint Attack"] }
  },
  {
    national_dex: 22,
    name: "Fearow",
    types: ["Normal", "Flying"],
    abilities: ["Keen Eye", "Tangled Feet"],
    base_stats: { hp: 65, attack: 90, defense: 65, special_attack: 61, special_defense: 61, speed: 100 },
    entry: "It has the stamina to fly all day on its broad wings. It fights by using its sharp beak.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
    moves: { level_up: [{ level: 1, name: "Peck" }, { level: 1, name: "Growl" }, { level: 1, name: "Leer" }, { level: 5, name: "Leer" }, { level: 9, name: "Fury Attack" }, { level: 13, name: "Pursuit" }, { level: 17, name: "Aerial Ace" }, { level: 23, name: "Mirror Move" }], tm: ["Toxic", "Double-Edge", "Hyper Beam", "Double Team", "Reflect", "Rest", "Substitute", "Cut", "Fly"], egg: ["Quick Attack", "Faint Attack"] }
  },
  {
    national_dex: 23,
    name: "Ekans",
    types: ["Poison"],
    abilities: ["Intimidate", "Shed Skin"],
    base_stats: { hp: 35, attack: 60, defense: 44, special_attack: 40, special_defense: 54, speed: 55 },
    entry: "It can freely detach its jaw to swallow large prey whole. It can become too heavy to move.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    moves: { level_up: [{ level: 1, name: "Wrap" }, { level: 1, name: "Leer" }, { level: 4, name: "Poison Sting" }, { level: 9, name: "Bite" }, { level: 12, name: "Glare" }, { level: 17, name: "Screech" }, { level: 20, name: "Acid" }], tm: ["Toxic", "Double-Edge", "Double Team", "Reflect", "Rest", "Substitute", "Cut"], egg: ["Poison Tail", "Sucker Punch"] }
  },
  {
    national_dex: 24,
    name: "Arbok",
    types: ["Poison"],
    abilities: ["Intimidate", "Shed Skin"],
    base_stats: { hp: 60, attack: 85, defense: 69, special_attack: 65, special_defense: 79, speed: 80 },
    entry: "The frightening patterns on its belly have been studied. Six variations have been confirmed.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
    moves: { level_up: [{ level: 1, name: "Wrap" }, { level: 1, name: "Leer" }, { level: 1, name: "Poison Sting" }, { level: 4, name: "Poison Sting" }, { level: 9, name: "Bite" }, { level: 12, name: "Glare" }, { level: 17, name: "Screech" }, { level: 20, name: "Acid" }, { level: 27, name: "Crunch" }], tm: ["Toxic", "Double-Edge", "Hyper Beam", "Double Team", "Reflect", "Rest", "Substitute", "Cut"], egg: ["Poison Tail", "Sucker Punch"] }
  },
  {
    national_dex: 25,
    name: "Pikachu",
    types: ["Electric"],
    abilities: ["Static", "Lightning Rod"],
    base_stats: { hp: 35, attack: 55, defense: 40, special_attack: 50, special_defense: 50, speed: 90 },
    entry: "When several of these Pokémon gather, their electricity could build and cause lightning storms.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    moves: { level_up: [{ level: 1, name: "Thunder Shock" }, { level: 1, name: "Growl" }, { level: 4, name: "Thunder Wave" }, { level: 8, name: "Quick Attack" }, { level: 12, name: "Electro Ball" }, { level: 16, name: "Thunderbolt" }, { level: 20, name: "Thunder" }], tm: ["Toxic", "Body Slam", "Take Down", "Double-Edge", "Thunderbolt", "Thunder", "Double Team", "Reflect", "Rest", "Substitute", "Cut"], egg: ["Volt Tackle", "Fake Out"] }
  },
  {
    national_dex: 26,
    name: "Raichu",
    types: ["Electric"],
    abilities: ["Static", "Lightning Rod"],
    base_stats: { hp: 60, attack: 90, defense: 55, special_attack: 90, special_defense: 80, speed: 110 },
    entry: "Its long tail serves as a ground to protect itself from its own high-voltage power.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    moves: { level_up: [{ level: 1, name: "Thunder Shock" }, { level: 1, name: "Growl" }, { level: 1, name: "Quick Attack" }, { level: 1, name: "Thunderbolt" }], tm: ["Toxic", "Body Slam", "Take Down", "Double-Edge", "Hyper Beam", "Thunderbolt", "Thunder", "Double Team", "Reflect", "Rest", "Substitute", "Cut"], egg: ["Volt Tackle"] }
  },
  {
    national_dex: 27,
    name: "Sandshrew",
    types: ["Ground"],
    abilities: ["Sand Veil", "Sand Rush"],
    base_stats: { hp: 50, attack: 75, defense: 85, special_attack: 20, special_defense: 30, speed: 40 },
    entry: "It burrows and lives underground. If threatened, it curls itself up into a ball for protection.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
    moves: { level_up: [{ level: 1, name: "Scratch" }, { level: 1, name: "Defense Curl" }, { level: 3, name: "Sand Attack" }, { level: 5, name: "Poison Sting" }, { level: 7, name: "Rollout" }, { level: 9, name: "Rapid Spin" }], tm: ["Swords Dance", "Toxic", "Double-Edge", "Double Team", "Reflect", "Rest", "Substitute", "Cut", "Dig"], egg: ["Counter", "Flail"] }
  },
  {
    national_dex: 28,
    name: "Sandslash",
    types: ["Ground"],
    abilities: ["Sand Veil", "Sand Rush"],
    base_stats: { hp: 75, attack: 100, defense: 110, special_attack: 45, special_defense: 55, speed: 65 },
    entry: "It curls up in a ball to protect itself from enemy attacks. It also curls up to prevent heatstroke during the daytime when temperatures rise sharply.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
    moves: { level_up: [{ level: 1, name: "Scratch" }, { level: 1, name: "Defense Curl" }, { level: 1, name: "Sand Attack" }, { level: 3, name: "Sand Attack" }, { level: 5, name: "Poison Sting" }, { level: 7, name: "Rollout" }, { level: 9, name: "Rapid Spin" }, { level: 11, name: "Swift" }], tm: ["Swords Dance", "Toxic", "Double-Edge", "Hyper Beam", "Double Team", "Reflect", "Rest", "Substitute", "Cut", "Dig"], egg: ["Counter", "Flail"] }
  },
  {
    national_dex: 29,
    name: "Nidoran♀",
    types: ["Poison"],
    abilities: ["Poison Point", "Rivalry"],
    base_stats: { hp: 55, attack: 47, defense: 52, special_attack: 40, special_defense: 40, speed: 41 },
    entry: "Although small, its venomous barbs render this Pokémon dangerous. The female has smaller horns.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
    moves: { level_up: [{ level: 1, name: "Growl" }, { level: 1, name: "Scratch" }, { level: 7, name: "Tail Whip" }, { level: 9, name: "Double Kick" }, { level: 13, name: "Poison Sting" }, { level: 19, name: "Fury Swipes" }], tm: ["Toxic", "Double-Edge", "Double Team", "Reflect", "Rest", "Substitute", "Cut", "Dig"], egg: ["Counter", "Disable"] }
  },
  {
    national_dex: 30,
    name: "Nidorina",
    types: ["Poison"],
    abilities: ["Poison Point", "Rivalry"],
    base_stats: { hp: 70, attack: 62, defense: 67, special_attack: 55, special_defense: 55, speed: 56 },
    entry: "When it is with its friends or family, its barbs are tucked away to prevent injury. It appears to become nervous if separated from the others.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
    moves: { level_up: [{ level: 1, name: "Growl" }, { level: 1, name: "Scratch" }, { level: 7, name: "Tail Whip" }, { level: 9, name: "Double Kick" }, { level: 13, name: "Poison Sting" }, { level: 20, name: "Fury Swipes" }, { level: 23, name: "Bite" }], tm: ["Toxic", "Double-Edge", "Double Team", "Reflect", "Rest", "Substitute", "Cut", "Dig"], egg: ["Counter", "Disable"] }
  }
];
window.pokemonData = [
  {
    national_dex: 1, name: "Bulbasaur", types: ["Grass", "Poison"], abilities: ["Overgrow", "Chlorophyll"],
    base_stats: { hp: 45, attack: 49, defense: 49, special_attack: 65, special_defense: 65, speed: 45 },
    entry: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    moves: { level_up: [{level:1,name:"Tackle"},{level:1,name:"Growl"},{level:3,name:"Vine Whip"},{level:7,name:"Growth"},{level:9,name:"Leech Seed"},{level:13,name:"Razor Leaf"}], tm: ["Swords Dance","Toxic","Body Slam","Take Down","Double-Edge","Mega Drain","Solar Beam","Double Team","Reflect","Rest","Substitute","Cut"], egg: ["Light Screen","Charm","Magical Leaf"] }
  },
  {
    national_dex: 2, name: "Ivysaur", types: ["Grass", "Poison"], abilities: ["Overgrow", "Chlorophyll"],
    base_stats: { hp: 60, attack: 62, defense: 63, special_attack: 80, special_defense: 80, speed: 60 },
    entry: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    moves: { level_up: [{level:1,name:"Tackle"},{level:1,name:"Growl"},{level:3,name:"Vine Whip"},{level:7,name:"Growth"},{level:9,name:"Leech Seed"},{level:13,name:"Razor Leaf"},{level:15,name:"Poison Powder"},{level:20,name:"Sleep Powder"}], tm: ["Swords Dance","Toxic","Body Slam","Take Down","Double-Edge","Mega Drain","Solar Beam","Double Team","Reflect","Rest","Substitute","Cut"], egg: ["Light Screen","Charm"] }
  },
  {
    national_dex: 3, name: "Venusaur", types: ["Grass", "Poison"], abilities: ["Overgrow", "Chlorophyll"],
    base_stats: { hp: 80, attack: 82, defense: 83, special_attack: 100, special_defense: 100, speed: 80 },
    entry: "The plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    moves: { level_up: [{level:1,name:"Tackle"},{level:1,name:"Growl"},{level:3,name:"Vine Whip"},{level:7,name:"Growth"},{level:9,name:"Leech Seed"},{level:13,name:"Razor Leaf"},{level:15,name:"Poison Powder"},{level:20,name:"Sleep Powder"},{level:23,name:"Seed Bomb"},{level:28,name:"Take Down"},{level:31,name:"Sweet Scent"},{level:39,name:"Synthesis"},{level:45,name:"Petal Dance"}], tm: ["Swords Dance","Toxic","Body Slam","Take Down","Double-Edge","Hyper Beam","Mega Drain","Solar Beam","Double Team","Reflect","Rest","Substitute","Cut"], egg: ["Light Screen","Charm"] }
  },
  {
    national_dex: 4, name: "Charmander", types: ["Fire"], abilities: ["Blaze", "Solar Power"],
    base_stats: { hp: 39, attack: 52, defense: 43, special_attack: 60, special_defense: 50, speed: 65 },
    entry: "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    moves: { level_up: [{level:1,name:"Scratch"},{level:1,name:"Growl"},{level:4,name:"Ember"},{level:8,name:"Smokescreen"},{level:12,name:"Dragon Breath"},{level:17,name:"Fire Fang"},{level:20,name:"Slash"},{level:24,name:"Flamethrower"}], tm: ["Swords Dance","Toxic","Body Slam","Take Down","Double-Edge","Fire Blast","Swift","Skull Bash","Rest","Substitute","Cut"], egg: ["Belly Drum","Ancient Power","Beat Up","Bite"] }
  },
  {
    national_dex: 5, name: "Charmeleon", types: ["Fire"], abilities: ["Blaze", "Solar Power"],
    base_stats: { hp: 58, attack: 64, defense: 58, special_attack: 80, special_defense: 65, speed: 80 },
    entry: "It has a barbaric nature. In battle, it whips its fiery tail around and slashes the opponent.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    moves: { level_up: [{level:1,name:"Scratch"},{level:1,name:"Growl"},{level:4,name:"Ember"},{level:8,name:"Smokescreen"},{level:12,name:"Dragon Breath"},{level:17,name:"Fire Fang"},{level:20,name:"Slash"},{level:24,name:"Flamethrower"},{level:28,name:"Dragon Claw"}], tm: ["Swords Dance","Toxic","Body Slam","Take Down","Double-Edge","Fire Blast","Swift","Skull Bash","Rest","Substitute","Cut","Dragon Claw"], egg: ["Belly Drum","Ancient Power","Beat Up","Bite"] }
  },
  {
    national_dex: 6, name: "Charizard", types: ["Fire", "Flying"], abilities: ["Blaze", "Solar Power"],
    base_stats: { hp: 78, attack: 84, defense: 78, special_attack: 109, special_defense: 85, speed: 100 },
    entry: "It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    moves: { level_up: [{level:1,name:"Scratch"},{level:1,name:"Growl"},{level:4,name:"Ember"},{level:8,name:"Smokescreen"},{level:12,name:"Dragon Breath"},{level:17,name:"Fire Fang"},{level:20,name:"Slash"},{level:24,name:"Flamethrower"},{level:28,name:"Dragon Claw"},{level:32,name:"Air Slash"},{level:36,name:"Flamethrower"},{level:40,name:"Dragon Dance"}], tm: ["Swords Dance","Toxic","Body Slam","Take Down","Double-Edge","Hyper Beam","Fire Blast","Swift","Skull Bash","Rest","Substitute","Cut","Fly","Dragon Claw"], egg: ["Belly Drum","Ancient Power","Beat Up","Bite"] }
  },
  {
    national_dex: 7, name: "Squirtle", types: ["Water"], abilities: ["Torrent", "Rain Dish"],
    base_stats: { hp: 44, attack: 48, defense: 65, special_attack: 50, special_defense: 64, speed: 43 },
    entry: "After birth, its back swells and hardens into a shell. It sprays foam from its mouth.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    moves: { level_up: [{level:1,name:"Tackle"},{level:1,name:"Tail Whip"},{level:4,name:"Water Gun"},{level:7,name:"Withdraw"},{level:10,name:"Bubble"},{level:13,name:"Bite"},{level:16,name:"Water Pulse"},{level:19,name:"Aqua Tail"}], tm: ["Swords Dance","Toxic","Body Slam","Take Down","Double-Edge","Surf","Ice Beam","Blizzard","Bubble Beam","Waterfall","Rest","Substitute","Cut"], egg: ["Aqua Jet","Aqua Ring","Brine","Flail","Mirror Coat"] }
  },
  {
    national_dex: 8, name: "Wartortle", types: ["Water"], abilities: ["Torrent", "Rain Dish"],
    base_stats: { hp: 59, attack: 63, defense: 80, special_attack: 65, special_defense: 80, speed: 58 },
    entry: "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    moves: { level_up: [{level:1,name:"Tackle"},{level:1,name:"Tail Whip"},{level:4,name:"Water Gun"},{level:7,name:"Withdraw"},{level:10,name:"Bubble"},{level:13,name:"Bite"},{level:16,name:"Water Pulse"},{level:20,name:"Aqua Tail"},{level:24,name:"Rapid Spin"}], tm: ["Swords Dance","Toxic","Body Slam","Take Down","Double-Edge","Surf","Ice Beam","Blizzard","Waterfall","Rest","Substitute","Cut"], egg: ["Aqua Jet","Aqua Ring","Brine","Flail"] }
  },
  {
    national_dex: 9, name: "Blastoise", types: ["Water"], abilities: ["Torrent", "Rain Dish"],
    base_stats: { hp: 79, attack: 83, defense: 100, special_attack: 85, special_defense: 105, speed: 78 },
    entry: "It crushes its foes by using its weight. It is also able to shoot water from the cannons on its back.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    moves: { level_up: [{level:1,name:"Tackle"},{level:1,name:"Tail Whip"},{level:4,name:"Water Gun"},{level:7,name:"Withdraw"},{level:10,name:"Bubble"},{level:13,name:"Bite"},{level:16,name:"Water Pulse"},{level:20,name:"Aqua Tail"},{level:24,name:"Rapid Spin"},{level:28,name:"Hydro Pump"},{level:32,name:"Skull Bash"}], tm: ["Swords Dance","Toxic","Body Slam","Take Down","Double-Edge","Surf","Ice Beam","Blizzard","Hyper Beam","Waterfall","Rest","Substitute","Cut"], egg: ["Aqua Jet","Aqua Ring","Brine","Flail"] }
  },
  {
    national_dex: 10, name: "Caterpie", types: ["Bug"], abilities: ["Shield Dust", "Run Away"],
    base_stats: { hp: 45, attack: 30, defense: 35, special_attack: 20, special_defense: 20, speed: 45 },
    entry: "It releases a stench from its antennae to repel enemies. It grows by molting its skin.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    moves: { level_up: [{level:1,name:"Tackle"},{level:1,name:"String Shot"}], tm: [], egg: [] }
  },
  {
    national_dex: 11, name: "Metapod", types: ["Bug"], abilities: ["Shed Skin"],
    base_stats: { hp: 50, attack: 20, defense: 55, special_attack: 25, special_defense: 25, speed: 30 },
    entry: "A steel-hard shell protects its body. It quietly endures attacks while awaiting evolution.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    moves: { level_up: [{level:1,name:"Harden"}], tm: [], egg: [] }
  },
  {
    national_dex: 12, name: "Butterfree", types: ["Bug", "Flying"], abilities: ["Compound Eyes", "Tinted Lens"],
    base_stats: { hp: 60, attack: 45, defense: 50, special_attack: 90, special_defense: 80, speed: 70 },
    entry: "It loves the nectar of flowers. It can locate flower patches using its sense of smell.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    moves: { level_up: [{level:1,name:"Confusion"},{level:1,name:"Gust"},{level:5,name:"Supersonic"},{level:9,name:"Poison Powder"},{level:13,name:"Stun Spore"},{level:17,name:"Sleep Powder"},{level:21,name:"Psybeam"},{level:25,name:"Silver Wind"},{level:29,name:"Safeguard"},{level:33,name:"Air Slash"}], tm: ["Toxic","Double-Edge","Hyper Beam","Psychic","Double Team","Reflect","Rest","Substitute","Cut","Fly"], egg: ["Psybeam","Silver Wind"] }
  },
  {
    national_dex: 25, name: "Pikachu", types: ["Electric"], abilities: ["Static", "Lightning Rod"],
    base_stats: { hp: 35, attack: 55, defense: 40, special_attack: 50, special_defense: 50, speed: 90 },
    entry: "When several of these Pokémon gather, their electricity could build and cause lightning storms.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    moves: { level_up: [{level:1,name:"Thunder Shock"},{level:1,name:"Growl"},{level:4,name:"Thunder Wave"},{level:8,name:"Quick Attack"},{level:12,name:"Electro Ball"},{level:16,name:"Thunderbolt"},{level:20,name:"Thunder"}], tm: ["Toxic","Body Slam","Take Down","Double-Edge","Thunderbolt","Thunder","Double Team","Reflect","Rest","Substitute","Cut"], egg: ["Volt Tackle","Fake Out"] }
  },
  {
    national_dex: 26, name: "Raichu", types: ["Electric"], abilities: ["Static", "Lightning Rod"],
    base_stats: { hp: 60, attack: 90, defense: 55, special_attack: 90, special_defense: 80, speed: 110 },
    entry: "Its long tail serves as a ground to protect itself from its own high-voltage power.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    moves: { level_up: [{level:1,name:"Thunder Shock"},{level:1,name:"Growl"},{level:1,name:"Quick Attack"},{level:1,name:"Thunderbolt"}], tm: ["Toxic","Body Slam","Take Down","Double-Edge","Hyper Beam","Thunderbolt","Thunder","Double Team","Reflect","Rest","Substitute","Cut"], egg: ["Volt Tackle"] }
  },
  {
    national_dex: 39, name: "Jigglypuff", types: ["Normal", "Fairy"], abilities: ["Cute Charm", "Competitive"],
    base_stats: { hp: 115, attack: 45, defense: 20, special_attack: 45, special_defense: 25, speed: 20 },
    entry: "It captivates foes with its huge, round eyes, then lulls them to sleep by singing a lullaby.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    moves: { level_up: [{level:1,name:"Sing"},{level:1,name:"Pound"},{level:4,name:"Defense Curl"},{level:8,name:"Disable"},{level:12,name:"Round"},{level:16,name:"Body Slam"},{level:20,name:"Rest"}], tm: ["Toxic","Body Slam","Take Down","Double-Edge","Hyper Beam","Psychic","Double Team","Reflect","Rest","Substitute","Cut"], egg: ["Perish Song","Wish"] }
  },
  {
    national_dex: 133, name: "Eevee", types: ["Normal"], abilities: ["Run Away", "Adaptability"],
    base_stats: { hp: 55, attack: 55, defense: 50, special_attack: 45, special_defense: 65, speed: 55 },
    entry: "It has the ability to alter the composition of its body to suit its surrounding environment.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    moves: { level_up: [{level:1,name:"Tackle"},{level:1,name:"Tail Whip"},{level:5,name:"Sand Attack"},{level:10,name:"Quick Attack"},{level:15,name:"Bite"},{level:20,name:"Swift"},{level:25,name:"Take Down"}], tm: ["Toxic","Body Slam","Take Down","Double-Edge","Double Team","Reflect","Rest","Substitute","Cut"], egg: ["Charm","Wish","Yawn"] }
  },
  {
    national_dex: 150, name: "Mewtwo", types: ["Psychic"], abilities: ["Pressure", "Unnerve"],
    base_stats: { hp: 106, attack: 110, defense: 90, special_attack: 154, special_defense: 90, speed: 130 },
    entry: "It was created by a scientist after years of horrific gene-splicing and DNA-engineering experiments.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    moves: { level_up: [{level:1,name:"Confusion"},{level:1,name:"Disable"},{level:10,name:"Swift"},{level:20,name:"Psychic"},{level:30,name:"Barrier"},{level:40,name:"Recover"},{level:50,name:"Psycho Boost"}], tm: ["Toxic","Body Slam","Take Down","Double-Edge","Hyper Beam","Psychic","Double Team","Reflect","Rest","Substitute","Cut","Fly","Surf","Strength","Flash"], egg: [] }
  },
  {
    national_dex: 151, name: "Mew", types: ["Psychic"], abilities: ["Synchronize"],
    base_stats: { hp: 100, attack: 100, defense: 100, special_attack: 100, special_defense: 100, speed: 100 },
    entry: "So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide.",
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
    moves: { level_up: [{level:1,name:"Pound"},{level:10,name:"Transform"},{level:20,name:"Mega Punch"},{level:30,name:"Metronome"},{level:40,name:"Psychic"},{level:50,name:"Ancient Power"}], tm: ["Mega Punch","Mega Kick","Toxic","Horn Drill","Body Slam","Take Down","Double-Edge","Hyper Beam","Psychic","Double Team","Reflect","Rest","Substitute","Cut","Fly","Surf","Strength","Flash"], egg: [] }
  }
];
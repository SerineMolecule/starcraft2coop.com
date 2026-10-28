(() => {
  // source-data/mutators.json
  var mutators_default = [
    {
      mutatorid: "afraid-of-the-dark",
      mutatorname: "Afraid of the Dark",
      abomination: 0,
      mutatordescription: "Vision provided by all sources is extremely limited except when in view of your camera.",
      customusable: false,
      chaosrollable: false,
      hassafezone: false
    },
    {
      mutatorid: "aggressive-deployment",
      mutatorname: "Aggressive Deployment",
      abomination: 3,
      mutatordescription: "Additional enemy units are periodically deployed onto the battlefield.",
      customusable: true,
      chaosrollable: true,
      hassafezone: false
    },
    {
      mutatorid: "alien-incubation",
      mutatorname: "Alien Incubation",
      abomination: 2,
      mutatordescription: "All enemy units spawn Broodlings upon death.",
      customusable: true,
      chaosrollable: true,
      hassafezone: false
    },
    {
      mutatorid: "avenger",
      mutatorname: "Avenger",
      abomination: 5,
      mutatordescription: "Enemy units gain increased attack speed, movement speed, armor, life, and life-regeneration when nearby enemy units die.",
      customusable: true,
      chaosrollable: true,
      hassafezone: false
    },
    {
      mutatorid: "barrier",
      mutatorname: "Barrier",
      abomination: 2,
      mutatordescription: "Enemy units and structures gain a temporary shield upon the first time they take damage.",
      customusable: true,
      chaosrollable: true,
      hassafezone: false
    },
    {
      mutatorid: "black-death",
      mutatorname: "Black Death",
      abomination: 7,
      mutatordescription: "Some enemy units carry a plague that deals damage over time and spreads to other nearby units. The plague spreads to your units when the enemy unit is killed.",
      customusable: true,
      chaosrollable: true,
      hassafezone: false
    },
    {
      mutatorid: "blizzard",
      mutatorname: "Blizzard",
      abomination: 4,
      mutatordescription: "Storm clouds move across the map, damaging and freezing player units in their path.",
      customusable: true,
      chaosrollable: true,
      hassafezone: true
    },
    {
      mutatorid: "chaos-studios",
      mutatorname: "Chaos Studios",
      abomination: 0,
      mutatordescription: "Mutators are chosen at random and periodically cycle throughout the mission.",
      customusable: false,
      chaosrollable: false,
      hassafezone: false
    },
    {
      mutatorid: "concussive-attacks",
      mutatorname: "Concussive Attacks",
      abomination: 1,
      mutatordescription: "Player units are slowed by all enemy attacks.",
      customusable: true,
      chaosrollable: true,
      hassafezone: false
    },
    {
      mutatorid: "darkness",
      mutatorname: "Darkness",
      abomination: 2,
      mutatordescription: "Previously explored areas remain blacked out on the minimap while outside of player vision.",
      customusable: true,
      chaosrollable: true,
      hassafezone: false
    },
    {
      mutatorid: "diffusion",
      mutatorname: "Diffusion",
      abomination: 3,
      mutatordescription: "Damage dealt to enemies is split evenly across all nearby units, including your own.",
      customusable: true,
      chaosrollable: true,
      hassafezone: false
    },
    {
      mutatorid: "double-edged",
      mutatorname: "Double Edged",
      abomination: 3,
      mutatordescription: "Damage dealt by your units and structures is dealt back to them, but then healed back over time.",
      customusable: true,
      chaosrollable: false,
      hassafezone: false
    },
    {
      mutatorid: "eminent-domain",
      mutatorname: "Eminent Domain",
      abomination: 1,
      mutatordescription: "Enemies gain control of your structures after destroying them.",
      customusable: true,
      chaosrollable: true,
      hassafezone: false
    },
    {
      mutatorid: "evasive-maneuvers",
      mutatorname: "Evasive Maneuvers",
      abomination: 1,
      mutatordescription: "Enemy units teleport a short distance away upon taking damage.",
      customusable: true,
      chaosrollable: true,
      hassafezone: false
    },
    {
      mutatorid: "fatal-attraction",
      mutatorname: "Fatal Attraction",
      abomination: 3,
      mutatordescription: "When enemy units and structures die, any of your nearby units are pulled to their location.",
      customusable: true,
      chaosrollable: true,
      hassafezone: false
    },
    {
      mutatorid: "fear",
      mutatorname: "Fear",
      abomination: 3,
      mutatordescription: "Player units will occasionally stop attacking and run around in fear upon taking damage.",
      customusable: true,
      chaosrollable: false,
      hassafezone: false
    },
    {
      mutatorid: "fireworks",
      mutatorname: "Fireworks",
      abomination: 0,
      mutatordescription: "Enemies launch a dazzling fireworks display upon death, dealing damage to your nearby units.",
      customusable: false,
      chaosrollable: false,
      hassafezone: false
    },
    {
      mutatorid: "gift-exchange",
      mutatorname: "Gift Exchange",
      abomination: 0,
      mutatordescription: "Gifts are periodically deployed around the map. If you don't claim them, Amon will!",
      customusable: false,
      chaosrollable: false,
      hassafezone: false
    },
    {
      mutatorid: "going-nuclear",
      mutatorname: "Going Nuclear",
      abomination: 3,
      mutatordescription: "Nukes are launched at random throughout the map.",
      customusable: true,
      chaosrollable: true,
      hassafezone: true
    },
    {
      mutatorid: "hardened-will",
      mutatorname: "Hardened Will",
      abomination: 2,
      mutatordescription: "Enemy Heroic units reduce all incoming damage to a maximum of 10 when any non-heroic enemy unit is near them.",
      customusable: true,
      chaosrollable: false,
      hassafezone: false
    },
    {
      mutatorid: "heroes-from-the-storm",
      mutatorname: "Heroes from the Storm",
      abomination: 10,
      mutatordescription: "Every attack wave will be led by Heroes of increasing power.",
      customusable: true,
      chaosrollable: false,
      hassafezone: false
    },
    {
      mutatorid: "inspiration",
      mutatorname: "Inspiration",
      abomination: 2,
      mutatordescription: "Enemy Heroic units increase the attack speed and armor of all enemies within a small range.",
      customusable: true,
      chaosrollable: false,
      hassafezone: false
    },
    {
      mutatorid: "just-die",
      mutatorname: "Just Die",
      abomination: 7,
      mutatordescription: "Enemy units are automatically revived upon death.",
      customusable: true,
      chaosrollable: false,
      hassafezone: false
    },
    {
      mutatorid: "kill-bots",
      mutatorname: "Kill Bots",
      abomination: 6,
      mutatordescription: "Waves of bots attack players and are invulnerable to damage until they have killed a set amount of units.",
      customusable: true,
      chaosrollable: false,
      hassafezone: false
    },
    {
      mutatorid: "laser-drill",
      mutatorname: "Laser Drill",
      abomination: 2,
      mutatordescription: "An enemy Drakken laser drill constantly attacks player units within enemy vision.",
      customusable: true,
      chaosrollable: true,
      hassafezone: false
    },
    {
      mutatorid: "lava-burst",
      mutatorname: "Lava Burst",
      abomination: 3,
      mutatordescription: "Lava periodically bursts from the ground at random locations and deals damage to player air and ground units.",
      customusable: true,
      chaosrollable: true,
      hassafezone: true
    },
    {
      mutatorid: "life-leech",
      mutatorname: "Life Leech",
      abomination: 1,
      mutatordescription: "Enemy units steal life or shields whenever they do damage.",
      customusable: true,
      chaosrollable: true,
      hassafezone: false
    },
    {
      mutatorid: "long-range",
      mutatorname: "Long Range",
      abomination: 2,
      mutatordescription: "Enemy units and structures have increased weapon and vision range.",
      customusable: true,
      chaosrollable: false,
      hassafezone: false
    },
    {
      mutatorid: "lucky-envelopes",
      mutatorname: "Lucky Envelopes",
      abomination: 0,
      mutatordescription: "Festive envelopes containing resource pickups are dropped at random throughout the map.",
      customusable: false,
      chaosrollable: false,
      hassafezone: false
    },
    {
      mutatorid: "mag-nificent",
      mutatorname: "Mag-nificent",
      abomination: 4,
      mutatordescription: "Mag Mines are deployed throughout the map at the start of the mission.",
      customusable: true,
      chaosrollable: false,
      hassafezone: false
    },
    {
      mutatorid: "micro-transactions",
      mutatorname: "Micro Transactions",
      abomination: 5,
      mutatordescription: "Giving commands to your units costs resources based on the unit's cost.",
      customusable: true,
      chaosrollable: true,
      hassafezone: false
    },
    {
      mutatorid: "mineral-shields",
      mutatorname: "Mineral Shields",
      abomination: 2,
      mutatordescription: "Mineral clusters at player bases are periodically encased in a shield which must be destroyed for gathering to continue.",
      customusable: true,
      chaosrollable: true,
      hassafezone: false
    },
    {
      mutatorid: "minesweeper",
      mutatorname: "Minesweeper",
      abomination: 6,
      mutatordescription: "Groups of Widow Mines and Spider Mines are buried throughout the battlefield.",
      customusable: true,
      chaosrollable: false,
      hassafezone: false
    },
    {
      mutatorid: "missile-command",
      mutatorname: "Missile Command",
      abomination: 3,
      mutatordescription: "Endless missile bombardments target your structures and must be shot down throughout the mission.",
      customusable: true,
      chaosrollable: true,
      hassafezone: false
    },
    {
      mutatorid: "moment-of-silence",
      mutatorname: "Moment of Silence",
      abomination: 2,
      mutatordescription: "When a Heroic enemy dies, all player units around it will reflect on their transgressions, leaving them temporarily unable to attack or use abilities.",
      customusable: true,
      chaosrollable: false,
      hassafezone: false
    },
    {
      mutatorid: "mutually-assured-destruction",
      mutatorname: "Mutually Assured Destruction",
      abomination: 5,
      mutatordescription: "Enemy Hybrid units detonate a Nuke upon death.",
      customusable: true,
      chaosrollable: false,
      hassafezone: false
    },
    {
      mutatorid: "naughty-list",
      mutatorname: "Naughty List",
      abomination: 0,
      mutatordescription: "Player units and structures take increased damage for each enemy they've killed.",
      customusable: false,
      chaosrollable: false,
      hassafezone: false
    },
    {
      mutatorid: "orbital-strike",
      mutatorname: "Orbital Strike",
      abomination: 1,
      mutatordescription: "Enemy Orbital Strikes are periodically fired throughout the map.",
      customusable: true,
      chaosrollable: true,
      hassafezone: true
    },
    {
      mutatorid: "outbreak",
      mutatorname: "Outbreak",
      abomination: 3,
      mutatordescription: "Continuous waves of the infested horde march against the commanders' bases.",
      customusable: true,
      chaosrollable: true,
      hassafezone: false
    },
    {
      mutatorid: "photon-overload",
      mutatorname: "Photon Overload",
      abomination: 1,
      mutatordescription: "All enemy structures attack nearby hostile units.",
      customusable: true,
      chaosrollable: true,
      hassafezone: false
    },
    {
      mutatorid: "polarity",
      mutatorname: "Polarity",
      abomination: 7,
      mutatordescription: "Each enemy unit is immune to either your units or your ally's units.",
      customusable: true,
      chaosrollable: true,
      hassafezone: false
    },
    {
      mutatorid: "power-overwhelming",
      mutatorname: "Power Overwhelming",
      abomination: 5,
      mutatordescription: "All enemy units have energy and use random abilities.",
      customusable: true,
      chaosrollable: false,
      hassafezone: false
    },
    {
      mutatorid: "propagators",
      mutatorname: "Propagators",
      abomination: 8,
      mutatordescription: "Reality warping sludges are crawling towards you. Anything they touch is turned into a copy of the sludge.",
      customusable: true,
      chaosrollable: true,
      hassafezone: false
    },
    {
      mutatorid: "purifier-beam",
      mutatorname: "Purifier Beam",
      abomination: 2,
      mutatordescription: "An enemy Purifier Beam moves across the map toward nearby player units.",
      customusable: true,
      chaosrollable: true,
      hassafezone: true
    },
    {
      mutatorid: "random",
      mutatorname: "Random",
      abomination: 0,
      mutatordescription: "A mutation is randomly assigned.",
      customusable: true,
      chaosrollable: false,
      hassafezone: false
    },
    {
      mutatorid: "scorched-earth",
      mutatorname: "Scorched Earth",
      abomination: 2,
      mutatordescription: "Enemy units set the terrain on fire upon death.",
      customusable: true,
      chaosrollable: true,
      hassafezone: false
    },
    {
      mutatorid: "self-destruction",
      mutatorname: "Self Destruction",
      abomination: 3,
      mutatordescription: "Enemy units explode and deal damage to friendly player units upon death.",
      customusable: true,
      chaosrollable: true,
      hassafezone: false
    },
    {
      mutatorid: "sharing-is-caring",
      mutatorname: "Sharing is Caring",
      abomination: 0,
      mutatordescription: "Supply is shared between you and your partner, and units from both armies contribute to your combined supply cap.",
      customusable: false,
      chaosrollable: false,
      hassafezone: false
    },
    {
      mutatorid: "shortsighted",
      mutatorname: "Shortsighted",
      abomination: 1,
      mutatordescription: "Player units and structures have reduced vision range.",
      customusable: true,
      chaosrollable: false,
      hassafezone: false
    },
    {
      mutatorid: "slim-pickings",
      mutatorname: "Slim Pickings",
      abomination: 5,
      mutatordescription: "Player worker units gather resources at a reduced rate, but resource pickups spawn throughout the map.",
      customusable: true,
      chaosrollable: true,
      hassafezone: false
    },
    {
      mutatorid: "speed-freaks",
      mutatorname: "Speed Freaks",
      abomination: 2,
      mutatordescription: "The enemy moves faster than any unit a player has at their disposal.",
      customusable: true,
      chaosrollable: true,
      hassafezone: false
    },
    {
      mutatorid: "temporal-field",
      mutatorname: "Temporal Field",
      abomination: 1,
      mutatordescription: "Enemy Temporal Fields are periodically deployed throughout the map.",
      customusable: true,
      chaosrollable: true,
      hassafezone: true
    },
    {
      mutatorid: "time-warp",
      mutatorname: "Time Warp",
      abomination: 1,
      mutatordescription: "Enemy Time Warps are periodically deployed throughout the map.",
      customusable: true,
      chaosrollable: true,
      hassafezone: true
    },
    {
      mutatorid: "transmutation",
      mutatorname: "Transmutation",
      abomination: 7,
      mutatordescription: "Enemy units have a chance to transform into more powerful units whenever they deal damage.",
      customusable: true,
      chaosrollable: true,
      hassafezone: false
    },
    {
      mutatorid: "trick-or-treat",
      mutatorname: "Trick or Treat",
      abomination: 0,
      mutatordescription: "Civilians visit your Candy Bowl looking for treats, which are generated by spending minerals. If no treats are available, the civilians randomly transform into enemy units.",
      customusable: false,
      chaosrollable: false,
      hassafezone: false
    },
    {
      mutatorid: "turkey-shoot",
      mutatorname: "Turkey Shoot",
      abomination: 0,
      mutatordescription: "Supply can only be generated by killing turkeys that wander throughout the map. Doing so may anger the turkeys that remain.",
      customusable: false,
      chaosrollable: false,
      hassafezone: false
    },
    {
      mutatorid: "twister",
      mutatorname: "Twister",
      abomination: 2,
      mutatordescription: "Tornadoes move across the map, damaging and knocking back player units in their path.",
      customusable: true,
      chaosrollable: true,
      hassafezone: true
    },
    {
      mutatorid: "vertigo",
      mutatorname: "Vertigo",
      abomination: 0,
      mutatordescription: "Your camera randomly changes positions.",
      customusable: true,
      chaosrollable: false,
      hassafezone: false
    },
    {
      mutatorid: "void-reanimators",
      mutatorname: "Void Reanimators",
      abomination: 5,
      mutatordescription: "Void Reanimators wander the battlefield, bringing your enemies back to life.",
      customusable: true,
      chaosrollable: true,
      hassafezone: false
    },
    {
      mutatorid: "void-rifts",
      mutatorname: "Void Rifts",
      abomination: 10,
      mutatordescription: "Void Rifts periodically appear in random locations and spawn enemy units until destroyed.",
      customusable: true,
      chaosrollable: true,
      hassafezone: false
    },
    {
      mutatorid: "walking-infested",
      mutatorname: "Walking Infested",
      abomination: 2,
      mutatordescription: "Every enemy unit that commanders destroy will spawn infested terrans. The more life a unit has, the more infested will rise from its corpse.",
      customusable: true,
      chaosrollable: true,
      hassafezone: false
    },
    {
      mutatorid: "we-move-unseen",
      mutatorname: "We Move Unseen",
      abomination: 3,
      mutatordescription: "All enemy units are permanently cloaked.",
      customusable: true,
      chaosrollable: true,
      hassafezone: false
    },
    {
      mutatorid: "boom-bots",
      mutatorname: "Boom Bots",
      abomination: 10,
      mutatordescription: "Uncaring automatons carry a nuclear payload toward your base. One player must discern the disarming sequence and the other player must enter it.",
      customusable: true,
      chaosrollable: false,
      hassafezone: false
    }
  ];

  // source-data/playerupgrades.json
  var playerupgrades_default = [
    {
      upgradeid: 1,
      unit: "Roach",
      commander: "Abathur",
      name: "Glial Reconstitution",
      icon: "glialreconstitution",
      effect: "Increases the movement speed of Roaches by 33%.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 0.75,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 2,
      unit: "Roach",
      commander: "Abathur",
      name: "Hydriodic Bile",
      icon: "hydriodicbile",
      effect: "Roach gains +8 damage vs. light units.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: "Light",
      value: 8,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 3,
      unit: "Mutalisk",
      commander: "Abathur",
      name: "Sundering Glave",
      icon: "sunderingglave",
      effect: "Mutalisks deal 100% bonus damage vs. armored units.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: "Armored",
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 4,
      unit: "Guardian",
      commander: "Abathur",
      name: "Prolonged Dispersion",
      icon: "prolongeddispersion",
      effect: "Guardian attack range is increased by 3.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 3,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 5,
      unit: "Supplicant",
      commander: "Alarak",
      name: "Blood Shields",
      icon: "bloodshields",
      effect: "Reduces the damage enemies deal to the Supplicants shields. Adds 2 shield armor.",
      modifier: "Shield_Armor",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 6,
      unit: "Supplicant",
      commander: "Alarak",
      name: "Soul Augmentation",
      icon: "soulaugmentation",
      effect: "Supplicants gain +25 shields.",
      modifier: "Shields",
      modifiermode: null,
      modifiertag: null,
      value: 25,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 7,
      unit: "Vanguard",
      commander: "Alarak",
      name: "Fusion Mortars",
      icon: "fusionmortars",
      effect: "Increases the damage Vanguards deal to armored units by 7.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: "Armored",
      value: 7,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 8,
      unit: "Observer",
      commander: "Artanis",
      name: "Gravitic Boosters",
      icon: "graviticboosters",
      effect: "Increases the movement speed of Observers by 50%.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 9,
      unit: "Dragoon",
      commander: "Artanis",
      name: "Singularity Charge",
      icon: "singularitycharge",
      effect: "Increases the Dragoons attack range by 2.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 10,
      unit: "Dragoon",
      commander: "Artanis",
      name: "Trillic Compression Systems",
      icon: "trilliccompressionsystems",
      effect: "Dragoons gain +20 life and their shield regeneration rate is doubled. Also allows the Dragoon to regenerate shields in combat.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 20,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 11,
      unit: "Phoenix",
      commander: "Artanis",
      name: "Anion Pulse-Crystals",
      icon: "anionpulsecrystals",
      effect: "Phoenixes gain +2 range.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 12,
      unit: "Ravasaur",
      commander: "Dehaka",
      name: "Dissolving Acid",
      icon: "dissolvingacid",
      effect: "Ravasaurs deal +15 damage to armored targets.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: "Armored",
      value: 15,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 13,
      unit: "Ravasaur",
      commander: "Dehaka",
      name: "Enlarged Parotid Glands",
      icon: "enlargedparotidglands",
      effect: "Increases movement speed and attack range.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 14,
      unit: "Primal Roach",
      commander: "Dehaka",
      name: "Glial Reconstitution",
      icon: "glialreconstitution",
      effect: "Increases the movement speed of Primal Roaches by 31% and Primal Igniters by 19%.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 0.7,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 15,
      unit: "Primal Igniter",
      commander: "Dehaka",
      name: "Glial Reconstitution",
      icon: "glialreconstitution",
      effect: "Increases the movement speed of Primal Roaches by 31% and Primal Igniters by 19%.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 0.55,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 16,
      unit: "Primal Igniter",
      commander: "Dehaka",
      name: "Concentrated Fire",
      icon: "concentratedfire",
      effect: "Increases the Primal Igniters damage against light armored enemies by 15.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: "Light",
      value: 15,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 17,
      unit: "Primal Hydralisk",
      commander: "Dehaka",
      name: "Muscular Augments",
      icon: "muscularaugments",
      effect: "Increases Primal Hydralisk movement speed by 22% and attack range by 1.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 0.56,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 18,
      unit: "Primal Hydralisk",
      commander: "Dehaka",
      name: "Muscular Augments",
      icon: "muscularaugments",
      effect: "Increases Primal Hydralisk movement speed by 22% and attack range by 1.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 19,
      unit: "Fenix Praetor Armor",
      commander: "Fenix",
      name: "Purifier Armaments",
      icon: "purifierarmaments",
      effect: "All Fenix Armor Suits gain +15 attack damage.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: null,
      value: 15,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 20,
      unit: "Colossus",
      commander: "Fenix",
      name: "Extended Thermal Lance",
      icon: "extendedthermallance",
      effect: "Colossi gain +3 range.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 3,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 21,
      unit: "Scout",
      commander: "Fenix",
      name: "Combat Sensor Array",
      icon: "combatsensorarray",
      effect: "Scouts gain +3 air attack range and +1 ground attack range.",
      modifier: "Range",
      modifiermode: "(Air)",
      modifiertag: null,
      value: 3,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 22,
      unit: "Scout",
      commander: "Fenix",
      name: "Combat Sensor Array",
      icon: "combatsensorarray",
      effect: "Scouts gain +3 air attack range and +1 ground attack range.",
      modifier: "Range",
      modifiermode: "(Ground)",
      modifiertag: null,
      value: 1,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 23,
      unit: "Mojo",
      commander: "Fenix",
      name: "Combat Sensor Array",
      icon: "combatsensorarray",
      effect: "Scouts gain +3 air attack range and +1 ground attack range.",
      modifier: "Range",
      modifiermode: "(Air)",
      modifiertag: null,
      value: 3,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 24,
      unit: "Mojo",
      commander: "Fenix",
      name: "Combat Sensor Array",
      icon: "combatsensorarray",
      effect: "Scouts gain +3 air attack range and +1 ground attack range.",
      modifier: "Range",
      modifiermode: "(Ground)",
      modifiertag: null,
      value: 1,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 25,
      unit: "Observer",
      commander: "Fenix",
      name: "Gravitic Boosters",
      icon: "graviticboosters",
      effect: "Increases the movement speed of Observers by 50%.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 26,
      unit: "Reaper",
      commander: "Horner",
      name: "Jet Pack Overdrive",
      icon: "jetpackoverdrive",
      effect: "Increases the movement speed of Reapers by 1.5, and grants them the ability to fly for 10 seconds. Reapers are able to attack air units while flying.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.55,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 29,
      unit: "Observer",
      commander: "Karax",
      name: "Gravitic Boosters",
      icon: "graviticboosters",
      effect: "Increases the movement speed of Observers by 50%.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 30,
      unit: "Colossus",
      commander: "Karax",
      name: "Extended Thermal Lance",
      icon: "extendedthermallance",
      effect: "Colossi gain +3 range.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 3,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 31,
      unit: "Mirage",
      commander: "Karax",
      name: "Anion Pulse-Crystals",
      icon: "anionpulsecrystals",
      effect: "Mirages gain +2 range.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 32,
      unit: "Kerrigan",
      commander: "Kerrigan",
      name: "Heroic Fortitude",
      icon: "heroicfortitude",
      effect: `Kerrigan gains +200 maximum life.\r
Life-regeneration rate increased by 100%.`,
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 200,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 33,
      unit: "Zergling",
      commander: "Kerrigan",
      name: "Metabolic Boost",
      icon: "metabolicboost",
      effect: "Increases the movement speed of Zerglings by 60%.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.6,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 34,
      unit: "Zergling",
      commander: "Kerrigan",
      name: "Hardened Carapace",
      icon: "hardenedcarapace",
      effect: "Zerglings gain +10 maximum life.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 10,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 35,
      unit: "Hydralisk",
      commander: "Kerrigan",
      name: "Muscular Augments",
      icon: "muscularaugments",
      effect: "Improves Hydralisk movement speed by 25% and increases attack range by +1.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.25,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 36,
      unit: "Hydralisk",
      commander: "Kerrigan",
      name: "Muscular Augments",
      icon: "muscularaugments",
      effect: "Improves Hydralisk movement speed by 25% and increases attack range by +1.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 37,
      unit: "Hydralisk",
      commander: "Kerrigan",
      name: "Ancillary Carapace",
      icon: "ancillarycarapace",
      effect: "Hydralisk gains +20 maximum life.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 20,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 38,
      unit: "Lurker",
      commander: "Kerrigan",
      name: "Seismic Spines",
      icon: "seismicspines",
      effect: "Increases the attack range of Lurkers by +3.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 3,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 39,
      unit: "Ultralisk",
      commander: "Kerrigan",
      name: "Chitinous Plating",
      icon: "chitinousplating",
      effect: "Grants Ultralisks +2 armor.",
      modifier: "Armor",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 40,
      unit: "Brood Lord",
      commander: "Kerrigan",
      name: "Porous Cartilage",
      icon: "porouscartilage",
      effect: "Increases Brood Lord movement speed by 75% and life by 100.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.75,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 41,
      unit: "Elite Marine",
      commander: "Nova",
      name: "Laser Targeting System",
      icon: "lasertargetingsystem",
      effect: "Increases the Elite Marines vision by 2 and its weapon range by 1.",
      modifier: "Vision",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 42,
      unit: "Elite Marine",
      commander: "Nova",
      name: "Laser Targeting System",
      icon: "lasertargetingsystem",
      effect: "Increases the Elite Marines vision by 2 and its weapon range by 1.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 43,
      unit: "Elite Marine",
      commander: "Nova",
      name: "Super Stimpack",
      icon: "superstimpack",
      effect: "Heals the 2 life per second and increases its attack and movement speeds for 15 seconds.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 44,
      unit: "Elite Marine",
      commander: "Nova",
      name: "Super Stimpack",
      icon: "superstimpack",
      effect: "Heals the 2 life per second and increases its attack and movement speeds for 15 seconds.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 45,
      unit: "Hellbat Ranger",
      commander: "Nova",
      name: "Infernal PreIgniter",
      icon: "infernalpreigniter",
      effect: "Hellbats deal +15 damage to light units in both modes.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: "Light",
      value: 15,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 46,
      unit: "Hellion Ranger",
      commander: "Nova",
      name: "Infernal PreIgniter",
      icon: "infernalpreigniter",
      effect: "Hellbats deal +15 damage to light units in both modes.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: "Light",
      value: 15,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 47,
      unit: "Strike Goliath",
      commander: "Nova",
      name: "Ares Class Targeting System",
      icon: "aresclasstargetingsystem",
      effect: "Increases the Strike Goliaths anti-air weapon range by 3 and its ground weapon range by 1.",
      modifier: "Range",
      modifiermode: "(Air)",
      modifiertag: null,
      value: 3,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 48,
      unit: "Strike Goliath",
      commander: "Nova",
      name: "Ares Class Targeting System",
      icon: "aresclasstargetingsystem",
      effect: "Increases the Strike Goliaths anti-air weapon range by 3 and its ground weapon range by 1.",
      modifier: "Range",
      modifiermode: "(Ground)",
      modifiertag: null,
      value: 1,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 49,
      unit: "Marine",
      commander: "Raynor",
      name: "Stimpack",
      icon: "stimpack",
      effect: "Injects the unit with powerful stimulants that greatly increase attack speed (by 43%) and movement speed (by 50%) for 10 seconds. Injures the unit for 5 of the units life.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 50,
      unit: "Marine",
      commander: "Raynor",
      name: "Stimpack",
      icon: "stimpack",
      effect: "Injects the unit with powerful stimulants that greatly increase attack speed (by 43%) and movement speed (by 50%) for 10 seconds. Injures the unit for 5 of the units life.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.75,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 51,
      unit: "Marine",
      commander: "Raynor",
      name: "Combat Shield",
      icon: "combatshield",
      effect: "Marines gain +10 life.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 10,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 52,
      unit: "Marauder",
      commander: "Raynor",
      name: "Stimpack",
      icon: "stimpack",
      effect: "Injects the unit with powerful stimulants that greatly increase attack speed (by 43%) and movement speed (by 50%) for 10 seconds. Injures the unit for 5 of the units life.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 53,
      unit: "Marauder",
      commander: "Raynor",
      name: "Stimpack",
      icon: "stimpack",
      effect: "Injects the unit with powerful stimulants that greatly increase attack speed (by 43%) and movement speed (by 50%) for 10 seconds. Injures the unit for 5 of the units life.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.75,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 54,
      unit: "Firebat",
      commander: "Raynor",
      name: "Stimpack",
      icon: "stimpack",
      effect: "Injects the unit with powerful stimulants that greatly increase attack speed (by 43%) and movement speed (by 50%) for 10 seconds. Injures the unit for 5 of the units life.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 55,
      unit: "Firebat",
      commander: "Raynor",
      name: "Stimpack",
      icon: "stimpack",
      effect: "Injects the unit with powerful stimulants that greatly increase attack speed (by 43%) and movement speed (by 50%) for 10 seconds. Injures the unit for 5 of the units life.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.75,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 56,
      unit: "Firebat",
      commander: "Raynor",
      name: "Juggernaut Plating",
      icon: "juggernautplating",
      effect: "Firebats gain +100 life and +2 armor.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 100,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 57,
      unit: "Firebat",
      commander: "Raynor",
      name: "Juggernaut Plating",
      icon: "juggernautplating",
      effect: "Firebats gain +100 life and +2 armor.",
      modifier: "Armor",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 58,
      unit: "Vulture",
      commander: "Raynor",
      name: "Advanced Optics",
      icon: "advancedoptics",
      effect: "Increases the range of all vehicle and ship weapons by 1.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 59,
      unit: "Vulture",
      commander: "Raynor",
      name: "Afterburners",
      icon: "afterburners",
      effect: "Vehicles and ships gain afterburners that increase the units movement speed by 100% for 8 seconds upon activation.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 60,
      unit: "Siege Tank",
      commander: "Raynor",
      name: "Advanced Optics",
      icon: "advancedoptics",
      effect: "Increases the range of all vehicle and ship weapons by 1.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 61,
      unit: "Siege Tank",
      commander: "Raynor",
      name: "Afterburners",
      icon: "afterburners",
      effect: "Vehicles and ships gain afterburners that increase the units movement speed by 100% for 8 seconds upon activation.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 62,
      unit: "Viking",
      commander: "Raynor",
      name: "Phobos Weapons System",
      icon: "phobosweaponssystem",
      effect: "Viking weapons system upgrade. Increases air attack range by 2 and ground attack range by 1.",
      modifier: "Range",
      modifiermode: "(Assault Mode)",
      modifiertag: null,
      value: 1,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 63,
      unit: "Viking",
      commander: "Raynor",
      name: "Phobos Weapons System",
      icon: "phobosweaponssystem",
      effect: "Viking weapons system upgrade. Increases air attack range by 2 and ground attack range by 1.",
      modifier: "Range",
      modifiermode: "(Fighter Mode)",
      modifiertag: null,
      value: 2,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 64,
      unit: "Viking",
      commander: "Raynor",
      name: "Advanced Optics",
      icon: "advancedoptics",
      effect: "Increases the range of all vehicle and ship weapons by 1.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 65,
      unit: "Viking",
      commander: "Raynor",
      name: "Afterburners",
      icon: "afterburners",
      effect: "Vehicles and ships gain afterburners that increase the units movement speed by 100% for 8 seconds upon activation.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 66,
      unit: "Banshee",
      commander: "Raynor",
      name: "Advanced Optics",
      icon: "advancedoptics",
      effect: "Increases the range of all vehicle and ship weapons by 1.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 67,
      unit: "Banshee",
      commander: "Raynor",
      name: "Afterburners",
      icon: "afterburners",
      effect: "Vehicles and ships gain afterburners that increase the units movement speed by 100% for 8 seconds upon activation.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 68,
      unit: "Battlecruiser",
      commander: "Raynor",
      name: "Advanced Optics",
      icon: "advancedoptics",
      effect: "Increases the range of all vehicle and ship weapons by 1.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 69,
      unit: "Battlecruiser",
      commander: "Raynor",
      name: "Afterburners",
      icon: "afterburners",
      effect: "Vehicles and ships gain afterburners that increase the units movement speed by 100% for 8 seconds upon activation.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 70,
      unit: "Asteria Wraith",
      commander: "Horner",
      name: "Trigger Override",
      icon: "triggeroverride",
      effect: `Wraith attack speed increases by 10% with each attack, up to a maximum of 100%.\r
\r
Passive ability.`,
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 71,
      unit: "Heavy Siege Tank",
      commander: "Nova",
      name: "Graduating Range",
      icon: "graduatingrange",
      effect: "Increases the Heavy Siege Tanks attack range by 1 every 3 seconds while in Siege Mode, up to a maximum of 5 additional range.",
      modifier: "Range",
      modifiermode: "(Siege Mode)",
      modifiertag: null,
      value: 5,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 72,
      unit: "Infested Marine",
      commander: "Stukov",
      name: "Retinal Augmentation",
      icon: "retinalaugmentation",
      effect: "Infested Marines and Infested Troopers gain +1 attack range.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 73,
      unit: "Infested Trooper",
      commander: "Stukov",
      name: "Retinal Augmentation",
      icon: "retinalaugmentation",
      effect: "Infested Marines and Infested Troopers gain +1 attack range.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 74,
      unit: "Infested Bunker",
      commander: "Stukov",
      name: "Calcified Armor",
      icon: "calcifiedarmor",
      effect: "Infested Bunkers gain +3 armor.",
      modifier: "Armor",
      modifiermode: null,
      modifiertag: null,
      value: 3,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 75,
      unit: "Infested Siege Tank",
      commander: "Stukov",
      name: "Acidic Enzymes",
      icon: "acidicenzymes",
      effect: "Infested Siege Tanks deal an additional +15 damage to armored units and structures in both modes.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: "Armored",
      value: 15,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 76,
      unit: "Infested Liberator",
      commander: "Stukov",
      name: "Viral Contamination",
      icon: "viralcontamination",
      effect: "Increases the damage Infested Liberators deal to their primary target by 100%.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 77,
      unit: "Infested Banshee",
      commander: "Stukov",
      name: "Braced Exoskeleton",
      icon: "bracedexoskeleton",
      effect: "Infested Banshees gain +100 life.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 100,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 78,
      unit: "Hellbat",
      commander: "Swann",
      name: "Infernal PreIgniter",
      icon: "infernalpreigniter",
      effect: "Hellbats deal +10 damage to light units in both modes.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: "Light",
      value: 10,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 79,
      unit: "Hellbat",
      commander: "Swann",
      name: "Infernal Plating",
      icon: "infernalplating",
      effect: "Hellions and Hellbats gain +2 armor.",
      modifier: "Armor",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 80,
      unit: "Hellbat",
      commander: "Swann",
      name: "Advanced Optics",
      icon: "advancedoptics",
      effect: "Increases the range of all vehicle and ship weapons by 1.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 81,
      unit: "Goliath",
      commander: "Swann",
      name: "Ares Class Targeting System",
      icon: "aresclasstargetingsystem",
      effect: "Increases the Goliaths anti-air weapon range by 3 and its ground weapon range by 1.",
      modifier: "Range",
      modifiermode: "(Air)",
      modifiertag: null,
      value: 3,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 82,
      unit: "Goliath",
      commander: "Swann",
      name: "Ares Class Targeting System",
      icon: "aresclasstargetingsystem",
      effect: "Increases the Goliaths anti-air weapon range by 3 and its ground weapon range by 1.",
      modifier: "Range",
      modifiermode: "(Ground)",
      modifiertag: null,
      value: 1,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 83,
      unit: "Goliath",
      commander: "Swann",
      name: "Advanced Optics",
      icon: "advancedoptics",
      effect: "Increases the range of all vehicle and ship weapons by 1.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 84,
      unit: "Siege Tank",
      commander: "Swann",
      name: "Maelstrom Rounds",
      icon: "maelstromrounds",
      effect: "Siege Tanks gain +40 attack damage while in Siege Mode. Splash damage remains the same.",
      modifier: "damage",
      modifiermode: "(Siege Mode)",
      modifiertag: null,
      value: 40,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 85,
      unit: "Siege Tank",
      commander: "Swann",
      name: "Advanced Optics",
      icon: "advancedoptics",
      effect: "Increases the range of all vehicle and ship weapons by 1.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 86,
      unit: "Cyclone",
      commander: "Swann",
      name: "Advanced Optics",
      icon: "advancedoptics",
      effect: "Increases the range of all vehicle and ship weapons by 1.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 87,
      unit: "Thor",
      commander: "Swann",
      name: "Advanced Optics",
      icon: "advancedoptics",
      effect: "Increases the range of all vehicle and ship weapons by 1.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 88,
      unit: "Wraith",
      commander: "Swann",
      name: "Pulse Amplifier",
      icon: "pulseamplifier",
      effect: "Increases the damage of Gemini Missiles by 100% and Burst Lasers by 300% while the Wraith is moving.",
      modifier: "damage",
      modifiermode: "(Air)",
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 89,
      unit: "Wraith",
      commander: "Swann",
      name: "Pulse Amplifier",
      icon: "pulseamplifier",
      effect: "Increases the damage of Gemini Missiles by 100% and Burst Lasers by 300% while the Wraith is moving.",
      modifier: "damage",
      modifiermode: "(Ground)",
      modifiertag: null,
      value: 4,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 90,
      unit: "Wraith",
      commander: "Swann",
      name: "Advanced Optics",
      icon: "advancedoptics",
      effect: "Increases the range of all vehicle and ship weapons by 1.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 91,
      unit: "Tychus Findlay",
      commander: "Tychus",
      name: "ITCE Triggers",
      icon: "itcetriggers",
      effect: "Increases the attack speed of Tychus, Crooked Sam, and Sirius by 25%.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.25,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 92,
      unit: "Crooked Sam",
      commander: "Tychus",
      name: "ITCE Triggers",
      icon: "itcetriggers",
      effect: "Increases the attack speed of Tychus, Crooked Sam, and Sirius by 25%.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.25,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 93,
      unit: "James Sirius Sykes",
      commander: "Tychus",
      name: "ITCE Triggers",
      icon: "itcetriggers",
      effect: "Increases the attack speed of Tychus, Crooked Sam, and Sirius by 25%.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.25,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 94,
      unit: "Miles Blaze Lewis",
      commander: "Tychus",
      name: "Endurance Supplements",
      icon: "endurancesupplements",
      effect: "Increases the life of Blaze, Cannonball, and Rattlesnake by 25%.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 1.25,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 95,
      unit: "Rob Cannonball Boswell",
      commander: "Tychus",
      name: "Endurance Supplements",
      icon: "endurancesupplements",
      effect: "Increases the life of Blaze, Cannonball, and Rattlesnake by 25%.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 1.25,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 96,
      unit: "Kev Rattlesnake West",
      commander: "Tychus",
      name: "Endurance Supplements",
      icon: "endurancesupplements",
      effect: "Increases the life of Blaze, Cannonball, and Rattlesnake by 25%.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 1.25,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 97,
      unit: "Void Ray",
      commander: "Vorazun",
      name: "Prismatic Range",
      icon: "prismaticrange",
      effect: "Increases the range (up to 3 increase) of the Void Ray's weapon as it continues to attack.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 3,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 98,
      unit: "Zagara",
      commander: "Zagara",
      name: "Heroic Fortitude",
      icon: "heroicfortitude",
      effect: `Zagara gains +200 maximum life.\r
Life-regeneration rate increased by 100%.`,
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 200,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 99,
      unit: "Zergling",
      commander: "Zagara",
      name: "Metabolic Boost",
      icon: "metabolicboost",
      effect: "Increases the movement speed of Zerglings by 60%.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.6,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 100,
      unit: "Zergling",
      commander: "Zagara",
      name: "Hardened Carapace",
      icon: "hardenedcarapace",
      effect: "Zerglings gain +10 maximum life.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 10,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 101,
      unit: "Zergling",
      commander: "Kerrigan",
      name: "Adrenal Overload",
      icon: "adrenaloverload",
      effect: "Increases the attack speed of Zerglings by 40%.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.4,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 102,
      unit: "Zergling",
      commander: "Zagara",
      name: "Adrenal Overload",
      icon: "adrenaloverload",
      effect: "Increases the attack speed of Zerglings by 40%.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.4,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 103,
      unit: "Baneling",
      commander: "Zagara",
      name: "Centrifugal Hooks",
      icon: "centrifugalhooks",
      effect: "Increases the movement speed of Banelings by 15%.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 0.45,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 104,
      unit: "Baneling Spawn",
      commander: "Zagara",
      name: "Centrifugal Hooks",
      icon: "centrifugalhooks",
      effect: "Increases the movement speed of Banelings by 15%.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 0.45,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 105,
      unit: "Baneling",
      commander: "Zagara",
      name: "Corrosive Acid",
      icon: "corrosiveacid",
      effect: "Increases the Banelings base attack damage against primary target by 100%. Splash damage remains the same.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: null,
      value: 40,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 106,
      unit: "Baneling Spawn",
      commander: "Zagara",
      name: "Corrosive Acid",
      icon: "corrosiveacid",
      effect: "Increases the Banelings base attack damage against primary target by 100%. Splash damage remains the same.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: null,
      value: 5,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 107,
      unit: "Scourge",
      commander: "Zagara",
      name: "Simplified Genome",
      icon: "simplifiedgenome",
      effect: "Reduces the amount of vespene gas required to morph Scourge by 50.",
      modifier: "vespeneCost",
      modifiermode: null,
      modifiertag: null,
      value: -25,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 108,
      unit: "XelNaga Abrogator",
      commander: "Zeratul",
      name: "Nova Battery",
      icon: "novabattery",
      effect: "Reduces the cooldown of Purification Nova by 50%.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 109,
      unit: "XelNaga Watcher",
      commander: "Zeratul",
      name: "Gravitic Boosters",
      icon: "graviticboosters",
      effect: "Increases the movement speed of XelNaga Watchers by 50%.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 110,
      unit: "XelNaga Watcher",
      commander: "Zeratul",
      name: "Sensor Array",
      icon: "sensorarray",
      effect: "Increases the sight radius of XelNaga Watchers by 50%.",
      modifier: "Vision",
      modifiermode: null,
      modifiertag: null,
      value: 1.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 111,
      unit: "Overlord",
      commander: "Abathur",
      name: "Pneumatized Carapace",
      icon: "pneumatizedcarapace",
      effect: "Increases the movement speed of Overlords and Overseers.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 3.38,
      operation: "set",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 112,
      unit: "Overseer",
      commander: "Abathur",
      name: "Pneumatized Carapace",
      icon: "pneumatizedcarapace",
      effect: "Increases the movement speed of Overlords and Overseers.",
      modifier: "Move_Speed",
      modifiermode: "(Normal)",
      modifiertag: null,
      value: 3.38,
      operation: "set",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 113,
      unit: "Overlord",
      commander: "Kerrigan",
      name: "Pneumatized Carapace",
      icon: "pneumatizedcarapace",
      effect: "Increases the movement speed of Overlords and Overseers.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 3.38,
      operation: "set",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 114,
      unit: "Overseer",
      commander: "Kerrigan",
      name: "Pneumatized Carapace",
      icon: "pneumatizedcarapace",
      effect: "Increases the movement speed of Overlords and Overseers.",
      modifier: "Move_Speed",
      modifiermode: "(Normal)",
      modifiertag: null,
      value: 3.38,
      operation: "set",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 115,
      unit: "Overlord",
      commander: "Stukov",
      name: "Pneumatized Carapace",
      icon: "pneumatizedcarapace",
      effect: "Increases the movement speed of Overlords and Overseers.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 3.38,
      operation: "set",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 116,
      unit: "Overseer",
      commander: "Stukov",
      name: "Pneumatized Carapace",
      icon: "pneumatizedcarapace",
      effect: "Increases the movement speed of Overlords and Overseers.",
      modifier: "Move_Speed",
      modifiermode: "(Normal)",
      modifiertag: null,
      value: 3.38,
      operation: "set",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 117,
      unit: "Overlord",
      commander: "Zagara",
      name: "Pneumatized Carapace",
      icon: "pneumatizedcarapace",
      effect: "Increases the movement speed of Overlords and Overseers.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 3.38,
      operation: "set",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 118,
      unit: "Overseer",
      commander: "Zagara",
      name: "Pneumatized Carapace",
      icon: "pneumatizedcarapace",
      effect: "Increases the movement speed of Overlords and Overseers.",
      modifier: "Move_Speed",
      modifiermode: "(Normal)",
      modifiertag: null,
      value: 3.38,
      operation: "set",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 119,
      unit: "Hellion",
      commander: "Swann",
      name: "Infernal PreIgniter",
      icon: "infernalpreigniter",
      effect: "Hellbats deal +10 damage to light units in both modes.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: "Light",
      value: 10,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 120,
      unit: "Hellion",
      commander: "Swann",
      name: "Infernal Plating",
      icon: "infernalplating",
      effect: "Hellions and Hellbats gain +2 armor.",
      modifier: "Armor",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 121,
      unit: "Hellion",
      commander: "Swann",
      name: "Advanced Optics",
      icon: "advancedoptics",
      effect: "Increases the range of all vehicle and ship weapons by 1.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 122,
      unit: "Spinning Dizzy",
      commander: "Swann",
      name: "HiSec Auto Tracking",
      icon: "hisecautotracking",
      effect: "Adds +1 range to all Turrets.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 123,
      unit: "Spinning Dizzy",
      commander: "Swann",
      name: "Structure Armor",
      icon: "structurearmor",
      effect: "Upgrades the armor of structures by 2.",
      modifier: "Armor",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 124,
      unit: "Spinning Dizzy",
      commander: "Swann",
      name: "KMC AutoLoaders",
      icon: "kmcautoloaders",
      effect: "Increases the attack speed of all Turrets by 25%.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.25,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 125,
      unit: "Flaming Betty",
      commander: "Swann",
      name: "HiSec Auto Tracking",
      icon: "hisecautotracking",
      effect: "Adds +1 range to all Turrets.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 126,
      unit: "Flaming Betty",
      commander: "Swann",
      name: "Structure Armor",
      icon: "structurearmor",
      effect: "Upgrades the armor of structures by 2.",
      modifier: "Armor",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 127,
      unit: "Flaming Betty",
      commander: "Swann",
      name: "KMC AutoLoaders",
      icon: "kmcautoloaders",
      effect: "Increases the attack speed of all Turrets by 25%.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.25,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 128,
      unit: "Blaster Billy",
      commander: "Swann",
      name: "HiSec Auto Tracking",
      icon: "hisecautotracking",
      effect: "Adds +1 range to all Turrets.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 129,
      unit: "Blaster Billy",
      commander: "Swann",
      name: "Structure Armor",
      icon: "structurearmor",
      effect: "Upgrades the armor of structures by 2.",
      modifier: "Armor",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 130,
      unit: "Blaster Billy",
      commander: "Swann",
      name: "KMC AutoLoaders",
      icon: "kmcautoloaders",
      effect: "Increases the attack speed of all Turrets by 25%.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.25,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 131,
      unit: "Photon Cannon",
      commander: "Karax",
      name: "Enhanced Targeting",
      icon: "enhancedtargeting",
      effect: "Photon Cannons, Khaydarin Monoliths, and Shield Batteries gain +2 range.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 132,
      unit: "Photon Cannon",
      commander: "Karax",
      name: "Optimized Ordnance",
      icon: "optimizedordnance",
      effect: "Increases the attack speed of Photon Cannons and Khaydarin Monoliths by 25%.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.25,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 133,
      unit: "Khaydarin Monolith",
      commander: "Karax",
      name: "Enhanced Targeting",
      icon: "enhancedtargeting",
      effect: "Photon Cannons, Khaydarin Monoliths, and Shield Batteries gain +2 range.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 134,
      unit: "Khaydarin Monolith",
      commander: "Karax",
      name: "Optimized Ordnance",
      icon: "optimizedordnance",
      effect: "Increases the attack speed of Photon Cannons and Khaydarin Monoliths by 25%.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.25,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 135,
      unit: "Warhound Turret",
      commander: "Tychus",
      name: "Umojan Turret Frame",
      icon: "umojanturretframe",
      effect: "Increases the life and weapon damage of Warhound Turrets by 75%.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 113,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 136,
      unit: "Warhound Turret",
      commander: "Tychus",
      name: "Umojan Turret Frame",
      icon: "umojanturretframe",
      effect: "Increases the life and weapon damage of Warhound Turrets by 75%.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: null,
      value: 14,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 137,
      unit: "Baneling",
      commander: "Zagara",
      name: "Corrosive Acid",
      icon: "corrosiveacid",
      effect: "Increases the Banelings base attack damage against primary target by 100%. Splash damage remains the same.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: "Structure",
      value: 40,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 138,
      unit: "Banelnig Spawn",
      commander: "Zagara",
      name: "Corrosive Acid",
      icon: "corrosiveacid",
      effect: "Increases the Banelings base attack damage against primary target by 100%. Splash damage remains the same.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: "Structure",
      value: 5,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 139,
      unit: "Bile Launcher",
      commander: "Zagara",
      name: "Artillery Ducts",
      icon: "artilleryducts",
      effect: "Increases the range of the Bile Launchers Bombardment by 10.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 10,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 140,
      unit: "Bile Launcher",
      commander: "Zagara",
      name: "Rapid Bombardment",
      icon: "rapidbombardment",
      effect: "Reduces the cooldown of the Bile Launchers Bombardment.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 5,
      operation: "set",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 141,
      unit: "Volatile Infested",
      commander: "Stukov",
      name: "Acidic Enzymes",
      icon: "acidicenzymes",
      effect: "Infested Siege Tanks deal an additional +15 damage to armored units and structures in both modes.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: "Armored",
      value: 15,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 142,
      unit: "Ravasaur",
      commander: "Dehaka",
      name: "Enlarged Parotid Glands",
      icon: "enlargedparotidglands",
      effect: "Increases movement speed and attack range.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 3,
      operation: "set",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 143,
      unit: "Infested Liberator",
      commander: "Stukov",
      name: "Cloud Dispersal",
      icon: "clouddispersal",
      effect: "Infested Liberators instantly transform into a cloud of microscopic organisms while attacking, reducing the damage they take by 85%.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 0,
      operation: "set",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 144,
      unit: "Infested Liberator",
      commander: "Stukov",
      name: "Cloud Dispersal",
      icon: "clouddispersal",
      effect: "Infested Liberators instantly transform into a cloud of microscopic organisms while attacking, reducing the damage they take by 85%.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "set",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 145,
      unit: "Infested Banshee",
      commander: "Stukov",
      name: "Cloak",
      icon: "cloak",
      effect: `Cloaks the unit, preventing enemy units from seeing or attacking it. A cloaked unit will only be revealed by detectors or effects. Cloaked Infested Banshees also have their range increased by 2.\r
\r
Drains 0.9 energy per second.`,
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 146,
      unit: "Banshee",
      commander: "Raynor",
      name: "Cloak",
      icon: "cloakingfield",
      effect: `Cloaks the unit, preventing enemy units from seeing or attacking it. A cloaked unit will only be revealed by detectors or effects.\r
\r
Drains 0.9 energy per second.`,
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 147,
      unit: "Mecha Zergling",
      commander: "Stetmann",
      name: "Metal-Bolic Boost",
      icon: "metalbolicboost",
      effect: "Increases the movement speed of Mecha Zerglings by 60%.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.6,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 148,
      unit: "Mecha Zergling",
      commander: "Stetmann",
      name: "Synthetic Adrenal Pumps",
      icon: "syntheticadrenalpumps",
      effect: "Increases attack speed of Mecha Zerglings by 100%. Drains 1 Egonergy per attack.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 149,
      unit: "Mecha Baneling",
      commander: "Stetmann",
      name: "Anti-Centripetal Rocket Servos",
      icon: "anticentripetalrocketservos",
      effect: "Increases the movement speed of Mecha Banelings by 15% and allows them to leap onto enemy units.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.15,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 150,
      unit: "Mecha Hydralisk",
      commander: "Stetmann",
      name: "Hydra-lic Augments",
      icon: "hydralicaugments",
      effect: "Increases the movement speed of Mecha Hydralisks by 50%.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 151,
      unit: "Mecha Hydralisk",
      commander: "Stetmann",
      name: "Tyr-Class Targeting System",
      icon: "tyrclasstargetingsystem",
      effect: "Increases the Mecha Hydralisks anti-air weapon range by 3.",
      modifier: "Range",
      modifiermode: "(Erudition Missiles)",
      modifiertag: null,
      value: 3,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 152,
      unit: "Bunker",
      commander: "Raynor",
      name: "Structure Armor",
      icon: "structurearmor",
      effect: "Upgrades the armor of structures by 2.",
      modifier: "Armor",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 153,
      unit: "Hydralisk",
      commander: "Kerrigan",
      name: "Frenzy",
      icon: "frenzy",
      effect: "Increases the attack speed of Hydralisks by 50% for 15 seconds.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 154,
      unit: "Aegis Guard",
      commander: "Mengsk",
      name: "High-Grade Stimpacks",
      icon: "highgradestimpacks",
      rank: 3,
      effect: "Increases attack speed by 200% for 10 seconds.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 3,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 155,
      unit: "Shock Division",
      commander: "Mengsk",
      name: "2",
      icon: "veterancy",
      effect: "Increases vision and attack range by 2 in Siege Mode.",
      modifier: "Range",
      modifiermode: "(Siege Mode)",
      modifiertag: null,
      value: 2,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 156,
      unit: "Blackhammer",
      commander: "Mengsk",
      name: "2",
      icon: "veterancy",
      effect: "Increases the range of Overwatch Mode by 2.",
      modifier: "Range",
      modifiermode: "(Overwatch Mode)",
      modifiertag: null,
      value: 2,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 157,
      unit: "Blackhammer",
      commander: "Mengsk",
      name: "3",
      icon: "veterancy",
      effect: "Increases attack speed in Overwatch Mode by 33%.",
      modifier: "Attack_Speed",
      modifiermode: "(Overwatch Mode)",
      modifiertag: null,
      value: 1.33,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 158,
      unit: "Sky Fury",
      commander: "Mengsk",
      name: "Aesir Turbines",
      icon: "aesirturbines",
      effect: "Increases the movement speed of Sky Furies by 55%.",
      modifier: "Move_Speed",
      modifiermode: "(Fighter Mode)",
      modifiertag: null,
      value: 1.5,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 159,
      unit: "Imperial Intercessor",
      commander: "Mengsk",
      name: "Ignite Afterburners",
      icon: "igniteafterburners",
      effect: "Increases this units movement speed by 70% for 8 seconds.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.7,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 160,
      unit: "Earthsplitter Ordnance",
      commander: "Mengsk",
      name: "Neosteel Fortified Armor",
      icon: "neosteelfortifiedarmor",
      effect: "Increases the life (+200HP) and armor (+2) of Supply Bunkers, Missile Turrets, and Earthsplitter Ordnance.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 200,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 161,
      unit: "Earthsplitter Ordnance",
      commander: "Mengsk",
      name: "Neosteel Fortified Armor",
      icon: "neosteelfortifiedarmor",
      effect: "Increases the life (+200HP) and armor (+2) of Supply Bunkers, Missile Turrets, and Earthsplitter Ordnance.",
      modifier: "Armor",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 162,
      unit: "Missile Turret",
      commander: "Mengsk",
      name: "Neosteel Fortified Armor",
      icon: "neosteelfortifiedarmor",
      effect: "Increases the life (+200HP) and armor (+2) of Supply Bunkers, Missile Turrets, and Earthsplitter Ordnance.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 200,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 163,
      unit: "Missile Turret",
      commander: "Mengsk",
      name: "Neosteel Fortified Armor",
      icon: "neosteelfortifiedarmor",
      effect: "Increases the life (+200HP) and armor (+2) of Supply Bunkers, Missile Turrets, and Earthsplitter Ordnance.",
      modifier: "Armor",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 164,
      unit: "Earthsplitter Ordnance",
      commander: "Mengsk",
      name: "Hemispheric Accelerants",
      icon: "hemisphericaccelerants",
      effect: "Increases the range of the Earthsplitter Ordnanace's Bombardment ability by +25.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 25,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 165,
      unit: "Imperial Intercessor",
      commander: "Mengsk",
      name: "Scatter Veil",
      icon: "scatterveil",
      effect: "Allows Imperial Intercessors to permanently cloak and provides them with a shield that absorbs 100 damage.",
      modifier: "Shields",
      modifiermode: null,
      modifiertag: null,
      value: 100,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 166,
      unit: "Mecha Overlord",
      commander: "Stetmann",
      name: "Pneumatized Fuselage",
      icon: "pneumatizedfuselage",
      effect: "Increases the movement speed of Mecha Overlords and Mecha Overseers.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 3.38,
      operation: "set",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 167,
      unit: "Mecha Overseer",
      commander: "Stetmann",
      name: "Pneumatized Fuselage",
      icon: "pneumatizedfuselage",
      effect: "Increases the movement speed of Mecha Overlords and Mecha Overseers.",
      modifier: "Move_Speed",
      modifiermode: "(Normal)",
      modifiertag: null,
      value: 3.38,
      operation: "set",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 168,
      unit: "Brood Lord",
      commander: "Kerrigan",
      name: "Porous Cartilage",
      icon: "porouscartilage",
      effect: "Increases Brood Lord movement speed by 75% and life by 100.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 100,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 169,
      unit: "Wrathwalker",
      commander: "Alarak",
      name: "Rapid Power Cycling",
      icon: "rapidpowercycling",
      effect: "Reduces the charging time and the weapon speed of the Wrathwalker's Charged Blast.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 170,
      unit: "Hellbat",
      commander: "Horner",
      name: "Wildfire Explosives",
      icon: "wildfireexplosives",
      effect: "Hellbat movement speed is increased by 50%. When Hellbats are killed, they ignite the surrounding area. Enemies in the fire run around in fear for 3 seconds.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 171,
      unit: "Missile Turret",
      commander: "Raynor",
      name: "Structure Armor",
      icon: "structurearmor",
      effect: "Upgrades the armor of structures by 2.",
      modifier: "Armor",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 172,
      unit: "Missile Turret",
      commander: "Nova",
      name: "Structure Armor",
      icon: "structurearmor",
      effect: "Upgrades the armor of structures by 2.",
      modifier: "Armor",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 173,
      unit: "Colossus",
      commander: "Karax",
      name: "Fire Beam",
      icon: "firebeam",
      effect: "Upgrades the damage dealt by Colossi and causes their attacks to set fire to the ground, dealing an additional 150 damage to enemy ground units in the area over 5 seconds.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: null,
      value: 5,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 175,
      unit: "Kev Rattlesnake West",
      commander: "Tychus",
      name: "Secret Stash Stimpack",
      icon: "secretstashstimpack",
      effect: "Heals Rattlesnake for 2 life per second and increases his attack and movement speed for 15 seconds.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 176,
      unit: "Kev Rattlesnake West",
      commander: "Tychus",
      name: "Secret Stash Stimpack",
      icon: "secretstashstimpack",
      effect: "Heals Rattlesnake for 2 life per second and increases his attack and movement speed for 15 seconds.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.47,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 178,
      unit: "Explosive Creeper",
      commander: "Dehaka",
      name: "Aerial Burst Sacs",
      icon: "aerialburstsacs",
      effect: "Allows the Creeper Hosts Creepers to target air units and increases their movement speed.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 0.75,
      operation: "add",
      upgradetype: "preupgrade"
    },
    {
      upgradeid: 179,
      unit: "Zealot",
      commander: "Artanis",
      name: "Charge",
      icon: "charge",
      effect: "Allows Zealots to intercept nearby enemies. Also increases the movement speed of Zealots.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 0.25,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 180,
      unit: "Centurion",
      commander: "Vorazun",
      name: "Shadow Charge",
      icon: "shadowcharge",
      effect: "Allows Centurions to intercept nearby enemies. Also increases their movement speed.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 0.25,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 181,
      unit: "Sentinel",
      commander: "Karax",
      name: "Charge",
      icon: "charge",
      effect: "Allows Sentinels to intercept nearby enemies. Also increases the movement speed of Sentinels.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 0.25,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 182,
      unit: "Legionnaire",
      commander: "Fenix",
      name: "Charge",
      icon: "charge",
      effect: "Allows Legionnaires to intercept nearby enemies. Also increases the movement speed of Legionnaires.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 0.25,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 183,
      unit: "Carrier",
      commander: "Karax",
      name: "Graviton Warp Catapult",
      icon: "gravitonwarpcatapult",
      effect: "Makes the Carrier launch Interceptors more quickly and increases Interceptor attack speed by 25%.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 2.25,
      operation: "set",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 184,
      unit: "Primal Mutalisk",
      commander: "Dehaka",
      name: "Slicing Glaive",
      icon: "slicingglaive",
      effect: "Primal Mutalisks deal 100% increased damage against air units.",
      modifier: "damage",
      modifiermode: "(Air)",
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 186,
      unit: "Sovereign Battlecruiser",
      commander: "Horner",
      name: "Overcharged Reactor",
      icon: "overchargedreactor",
      effect: "Battlecruiser weapons systems are upgraded to a powerful particle cannon that deals 200 damage per attack.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: null,
      value: 200,
      operation: "set",
      upgradetype: "preupgrade"
    },
    {
      upgradeid: 187,
      unit: "Sovereign Battlecruiser",
      commander: "Horner",
      name: "Overcharged Reactor",
      icon: "overchargedreactor",
      effect: "Battlecruiser weapons systems are upgraded to a powerful particle cannon that deals 200 damage per attack.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "set",
      upgradetype: "preupgrade"
    },
    {
      upgradeid: 188,
      unit: "Sovereign Battlecruiser",
      commander: "Horner",
      name: "Overcharged Reactor",
      icon: "overchargedreactor",
      effect: "Battlecruiser weapons systems are upgraded to a powerful particle cannon that deals 200 damage per attack.",
      modifier: "attackbonus",
      modifiermode: null,
      modifiertag: null,
      value: 20,
      operation: "set",
      upgradetype: "preupgrade"
    },
    {
      upgradeid: 189,
      unit: "Explosive Creeper",
      commander: "Dehaka",
      name: "Aerial Burst Sacs",
      icon: "aerialburstsacs",
      effect: "Allows the Creeper Hosts Creepers to target air units and increases their movement speed.",
      modifier: "damage",
      modifiermode: "(Air)",
      modifiertag: null,
      value: 110,
      operation: "set",
      upgradetype: "preupgrade"
    },
    {
      upgradeid: 192,
      unit: "Explosive Creeper",
      commander: "Dehaka",
      name: "Aerial Burst Sacs",
      icon: "aerialburstsacs",
      effect: "Allows the Creeper Hosts Creepers to target air units and increases their movement speed.",
      modifier: "attackbonus",
      modifiermode: "(Air)",
      modifiertag: null,
      value: 5,
      operation: "set",
      upgradetype: "preupgrade"
    },
    {
      upgradeid: 193,
      unit: "Volatile Infested",
      commander: "Stukov",
      name: "Acidic Enzymes",
      icon: "acidicenzymes",
      effect: "Infested Siege Tanks deal an additional +15 damage to armored units and structures in both modes.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: "Structure",
      value: 15,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 194,
      unit: "Infested Siege Tank",
      commander: "Stukov",
      name: "Acidic Enzymes",
      icon: "acidicenzymes",
      effect: "Infested Siege Tanks deal an additional +15 damage to armored units and structures in both modes.",
      modifier: "damage",
      modifiermode: "(Rooted)",
      modifiertag: "Structure",
      value: 15,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 195,
      unit: "Sky Fury",
      commander: "Mengsk",
      name: "1",
      icon: "veterancy",
      effect: "Deals bonus damage to Massive targets.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: "Massive",
      value: 50,
      operation: "add",
      upgradetype: "preupgrade"
    },
    {
      upgradeid: 196,
      unit: "Wraith",
      commander: "Swann",
      name: "Displacement Field",
      icon: "displacementfield",
      effect: "Wraiths move 20% faster and evade 20% of incoming attacks while cloaked.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 197,
      unit: "Railgun Turret",
      commander: "Nova",
      name: "Structure Armor",
      icon: "structurearmor",
      effect: "Upgrades the armor of structures by 2.",
      modifier: "Armor",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 198,
      unit: "Vulture",
      commander: "Raynor",
      name: "Afterburners",
      icon: "afterburners",
      effect: "Vehicles and ships gain afterburners that increase the units movement speed by 100% for 8 seconds upon activation.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 199,
      unit: "Siege Tank",
      commander: "Raynor",
      name: "Afterburners",
      icon: "afterburners",
      effect: "Vehicles and ships gain afterburners that increase the units movement speed by 100% for 8 seconds upon activation.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 200,
      unit: "Viking",
      commander: "Raynor",
      name: "Afterburners",
      icon: "afterburners",
      effect: "Vehicles and ships gain afterburners that increase the units movement speed by 100% for 8 seconds upon activation.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 201,
      unit: "Banshee",
      commander: "Raynor",
      name: "Afterburners",
      icon: "afterburners",
      effect: "Vehicles and ships gain afterburners that increase the units movement speed by 100% for 8 seconds upon activation.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 202,
      unit: "Battlecruiser",
      commander: "Raynor",
      name: "Afterburners",
      icon: "afterburners",
      effect: "Vehicles and ships gain afterburners that increase the units movement speed by 100% for 8 seconds upon activation.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 203,
      unit: "Ravasaur",
      commander: "Dehaka",
      name: "Gene Mutation Adrenal Glands",
      icon: "adrenalglands",
      effect: "This unit attacks 20% faster.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 204,
      unit: "Ravasaur",
      commander: "Dehaka",
      name: "Gene Mutation Carapace",
      icon: "carapace",
      effect: "This unit has 50% more life.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 1.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 205,
      unit: "Primal Igniter",
      commander: "Dehaka",
      name: "Gene Mutation Adrenal Glands",
      icon: "adrenalglands",
      effect: "This unit attacks 20% faster.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 206,
      unit: "Primal Igniter",
      commander: "Dehaka",
      name: "Gene Mutation Carapace",
      icon: "carapace",
      effect: "This unit has 50% more life.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 1.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 207,
      unit: "Primal Guardian",
      commander: "Dehaka",
      name: "Gene Mutation Adrenal Glands",
      icon: "adrenalglands",
      effect: "This unit attacks 20% faster.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 208,
      unit: "Primal Guardian",
      commander: "Dehaka",
      name: "Gene Mutation Carapace",
      icon: "carapace",
      effect: "This unit has 50% more life.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 1.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 209,
      unit: "Primal Mutalisk",
      commander: "Dehaka",
      name: "Gene Mutation Adrenal Glands",
      icon: "adrenalglands",
      effect: "This unit attacks 20% faster.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 210,
      unit: "Primal Mutalisk",
      commander: "Dehaka",
      name: "Gene Mutation Carapace",
      icon: "carapace",
      effect: "This unit has 50% more life.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 1.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 211,
      unit: "Impaler",
      commander: "Dehaka",
      name: "Gene Mutation Adrenal Glands",
      icon: "adrenalglands",
      effect: "This unit attacks 20% faster.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 212,
      unit: "Impaler",
      commander: "Dehaka",
      name: "Gene Mutation Carapace",
      icon: "carapace",
      effect: "This unit has 50% more life.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 1.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 213,
      unit: "Tyrannozor",
      commander: "Dehaka",
      name: "Gene Mutation Adrenal Glands",
      icon: "adrenalglands",
      effect: "This unit attacks 20% faster.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 214,
      unit: "Tyrannozor",
      commander: "Dehaka",
      name: "Gene Mutation Carapace",
      icon: "carapace",
      effect: "This unit has 50% more life.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 1.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 215,
      unit: "Creeper Host",
      commander: "Dehaka",
      name: "Gene Mutation Carapace",
      icon: "carapace",
      effect: "This unit has 50% more life.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 1.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 216,
      unit: "Roach",
      commander: "Abathur",
      name: "Maximum Biomass",
      icon: "biomass",
      effect: "Gets 300% Life, 100% Attack Speed, +5 Armor, 100% Biotic Leech.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 4,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 217,
      unit: "Roach",
      commander: "Abathur",
      name: "Maximum Biomass",
      icon: "biomass",
      effect: "Gets 300% Life, 100% Attack Speed, +5 Armor, 100% Biotic Leech.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 218,
      unit: "Roach",
      commander: "Abathur",
      name: "Maximum Biomass",
      icon: "biomass",
      effect: "Gets 300% Life, 100% Attack Speed, +5 Armor, 100% Biotic Leech.",
      modifier: "Armor",
      modifiermode: null,
      modifiertag: null,
      value: 5,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 219,
      unit: "Ravager",
      commander: "Abathur",
      name: "Maximum Biomass",
      icon: "biomass",
      effect: "Gets 300% Life, 100% Attack Speed, 100% Biotic Leech, 50% Corrosive Bile Cooldown.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 4,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 220,
      unit: "Ravager",
      commander: "Abathur",
      name: "Maximum Biomass",
      icon: "biomass",
      effect: "Gets 300% Life, 100% Attack Speed, 100% Biotic Leech, 50% Corrosive Bile Cooldown.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 221,
      unit: "Swarm Host",
      commander: "Abathur",
      name: "Maximum Biomass",
      icon: "biomass",
      effect: "Gets 300% Life, 50% Spawn Locusts Cooldown.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 4,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 222,
      unit: "Locust",
      commander: "Abathur",
      name: "Maximum Biomass",
      icon: "biomass",
      effect: "Gets 300% Life, 100% Attack Speed, 100% Biotic Leech.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 4,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 223,
      unit: "Locust",
      commander: "Abathur",
      name: "Maximum Biomass",
      icon: "biomass",
      effect: "Gets 300% Life, 100% Attack Speed, 100% Biotic Leech.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 224,
      unit: "Mutalisk",
      commander: "Abathur",
      name: "Maximum Biomass",
      icon: "biomass",
      effect: "Gets 300% Life, 100% Attack Speed, 100% Biotic Leech.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 4,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 225,
      unit: "Mutalisk",
      commander: "Abathur",
      name: "Maximum Biomass",
      icon: "biomass",
      effect: "Gets 300% Life, 100% Attack Speed, 100% Biotic Leech.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 226,
      unit: "Guardian",
      commander: "Abathur",
      name: "Maximum Biomass",
      icon: "biomass",
      effect: "Gets 300% Life, 100% Attack Speed, 100% Biotic Leech.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 4,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 227,
      unit: "Guardian",
      commander: "Abathur",
      name: "Maximum Biomass",
      icon: "biomass",
      effect: "Gets 300% Life, 100% Attack Speed, 100% Biotic Leech.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 228,
      unit: "Devourer",
      commander: "Abathur",
      name: "Maximum Biomass",
      icon: "biomass",
      effect: "Gets 300% Life, 100% Attack Speed, 100% Biotic Leech.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 4,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 229,
      unit: "Devourer",
      commander: "Abathur",
      name: "Maximum Biomass",
      icon: "biomass",
      effect: "Gets 300% Life, 100% Attack Speed, 100% Biotic Leech.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 230,
      unit: "Viper",
      commander: "Abathur",
      name: "Maximum Biomass",
      icon: "biomass",
      effect: "Gets 300% Life, 100% Attack Speed, 100% Biotic Leech, 500% Energy Regeneration.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 4,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 231,
      unit: "Viper",
      commander: "Abathur",
      name: "Maximum Biomass",
      icon: "biomass",
      effect: "Gets 300% Life, 100% Attack Speed, 100% Biotic Leech, 500% Energy Regeneration.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 232,
      unit: "Swarm Queen",
      commander: "Abathur",
      name: "Maximum Biomass",
      icon: "biomass",
      effect: "Gets 300% Life, 100% Attack Speed, 100% Biotic Leech, 500% Energy Regeneration.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 4,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 233,
      unit: "Swarm Queen",
      commander: "Abathur",
      name: "Maximum Biomass",
      icon: "biomass",
      effect: "Gets 300% Life, 100% Attack Speed, 100% Biotic Leech, 500% Energy Regeneration.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 234,
      unit: "Super Gary",
      commander: "Stetmann",
      name: "The Best Oil",
      icon: "thebestoil",
      effect: "When Super Gary absorbs a Mecha Remnant, he gains 10% increased attack speed and regenerates an additional 1 life per second for 30 seconds. Can stack up to 20 times. Passive Ability.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 3,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 235,
      unit: "Primal Guardian",
      commander: "Dehaka",
      name: "Primordial Fury",
      icon: "primordialfury",
      effect: "Primal Guardian attacks temporarily increases its attack speed by 10%. Can stack up to 50% increased attack speed.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 236,
      unit: "Kerrigan",
      commander: "Kerrigan",
      name: "Fury",
      icon: "fury",
      effect: "Kerrigans attack speed increases by 10% with each attack, up to a maximum of 50%.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 237,
      unit: "Kaldalis",
      commander: "Fenix",
      name: "Avenging Protocol",
      icon: "avengingprotocol",
      effect: "Champions gain attack and movement speed each time a host shell of their type is destroyed, or a 50% speed increase when they transfer into new host shell. Speed increases can stack up to 200% and last for 20 seconds if not refreshed. ",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 3,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 238,
      unit: "Kaldalis",
      commander: "Fenix",
      name: "Avenging Protocol",
      icon: "avengingprotocol",
      effect: "Champions gain attack and movement speed each time a host shell of their type is destroyed, or a 50% speed increase when they transfer into new host shell. Speed increases can stack up to 200% and last for 20 seconds if not refreshed. ",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 239,
      unit: "Talis",
      commander: "Fenix",
      name: "Avenging Protocol",
      icon: "avengingprotocol",
      effect: "Champions gain attack and movement speed each time a host shell of their type is destroyed, or a 50% speed increase when they transfer into new host shell. Speed increases can stack up to 200% and last for 20 seconds if not refreshed. ",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 3,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 240,
      unit: "Talis",
      commander: "Fenix",
      name: "Avenging Protocol",
      icon: "avengingprotocol",
      effect: "Champions gain attack and movement speed each time a host shell of their type is destroyed, or a 50% speed increase when they transfer into new host shell. Speed increases can stack up to 200% and last for 20 seconds if not refreshed. ",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 241,
      unit: "Taldarin",
      commander: "Fenix",
      name: "Avenging Protocol",
      icon: "avengingprotocol",
      effect: "Champions gain attack and movement speed each time a host shell of their type is destroyed, or a 50% speed increase when they transfer into new host shell. Speed increases can stack up to 200% and last for 20 seconds if not refreshed. ",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 3,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 242,
      unit: "Taldarin",
      commander: "Fenix",
      name: "Avenging Protocol",
      icon: "avengingprotocol",
      effect: "Champions gain attack and movement speed each time a host shell of their type is destroyed, or a 50% speed increase when they transfer into new host shell. Speed increases can stack up to 200% and last for 20 seconds if not refreshed. ",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 243,
      unit: "Warbringer",
      commander: "Fenix",
      name: "Avenging Protocol",
      icon: "avengingprotocol",
      effect: "Champions gain attack and movement speed each time a host shell of their type is destroyed, or a 50% speed increase when they transfer into new host shell. Speed increases can stack up to 200% and last for 20 seconds if not refreshed. ",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 3,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 244,
      unit: "Warbringer",
      commander: "Fenix",
      name: "Avenging Protocol",
      icon: "avengingprotocol",
      effect: "Champions gain attack and movement speed each time a host shell of their type is destroyed, or a 50% speed increase when they transfer into new host shell. Speed increases can stack up to 200% and last for 20 seconds if not refreshed. ",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 245,
      unit: "Mojo",
      commander: "Fenix",
      name: "Avenging Protocol",
      icon: "avengingprotocol",
      effect: "Champions gain attack and movement speed each time a host shell of their type is destroyed, or a 50% speed increase when they transfer into new host shell. Speed increases can stack up to 200% and last for 20 seconds if not refreshed. ",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 3,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 246,
      unit: "Mojo",
      commander: "Fenix",
      name: "Avenging Protocol",
      icon: "avengingprotocol",
      effect: "Champions gain attack and movement speed each time a host shell of their type is destroyed, or a 50% speed increase when they transfer into new host shell. Speed increases can stack up to 200% and last for 20 seconds if not refreshed. ",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 247,
      unit: "Clolarion",
      commander: "Fenix",
      name: "Avenging Protocol",
      icon: "avengingprotocol",
      effect: "Champions gain attack and movement speed each time a host shell of their type is destroyed, or a 50% speed increase when they transfer into new host shell. Speed increases can stack up to 200% and last for 20 seconds if not refreshed. ",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 3,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 248,
      unit: "Clolarion",
      commander: "Fenix",
      name: "Avenging Protocol",
      icon: "avengingprotocol",
      effect: "Champions gain attack and movement speed each time a host shell of their type is destroyed, or a 50% speed increase when they transfer into new host shell. Speed increases can stack up to 200% and last for 20 seconds if not refreshed. ",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 250,
      unit: "Swarm Host",
      commander: "Abathur",
      name: "Maximum Biomass",
      icon: "biomass",
      effect: "Gets 300% Life, 50% Spawn Locusts Cooldown.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 251,
      unit: "Rob Cannonball Boswell",
      commander: "Tychus",
      name: "Redline Power Cells",
      icon: "redlinepowercells",
      effect: "Increases Cannonballs attack speed by 3% with each attack, up to a maximum of 60%. Increases his attack damage by 3 with each attack, up to a maximum of 60.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.8,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 253,
      unit: "Tychus Findlay",
      commander: "Tychus",
      name: "SureShot Networked Helm",
      icon: "sureshotnetworkedhelm",
      effect: "Increases Tychus weapon damage by 20% for each Outlaw in his immediate vicinity.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: null,
      value: 1.8,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 254,
      unit: "Siege Tank",
      commander: "Raynor",
      name: "Advanced Siege Tech",
      icon: "advancedsiegetech",
      effect: "Reduces the transformation time of Siege Tanks by 50%. Siege Tanks gain +3 armor in Siege Mode.",
      modifier: "Armor",
      modifiermode: "(Siege Mode)",
      modifiertag: null,
      value: 3,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 255,
      unit: "Nova",
      commander: "Nova",
      name: "Stance Dance",
      icon: "stancedance",
      effect: "Switching to Stealth Mode grants temporary invulnerability and switching to Assault Mode grants a temporary bonus to damage dealt.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 256,
      unit: "Roach",
      commander: "Abathur",
      name: "Adaptive Plating",
      icon: "adaptiveplating",
      effect: "Roach gains +6 armor when life is under 50%.",
      modifier: "Armor",
      modifiermode: null,
      modifiertag: null,
      value: 6,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 257,
      unit: "Sky Fury",
      commander: "Mengsk",
      name: "Tactical Realignment",
      icon: "tacticalrealignment",
      rank: 2,
      effect: "After transforming, this unit gains 50% increased attack damage for 5 seconds. Cannot occur more than once every 15 seconds.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: null,
      value: 1.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 258,
      unit: "Ascendant",
      commander: "Alarak",
      name: "Power Overwhelming",
      icon: "poweroverwhelming",
      effect: "Ascendants permanently gain +25% ability damage and +100 shields each time they use Sacrifice. This effect stacks up to a maximum of 10.",
      modifier: "Shields",
      modifiermode: null,
      modifiertag: null,
      value: 1000,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 259,
      unit: "Nux",
      commander: "Tychus",
      name: "Flashforce GDM Visor",
      icon: "flashforcegdmvisor",
      effect: "Provides Vega, Nux, and Lt. Nikara with Detection, allowing them to see cloaked and burrowed enemy units.",
      modifier: "Vision",
      modifiermode: null,
      modifiertag: null,
      value: 0,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 260,
      unit: "Lt Layna Nikara",
      commander: "Tychus",
      name: "Flashforce GDM Visor",
      icon: "flashforcegdmvisor",
      effect: "Provides Vega, Nux, and Lt. Nikara with Detection, allowing them to see cloaked and burrowed enemy units.",
      modifier: "Vision",
      modifiermode: null,
      modifiertag: null,
      value: 0,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 261,
      unit: "Vega",
      commander: "Tychus",
      name: "Flashforce GDM Visor",
      icon: "flashforcegdmvisor",
      effect: "Provides Vega, Nux, and Lt. Nikara with Detection, allowing them to see cloaked and burrowed enemy units.",
      modifier: "Vision",
      modifiermode: null,
      modifiertag: null,
      value: 0,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 262,
      unit: "Shock Division",
      commander: "Mengsk",
      name: "Armament Stabilizers",
      icon: "armamentstabilizers",
      effect: "Allows Shock Divisions in Siege Mode to fire at air units at a reduced rate while being carried by an Imperial Intercessor.",
      modifier: "Attack_Speed",
      modifiermode: "(Siege Mode)",
      modifiertag: null,
      value: 0.67,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 263,
      unit: "Covert Banshee",
      commander: "Nova",
      name: "Soldier of Fortune",
      icon: "soldieroffortune",
      effect: "Unit charges accrue 100% faster for the first production structure built. Unit charges accrue 50% slower for the second and third production structures built.",
      modifier: "time",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 264,
      unit: "Elite Marine",
      commander: "Nova",
      name: "Soldier of Fortune",
      icon: "soldieroffortune",
      effect: "Unit charges accrue 100% faster for the first production structure built. Unit charges accrue 50% slower for the second and third production structures built.",
      modifier: "time",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 265,
      unit: "Heavy Siege Tank",
      commander: "Nova",
      name: "Soldier of Fortune",
      icon: "soldieroffortune",
      effect: "Unit charges accrue 100% faster for the first production structure built. Unit charges accrue 50% slower for the second and third production structures built.",
      modifier: "time",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 266,
      unit: "Hellbat Ranger",
      commander: "Nova",
      name: "Soldier of Fortune",
      icon: "soldieroffortune",
      effect: "Unit charges accrue 100% faster for the first production structure built. Unit charges accrue 50% slower for the second and third production structures built.",
      modifier: "time",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 267,
      unit: "Hellion Ranger",
      commander: "Nova",
      name: "Soldier of Fortune",
      icon: "soldieroffortune",
      effect: "Unit charges accrue 100% faster for the first production structure built. Unit charges accrue 50% slower for the second and third production structures built.",
      modifier: "time",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 268,
      unit: "Marauder Commando",
      commander: "Nova",
      name: "Soldier of Fortune",
      icon: "soldieroffortune",
      effect: "Unit charges accrue 100% faster for the first production structure built. Unit charges accrue 50% slower for the second and third production structures built.",
      modifier: "time",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 269,
      unit: "Raid Liberator",
      commander: "Nova",
      name: "Soldier of Fortune",
      icon: "soldieroffortune",
      effect: "Unit charges accrue 100% faster for the first production structure built. Unit charges accrue 50% slower for the second and third production structures built.",
      modifier: "time",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 270,
      unit: "Raven Type II",
      commander: "Nova",
      name: "Soldier of Fortune",
      icon: "soldieroffortune",
      effect: "Unit charges accrue 100% faster for the first production structure built. Unit charges accrue 50% slower for the second and third production structures built.",
      modifier: "time",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 271,
      unit: "Spec Ops Ghost",
      commander: "Nova",
      name: "Soldier of Fortune",
      icon: "soldieroffortune",
      effect: "Unit charges accrue 100% faster for the first production structure built. Unit charges accrue 50% slower for the second and third production structures built.",
      modifier: "time",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 272,
      unit: "Strike Goliath",
      commander: "Nova",
      name: "Soldier of Fortune",
      icon: "soldieroffortune",
      effect: "Unit charges accrue 100% faster for the first production structure built. Unit charges accrue 50% slower for the second and third production structures built.",
      modifier: "time",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 273,
      unit: "Crooked Sam",
      commander: "Tychus",
      name: "First Ones on the House",
      icon: "firstonesonthehouse",
      effect: "Reduces the mineral and gas costs of Tychus first Outlaw by 50%. ",
      modifier: "mineralCost",
      modifiermode: null,
      modifiertag: null,
      value: 0.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 274,
      unit: "Crooked Sam",
      commander: "Tychus",
      name: "First Ones on the House",
      icon: "firstonesonthehouse",
      effect: "Reduces the mineral and gas costs of Tychus first Outlaw by 50%. ",
      modifier: "vespeneCost",
      modifiermode: null,
      modifiertag: null,
      value: 0.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 275,
      unit: "James Sirius Sykes",
      commander: "Tychus",
      name: "First Ones on the House",
      icon: "firstonesonthehouse",
      effect: "Reduces the mineral and gas costs of Tychus first Outlaw by 50%. ",
      modifier: "mineralCost",
      modifiermode: null,
      modifiertag: null,
      value: 0.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 276,
      unit: "James Sirius Sykes",
      commander: "Tychus",
      name: "First Ones on the House",
      icon: "firstonesonthehouse",
      effect: "Reduces the mineral and gas costs of Tychus first Outlaw by 50%. ",
      modifier: "vespeneCost",
      modifiermode: null,
      modifiertag: null,
      value: 0.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 277,
      unit: "Miles Blaze Lewis",
      commander: "Tychus",
      name: "First Ones on the House",
      icon: "firstonesonthehouse",
      effect: "Reduces the mineral and gas costs of Tychus first Outlaw by 50%. ",
      modifier: "mineralCost",
      modifiermode: null,
      modifiertag: null,
      value: 0.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 278,
      unit: "Miles Blaze Lewis",
      commander: "Tychus",
      name: "First Ones on the House",
      icon: "firstonesonthehouse",
      effect: "Reduces the mineral and gas costs of Tychus first Outlaw by 50%. ",
      modifier: "vespeneCost",
      modifiermode: null,
      modifiertag: null,
      value: 0.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 279,
      unit: "Rob Cannonball Boswell",
      commander: "Tychus",
      name: "First Ones on the House",
      icon: "firstonesonthehouse",
      effect: "Reduces the mineral and gas costs of Tychus first Outlaw by 50%. ",
      modifier: "mineralCost",
      modifiermode: null,
      modifiertag: null,
      value: 0.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 280,
      unit: "Rob Cannonball Boswell",
      commander: "Tychus",
      name: "First Ones on the House",
      icon: "firstonesonthehouse",
      effect: "Reduces the mineral and gas costs of Tychus first Outlaw by 50%. ",
      modifier: "vespeneCost",
      modifiermode: null,
      modifiertag: null,
      value: 0.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 281,
      unit: "Vega",
      commander: "Tychus",
      name: "First Ones on the House",
      icon: "firstonesonthehouse",
      effect: "Reduces the mineral and gas costs of Tychus first Outlaw by 50%. ",
      modifier: "mineralCost",
      modifiermode: null,
      modifiertag: null,
      value: 0.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 282,
      unit: "Vega",
      commander: "Tychus",
      name: "First Ones on the House",
      icon: "firstonesonthehouse",
      effect: "Reduces the mineral and gas costs of Tychus first Outlaw by 50%. ",
      modifier: "vespeneCost",
      modifiermode: null,
      modifiertag: null,
      value: 0.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 283,
      unit: "Nux",
      commander: "Tychus",
      name: "First Ones on the House",
      icon: "firstonesonthehouse",
      effect: "Reduces the mineral and gas costs of Tychus first Outlaw by 50%. ",
      modifier: "mineralCost",
      modifiermode: null,
      modifiertag: null,
      value: 0.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 284,
      unit: "Nux",
      commander: "Tychus",
      name: "First Ones on the House",
      icon: "firstonesonthehouse",
      effect: "Reduces the mineral and gas costs of Tychus first Outlaw by 50%. ",
      modifier: "vespeneCost",
      modifiermode: null,
      modifiertag: null,
      value: 0.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 285,
      unit: "Lt Layna Nikara",
      commander: "Tychus",
      name: "First Ones on the House",
      icon: "firstonesonthehouse",
      effect: "Reduces the mineral and gas costs of Tychus first Outlaw by 50%. ",
      modifier: "mineralCost",
      modifiermode: null,
      modifiertag: null,
      value: 0.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 286,
      unit: "Lt Layna Nikara",
      commander: "Tychus",
      name: "First Ones on the House",
      icon: "firstonesonthehouse",
      effect: "Reduces the mineral and gas costs of Tychus first Outlaw by 50%. ",
      modifier: "vespeneCost",
      modifiermode: null,
      modifiertag: null,
      value: 0.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 287,
      unit: "Kev Rattlesnake West",
      commander: "Tychus",
      name: "First Ones on the House",
      icon: "firstonesonthehouse",
      effect: "Reduces the mineral and gas costs of Tychus first Outlaw by 50%. ",
      modifier: "mineralCost",
      modifiermode: null,
      modifiertag: null,
      value: 0.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 288,
      unit: "Kev Rattlesnake West",
      commander: "Tychus",
      name: "First Ones on the House",
      icon: "firstonesonthehouse",
      effect: "Reduces the mineral and gas costs of Tychus first Outlaw by 50%. ",
      modifier: "vespeneCost",
      modifiermode: null,
      modifiertag: null,
      value: 0.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 289,
      unit: "Brutalisk",
      commander: "Abathur",
      name: "Symbiote",
      icon: "symbiote",
      effect: "Gains a Symbiote that attacks nearby enemies and provides a shell.",
      modifier: "Shields",
      modifiermode: null,
      modifiertag: null,
      value: 200,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 290,
      unit: "Leviathan",
      commander: "Abathur",
      name: "Symbiote",
      icon: "symbiote",
      effect: "Gains a Symbiote that attacks nearby enemies and provides a shell.",
      modifier: "Shields",
      modifiermode: null,
      modifiertag: null,
      value: 200,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 291,
      unit: "Nova",
      commander: "Nova",
      name: "Blink",
      icon: "blink",
      effect: "Teleports Nova to a nearby location. Nova gains a temporary shield that absorbs up to 200 damage for 8 seconds.",
      modifier: "Shields",
      modifiermode: null,
      modifiertag: null,
      value: 200,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 292,
      unit: "Kerrigan",
      commander: "Kerrigan",
      name: "Mutating Carapace",
      icon: "mutatingcarapace",
      effect: "Kerrigan gains temporary life as she deals damage.",
      modifier: "Shields",
      modifiermode: null,
      modifiertag: null,
      value: 200,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 293,
      unit: "Infested Liberator",
      commander: "Stukov",
      name: "Cloud Dispersal",
      icon: "clouddispersal",
      effect: "Infested Liberators instantly transform into a cloud of microscopic organisms while attacking, reducing the damage they take by 85%.",
      modifier: "Hits",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "set",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 294,
      unit: "Hellbat Ranger",
      commander: "Nova",
      name: "Jump Jet Assault",
      icon: "jumpjetassault",
      effect: "Launches the Hellbat Ranger toward nearby enemy ground units. Briefly stuns enemy units on impact and gains +4 armor.",
      modifier: "Armor",
      modifiermode: null,
      modifiertag: null,
      value: 4,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 295,
      unit: "Shock Division",
      commander: "Mengsk",
      name: "2",
      icon: "veterancy",
      effect: "Increases vision and attack range by 2 in Siege Mode.",
      modifier: "Vision",
      modifiermode: "(Siege Mode)",
      modifiertag: null,
      value: 2,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 296,
      unit: "Clolarion",
      commander: "Fenix",
      name: "Maximum Tactical Data Web",
      icon: "tacticaldataweb",
      effect: "Interdictor damage is increased by 3 for each networked Carrier (up to 10 damage).",
      modifier: "damage",
      modifiermode: "(Interdictor)",
      modifiertag: null,
      value: 10,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 298,
      unit: "Fenix Cybros Arbiter",
      commander: "Fenix",
      name: "Purifier Armaments",
      icon: "purifierarmaments",
      effect: "All Fenix Armor Suits gain +15 attack damage.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: null,
      value: 15,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 299,
      unit: "Fenix Solarite Dragoon",
      commander: "Fenix",
      name: "Purifier Armaments",
      icon: "purifierarmaments",
      effect: "All Fenix Armor Suits gain +15 attack damage.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: null,
      value: 15,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 300,
      unit: "Slayer",
      commander: "Alarak",
      name: "Phase Blink",
      icon: "phaseblink",
      effect: "Allows Slayers to teleport to a nearby target location. After using Phase Blink, the Slayer's next attack within 8 seconds will deal double damage.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 301,
      unit: "Baneling",
      commander: "Zagara",
      name: "Rupture",
      icon: "rupture",
      effect: "Increases Baneling blast radius by 50%.",
      modifier: "aoe",
      modifiermode: null,
      modifiertag: null,
      value: "Circular splash within radius 3.3. Corrosive Acid only increases damage to the primary target.",
      operation: "replace",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 302,
      unit: "Baneling Spawn",
      commander: "Zagara",
      name: "Rupture",
      icon: "rupture",
      effect: "Increases Baneling blast radius by 50%.",
      modifier: "aoe",
      modifiermode: null,
      modifiertag: null,
      value: "Circular splash within radius 3.3 of the Baneling Spawn on detonation. Corrosive Acid only increases damage to the primary target.",
      operation: "replace",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 303,
      unit: "Zagara",
      commander: "Zagara",
      name: "Medusa Blades",
      icon: "medusablades",
      effect: "Zagara's attacks fire additional projectiles at up to three nearby enemy units.",
      modifier: "aoe",
      modifiermode: null,
      modifiertag: null,
      value: "Fires at up to three additional enemies. With a primary target less than 3 away, searches a 90-degree cone of radius 5 in front of Zagara; otherwise, searches a circle of radius 3 around the primary target.",
      operation: "replace",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 304,
      unit: "Reaver",
      commander: "Artanis",
      name: "Solarite Payload",
      icon: "solaritepayload",
      effect: "Increases the splash radii of scarab explosions to 0.5, 1, 1.5, and 2.",
      modifier: "aoe",
      modifiermode: null,
      modifiertag: null,
      value: "Scarab explosion: full damage to the primary target; circular splash deals 80% within radius 0.5, 60% from 0.5 to 1, 50% from 1 to 1.5, and 25% from 1.5 to 2.",
      operation: "replace",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 305,
      unit: "Vanguard",
      commander: "Alarak",
      name: "Matter Dispersion",
      icon: "matterdispersion",
      effect: "Increases the splash radius of the Vanguard's attack by 50%.",
      modifier: "aoe",
      modifiermode: null,
      modifiertag: null,
      value: "Four projectiles land in a cross, 0.75 from the target. Each hits twice with circular splash of radius 1.8.",
      operation: "replace",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 306,
      unit: "Firebat",
      commander: "Raynor",
      name: "Incinerator Gauntlets",
      icon: "incineratorgauntlets",
      effect: "Widens the Firebat's damage radius by 40%.",
      modifier: "aoe",
      modifiermode: null,
      modifiertag: null,
      value: "Flames hit a line 1.68 wide in front of the Firebat. Ground enemies within weapon range (base 4, accounting for unit size) take full damage.",
      operation: "replace",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 307,
      unit: "Aegis Guard",
      commander: "Mengsk",
      name: "2",
      icon: "veterancy",
      effect: "Attacks create a cone of shrapnel, dealing 20% damage to enemies behind the target.",
      modifier: "aoe",
      modifiermode: null,
      modifiertag: null,
      value: "A 60-degree cone of shrapnel extending 3 behind the primary target deals 20% damage. Splash is based on the primary target's armor type and ignores secondary targets' armor.",
      operation: "replace",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 308,
      unit: "Shock Division",
      commander: "Mengsk",
      name: "3",
      icon: "veterancy",
      effect: "Increases the splash radius of attacks in Siege Mode by 40%.",
      modifier: "aoe",
      modifiermode: "(Siege Mode)",
      modifiertag: null,
      value: "Circular splash: 100% damage within radius 0.66, 50% from 0.66 to 1.09, and 25% from 1.09 to 1.75.",
      operation: "replace",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 309,
      unit: "Blackhammer",
      commander: "Mengsk",
      name: "1",
      icon: "veterancy",
      effect: "Increases the splash radius of Overwatch Mode by 50%.",
      modifier: "aoe",
      modifiermode: "(Overwatch Mode)",
      modifiertag: null,
      value: "Circular splash to air units within radius 0.75 of the target.",
      operation: "replace",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 310,
      unit: "XelNaga Abrogator",
      commander: "Zeratul",
      name: "Cluster Nova",
      icon: "clusternova",
      effect: "When Purification Nova explodes, it generates three smaller novas that damage enemy units in their paths.",
      modifier: "aoe",
      modifiermode: null,
      modifiertag: null,
      value: "Purification Nova deals full damage to ground enemies in a circle of radius 1.5, then releases three smaller novas. Each small nova deals 50 damage to ground enemies it contacts.",
      operation: "replace",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 311,
      unit: "Infested Liberator",
      commander: "Stukov",
      name: "Cloud Dispersal",
      icon: "clouddispersal",
      effect: "Infested Liberators instantly transform into a cloud of microscopic organisms while attacking, reducing the damage they take by 85%.",
      modifier: "aoe",
      modifiermode: null,
      modifiertag: null,
      value: "While the Liberator attacks in cloud form, its target deals damage over time to enemy air units in a circle of radius 1.5 around it as it moves. Viral Contamination only increases damage to the primary target.",
      operation: "replace",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 312,
      unit: "Roach",
      commander: "Abathur",
      name: "Tunneling Claws",
      icon: "tunnelingclaws",
      effect: "Enables Roaches to move while burrowed. Increases the life-regeneration rate of burrowed Roaches by 5.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 313,
      unit: "Ravager",
      commander: "Abathur",
      name: "Bloated Bile Ducts",
      icon: "bloatedbileducts",
      effect: "Ravager Corrosive Bile impact size is increased by 200%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 314,
      unit: "Ravager",
      commander: "Abathur",
      name: "Potent Bile",
      icon: "potentbile",
      effect: "Ravager Corrosive Bile damage is increased by 40.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 315,
      unit: "Swarm Host",
      commander: "Abathur",
      name: "Pressurized Glands",
      icon: "pressurizedglands",
      effect: "Locusts can attack both ground and air units.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 316,
      unit: "Locust",
      commander: "Abathur",
      name: "Pressurized Glands",
      icon: "pressurizedglands",
      effect: "Locusts can attack both ground and air units.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 317,
      unit: "Swarm Host",
      commander: "Abathur",
      name: "Deep Tunnel",
      icon: "deeptunnel",
      effect: "Allows Swarm Hosts to quickly burrow to any visible location on the map.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 318,
      unit: "Mutalisk",
      commander: "Abathur",
      name: "Rapid Regeneration",
      icon: "rapidregeneration",
      effect: "Mutalisks regenerate life quickly while out of combat.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 319,
      unit: "Mutalisk",
      commander: "Abathur",
      name: "Vicious Glave",
      icon: "viciousglave",
      effect: "The Mutalisk's attack bounces three additional times, hitting up to six targets. Bounces also travel farther.",
      modifier: "aoe",
      modifiermode: null,
      modifiertag: null,
      value: "Bounces to up to 5 additional enemies, within radius 4 of the previous target. Base bounce damage: 5, 3, 3, 1, 1; only the first two bounces gain 0.333 and 0.111 per weapon upgrade.",
      operation: "replace",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 320,
      unit: "Devourer",
      commander: "Abathur",
      name: "Corrosive Spray",
      icon: "corrosivespray",
      effect: "Devourer attacks will now deal area damage.",
      modifier: "aoe",
      modifiermode: null,
      modifiertag: null,
      value: "Circular splash around the target: full damage to air enemies within radius 1.5.",
      operation: "replace",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 321,
      unit: "Viper",
      commander: "Abathur",
      name: "Virulent Microbes",
      icon: "virulentmicrobes",
      effect: "All Viper abilities gain +4 cast range.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 322,
      unit: "Viper",
      commander: "Abathur",
      name: "Paralytic Barbs",
      icon: "paralyticbarbs",
      effect: "Viper Abduct stuns units for an additional 5 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 323,
      unit: "Swarm Queen",
      commander: "Abathur",
      name: "Bio-Mechanical Transfusion",
      icon: "biomechanicaltransfusion",
      effect: "Increases the healing of the Swarm Queen's Rapid Transfusion by 10 and allows it to heal mechanical units and structures.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 324,
      unit: "Swarm Queen",
      commander: "Abathur",
      name: "Incubation Chamber",
      icon: "incubationchamber",
      effect: "Allows Hatcheries, Lairs and Hives to birth two Swarm Queens simultaneously.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 325,
      unit: "Alarak",
      commander: "Alarak",
      name: "Imposing Presence",
      icon: "imposingpresence",
      effect: "Allows Alarak's attacks to stun enemy units for 2 seconds. Heroic units are slowed.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 326,
      unit: "Alarak",
      commander: "Alarak",
      name: "Telekinesis",
      icon: "telekinesis",
      effect: "Increases the knockback distance of Alarak's Destruction Wave by 100%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 327,
      unit: "Slayer",
      commander: "Alarak",
      name: "Phasing Armor",
      icon: "phasingarmor",
      effect: "Prevents Slayers from taking damage for 2 seconds after being attacked. Cannot occur more than once every 5 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 328,
      unit: "Havoc",
      commander: "Alarak",
      name: "Cloaking Module",
      icon: "cloakingmodule",
      effect: "Allows Havocs to remain permanently cloaked.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 329,
      unit: "Havoc",
      commander: "Alarak",
      name: "Bloodshard Resonance",
      icon: "bloodshardresonance",
      effect: "Increases the radius of the Havoc's Squad Sight and the range of Target Lock and Force Field.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 330,
      unit: "Havoc",
      commander: "Alarak",
      name: "Detect Weakness",
      icon: "detectweakness",
      effect: "Increases the damage bonus from the Havoc's Target Lock by an additional 15%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 331,
      unit: "Ascendant",
      commander: "Alarak",
      name: "Mind Blast",
      icon: "mindblast",
      effect: "Allows Ascendants to use Mind Blast, which deals 200 damage to target enemy unit. Can target ground and air units.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 332,
      unit: "Ascendant",
      commander: "Alarak",
      name: "Chaotic Attunement",
      icon: "chaoticattunement",
      effect: "Increases the travel distance of the Ascendant's Psionic Orb by 25%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 333,
      unit: "Wrathwalker",
      commander: "Alarak",
      name: "Aerial Tracking",
      icon: "aerialtracking",
      effect: "Allows Wrathwalkers to attack air units.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 334,
      unit: "Zealot",
      commander: "Artanis",
      name: "Whirlwind",
      icon: "whirlwind",
      effect: "Enables Zealots to use the Whirlwind ability. Whirlwind damages all nearby enemy units while active.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 335,
      unit: "High Templar",
      commander: "Artanis",
      name: "Psionic Storm",
      icon: "psionicstorm",
      effect: "Allows High Templar and Archons to summon a storm of psionic energy, causing heavy damage to all enemy units in the target area.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 336,
      unit: "High Templar",
      commander: "Artanis",
      name: "Khaydarin Amulet",
      icon: "khaydarinamulet",
      effect: "Increases the starting energy of High Templar and Archons by 150.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 337,
      unit: "High Templar",
      commander: "Artanis",
      name: "Plasma Surge",
      icon: "plasmasurge",
      effect: "The High Templar's Psionic Storm's radius is increased by 50%, range increased by 2, and restores 50 shields to friendly units in the target area.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 338,
      unit: "Archon",
      commander: "Artanis",
      name: "Psionic Storm",
      icon: "psionicstorm",
      effect: "Allows High Templar and Archons to summon a storm of psionic energy, causing heavy damage to all enemy units in the target area.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 339,
      unit: "Archon",
      commander: "Artanis",
      name: "Khaydarin Amulet",
      icon: "khaydarinamulet",
      effect: "Increases the starting energy of High Templar and Archons by 150.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 340,
      unit: "Archon",
      commander: "Artanis",
      name: "Plasma Surge",
      icon: "plasmasurge",
      effect: "The High Templar's Psionic Storm's radius is increased by 50%, range increased by 2, and restores 50 shields to friendly units in the target area.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 341,
      unit: "Immortal",
      commander: "Artanis",
      name: "Improved Barrier",
      icon: "improvedbarrier",
      effect: "Increases the amount of damage absorbed by the Immortal's Barrier by 100%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 342,
      unit: "Reaver",
      commander: "Artanis",
      name: "Scarab Housing",
      icon: "scarabhousing",
      effect: "Doubles the maximum number of Scarabs that Reavers can hold.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 343,
      unit: "Phoenix",
      commander: "Artanis",
      name: "Double Graviton Beam",
      icon: "doublegravitonbeam",
      effect: "Allows Phoenixes to cast Graviton Beam on two enemies at once.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 344,
      unit: "Tempest",
      commander: "Artanis",
      name: "Disintegration",
      icon: "disintegration",
      effect: "Enables Tempests to deal damage over time to an enemy unit or structure.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 345,
      unit: "Primal Guardian",
      commander: "Dehaka",
      name: "Explosive Spores",
      icon: "explosivespores",
      effect: "Unlocks Explosive Spores, an autocast ability that deals 50 damage to the target and nearby enemy ground units within radius 2. It has a 10-second cooldown. The regular attack remains single-target.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 346,
      unit: "Primal Mutalisk",
      commander: "Dehaka",
      name: "Shifting Carapace",
      icon: "shiftingcarapace",
      effect: "Primal Mutalisks take 50% less damage while moving.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 347,
      unit: "Primal Mutalisk",
      commander: "Dehaka",
      name: "Primal Reconstitution",
      icon: "primalreconstitution",
      effect: "Primal Mutalisks revive on death after a short time. Cannot occur more than once every 60 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 348,
      unit: "Impaler",
      commander: "Dehaka",
      name: "Tenderize",
      icon: "tenderize",
      effect: "Units hit by Impalers become tenderized. Tenderized units take 200 damage over 10 seconds. A tenderized unit Devoured by Dehaka will invoke 25% of the normal cooldown time.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 349,
      unit: "Creeper Host",
      commander: "Dehaka",
      name: "Aerial Burst Sacs",
      icon: "aerialburstsacs",
      effect: "Allows the Creeper Host's Creepers to target air units and increases their movement speed.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 350,
      unit: "Primal Ultralisk",
      commander: "Dehaka",
      name: "Brutal Charge",
      icon: "brutalcharge",
      effect: "Primal Ultralisks can charge to a target location, knocking back units in the area and dealing 25 damage.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 351,
      unit: "Primal Ultralisk",
      commander: "Dehaka",
      name: "Healing Adaptation",
      icon: "healingadaptation",
      effect: "Primal Ultralisks and Tyrannozors regenerate life quickly when out of combat (10HP/s).",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 352,
      unit: "Primal Ultralisk",
      commander: "Dehaka",
      name: "Impaling Strike",
      icon: "impalingstrike",
      effect: "Primal Ultralisk and Tyrannozor melee attacks have a 20% chance to stun for 2 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 353,
      unit: "Tyrannozor",
      commander: "Dehaka",
      name: "Impaling Strike",
      icon: "impalingstrike",
      effect: "Primal Ultralisk and Tyrannozor melee attacks have a 20% chance to stun for 2 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 354,
      unit: "Tyrannozor",
      commander: "Dehaka",
      name: "Barrage of Spikes",
      icon: "barrageofspikes",
      effect: "Tyrannozors can unleash a Barrage of Spikes, dealing 100 damage to nearby enemy ground and air units.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 355,
      unit: "Tyrannozor",
      commander: "Dehaka",
      name: "Healing Adaptation",
      icon: "healingadaptation",
      effect: "Primal Ultralisks and Tyrannozors regenerate life quickly when out of combat (10HP/s).",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 356,
      unit: "Tyrannozor",
      commander: "Dehaka",
      name: "Tyrant's Protection",
      icon: "tyrantsprotection",
      effect: "Tyrannozors grants nearby friendly units 2 armor.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 357,
      unit: "Fenix Cybros Arbiter",
      commander: "Fenix",
      name: "Observation Protocol",
      icon: "observationprotocol",
      effect: "Grants Fenix's Cybros Arbiter Suit detection, allowing him to detect cloaked enemies.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 358,
      unit: "Fenix Praetor Armor",
      commander: "Fenix",
      name: "A Strong Heart",
      icon: "astrongheart",
      effect: '"I no longer wish to be called by the name Fenix.". Renames "Fenix" to "Talandar". Purely aesthetic.',
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 359,
      unit: "Fenix Solarite Dragoon",
      commander: "Fenix",
      name: "A Strong Heart",
      icon: "astrongheart",
      effect: '"I no longer wish to be called by the name Fenix.". Renames "Fenix" to "Talandar". Purely aesthetic.',
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 360,
      unit: "Fenix Cybros Arbiter",
      commander: "Fenix",
      name: "A Strong Heart",
      icon: "astrongheart",
      effect: '"I no longer wish to be called by the name Fenix.". Renames "Fenix" to "Talandar". Purely aesthetic.',
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 361,
      unit: "Adept",
      commander: "Fenix",
      name: "Psionic Projection",
      icon: "psionicprojection",
      effect: "Attacks summon an invulnerable Shade that will attack enemies for a short time for 33% damage per shot, 3 shots total.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 362,
      unit: "Conservator",
      commander: "Fenix",
      name: "Optimized Emitters",
      icon: "optimizedemitters",
      effect: "Increases the duration of the Conservator's Protective Field by 100%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 363,
      unit: "Disruptor",
      commander: "Fenix",
      name: "Cloaking Module",
      icon: "cloakingmodule",
      effect: "Permanently cloaks all Disruptors.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 364,
      unit: "Disruptor",
      commander: "Fenix",
      name: "Purification Echo",
      icon: "purificationecho",
      effect: "The Disruptor's Purification Nova explodes again after 2 seconds, dealing 75 damage in a larger area.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 365,
      unit: "Carrier",
      commander: "Fenix",
      name: "Graviton Catapult",
      icon: "gravitoncatapult",
      effect: "Makes the Carrier launch Interceptors more quickly by 100%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 366,
      unit: "Kaldalis",
      commander: "Fenix",
      name: "Empowered Blades",
      icon: "empoweredblades",
      effect: "Kaldalis' attacks deal area damage.",
      modifier: "aoe",
      modifiermode: null,
      modifiertag: null,
      value: "Adds cleave in a 180-degree arc of radius 1.25 at the primary target. Cleave deals 9 base damage per hit, plus 1 per weapon upgrade; Tactical Data Web also increases cleave damage.",
      operation: "replace",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 367,
      unit: "Talis",
      commander: "Fenix",
      name: "Debilitation System",
      icon: "debilitationsystem",
      effect: "Talis' Ricochet Glaive bounces 5 additional times and causes every unit hit by Ricochet Glaive to take 5 additional damage for 5 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 368,
      unit: "Taldarin",
      commander: "Fenix",
      name: "Gravimetric Overload",
      icon: "gravimetricoverload",
      effect: "Taldarin's attacks store 25% of the damage dealt on the target. When that unit is killed, it explodes, dealing all of the stored damage to nearby enemy units.",
      modifier: "aoe",
      modifiermode: null,
      modifiertag: null,
      value: "Attacks store 25% of their damage on the target. When it dies, it releases that damage in a circular explosion with base radius 1, extended to account for unit size.",
      operation: "replace",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 369,
      unit: "Clolarion",
      commander: "Fenix",
      name: "Interdictors",
      icon: "interdictors",
      effect: "In addition to his Interceptors, Clorarion deploys 2 Interdictors that automatically bomb enemy ground units.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 370,
      unit: "Assault Galleon",
      commander: "Horner",
      name: "Install Drone Hangar",
      icon: "installdronehangar",
      effect: "Retrofits the Assault Galleon with a Drone Hangar bay that automatically builds and deploys Assault drones. Assault Drones can attack ground and air units.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 371,
      unit: "Reaper",
      commander: "Horner",
      name: "LE9 Cluster Charges",
      icon: "le9clustercharges",
      effect: "Reduces the cooldown of Reapers' KD8 Charge by 10 seconds. When Reapers are killed, they throw multiple grenades towards the killing unit.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 372,
      unit: "Widow Mine",
      commander: "Horner",
      name: "Executioner Missiles",
      icon: "executionermissiles",
      effect: "Reduces the Widow Mine's Sentinel Missile cooldown by 20 seconds. When Widow Mines are killed, they launch 5 Sentinel Missiles at random nearby targets that deal 10 (+10 vs. shields) damage within radius 2.625 of each impact.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 373,
      unit: "Widow Mine",
      commander: "Horner",
      name: "Black Market Launchers",
      icon: "blackmarketlaunchers",
      effect: "Widow Mines range is increased by 50%, and can burrow and unburrow much faster (almost instantly).",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 374,
      unit: "Hellion",
      commander: "Horner",
      name: "Aerosol Stim Emitters",
      icon: "aerosolstimemitters",
      effect: "Hellions and Hellbats transform 75% faster. When Hellions are killed, nearby allied units gain 25% movement and 15% attack speed for 15 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 375,
      unit: "Hellion",
      commander: "Horner",
      name: "Tar Bombs",
      icon: "tarbombs",
      effect: "Hellions can launch a bomb that deals 20 damage to the target unit. Nearby enemies have their movement speed reduced by 75% and attack range reduced by 3 for 5 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 376,
      unit: "Hellbat",
      commander: "Horner",
      name: "Aerosol Stim Emitters",
      icon: "aerosolstimemitters",
      effect: "Hellions and Hellbats transform 75% faster. When Hellions are killed, nearby allied units gain 25% movement and 15% attack speed for 15 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 377,
      unit: "Hellbat",
      commander: "Horner",
      name: "Immolation Fluid",
      icon: "immolationfluid",
      effect: "Hellbat attacks cause enemies to burn for an additional 50 damage over 5 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 378,
      unit: "Asteria Wraith",
      commander: "Horner",
      name: "Unregistered Cloaking System",
      icon: "unregisteredcloakingsystem",
      effect: "Allows Wraiths to remain permanently cloaked.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 379,
      unit: "Asteria Wraith",
      commander: "Horner",
      name: "Tactical Jump",
      icon: "tacticaljump",
      effect: "Wraiths, Vikings, and Ravens can use Tactical Jump, warping them to any visible location.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 380,
      unit: "Deimos Viking",
      commander: "Horner",
      name: "W.I.L.D. Missiles",
      icon: "wildmissiles",
      effect: "Vikings in Fighter Mode can launch 5 rockets at an enemy. Each rocket deals 25 (40 vs armored) damage to the target unit.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 381,
      unit: "Deimos Viking",
      commander: "Horner",
      name: "Shredder Rounds",
      icon: "shredderrounds",
      effect: "Attacks from Vikings in Assault Mode pierce, dealing damage to enemy units behind the target. Viking transform time reduced by 75%.",
      modifier: "aoe",
      modifiermode: "(Assault)",
      modifiertag: null,
      value: "Piercing attacks deal full damage to ground enemies in a rectangle 7 long and 1.5 wide along the attack direction, including enemies behind the primary target.",
      operation: "replace",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 382,
      unit: "Deimos Viking",
      commander: "Horner",
      name: "Tactical Jump",
      icon: "tacticaljump",
      effect: "Wraiths, Vikings, and Ravens can use Tactical Jump, warping them to any visible location.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 383,
      unit: "Theia Raven",
      commander: "Horner",
      name: "Multi-Threaded Sensors",
      icon: "multithreadedsensors",
      effect: "Ravens can target up to 4 units with Target Lock.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 384,
      unit: "Theia Raven",
      commander: "Horner",
      name: "Tactical Jump",
      icon: "tacticaljump",
      effect: "Wraiths, Vikings, and Ravens can use Tactical Jump, warping them to any visible location.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 385,
      unit: "Sentinel",
      commander: "Karax",
      name: "Reconstruction",
      icon: "reconstruction",
      effect: "Sentinels are revived when killed. This effect can only occur once every 120 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 386,
      unit: "Energizer",
      commander: "Karax",
      name: "Rapid Recharging",
      icon: "rapidrecharging",
      effect: "Increases the energy regeneration rate of Energizers and Shield Batteries by 200%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 387,
      unit: "Energizer",
      commander: "Karax",
      name: "Reclamation",
      icon: "reclamation",
      effect: "Energizers gain the ability to temporarily take control of enemy mechanical units. Reclaimed units self-destruct after 120 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 388,
      unit: "Immortal",
      commander: "Karax",
      name: "Shadow Cannon",
      icon: "shadowcannon",
      effect: "Allows Immortals to use Shadow Cannon. Deals 320 damage to target unit or structure. Can target ground and air units.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 389,
      unit: "Mirage",
      commander: "Karax",
      name: "Phasing Armor",
      icon: "phasingarmor",
      effect: "Prevents Mirages from taking damage for 2 seconds after being attacked. Cannot occur more than once every 5 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 390,
      unit: "Carrier",
      commander: "Karax",
      name: "Repair Drones",
      icon: "repairdrones",
      effect: "Carriers gain two repair drones that automatically heal nearby friendly mechanical units.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 391,
      unit: "Shield Battery",
      commander: "Karax",
      name: "Rapid Recharging",
      icon: "rapidrecharging",
      effect: "Increases the energy regeneration rate of Energizers and Shield Batteries by 200%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 392,
      unit: "Shield Battery",
      commander: "Karax",
      name: "Enhanced Targeting",
      icon: "enhancedtargeting",
      effect: "Photon Cannons, Khaydarin Monoliths, and Shield Batteries gain +2 range.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 393,
      unit: "Shield Battery",
      commander: "Karax",
      name: "Fortification Barrier",
      icon: "fortificationbarrier",
      effect: "Allows Shield Batteries to grant target structures a barrier that absorbs up to 100 damage for 10 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 394,
      unit: "Kerrigan",
      commander: "Kerrigan",
      name: "Chain Reaction",
      icon: "chainreaction",
      effect: "Kerrigan's attacks deal normal damage to her target then jump to additional nearby enemies. Deals 10 damage to up to four additional targets.",
      modifier: "aoe",
      modifiermode: null,
      modifiertag: null,
      value: "Attacks bounce to up to 4 additional enemies, dealing 10 damage to each. Each jump searches within radius 4 of the previous target.",
      operation: "replace",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 395,
      unit: "Kerrigan",
      commander: "Kerrigan",
      name: "Ability Efficiency",
      icon: "abilityefficiency",
      effect: "Kerrigan's ability costs and cooldowns are reduced by 20%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 396,
      unit: "Zergling",
      commander: "Kerrigan",
      name: "Shredding Claws",
      icon: "shreddingclaws",
      effect: "Zergling attacks reduce their target's armor to 0 for 10 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 397,
      unit: "Ultralisk",
      commander: "Kerrigan",
      name: "Burrow Charge",
      icon: "burrowcharge",
      effect: "Allows Ultralisks to use the Burrow Charge ability.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 398,
      unit: "Ultralisk",
      commander: "Kerrigan",
      name: "Tissue Assimilation",
      icon: "tissueassimilation",
      effect: "Grants Ultralisk's life equal to 40% of all damage dealt from normal attacks.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 399,
      unit: "Mutalisk",
      commander: "Kerrigan",
      name: "Rapid Regeneration",
      icon: "rapidregeneration",
      effect: "Mutalisks regenerate life quickly while out of combat.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 400,
      unit: "Mutalisk",
      commander: "Kerrigan",
      name: "Vicious Glave",
      icon: "viciousglave",
      effect: "The Mutalisk's attack bounces three additional times, hitting up to six targets. Bounces also travel farther.",
      modifier: "aoe",
      modifiermode: null,
      modifiertag: null,
      value: "Bounces to up to 5 additional enemies, within radius 6 of the previous target. Base bounce damage: 5, 3, 3, 1, 1; only the first two bounces gain 0.333 and 0.111 per weapon upgrade.",
      operation: "replace",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 401,
      unit: "Mutalisk",
      commander: "Kerrigan",
      name: "Severing Glave",
      icon: "severingglave",
      effect: "The Mutalisk's attack no longer decreases in damage with each subsequent bounce.",
      modifier: "aoe",
      modifiermode: null,
      modifiertag: null,
      value: "Bounces to up to 2 additional enemies, within radius 3 of the previous target. Base bounce damage: 9, 9; gains 0.333 and 0.111 per weapon upgrade.",
      operation: "replace",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 402,
      unit: "Aegis Guard",
      commander: "Mengsk",
      name: "Incapacitator Shells",
      icon: "incapacitatorshells",
      effect: "Allows the Aegis Guard's attacks to slow enemy units (-60% movement speed for 3 seconds).",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 403,
      unit: "Emperors Shadow",
      commander: "Mengsk",
      name: "Sovereign Tactical Missiles",
      icon: "sovereigntacticalmissiles",
      effect: "Emperor's Shadows no longer need to channel the Tactical Missile Strike ability.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 404,
      unit: "Shock Division",
      commander: "Mengsk",
      name: "Smart Servos",
      icon: "smartservos",
      effect: "Reduces the transformation time (by 66%) of Shock Divisions, Blackhammers, and Sky Furies.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 405,
      unit: "Blackhammer",
      commander: "Mengsk",
      name: "Bulwark Field",
      icon: "bulwarkfield",
      effect: "Blackhammers provide nearby friendly ground units (within 5 range) +5 armor.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 406,
      unit: "Blackhammer",
      commander: "Mengsk",
      name: "Smart Servos",
      icon: "smartservos",
      effect: "Reduces the transformation time (by 66%) of Shock Divisions, Blackhammers, and Sky Furies.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 407,
      unit: "Sky Fury",
      commander: "Mengsk",
      name: "Smart Servos",
      icon: "smartservos",
      effect: "Reduces the transformation time (by 66%) of Shock Divisions, Blackhammers, and Sky Furies.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 408,
      unit: "Imperial Intercessor",
      commander: "Mengsk",
      name: "Dual Resuscitators",
      icon: "dualresuscitators",
      effect: "Allows Imperial Intercessors to heal two targets at the same time.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 409,
      unit: "Imperial Witness",
      commander: "Mengsk",
      name: "Amplfied Airwaves",
      icon: "amplifiedairwaves",
      effect: "Doubles the Imperial Support Laborers and Troopers provide when affected by the Imperial Witness's Indoctrinate ability.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 410,
      unit: "Pride of Augustgrad",
      commander: "Mengsk",
      name: "Field-Assist Targeting System",
      icon: "fieldassisttargetingsystem",
      effect: "Allows Pride of Augustgrad to grant nearby friendly ranged ground units +1 increased range.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 411,
      unit: "Nova",
      commander: "Nova",
      name: "Ghost Visor",
      icon: "ghostvisor",
      effect: "Grants Nova detection, allowing her to see and track cloaked and burrowed enemy units.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 412,
      unit: "Nova",
      commander: "Nova",
      name: "Caduceus Reactor",
      icon: "caduceusreactor",
      effect: "Increases Nova's life regeneration rate to 10.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 413,
      unit: "Nova",
      commander: "Nova",
      name: "Operational Efficiency",
      icon: "operationalefficiency",
      effect: "Refunds 50% of Snipe's energy cost when Nova uses it to kill an enemy unit.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 414,
      unit: "Nova",
      commander: "Nova",
      name: "Infernal Projectiles",
      icon: "infernalprojectiles",
      effect: "Increases the range of Nova's Penetrating Blast by 2.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 415,
      unit: "Marauder Commando",
      commander: "Nova",
      name: "Suppression Shells",
      icon: "suppressionshells",
      effect: "Units hit by the Marauder Commando have temporarily slowed attack and movement speeds (50%) for 1.5 seconds. Has a reduced effect on heroic units (20%). Massive units are immune.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 416,
      unit: "Marauder Commando",
      commander: "Nova",
      name: "Magrail Munitions",
      icon: "magrailmunitions",
      effect: "Equips Marauder Commandos with an additional weapon that deals 90 damage to their target every 30 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 417,
      unit: "Spec Ops Ghost",
      commander: "Nova",
      name: "EMP Round",
      icon: "empround",
      effect: "Allows Spec Ops Ghosts to use EMP Round, which deals 100 damage to shields and depletes the energy of enemy units in the target area. Cloaked units are revealed for 10 seconds after being hit.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 418,
      unit: "Spec Ops Ghost",
      commander: "Nova",
      name: "Triple Tap",
      icon: "tripletap",
      effect: "Spec Ops Ghosts fire 2 additional shots that deal 85 damage each when using Snipe.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 419,
      unit: "Strike Goliath",
      commander: "Nova",
      name: "Lockdown Missiles",
      icon: "lockdownmissiles",
      effect: "Stuns and disables the detection of mechanical units hit by the Strike Goliath's anti-air attacks for 3 seconds. Heroic units are immune.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 420,
      unit: "Heavy Siege Tank",
      commander: "Nova",
      name: "Spider Mines",
      icon: "spidermines",
      effect: "Allows Heavy Siege Tanks to deploy Spider Mines, which pursue enemy units that come in range, and detonate for heavy area damage. Buried Spider Mines can only be seen by enemy detectors.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 421,
      unit: "Raid Liberator",
      commander: "Nova",
      name: "Raid Artillery",
      icon: "raidartillery",
      effect: "Allows Raid Liberators to attack structures while in Defender Mode.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 422,
      unit: "Raid Liberator",
      commander: "Nova",
      name: "Smart Servos",
      icon: "smartservos",
      effect: "Allows Raid Liberators to transform between modes four times faster.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 423,
      unit: "Covert Banshee",
      commander: "Nova",
      name: "Advanced Cloaking Field",
      icon: "advancedcloakingfield",
      effect: "Allows Covert Banshees to remain permanently cloaked.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 424,
      unit: "Raven Type II",
      commander: "Nova",
      name: "Covert Triage",
      icon: "coverttriage",
      effect: "Increases the healing of the Raven Type-II's Bio-Mechanical Repair Drone by 25% and allows it to cloak units that it is currently healing.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 425,
      unit: "Raven Type II",
      commander: "Nova",
      name: "Enhanced Manufacturing",
      icon: "enhancedmanufacturing",
      effect: "Allows the Raven Type-II to store up to 3 charges for each of its abilities.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 426,
      unit: "Marauder",
      commander: "Raynor",
      name: "Concussive Shells",
      icon: "concussiveshells",
      effect: "Upgrades the Marauder weapons to slow down opponents movement speed by 50% for 1.5 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 427,
      unit: "Medic",
      commander: "Raynor",
      name: "Stabilizer Medpacks",
      icon: "stabilizermedpacks",
      effect: "Increases the Medic's healing speed to 12 life per 3 energy per second and allows them to heal mechanical units. Units being healed by Medics take 25% less damage.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 428,
      unit: "Vulture",
      commander: "Raynor",
      name: "Replenishable Magazine",
      icon: "replenishablemagazine",
      effect: "Allows the Vulture to build additional Spider Mines to replace those used.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 429,
      unit: "Vulture",
      commander: "Raynor",
      name: "Cerberus Mine",
      icon: "cerberusmine",
      effect: "Increases the blast radius and trigger radius of the Vulture's Spider Mine by 33%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 430,
      unit: "Viking",
      commander: "Raynor",
      name: "Ripwave Missiles",
      icon: "ripwavemissiles",
      effect: "Upgrades the Viking's missiles to deal area damage.",
      modifier: "aoe",
      modifiermode: "(Fighter Mode)",
      modifiertag: null,
      value: "Circular splash damage to air enemies around the target: 100% within radius 0.3, 50% from 0.3 to 0.6, and 25% from 0.6 to 1.2.",
      operation: "replace",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 431,
      unit: "Banshee",
      commander: "Raynor",
      name: "Shockwave Missile Battery",
      icon: "shockwavemissilebattery",
      effect: "Upgrades the Banshee's attack to fire multiple missile bursts in a straight line. Weapon attacks all targets in a straight line (2 range length) from the Banshee's primary target, dealing 12 weapon damage to all targets within 0.5 range of the line.",
      modifier: "aoe",
      modifiermode: null,
      modifiertag: null,
      value: "Missile bursts damage enemies along a line extending 2 beyond the primary target, hitting units within 0.5 of the line.",
      operation: "replace",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 432,
      unit: "Battlecruiser",
      commander: "Raynor",
      name: "Weapon Refit",
      icon: "weaponrefit",
      effect: "Enables use of the Battlecruiser Yamato Cannon.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 433,
      unit: "Mecha Zergling",
      commander: "Stetmann",
      name: "Hardened Egonergy Shield",
      icon: "hardenedegonergyshield",
      effect: "Allows Mecha Zerglings to reduce incoming damage to a maximum of 10. Drains 5 Egonergy per use.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 434,
      unit: "Mecha Baneling",
      commander: "Stetmann",
      name: "Egonergy Enhanced Explosives",
      icon: "egonergyenhancedexplosives",
      effect: "Allows the Mecha Baneling to add its current Egonergy to its damage when it explodes.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 435,
      unit: "Mecha Baneling",
      commander: "Stetmann",
      name: "Egonergy Efficient Barrier",
      icon: "egonergyefficientbarrier",
      effect: "Increases the damage absorbed by the Mecha Baneling's Egonergy Impact Barrier to 2 damage per point of Egonergy.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 436,
      unit: "Mecha Hydralisk",
      commander: "Stetmann",
      name: "Erudition Missile Launchers",
      icon: "eruditionmissilelaunchers",
      effect: "Allows the Mecha Hydralisk to replace its anti-air Needle Spine weapon with a more powerful Erudition Missile armament.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 437,
      unit: "Mecha Lurker",
      commander: "Stetmann",
      name: "Extended Tunnel of TERROR Algorithm",
      icon: "extendedtunnelofterroralgorithm",
      effect: "Increases the maximum range of the Mecha Lurker's Tunnel of TERROR Algorithm by 6.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 438,
      unit: "Mecha Lurker",
      commander: "Stetmann",
      name: "Focused Strike Algorithm",
      icon: "focusedstrikealgorithm",
      effect: "Allows the Mecha Lurker to concentrate its fire on a target unit, dealing 50 damage to a small area around that unit for 10 seconds or until the unit is destroyed.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 439,
      unit: "Mecha Corruptor",
      commander: "Stetmann",
      name: "Wide Area Cluster Busters",
      icon: "wideareaclusterbusters",
      effect: "Increases the splash radius of Mecha Corruptor's Cluster Busters ability from 1.5 to 3. The regular attack remains single-target.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 440,
      unit: "Mecha Corruptor",
      commander: "Stetmann",
      name: "Terraclean Solvent",
      icon: "terracleansolvent",
      effect: "Allows the Mecha Corruptor to emit a solvent stream that deals devastating damage to enemy ground units over time.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 441,
      unit: "Mecha Battlecarrier Lord",
      commander: "Stetmann",
      name: "Mecha Locusceptor Bays",
      icon: "mechalocusceptorbays",
      effect: "Allows the Mecha Battlecarrier Lord to build and launch 6 Mecha Locusceptors that automatically attack enemy ground units.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 442,
      unit: "Mecha Battlecarrier Lord",
      commander: "Stetmann",
      name: "Stetmato Cannon",
      icon: "stetmatocannon",
      effect: "Allows the Mecha Battlecarrier Lord to blast targets with a devastating plasma cannon causing 300 damage and delusions of grandeur.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 443,
      unit: "Mecha Infestor",
      commander: "Stetmann",
      name: "UMI-C Charging Protocol",
      icon: "umicchargingprotocol",
      effect: "Allows the Mecha Infestor to launch a mechanical nerve cord at a friendly unit, restoring 150 life, 50 Egonergy, and 50 energy instantly. An additional 600 life, 200 Egonergy, and 200 energy regenerates over 20 seconds. The unit's ability cooldown rate is increased by 25%",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 444,
      unit: "Mecha Infestor",
      commander: "Stetmann",
      name: "BONUS Ravager!",
      icon: "bonusravager",
      effect: "Allows the Mecha Infestor's Roaches Away! and Deconstructive Roach-nites to spawn an additional Mecha Ravager.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 445,
      unit: "Mecha Ultralisk",
      commander: "Stetmann",
      name: "Electrostatic Surprise!",
      icon: "electrostaticsurprise",
      effect: "Allows the Mecha Ultralisk's Vectored Burrow Charge ability to stun enemy mechanical ground units in a large area.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 446,
      unit: "Mecha Ultralisk",
      commander: "Stetmann",
      name: "Mecha Mooch Module",
      icon: "mechamoochmodule",
      effect: "Grants the Mecha Ultralisk the ability to absorb 25 life from nearby enemy or friendly mechanical units, healing for that amount.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 447,
      unit: "Mecha Ultralisk",
      commander: "Stetmann",
      name: "Chitanium Plating",
      icon: "chitaniumplating",
      effect: "Grants the Mecha Ultralisk 25% damage reduction.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 448,
      unit: "Infested Civilian",
      commander: "Stukov",
      name: "Anaerobic Enhancement",
      icon: "anaerobicenhancement",
      effect: "Allows Infested Civilians to quickly leap toward nearby enemy ground units.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 449,
      unit: "Infested Civilian",
      commander: "Stukov",
      name: "Broodling Gestation",
      icon: "broodlinggestation",
      effect: "Infested Civilians spawn a Broodling when they die.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 450,
      unit: "Volatile Infested",
      commander: "Stukov",
      name: "Anaerobic Enhancement",
      icon: "anaerobicenhancement",
      effect: "Allows Infested Civilians to quickly leap toward nearby enemy ground units.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 451,
      unit: "Volatile Infested",
      commander: "Stukov",
      name: "Broodling Gestation",
      icon: "broodlinggestation",
      effect: "Infested Civilians spawn a Broodling when they die.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 452,
      unit: "Infested Marine",
      commander: "Stukov",
      name: "Plagued Munitions",
      icon: "plaguedmunitions",
      effect: "Infested Marines and Infested Troopers deal an additional 50 damage over 15 seconds to units they attack.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 453,
      unit: "Infested Trooper",
      commander: "Stukov",
      name: "Plagued Munitions",
      icon: "plaguedmunitions",
      effect: "Infested Marines and Infested Troopers deal an additional 50 damage over 15 seconds to units they attack.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 454,
      unit: "Infested Bunker",
      commander: "Stukov",
      name: "Regenerative Plating",
      icon: "regenerativeplating",
      effect: "Infested Bunkers regenerate life twice as fast while rooted.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 455,
      unit: "Infested Diamondback",
      commander: "Stukov",
      name: "Saturated Cultures",
      icon: "saturatedcultures",
      effect: "Reduces the cooldown of the Infested Diamondback's Fungal Snare by 15 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 456,
      unit: "Infested Diamondback",
      commander: "Stukov",
      name: "Caustic Mucus",
      icon: "causticmucus",
      effect: "Infested Diamondbacks leave behind a trail of acid when moving that deals 20 damage per second to enemy units.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 457,
      unit: "Infested Siege Tank",
      commander: "Stukov",
      name: "Automated Mitosis",
      icon: "automatedmitosis",
      effect: "Infested Siege Tanks automatically spawn 1 round of Volatile Biomass every 30 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 458,
      unit: "Infested Banshee",
      commander: "Stukov",
      name: "Rapid Hibernation",
      icon: "rapidhibernation",
      effect: "Allows Infested Banshees to burrow. Infested Banshees regenerate 20 life and energy per second while burrowed.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 459,
      unit: "Brood Queen",
      commander: "Stukov",
      name: "Fungal Growth",
      icon: "fungalgrowth",
      effect: "Allows Brood Queens to immobilize enemy units and deal 80 damage to them over 4 seconds, and reveal them if they are cloaked or burrowed.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 460,
      unit: "Brood Queen",
      commander: "Stukov",
      name: "Enhanced Mitochondria",
      icon: "enhancedmitochondria",
      effect: "Increases the Brood Queen's energy regeneration rate by 100%. Brood Queens spawn with full energy.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 461,
      unit: "Hellbat",
      commander: "Swann",
      name: "Regenerative Bio-Steel",
      icon: "regenerativebiosteel",
      effect: "Vehicles and ships automatically heal themselves over time.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 462,
      unit: "Hellion",
      commander: "Swann",
      name: "Regenerative Bio-Steel",
      icon: "regenerativebiosteel",
      effect: "Vehicles and ships automatically heal themselves over time.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 463,
      unit: "Goliath",
      commander: "Swann",
      name: "Multi-Lock Weapons System",
      icon: "multilockweaponssystem",
      effect: "Goliaths can target and attack ground and air units simultaneously.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 464,
      unit: "Goliath",
      commander: "Swann",
      name: "Regenerative Bio-Steel",
      icon: "regenerativebiosteel",
      effect: "Vehicles and ships automatically heal themselves over time.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 465,
      unit: "Siege Tank",
      commander: "Swann",
      name: "Regenerative Bio-Steel",
      icon: "regenerativebiosteel",
      effect: "Vehicles and ships automatically heal themselves over time.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 466,
      unit: "Cyclone",
      commander: "Swann",
      name: "Targeting Optics",
      icon: "targetingoptics",
      effect: "Increases Cyclone Lock On range by 3.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 467,
      unit: "Cyclone",
      commander: "Swann",
      name: "Mag-Field Accelerator",
      icon: "magfieldaccelerator",
      effect: "Increases Cyclone Lock On damage by 100%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 468,
      unit: "Cyclone",
      commander: "Swann",
      name: "Regenerative Bio-Steel",
      icon: "regenerativebiosteel",
      effect: "Vehicles and ships automatically heal themselves over time.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 469,
      unit: "Thor",
      commander: "Swann",
      name: "330mm Barrage Cannon",
      icon: "330mmbarragecannon",
      effect: "Allows Thors to use the 330mm Barrage Cannon ability.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 470,
      unit: "Thor",
      commander: "Swann",
      name: "Regenerative Bio-Steel",
      icon: "regenerativebiosteel",
      effect: "Vehicles and ships automatically heal themselves over time.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 471,
      unit: "Wraith",
      commander: "Swann",
      name: "Regenerative Bio-Steel",
      icon: "regenerativebiosteel",
      effect: "Vehicles and ships automatically heal themselves over time.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 472,
      unit: "Hercules",
      commander: "Swann",
      name: "Regenerative Bio-Steel",
      icon: "regenerativebiosteel",
      effect: "Vehicles and ships automatically heal themselves over time.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 473,
      unit: "Science Vessel",
      commander: "Swann",
      name: "Improved Nano-Repair",
      icon: "improvednanorepair",
      effect: "Science Vessel's Nano-Repair no longer costs energy.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 474,
      unit: "Science Vessel",
      commander: "Swann",
      name: "Regenerative Bio-Steel",
      icon: "regenerativebiosteel",
      effect: "Vehicles and ships automatically heal themselves over time.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 475,
      unit: "Flaming Betty",
      commander: "Swann",
      name: "Fire Suppression Systems",
      icon: "firesuppressionsystems",
      effect: "All structure fires are automatically extinguished and all structures automatically repair themselves to 50% of their maximum life at a rate of 15HP/second.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 476,
      unit: "Spinning Dizzy",
      commander: "Swann",
      name: "Fire Suppression Systems",
      icon: "firesuppressionsystems",
      effect: "All structure fires are automatically extinguished and all structures automatically repair themselves to 50% of their maximum life at a rate of 15HP/second.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 477,
      unit: "Blaster Billy",
      commander: "Swann",
      name: "Fire Suppression Systems",
      icon: "firesuppressionsystems",
      effect: "All structure fires are automatically extinguished and all structures automatically repair themselves to 50% of their maximum life at a rate of 15HP/second.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 478,
      unit: "Drakken Laser Drill",
      commander: "Swann",
      name: "Fire Suppression Systems",
      icon: "firesuppressionsystems",
      effect: "All structure fires are automatically extinguished and all structures automatically repair themselves to 50% of their maximum life at a rate of 15HP/second.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 479,
      unit: "Tychus Findlay",
      commander: "Tychus",
      name: "KD9a Implosion Core",
      icon: "kd9aimplosioncore",
      effect: "Allows Tychus' Shredder Grenade to pull affected units to the center of its area of effect, stunning them for 2 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 480,
      unit: "Tychus Findlay",
      commander: "Tychus",
      name: "Vanadium Shell",
      icon: "vanadiumshell",
      effect: "Increases the damage of Tychus' Shredder Grenade by 50.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 481,
      unit: "Tychus Findlay",
      commander: "Tychus",
      name: "Kel-Morian Ripper Rounds",
      icon: "kelmorianripperrounds",
      effect: "Tychus' attacks decrease the armor of their targets by 5 for 2 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 482,
      unit: "Crooked Sam",
      commander: "Tychus",
      name: "LarsCorp G7 Charges",
      icon: "larscorpg7charges",
      effect: "Increases the damage of Crooked Sam's Demolition Charge by 100%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 483,
      unit: "Crooked Sam",
      commander: "Tychus",
      name: "Moebius Restraint Matrix",
      icon: "moebiusrestraintmatrix",
      effect: "Stuns and disables the detection of units hit by Crooked Sam's Demolition Charge.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 484,
      unit: "Crooked Sam",
      commander: "Tychus",
      name: "Procyon Shade Suit",
      icon: "procyonshadesuit",
      effect: "Prevents Crooked Sam from taking any damage and increases his movement speed by 80% for 5 seconds after being attacked. Cannot occur more than once every 15 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 485,
      unit: "Crooked Sam",
      commander: "Tychus",
      name: "Enhanced Hostilities Kit",
      icon: "enhancedhostilitieskit",
      effect: "Reduces the charge-up time of Demolition Charge by 3 seconds each time Crooked Sam attacks.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 486,
      unit: "James Sirius Sykes",
      commander: "Tychus",
      name: "SA-55 Thunderbolt Missiles",
      icon: "sa55thunderboltmissiles",
      effect: "Equips Sirius with missiles that deal 100 damage to 8 air targets. Warhound Turrets deal 100 to 2 air targets.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 487,
      unit: "Warhound Turret",
      commander: "Tychus",
      name: "SA-55 Thunderbolt Missiles",
      icon: "sa55thunderboltmissiles",
      effect: "Equips Sirius with missiles that deal 100 damage to 8 air targets. Warhound Turrets deal 100 to 2 air targets.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 488,
      unit: "James Sirius Sykes",
      commander: "Tychus",
      name: "Moebius M34 Terror Rounds",
      icon: "moebiusm34terrorrounds",
      effect: "Provides a 30% chance for Sirius to cast Fear in a small area with each attack. Enemy units in the area will run around in fear for 3 seconds. Warhound Turrets have a 3% chance to cast Fear with each attack.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 489,
      unit: "Warhound Turret",
      commander: "Tychus",
      name: "Moebius M34 Terror Rounds",
      icon: "moebiusm34terrorrounds",
      effect: "Provides a 30% chance for Sirius to cast Fear in a small area with each attack. Enemy units in the area will run around in fear for 3 seconds. Warhound Turrets have a 3% chance to cast Fear with each attack.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 490,
      unit: "James Sirius Sykes",
      commander: "Tychus",
      name: "D99 Detonator",
      icon: "d99detonator",
      effect: "When Sirius is defeated, he triggers an explosion, dealing 300 damage to enemy units in an area around him. Warhound Turrets deal 50 damage on death.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 491,
      unit: "Warhound Turret",
      commander: "Tychus",
      name: "D99 Detonator",
      icon: "d99detonator",
      effect: "When Sirius is defeated, he triggers an explosion, dealing 300 damage to enemy units in an area around him. Warhound Turrets deal 50 damage on death.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 492,
      unit: "James Sirius Sykes",
      commander: "Tychus",
      name: "Umojan Turret Frame",
      icon: "umojanturretframe",
      effect: "Increases the life and weapon damage of Warhound Turrets by 75%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 493,
      unit: "Miles Blaze Lewis",
      commander: "Tychus",
      name: "High Capacity Containers",
      icon: "highcapacitycontainers",
      effect: "Increases the radius Blaze's of Oil Spill by 100%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 494,
      unit: "Miles Blaze Lewis",
      commander: "Tychus",
      name: "Hades Oil",
      icon: "hadesoil",
      effect: "Improves the damage dealt by the Enflame effect from Blaze's Oil Spill to deal +25 per second vs. light units.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 495,
      unit: "Miles Blaze Lewis",
      commander: "Tychus",
      name: "Wildflame Fuel Additives",
      icon: "wildflamefueladditives",
      effect: "When units Enflamed by Blaze's Oil Spill die, they explode, spreading Enflamed to enemy units in the area.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 496,
      unit: "Miles Blaze Lewis",
      commander: "Tychus",
      name: "XCMC-670 Combat Suit",
      icon: "xcmc670combatsuit",
      effect: "Reduces all damage taken by Blaze to 30.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 497,
      unit: "Rob Cannonball Boswell",
      commander: "Tychus",
      name: "X-71 Impact Boots",
      icon: "x71impactboots",
      effect: "Increases the stun duration and radius of Cannonball's Heavy Impact by 100%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 498,
      unit: "Rob Cannonball Boswell",
      commander: "Tychus",
      name: "Critical Response System",
      icon: "criticalresponsesystem",
      effect: "Allows Cannonball to become immune to damage for 5 seconds and restores all his life when he takes fatal damage. Cannot occur more than once every 60 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 499,
      unit: "Rob Cannonball Boswell",
      commander: "Tychus",
      name: "M.A.L.I.C.E. Ammunition",
      icon: "maliceammunition",
      effect: "Provides a 30% chance that Cannonball will deal 4 times more damage with his attacks.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 500,
      unit: "Kev Rattlesnake West",
      commander: "Tychus",
      name: "Umojan Signal Modulator",
      icon: "umojansignalmodulator",
      effect: "Improves the healing rate of Rattlesnake's Revitalizers by 100%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 501,
      unit: "Kev Rattlesnake West",
      commander: "Tychus",
      name: "Moebius Aggression Blend",
      icon: "moebiusaggressionblend",
      effect: "Units in range of Rattlesnake's Revitalizers gain 15% additional attack speed.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 502,
      unit: "Kev Rattlesnake West",
      commander: "Tychus",
      name: "Hammer Munitions",
      icon: "hammermunitions",
      effect: "Rattlesnake's attacks slow and deal 50% of their damage in an area of effect.",
      modifier: "aoe",
      modifiermode: null,
      modifiertag: null,
      value: "Attacks slow enemies and deal 50% damage to ground enemies in a circle of radius 2 around the target.",
      operation: "replace",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 503,
      unit: "Vega",
      commander: "Tychus",
      name: "Moebius Psionic Motivator",
      icon: "moebiuspsionicmotivator",
      effect: "Vega's Dominate fully restores the target's life, shields, and energy and increases its attack speed by 75%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 504,
      unit: "Vega",
      commander: "Tychus",
      name: "Neural Disruption Device",
      icon: "neuraldisruptiondevice",
      effect: "Vega's Dominate ability confuses enemy units in an area around the dominated unit, forcing them to attack each other for 10 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 505,
      unit: "Vega",
      commander: "Tychus",
      name: "Psi Projector",
      icon: "psiprojector",
      effect: "Grants Vega the ability to bring up to 5 enemy air units to the ground, allowing friendly units to attack them as if they were ground units.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 506,
      unit: "Vega",
      commander: "Tychus",
      name: "Type-88 Persuader",
      icon: "type88persuader",
      effect: "Increases the duration of Vega's Dominate by 200%",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 507,
      unit: "Nux",
      commander: "Tychus",
      name: "T4 Cloudburst Shells",
      icon: "t4cloudburstshells",
      effect: "Increases the damage of Nux's Ultrasonic Pulse by 50%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 508,
      unit: "Nux",
      commander: "Tychus",
      name: "Ultrasonic Boosters",
      icon: "ultrasonicboosters",
      effect: "Increases the radius of Nux's Ultrasonic Pulse by 50%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 509,
      unit: "Nux",
      commander: "Tychus",
      name: "Crystalline Amplifiers",
      icon: "crystallineamplifiers",
      effect: "Increases the duration of Nux's Ultrasonic Pulse by 100%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 510,
      unit: "Nux",
      commander: "Tychus",
      name: "N3 Networking",
      icon: "n3networking",
      effect: "Grants Nux the ability to reduce the charge-up times and cooldowns of the primary abilities of all nearby Outlaws by 20%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 511,
      unit: "Lt Layna Nikara",
      commander: "Tychus",
      name: "Umojan Repair Nanites",
      icon: "umojanrepairnanites",
      effect: "Increases the immediate and periodic heal of Lt. Nikara's Reinvigorating Burst by 100%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 512,
      unit: "Lt Layna Nikara",
      commander: "Tychus",
      name: "Procyon Serum",
      icon: "procyonserum",
      effect: "Increases the healing rate of Lt. Nikara's Super Heal by 100%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 513,
      unit: "Lt Layna Nikara",
      commander: "Tychus",
      name: "Procyon Twin Heal Beam Gauntlet",
      icon: "procyontwinhealbeamgauntlet",
      effect: "Allows Lt. Nikara to cast Super Heal on two targets at the same time.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 514,
      unit: "Lt Layna Nikara",
      commander: "Tychus",
      name: "XM-77 Matrix Generator",
      icon: "xm77matrixgenerator",
      effect: "Enables Lt. Nikara to surround a target friendly unit with a shield that can absorb 400 damage over 20 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 515,
      unit: "Centurion",
      commander: "Vorazun",
      name: "Darkcoil",
      icon: "darkcoil",
      effect: "Allows Centurions to stun nearby enemy ground units and increases their shields by 100 for a short duration. Massive units are slowed.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 516,
      unit: "Stalker",
      commander: "Vorazun",
      name: "Blink",
      icon: "blink",
      effect: "Allows Stalkers to teleport to a nearby target location.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 517,
      unit: "Stalker",
      commander: "Vorazun",
      name: "Phase Reactor",
      icon: "phasereactor",
      effect: "Blink now cloaks the Stalker and restores 80 shields over 5 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 518,
      unit: "Dark Templar",
      commander: "Vorazun",
      name: "Shadow Fury",
      icon: "shadowfury",
      effect: "Allows Dark Templar to jump from target to target, dealing 20 (+15 vs. Light) damage with each jump. Hits 5 times.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 519,
      unit: "Dark Templar",
      commander: "Vorazun",
      name: "Blink",
      icon: "dtblink",
      effect: "Enables Dark Templar to teleport to nearby locations.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 520,
      unit: "Dark Templar",
      commander: "Vorazun",
      name: "Void Stasis",
      icon: "voidstasis",
      effect: "Grants Dark Templar an ability to phase a target unit or structure out of existence for 10 seconds. This disables it entirely and prevents it from being attacked by units or abilities. Can target structures or ground units.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 521,
      unit: "Dark Archon",
      commander: "Vorazun",
      name: "Argus Crystal",
      icon: "arguscrystal",
      effect: "Dark Archons start with full energy.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 522,
      unit: "Dark Archon",
      commander: "Vorazun",
      name: "Mind Control",
      icon: "mindcontrol",
      effect: "Allows a Dark Archon to take control of a targeted unit permanently. Heroic units are immune.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 523,
      unit: "Corsair",
      commander: "Vorazun",
      name: "Disruption Web",
      icon: "disruptionweb",
      effect: "Grants Corsairs the ability to create a web of energy on the ground that prevents enemy structures and ground units from attacking for 10 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 524,
      unit: "Corsair",
      commander: "Vorazun",
      name: "Stealth Drive",
      icon: "stealthdrive",
      effect: "Permanently cloaks all Corsairs and Oracles.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 525,
      unit: "Oracle",
      commander: "Vorazun",
      name: "Stealth Drive",
      icon: "stealthdrive",
      effect: "Permanently cloaks all Corsairs and Oracles.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 526,
      unit: "Oracle",
      commander: "Vorazun",
      name: "Stasis Calibration",
      icon: "stasiscalibration",
      effect: "Enemies affected by the Oracle's Stasis Ward can now be attacked.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 527,
      unit: "Zergling",
      commander: "Zagara",
      name: "Shredding Claws",
      icon: "shreddingclaws",
      effect: "Zergling attacks reduce their target's armor to 0 for 10 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 528,
      unit: "Aberration",
      commander: "Zagara",
      name: "Protective Cover",
      icon: "protectivecover",
      effect: "Aberrations grant 50% damage reduction to units positioned beneath them.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 529,
      unit: "Scourge",
      commander: "Zagara",
      name: "Virulent Spores",
      icon: "virulentspores",
      effect: "Scourge deal 50% of their attack damage in a small area upon death.",
      modifier: "aoe",
      modifiermode: null,
      modifiertag: null,
      value: "Deals 50% attack damage to enemy air units in a circle of radius 1.5 around the target upon detonation.",
      operation: "replace",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 530,
      unit: "Zeratul",
      commander: "Zeratul",
      name: "Purity of Will",
      icon: "purityofwill",
      effect: "Zeratul will gain additional shields (+50), increased Shadow Cleave damage (+10), and additional charges of Blink (+1) with each Artifact Fragment he finds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 531,
      unit: "XelNaga Ambusher",
      commander: "Zeratul",
      name: "Predictive Blink",
      icon: "predictiveblink",
      effect: "Allows this unit to teleport to a nearby target location. Xel'Naga Ambushers will automatically teleport to safety once their hulls have been breached.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 532,
      unit: "XelNaga Ambusher",
      commander: "Zeratul",
      name: "Vengeance of the Void",
      icon: "vengeanceofthevoid",
      effect: "Blinking leaves behind a Void Apparition that attacks once for 50% of the unit's weapon damage.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 533,
      unit: "XelNaga Ambusher",
      commander: "Zeratul",
      name: "Phase Battery",
      icon: "phasebattery",
      effect: "This unit can now store up to 3 charges of Predictive Blink and regains a charge every 8 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 534,
      unit: "XelNaga Shieldguard",
      commander: "Zeratul",
      name: "Shield Recharge",
      icon: "shieldrecharge",
      effect: "Allows this unit to recharge the shields of a friendly Protoss unit.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 535,
      unit: "XelNaga Shieldguard",
      commander: "Zeratul",
      name: "Eclipse Protocol",
      icon: "eclipseprotocol",
      effect: "Increases the energy regeneration of this unit by 100%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 536,
      unit: "XelNaga Shieldguard",
      commander: "Zeratul",
      name: "Reflection Shield",
      icon: "reflectionshield",
      effect: "Allows this unit to create an aura that reflects 50% of all projectiles back to enemy attackers.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 537,
      unit: "Void Templar",
      commander: "Zeratul",
      name: "Blink",
      icon: "dtblink",
      effect: "Allows this unit to teleport to a nearby target location.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 538,
      unit: "Void Templar",
      commander: "Zeratul",
      name: "Void Fury",
      icon: "voidfury",
      effect: "When this unit Blinks, it will deal 50 damage to units caught in its path.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 539,
      unit: "Void Templar",
      commander: "Zeratul",
      name: "Back to the Shadows",
      icon: "backtotheshadows",
      effect: "When this unit takes fatal damage, it retreats to the Void and regenerates its health and shields over 10 seconds. Cannot occur more than once every 180 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 540,
      unit: "XelNaga Enforcer",
      commander: "Zeratul",
      name: "Barrier",
      icon: "barrier",
      effect: "Allows this unit to absorb 100 damage. Lasts for 10 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 541,
      unit: "XelNaga Enforcer",
      commander: "Zeratul",
      name: "Force Cannon",
      icon: "forcecannon",
      effect: "Allows this unit's anti-air weapon to knock back enemy air units, dealing 25% of its damage to units caught in the path of the blast.",
      modifier: "aoe",
      modifiermode: "(Air)",
      modifiertag: null,
      value: "The anti-air attack knocks the target back and deals 25% damage to enemy air units in a rectangle 5 long and 3 wide extending behind the primary target.",
      operation: "replace",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 542,
      unit: "XelNaga Enforcer",
      commander: "Zeratul",
      name: "Eternity Barrier",
      icon: "enternitybarrier",
      effect: "Increases the damage absorption of the Xel'Naga Enforcer's Barrier by 300% and fully repairs its hull damage.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 543,
      unit: "XelNaga Void Array",
      commander: "Zeratul",
      name: "Infinite Void",
      icon: "infinitevoid",
      effect: "Grants the Xel'Naga Void Array unlimited capacity.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 544,
      unit: "XelNaga Void Array",
      commander: "Zeratul",
      name: "Shield Boosters",
      icon: "shieldboosters",
      effect: "Nearby units regenerate an additional 2 shields per second.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 545,
      unit: "Primal Mutalisk",
      commander: "Dehaka",
      name: "Slicing Glaive",
      icon: "slicingglaive",
      effect: "Primal Mutalisks deal 100% increased damage against air units.",
      modifier: "aoe",
      modifiermode: "(Air)",
      modifiertag: null,
      value: "Bounces to up to 2 additional air enemies, within radius 3 of the previous target. Base bounce damage: 9, 3; gains 1 and 0.5 per weapon upgrade.",
      operation: "replace",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 546,
      unit: "Spider Mine",
      commander: "Raynor",
      name: "Cerberus Mine",
      icon: "cerberusmine",
      effect: "Increases the blast radius and trigger radius of the Vulture's Spider Mine by 33%.",
      modifier: "aoe",
      modifiermode: null,
      modifiertag: null,
      value: "Circular explosion against ground units: 100% damage within radius 1.2884, 50% from 1.2884 to 1.7040, and 25% from 1.7040 to 2.3275, accounting for unit size. Excludes structures.",
      operation: "replace",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 547,
      unit: "Colossus",
      commander: "Karax",
      name: "Fire Beam",
      icon: "firebeam",
      effect: "Upgrades the damage dealt by Colossi and causes their attacks to set fire to the ground, dealing an additional 150 damage to enemy ground units in the area over 5 seconds.",
      modifier: "aoe",
      modifiermode: null,
      modifiertag: null,
      value: "Two sweeping beams perpendicular to the attack direction, extending 1.25 to each side of the target and hitting in circles of radius 0.15. Also leaves four burning circles of radius 0.5, centered 0.5 and 1.5 to either side of the target, dealing up to 150 damage over 5 seconds to ground enemies.",
      operation: "replace",
      upgradetype: "upgrade"
    }
  ];

  // html/scripts/unit-ranks.ts
  var rankUpgrades = new Map;
  var effects = new Map;
  for (const upgrade of playerupgrades_default) {
    if (upgrade.commander !== "Mengsk")
      continue;
    const rank = upgrade.rank ?? (/^[123]$/.test(upgrade.name) ? Number(upgrade.name) : null);
    if (rank === null)
      continue;
    const unit = upgrade.unit.toLowerCase().replace(/[^a-z0-9]+/g, "");
    const key = `ranks/mengsk/${unit}/${rank}`;
    const rankEffects = effects.get(key) ?? new Set;
    rankEffects.add(upgrade.effect);
    effects.set(key, rankEffects);
    const previous = rankUpgrades.get(key);
    rankUpgrades.set(key, {
      commander: upgrade.commander,
      unit: upgrade.unit,
      name: upgrade.rank ? `Rank ${rank}: ${upgrade.name}` : previous?.name ?? `Rank ${rank}`,
      icon: upgrade.rank ? upgrade.icon : previous?.icon ?? "veterancy",
      effect: [...rankEffects].join(`
`)
    });
  }

  // source-data/unitskills.json
  var unitskills_default = [
    {
      commander: "Abathur",
      unit: "Brutalisk",
      name: "Deep Tunnel",
      icons: [
        "/images/commanderdata/unitskills/abathur/deeptunnel.png"
      ],
      description: "Quickly burrow to target location.",
      type: "active",
      requiresupgrade: false,
      cooldown: "10 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Abathur",
      unit: "Brutalisk",
      name: "Frenzied",
      icons: [
        "/images/commanderdata/unitskills/common/frenzied.png"
      ],
      description: "Immune to slows, snares, and stuns.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Abathur",
      unit: "Brutalisk",
      name: "Symbiote",
      icons: [
        "/images/commanderdata/unitupgrades/abathur/symbiote.png"
      ],
      description: "Carries a Symbiote that attacks nearby enemies for 20 damage every second. It also gives its host a 200-damage shield lasting 8 seconds, with a 20-second cooldown.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Abathur level 10. Values are before Symbiote mastery bonuses."
    },
    {
      commander: "Abathur",
      unit: "Devourer",
      name: "Corrosive Acid",
      icons: [
        "/images/commanderdata/unitskills/abathur/corrosiveacid.png"
      ],
      description: "Launches acid at all enemy units in the target area, reducing their attack speed by 12.5% and armor by 3. Stacks 3 times.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "45s",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Abathur",
      unit: "Leviathan",
      name: "Symbiote",
      icons: [
        "/images/commanderdata/unitupgrades/abathur/symbiote.png"
      ],
      description: "Carries a Symbiote that attacks nearby enemies for 20 damage every second. It also gives its host a 200-damage shield lasting 8 seconds, with a 20-second cooldown.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Abathur level 10. Values are before Symbiote mastery bonuses."
    },
    {
      commander: "Abathur",
      unit: "Overseer",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Abathur",
      unit: "Ravager",
      name: "Corrosive Bile",
      icons: [
        "/images/commanderdata/unitskills/abathur/corrosivebile.png"
      ],
      description: `Launch a missile at the target location, dealing 60 damage to enemy units in the area upon impact.
Can destroy Protoss Force Fields.`,
      type: "active",
      requiresupgrade: false,
      cooldown: "10 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Abathur",
      unit: "Spore Crawler",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: "Rooted",
      prestige: null,
      requirements: null
    },
    {
      commander: "Abathur",
      unit: "Swarm Host",
      name: "Spawn Locusts",
      icons: [
        "/images/commanderdata/unitskills/abathur/spawnlocusts.png"
      ],
      description: "Sends Locusts to target location.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "15s",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Abathur",
      unit: "Swarm Host",
      name: "Deep Tunnel",
      icons: [
        "/images/commanderdata/unitskills/abathur/deeptunnel.png"
      ],
      description: "Quickly burrow to a target visible location.",
      type: "active",
      requiresupgrade: true,
      cooldown: "30 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Abathur",
      unit: "Swarm Queen",
      name: "Spawn Creep Tumor",
      icons: [
        "/images/commanderdata/unitskills/abathur/spawncreeptumor.png"
      ],
      description: `A burrowed creep generator. Creep feeds nearby Zerg structures. A Creep Tumor can spawn additional Creep Tumors.
Bonus: Zerg move faster on creep.`,
      type: "active",
      requiresupgrade: false,
      cooldown: "3s",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Abathur",
      unit: "Swarm Queen",
      name: "Rapid Transfusion",
      icons: [
        "/images/commanderdata/unitskills/abathur/rapidtransfusion.png"
      ],
      description: "Heals a biological unit or structure for 25 life over time.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "3s",
      energycost: "10",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Abathur",
      unit: "Viper",
      name: "Abduct",
      icons: [
        "/images/commanderdata/unitskills/abathur/abduct.png"
      ],
      description: "Pulls target unit to the Viper. Enemy is stunned for 1 second.",
      type: "active",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: "25",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Abathur",
      unit: "Viper",
      name: "Disabling Cloud",
      icons: [
        "/images/commanderdata/unitskills/abathur/disablingcloud.png"
      ],
      description: "Creates a cloud that slows movement speed (-50%) and prevents enemy units and structures from attacking and using energy-based abilities. Lasts for 10 seconds.",
      type: "active",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: "75",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Abathur",
      unit: "Viper",
      name: "Consumption",
      icons: [
        "/images/commanderdata/unitskills/abathur/consumption.png"
      ],
      description: "Drains up to 75 life from a friendly Zerg unit and gives the Viper 2 energy for each point of life drained.",
      type: "active",
      requiresupgrade: false,
      cooldown: "10 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Abathur",
      unit: "Viper",
      name: "Parasitic Bomb",
      icons: [
        "/images/commanderdata/unitskills/abathur/parasiticbomb.png"
      ],
      description: `Creates a parasitic cloud of radius 3 that deals 90 damage over 10 seconds to the target and enemy air units nearby. If the target dies, the cloud remains in the air where the enemy died until it expires.
Cannot target ground units or structures.`,
      type: "active",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: "125",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Alarak",
      unit: "Alarak",
      name: "Deadly Charge",
      icons: [
        "/images/commanderdata/hero/alarak/deadlycharge.png"
      ],
      description: "Alarak intercepts target enemy unit and strikes it for 200 damage.",
      type: "active",
      requiresupgrade: false,
      cooldown: "10 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Alarak",
      unit: "Alarak",
      name: "Destruction Wave",
      icons: [
        "/images/commanderdata/hero/alarak/destructionwave.png"
      ],
      description: "Unleashes a massive wave of force in a straight line, dealing 50 damage to enemies in its path and knocking them back.",
      type: "active",
      requiresupgrade: false,
      cooldown: "5 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Alarak",
      unit: "Alarak",
      name: "Empower Me",
      icons: [
        "/images/commanderdata/hero/alarak/empowerme.png"
      ],
      description: `Alarak's attacks and abilities deal increased damage for each allied unit nearby. Mechanical units grant him double the power. Resets the cooldown of Deadly Charge and Destruction Wave.
Biological units provide a 5% damage bonus per supply up to 100 supply, and then provide 2.5% per supply onwards. Mechanical units provide 10% damage bonus per supply up to 100 supply, and then provide 5% per supply onwards.
Supply count is additive, with biological units favored first. So if you have 100 supply in bio and 1 supply in mechanical units, the mechanical units will provide the reduced rate of 5%.`,
      type: "active",
      requiresupgrade: false,
      cooldown: "240 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Alarak",
      unit: "Alarak",
      name: "Soul Absorption",
      icons: [
        "/images/commanderdata/progression/alarak/alarak_01.png"
      ],
      description: "Nearby enemy deaths restore 20 life and shields per supply of the slain unit. When near death, sacrifices nearby units you control to heal himself; Supplicants are consumed first. Sacrificing allies has no cooldown.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Alarak",
      unit: "Ascendant",
      name: "Psionic Orb",
      icons: [
        "/images/commanderdata/unitskills/alarak/psionicorb.png"
      ],
      description: "Unleashes a traveling Psionic Orb that deals 10 damage per second to all enemies along its path.",
      type: "active",
      requiresupgrade: false,
      cooldown: "2s",
      energycost: "100",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Alarak",
      unit: "Ascendant",
      name: "Mind Blast",
      icons: [
        "/images/commanderdata/unitskills/alarak/mindblast.png"
      ],
      description: `Deals 200 damage to target enemy unit.
Can target ground and air units.`,
      type: "active",
      requiresupgrade: true,
      cooldown: "8s",
      energycost: "100",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Alarak",
      unit: "Ascendant",
      name: "Sacrifice",
      icons: [
        "/images/commanderdata/unitskills/alarak/sacrifice.png"
      ],
      description: `Sacrifices a Supplicant to fully restore the Ascendant's energy.
Can only target Supplicants.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: "60 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Alarak",
      unit: "Havoc",
      name: "Target Lock",
      icons: [
        "/images/commanderdata/unitskills/alarak/targetlock.png"
      ],
      description: "Increases damage dealt to target enemy unit by 15%. Effect lasts as long as the Havoc remains locked onto the target.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "3s",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Alarak",
      unit: "Havoc",
      name: "Force Field",
      icons: [
        "/images/commanderdata/unitskills/alarak/forcefield.png"
      ],
      description: `Creates a solid barrier that lasts for 15 seconds and impedes movement of ground units.
Massive units shatter Force Fields on contact. (3 charges max).`,
      type: "active",
      requiresupgrade: false,
      cooldown: "15s",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      charges: 3
    },
    {
      commander: "Alarak",
      unit: "Havoc",
      name: "Cloaking Module",
      icons: [
        "/images/commanderdata/unitupgrades/alarak/cloakingmodule.png"
      ],
      description: "Permanently cloaks this unit without an energy cost. Enemies need detection to see or directly target it.",
      type: "passive",
      requiresupgrade: true,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Cloaking Module research at the Cybernetics Core."
    },
    {
      commander: "Alarak",
      unit: "Havoc",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Alarak",
      unit: "Havoc",
      name: "Squad Sight",
      icons: [
        "/images/commanderdata/unitskills/alarak/squadsight.png"
      ],
      description: "Friendly units within a radius of 4 gain 2 additional range on non-melee attacks.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Alarak",
      unit: "Mothership",
      name: "Thermal Lance",
      icons: [
        "/images/commanderdata/abilities/alarak/thermallance.png"
      ],
      description: "Deals 20 damage to all enemies in a straight line up to 10 range away.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "1 second",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Alarak",
      unit: "Mothership",
      name: "Mass Teleport",
      icons: [
        "/images/commanderdata/abilities/alarak/massteleport.png"
      ],
      description: "Teleports the Mothership and all nearby units you control to target friendly unit or structure's location.",
      type: "active",
      requiresupgrade: false,
      cooldown: "0 seconds*",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Alarak",
      unit: "Photon Cannon",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Alarak",
      unit: "Slayer",
      name: "Phase Blink",
      icons: [
        "/images/commanderdata/unitskills/alarak/phaseblink.png"
      ],
      description: "Teleports the Slayer to a nearby target location. Ability can only be used once every 8 seconds. After using Phase Blink, the Slayer's next attack within 8 seconds will deal double damage.",
      type: "active",
      requiresupgrade: true,
      cooldown: "8s",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Alarak",
      unit: "Slayer",
      name: "Phasing Armor",
      icons: [
        "/images/commanderdata/unitupgrades/alarak/phasingarmor.png"
      ],
      description: "After being attacked, becomes immune to damage for 2 seconds.",
      type: "passive",
      requiresupgrade: true,
      cooldown: "5 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Alarak level 4 and Phasing Armor research at the Death Council."
    },
    {
      commander: "Alarak",
      unit: "Supplicant",
      name: "Devotion",
      icons: [
        "/images/commanderdata/unitskills/alarak/devotion.png"
      ],
      description: "Alarak sacrifices Supplicants before other nearby units to heal himself when near death.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Alarak",
      unit: "Wrathwalker",
      name: "Cliff Walk",
      icons: [
        "/images/commanderdata/unitskills/common/cliffwalk.png"
      ],
      description: "Can walk up and down cliffs.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Artanis",
      unit: "Archon",
      name: "Feedback",
      icons: [
        "/images/commanderdata/unitskills/artanis/feedback.png"
      ],
      description: "Drains all energy from the target. Deals 1 damage per point of energy.",
      type: "active",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: "50",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Artanis",
      unit: "Archon",
      name: "Psionic Storm",
      icons: [
        "/images/commanderdata/unitskills/artanis/psionicstorm.png"
      ],
      description: "Creates a storm of psionic energy that lasts 4 seconds, causing up to 80 damage to all enemy units in the target area. Does not damage friendly units.",
      type: "active",
      requiresupgrade: true,
      cooldown: "2s",
      energycost: "75",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Artanis",
      unit: "High Templar",
      name: "Feedback",
      icons: [
        "/images/commanderdata/unitskills/artanis/feedback.png"
      ],
      description: "Drains all energy from the target. Deals 1 damage per point of energy.",
      type: "active",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: "50",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Artanis",
      unit: "High Templar",
      name: "Psionic Storm",
      icons: [
        "/images/commanderdata/unitskills/artanis/psionicstorm.png"
      ],
      description: "Creates a storm of psionic energy that lasts 4 seconds, causing up to 80 damage to all enemy units in the target area. Does not damage friendly units.",
      type: "active",
      requiresupgrade: true,
      cooldown: "2s",
      energycost: "75",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Artanis",
      unit: "Immortal",
      name: "Barrier",
      icons: [
        "/images/commanderdata/unitskills/artanis/barrier.png"
      ],
      description: "Absorbs up to 100 damage. Lasts for 10 seconds.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "60 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Artanis",
      unit: "Observer",
      name: "Permanently Cloaked",
      icons: [
        "/images/commanderdata/unitskills/common/permanentlycloakedobserver.png"
      ],
      description: "Remains cloaked at all times. Enemies need detection to see or directly target this unit.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Artanis",
      unit: "Observer",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Artanis",
      unit: "Phoenix",
      name: "Graviton Beam",
      icons: [
        "/images/commanderdata/unitskills/artanis/gravitonbeam.png"
      ],
      description: `Makes the target unit float in the air, disabling its abilities. Effect lasts up to 10 seconds.
Massive units are immune.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: "30 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Artanis",
      unit: "Photon Cannon",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Artanis",
      unit: "Reaver",
      name: "Create Scarab",
      icons: [
        "/images/commanderdata/unitskills/artanis/createscarab.png"
      ],
      description: `Builds Scarabs that automatically launch at the Reaver's target and explode for area damage.
Can attack ground units. (5 max).`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: "8s",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Artanis",
      unit: "Tempest",
      name: "Disintegration",
      icons: [
        "/images/commanderdata/unitskills/artanis/disintegration.png"
      ],
      description: "Deals 500 damage over 20 seconds to target enemy unit or structure.",
      type: "active",
      requiresupgrade: true,
      cooldown: "90 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Artanis",
      unit: "Zealot",
      name: "Charge",
      icons: [
        "/images/commanderdata/unitskills/artanis/charge.png"
      ],
      description: "Intercepts enemy ground units and increases movement speed.",
      type: "autocast",
      requiresupgrade: true,
      cooldown: "10 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Artanis",
      unit: "Zealot",
      name: "Whirlwind",
      icons: [
        "/images/commanderdata/unitskills/artanis/whirlwind.png"
      ],
      description: "Deals 10 damage per second to all nearby enemy units. Lasts 3 seconds.",
      type: "autocast",
      requiresupgrade: true,
      cooldown: "10 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Dehaka",
      unit: "Creeper Host",
      name: "Spawn Explosive Creeper",
      icons: [
        "/images/commanderdata/unitskills/dehaka/spawnexplosivecreeper.png"
      ],
      description: `Siege unit that attacks by spawning Explosive Creepers. Creepers last 25 seconds.
Creepers can attack ground units.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: "30 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Dehaka",
      unit: "Dakrun",
      name: "Brutal Charge",
      icons: [
        "/images/commanderdata/abilities/dehaka/brutalcharge.png"
      ],
      description: "Charge to a target location knocking back units in the area and dealing 200 damage.",
      type: "active",
      requiresupgrade: false,
      cooldown: "10 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Dehaka",
      unit: "Dakrun",
      name: "Greater Spiked Hide",
      icons: [
        "/images/commanderdata/unitskills/dehaka/greaterspikedhide.png"
      ],
      description: "When damaged, fires a spine at the attacker that deals 20 damage.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Dehaka level 10."
    },
    {
      commander: "Dehaka",
      unit: "Dehaka",
      name: "Leap",
      icons: [
        "/images/commanderdata/hero/dehaka/leap.png"
      ],
      description: "Dehaka leaps to the target location, dealing 145 damage to nearby enemy ground units. Each enemy hit grants Dehaka 1 armour for 2 seconds.",
      type: "active",
      requiresupgrade: false,
      cooldown: "10 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires skill points; values shown at level 3."
    },
    {
      commander: "Dehaka",
      unit: "Dehaka",
      name: "Intimidating Roar",
      icons: [
        "/images/commanderdata/hero/dehaka/intimidatingroar.png"
      ],
      description: `Dehaka terrifies nearby enemies, reducing their movement speed by 75% and attack speed by 25% for 15 seconds.
Enemies affected by Intimidating Roar have their armor reduced by 2 and cannot use abilities that cost energy.`,
      type: "active",
      requiresupgrade: false,
      cooldown: "30 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires skill points; values shown at level 3."
    },
    {
      commander: "Dehaka",
      unit: "Dehaka",
      name: "Devour",
      icons: [
        "/images/commanderdata/hero/dehaka/devour.png"
      ],
      description: "Instantly kill the target enemy unit to heal 5% Life and gain passive abilities based on the enemy type for 25 seconds. The cooldown is based on the amount of life the enemy has when killed.",
      type: "active",
      requiresupgrade: false,
      cooldown: "~ seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires skill points; values shown at level 3."
    },
    {
      commander: "Dehaka",
      unit: "Dehaka",
      name: "Scorching Breath",
      icons: [
        "/images/commanderdata/hero/dehaka/scorchingbreath.png"
      ],
      description: "Dehaka's fiery breath scorches the earth, dealing weapon damage to all enemy units in its path. 3 charges max.",
      type: "active",
      requiresupgrade: false,
      cooldown: "30 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires skill points; values shown at level 3.",
      charges: 3
    },
    {
      commander: "Dehaka",
      unit: "Dehaka",
      name: "Deep Tunnel",
      icons: [
        "/images/commanderdata/abilities/dehaka/deeptunnel.png"
      ],
      description: "Quickly burrow to any visible location.",
      type: "active",
      requiresupgrade: false,
      cooldown: "60 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Dehaka",
      unit: "Dehaka",
      name: "Primal Regeneration",
      icons: [
        "/images/commanderdata/hero/dehaka/primalregeneration.png"
      ],
      description: `Dehaka passively heals all allied units nearby.
Level 2 - 2 life per second.
Level 3 - 3 life per second.`,
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires skill points."
    },
    {
      commander: "Dehaka",
      unit: "Dehaka",
      name: "Keen Senses",
      icons: [
        "/images/commanderdata/hero/dehaka/keensenses.png"
      ],
      description: "Allows Dehaka to detect cloaked, burrowed, and hallucinated units.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires skill points."
    },
    {
      commander: "Dehaka",
      unit: "Dehaka",
      name: "Chitinous Plating",
      icons: [
        "/images/commanderdata/hero/dehaka/chitinousplating.png"
      ],
      description: "Increases Dehaka's armor by 3.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires skill points."
    },
    {
      commander: "Dehaka",
      unit: "Dehaka",
      name: "Deadly Reach",
      icons: [
        "/images/commanderdata/hero/dehaka/deadlyreach.png"
      ],
      description: "Allows Dehaka to attack air units.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires skill points."
    },
    {
      commander: "Dehaka",
      unit: "Glevig",
      name: "Incendiary Acid",
      icons: [
        "/images/commanderdata/abilities/dehaka/incendiaryacid.png"
      ],
      description: "Carpets the ground in fire. Enemy units in the area take 500 damage over 5 seconds. Can be set to Autocast.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "6 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Dehaka",
      unit: "Glevig",
      name: "Deep Tunnel",
      icons: [
        "/images/commanderdata/abilities/dehaka/deeptunnel.png"
      ],
      description: "Glevig burrows to the target location and erupts, dealing damage to units in the area and knocking them back.",
      type: "active",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Dehaka",
      unit: "Greater Primal Wurm",
      name: "Greater Bile Stream",
      icons: [
        "/images/commanderdata/abilities/dehaka/greaterbilestream.png"
      ],
      description: "Deals 70 damage per second to the target unit for 5 seconds.",
      type: "active",
      requiresupgrade: false,
      cooldown: "20 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Dehaka",
      unit: "Greater Primal Wurm",
      name: "Greater Deep Tunnel",
      icons: [
        "/images/commanderdata/abilities/dehaka/greaterdeeptunnel.png"
      ],
      description: "Quickly burrow to any visible location.",
      type: "active",
      requiresupgrade: false,
      cooldown: "60 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Dehaka",
      unit: "Greater Primal Wurm",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Dehaka",
      unit: "Murvar",
      name: "Spawn Swarm",
      icons: [
        "/images/commanderdata/abilities/dehaka/spawnswarm.png"
      ],
      description: "Spawns 6 Primal Locusts and 6 Explosive Creepers that fight for 25 seconds.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "10 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Dehaka",
      unit: "Murvar",
      name: "Oppressive Stench",
      icons: [
        "/images/commanderdata/abilities/dehaka/oppressivestench.png"
      ],
      description: "Creates a cloud that slows enemy movement speed and prevents enemy units and structures from attacking or using energy-based abilities. Lasts for 5 seconds.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "3 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Dehaka",
      unit: "Primal Guardian",
      name: "Explosive Spores",
      icons: [
        "/images/commanderdata/unitskills/dehaka/explosivespores.png"
      ],
      description: "Fires an Explosive Spore at the target, causing the target and all nearby enemy ground units to take 50 damage.",
      type: "autocast",
      requiresupgrade: true,
      cooldown: "10 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Dehaka",
      unit: "Primal Host",
      name: "Spawn Primal Locusts",
      icons: [
        "/images/commanderdata/unitskills/dehaka/spawnprimallocusts.png"
      ],
      description: `Siege unit that attacks by spawning Primal Locusts. Primal Locusts last 25 seconds.
Primal Locusts can attack ground units.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: "30 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Dehaka",
      unit: "Primal Mutalisk",
      name: "Primal Reconstitution",
      icons: [
        "/images/commanderdata/unitupgrades/dehaka/primalreconstitution.png"
      ],
      description: "Returns to life shortly after being killed.",
      type: "passive",
      requiresupgrade: true,
      cooldown: "60 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Dehaka level 7 and Primal Reconstitution research at Murvar's Den."
    },
    {
      commander: "Dehaka",
      unit: "Primal Ultralisk",
      name: "Brutal Charge",
      icons: [
        "/images/commanderdata/unitskills/dehaka/brutalcharge.png"
      ],
      description: "Charge to target location knocking back units in the area and dealing 25 damage.",
      type: "autocast",
      requiresupgrade: true,
      cooldown: "10 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Dehaka",
      unit: "Primal Ultralisk",
      name: "Frenzied",
      icons: [
        "/images/commanderdata/unitskills/common/frenzied.png"
      ],
      description: "Immune to slows, snares, and stuns.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Dehaka",
      unit: "Primal Wurm",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Dehaka",
      unit: "Tyrannozor",
      name: "Barrage of Spikes",
      icons: [
        "/images/commanderdata/unitskills/dehaka/barrageofspikes.png"
      ],
      description: "Unleash a Barrage of Spikes, dealing 100 damage to enemy ground and air units around the Tyrannozor.",
      type: "autocast",
      requiresupgrade: true,
      cooldown: "10 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Dehaka",
      unit: "Tyrannozor",
      name: "Frenzied",
      icons: [
        "/images/commanderdata/unitskills/common/frenzied.png"
      ],
      description: "Immune to slows, snares, and stuns.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Dehaka",
      unit: "Tyrannozor",
      name: "Tyrant's Protection",
      icons: [
        "/images/commanderdata/unitupgrades/dehaka/tyrantsprotection.png"
      ],
      description: "Grants nearby friendly units 2 additional armor.",
      type: "passive",
      requiresupgrade: true,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Tyrant's Protection research at Dakrun's Den."
    },
    {
      commander: "Fenix",
      unit: "Carrier",
      name: "Build Interceptor",
      icons: [
        "/images/commanderdata/unitskills/fenix/buildinterceptor.png"
      ],
      description: `Builds Interceptors that automatically attack the Carrier's target. Carriers may not attack without Interceptors.
Can attack ground and air units. 8 Interceptors max.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: "15s",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Fenix",
      unit: "Clolarion",
      name: "Build Interceptor",
      icons: [
        "/images/commanderdata/unitskills/fenix/buildinterceptor.png"
      ],
      description: `Builds Interceptors that automatically attack the Carrier's target. Carriers may not attack without Interceptors.
Can attack ground and air units. 8 Interceptors max.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: "15s",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Fenix",
      unit: "Clolarion",
      name: "Build Interdictor",
      icons: [
        "/images/commanderdata/unitskills/fenix/buildinterdictor.png"
      ],
      description: `Builds Interdictors that automatically bomb enemy ground units for 12 damage.
Can attack ground units.`,
      type: "autocast",
      requiresupgrade: true,
      cooldown: "15s",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Fenix",
      unit: "Colossus",
      name: "Cliff Walk",
      icons: [
        "/images/commanderdata/unitskills/common/cliffwalk.png"
      ],
      description: "Can walk up and down cliffs.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Fenix",
      unit: "Conservator",
      name: "Protective Field",
      icons: [
        "/images/commanderdata/unitskills/fenix/protectivefield.png"
      ],
      description: "Creates a shield that reduces all incoming attack damage to friendly units by 35%. Lasts 15 seconds.",
      type: "active",
      requiresupgrade: false,
      cooldown: "20 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Fenix",
      unit: "Disruptor",
      name: "Purification Nova",
      icons: [
        "/images/commanderdata/unitskills/fenix/purificationnova.png"
      ],
      description: "Shoots out a ball of energy that emits a powerful nova dealing 150 splash damage and an additional 50 shield damage to nearby ground units and structures.",
      type: "active",
      requiresupgrade: false,
      cooldown: "20 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Fenix",
      unit: "Disruptor",
      name: "Cloaking Module",
      icons: [
        "/images/commanderdata/unitupgrades/fenix/cloakingmodule.png"
      ],
      description: "Permanently cloaks this unit without an energy cost. Enemies need detection to see or directly target it.",
      type: "passive",
      requiresupgrade: true,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Cloaking Module research at the Robotics Bay."
    },
    {
      commander: "Fenix",
      unit: "Fenix Cybros Arbiter",
      name: "Stasis Field",
      icons: [
        "/images/commanderdata/abilities/fenix/stasisfield.png"
      ],
      description: "Places enemy units in target area into stasis for 15 seconds. Units in stasis cannot move, attack, be attacked or be affected by abilities.",
      type: "active",
      requiresupgrade: false,
      cooldown: "10 seconds",
      energycost: "50",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Fenix",
      unit: "Fenix Cybros Arbiter",
      name: "Enable Cloaking Field",
      icons: [
        "/images/commanderdata/abilities/fenix/cloakingfield.png"
      ],
      description: "Enable Cloaking Field, cloaking friendly units near Fenix. Costs 5 Energy per second to maintain.",
      type: "active",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: "5",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Fenix",
      unit: "Fenix Cybros Arbiter",
      name: "Recall",
      icons: [
        "/images/commanderdata/abilities/fenix/recall.png"
      ],
      description: "Teleports all friendly units in the target area to the location of the Arbiter.",
      type: "active",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: "100",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Fenix",
      unit: "Fenix Cybros Arbiter",
      name: "Observation Protocol",
      icons: [
        "/images/commanderdata/hero/fenix/observationprotocol.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: true,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Fenix level 6 and Observation Protocol research at the Forge."
    },
    {
      commander: "Fenix",
      unit: "Fenix Praetor Armor",
      name: "Thunderous Charge",
      icons: [
        "/images/commanderdata/abilities/fenix/thunderouscharge.png"
      ],
      description: "Fenix charges at the target location, dealing 50 damage and stunning all enemies for 5 seconds.",
      type: "active",
      requiresupgrade: false,
      cooldown: "10 seconds",
      energycost: "25",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Fenix",
      unit: "Fenix Praetor Armor",
      name: "Whirlwind",
      icons: [
        "/images/commanderdata/abilities/fenix/whirlwind.png"
      ],
      description: "All nearby enemies take 70 damage per second for 3 seconds. Fenix can move while Whirlwind is active.",
      type: "active",
      requiresupgrade: false,
      cooldown: "10 seconds",
      energycost: "50",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Fenix",
      unit: "Fenix Praetor Armor",
      name: "Shield Capacitor",
      icons: [
        "/images/commanderdata/abilities/fenix/shieldcapacitor.png"
      ],
      description: "Fully restores Fenix's shields. autocasting activates Shield Capacitor when Fenix's shields have been depleted.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "5 seconds",
      energycost: "100",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Fenix",
      unit: "Fenix Solarite Dragoon",
      name: "Solar Cannon",
      icons: [
        "/images/commanderdata/abilities/fenix/solarcannon.png"
      ],
      description: "Fires a piercing beam that deals 100 damage to all enemy ground units in its path.",
      type: "active",
      requiresupgrade: false,
      cooldown: "6 seconds",
      energycost: "50",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Fenix",
      unit: "Fenix Solarite Dragoon",
      name: "Solarite Flare",
      icons: [
        "/images/commanderdata/abilities/fenix/solariteflare.png"
      ],
      description: "Fires an air bursting flare that deals 100 damage to enemy air units.",
      type: "active",
      requiresupgrade: false,
      cooldown: "10 seconds",
      energycost: "50",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Fenix",
      unit: "Fenix Solarite Dragoon",
      name: "Arsenal Overcharge",
      icons: [
        "/images/commanderdata/abilities/fenix/arsenalovercharge.png"
      ],
      description: "Activating Arsenal Overcharge causes your damaging abilities to have no cooldown for 10 seconds.",
      type: "active",
      requiresupgrade: false,
      cooldown: "120 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Fenix",
      unit: "Immortal",
      name: "Barrier",
      icons: [
        "/images/commanderdata/unitskills/fenix/barrier.png"
      ],
      description: "Absorbs up to 100 damage. Lasts for 10 seconds.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "60 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Fenix",
      unit: "Kaldalis",
      name: "Engage",
      icons: [
        "/images/commanderdata/unitskills/fenix/engage.png"
      ],
      description: "Kaldalis intercepts the target unit.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "5s",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Fenix",
      unit: "Legionnaire",
      name: "Charge",
      icons: [
        "/images/commanderdata/unitskills/fenix/charge.png"
      ],
      description: "Intercepts enemy ground units and increases movement speed.",
      type: "autocast",
      requiresupgrade: true,
      cooldown: "10 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Fenix",
      unit: "Mojo",
      name: "Suppression Procedure",
      icons: [
        "/images/commanderdata/unitskills/fenix/suppressionprocedure.png"
      ],
      description: "Fire a barrage of Anti-Matter Missiles, dealing 6 (12 vs Armored) area damage and stunning nearby enemy air units for 1 second.",
      type: "autocast",
      requiresupgrade: true,
      cooldown: "5s",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Fenix",
      unit: "Observer",
      name: "Permanently Cloaked",
      icons: [
        "/images/commanderdata/unitskills/common/permanentlycloakedobserver.png"
      ],
      description: "Remains cloaked at all times. Enemies need detection to see or directly target this unit.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Fenix",
      unit: "Observer",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Fenix",
      unit: "Photon Cannon",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Fenix",
      unit: "Taldarin",
      name: "Barrier",
      icons: [
        "/images/commanderdata/unitskills/fenix/barrier.png"
      ],
      description: "Absorbs up to 200 damage. Lasts for 10 seconds.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "60 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Fenix",
      unit: "Talis",
      name: "Ricochet Glaive",
      icons: [
        "/images/commanderdata/unitskills/fenix/ricochetglaive.png"
      ],
      description: "An amplified Glaive that ricochets and hits up to 3 enemy units for 25 (35 vs Light) damage each.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "5 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Fenix",
      unit: "Warbringer",
      name: "Purification Blast",
      icons: [
        "/images/commanderdata/unitskills/fenix/purificationblast.png"
      ],
      description: "Fire a devastating blast that deals 150 damage the target unit.",
      type: "autocast",
      requiresupgrade: true,
      cooldown: "5 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Fenix",
      unit: "Warbringer",
      name: "Cliff Walk",
      icons: [
        "/images/commanderdata/unitskills/common/cliffwalk.png"
      ],
      description: "Can walk up and down cliffs.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Horner",
      unit: "Asteria Wraith",
      name: "Tactical Jump",
      icons: [
        "/images/commanderdata/unitskills/horner/tacticaljump.png"
      ],
      description: "Warps to the target location. Aircraft is invulnerable while warping.",
      type: "active",
      requiresupgrade: true,
      cooldown: "60 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Horner",
      unit: "Asteria Wraith",
      name: "Cloak",
      icons: [
        "/images/commanderdata/unitskills/horner/cloak.png"
      ],
      description: `Cloaks the unit, preventing enemy units from seeing or attacking it. A cloaked unit will only be revealed by detectors or effects.
Drains 0.9 energy per second.`,
      type: "active",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Horner",
      unit: "Asteria Wraith",
      name: "Trigger Override",
      icons: [
        "/images/commanderdata/unitupgrades/horner/triggeroverride.png"
      ],
      description: `Wraith attack speed increases by 10% with each attack, up to a maximum of 100%.
Passive ability.`,
      type: "passive",
      requiresupgrade: true,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Horner",
      unit: "Asteria Wraith",
      name: "Unregistered Cloaking System",
      icons: [
        "/images/commanderdata/unitupgrades/horner/unregisteredcloakingsystem.png"
      ],
      description: "Permanently cloaks this unit without an energy cost. Enemies need detection to see or directly target it.",
      type: "passive",
      requiresupgrade: true,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Unregistered Cloaking System research at the Dominion Starport Tech Lab."
    },
    {
      commander: "Horner",
      unit: "Deimos Viking",
      name: "Tactical Jump",
      icons: [
        "/images/commanderdata/unitskills/horner/tacticaljump.png"
      ],
      description: "Warps to the target location. Aircraft is invulnerable while warping.",
      type: "active",
      requiresupgrade: true,
      cooldown: "60 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Horner",
      unit: "Deimos Viking",
      name: "W.I.L.D. Missiles",
      icons: [
        "/images/commanderdata/unitskills/horner/wildmissiles.png"
      ],
      description: "Launches 5 rockets at the target unit. Each rocket deals 25 (40 vs armored) damage.",
      type: "autocast",
      requiresupgrade: true,
      cooldown: "20 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Horner",
      unit: "Hellion",
      name: "Tar Bombs",
      icons: [
        "/images/commanderdata/unitskills/horner/tarbombs.png"
      ],
      description: "Launches a tar bomb that deals 20 damage to the target unit. Nearby enemies have their movement speed reduced by 75% and attack range reduced by 3 for 5 seconds.",
      type: "autocast",
      requiresupgrade: true,
      cooldown: "10 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Horner",
      unit: "Missile Turret",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Horner",
      unit: "Reaper",
      name: "KD8 Charge",
      icons: [
        "/images/commanderdata/unitskills/horner/kd8charge.png"
      ],
      description: "Explodes after a short delay, doing 10 area damage and knocking back nearby units.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "20 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Horner",
      unit: "Sovereign Battlecruiser",
      name: "Tactical Jump",
      icons: [
        "/images/commanderdata/unitskills/horner/tacticaljump.png"
      ],
      description: "Warps to the target location. Aircraft is invulnerable while warping.",
      type: "active",
      requiresupgrade: false,
      cooldown: "60 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Horner",
      unit: "Theia Raven",
      name: "Tactical Jump",
      icons: [
        "/images/commanderdata/unitskills/horner/tacticaljump.png"
      ],
      description: "Warps to the target location. Aircraft is invulnerable while warping.",
      type: "active",
      requiresupgrade: true,
      cooldown: "60 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Horner",
      unit: "Theia Raven",
      name: "Analyze Weakness",
      icons: [
        "/images/commanderdata/unitskills/horner/analyzeweakness.png"
      ],
      description: "All Melee and Ranged attacks against Analyzed units do 3 bonus damage. Effect lasts as long as the Raven remains locked onto the target.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "3 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Horner",
      unit: "Theia Raven",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Horner",
      unit: "Theia Raven",
      name: "Imaging Radar",
      icons: [
        "/images/commanderdata/unitskills/horner/imagingradar.png"
      ],
      description: "Shows the locations of enemy units through the fog of war within a radius of 40. Radar contacts do not grant vision or detection.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Karax",
      unit: "Carrier",
      name: "Build Interceptor",
      icons: [
        "/images/commanderdata/unitskills/karax/buildinterceptor.png"
      ],
      description: `Builds Interceptors that automatically attack the Carrier's target. Carriers may not attack without Interceptors.
Can attack ground and air units. 8 Interceptors max.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: "10 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Karax",
      unit: "Carrier",
      name: "Repair Drones",
      icons: [
        "/images/commanderdata/unitupgrades/karax/repairdrones.png"
      ],
      description: "Two repair drones automatically restore life to nearby friendly mechanical units.",
      type: "passive",
      requiresupgrade: true,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Karax level 14 and Repair Drones research at the Fleet Beacon."
    },
    {
      commander: "Karax",
      unit: "Colossus",
      name: "Cliff Walk",
      icons: [
        "/images/commanderdata/unitskills/common/cliffwalk.png"
      ],
      description: "Can walk up and down cliffs.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Karax",
      unit: "Energizer",
      name: "Chrono Beam",
      icons: [
        "/images/commanderdata/unitskills/karax/chronobeam.png"
      ],
      description: "Friendly target gains 25% attack speed and 50% movement speed for 10 seconds.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: "3",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Karax",
      unit: "Energizer",
      name: "Reclamation",
      icons: [
        "/images/commanderdata/unitskills/karax/reclamation.png"
      ],
      description: "Temporarily takes control of target enemy mechanical unit. Reclaimed units self-destruct after 120 seconds.",
      type: "active",
      requiresupgrade: true,
      cooldown: "120 seconds",
      energycost: "50",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Karax",
      unit: "Immortal",
      name: "Barrier",
      icons: [
        "/images/commanderdata/unitskills/karax/barrier.png"
      ],
      description: "Absorbs up to 100 damage. Lasts for 10 seconds.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "60 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Karax",
      unit: "Immortal",
      name: "Shadow Cannon",
      icons: [
        "/images/commanderdata/unitskills/karax/shadowcannon.png"
      ],
      description: `Deal 320 damage to target unit or structure.
Can target ground and air units.`,
      type: "active",
      requiresupgrade: true,
      cooldown: "45 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Karax",
      unit: "Mirage",
      name: "Graviton Beam",
      icons: [
        "/images/commanderdata/unitskills/karax/gravitonbeam.png"
      ],
      description: `Makes the target unit float in the air, disabling its abilities. Effect lasts up to 10 seconds.
Massive units are immune.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: "30 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Karax",
      unit: "Mirage",
      name: "Phasing Armor",
      icons: [
        "/images/commanderdata/unitupgrades/karax/phasingarmor.png"
      ],
      description: "After being attacked, becomes immune to damage for 2 seconds.",
      type: "passive",
      requiresupgrade: true,
      cooldown: "5 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Karax level 14 and Phasing Armor research at the Fleet Beacon."
    },
    {
      commander: "Karax",
      unit: "Observer",
      name: "Permanently Cloaked",
      icons: [
        "/images/commanderdata/unitskills/common/permanentlycloakedobserver.png"
      ],
      description: "Remains cloaked at all times. Enemies need detection to see or directly target this unit.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Karax",
      unit: "Observer",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Karax",
      unit: "Photon Cannon",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Karax",
      unit: "Sentinel",
      name: "Charge",
      icons: [
        "/images/commanderdata/unitskills/karax/charge.png"
      ],
      description: "Intercepts enemy ground units and increases movement speed.",
      type: "autocast",
      requiresupgrade: true,
      cooldown: "10 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Karax",
      unit: "Sentinel",
      name: "Reconstruction",
      icons: [
        "/images/commanderdata/unitupgrades/karax/reconstruction.png"
      ],
      description: "After fatal damage, rebuilds itself over 5 seconds, returning with full life and shields.",
      type: "passive",
      requiresupgrade: true,
      cooldown: "120 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Karax level 4 and Reconstruction research at the Twilight Council."
    },
    {
      commander: "Kerrigan",
      unit: "Hydralisk",
      name: "Frenzy",
      icons: [
        "/images/commanderdata/unitskills/kerrigan/frenzy.png"
      ],
      description: "Attack speed increased by 50% for 15 seconds.",
      type: "autocast",
      requiresupgrade: true,
      cooldown: "30 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Kerrigan",
      unit: "Kerrigan",
      name: "Leaping Strike",
      icons: [
        "/images/commanderdata/hero/kerrigan/leapingstrike.png"
      ],
      description: "Kerrigan leaps to her target and deals 300 damage. Can be used without a target to travel quickly.",
      type: "active",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: "50",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Unavailable with Desolate Queen."
    },
    {
      commander: "Kerrigan",
      unit: "Kerrigan",
      name: "Psionic Shift",
      icons: [
        "/images/commanderdata/hero/kerrigan/psionicshift.png"
      ],
      description: "Kerrigan dashes through enemies, dealing 100 damage to all enemies in her path.",
      type: "active",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: "50",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Unavailable with Desolate Queen."
    },
    {
      commander: "Kerrigan",
      unit: "Kerrigan",
      name: "Assimilation Aura",
      icons: [
        "/images/commanderdata/hero/kerrigan/assimilationaura.png"
      ],
      description: "Causes all nearby enemies to drop resources when killed. Effect lasts for 15 seconds.",
      type: "active",
      requiresupgrade: false,
      cooldown: "120 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Unavailable with Desolate Queen."
    },
    {
      commander: "Kerrigan",
      unit: "Kerrigan",
      name: "Immobilization Wave",
      icons: [
        "/images/commanderdata/hero/kerrigan/immobilizationwave.png"
      ],
      description: `Deals 100 damage to enemies in a large area around Kerrigan (27 range) and stuns them for 10 seconds.
Heroic units are slowed.`,
      type: "active",
      requiresupgrade: false,
      cooldown: `Coolup: 600 seconds
Cooldown: 180 seconds`,
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Unavailable with Desolate Queen."
    },
    {
      commander: "Kerrigan",
      unit: "Kerrigan",
      name: "Kinetic Blast",
      icons: [
        "/images/commanderdata/hero/kerrigan/kineticblast.png"
      ],
      description: "Kerrigan deals 300 damage to target unit or structure from long range.",
      type: "active",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: "50",
      rankrequired: null,
      mode: null,
      prestige: "Desolate Queen",
      requirements: null
    },
    {
      commander: "Kerrigan",
      unit: "Kerrigan",
      name: "Crushing Grip",
      icons: [
        "/images/commanderdata/hero/kerrigan/crushinggrip.png"
      ],
      description: "Enemies in target area are stunned and take 50 damage over 5 seconds. Heroic units are slowed.",
      type: "active",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: "75",
      rankrequired: null,
      mode: null,
      prestige: "Desolate Queen",
      requirements: null
    },
    {
      commander: "Kerrigan",
      unit: "Kerrigan",
      name: "Assimilation Aura",
      icons: [
        "/images/commanderdata/hero/kerrigan/assimilationaura.png"
      ],
      description: "Causes all nearby enemies to drop resources when killed. Effect lasts for 15 seconds.",
      type: "active",
      requiresupgrade: false,
      cooldown: "120 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: "Desolate Queen",
      requirements: null
    },
    {
      commander: "Kerrigan",
      unit: "Kerrigan",
      name: "Immobilization Wave",
      icons: [
        "/images/commanderdata/hero/kerrigan/immobilizationwave.png"
      ],
      description: `Deals 100 damage to enemies in a large area around Kerrigan and stuns them for 10 seconds.
Heroic units are slowed.`,
      type: "active",
      requiresupgrade: false,
      cooldown: `Coolup: 600 seconds
Cooldown: 180 seconds`,
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: "Desolate Queen",
      requirements: null
    },
    {
      commander: "Kerrigan",
      unit: "Kerrigan",
      name: "Mutating Carapace",
      icons: [
        "/images/commanderdata/unitskills/kerrigan/mutatingcarapace.png"
      ],
      description: "Generates temporary protective life equal to 30% of damage dealt, up to 200. This protection decays over time.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Kerrigan",
      unit: "Kerrigan",
      name: "Fury",
      icons: [
        "/images/commanderdata/hero/kerrigan/fury.png"
      ],
      description: "Each attack increases attack speed by 10%, stacking up to five times for a 50% bonus. The bonus expires after 5 seconds without attacking.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Kerrigan level 10."
    },
    {
      commander: "Kerrigan",
      unit: "Overseer",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Kerrigan",
      unit: "Queen",
      name: "Spawn Creep Tumor",
      icons: [
        "/images/commanderdata/unitskills/kerrigan/spawncreeptumor.png"
      ],
      description: `A burrowed creep generator. Creep feeds nearby Zerg structures. A Creep Tumor can spawn additional Creep Tumors.
Bonus: Zerg move faster on creep.`,
      type: "active",
      requiresupgrade: false,
      cooldown: "15 seconds",
      energycost: "25",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Kerrigan",
      unit: "Queen",
      name: "Spawn Larva",
      icons: [
        "/images/commanderdata/unitskills/kerrigan/spawnlarva.png"
      ],
      description: "Target Hatchery, Lair, or Hive spawns 4 Larvae in 40 seconds.",
      type: "active",
      requiresupgrade: false,
      cooldown: "25 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Kerrigan",
      unit: "Queen",
      name: "Transfusion",
      icons: [
        "/images/commanderdata/unitskills/kerrigan/transfusion.png"
      ],
      description: "Instantly restores 125 life to target biological unit or structure.",
      type: "active",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: "50",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Kerrigan",
      unit: "Spore Crawler",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: "Rooted",
      prestige: null,
      requirements: null
    },
    {
      commander: "Kerrigan",
      unit: "Ultralisk",
      name: "Burrow Charge",
      icons: [
        "/images/commanderdata/unitskills/kerrigan/burrowcharge.png"
      ],
      description: "Ultralisk burrows and charges toward units. When the Ultralisk unburrows, all enemy units nearby are knocked back and stunned for 2 seconds.",
      type: "autocast",
      requiresupgrade: true,
      cooldown: "10 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Kerrigan",
      unit: "Ultralisk",
      name: "Frenzied",
      icons: [
        "/images/commanderdata/unitskills/common/frenzied.png"
      ],
      description: "Immune to slows, snares, and stuns.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Kerrigan",
      unit: "Ultralisk",
      name: "Reincarnation",
      icons: [
        "/images/deathprevention/torrasqueultralisk.png"
      ],
      description: "On death, forms a cocoon and returns with full life after 10 seconds. Destroying the cocoon kills the Ultralisk.",
      type: "passive",
      requiresupgrade: false,
      cooldown: "60 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Kerrigan level 14 (Torrasque strain)."
    },
    {
      commander: "Kerrigan",
      unit: "Ultralisk",
      name: "Tissue Assimilation",
      icons: [
        "/images/commanderdata/unitupgrades/kerrigan/tissueassimilation.png"
      ],
      description: "Restores life equal to 40% of damage dealt by its normal attacks.",
      type: "passive",
      requiresupgrade: true,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Tissue Assimilation research at the Ultralisk Cavern."
    },
    {
      commander: "Mengsk",
      unit: "Aegis Guard",
      name: "High-Grade Stimpacks",
      icons: [
        "/images/commanderdata/unitskills/mengsk/highgradestimpacks.png"
      ],
      description: "Increases attack speed by 200% for 10 seconds.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "30 seconds",
      energycost: null,
      rankrequired: 3,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Mengsk",
      unit: "Emperors Shadow",
      name: "Pyrokinetic Immolation",
      icons: [
        "/images/commanderdata/unitskills/mengsk/pyrokineticimmolation.png"
      ],
      description: "Immolates a target Biological enemy for 20 seconds, dealing 20 damage per second to themselves and nearby Biological enemies. Can be set to Autocast. Requires 75 energy.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "5 seconds",
      energycost: null,
      rankrequired: 0,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Mengsk",
      unit: "Emperors Shadow",
      name: "EMP Blast",
      icons: [
        "/images/commanderdata/unitskills/mengsk/empblast.png"
      ],
      description: "Deals 100 damage to shields and depletes the energy of enemy units in the target area. Stuns Mechanical units for 1 second. Cloaked units are revealed for 10 seconds after being hit. Can be set to Autocast. Requires 75 energy.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "8 seconds",
      energycost: null,
      rankrequired: 0,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Mengsk",
      unit: "Emperors Shadow",
      name: "Labyrinth Cloak",
      icons: [
        "/images/commanderdata/unitskills/mengsk/labyrinthcloak.png"
      ],
      description: "Prevents the Emperor's Shadow from taking any damage for 10 seconds after being attacked. Cannot occur more than once every 30 seconds.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "30 seconds",
      energycost: null,
      rankrequired: 1,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Mengsk",
      unit: "Emperors Shadow",
      name: "Tactical Missile Strike",
      icons: [
        "/images/commanderdata/unitskills/mengsk/tacticalmissilestrike.png"
      ],
      description: `Calls down a Tactical Missile Strike at a target location. Tactical Missiles take 4 seconds to land, but they deal up to 150 (+100 vs. structures) damage to enemies in a small radius. (100% damage within 1.5 range of the hit, 50% from 1.5 to 2.0 range)
Cooldown is time to build one missile.`,
      type: "active",
      requiresupgrade: false,
      cooldown: "90 seconds",
      energycost: null,
      rankrequired: 0,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Mengsk",
      unit: "Enthralled Ultralisk",
      name: "Frenzied",
      icons: [
        "/images/commanderdata/unitskills/common/frenzied.png"
      ],
      description: "Immune to slows, snares, and stuns.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Mengsk",
      unit: "Imperial Intercessor",
      name: "Heal",
      icons: [
        "/images/commanderdata/unitskills/mengsk/heal.png"
      ],
      description: `Heals a friendly biological target.
Heals 9 life per 3 energy.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: null,
      rankrequired: 0,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Mengsk",
      unit: "Imperial Intercessor",
      name: "Ignite Afterburners",
      icons: [
        "/images/commanderdata/unitskills/mengsk/igniteafterburners.png"
      ],
      description: "Increases this unit's movement speed by 70% for 8 seconds.",
      type: "active",
      requiresupgrade: false,
      cooldown: "15 seconds",
      energycost: null,
      rankrequired: 0,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Mengsk",
      unit: "Imperial Witness",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Mengsk",
      unit: "Missile Turret",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Mengsk",
      unit: "Pride of Augustgrad",
      name: "Yamato Cannon",
      icons: [
        "/images/commanderdata/unitskills/mengsk/yamatocannon.png"
      ],
      description: "Blasts a target with a devastating plasma cannon, causing 300 damage.",
      type: "active",
      requiresupgrade: false,
      cooldown: "120 seconds",
      energycost: null,
      rankrequired: 0,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Mengsk",
      unit: "Pride of Augustgrad",
      name: "Tactical Jump",
      icons: [
        "/images/commanderdata/unitskills/mengsk/tacticaljump.png"
      ],
      description: "Warps to the target location. Battlecruiser is invulnerable while warping.",
      type: "active",
      requiresupgrade: false,
      cooldown: "60 seconds",
      energycost: null,
      rankrequired: 0,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Nova",
      unit: "Covert Banshee",
      name: "Rocket Barrage",
      icons: [
        "/images/commanderdata/unitskills/nova/rocketbarrage.png"
      ],
      description: "Deals 75 damage to enemy ground units in the target area.",
      type: "autocast",
      requiresupgrade: true,
      cooldown: "15 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Nova",
      unit: "Covert Banshee",
      name: "Advanced Cloaking Field",
      icons: [
        "/images/commanderdata/unitupgrades/nova/advancedcloakingfield.png"
      ],
      description: "Permanently cloaks this unit without an energy cost. Enemies need detection to see or directly target it.",
      type: "passive",
      requiresupgrade: true,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Advanced Cloaking Field research at a Starport Tech Lab."
    },
    {
      commander: "Nova",
      unit: "Elite Marine",
      name: "Super Stimpack",
      icons: [
        "/images/commanderdata/unitskills/nova/superstimpack.png"
      ],
      description: "Heals the Elite Marine for 2 life per second and increases its attack speed by 50% and movement speed by 50% for 15 seconds.",
      type: "autocast",
      requiresupgrade: true,
      cooldown: "15 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Nova",
      unit: "Heavy Siege Tank",
      name: "Deploy Spider Mines",
      icons: [
        "/images/commanderdata/unitskills/nova/deployspidermines.png"
      ],
      description: "Spider Mines pursue enemy units that come in range, and detonate for heavy area damage. Buried Spider Mines can only be seen by enemy detectors. (Costs 50 minerals).",
      type: "active",
      requiresupgrade: true,
      cooldown: "30 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Nova",
      unit: "Hellbat Ranger",
      name: "Jump Jet Assault",
      icons: [
        "/images/commanderdata/unitskills/nova/jumpjetassault.png"
      ],
      description: "Launches the Hellbat Ranger toward nearby enemy ground units. Briefly stuns enemy units on impact and gains +4 armor.",
      type: "autocast",
      requiresupgrade: true,
      cooldown: "5 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Nova",
      unit: "Marauder Commando",
      name: "Magrail Munitions",
      icons: [
        "/images/commanderdata/unitskills/nova/magrailmunitions.png"
      ],
      description: "Deals 90 damage to target enemy unit.",
      type: "autocast",
      requiresupgrade: true,
      cooldown: "30 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Nova",
      unit: "Missile Turret",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Nova",
      unit: "Nova",
      name: "Snipe",
      icons: [
        "/images/commanderdata/hero/nova/snipe.png"
      ],
      description: `Deals 200 damage to target enemy ground or air unit from long range (10).
Can target biological and mechanical units.`,
      type: "active",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: "50",
      rankrequired: null,
      mode: "Stealth Mode",
      prestige: null,
      requirements: null
    },
    {
      commander: "Nova",
      unit: "Nova",
      name: "Sabotage Drone",
      icons: [
        "/images/commanderdata/hero/nova/sabotagedrone.png"
      ],
      description: "Deploys an undetectable explosive drone that deals 200 damage (400 vs Structure) to enemy ground units in the target area.",
      type: "active",
      requiresupgrade: false,
      cooldown: "45 seconds",
      energycost: "100",
      rankrequired: null,
      mode: "Stealth Mode",
      prestige: null,
      requirements: null
    },
    {
      commander: "Nova",
      unit: "Nova",
      name: "Tac Nuke Strike",
      icons: [
        "/images/commanderdata/hero/nova/tacnukestrike.png"
      ],
      description: "Calls down a Nuclear Strike at the target location, dealing 600 damage in a large radius after 5 seconds.",
      type: "active",
      requiresupgrade: false,
      cooldown: `Coolup: 600 seconds
Cooldown: 420 seconds`,
      energycost: "0",
      rankrequired: null,
      mode: "Stealth Mode",
      prestige: null,
      requirements: null
    },
    {
      commander: "Nova",
      unit: "Nova",
      name: "Penetrating Blast",
      icons: [
        "/images/commanderdata/hero/nova/penetratingblast.png"
      ],
      description: `Deals 50 (100 vs Light) damage to enemy ground units in a wide arc.
Does not damage friendly units.`,
      type: "active",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: "50",
      rankrequired: null,
      mode: "Assault Mode",
      prestige: null,
      requirements: null
    },
    {
      commander: "Nova",
      unit: "Nova",
      name: "Blink",
      icons: [
        "/images/commanderdata/hero/nova/blink.png"
      ],
      description: `Teleports Nova to a nearby location. Nova gains a temporary shield that absorbs up to 200 damage for 8 seconds.
Ability regains a charge every 8 seconds. Can store a maximum of 3 charges.`,
      type: "active",
      requiresupgrade: false,
      cooldown: "8 seconds",
      energycost: "0",
      rankrequired: null,
      mode: "Assault Mode",
      prestige: null,
      requirements: null,
      charges: 3
    },
    {
      commander: "Nova",
      unit: "Nova",
      name: "Holo Decoy",
      icons: [
        "/images/commanderdata/hero/nova/holodecoy.png"
      ],
      description: "Deploys a holographic duplicate of Nova that automatically attacks enemy units. The holo decoy lasts for 60 seconds.",
      type: "active",
      requiresupgrade: false,
      cooldown: `Coolup: 600 seconds
Cooldown: 420 seconds`,
      energycost: "0",
      rankrequired: null,
      mode: "Assault Mode",
      prestige: null,
      requirements: null
    },
    {
      commander: "Nova",
      unit: "Nova",
      name: "Ghost Visor",
      icons: [
        "/images/commanderdata/hero/nova/ghostvisor.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: true,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Ghost Visor research at the Ghost Academy."
    },
    {
      commander: "Nova",
      unit: "Raven Type II",
      name: "Build Railgun Turret",
      icons: [
        "/images/commanderdata/unitskills/nova/buildrailgunturret.png"
      ],
      description: `Automated defensive turret. Damages all enemy ground units in a straight line. Lasts for 60 seconds.
Can attack ground units.`,
      type: "active",
      requiresupgrade: false,
      cooldown: "30 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Nova",
      unit: "Raven Type II",
      name: "Deploy Bio-Mechanical Repair Drone",
      icons: [
        "/images/commanderdata/unitskills/nova/deploybiomechanicalrepairdrone.png"
      ],
      description: "Heals nearby biological and mechanical units. Lasts for 30 seconds.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "60 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Nova",
      unit: "Raven Type II",
      name: "Predator Missile",
      icons: [
        "/images/commanderdata/unitskills/nova/predatormissile.png"
      ],
      description: "Deploys a missile that pursues target enemy unit, dealing 100 (+35 vs. shields) damage in a wide radius upon contact.",
      type: "active",
      requiresupgrade: false,
      cooldown: "45 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Nova",
      unit: "Raven Type II",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Nova",
      unit: "Spec Ops Ghost",
      name: "Snipe",
      icons: [
        "/images/commanderdata/unitskills/nova/snipe.png"
      ],
      description: `Deals 170 damage to target enemy biological unit.
Mechanical units are immune.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: "30 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Nova",
      unit: "Spec Ops Ghost",
      name: "EMP Round",
      icons: [
        "/images/commanderdata/unitskills/nova/empround.png"
      ],
      description: "Deals 100 damage to shields and depletes the energy of enemy units in the target area. Cloaked units are revealed for 10 seconds after being hit.",
      type: "active",
      requiresupgrade: true,
      cooldown: "45 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Nova",
      unit: "Spec Ops Ghost",
      name: "Permanently Cloaked",
      icons: [
        "/images/commanderdata/unitskills/nova/permanentlycloaked.png"
      ],
      description: "Remains cloaked at all times. Enemies need detection to see or directly target this unit.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Raynor",
      unit: "Banshee",
      name: "Cloak",
      icons: [
        "/images/commanderdata/unitskills/raynor/cloak.png"
      ],
      description: `Cloaks the unit, preventing enemy units from seeing or attacking it. A cloaked unit will only be revealed by detectors or effects. Cloaked Banshees also have their range increased by 2.
Drains 0.9 energy per second.`,
      type: "active",
      requiresupgrade: true,
      cooldown: "0 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Raynor",
      unit: "Banshee",
      name: "Ignite Afterburners",
      icons: [
        "/images/commanderdata/unitskills/raynor/igniteafterburners.png"
      ],
      description: "Increases this unit's movement speed by 100% for 8 seconds.",
      type: "active",
      requiresupgrade: true,
      cooldown: "60 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Raynor",
      unit: "Battlecruiser",
      name: "Yamato Cannon",
      icons: [
        "/images/commanderdata/unitskills/raynor/yamatocannon.png"
      ],
      description: "Blasts a target with a devastating plasma cannon, causing 300 damage.",
      type: "active",
      requiresupgrade: true,
      cooldown: "60 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Raynor",
      unit: "Battlecruiser",
      name: "Tactical Jump",
      icons: [
        "/images/commanderdata/unitskills/raynor/tacticaljump.png"
      ],
      description: "Warps to the target location. Battlecruiser is invulnerable while warping.",
      type: "active",
      requiresupgrade: false,
      cooldown: "60 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Raynor",
      unit: "Battlecruiser",
      name: "Ignite Afterburners",
      icons: [
        "/images/commanderdata/unitskills/raynor/igniteafterburners.png"
      ],
      description: "Increases this unit's movement speed by 100% for 8 seconds.",
      type: "active",
      requiresupgrade: true,
      cooldown: "60 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Raynor",
      unit: "Firebat",
      name: "Stimpack",
      icons: [
        "/images/commanderdata/unitskills/raynor/stimpack.png"
      ],
      description: "Injects the unit with powerful stimulants that greatly increase attack speed (by 75%) and movement speed (by 50%) for 10 seconds. Injures the unit for 10 of the unit's life.",
      type: "active",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Raynor",
      unit: "Hyperion",
      name: "Hyperjump",
      icons: [
        "/images/commanderdata/abilities/raynor/hyperjump.png"
      ],
      description: "Hyperjump to the targeted location.",
      type: "active",
      requiresupgrade: false,
      cooldown: "15 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Raynor",
      unit: "Hyperion",
      name: "Yamato Cannon",
      icons: [
        "/images/commanderdata/abilities/raynor/yamatocannon.png"
      ],
      description: "Blasts a unit with a devastating plasma cannon, dealing 600 damage to it and nearby enemies.",
      type: "active",
      requiresupgrade: false,
      cooldown: "15 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Raynor",
      unit: "Hyperion",
      name: "Point Defense Drone",
      icons: [
        "/images/commanderdata/abilities/raynor/pointdefensedrone.png"
      ],
      description: `Uses a laser to shoot down enemy missiles.
Cannot target special attacks.
Times out after 180 seconds.
Each shot consumes 10 energy. (4 charges max)`,
      type: "active",
      requiresupgrade: false,
      cooldown: "5 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      charges: 4
    },
    {
      commander: "Raynor",
      unit: "Marauder",
      name: "Stimpack",
      icons: [
        "/images/commanderdata/unitskills/raynor/stimpack.png"
      ],
      description: "Injects the unit with powerful stimulants that greatly increase attack speed (by 75%) and movement speed (by 50%) for 10 seconds. Injures the unit for 10 of the unit's life.",
      type: "active",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Raynor",
      unit: "Marine",
      name: "Stimpack",
      icons: [
        "/images/commanderdata/unitskills/raynor/stimpack.png"
      ],
      description: "Injects the unit with powerful stimulants that greatly increase attack speed (by 75%) and movement speed (by 50%) for 10 seconds. Injures the unit for 5 of the unit's life.",
      type: "active",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Raynor",
      unit: "Medic",
      name: "Heal",
      icons: [
        "/images/commanderdata/unitskills/raynor/heal.png"
      ],
      description: `Heals a friendly biological target.
Heals 9 life per 3 energy per second.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Raynor",
      unit: "Missile Turret",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Raynor",
      unit: "Siege Tank",
      name: "Ignite Afterburners",
      icons: [
        "/images/commanderdata/unitskills/raynor/igniteafterburners.png"
      ],
      description: "Increases this unit's movement speed by 100% for 8 seconds.",
      type: "active",
      requiresupgrade: true,
      cooldown: "60 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Raynor",
      unit: "Viking",
      name: "Ignite Afterburners",
      icons: [
        "/images/commanderdata/unitskills/raynor/igniteafterburners.png"
      ],
      description: "Increases this unit's movement speed by 100% for 8 seconds.",
      type: "active",
      requiresupgrade: true,
      cooldown: "60 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Raynor",
      unit: "Vulture",
      name: "Deploy Spider Mine",
      icons: [
        "/images/commanderdata/unitskills/raynor/deployspidermine.png"
      ],
      description: "Spider Mines pursue enemy units that come in range, and detonate for heavy area damage. Buried Spider Mines can only be seen by enemy Detectors. (3 charges max).",
      type: "active",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      charges: 3
    },
    {
      commander: "Raynor",
      unit: "Vulture",
      name: "Replenishable Magazine",
      icons: [
        "/images/commanderdata/unitskills/raynor/replenishspidermine.png"
      ],
      description: `Constructs a new Spider Mine to replace those used at a cost of 15 minerals each.
A Vulture can only carry 3 Spider Mines at a time.`,
      type: "autocast",
      requiresupgrade: true,
      cooldown: "6 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Raynor",
      unit: "Vulture",
      name: "Ignite Afterburners",
      icons: [
        "/images/commanderdata/unitskills/raynor/igniteafterburners.png"
      ],
      description: "Increases this unit's movement speed by 100% for 8 seconds.",
      type: "active",
      requiresupgrade: true,
      cooldown: "60 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stetmann",
      unit: "Gary",
      name: "E-Gorb",
      icons: [
        "/images/commanderdata/hero/stetmann/egorb.png"
      ],
      description: "Unleashes a traveling electrical orb that deals 50 damage per second to all enemies along its path. If Gary is in a Stetzone, he unleashes three orbs instead.",
      type: "active",
      requiresupgrade: false,
      cooldown: "30 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stetmann",
      unit: "Gary",
      name: "Stetellite Overcharge",
      icons: [
        "/images/commanderdata/hero/stetmann/so1.png",
        "/images/commanderdata/hero/stetmann/so2.png",
        "/images/commanderdata/hero/stetmann/so3.png"
      ],
      description: `Overchages a target Stetellite, allowing it to actively grant bonuses to nearby units depending on the current Stetzone configuration. Overcharge effect lasts for 30 seconds, and a Stetellite is invulnerable while overcharged.
F.A.S.T. Overload grants 20% increased attack speed for 45 seconds.
H.U.G.S. Overload grants a shield that absorbs 60 damage for 45 seconds.
J.U.I.C.E. Overload regenerates 60 Egonergy and energy over 45 seconds.
(The Stetellite is overcharged for 30 seconds but grants a 45-second buff.)`,
      type: "active",
      requiresupgrade: false,
      cooldown: "45 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stetmann",
      unit: "Gary",
      name: "Semi-Stable Mass Transportation",
      icons: [
        "/images/commanderdata/hero/stetmann/ssmt.png"
      ],
      description: "Teleports Gary and all nearby units you control to a target Stetellite's location. (Does not affect ally units)",
      type: "active",
      requiresupgrade: false,
      cooldown: "180 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stetmann",
      unit: "Mecha Baneling",
      name: "Anti-Centripetal Rocket Servos",
      icons: [
        "/images/commanderdata/unitskills/stetmann/anticentripetalrocketservos.png"
      ],
      description: "Increases the movement speed of this unit by 15% and allows it to leap onto enemy units.",
      type: "autocast",
      requiresupgrade: true,
      cooldown: "5 seconds",
      energycost: "1",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stetmann",
      unit: "Mecha Battlecarrier Lord",
      name: "Ready Mecha Broodling",
      icons: [
        "/images/commanderdata/unitskills/stetmann/readymechabroodling.png"
      ],
      description: "Builds Mecha Broodlings that can attack ground units.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "3 seconds",
      energycost: "5",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stetmann",
      unit: "Mecha Battlecarrier Lord",
      name: "Build Mecha Locusceptor",
      icons: [
        "/images/commanderdata/unitskills/stetmann/buildmechalocusceptor.png"
      ],
      description: `Builds Mecha Locusceptors that automatically attack the Mecha Battlecarrier Lord's target.
Can attack ground units.`,
      type: "autocast",
      requiresupgrade: true,
      cooldown: "20 seconds",
      energycost: "50",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stetmann",
      unit: "Mecha Battlecarrier Lord",
      name: "Stetmato Cannon",
      icons: [
        "/images/commanderdata/unitskills/stetmann/stetmatocannon.png"
      ],
      description: "Blasts a target with a devastating plasma cannon causing 300 damage and delusions of grandeur.",
      type: "active",
      requiresupgrade: true,
      cooldown: "0 seconds",
      energycost: "100",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stetmann",
      unit: "Mecha Corruptor",
      name: "Cluster Busters",
      icons: [
        "/images/commanderdata/unitskills/stetmann/clusterbusters.png"
      ],
      description: "Fires a barrage of missiles dealing 50 (+30 vs. light) damage to enemy air units in a target area.",
      type: "active",
      requiresupgrade: false,
      cooldown: "10 seconds",
      energycost: "100",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stetmann",
      unit: "Mecha Corruptor",
      name: "Terraclean Solvent",
      icons: [
        "/images/commanderdata/unitskills/stetmann/terracleansolvent.png"
      ],
      description: `Emits a solvent stream that deals 10 damage per second for 3 seconds, then increases to 50 damage per second.
Channeled ability. Can target enemy ground units and structures.`,
      type: "active",
      requiresupgrade: true,
      cooldown: "20 seconds",
      energycost: "75",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stetmann",
      unit: "Mecha Infestor",
      name: "Roaches Away!",
      icons: [
        "/images/commanderdata/unitskills/stetmann/roachesaway.png"
      ],
      description: "Spawn 2 Mecha Roaches. Spawned units last 45 seconds.",
      type: "active",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: "250",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stetmann",
      unit: "Mecha Infestor",
      name: "UMI-C Charging Protocol",
      icons: [
        "/images/commanderdata/unitskills/stetmann/umicchargingprotocol.png"
      ],
      description: "The Mecha Infestor launches a mechanical nerve cord at a friendly unit, restoring 150 life, 50 Egonergy, and 50 energy instantly. An additional 600 life, 200 Egonergy, and 200 energy regenerates over 20 seconds. The unit's ability cooldown rate is increased by 25%",
      type: "active",
      requiresupgrade: true,
      cooldown: "5 seconds",
      energycost: "75",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stetmann",
      unit: "Mecha Infestor",
      name: "Deconstructive Roach-nites",
      icons: [
        "/images/commanderdata/unitskills/stetmann/deconstructiveroachnites.png"
      ],
      description: "Infests target enemy structure, dealing 500 damage over 10 seconds and disabling it for the duration of the effect. If the structure is destroyed while under the effects of Deconstructive Roach-nites, it will spawn 2 Mecha Roaches.",
      type: "active",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: "75",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stetmann",
      unit: "Mecha Lurker",
      name: "Tunnel of TERROR Algorithm",
      icons: [
        "/images/commanderdata/unitskills/stetmann/tunnelofterroralgorithm.png"
      ],
      description: "Tunnels to a nearby target location, dealing 60 damage to enemies along the way.",
      type: "active",
      requiresupgrade: false,
      cooldown: "8 seconds",
      energycost: "75",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stetmann",
      unit: "Mecha Lurker",
      name: "Focused Strike Algorithm",
      icons: [
        "/images/commanderdata/unitskills/stetmann/focusedstrikealgorithm.png"
      ],
      description: "The Mecha Lurker concentrates its fire on a target unit, dealing 50 damage to a small area around that unit for 10 seconds or until the unit is destroyed.",
      type: "active",
      requiresupgrade: true,
      cooldown: "0 seconds",
      energycost: "75",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stetmann",
      unit: "Mecha Overseer",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stetmann",
      unit: "Mecha Spore Crawler",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: "Rooted",
      prestige: null,
      requirements: null
    },
    {
      commander: "Stetmann",
      unit: "Mecha Ultralisk",
      name: "Vectored Burrow Charge",
      icons: [
        "/images/commanderdata/unitskills/stetmann/vectoredburrowcharge.png"
      ],
      description: "Burrow and charge towards a unit. Upon unburrowing, all enemy units in the vicinity are knocked back and dealt 50 damage.",
      type: "active",
      requiresupgrade: false,
      cooldown: "5 seconds",
      energycost: "75",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stetmann",
      unit: "Mecha Ultralisk",
      name: "Mecha Mooch Module",
      icons: [
        "/images/commanderdata/unitskills/stetmann/mechamoochmodule.png"
      ],
      description: "Absorbs 25 health from a nearby enemy or friendly mechanical unit, healing for that amount.",
      type: "autocast",
      requiresupgrade: true,
      cooldown: "2 seconds",
      energycost: "5",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stetmann",
      unit: "Mecha Ultralisk",
      name: "Frenzied",
      icons: [
        "/images/commanderdata/unitskills/common/frenzied.png"
      ],
      description: "Immune to slows, snares, and stuns.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stetmann",
      unit: "Super Gary",
      name: "E-Gorb",
      icons: [
        "/images/commanderdata/hero/stetmann/egorb.png"
      ],
      description: "Unleashes a traveling electrical orb that deals 50 damage per second to all enemies along its path. If Gary is in a Stetzone, he unleashes three orbs instead.",
      type: "active",
      requiresupgrade: false,
      cooldown: "30 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      charges: 2
    },
    {
      commander: "Stetmann",
      unit: "Super Gary",
      name: "Stetellite Overcharge",
      icons: [
        "/images/commanderdata/hero/stetmann/so1.png",
        "/images/commanderdata/hero/stetmann/so2.png",
        "/images/commanderdata/hero/stetmann/so3.png"
      ],
      description: `Overchages a target Stetellite, allowing it to actively grant bonuses to nearby units depending on the current Stetzone configuration. Overcharge effect lasts for 30 seconds.
- F.A.S.T. Overload grants 20% increased attack speed for 45 seconds.
- H.U.G.S. Overload grants a shield that absorbs 60 damage for 45 seconds.
- J.U.I.C.E. Overload regenerates 60 Egonergy and energy over 45 seconds.`,
      type: "active",
      requiresupgrade: false,
      cooldown: "45 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      charges: 2
    },
    {
      commander: "Stetmann",
      unit: "Super Gary",
      name: "Semi-Stable Mass Transportation",
      icons: [
        "/images/commanderdata/hero/stetmann/ssmt.png"
      ],
      description: "Teleports Gary and all nearby units you control to a target Stetellite's location. (Does not affect ally units)",
      type: "active",
      requiresupgrade: false,
      cooldown: "180 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      charges: 2
    },
    {
      commander: "Stetmann",
      unit: "Super Gary",
      name: "Gary Zone",
      icons: [
        "/images/commanderdata/hero/stetmann/garyzone1.png",
        "/images/commanderdata/hero/stetmann/garyzone2.png",
        "/images/commanderdata/hero/stetmann/garyzone3.png"
      ],
      description: "Generates a Stetzone around Super Gary for 30 seconds.",
      type: "active",
      requiresupgrade: false,
      cooldown: "120 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stetmann",
      unit: "Super Gary",
      name: "The Best Oil",
      icons: [
        "/images/commanderdata/unitskills/stetmann/thebestoil.png"
      ],
      description: "When Super Gary absorbs a Mecha Remnant, he gains 10% increased attack speed and regenerates an additional 1 life per second for 30 seconds. Can stack up to 20 times.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stetmann",
      unit: "Super Gary",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stukov",
      unit: "Apocalisk",
      name: "Cluster Rockets",
      icons: [
        "/images/commanderdata/abilities/stukov/clusterrockets.png"
      ],
      description: "Fires a salvo of 5 missiles at the target enemy air unit, dealing a total 100 damage. (40 missiles max)",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "10 seconds/5 missiles",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stukov",
      unit: "Apocalisk",
      name: "Burrow Charge",
      icons: [
        "/images/commanderdata/abilities/stukov/burrowcharge.png"
      ],
      description: "Burrow and charge at the target location dealing 150 damage and stunning non-heroic enemies for 5 seconds.",
      type: "active",
      requiresupgrade: false,
      cooldown: "10 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stukov",
      unit: "Apocalisk",
      name: "Frenzied",
      icons: [
        "/images/commanderdata/unitskills/common/frenzied.png"
      ],
      description: "Immune to slows, snares, and stuns.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stukov",
      unit: "Brood Queen",
      name: "Ocular Symbiote",
      icons: [
        "/images/commanderdata/unitskills/stukov/ocularsymbiote.png"
      ],
      description: "Increases a friendly unit's sight range by 5 and grants it the ability to detect cloaked and burrowed units for 180 seconds.",
      type: "active",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: "25",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stukov",
      unit: "Brood Queen",
      name: "Spawn Broodlings",
      icons: [
        "/images/commanderdata/unitskills/stukov/spawnbroodlings.png"
      ],
      description: "Deals 300 damage to a target enemy unit. When the unit dies, it will spawn 2 Broodlings from its corpse.",
      type: "active",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: "100",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stukov",
      unit: "Brood Queen",
      name: "Fungal Growth",
      icons: [
        "/images/commanderdata/unitskills/stukov/fungalgrowth.png"
      ],
      description: "Immobilizes enemy units and deals 80 damage over 4 seconds. Reveals cloaked and burrowed units.",
      type: "active",
      requiresupgrade: true,
      cooldown: "0 seconds",
      energycost: "75",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stukov",
      unit: "Infested Banshee",
      name: "Cloak",
      icons: [
        "/images/commanderdata/unitskills/stukov/cloak.png"
      ],
      description: `Cloaks the unit, preventing enemy units from seeing or attacking it. A cloaked unit will only be revealed by detectors or effects. Cloaked Infested Banshees also have their range increased by 2.
Drains 0.9 energy per second.`,
      type: "active",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stukov",
      unit: "Infested Banshee",
      name: "Burrow",
      icons: [
        "/images/commanderdata/unitskills/stukov/burrow.png"
      ],
      description: "Buries the unit underground. Burrowed units are unable to move or attack, but they cannot be seen without detection.",
      type: "active",
      requiresupgrade: true,
      cooldown: "0 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stukov",
      unit: "Infested Banshee",
      name: "Rapid Hibernation",
      icons: [
        "/images/commanderdata/unitupgrades/stukov/rapidhibernation.png"
      ],
      description: "Restores 20 life and energy per second while burrowed.",
      type: "passive",
      requiresupgrade: true,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: "Burrowed",
      prestige: null,
      requirements: "Requires Rapid Hibernation research at an Infested Starport Tech Lab."
    },
    {
      commander: "Stukov",
      unit: "Infested Bunker",
      name: "Spawning Chamber",
      icons: [
        "/images/commanderdata/unitskills/stukov/spawningchamber.png"
      ],
      description: "While rooted, regenerates life and creates an Infested Trooper every 30 seconds. Troopers fill empty cargo slots; once full, new Troopers deploy outside. Deployed Troopers have a 30-second lifetime.",
      type: "passive",
      requiresupgrade: false,
      cooldown: "30 seconds",
      energycost: null,
      rankrequired: null,
      mode: "Rooted",
      prestige: null,
      requirements: null
    },
    {
      commander: "Stukov",
      unit: "Infested Diamondback",
      name: "Fungal Snare",
      icons: [
        "/images/commanderdata/unitskills/stukov/fungalsnare.png"
      ],
      description: "Brings a target enemy air unit to the ground, allowing units to attack it as if it were a ground unit.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "45 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stukov",
      unit: "Infested Diamondback",
      name: "Caustic Mucus",
      icons: [
        "/images/commanderdata/unitupgrades/stukov/causticmucus.png"
      ],
      description: "Leaves an acid trail while moving, dealing 20 damage per second to enemy ground units in the trail.",
      type: "passive",
      requiresupgrade: true,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Caustic Mucus research at an Infested Factory Tech Lab."
    },
    {
      commander: "Stukov",
      unit: "Infested Missile Turret",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: "Rooted",
      prestige: null,
      requirements: null
    },
    {
      commander: "Stukov",
      unit: "Infested Siege Tank",
      name: "Deep Tunnel",
      icons: [
        "/images/commanderdata/unitskills/stukov/deeptunnel.png"
      ],
      description: "Can travel quickly to any visible location with creep.",
      type: "active",
      requiresupgrade: false,
      cooldown: "60 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stukov",
      unit: "Infested Siege Tank",
      name: "Volatile Biomass",
      icons: [
        "/images/commanderdata/unitskills/stukov/volatilebiomass.png"
      ],
      description: "Consumes a nearby Infested Civilian or Infested Trooper to restore 20 life and gain one round of ammunition. Stores up to 8 rounds.",
      type: "passive",
      requiresupgrade: false,
      cooldown: "2.5 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stukov",
      unit: "Infested Siege Tank",
      name: "Automated Mitosis",
      icons: [
        "/images/commanderdata/unitupgrades/stukov/automatedmitosis.png"
      ],
      description: "Automatically generates one round of Volatile Biomass every 30 seconds, up to a maximum of 8 stored rounds.",
      type: "passive",
      requiresupgrade: true,
      cooldown: "30 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Automated Mitosis research at an Infested Factory Tech Lab."
    },
    {
      commander: "Stukov",
      unit: "Overseer",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Swann",
      unit: "Cyclone",
      name: "Lock On",
      icons: [
        "/images/commanderdata/unitskills/swann/lockon.png"
      ],
      description: "Locks the Cyclone's weapons on the target unit, dealing 500 damage over 20 seconds. Can move while firing. Cancels if target moves out of range.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "6 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Swann",
      unit: "Hercules",
      name: "Tactical Jump",
      icons: [
        "/images/commanderdata/unitskills/swann/tacticaljump.png"
      ],
      description: "Warps to the target location. Hercules is invulnerable while warping.",
      type: "active",
      requiresupgrade: false,
      cooldown: "60 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Swann",
      unit: "Science Vessel",
      name: "Nano-Repair",
      icons: [
        "/images/commanderdata/unitskills/swann/nanorepair.png"
      ],
      description: `Heals a friendly mechanical unit.
Heals 3 life per 1 energy.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Swann",
      unit: "Science Vessel",
      name: "Irradiate",
      icons: [
        "/images/commanderdata/unitskills/swann/irradiate.png"
      ],
      description: "Damages an enemy biological unit and adjacent enemy biological units, dealing 250 damage over 25 seconds.",
      type: "active",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: "25",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Swann",
      unit: "Science Vessel",
      name: "Defensive Matrix",
      icons: [
        "/images/commanderdata/unitskills/swann/defensivematrix.png"
      ],
      description: "Surrounds the target with a shield that can absorb up to 200 damage. Effect lasts for 20 seconds.",
      type: "active",
      requiresupgrade: true,
      cooldown: "20 seconds",
      energycost: "50",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Swann",
      unit: "Science Vessel",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Swann",
      unit: "Spinning Dizzy",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Swann",
      unit: "Thor",
      name: "330mm Barrage Cannon",
      icons: [
        "/images/commanderdata/unitskills/swann/330mmbarragecannon.png"
      ],
      description: "Stuns all enemies in a small area. Deals 500 damage over 3 seconds in a larger area.",
      type: "active",
      requiresupgrade: true,
      cooldown: "60 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Swann",
      unit: "Wraith",
      name: "Cloak",
      icons: [
        "/images/commanderdata/unitskills/swann/cloak.png"
      ],
      description: `Cloaks the unit, preventing enemy units from seeing or attacking it. A cloaked unit will only be revealed by detectors or effects.
Drains 0.9 energy per second.`,
      type: "active",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Tychus",
      unit: "AutoTurret",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Tychus",
      unit: "Crooked Sam",
      name: "Demolition Charge",
      icons: [
        "/images/commanderdata/abilities/tychus/demolitioncharge.png"
      ],
      description: "Marks a target unit, dealing 500 damage after 5 seconds. Holds up to 3 charges.",
      type: "active",
      requiresupgrade: false,
      cooldown: "30 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      charges: 3
    },
    {
      commander: "Tychus",
      unit: "James Sirius Sykes",
      name: "Deploy Warhound Turret",
      icons: [
        "/images/commanderdata/abilities/tychus/deploywarhoundturret.png"
      ],
      description: `Deploy an automated defensive turret. Turrets gain the same gear bonuses as Sirius himself. Times out after 60 seconds. Holds up to 5 charges.
Can attack ground and air units.`,
      type: "active",
      requiresupgrade: false,
      cooldown: "15 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      charges: 5
    },
    {
      commander: "Tychus",
      unit: "Kev Rattlesnake West",
      name: "Deploy Revitalizer",
      icons: [
        "/images/commanderdata/abilities/tychus/deployrevitalizer.png"
      ],
      description: "Places a structure on the ground that heals all friendly units in an area around the structure for 2% of their life every second. 3 charges max.",
      type: "active",
      requiresupgrade: false,
      cooldown: "30 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      charges: 3
    },
    {
      commander: "Tychus",
      unit: "Lt Layna Nikara",
      name: "Reinvigorating Burst",
      icons: [
        "/images/commanderdata/abilities/tychus/reinvigoratingburst.png"
      ],
      description: "Instantly heals friendly units in an area around Lt. Nikara for 200 life and grants them 25% increased attack and ability damage. Regenerates an additional 10 life per second over 10 seconds.",
      type: "active",
      requiresupgrade: false,
      cooldown: "30 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Tychus",
      unit: "Lt Layna Nikara",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitupgrades/tychus/flashforcegdmvisor.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: true,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Flashforce GDM Visor research at the Engineering Bay."
    },
    {
      commander: "Tychus",
      unit: "Lt Layna Nikara",
      name: "Super Heal",
      icons: [
        "/images/commanderdata/unitskills/tychus/superheal.png"
      ],
      description: "Restores 30 life per second to a friendly biological or mechanical unit. Can heal one target at a time before gear upgrades.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: null,
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Tychus",
      unit: "Lt Layna Nikara",
      name: "XM-77 Matrix Generator",
      icons: [
        "/images/commanderdata/unitupgrades/tychus/xm77matrixgenerator.png"
      ],
      description: "Grants a friendly unit a barrier that absorbs up to 400 damage for 20 seconds.",
      type: "autocast",
      requiresupgrade: true,
      cooldown: "15 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires purchase of XM-77 Matrix Generator gear."
    },
    {
      commander: "Tychus",
      unit: "Miles Blaze Lewis",
      name: "Oil Spill",
      icons: [
        "/images/commanderdata/abilities/tychus/oilspill.png"
      ],
      description: "Douses enemy ground units in oil, reducing attack and movement speed by 75% and preventing them from cloaking. When a unit under the effect of Oil Spill is hit by a fire attack, it takes 5 (5 vs Light) damage per second over 10 seconds.",
      type: "active",
      requiresupgrade: false,
      cooldown: "15 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Tychus",
      unit: "Nux",
      name: "Ultrasonic Pulse",
      icons: [
        "/images/commanderdata/abilities/tychus/ultrasonicpulse.png"
      ],
      description: "Fires pulses of ultrasonic energy that lasts 6 seconds, causing 20 damage per second to enemy units in the target area. Does not damage friendly units. Holds up to 3 charges.",
      type: "active",
      requiresupgrade: false,
      cooldown: "30 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      charges: 3
    },
    {
      commander: "Tychus",
      unit: "Nux",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitupgrades/tychus/flashforcegdmvisor.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: true,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Flashforce GDM Visor research at the Engineering Bay."
    },
    {
      commander: "Tychus",
      unit: "Odin",
      name: "Barrage",
      icons: [
        "/images/commanderdata/abilities/tychus/barrage.png"
      ],
      description: "Stuns all enemies and deals 1000 damage over 5 seconds in a large area.",
      type: "active",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Tychus",
      unit: "Odin",
      name: "Big Red Button",
      icons: [
        "/images/commanderdata/abilities/tychus/bigredbutton.png"
      ],
      description: "Calls down a Nuclear Strike at a target location. Nukes take 3 seconds to land, but they deal up to 1000 damage in a large area.",
      type: "active",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Tychus",
      unit: "Odin",
      name: "Frenzied",
      icons: [
        "/images/commanderdata/unitskills/common/frenzied.png"
      ],
      description: "Immune to slows, snares, and stuns.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Tychus",
      unit: "Rob Cannonball Boswell",
      name: "Heavy Impact",
      icons: [
        "/images/commanderdata/abilities/tychus/heavyimpact.png"
      ],
      description: "Cannonball pulls himself to the target location, dealing 20 damage and stunning enemy units on impact.",
      type: "active",
      requiresupgrade: false,
      cooldown: "15 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Tychus",
      unit: "Rob Cannonball Boswell",
      name: "Critical Response System",
      icons: [
        "/images/commanderdata/unitupgrades/tychus/criticalresponsesystem.png"
      ],
      description: "When taking fatal damage, restores all life and becomes immune to damage for 5 seconds.",
      type: "passive",
      requiresupgrade: true,
      cooldown: "60 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires purchase of Critical Response System gear."
    },
    {
      commander: "Tychus",
      unit: "Tychus Findlay",
      name: "Shredder Grenade",
      icons: [
        "/images/commanderdata/abilities/tychus/shreddergrenade.png"
      ],
      description: "Deals 75 damage to enemy units in the target area.",
      type: "active",
      requiresupgrade: false,
      cooldown: "20 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Tychus",
      unit: "Vega",
      name: "Dominate",
      icons: [
        "/images/commanderdata/abilities/tychus/dominate.png"
      ],
      description: "Temporarily take control of target enemy unit and increases its damage by 50%. Dominated units self-destruct after 240 seconds. Holds up to 3 charges.",
      type: "active",
      requiresupgrade: false,
      cooldown: "30 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      charges: 3
    },
    {
      commander: "Tychus",
      unit: "Vega",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitupgrades/tychus/flashforcegdmvisor.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: true,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Flashforce GDM Visor research at the Engineering Bay."
    },
    {
      commander: "Tychus",
      unit: "Warhound Turret",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Vorazun",
      unit: "Centurion",
      name: "Shadow Charge",
      icons: [
        "/images/commanderdata/unitskills/vorazun/shadowcharge.png"
      ],
      description: `Intercepts nearby enemies and increases the Centurion's movement speed. Ability can only be used once every 10 seconds.
Briefly cloaks the Centurion and allows it to move through other units.`,
      type: "autocast",
      requiresupgrade: true,
      cooldown: "10 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Vorazun",
      unit: "Centurion",
      name: "Darkcoil",
      icons: [
        "/images/commanderdata/unitskills/vorazun/darkcoil.png"
      ],
      description: `Stuns nearby enemy ground units for 2.5 seconds. Also temporarily grants the Centurion 100 additional shields for 2 seconds.
Massive units are slowed.`,
      type: "autocast",
      requiresupgrade: true,
      cooldown: "10 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Vorazun",
      unit: "Corsair",
      name: "Disruption Web",
      icons: [
        "/images/commanderdata/unitskills/vorazun/disruptionweb.png"
      ],
      description: "Creates a web of energy on the ground that prevents enemy structures and ground units from attacking for 10 seconds.",
      type: "autocast",
      requiresupgrade: true,
      cooldown: "30 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Vorazun",
      unit: "Corsair",
      name: "Stealth Drive",
      icons: [
        "/images/commanderdata/unitupgrades/vorazun/stealthdrive.png"
      ],
      description: "Permanently cloaks this unit without an energy cost. Enemies need detection to see or directly target it.",
      type: "passive",
      requiresupgrade: true,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Vorazun level 12 and Stealth Drive research at the Fleet Beacon."
    },
    {
      commander: "Vorazun",
      unit: "Dark Archon",
      name: "Confusion",
      icons: [
        "/images/commanderdata/unitskills/vorazun/confusion.png"
      ],
      description: `Forces enemy units in the target area to attack each other for 10 seconds.
Heroic units are immune.`,
      type: "active",
      requiresupgrade: false,
      cooldown: "8 seconds",
      energycost: "50",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Vorazun",
      unit: "Dark Archon",
      name: "Mind Control",
      icons: [
        "/images/commanderdata/unitskills/vorazun/mindcontrol.png"
      ],
      description: `Permanently takes control of a target enemy unit.
Heroic units are immune.`,
      type: "active",
      requiresupgrade: true,
      cooldown: "30 seconds",
      energycost: "150",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Vorazun",
      unit: "Dark Pylon",
      name: "Recall",
      icons: [
        "/images/commanderdata/abilities/vorazun/recall.png"
      ],
      description: "Teleports all friendly units in the target area to the location of the Dark Pylon.",
      type: "active",
      requiresupgrade: false,
      cooldown: "60 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Vorazun",
      unit: "Dark Templar",
      name: "Shadow Fury",
      icons: [
        "/images/commanderdata/unitskills/vorazun/shadowfury.png"
      ],
      description: "Jump from target to target, dealing 20 (+15 vs. Light) damage with each jump. Hits 5 times. Invulnerable for the entire duration.",
      type: "autocast",
      requiresupgrade: true,
      cooldown: "15 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Vorazun",
      unit: "Dark Templar",
      name: "Blink",
      icons: [
        "/images/commanderdata/unitskills/vorazun/dtblink.png"
      ],
      description: "Teleport to a nearby target location.",
      type: "active",
      requiresupgrade: true,
      cooldown: "10 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Vorazun",
      unit: "Dark Templar",
      name: "Void Stasis",
      icons: [
        "/images/commanderdata/unitskills/vorazun/voidstasis.png"
      ],
      description: `Places target unit or structure in stasis for 10 seconds, disabling the unit for the duration of the effect. Units and structures in stasis cannot be attacked or affected by abilities.
Can target structures or ground units.`,
      type: "autocast",
      requiresupgrade: true,
      cooldown: "15 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Vorazun",
      unit: "Dark Templar",
      name: "Permanently Cloaked",
      icons: [
        "/images/mutatordata/amonheroes/permanentlycloaked.png"
      ],
      description: "Remains cloaked at all times. Enemies need detection to see or directly target this unit.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Vorazun",
      unit: "Oracle",
      name: "Pulsar Beam",
      icons: [
        "/images/commanderdata/unitskills/vorazun/pulsarbeam.png"
      ],
      description: `Charges the Oracle's Pulsar Beam and allows it to attack enemy ground units.
Drains 1.4 energy per second.`,
      type: "active",
      requiresupgrade: false,
      cooldown: "4 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Vorazun",
      unit: "Oracle",
      name: "Stasis Ward",
      icons: [
        "/images/commanderdata/unitskills/vorazun/stasisward.png"
      ],
      description: "Places a cloaked Stasis Ward at the target location. Once activated by an enemy ground unit, the ward traps nearby enemies in stasis for 15 seconds. Trapped units cannot be attacked or affected by abilities.",
      type: "active",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: "50",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Vorazun",
      unit: "Oracle",
      name: "Stealth Drive",
      icons: [
        "/images/commanderdata/unitupgrades/vorazun/stealthdrive.png"
      ],
      description: "Permanently cloaks this unit without an energy cost. Enemies need detection to see or directly target it.",
      type: "passive",
      requiresupgrade: true,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Vorazun level 12 and Stealth Drive research at the Fleet Beacon."
    },
    {
      commander: "Vorazun",
      unit: "Oracle",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Vorazun",
      unit: "Photon Cannon",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Vorazun",
      unit: "Shadow Guard",
      name: "Shadow Fury",
      icons: [
        "/images/commanderdata/abilities/vorazun/shadowfury.png"
      ],
      description: "Jump from target to target, dealing 20 (+15 vs. Light) damage with each jump. Hits 5 times.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "15 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Vorazun",
      unit: "Shadow Guard",
      name: "Blink",
      icons: [
        "/images/commanderdata/abilities/vorazun/dtblink.png"
      ],
      description: "Teleport to a nearby target location.",
      type: "active",
      requiresupgrade: false,
      cooldown: "10 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Vorazun",
      unit: "Shadow Guard",
      name: "Void Stasis",
      icons: [
        "/images/commanderdata/abilities/vorazun/voidstasis.png"
      ],
      description: `Places target unit or structure in stasis for 10 seconds, disabling the unit for the duration of the effect. Units and structures in stasis cannot be attacked or affected by abilities.
Can target structures or ground units.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: "15 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Vorazun",
      unit: "Shadow Guard",
      name: "Permanently Cloaked",
      icons: [
        "/images/mutatordata/amonheroes/permanentlycloaked.png"
      ],
      description: "Remains cloaked at all times. Enemies need detection to see or directly target this unit.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Vorazun",
      unit: "Stalker",
      name: "Blink",
      icons: [
        "/images/commanderdata/unitskills/vorazun/blink.png"
      ],
      description: "Teleports the Stalker to a nearby target location. Ability can only be used once every 8 seconds.",
      type: "active",
      requiresupgrade: true,
      cooldown: "8 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zagara",
      unit: "Aberration",
      name: "Towering",
      icons: [
        "/images/commanderdata/unitskills/zagara/towering.png"
      ],
      description: "Can walk over smaller ground units.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zagara",
      unit: "Aberration",
      name: "Protective Cover",
      icons: [
        "/images/commanderdata/unitupgrades/zagara/protectivecover.png"
      ],
      description: "Friendly units underneath the Aberration take 50% less damage.",
      type: "passive",
      requiresupgrade: true,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Zagara level 9 and Protective Cover research at the Evolution Chamber."
    },
    {
      commander: "Zagara",
      unit: "Aberration",
      name: "Incubate Banelings",
      icons: [
        "/images/commanderdata/progression/zagara/zagara_08.png"
      ],
      description: "Spawns two Banelings when killed.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Zagara level 8."
    },
    {
      commander: "Zagara",
      unit: "Bile Launcher",
      name: "Bombardment",
      icons: [
        "/images/commanderdata/unitskills/zagara/bombardment.png"
      ],
      description: "Constantly blasts a target area, repeatedly dealing 75 damage to enemy ground and air units.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zagara",
      unit: "Corruptor",
      name: "Corruption",
      icons: [
        "/images/commanderdata/unitskills/zagara/corruption.png"
      ],
      description: "Covers the target enemy unit in Zerg slime, increasing the damage taken by 35% for 30 seconds.",
      type: "active",
      requiresupgrade: false,
      cooldown: "15 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zagara",
      unit: "Corruptor",
      name: "Incubate Scourge",
      icons: [
        "/images/commanderdata/progression/zagara/zagara_08.png"
      ],
      description: "Spawns two Scourge when killed.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Zagara level 8."
    },
    {
      commander: "Zagara",
      unit: "Overseer",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zagara",
      unit: "Queen",
      name: "Spawn Creep Tumor",
      icons: [
        "/images/commanderdata/unitskills/zagara/spawncreeptumor.png"
      ],
      description: `A burrowed creep generator. Creep feeds nearby Zerg structures. A Creep Tumor can spawn additional Creep Tumors.
Bonus: Zerg move faster on creep.`,
      type: "active",
      requiresupgrade: false,
      cooldown: "15 seconds",
      energycost: "25",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zagara",
      unit: "Queen",
      name: "Spawn Larva",
      icons: [
        "/images/commanderdata/unitskills/zagara/spawnlarva.png"
      ],
      description: "Target Hatchery, Lair, or Hive spawns 8 Larvae in 40 seconds.",
      type: "active",
      requiresupgrade: false,
      cooldown: "25 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zagara",
      unit: "Queen",
      name: "Transfusion",
      icons: [
        "/images/commanderdata/unitskills/zagara/transfusion.png"
      ],
      description: "Instantly restores 125 life to target biological unit or structure.",
      type: "active",
      requiresupgrade: false,
      cooldown: "0 seconds",
      energycost: "50",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zagara",
      unit: "Spore Crawler",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: "Rooted",
      prestige: null,
      requirements: null
    },
    {
      commander: "Zagara",
      unit: "Zagara",
      name: "Baneling Barrage",
      icons: [
        "/images/commanderdata/hero/zagara/banelingbarrage.png"
      ],
      description: "Launches 6 Banelings towards the target point. Each Baneling explodes for 40 damage (80 vs structures).",
      type: "active",
      requiresupgrade: false,
      cooldown: "10 seconds",
      energycost: "25",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zagara",
      unit: "Zagara",
      name: "Spawn Hunter Killers",
      icons: [
        "/images/commanderdata/hero/zagara/spawnhunterkillers.png"
      ],
      description: "Spawns 6 Hunter Killers at the target point that last 20 seconds.",
      type: "active",
      requiresupgrade: false,
      cooldown: "30 seconds",
      energycost: "30",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zagara",
      unit: "Zagara",
      name: "Mass Frenzy",
      icons: [
        "/images/commanderdata/hero/zagara/massfrenzy.png"
      ],
      description: "Grants all friendly units on the map 25% attack speed and 25% movement speed for 15 seconds.",
      type: "active",
      requiresupgrade: false,
      cooldown: "90 seconds",
      energycost: "25",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zagara",
      unit: "Zagara",
      name: "Infested Drop",
      icons: [
        "/images/commanderdata/hero/zagara/infesteddrop.png"
      ],
      description: "Calls down 10 drop-pods onto the target area, dealing 50 damage with each drop-pod and spawning a total of 20 Roaches that last 30 seconds.",
      type: "active",
      requiresupgrade: false,
      cooldown: `Coolup: 600 seconds
Cooldown: 180 seconds`,
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zeratul",
      unit: "Avatar of Essence",
      name: "Devolution Wave",
      icons: [
        "/images/commanderdata/abilities/zeratul/devolutionwave.png"
      ],
      description: "Transforms all enemy units in a large area around the Avatar of Essence into a lower evolutionary form.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "20 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zeratul",
      unit: "Avatar of Form",
      name: "Summon Charged Crystals",
      icons: [
        "/images/commanderdata/abilities/zeratul/summonchargedcrystals.png"
      ],
      description: `Marks a target area on the ground. After 2 seconds, the Avatar of Form deals 100 damage and summons 10 Xel'Naga Charged Crystals at the target location.
Charged Crystals have a 10% chance to cast a miniature Psionic Storm with each attack, dealing 40 damage to all enemy units in a small area over 4 seconds.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: "25 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zeratul",
      unit: "Avatar of Form",
      name: "Psionic Gale",
      icons: [
        "/images/commanderdata/abilities/zeratul/psionicgale.png"
      ],
      description: "Creates a storm of psionic energy that lasts 4 seconds, dealing 160 damage to all enemy units in a large target area. Does not damage friendly units.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "10 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zeratul",
      unit: "Avatar of Form",
      name: "Psionic Blast",
      icons: [
        "/images/commanderdata/abilities/zeratul/psionicblast.png"
      ],
      description: "Charges up, dealing 500 damage to a target unit after 3 seconds.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "10 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zeratul",
      unit: "Dark Archon",
      name: "Mind Control",
      icons: [
        "/images/commanderdata/abilities/zeratul/mindcontrol.png"
      ],
      description: `Temporarily grants Zeratul control of a target enemy unit. Controlled units self-destruct after 120 seconds.
Heroic units are immune.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: "15 seconds",
      energycost: "150",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zeratul",
      unit: "Dark Archon",
      name: "Maelstrom",
      icons: [
        "/images/commanderdata/abilities/zeratul/maelstrom.png"
      ],
      description: `Requirements: 3rd Xel'Naga Artifact.
Temporarily stuns enemy units and structures in an area of effect for 3 seconds.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: "15 seconds",
      energycost: "50",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "3rd Xel'Naga Artifact."
    },
    {
      commander: "Zeratul",
      unit: "Serdath",
      name: "Mind Control",
      icons: [
        "/images/commanderdata/abilities/zeratul/mindcontrol.png"
      ],
      description: `Temporarily grants Zeratul control of a target enemy unit. Controlled units self-destruct after 120 seconds.
Heroic units are immune.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: "15 seconds",
      energycost: "150",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zeratul",
      unit: "Serdath",
      name: "Maelstrom",
      icons: [
        "/images/commanderdata/abilities/zeratul/maelstrom.png"
      ],
      description: `Requirements: 3rd Xel'Naga Artifact.
Temporarily stuns enemy units in an area of effect for 3 seconds.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: "15 seconds",
      energycost: "50",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "3rd Xel'Naga Artifact."
    },
    {
      commander: "Zeratul",
      unit: "Telbrus",
      name: "Psionic Storm",
      icons: [
        "/images/commanderdata/abilities/zeratul/psionicstorm.png"
      ],
      description: "Creates a storm of psionic energy that lasts 4 seconds, causing up to 112 damage to all enemy units and restoring 112 shields to all friendly units in a large target area.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "2.5 seconds",
      energycost: "75",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zeratul",
      unit: "Telbrus",
      name: "Feedback",
      icons: [
        "/images/commanderdata/abilities/zeratul/feedback.png"
      ],
      description: `Requirements: 3rd Xel'Naga Artifact.
Drains all energy from the target. Deals 1 damage per point of energy.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: "10 seconds",
      energycost: "50",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "3rd Xel'Naga Artifact."
    },
    {
      commander: "Zeratul",
      unit: "Tesseract Cannon",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zeratul",
      unit: "Tesseract Monolith",
      name: "Shade Projection",
      icons: [
        "/images/commanderdata/abilities/zeratul/shadeprojection.png"
      ],
      description: `Requirements: Core Forge and 2nd Xel'Naga Artifact Fragment
Projects the Tesseract Monolith to a target location for 60 seconds, transferring all of its shields and its weapon. The Tesseract Monolith is deactivated while this ability is active.`,
      type: "active",
      requiresupgrade: false,
      cooldown: "120 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Core Forge and 2nd Xel'Naga Artifact Fragment"
    },
    {
      commander: "Zeratul",
      unit: "Tesseract Monolith",
      name: "Shade Barrier",
      icons: [
        "/images/commanderdata/abilities/zeratul/shadebarrier.png"
      ],
      description: `Requirements: Core Forge and 3rd Xel'Naga Artifact Fragment
Absorbs up to 100 damage. Lasts for 10 seconds.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: "60 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Core Forge and 3rd Xel'Naga Artifact Fragment"
    },
    {
      commander: "Zeratul",
      unit: "Tesseract Monolith",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zeratul",
      unit: "Void Templar",
      name: "Blink",
      icons: [
        "/images/commanderdata/unitskills/zeratul/dtblink.png"
      ],
      description: "Allows the Void Templar to teleport to a nearby target location.",
      type: "active",
      requiresupgrade: true,
      cooldown: "8 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zeratul",
      unit: "Void Templar",
      name: "Permanently Cloaked",
      icons: [
        "/images/mutatordata/amonheroes/permanentlycloaked.png"
      ],
      description: "Remains cloaked at all times. Enemies need detection to see or directly target this unit.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zeratul",
      unit: "Void Templar",
      name: "Back to the Shadows",
      icons: [
        "/images/commanderdata/unitupgrades/zeratul/backtotheshadows.png"
      ],
      description: "On taking fatal damage, retreats into the Void and restores its life and shields over 10 seconds.",
      type: "passive",
      requiresupgrade: true,
      cooldown: "180 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Zeratul level 11, a Void Shrine, and three Artifact Fragments. Unavailable with Herald of the Void."
    },
    {
      commander: "Zeratul",
      unit: "XelNaga Abrogator",
      name: "Purification Nova",
      icons: [
        "/images/commanderdata/unitskills/zeratul/purificationnova.png"
      ],
      description: "Shoots out a ball of energy that detonates 3 seconds or on contact with an enemy unit, dealing 100 splash damage to nearby ground units and structures. The Xel'Naga Abrogator is immobile while this is active.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "12 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zeratul",
      unit: "XelNaga Ambusher",
      name: "Predictive Blink",
      icons: [
        "/images/commanderdata/unitskills/zeratul/predictiveblink.png"
      ],
      description: "Teleports this unit to a nearby target location.",
      type: "autocast",
      requiresupgrade: true,
      cooldown: "0 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zeratul",
      unit: "XelNaga Enforcer",
      name: "Barrier",
      icons: [
        "/images/commanderdata/unitskills/zeratul/barrier.png"
      ],
      description: "Absorbs up to 100 damage. Lasts for 10 seconds.",
      type: "autocast",
      requiresupgrade: true,
      cooldown: "60 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zeratul",
      unit: "XelNaga Shieldguard",
      name: "Shield Recharge",
      icons: [
        "/images/commanderdata/unitskills/zeratul/shieldrecharge.png"
      ],
      description: `Recharges the shields of a friendly Protoss unit.
Restores 4 shields per 1 energy.`,
      type: "autocast",
      requiresupgrade: true,
      cooldown: "0 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zeratul",
      unit: "XelNaga Shieldguard",
      name: "Reflection Shield",
      icons: [
        "/images/commanderdata/unitskills/zeratul/reflectionshield.png"
      ],
      description: "Creates an aura that reflects 50% of all projectiles back to enemy attackers. Lasts 15 seconds. Can be set to Autocast.",
      type: "autocast",
      requiresupgrade: true,
      cooldown: "180 seconds",
      energycost: "0",
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zeratul",
      unit: "XelNaga Watcher",
      name: "Permanently Cloaked",
      icons: [
        "/images/commanderdata/unitskills/common/permanentlycloakedobserver.png"
      ],
      description: "Remains cloaked at all times. Enemies need detection to see or directly target this unit.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zeratul",
      unit: "XelNaga Watcher",
      name: "Detector",
      icons: [
        "/images/commanderdata/unitskills/common/detector.png"
      ],
      description: "Reveals nearby cloaked and burrowed enemies and identifies hallucinations.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zeratul",
      unit: "Zealot",
      name: "Charge",
      icons: [
        "/images/commanderdata/abilities/zeratul/charge.png"
      ],
      description: `Requirements: 3rd Xel'Naga Artifact.
Intercepts enemy ground units and increases movement speed.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: "10 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "3rd Xel'Naga Artifact."
    },
    {
      commander: "Zeratul",
      unit: "Zealot",
      name: "Whirlwind",
      icons: [
        "/images/commanderdata/abilities/zeratul/whirlwind.png"
      ],
      description: "Deals 10 damage per second to all nearby enemy units. Lasts 3 seconds.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: "10 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zeratul",
      unit: "Zeratul",
      name: "Blink",
      icons: [
        "/images/commanderdata/hero/zeratul/blink.png"
      ],
      description: "Teleports Zeratul to a nearby location.",
      type: "active",
      requiresupgrade: false,
      cooldown: "8 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zeratul",
      unit: "Zeratul",
      name: "Summon Void Seeker",
      icons: [
        "/images/commanderdata/hero/zeratul/summonvoidseeker.png"
      ],
      description: "Transports Zeratul to a target location.",
      type: "active",
      requiresupgrade: false,
      cooldown: "120 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zeratul",
      unit: "Zeratul",
      name: "Shadow Cleave",
      icons: [
        "/images/commanderdata/hero/zeratul/shadowcleave.png"
      ],
      description: "Deals 100 damage to nearby enemies.",
      type: "active",
      requiresupgrade: false,
      cooldown: "12 seconds",
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zeratul",
      unit: "Zeratul",
      name: "Prophetic Vision",
      icons: [
        "/images/commanderdata/hero/zeratul/propheticvision.png"
      ],
      description: "Shows the location of or unearths a hidden Xel'Naga Artifact Fragment.",
      type: "active",
      requiresupgrade: false,
      cooldown: `10 seconds if Fragment is not found
Remaining seconds until next Fragment spawns if found.`,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zeratul",
      unit: "Zeratul",
      name: "One With the Shadows",
      icons: [
        "/images/commanderdata/unitskills/zeratul/onewiththeshadows.png"
      ],
      description: "Zeratul is permanently cloaked. He becomes immune to damage for 0.5 seconds after being attacked. Cannot occur more than once every 5 seconds.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    }
  ];

  // html/scripts/unit-skills.ts
  function skillKey(skill) {
    return "skills/" + [skill.commander, skill.unit, skill.name, skill.mode ?? "", skill.prestige ?? ""].map((part) => encodeURIComponent(part)).join("/");
  }
  var unitSkills = new Map(unitskills_default.map((skill) => [skillKey(skill), skill]));
  function skillCooldown(skill) {
    if (!skill.cooldown)
      return null;
    const cooldown = skill.cooldown.match(/Cooldown:\s*([^\n]+)/i)?.[1] ?? skill.cooldown;
    const seconds = cooldown.match(/^(\d+(?:\.\d+)?)\s*(?:seconds?|s)(.*)$/s);
    if (!seconds)
      return "?";
    if (Number(seconds[1]) === 0)
      return null;
    return seconds[1] + (seconds[2]?.trim() ? "*" : "");
  }
  function skillCosts(skill, race) {
    const costs = [];
    if (skill.energycost !== null && Number(skill.energycost) > 0) {
      costs.push({ icon: "/images/commanderdata/unitupgrades/iconenergy.png", label: "Energy:", value: skill.energycost });
    }
    const cooldown = skillCooldown(skill);
    if (cooldown !== null) {
      costs.push({ icon: `/images/commanderdata/unitupgrades/icontime_${race}.png`, label: "Cooldown (seconds):", value: cooldown });
    }
    return costs;
  }
  function skillDetails(skill) {
    const details = [skill.description];
    if (skill.cooldown && !/^\d+(?:\.\d+)?\s*(?:seconds?|s)$/.test(skill.cooldown)) {
      details.push(/\bCool(?:down|up):/i.test(skill.cooldown) ? skill.cooldown : `Cooldown: ${skill.cooldown}`);
    }
    if (skill.requiresupgrade)
      details.push("Requires an upgrade.");
    if (skill.rankrequired !== null)
      details.push(`Requires rank ${skill.rankrequired}.`);
    if (skill.mode)
      details.push(`Mode: ${skill.mode}`);
    if (skill.prestige)
      details.push(`Prestige: ${skill.prestige}`);
    if (skill.requirements)
      details.push(skill.requirements);
    return details;
  }

  // html/scripts/tooltips.ts
  function token(name) {
    if (name === "Dom. Trooper")
      return "dominiontrooper";
    if (name === "Dom. Assault Trooper")
      return "dominionassaulttrooper";
    if (name === "Dom. Flame Trooper")
      return "dominionflametrooper";
    if (name === "Dom. Rocket Trooper")
      return "dominionrockettrooper";
    if (name === "Tychus Findlay")
      return "tychus";
    if (name === "James Sirius Sykes")
      return "sirius";
    if (name === "Miles Blaze Lewis")
      return "blaze";
    if (name === "Rob Cannonball Boswell")
      return "cannonball";
    if (name === "Lt Layna Nikara")
      return "nikara";
    if (name === "Kev Rattlesnake West")
      return "rattlesnake";
    return name.toLowerCase().replace(/[^a-z0-9]+/g, "");
  }
  var mutatorData = new Map(mutators_default.map((mutator) => [mutator.mutatorid, mutator]));
  var upgradeData = new Map(playerupgrades_default.map((upgrade) => [`upgrades/${token(upgrade.commander)}/${upgrade.icon}`, upgrade]));
  var activeTooltipTarget = null;
  function tooltipElement() {
    let tooltip = document.getElementById("tooltip");
    if (!tooltip) {
      tooltip = document.createElement("div");
      tooltip.id = "tooltip";
      document.body.append(tooltip);
    }
    return tooltip;
  }
  function mutatorSlug(link) {
    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin)
      return null;
    const match = url.pathname.match(/^\/mutators\/([a-z0-9-]+)\/?$/);
    return match?.[1] ?? null;
  }
  function setTooltipPosition(target) {
    const tooltip = tooltipElement();
    const rect = target.getBoundingClientRect();
    const gap = 8;
    const viewportWidth = document.documentElement.clientWidth;
    const tooltipWidth = tooltip.getBoundingClientRect().width;
    if (viewportWidth - tooltipWidth - gap < rect.left) {
      tooltip.style.left = "auto";
      tooltip.style.right = `${gap}px`;
    } else {
      tooltip.style.left = `${rect.left}px`;
      tooltip.style.right = "auto";
    }
    if (rect.top < 200) {
      tooltip.style.top = `${rect.bottom + gap}px`;
      tooltip.style.bottom = "auto";
    } else {
      tooltip.style.top = "auto";
      tooltip.style.bottom = `${window.innerHeight - rect.top + gap}px`;
    }
    const bounds = tooltip.getBoundingClientRect();
    if (bounds.top < gap || bounds.bottom > window.innerHeight - gap) {
      tooltip.style.top = `${Math.max(gap, Math.min(bounds.top, window.innerHeight - bounds.height - gap))}px`;
      tooltip.style.bottom = "auto";
    }
    tooltip.style.visibility = "visible";
  }
  function prepareTooltip() {
    const tooltip = tooltipElement();
    tooltip.style.display = "block";
    tooltip.style.visibility = "hidden";
    tooltip.style.position = "fixed";
    tooltip.style.top = "0";
    tooltip.style.left = "0";
    tooltip.style.bottom = "auto";
    tooltip.style.right = "auto";
    tooltip.style.width = "max-content";
    tooltip.style.boxSizing = "border-box";
    tooltip.style.maxWidth = `${Math.min(400, document.documentElement.clientWidth)}px`;
    return tooltip;
  }
  function showMutatorTooltip(link) {
    const slug = mutatorSlug(link);
    if (!slug)
      return;
    const mutator = mutatorData.get(slug);
    if (!mutator)
      return;
    const tooltip = prepareTooltip();
    const name = document.createElement("b");
    name.textContent = mutator.mutatorname;
    tooltip.replaceChildren(name, document.createElement("br"), mutator.mutatordescription);
    activeTooltipTarget = link;
    setTooltipPosition(link);
  }
  function showUpgradeTooltip(target) {
    const key = target.dataset.tooltip;
    if (!key)
      return;
    const upgrade = rankUpgrades.get(key) ?? upgradeData.get(key);
    if (!upgrade)
      return;
    const tooltip = prepareTooltip();
    const icon = document.createElement("img");
    const isHero = token(upgrade.unit) === token(upgrade.commander) || upgrade.commander === "Fenix" && upgrade.unit.startsWith("Fenix ");
    const dir = token(upgrade.commander) !== "tychus" && isHero ? "hero" : "unitupgrades";
    icon.src = `/images/commanderdata/${dir}/${token(upgrade.commander)}/${upgrade.icon}.png`;
    icon.alt = "";
    icon.width = 50;
    icon.height = 50;
    icon.style.float = "left";
    const text = document.createElement("div");
    text.style.marginLeft = "55px";
    const name = document.createElement("b");
    name.textContent = upgrade.name;
    text.replaceChildren(name, document.createElement("br"), upgrade.effect);
    tooltip.replaceChildren(icon, text);
    activeTooltipTarget = target;
    setTooltipPosition(target);
  }
  function showSkillTooltip(target) {
    const skill = unitSkills.get(target.dataset.tooltip ?? "");
    if (!skill)
      return;
    const tooltip = prepareTooltip();
    const icons = document.createElement("div");
    icons.style.cssText = "float: left; display: grid; gap: 3px";
    for (const src of skill.icons) {
      const icon = document.createElement("img");
      icon.src = src;
      icon.alt = "";
      icon.width = 50;
      icon.height = 50;
      icons.append(icon);
    }
    const text = document.createElement("div");
    if (skill.icons.length)
      text.style.marginLeft = "55px";
    text.style.whiteSpace = "pre-line";
    const heading = document.createElement("span");
    heading.className = "skill-tooltip-heading";
    heading.style.fontWeight = "normal";
    const name = document.createElement("b");
    name.textContent = skill.name;
    heading.append(name);
    if (skill.charges)
      heading.append(` (${skill.charges} charges)`);
    for (const cost of skillCosts(skill, target.dataset.race ?? "terran")) {
      const value = document.createElement("span");
      value.style.whiteSpace = "nowrap";
      const icon = document.createElement("img");
      icon.src = cost.icon;
      icon.alt = cost.label;
      icon.width = 16;
      icon.height = 16;
      value.append(icon, ` ${cost.value}`);
      heading.append(" ", value);
    }
    if (skill.type !== "active")
      heading.append(` (${skill.type})`);
    text.append(heading);
    for (const detail of skillDetails(skill)) {
      text.append(document.createElement("br"), detail);
    }
    tooltip.replaceChildren(icons, text);
    activeTooltipTarget = target;
    setTooltipPosition(target);
  }
  function hideTooltip() {
    activeTooltipTarget = null;
    tooltipElement().style.display = "none";
  }
  function closestTooltipTarget(target) {
    if (!(target instanceof Element))
      return null;
    return target.closest("[data-tooltip], a[href]:not([data-no-tooltip])");
  }
  function showTooltip(target) {
    if (target.dataset.tooltip?.startsWith("skills/")) {
      showSkillTooltip(target);
    } else if (target.dataset.tooltip) {
      showUpgradeTooltip(target);
    } else if (target instanceof HTMLAnchorElement) {
      showMutatorTooltip(target);
    }
  }
  document.addEventListener("mouseover", (event) => {
    const target = closestTooltipTarget(event.target);
    if (target)
      showTooltip(target);
  });
  document.addEventListener("mouseout", (event) => {
    if (!activeTooltipTarget)
      return;
    if (event.relatedTarget && activeTooltipTarget.contains(event.relatedTarget))
      return;
    hideTooltip();
  });
  document.addEventListener("focusin", (event) => {
    const target = closestTooltipTarget(event.target);
    if (target)
      showTooltip(target);
  });
  document.addEventListener("focusout", (event) => {
    if (!activeTooltipTarget)
      return;
    if (event.relatedTarget && activeTooltipTarget.contains(event.relatedTarget))
      return;
    hideTooltip();
  });
})();

//# debugId=BA82832E9F23007164756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidW5pdC1yYW5rcy50cyIsICJ1bml0LXNraWxscy50cyIsICJ0b29sdGlwcy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsKICAgICJpbXBvcnQgcGxheWVyVXBncmFkZXMgZnJvbSBcIi4uLy4uL3NvdXJjZS1kYXRhL3BsYXllcnVwZ3JhZGVzLmpzb25cIjtcbmltcG9ydCB0eXBlIHsgUGxheWVyVXBncmFkZSB9IGZyb20gXCIuLi8uLi9zb3VyY2UtZGF0YS9kYXRhLXR5cGVzXCI7XG5cbnR5cGUgUmFua1VwZ3JhZGUgPSBQaWNrPFBsYXllclVwZ3JhZGUsICdjb21tYW5kZXInIHwgJ3VuaXQnIHwgJ25hbWUnIHwgJ2ljb24nIHwgJ2VmZmVjdCc+O1xuXG4vKiogVW5pdC1zcGVjaWZpYyBrZXlzIHByZXZlbnQgZGlmZmVyZW50IFZldGVyYW5jeSBlZmZlY3RzIHNoYXJpbmcgb25lIHRvb2x0aXAuICovXG5leHBvcnQgY29uc3QgcmFua1VwZ3JhZGVzID0gbmV3IE1hcDxzdHJpbmcsIFJhbmtVcGdyYWRlPigpO1xuY29uc3QgZWZmZWN0cyA9IG5ldyBNYXA8c3RyaW5nLCBTZXQ8c3RyaW5nPj4oKTtcblxuZm9yIChjb25zdCB1cGdyYWRlIG9mIHBsYXllclVwZ3JhZGVzIGFzIFBsYXllclVwZ3JhZGVbXSkge1xuICAgIGlmICh1cGdyYWRlLmNvbW1hbmRlciAhPT0gJ01lbmdzaycpIGNvbnRpbnVlO1xuICAgIGNvbnN0IHJhbmsgPSB1cGdyYWRlLnJhbmsgPz8gKC9eWzEyM10kLy50ZXN0KHVwZ3JhZGUubmFtZSkgPyBOdW1iZXIodXBncmFkZS5uYW1lKSA6IG51bGwpO1xuICAgIGlmIChyYW5rID09PSBudWxsKSBjb250aW51ZTtcbiAgICBjb25zdCB1bml0ID0gdXBncmFkZS51bml0LnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15hLXowLTldKy9nLCAnJyk7XG4gICAgY29uc3Qga2V5ID0gYHJhbmtzL21lbmdzay8ke3VuaXR9LyR7cmFua31gO1xuICAgIGNvbnN0IHJhbmtFZmZlY3RzID0gZWZmZWN0cy5nZXQoa2V5KSA/PyBuZXcgU2V0PHN0cmluZz4oKTtcbiAgICByYW5rRWZmZWN0cy5hZGQodXBncmFkZS5lZmZlY3QpO1xuICAgIGVmZmVjdHMuc2V0KGtleSwgcmFua0VmZmVjdHMpO1xuICAgIGNvbnN0IHByZXZpb3VzID0gcmFua1VwZ3JhZGVzLmdldChrZXkpO1xuICAgIHJhbmtVcGdyYWRlcy5zZXQoa2V5LCB7XG4gICAgICAgIGNvbW1hbmRlcjogdXBncmFkZS5jb21tYW5kZXIsXG4gICAgICAgIHVuaXQ6IHVwZ3JhZGUudW5pdCxcbiAgICAgICAgbmFtZTogdXBncmFkZS5yYW5rID8gYFJhbmsgJHtyYW5rfTogJHt1cGdyYWRlLm5hbWV9YCA6IHByZXZpb3VzPy5uYW1lID8/IGBSYW5rICR7cmFua31gLFxuICAgICAgICBpY29uOiB1cGdyYWRlLnJhbmsgPyB1cGdyYWRlLmljb24gOiBwcmV2aW91cz8uaWNvbiA/PyAndmV0ZXJhbmN5JyxcbiAgICAgICAgZWZmZWN0OiBbLi4ucmFua0VmZmVjdHNdLmpvaW4oJ1xcbicpLFxuICAgIH0pO1xufVxuIiwKICAgICJpbXBvcnQgc2tpbGxzSlNPTiBmcm9tIFwiLi4vLi4vc291cmNlLWRhdGEvdW5pdHNraWxscy5qc29uXCI7XG5pbXBvcnQgdHlwZSB7IFVuaXRTa2lsbCB9IGZyb20gXCIuLi8uLi9zb3VyY2UtZGF0YS9kYXRhLXR5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBza2lsbEtleShza2lsbDogVW5pdFNraWxsKTogc3RyaW5nIHtcbiAgICByZXR1cm4gJ3NraWxscy8nICsgW3NraWxsLmNvbW1hbmRlciwgc2tpbGwudW5pdCwgc2tpbGwubmFtZSwgc2tpbGwubW9kZSA/PyAnJywgc2tpbGwucHJlc3RpZ2UgPz8gJyddXG4gICAgICAgIC5tYXAocGFydCA9PiBlbmNvZGVVUklDb21wb25lbnQocGFydCkpLmpvaW4oJy8nKTtcbn1cblxuZXhwb3J0IGNvbnN0IHVuaXRTa2lsbHMgPSBuZXcgTWFwKChza2lsbHNKU09OIGFzIFVuaXRTa2lsbFtdKS5tYXAoc2tpbGwgPT4gW3NraWxsS2V5KHNraWxsKSwgc2tpbGxdKSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBza2lsbENvb2xkb3duKHNraWxsOiBVbml0U2tpbGwpOiBzdHJpbmcgfCBudWxsIHtcbiAgICBpZiAoIXNraWxsLmNvb2xkb3duKSByZXR1cm4gbnVsbDtcbiAgICAvLyBJbml0aWFsIGNvb2xkb3ducyBhcmUga2VwdCBpbiB0aGUgdG9vbHRpcDsgdGhlIHJvdyBzaG93cyB0aGUgcmVwZWF0IGNvb2xkb3duLlxuICAgIGNvbnN0IGNvb2xkb3duID0gc2tpbGwuY29vbGRvd24ubWF0Y2goL0Nvb2xkb3duOlxccyooW15cXG5dKykvaSk/LlsxXSA/PyBza2lsbC5jb29sZG93bjtcbiAgICBjb25zdCBzZWNvbmRzID0gY29vbGRvd24ubWF0Y2goL14oXFxkKyg/OlxcLlxcZCspPylcXHMqKD86c2Vjb25kcz98cykoLiopJC9zKTtcbiAgICBpZiAoIXNlY29uZHMpIHJldHVybiAnPyc7XG4gICAgaWYgKE51bWJlcihzZWNvbmRzWzFdKSA9PT0gMCkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIHNlY29uZHNbMV0hICsgKHNlY29uZHNbMl0/LnRyaW0oKSA/ICcqJyA6ICcnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNraWxsQ29zdHMoc2tpbGw6IFVuaXRTa2lsbCwgcmFjZTogc3RyaW5nKTogeyBpY29uOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfVtdIHtcbiAgICBjb25zdCBjb3N0cyA9IFtdO1xuICAgIGlmIChza2lsbC5lbmVyZ3ljb3N0ICE9PSBudWxsICYmIE51bWJlcihza2lsbC5lbmVyZ3ljb3N0KSA+IDApIHtcbiAgICAgICAgY29zdHMucHVzaCh7IGljb246ICcvaW1hZ2VzL2NvbW1hbmRlcmRhdGEvdW5pdHVwZ3JhZGVzL2ljb25lbmVyZ3kucG5nJywgbGFiZWw6ICdFbmVyZ3k6JywgdmFsdWU6IHNraWxsLmVuZXJneWNvc3QgfSk7XG4gICAgfVxuICAgIGNvbnN0IGNvb2xkb3duID0gc2tpbGxDb29sZG93bihza2lsbCk7XG4gICAgaWYgKGNvb2xkb3duICE9PSBudWxsKSB7XG4gICAgICAgIGNvc3RzLnB1c2goeyBpY29uOiBgL2ltYWdlcy9jb21tYW5kZXJkYXRhL3VuaXR1cGdyYWRlcy9pY29udGltZV8ke3JhY2V9LnBuZ2AsIGxhYmVsOiAnQ29vbGRvd24gKHNlY29uZHMpOicsIHZhbHVlOiBjb29sZG93biB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGNvc3RzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2tpbGxEZXRhaWxzKHNraWxsOiBVbml0U2tpbGwpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZGV0YWlscyA9IFtza2lsbC5kZXNjcmlwdGlvbl07XG4gICAgLy8gT3JkaW5hcnkgY29zdHMgYXJlIGluIHRoZSBoZWFkaW5nOyByZXRhaW4gaW5pdGlhbCBhbmQgY29uZGl0aW9uYWwgdGltaW5ncyBoZXJlLlxuICAgIGlmIChza2lsbC5jb29sZG93biAmJiAhL15cXGQrKD86XFwuXFxkKyk/XFxzKig/OnNlY29uZHM/fHMpJC8udGVzdChza2lsbC5jb29sZG93bikpIHtcbiAgICAgICAgZGV0YWlscy5wdXNoKC9cXGJDb29sKD86ZG93bnx1cCk6L2kudGVzdChza2lsbC5jb29sZG93bikgPyBza2lsbC5jb29sZG93biA6IGBDb29sZG93bjogJHtza2lsbC5jb29sZG93bn1gKTtcbiAgICB9XG4gICAgaWYgKHNraWxsLnJlcXVpcmVzdXBncmFkZSkgZGV0YWlscy5wdXNoKCdSZXF1aXJlcyBhbiB1cGdyYWRlLicpO1xuICAgIGlmIChza2lsbC5yYW5rcmVxdWlyZWQgIT09IG51bGwpIGRldGFpbHMucHVzaChgUmVxdWlyZXMgcmFuayAke3NraWxsLnJhbmtyZXF1aXJlZH0uYCk7XG4gICAgaWYgKHNraWxsLm1vZGUpIGRldGFpbHMucHVzaChgTW9kZTogJHtza2lsbC5tb2RlfWApO1xuICAgIGlmIChza2lsbC5wcmVzdGlnZSkgZGV0YWlscy5wdXNoKGBQcmVzdGlnZTogJHtza2lsbC5wcmVzdGlnZX1gKTtcbiAgICBpZiAoc2tpbGwucmVxdWlyZW1lbnRzKSBkZXRhaWxzLnB1c2goc2tpbGwucmVxdWlyZW1lbnRzKTtcbiAgICByZXR1cm4gZGV0YWlscztcbn1cbiIsCiAgICAiaW1wb3J0IG11dGF0b3JzIGZyb20gXCIuLi8uLi9zb3VyY2UtZGF0YS9tdXRhdG9ycy5qc29uXCI7XG5pbXBvcnQgcGxheWVyVXBncmFkZXMgZnJvbSBcIi4uLy4uL3NvdXJjZS1kYXRhL3BsYXllcnVwZ3JhZGVzLmpzb25cIjtcbmltcG9ydCB7IHJhbmtVcGdyYWRlcyB9IGZyb20gXCIuL3VuaXQtcmFua3NcIjtcbmltcG9ydCB7IHNraWxsQ29zdHMsIHNraWxsRGV0YWlscywgdW5pdFNraWxscyB9IGZyb20gXCIuL3VuaXQtc2tpbGxzXCI7XG5cbmZ1bmN0aW9uIHRva2VuKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKG5hbWUgPT09IFwiRG9tLiBUcm9vcGVyXCIpIHJldHVybiAnZG9taW5pb250cm9vcGVyJztcbiAgICBpZiAobmFtZSA9PT0gXCJEb20uIEFzc2F1bHQgVHJvb3BlclwiKSByZXR1cm4gJ2RvbWluaW9uYXNzYXVsdHRyb29wZXInO1xuICAgIGlmIChuYW1lID09PSBcIkRvbS4gRmxhbWUgVHJvb3BlclwiKSByZXR1cm4gJ2RvbWluaW9uZmxhbWV0cm9vcGVyJztcbiAgICBpZiAobmFtZSA9PT0gXCJEb20uIFJvY2tldCBUcm9vcGVyXCIpIHJldHVybiAnZG9taW5pb25yb2NrZXR0cm9vcGVyJztcbiAgICBpZiAobmFtZSA9PT0gXCJUeWNodXMgRmluZGxheVwiKSByZXR1cm4gJ3R5Y2h1cyc7XG4gICAgaWYgKG5hbWUgPT09IFwiSmFtZXMgU2lyaXVzIFN5a2VzXCIpIHJldHVybiAnc2lyaXVzJztcbiAgICBpZiAobmFtZSA9PT0gXCJNaWxlcyBCbGF6ZSBMZXdpc1wiKSByZXR1cm4gJ2JsYXplJztcbiAgICBpZiAobmFtZSA9PT0gXCJSb2IgQ2Fubm9uYmFsbCBCb3N3ZWxsXCIpIHJldHVybiAnY2Fubm9uYmFsbCc7XG4gICAgaWYgKG5hbWUgPT09IFwiTHQgTGF5bmEgTmlrYXJhXCIpIHJldHVybiAnbmlrYXJhJztcbiAgICBpZiAobmFtZSA9PT0gXCJLZXYgUmF0dGxlc25ha2UgV2VzdFwiKSByZXR1cm4gJ3JhdHRsZXNuYWtlJztcblxuICAgIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvW15hLXowLTldKy9nLCBcIlwiKTtcbn1cblxuY29uc3QgbXV0YXRvckRhdGEgPSBuZXcgTWFwKG11dGF0b3JzLm1hcChtdXRhdG9yID0+IFttdXRhdG9yLm11dGF0b3JpZCwgbXV0YXRvcl0pKTtcbmNvbnN0IHVwZ3JhZGVEYXRhID0gbmV3IE1hcChwbGF5ZXJVcGdyYWRlcy5tYXAodXBncmFkZSA9PiBbYHVwZ3JhZGVzLyR7dG9rZW4odXBncmFkZS5jb21tYW5kZXIpfS8ke3VwZ3JhZGUuaWNvbn1gLCB1cGdyYWRlXSkpO1xubGV0IGFjdGl2ZVRvb2x0aXBUYXJnZXQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XG5cbmZ1bmN0aW9uIHRvb2x0aXBFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICBsZXQgdG9vbHRpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9vbHRpcFwiKTtcbiAgICBpZiAoIXRvb2x0aXApIHtcbiAgICAgICAgdG9vbHRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvb2x0aXAuaWQgPSBcInRvb2x0aXBcIjtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodG9vbHRpcCk7XG4gICAgfVxuICAgIHJldHVybiB0b29sdGlwO1xufVxuXG5mdW5jdGlvbiBtdXRhdG9yU2x1ZyhsaW5rOiBIVE1MQW5jaG9yRWxlbWVudCk6IHN0cmluZyB8IG51bGwge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwobGluay5ocmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgaWYgKHVybC5vcmlnaW4gIT09IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pIHJldHVybiBudWxsO1xuICAgIGNvbnN0IG1hdGNoID0gdXJsLnBhdGhuYW1lLm1hdGNoKC9eXFwvbXV0YXRvcnNcXC8oW2EtejAtOS1dKylcXC8/JC8pO1xuICAgIHJldHVybiBtYXRjaD8uWzFdID8/IG51bGw7XG59XG5cbmZ1bmN0aW9uIHNldFRvb2x0aXBQb3NpdGlvbih0YXJnZXQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3QgdG9vbHRpcCA9IHRvb2x0aXBFbGVtZW50KCk7XG4gICAgY29uc3QgcmVjdCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBnYXAgPSA4O1xuICAgIGNvbnN0IHZpZXdwb3J0V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XG4gICAgY29uc3QgdG9vbHRpcFdpZHRoID0gdG9vbHRpcC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICBpZiAodmlld3BvcnRXaWR0aCAtIHRvb2x0aXBXaWR0aCAtIGdhcCA8IHJlY3QubGVmdCkge1xuICAgICAgICB0b29sdGlwLnN0eWxlLmxlZnQgPSBcImF1dG9cIjtcbiAgICAgICAgdG9vbHRpcC5zdHlsZS5yaWdodCA9IGAke2dhcH1weGA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdG9vbHRpcC5zdHlsZS5sZWZ0ID0gYCR7cmVjdC5sZWZ0fXB4YDtcbiAgICAgICAgdG9vbHRpcC5zdHlsZS5yaWdodCA9IFwiYXV0b1wiO1xuICAgIH1cblxuICAgIGlmIChyZWN0LnRvcCA8IDIwMCkge1xuICAgICAgICB0b29sdGlwLnN0eWxlLnRvcCA9IGAke3JlY3QuYm90dG9tICsgZ2FwfXB4YDtcbiAgICAgICAgdG9vbHRpcC5zdHlsZS5ib3R0b20gPSBcImF1dG9cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0b29sdGlwLnN0eWxlLnRvcCA9IFwiYXV0b1wiO1xuICAgICAgICB0b29sdGlwLnN0eWxlLmJvdHRvbSA9IGAke3dpbmRvdy5pbm5lckhlaWdodCAtIHJlY3QudG9wICsgZ2FwfXB4YDtcbiAgICB9XG4gICAgLy8gTG9uZyBza2lsbCBkZXNjcmlwdGlvbnMgY2FuIG5lZWQgbW9yZSByb29tIHRoYW4gdGhlIHNwYWNlIGFib3ZlIHRoZSByb3cuXG4gICAgY29uc3QgYm91bmRzID0gdG9vbHRpcC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBpZiAoYm91bmRzLnRvcCA8IGdhcCB8fCBib3VuZHMuYm90dG9tID4gd2luZG93LmlubmVySGVpZ2h0IC0gZ2FwKSB7XG4gICAgICAgIHRvb2x0aXAuc3R5bGUudG9wID0gYCR7TWF0aC5tYXgoZ2FwLCBNYXRoLm1pbihib3VuZHMudG9wLCB3aW5kb3cuaW5uZXJIZWlnaHQgLSBib3VuZHMuaGVpZ2h0IC0gZ2FwKSl9cHhgO1xuICAgICAgICB0b29sdGlwLnN0eWxlLmJvdHRvbSA9IFwiYXV0b1wiO1xuICAgIH1cbiAgICB0b29sdGlwLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVRvb2x0aXAoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHRvb2x0aXAgPSB0b29sdGlwRWxlbWVudCgpO1xuICAgIHRvb2x0aXAuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICB0b29sdGlwLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgIHRvb2x0aXAuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XG4gICAgdG9vbHRpcC5zdHlsZS50b3AgPSBcIjBcIjtcbiAgICB0b29sdGlwLnN0eWxlLmxlZnQgPSBcIjBcIjtcbiAgICB0b29sdGlwLnN0eWxlLmJvdHRvbSA9IFwiYXV0b1wiO1xuICAgIHRvb2x0aXAuc3R5bGUucmlnaHQgPSBcImF1dG9cIjtcbiAgICB0b29sdGlwLnN0eWxlLndpZHRoID0gXCJtYXgtY29udGVudFwiO1xuICAgIHRvb2x0aXAuc3R5bGUuYm94U2l6aW5nID0gXCJib3JkZXItYm94XCI7XG4gICAgdG9vbHRpcC5zdHlsZS5tYXhXaWR0aCA9IGAke01hdGgubWluKDQwMCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKX1weGA7XG4gICAgcmV0dXJuIHRvb2x0aXA7XG59XG5cbmZ1bmN0aW9uIHNob3dNdXRhdG9yVG9vbHRpcChsaW5rOiBIVE1MQW5jaG9yRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IHNsdWcgPSBtdXRhdG9yU2x1ZyhsaW5rKTtcbiAgICBpZiAoIXNsdWcpIHJldHVybjtcbiAgICBjb25zdCBtdXRhdG9yID0gbXV0YXRvckRhdGEuZ2V0KHNsdWcpO1xuICAgIGlmICghbXV0YXRvcikgcmV0dXJuO1xuXG4gICAgY29uc3QgdG9vbHRpcCA9IHByZXBhcmVUb29sdGlwKCk7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiXCIpO1xuICAgIG5hbWUudGV4dENvbnRlbnQgPSBtdXRhdG9yLm11dGF0b3JuYW1lO1xuICAgIHRvb2x0aXAucmVwbGFjZUNoaWxkcmVuKG5hbWUsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSwgbXV0YXRvci5tdXRhdG9yZGVzY3JpcHRpb24pO1xuICAgIGFjdGl2ZVRvb2x0aXBUYXJnZXQgPSBsaW5rO1xuICAgIHNldFRvb2x0aXBQb3NpdGlvbihsaW5rKTtcbn1cblxuZnVuY3Rpb24gc2hvd1VwZ3JhZGVUb29sdGlwKHRhcmdldDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBrZXkgPSB0YXJnZXQuZGF0YXNldC50b29sdGlwO1xuICAgIGlmICgha2V5KSByZXR1cm47XG4gICAgY29uc3QgdXBncmFkZSA9IHJhbmtVcGdyYWRlcy5nZXQoa2V5KSA/PyB1cGdyYWRlRGF0YS5nZXQoa2V5KTtcbiAgICBpZiAoIXVwZ3JhZGUpIHJldHVybjtcblxuICAgIGNvbnN0IHRvb2x0aXAgPSBwcmVwYXJlVG9vbHRpcCgpO1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGNvbnN0IGlzSGVybyA9IHRva2VuKHVwZ3JhZGUudW5pdCkgPT09IHRva2VuKHVwZ3JhZGUuY29tbWFuZGVyKSB8fCAodXBncmFkZS5jb21tYW5kZXIgPT09ICdGZW5peCcgJiYgdXBncmFkZS51bml0LnN0YXJ0c1dpdGgoJ0Zlbml4ICcpKTtcbiAgICBjb25zdCBkaXIgPSB0b2tlbih1cGdyYWRlLmNvbW1hbmRlcikgIT09ICd0eWNodXMnICYmIGlzSGVybyA/IFwiaGVyb1wiIDogXCJ1bml0dXBncmFkZXNcIjtcbiAgICBpY29uLnNyYyA9IGAvaW1hZ2VzL2NvbW1hbmRlcmRhdGEvJHtkaXJ9LyR7dG9rZW4odXBncmFkZS5jb21tYW5kZXIpfS8ke3VwZ3JhZGUuaWNvbn0ucG5nYDtcbiAgICBpY29uLmFsdCA9IFwiXCI7XG4gICAgaWNvbi53aWR0aCA9IDUwO1xuICAgIGljb24uaGVpZ2h0ID0gNTA7XG4gICAgaWNvbi5zdHlsZS5mbG9hdCA9IFwibGVmdFwiO1xuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRleHQuc3R5bGUubWFyZ2luTGVmdCA9IFwiNTVweFwiO1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYlwiKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gdXBncmFkZS5uYW1lO1xuICAgIHRleHQucmVwbGFjZUNoaWxkcmVuKG5hbWUsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSwgdXBncmFkZS5lZmZlY3QpO1xuICAgIHRvb2x0aXAucmVwbGFjZUNoaWxkcmVuKGljb24sIHRleHQpO1xuICAgIGFjdGl2ZVRvb2x0aXBUYXJnZXQgPSB0YXJnZXQ7XG4gICAgc2V0VG9vbHRpcFBvc2l0aW9uKHRhcmdldCk7XG59XG5cbmZ1bmN0aW9uIHNob3dTa2lsbFRvb2x0aXAodGFyZ2V0OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IHNraWxsID0gdW5pdFNraWxscy5nZXQodGFyZ2V0LmRhdGFzZXQudG9vbHRpcCA/PyAnJyk7XG4gICAgaWYgKCFza2lsbCkgcmV0dXJuO1xuXG4gICAgY29uc3QgdG9vbHRpcCA9IHByZXBhcmVUb29sdGlwKCk7XG4gICAgY29uc3QgaWNvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpY29ucy5zdHlsZS5jc3NUZXh0ID0gJ2Zsb2F0OiBsZWZ0OyBkaXNwbGF5OiBncmlkOyBnYXA6IDNweCc7XG4gICAgZm9yIChjb25zdCBzcmMgb2Ygc2tpbGwuaWNvbnMpIHtcbiAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpY29uLnNyYyA9IHNyYztcbiAgICAgICAgaWNvbi5hbHQgPSAnJztcbiAgICAgICAgaWNvbi53aWR0aCA9IDUwO1xuICAgICAgICBpY29uLmhlaWdodCA9IDUwO1xuICAgICAgICBpY29ucy5hcHBlbmQoaWNvbik7XG4gICAgfVxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpZiAoc2tpbGwuaWNvbnMubGVuZ3RoKSB0ZXh0LnN0eWxlLm1hcmdpbkxlZnQgPSAnNTVweCc7XG4gICAgdGV4dC5zdHlsZS53aGl0ZVNwYWNlID0gJ3ByZS1saW5lJztcbiAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGhlYWRpbmcuY2xhc3NOYW1lID0gJ3NraWxsLXRvb2x0aXAtaGVhZGluZyc7XG4gICAgaGVhZGluZy5zdHlsZS5mb250V2VpZ2h0ID0gJ25vcm1hbCc7XG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2InKTtcbiAgICBuYW1lLnRleHRDb250ZW50ID0gc2tpbGwubmFtZTtcbiAgICBoZWFkaW5nLmFwcGVuZChuYW1lKTtcbiAgICBpZiAoc2tpbGwuY2hhcmdlcykgaGVhZGluZy5hcHBlbmQoYCAoJHtza2lsbC5jaGFyZ2VzfSBjaGFyZ2VzKWApO1xuICAgIGZvciAoY29uc3QgY29zdCBvZiBza2lsbENvc3RzKHNraWxsLCB0YXJnZXQuZGF0YXNldC5yYWNlID8/ICd0ZXJyYW4nKSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgdmFsdWUuc3R5bGUud2hpdGVTcGFjZSA9ICdub3dyYXAnO1xuICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGljb24uc3JjID0gY29zdC5pY29uO1xuICAgICAgICBpY29uLmFsdCA9IGNvc3QubGFiZWw7XG4gICAgICAgIGljb24ud2lkdGggPSAxNjtcbiAgICAgICAgaWNvbi5oZWlnaHQgPSAxNjtcbiAgICAgICAgdmFsdWUuYXBwZW5kKGljb24sIGAgJHtjb3N0LnZhbHVlfWApO1xuICAgICAgICBoZWFkaW5nLmFwcGVuZCgnICcsIHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHNraWxsLnR5cGUgIT09ICdhY3RpdmUnKSBoZWFkaW5nLmFwcGVuZChgICgke3NraWxsLnR5cGV9KWApO1xuICAgIHRleHQuYXBwZW5kKGhlYWRpbmcpO1xuICAgIGZvciAoY29uc3QgZGV0YWlsIG9mIHNraWxsRGV0YWlscyhza2lsbCkpIHtcbiAgICAgICAgdGV4dC5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSwgZGV0YWlsKTtcbiAgICB9XG4gICAgdG9vbHRpcC5yZXBsYWNlQ2hpbGRyZW4oaWNvbnMsIHRleHQpO1xuICAgIGFjdGl2ZVRvb2x0aXBUYXJnZXQgPSB0YXJnZXQ7XG4gICAgc2V0VG9vbHRpcFBvc2l0aW9uKHRhcmdldCk7XG59XG5cbmZ1bmN0aW9uIGhpZGVUb29sdGlwKCk6IHZvaWQge1xuICAgIGFjdGl2ZVRvb2x0aXBUYXJnZXQgPSBudWxsO1xuICAgIHRvb2x0aXBFbGVtZW50KCkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufVxuXG5mdW5jdGlvbiBjbG9zZXN0VG9vbHRpcFRhcmdldCh0YXJnZXQ6IEV2ZW50VGFyZ2V0IHwgbnVsbCk6IEhUTUxFbGVtZW50IHwgbnVsbCB7XG4gICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgRWxlbWVudCkpIHJldHVybiBudWxsO1xuICAgIHJldHVybiB0YXJnZXQuY2xvc2VzdDxIVE1MRWxlbWVudD4oXCJbZGF0YS10b29sdGlwXSwgYVtocmVmXTpub3QoW2RhdGEtbm8tdG9vbHRpcF0pXCIpO1xufVxuXG5mdW5jdGlvbiBzaG93VG9vbHRpcCh0YXJnZXQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKHRhcmdldC5kYXRhc2V0LnRvb2x0aXA/LnN0YXJ0c1dpdGgoJ3NraWxscy8nKSkge1xuICAgICAgICBzaG93U2tpbGxUb29sdGlwKHRhcmdldCk7XG4gICAgfSBlbHNlIGlmICh0YXJnZXQuZGF0YXNldC50b29sdGlwKSB7XG4gICAgICAgIHNob3dVcGdyYWRlVG9vbHRpcCh0YXJnZXQpO1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQpIHtcbiAgICAgICAgc2hvd011dGF0b3JUb29sdGlwKHRhcmdldCk7XG4gICAgfVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIGV2ZW50ID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBjbG9zZXN0VG9vbHRpcFRhcmdldChldmVudC50YXJnZXQpO1xuICAgIGlmICh0YXJnZXQpIHNob3dUb29sdGlwKHRhcmdldCk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIGV2ZW50ID0+IHtcbiAgICBpZiAoIWFjdGl2ZVRvb2x0aXBUYXJnZXQpIHJldHVybjtcbiAgICBpZiAoZXZlbnQucmVsYXRlZFRhcmdldCAmJiBhY3RpdmVUb29sdGlwVGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQgYXMgTm9kZSkpIHJldHVybjtcbiAgICBoaWRlVG9vbHRpcCgpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGV2ZW50ID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBjbG9zZXN0VG9vbHRpcFRhcmdldChldmVudC50YXJnZXQpO1xuICAgIGlmICh0YXJnZXQpIHNob3dUb29sdGlwKHRhcmdldCk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGV2ZW50ID0+IHtcbiAgICBpZiAoIWFjdGl2ZVRvb2x0aXBUYXJnZXQpIHJldHVybjtcbiAgICBpZiAoZXZlbnQucmVsYXRlZFRhcmdldCAmJiBhY3RpdmVUb29sdGlwVGFyZ2V0LmNvbnRhaW5zKGV2ZW50LnJlbGF0ZWRUYXJnZXQgYXMgTm9kZSkpIHJldHVybjtcbiAgICBoaWRlVG9vbHRpcCgpO1xufSk7XG4iCiAgXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQU1PLElBQU0sZUFBZSxJQUFJO0FBQUEsRUFDaEMsSUFBTSxVQUFVLElBQUk7QUFBQSxFQUVwQixXQUFXLFdBQVcsd0JBQW1DO0FBQUEsSUFDckQsSUFBSSxRQUFRLGNBQWM7QUFBQSxNQUFVO0FBQUEsSUFDcEMsTUFBTSxPQUFPLFFBQVEsU0FBUyxVQUFVLEtBQUssUUFBUSxJQUFJLElBQUksT0FBTyxRQUFRLElBQUksSUFBSTtBQUFBLElBQ3BGLElBQUksU0FBUztBQUFBLE1BQU07QUFBQSxJQUNuQixNQUFNLE9BQU8sUUFBUSxLQUFLLFlBQVksRUFBRSxRQUFRLGVBQWUsRUFBRTtBQUFBLElBQ2pFLE1BQU0sTUFBTSxnQkFBZ0IsUUFBUTtBQUFBLElBQ3BDLE1BQU0sY0FBYyxRQUFRLElBQUksR0FBRyxLQUFLLElBQUk7QUFBQSxJQUM1QyxZQUFZLElBQUksUUFBUSxNQUFNO0FBQUEsSUFDOUIsUUFBUSxJQUFJLEtBQUssV0FBVztBQUFBLElBQzVCLE1BQU0sV0FBVyxhQUFhLElBQUksR0FBRztBQUFBLElBQ3JDLGFBQWEsSUFBSSxLQUFLO0FBQUEsTUFDbEIsV0FBVyxRQUFRO0FBQUEsTUFDbkIsTUFBTSxRQUFRO0FBQUEsTUFDZCxNQUFNLFFBQVEsT0FBTyxRQUFRLFNBQVMsUUFBUSxTQUFTLFVBQVUsUUFBUSxRQUFRO0FBQUEsTUFDakYsTUFBTSxRQUFRLE9BQU8sUUFBUSxPQUFPLFVBQVUsUUFBUTtBQUFBLE1BQ3RELFFBQVEsQ0FBQyxHQUFHLFdBQVcsRUFBRSxLQUFLO0FBQUEsQ0FBSTtBQUFBLElBQ3RDLENBQUM7QUFBQSxFQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VDdkJPLFNBQVMsUUFBUSxDQUFDLE9BQTBCO0FBQUEsSUFDL0MsT0FBTyxZQUFZLENBQUMsTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxRQUFRLElBQUksTUFBTSxZQUFZLEVBQUUsRUFDOUYsSUFBSSxVQUFRLG1CQUFtQixJQUFJLENBQUMsRUFBRSxLQUFLLEdBQUc7QUFBQTtBQUFBLEVBR2hELElBQU0sYUFBYSxJQUFJLElBQUssbUJBQTJCLElBQUksV0FBUyxDQUFDLFNBQVMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQUEsRUFFN0YsU0FBUyxhQUFhLENBQUMsT0FBaUM7QUFBQSxJQUMzRCxJQUFJLENBQUMsTUFBTTtBQUFBLE1BQVUsT0FBTztBQUFBLElBRTVCLE1BQU0sV0FBVyxNQUFNLFNBQVMsTUFBTSx1QkFBdUIsSUFBSSxNQUFNLE1BQU07QUFBQSxJQUM3RSxNQUFNLFVBQVUsU0FBUyxNQUFNLHlDQUF5QztBQUFBLElBQ3hFLElBQUksQ0FBQztBQUFBLE1BQVMsT0FBTztBQUFBLElBQ3JCLElBQUksT0FBTyxRQUFRLEVBQUUsTUFBTTtBQUFBLE1BQUcsT0FBTztBQUFBLElBQ3JDLE9BQU8sUUFBUSxNQUFPLFFBQVEsSUFBSSxLQUFLLElBQUksTUFBTTtBQUFBO0FBQUEsRUFHOUMsU0FBUyxVQUFVLENBQUMsT0FBa0IsTUFBZ0U7QUFBQSxJQUN6RyxNQUFNLFFBQVEsQ0FBQztBQUFBLElBQ2YsSUFBSSxNQUFNLGVBQWUsUUFBUSxPQUFPLE1BQU0sVUFBVSxJQUFJLEdBQUc7QUFBQSxNQUMzRCxNQUFNLEtBQUssRUFBRSxNQUFNLHFEQUFxRCxPQUFPLFdBQVcsT0FBTyxNQUFNLFdBQVcsQ0FBQztBQUFBLElBQ3ZIO0FBQUEsSUFDQSxNQUFNLFdBQVcsY0FBYyxLQUFLO0FBQUEsSUFDcEMsSUFBSSxhQUFhLE1BQU07QUFBQSxNQUNuQixNQUFNLEtBQUssRUFBRSxNQUFNLCtDQUErQyxZQUFZLE9BQU8sdUJBQXVCLE9BQU8sU0FBUyxDQUFDO0FBQUEsSUFDakk7QUFBQSxJQUNBLE9BQU87QUFBQTtBQUFBLEVBR0osU0FBUyxZQUFZLENBQUMsT0FBNEI7QUFBQSxJQUNyRCxNQUFNLFVBQVUsQ0FBQyxNQUFNLFdBQVc7QUFBQSxJQUVsQyxJQUFJLE1BQU0sWUFBWSxDQUFDLG1DQUFtQyxLQUFLLE1BQU0sUUFBUSxHQUFHO0FBQUEsTUFDNUUsUUFBUSxLQUFLLHNCQUFzQixLQUFLLE1BQU0sUUFBUSxJQUFJLE1BQU0sV0FBVyxhQUFhLE1BQU0sVUFBVTtBQUFBLElBQzVHO0FBQUEsSUFDQSxJQUFJLE1BQU07QUFBQSxNQUFpQixRQUFRLEtBQUssc0JBQXNCO0FBQUEsSUFDOUQsSUFBSSxNQUFNLGlCQUFpQjtBQUFBLE1BQU0sUUFBUSxLQUFLLGlCQUFpQixNQUFNLGVBQWU7QUFBQSxJQUNwRixJQUFJLE1BQU07QUFBQSxNQUFNLFFBQVEsS0FBSyxTQUFTLE1BQU0sTUFBTTtBQUFBLElBQ2xELElBQUksTUFBTTtBQUFBLE1BQVUsUUFBUSxLQUFLLGFBQWEsTUFBTSxVQUFVO0FBQUEsSUFDOUQsSUFBSSxNQUFNO0FBQUEsTUFBYyxRQUFRLEtBQUssTUFBTSxZQUFZO0FBQUEsSUFDdkQsT0FBTztBQUFBOzs7RUN0Q1gsU0FBUyxLQUFLLENBQUMsTUFBc0I7QUFBQSxJQUNqQyxJQUFJLFNBQVM7QUFBQSxNQUFnQixPQUFPO0FBQUEsSUFDcEMsSUFBSSxTQUFTO0FBQUEsTUFBd0IsT0FBTztBQUFBLElBQzVDLElBQUksU0FBUztBQUFBLE1BQXNCLE9BQU87QUFBQSxJQUMxQyxJQUFJLFNBQVM7QUFBQSxNQUF1QixPQUFPO0FBQUEsSUFDM0MsSUFBSSxTQUFTO0FBQUEsTUFBa0IsT0FBTztBQUFBLElBQ3RDLElBQUksU0FBUztBQUFBLE1BQXNCLE9BQU87QUFBQSxJQUMxQyxJQUFJLFNBQVM7QUFBQSxNQUFxQixPQUFPO0FBQUEsSUFDekMsSUFBSSxTQUFTO0FBQUEsTUFBMEIsT0FBTztBQUFBLElBQzlDLElBQUksU0FBUztBQUFBLE1BQW1CLE9BQU87QUFBQSxJQUN2QyxJQUFJLFNBQVM7QUFBQSxNQUF3QixPQUFPO0FBQUEsSUFFNUMsT0FBTyxLQUFLLFlBQVksRUFBRSxRQUFRLGVBQWUsRUFBRTtBQUFBO0FBQUEsRUFHdkQsSUFBTSxjQUFjLElBQUksSUFBSSxpQkFBUyxJQUFJLGFBQVcsQ0FBQyxRQUFRLFdBQVcsT0FBTyxDQUFDLENBQUM7QUFBQSxFQUNqRixJQUFNLGNBQWMsSUFBSSxJQUFJLHVCQUFlLElBQUksYUFBVyxDQUFDLFlBQVksTUFBTSxRQUFRLFNBQVMsS0FBSyxRQUFRLFFBQVEsT0FBTyxDQUFDLENBQUM7QUFBQSxFQUM1SCxJQUFJLHNCQUEwQztBQUFBLEVBRTlDLFNBQVMsY0FBYyxHQUFnQjtBQUFBLElBQ25DLElBQUksVUFBVSxTQUFTLGVBQWUsU0FBUztBQUFBLElBQy9DLElBQUksQ0FBQyxTQUFTO0FBQUEsTUFDVixVQUFVLFNBQVMsY0FBYyxLQUFLO0FBQUEsTUFDdEMsUUFBUSxLQUFLO0FBQUEsTUFDYixTQUFTLEtBQUssT0FBTyxPQUFPO0FBQUEsSUFDaEM7QUFBQSxJQUNBLE9BQU87QUFBQTtBQUFBLEVBR1gsU0FBUyxXQUFXLENBQUMsTUFBd0M7QUFBQSxJQUN6RCxNQUFNLE1BQU0sSUFBSSxJQUFJLEtBQUssTUFBTSxPQUFPLFNBQVMsSUFBSTtBQUFBLElBQ25ELElBQUksSUFBSSxXQUFXLE9BQU8sU0FBUztBQUFBLE1BQVEsT0FBTztBQUFBLElBQ2xELE1BQU0sUUFBUSxJQUFJLFNBQVMsTUFBTSwrQkFBK0I7QUFBQSxJQUNoRSxPQUFPLFFBQVEsTUFBTTtBQUFBO0FBQUEsRUFHekIsU0FBUyxrQkFBa0IsQ0FBQyxRQUEyQjtBQUFBLElBQ25ELE1BQU0sVUFBVSxlQUFlO0FBQUEsSUFDL0IsTUFBTSxPQUFPLE9BQU8sc0JBQXNCO0FBQUEsSUFDMUMsTUFBTSxNQUFNO0FBQUEsSUFDWixNQUFNLGdCQUFnQixTQUFTLGdCQUFnQjtBQUFBLElBQy9DLE1BQU0sZUFBZSxRQUFRLHNCQUFzQixFQUFFO0FBQUEsSUFDckQsSUFBSSxnQkFBZ0IsZUFBZSxNQUFNLEtBQUssTUFBTTtBQUFBLE1BQ2hELFFBQVEsTUFBTSxPQUFPO0FBQUEsTUFDckIsUUFBUSxNQUFNLFFBQVEsR0FBRztBQUFBLElBQzdCLEVBQUUsS0FBSztBQUFBLE1BQ0gsUUFBUSxNQUFNLE9BQU8sR0FBRyxLQUFLO0FBQUEsTUFDN0IsUUFBUSxNQUFNLFFBQVE7QUFBQTtBQUFBLElBRzFCLElBQUksS0FBSyxNQUFNLEtBQUs7QUFBQSxNQUNoQixRQUFRLE1BQU0sTUFBTSxHQUFHLEtBQUssU0FBUztBQUFBLE1BQ3JDLFFBQVEsTUFBTSxTQUFTO0FBQUEsSUFDM0IsRUFBRSxLQUFLO0FBQUEsTUFDSCxRQUFRLE1BQU0sTUFBTTtBQUFBLE1BQ3BCLFFBQVEsTUFBTSxTQUFTLEdBQUcsT0FBTyxjQUFjLEtBQUssTUFBTTtBQUFBO0FBQUEsSUFHOUQsTUFBTSxTQUFTLFFBQVEsc0JBQXNCO0FBQUEsSUFDN0MsSUFBSSxPQUFPLE1BQU0sT0FBTyxPQUFPLFNBQVMsT0FBTyxjQUFjLEtBQUs7QUFBQSxNQUM5RCxRQUFRLE1BQU0sTUFBTSxHQUFHLEtBQUssSUFBSSxLQUFLLEtBQUssSUFBSSxPQUFPLEtBQUssT0FBTyxjQUFjLE9BQU8sU0FBUyxHQUFHLENBQUM7QUFBQSxNQUNuRyxRQUFRLE1BQU0sU0FBUztBQUFBLElBQzNCO0FBQUEsSUFDQSxRQUFRLE1BQU0sYUFBYTtBQUFBO0FBQUEsRUFHL0IsU0FBUyxjQUFjLEdBQWdCO0FBQUEsSUFDbkMsTUFBTSxVQUFVLGVBQWU7QUFBQSxJQUMvQixRQUFRLE1BQU0sVUFBVTtBQUFBLElBQ3hCLFFBQVEsTUFBTSxhQUFhO0FBQUEsSUFDM0IsUUFBUSxNQUFNLFdBQVc7QUFBQSxJQUN6QixRQUFRLE1BQU0sTUFBTTtBQUFBLElBQ3BCLFFBQVEsTUFBTSxPQUFPO0FBQUEsSUFDckIsUUFBUSxNQUFNLFNBQVM7QUFBQSxJQUN2QixRQUFRLE1BQU0sUUFBUTtBQUFBLElBQ3RCLFFBQVEsTUFBTSxRQUFRO0FBQUEsSUFDdEIsUUFBUSxNQUFNLFlBQVk7QUFBQSxJQUMxQixRQUFRLE1BQU0sV0FBVyxHQUFHLEtBQUssSUFBSSxLQUFLLFNBQVMsZ0JBQWdCLFdBQVc7QUFBQSxJQUM5RSxPQUFPO0FBQUE7QUFBQSxFQUdYLFNBQVMsa0JBQWtCLENBQUMsTUFBK0I7QUFBQSxJQUN2RCxNQUFNLE9BQU8sWUFBWSxJQUFJO0FBQUEsSUFDN0IsSUFBSSxDQUFDO0FBQUEsTUFBTTtBQUFBLElBQ1gsTUFBTSxVQUFVLFlBQVksSUFBSSxJQUFJO0FBQUEsSUFDcEMsSUFBSSxDQUFDO0FBQUEsTUFBUztBQUFBLElBRWQsTUFBTSxVQUFVLGVBQWU7QUFBQSxJQUMvQixNQUFNLE9BQU8sU0FBUyxjQUFjLEdBQUc7QUFBQSxJQUN2QyxLQUFLLGNBQWMsUUFBUTtBQUFBLElBQzNCLFFBQVEsZ0JBQWdCLE1BQU0sU0FBUyxjQUFjLElBQUksR0FBRyxRQUFRLGtCQUFrQjtBQUFBLElBQ3RGLHNCQUFzQjtBQUFBLElBQ3RCLG1CQUFtQixJQUFJO0FBQUE7QUFBQSxFQUczQixTQUFTLGtCQUFrQixDQUFDLFFBQTJCO0FBQUEsSUFDbkQsTUFBTSxNQUFNLE9BQU8sUUFBUTtBQUFBLElBQzNCLElBQUksQ0FBQztBQUFBLE1BQUs7QUFBQSxJQUNWLE1BQU0sVUFBVSxhQUFhLElBQUksR0FBRyxLQUFLLFlBQVksSUFBSSxHQUFHO0FBQUEsSUFDNUQsSUFBSSxDQUFDO0FBQUEsTUFBUztBQUFBLElBRWQsTUFBTSxVQUFVLGVBQWU7QUFBQSxJQUMvQixNQUFNLE9BQU8sU0FBUyxjQUFjLEtBQUs7QUFBQSxJQUN6QyxNQUFNLFNBQVMsTUFBTSxRQUFRLElBQUksTUFBTSxNQUFNLFFBQVEsU0FBUyxLQUFNLFFBQVEsY0FBYyxXQUFXLFFBQVEsS0FBSyxXQUFXLFFBQVE7QUFBQSxJQUNySSxNQUFNLE1BQU0sTUFBTSxRQUFRLFNBQVMsTUFBTSxZQUFZLFNBQVMsU0FBUztBQUFBLElBQ3ZFLEtBQUssTUFBTSx5QkFBeUIsT0FBTyxNQUFNLFFBQVEsU0FBUyxLQUFLLFFBQVE7QUFBQSxJQUMvRSxLQUFLLE1BQU07QUFBQSxJQUNYLEtBQUssUUFBUTtBQUFBLElBQ2IsS0FBSyxTQUFTO0FBQUEsSUFDZCxLQUFLLE1BQU0sUUFBUTtBQUFBLElBQ25CLE1BQU0sT0FBTyxTQUFTLGNBQWMsS0FBSztBQUFBLElBQ3pDLEtBQUssTUFBTSxhQUFhO0FBQUEsSUFDeEIsTUFBTSxPQUFPLFNBQVMsY0FBYyxHQUFHO0FBQUEsSUFDdkMsS0FBSyxjQUFjLFFBQVE7QUFBQSxJQUMzQixLQUFLLGdCQUFnQixNQUFNLFNBQVMsY0FBYyxJQUFJLEdBQUcsUUFBUSxNQUFNO0FBQUEsSUFDdkUsUUFBUSxnQkFBZ0IsTUFBTSxJQUFJO0FBQUEsSUFDbEMsc0JBQXNCO0FBQUEsSUFDdEIsbUJBQW1CLE1BQU07QUFBQTtBQUFBLEVBRzdCLFNBQVMsZ0JBQWdCLENBQUMsUUFBMkI7QUFBQSxJQUNqRCxNQUFNLFFBQVEsV0FBVyxJQUFJLE9BQU8sUUFBUSxXQUFXLEVBQUU7QUFBQSxJQUN6RCxJQUFJLENBQUM7QUFBQSxNQUFPO0FBQUEsSUFFWixNQUFNLFVBQVUsZUFBZTtBQUFBLElBQy9CLE1BQU0sUUFBUSxTQUFTLGNBQWMsS0FBSztBQUFBLElBQzFDLE1BQU0sTUFBTSxVQUFVO0FBQUEsSUFDdEIsV0FBVyxPQUFPLE1BQU0sT0FBTztBQUFBLE1BQzNCLE1BQU0sT0FBTyxTQUFTLGNBQWMsS0FBSztBQUFBLE1BQ3pDLEtBQUssTUFBTTtBQUFBLE1BQ1gsS0FBSyxNQUFNO0FBQUEsTUFDWCxLQUFLLFFBQVE7QUFBQSxNQUNiLEtBQUssU0FBUztBQUFBLE1BQ2QsTUFBTSxPQUFPLElBQUk7QUFBQSxJQUNyQjtBQUFBLElBQ0EsTUFBTSxPQUFPLFNBQVMsY0FBYyxLQUFLO0FBQUEsSUFDekMsSUFBSSxNQUFNLE1BQU07QUFBQSxNQUFRLEtBQUssTUFBTSxhQUFhO0FBQUEsSUFDaEQsS0FBSyxNQUFNLGFBQWE7QUFBQSxJQUN4QixNQUFNLFVBQVUsU0FBUyxjQUFjLE1BQU07QUFBQSxJQUM3QyxRQUFRLFlBQVk7QUFBQSxJQUNwQixRQUFRLE1BQU0sYUFBYTtBQUFBLElBQzNCLE1BQU0sT0FBTyxTQUFTLGNBQWMsR0FBRztBQUFBLElBQ3ZDLEtBQUssY0FBYyxNQUFNO0FBQUEsSUFDekIsUUFBUSxPQUFPLElBQUk7QUFBQSxJQUNuQixJQUFJLE1BQU07QUFBQSxNQUFTLFFBQVEsT0FBTyxLQUFLLE1BQU0sa0JBQWtCO0FBQUEsSUFDL0QsV0FBVyxRQUFRLFdBQVcsT0FBTyxPQUFPLFFBQVEsUUFBUSxRQUFRLEdBQUc7QUFBQSxNQUNuRSxNQUFNLFFBQVEsU0FBUyxjQUFjLE1BQU07QUFBQSxNQUMzQyxNQUFNLE1BQU0sYUFBYTtBQUFBLE1BQ3pCLE1BQU0sT0FBTyxTQUFTLGNBQWMsS0FBSztBQUFBLE1BQ3pDLEtBQUssTUFBTSxLQUFLO0FBQUEsTUFDaEIsS0FBSyxNQUFNLEtBQUs7QUFBQSxNQUNoQixLQUFLLFFBQVE7QUFBQSxNQUNiLEtBQUssU0FBUztBQUFBLE1BQ2QsTUFBTSxPQUFPLE1BQU0sSUFBSSxLQUFLLE9BQU87QUFBQSxNQUNuQyxRQUFRLE9BQU8sS0FBSyxLQUFLO0FBQUEsSUFDN0I7QUFBQSxJQUNBLElBQUksTUFBTSxTQUFTO0FBQUEsTUFBVSxRQUFRLE9BQU8sS0FBSyxNQUFNLE9BQU87QUFBQSxJQUM5RCxLQUFLLE9BQU8sT0FBTztBQUFBLElBQ25CLFdBQVcsVUFBVSxhQUFhLEtBQUssR0FBRztBQUFBLE1BQ3RDLEtBQUssT0FBTyxTQUFTLGNBQWMsSUFBSSxHQUFHLE1BQU07QUFBQSxJQUNwRDtBQUFBLElBQ0EsUUFBUSxnQkFBZ0IsT0FBTyxJQUFJO0FBQUEsSUFDbkMsc0JBQXNCO0FBQUEsSUFDdEIsbUJBQW1CLE1BQU07QUFBQTtBQUFBLEVBRzdCLFNBQVMsV0FBVyxHQUFTO0FBQUEsSUFDekIsc0JBQXNCO0FBQUEsSUFDdEIsZUFBZSxFQUFFLE1BQU0sVUFBVTtBQUFBO0FBQUEsRUFHckMsU0FBUyxvQkFBb0IsQ0FBQyxRQUFnRDtBQUFBLElBQzFFLElBQUksRUFBRSxrQkFBa0I7QUFBQSxNQUFVLE9BQU87QUFBQSxJQUN6QyxPQUFPLE9BQU8sUUFBcUIsZ0RBQWdEO0FBQUE7QUFBQSxFQUd2RixTQUFTLFdBQVcsQ0FBQyxRQUEyQjtBQUFBLElBQzVDLElBQUksT0FBTyxRQUFRLFNBQVMsV0FBVyxTQUFTLEdBQUc7QUFBQSxNQUMvQyxpQkFBaUIsTUFBTTtBQUFBLElBQzNCLEVBQUUsS0FBSyxJQUFJLE9BQU8sUUFBUSxTQUFTO0FBQUEsTUFDL0IsbUJBQW1CLE1BQU07QUFBQSxJQUM3QixFQUFFLEtBQUssSUFBSSxrQkFBa0IsbUJBQW1CO0FBQUEsTUFDNUMsbUJBQW1CLE1BQU07QUFBQSxJQUM3QjtBQUFBO0FBQUEsRUFHSixTQUFTLGlCQUFpQixhQUFhLFdBQVM7QUFBQSxJQUM1QyxNQUFNLFNBQVMscUJBQXFCLE1BQU0sTUFBTTtBQUFBLElBQ2hELElBQUk7QUFBQSxNQUFRLFlBQVksTUFBTTtBQUFBLEdBQ2pDO0FBQUEsRUFFRCxTQUFTLGlCQUFpQixZQUFZLFdBQVM7QUFBQSxJQUMzQyxJQUFJLENBQUM7QUFBQSxNQUFxQjtBQUFBLElBQzFCLElBQUksTUFBTSxpQkFBaUIsb0JBQW9CLFNBQVMsTUFBTSxhQUFxQjtBQUFBLE1BQUc7QUFBQSxJQUN0RixZQUFZO0FBQUEsR0FDZjtBQUFBLEVBRUQsU0FBUyxpQkFBaUIsV0FBVyxXQUFTO0FBQUEsSUFDMUMsTUFBTSxTQUFTLHFCQUFxQixNQUFNLE1BQU07QUFBQSxJQUNoRCxJQUFJO0FBQUEsTUFBUSxZQUFZLE1BQU07QUFBQSxHQUNqQztBQUFBLEVBRUQsU0FBUyxpQkFBaUIsWUFBWSxXQUFTO0FBQUEsSUFDM0MsSUFBSSxDQUFDO0FBQUEsTUFBcUI7QUFBQSxJQUMxQixJQUFJLE1BQU0saUJBQWlCLG9CQUFvQixTQUFTLE1BQU0sYUFBcUI7QUFBQSxNQUFHO0FBQUEsSUFDdEYsWUFBWTtBQUFBLEdBQ2Y7IiwKICAiZGVidWdJZCI6ICJCQTgyODMyRTlGMjMwMDcxNjQ3NTZFMjE2NDc1NkUyMSIsCiAgIm5hbWVzIjogW10KfQ==

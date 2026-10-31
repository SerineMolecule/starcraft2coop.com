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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 110
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 110
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
      upgradetype: "upgrade",
      cost: {
        minerals: 200,
        gas: 200
      },
      researchTime: 120
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
      upgradetype: "upgrade",
      cost: {
        minerals: 200,
        gas: 200
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 120
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 75,
        gas: 75
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 90
    },
    {
      upgradeid: 21,
      unit: "Scout",
      commander: "Fenix",
      name: "Combat Sensor Array",
      icon: "combatsensorarray",
      effect: "Scouts gain +3 air attack range and +1 ground attack range.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 3,
      operation: "add",
      upgradetype: "upgrade",
      weapon: "air",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 60
    },
    {
      upgradeid: 22,
      unit: "Scout",
      commander: "Fenix",
      name: "Combat Sensor Array",
      icon: "combatsensorarray",
      effect: "Scouts gain +3 air attack range and +1 ground attack range.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "add",
      upgradetype: "upgrade",
      weapon: "ground",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 60
    },
    {
      upgradeid: 23,
      unit: "Mojo",
      commander: "Fenix",
      name: "Combat Sensor Array",
      icon: "combatsensorarray",
      effect: "Scouts gain +3 air attack range and +1 ground attack range.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 3,
      operation: "add",
      upgradetype: "upgrade",
      weapon: "air",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 60
    },
    {
      upgradeid: 24,
      unit: "Mojo",
      commander: "Fenix",
      name: "Combat Sensor Array",
      icon: "combatsensorarray",
      effect: "Scouts gain +3 air attack range and +1 ground attack range.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "add",
      upgradetype: "upgrade",
      weapon: "ground",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 60
    },
    {
      upgradeid: 26,
      unit: "Reaper",
      commander: "Horner",
      name: "Jet Pack Overdrive",
      icon: "jetpackoverdrive",
      temporary: true,
      effect: "Increases the movement speed of Reapers by 1.5, and grants them the ability to fly for 10 seconds. Reapers are able to attack air units while flying.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.55,
      operation: "add",
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 63
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 200,
        gas: 200
      },
      researchTime: 120
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 30
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 30
    },
    {
      upgradeid: 43,
      unit: "Elite Marine",
      commander: "Nova",
      name: "Super Stimpack",
      icon: "superstimpack",
      temporary: true,
      effect: "Heals the 2 life per second and increases its attack and movement speeds for 15 seconds.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.5,
      operation: "multiply",
      upgradetype: "upgrade",
      cost: {
        minerals: 75,
        gas: 75
      },
      researchTime: 45
    },
    {
      upgradeid: 44,
      unit: "Elite Marine",
      commander: "Nova",
      name: "Super Stimpack",
      icon: "superstimpack",
      temporary: true,
      effect: "Heals the 2 life per second and increases its attack and movement speeds for 15 seconds.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.5,
      operation: "multiply",
      upgradetype: "upgrade",
      cost: {
        minerals: 75,
        gas: 75
      },
      researchTime: 45
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 30
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 30
    },
    {
      upgradeid: 47,
      unit: "Strike Goliath",
      commander: "Nova",
      name: "Ares Class Targeting System",
      icon: "aresclasstargetingsystem",
      effect: "Increases the Strike Goliaths anti-air weapon range by 3 and its ground weapon range by 1.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 3,
      operation: "add",
      upgradetype: "upgrade",
      weapon: "air",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 30
    },
    {
      upgradeid: 48,
      unit: "Strike Goliath",
      commander: "Nova",
      name: "Ares Class Targeting System",
      icon: "aresclasstargetingsystem",
      effect: "Increases the Strike Goliaths anti-air weapon range by 3 and its ground weapon range by 1.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "add",
      upgradetype: "upgrade",
      weapon: "ground",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 30
    },
    {
      upgradeid: 49,
      unit: "Marine",
      commander: "Raynor",
      name: "Stimpack",
      icon: "stimpack",
      temporary: true,
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
      temporary: true,
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
    },
    {
      upgradeid: 52,
      unit: "Marauder",
      commander: "Raynor",
      name: "Stimpack",
      icon: "stimpack",
      temporary: true,
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
      temporary: true,
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
      temporary: true,
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
      temporary: true,
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 200,
        gas: 200
      },
      researchTime: 120
    },
    {
      upgradeid: 59,
      unit: "Vulture",
      commander: "Raynor",
      name: "Afterburners",
      icon: "afterburners",
      temporary: true,
      effect: "Vehicles and ships gain afterburners that increase the units movement speed by 100% for 8 seconds upon activation.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 200,
        gas: 200
      },
      researchTime: 120
    },
    {
      upgradeid: 61,
      unit: "Siege Tank",
      commander: "Raynor",
      name: "Afterburners",
      icon: "afterburners",
      temporary: true,
      effect: "Vehicles and ships gain afterburners that increase the units movement speed by 100% for 8 seconds upon activation.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
    },
    {
      upgradeid: 62,
      unit: "Viking",
      commander: "Raynor",
      name: "Phobos Weapons System",
      icon: "phobosweaponssystem",
      effect: "Viking weapons system upgrade. Increases air attack range by 2 and ground attack range by 1.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "add",
      upgradetype: "upgrade",
      weapon: "assault-mode",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
    },
    {
      upgradeid: 63,
      unit: "Viking",
      commander: "Raynor",
      name: "Phobos Weapons System",
      icon: "phobosweaponssystem",
      effect: "Viking weapons system upgrade. Increases air attack range by 2 and ground attack range by 1.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "add",
      upgradetype: "upgrade",
      weapon: "fighter-mode",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 200,
        gas: 200
      },
      researchTime: 120
    },
    {
      upgradeid: 65,
      unit: "Viking",
      commander: "Raynor",
      name: "Afterburners",
      icon: "afterburners",
      temporary: true,
      effect: "Vehicles and ships gain afterburners that increase the units movement speed by 100% for 8 seconds upon activation.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 200,
        gas: 200
      },
      researchTime: 120
    },
    {
      upgradeid: 67,
      unit: "Banshee",
      commander: "Raynor",
      name: "Afterburners",
      icon: "afterburners",
      temporary: true,
      effect: "Vehicles and ships gain afterburners that increase the units movement speed by 100% for 8 seconds upon activation.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 200,
        gas: 200
      },
      researchTime: 120
    },
    {
      upgradeid: 69,
      unit: "Battlecruiser",
      commander: "Raynor",
      name: "Afterburners",
      icon: "afterburners",
      temporary: true,
      effect: "Vehicles and ships gain afterburners that increase the units movement speed by 100% for 8 seconds upon activation.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
    },
    {
      upgradeid: 70,
      unit: "Asteria Wraith",
      commander: "Horner",
      name: "Trigger Override",
      icon: "triggeroverride",
      temporary: true,
      effect: `Wraith attack speed increases by 10% with each attack, up to a maximum of 100%.\r
\r
Passive ability.`,
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 63
    },
    {
      upgradeid: 71,
      unit: "Heavy Siege Tank",
      commander: "Nova",
      name: "Graduating Range",
      icon: "graduatingrange",
      effect: "Increases the Heavy Siege Tanks attack range by 1 every 3 seconds while in Siege Mode, up to a maximum of 5 additional range.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 5,
      operation: "add",
      upgradetype: "upgrade",
      weapon: "siege-mode",
      cost: {
        minerals: 75,
        gas: 75
      },
      researchTime: 45
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 120
    },
    {
      upgradeid: 81,
      unit: "Goliath",
      commander: "Swann",
      name: "Ares Class Targeting System",
      icon: "aresclasstargetingsystem",
      effect: "Increases the Goliaths anti-air weapon range by 3 and its ground weapon range by 1.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 3,
      operation: "add",
      upgradetype: "upgrade",
      weapon: "air",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
    },
    {
      upgradeid: 82,
      unit: "Goliath",
      commander: "Swann",
      name: "Ares Class Targeting System",
      icon: "aresclasstargetingsystem",
      effect: "Increases the Goliaths anti-air weapon range by 3 and its ground weapon range by 1.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "add",
      upgradetype: "upgrade",
      weapon: "ground",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 120
    },
    {
      upgradeid: 84,
      unit: "Siege Tank",
      commander: "Swann",
      name: "Maelstrom Rounds",
      icon: "maelstromrounds",
      effect: "Siege Tanks gain +40 attack damage while in Siege Mode. Splash damage remains the same.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: null,
      value: 40,
      operation: "add",
      upgradetype: "upgrade",
      weapon: "siege-mode",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 120
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 120
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 120
    },
    {
      upgradeid: 88,
      unit: "Wraith",
      commander: "Swann",
      name: "Pulse Amplifier",
      icon: "pulseamplifier",
      effect: "Increases the damage of Gemini Missiles by 100% and Burst Lasers by 300% while the Wraith is moving.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade",
      weapon: "air",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
    },
    {
      upgradeid: 89,
      unit: "Wraith",
      commander: "Swann",
      name: "Pulse Amplifier",
      icon: "pulseamplifier",
      effect: "Increases the damage of Gemini Missiles by 100% and Burst Lasers by 300% while the Wraith is moving.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: null,
      value: 4,
      operation: "multiply",
      upgradetype: "upgrade",
      weapon: "ground",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 120
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
    },
    {
      upgradeid: 93,
      unit: 'James "Sirius" Sykes',
      commander: "Tychus",
      name: "ITCE Triggers",
      icon: "itcetriggers",
      effect: "Increases the attack speed of Tychus, Crooked Sam, and Sirius by 25%.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.25,
      operation: "multiply",
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
    },
    {
      upgradeid: 94,
      unit: 'Miles "Blaze" Lewis',
      commander: "Tychus",
      name: "Endurance Supplements",
      icon: "endurancesupplements",
      effect: "Increases the life of Blaze, Cannonball, and Rattlesnake by 25%.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 1.25,
      operation: "multiply",
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
    },
    {
      upgradeid: 95,
      unit: 'Rob "Cannonball" Boswell',
      commander: "Tychus",
      name: "Endurance Supplements",
      icon: "endurancesupplements",
      effect: "Increases the life of Blaze, Cannonball, and Rattlesnake by 25%.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 1.25,
      operation: "multiply",
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
    },
    {
      upgradeid: 96,
      unit: 'Kev "Rattlesnake" West',
      commander: "Tychus",
      name: "Endurance Supplements",
      icon: "endurancesupplements",
      effect: "Increases the life of Blaze, Cannonball, and Rattlesnake by 25%.",
      modifier: "HP",
      modifiermode: null,
      modifiertag: null,
      value: 1.25,
      operation: "multiply",
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 60
    },
    {
      upgradeid: 108,
      unit: "Xel'Naga Abrogator",
      commander: "Zeratul",
      name: "Nova Battery",
      icon: "novabattery",
      effect: "Reduces the cooldown of Purification Nova by 50%.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Purification Nova",
          modifier: "cooldown",
          operation: "multiply",
          value: 0.5
        }
      ]
    },
    {
      upgradeid: 109,
      unit: "Xel'Naga Watcher",
      commander: "Zeratul",
      name: "Gravitic Boosters",
      icon: "graviticboosters",
      effect: "Increases the movement speed of Xel'Naga Watchers by 50%.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.5,
      operation: "multiply",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 110,
      unit: "Xel'Naga Watcher",
      commander: "Zeratul",
      name: "Sensor Array",
      icon: "sensorarray",
      effect: "Increases the sight radius of Xel'Naga Watchers by 50%.",
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 120
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 120
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 120
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 120
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 120
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
      upgradetype: "upgrade",
      cost: {
        minerals: 1200,
        gas: 400
      }
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
      upgradetype: "upgrade",
      cost: {
        minerals: 1200,
        gas: 400
      }
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Bombardment",
          modifier: "values.range",
          operation: "add",
          value: 10
        }
      ],
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Bombardment",
          modifier: "values.interval",
          operation: "set",
          value: 5
        }
      ],
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
    },
    {
      upgradeid: 145,
      unit: "Infested Banshee",
      commander: "Stukov",
      name: "Cloak",
      icon: "cloak",
      temporary: true,
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
      temporary: true,
      effect: `Cloaks the unit, preventing enemy units from seeing or attacking it. A cloaked unit will only be revealed by detectors or effects.\r
\r
Drains 0.9 energy per second.`,
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "add",
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
    },
    {
      upgradeid: 151,
      unit: "Mecha Hydralisk",
      commander: "Stetmann",
      name: "Tyr-Class Targeting System",
      icon: "tyrclasstargetingsystem",
      effect: "Increases the Mecha Hydralisks anti-air weapon range by 3.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 3,
      operation: "add",
      upgradetype: "upgrade",
      weapon: "erudition-missiles",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
    },
    {
      upgradeid: 153,
      unit: "Hydralisk",
      commander: "Kerrigan",
      name: "Frenzy",
      icon: "frenzy",
      temporary: true,
      effect: "Increases the attack speed of Hydralisks by 50% for 15 seconds.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.5,
      operation: "multiply",
      upgradetype: "upgrade",
      cost: {
        minerals: 200,
        gas: 200
      },
      researchTime: 120
    },
    {
      upgradeid: 154,
      unit: "Aegis Guard",
      commander: "Mengsk",
      name: "High-Grade Stimpacks",
      icon: "highgradestimpacks",
      temporary: true,
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
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "add",
      upgradetype: "upgrade",
      weapon: "siege-mode"
    },
    {
      upgradeid: 156,
      unit: "Blackhammer",
      commander: "Mengsk",
      name: "2",
      icon: "veterancy",
      effect: "Increases the range of Overwatch Mode by 2.",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "add",
      upgradetype: "upgrade",
      weapon: "overwatch-mode"
    },
    {
      upgradeid: 157,
      unit: "Blackhammer",
      commander: "Mengsk",
      name: "3",
      icon: "veterancy",
      effect: "Increases attack speed in Overwatch Mode by 33%.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.33,
      operation: "multiply",
      upgradetype: "upgrade",
      weapon: "overwatch-mode"
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
    },
    {
      upgradeid: 159,
      unit: "Imperial Intercessor",
      commander: "Mengsk",
      name: "Ignite Afterburners",
      icon: "igniteafterburners",
      temporary: true,
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 42
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 120
    },
    {
      upgradeid: 175,
      unit: 'Kev "Rattlesnake" West',
      commander: "Tychus",
      name: "Secret Stash Stimpack",
      icon: "secretstashstimpack",
      temporary: true,
      effect: "Heals Rattlesnake for 2 life per second and increases his attack and movement speed for 15 seconds.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.5,
      operation: "multiply",
      upgradetype: "upgrade",
      cost: {
        minerals: 600,
        gas: 150
      }
    },
    {
      upgradeid: 176,
      unit: 'Kev "Rattlesnake" West',
      commander: "Tychus",
      name: "Secret Stash Stimpack",
      icon: "secretstashstimpack",
      temporary: true,
      effect: "Heals Rattlesnake for 2 life per second and increases his attack and movement speed for 15 seconds.",
      modifier: "Move_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.47,
      operation: "add",
      upgradetype: "upgrade",
      cost: {
        minerals: 600,
        gas: 150
      }
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
      upgradetype: "preupgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 120
    },
    {
      upgradeid: 184,
      unit: "Primal Mutalisk",
      commander: "Dehaka",
      name: "Slicing Glaive",
      icon: "slicingglaive",
      effect: "Primal Mutalisks deal 100% increased damage against air units.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade",
      weapon: "air",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "preupgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 63
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
      upgradetype: "preupgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 63
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
      upgradetype: "preupgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 63
    },
    {
      upgradeid: 189,
      unit: "Explosive Creeper",
      commander: "Dehaka",
      name: "Aerial Burst Sacs",
      icon: "aerialburstsacs",
      effect: "Allows the Creeper Hosts Creepers to target air units and increases their movement speed.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: null,
      value: 110,
      operation: "set",
      upgradetype: "preupgrade",
      weapon: "air",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
    },
    {
      upgradeid: 192,
      unit: "Explosive Creeper",
      commander: "Dehaka",
      name: "Aerial Burst Sacs",
      icon: "aerialburstsacs",
      effect: "Allows the Creeper Hosts Creepers to target air units and increases their movement speed.",
      modifier: "attackbonus",
      modifiermode: null,
      modifiertag: null,
      value: 5,
      operation: "set",
      upgradetype: "preupgrade",
      weapon: "air",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
    },
    {
      upgradeid: 194,
      unit: "Infested Siege Tank",
      commander: "Stukov",
      name: "Acidic Enzymes",
      icon: "acidicenzymes",
      effect: "Infested Siege Tanks deal an additional +15 damage to armored units and structures in both modes.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: "Structure",
      value: 15,
      operation: "add",
      upgradetype: "upgrade",
      weapon: "rooted",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Cloak",
          modifier: "values.evasion",
          operation: "replace",
          value: "While cloaked, moves 20% faster and evades 20% of incoming attacks."
        }
      ],
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
    },
    {
      upgradeid: 198,
      unit: "Vulture",
      commander: "Raynor",
      name: "Afterburners",
      icon: "afterburners",
      temporary: true,
      effect: "Vehicles and ships gain afterburners that increase the units movement speed by 100% for 8 seconds upon activation.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "multiply",
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
    },
    {
      upgradeid: 199,
      unit: "Siege Tank",
      commander: "Raynor",
      name: "Afterburners",
      icon: "afterburners",
      temporary: true,
      effect: "Vehicles and ships gain afterburners that increase the units movement speed by 100% for 8 seconds upon activation.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "multiply",
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
    },
    {
      upgradeid: 200,
      unit: "Viking",
      commander: "Raynor",
      name: "Afterburners",
      icon: "afterburners",
      temporary: true,
      effect: "Vehicles and ships gain afterburners that increase the units movement speed by 100% for 8 seconds upon activation.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "multiply",
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
    },
    {
      upgradeid: 201,
      unit: "Banshee",
      commander: "Raynor",
      name: "Afterburners",
      icon: "afterburners",
      temporary: true,
      effect: "Vehicles and ships gain afterburners that increase the units movement speed by 100% for 8 seconds upon activation.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "multiply",
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
    },
    {
      upgradeid: 202,
      unit: "Battlecruiser",
      commander: "Raynor",
      name: "Afterburners",
      icon: "afterburners",
      temporary: true,
      effect: "Vehicles and ships gain afterburners that increase the units movement speed by 100% for 8 seconds upon activation.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1,
      operation: "multiply",
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
    },
    {
      upgradeid: 203,
      unit: "Ravasaur",
      commander: "Dehaka",
      name: "Gene Mutation Adrenal Glands",
      icon: "adrenalglands-framed",
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
      icon: "adrenalglands-framed",
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
      icon: "adrenalglands-framed",
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
      icon: "adrenalglands-framed",
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
      icon: "adrenalglands-framed",
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
      icon: "adrenalglands-framed",
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
      temporary: true,
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
      temporary: true,
      effect: "Primal Guardian attacks temporarily increases its attack speed by 10%. Can stack up to 50% increased attack speed.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.5,
      operation: "multiply",
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
    },
    {
      upgradeid: 236,
      unit: "Kerrigan",
      commander: "Kerrigan",
      name: "Fury",
      icon: "fury",
      temporary: true,
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
      temporary: true,
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
      temporary: true,
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
      temporary: true,
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
      temporary: true,
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
      temporary: true,
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
      temporary: true,
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
      temporary: true,
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
      temporary: true,
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
      temporary: true,
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
      temporary: true,
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
      temporary: true,
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
      temporary: true,
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
      unit: 'Rob "Cannonball" Boswell',
      commander: "Tychus",
      name: "Redline Power Cells",
      icon: "redlinepowercells",
      temporary: true,
      effect: "Increases Cannonballs attack speed by 3% with each attack, up to a maximum of 60%. Increases his attack damage by 3 with each attack, up to a maximum of 60.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 1.8,
      operation: "multiply",
      upgradetype: "upgrade",
      cost: {
        minerals: 600,
        gas: 150
      }
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
      upgradetype: "upgrade",
      cost: {
        minerals: 1200,
        gas: 400
      }
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
    },
    {
      upgradeid: 255,
      unit: "Nova",
      commander: "Nova",
      name: "Stance Dance",
      icon: "stancedance",
      temporary: true,
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 110
    },
    {
      upgradeid: 257,
      unit: "Sky Fury",
      commander: "Mengsk",
      name: "Tactical Realignment",
      icon: "tacticalrealignment",
      temporary: true,
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Psionic Orb",
          modifier: "values.damage",
          operation: "multiply",
          value: 3.5
        },
        {
          skill: "Psionic Orb",
          modifier: "values.stacks",
          operation: "replace",
          value: "Damage shown at 10 Sacrifice stacks."
        },
        {
          skill: "Mind Blast",
          modifier: "values.damage",
          operation: "multiply",
          value: 3.5
        },
        {
          skill: "Mind Blast",
          modifier: "values.stacks",
          operation: "replace",
          value: "Damage shown at 10 Sacrifice stacks."
        },
        {
          skill: "Sacrifice",
          modifier: "values.bonus",
          operation: "replace",
          value: "Each sacrifice permanently grants +25% ability damage and +100 shields, stacking up to 10 times."
        }
      ],
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 75,
        gas: 75
      },
      researchTime: 90
    },
    {
      upgradeid: 260,
      unit: "Lt. Layna Nikara",
      commander: "Tychus",
      name: "Flashforce GDM Visor",
      icon: "flashforcegdmvisor",
      effect: "Provides Vega, Nux, and Lt. Nikara with Detection, allowing them to see cloaked and burrowed enemy units.",
      modifier: "Vision",
      modifiermode: null,
      modifiertag: null,
      value: 0,
      operation: "add",
      upgradetype: "upgrade",
      cost: {
        minerals: 75,
        gas: 75
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 75,
        gas: 75
      },
      researchTime: 90
    },
    {
      upgradeid: 262,
      unit: "Shock Division",
      commander: "Mengsk",
      name: "Armament Stabilizers",
      icon: "armamentstabilizers",
      effect: "Allows Shock Divisions in Siege Mode to fire at air units at a reduced rate while being carried by an Imperial Intercessor.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: 0.67,
      operation: "multiply",
      upgradetype: "upgrade",
      weapon: "siege-mode",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      unit: "Raven Type-II",
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
      unit: 'James "Sirius" Sykes',
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
      unit: 'James "Sirius" Sykes',
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
      unit: 'Miles "Blaze" Lewis',
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
      unit: 'Miles "Blaze" Lewis',
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
      unit: 'Rob "Cannonball" Boswell',
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
      unit: 'Rob "Cannonball" Boswell',
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
      unit: "Lt. Layna Nikara",
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
      unit: "Lt. Layna Nikara",
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
      unit: 'Kev "Rattlesnake" West',
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
      unit: 'Kev "Rattlesnake" West',
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
      temporary: true,
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
      temporary: true,
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
    },
    {
      upgradeid: 294,
      unit: "Hellbat Ranger",
      commander: "Nova",
      name: "Jump Jet Assault",
      icon: "jumpjetassault",
      temporary: true,
      effect: "Launches the Hellbat Ranger toward nearby enemy ground units. Briefly stuns enemy units on impact and gains +4 armor.",
      modifier: "Armor",
      modifiermode: null,
      modifiertag: null,
      value: 4,
      operation: "add",
      upgradetype: "upgrade",
      cost: {
        minerals: 75,
        gas: 75
      },
      researchTime: 45
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
      modifiermode: null,
      modifiertag: null,
      value: 10,
      operation: "add",
      upgradetype: "upgrade",
      weapon: "interdictor",
      skillModifiers: [
        {
          skill: "Build Interdictor",
          modifier: "values.damage",
          operation: "add",
          value: 10
        }
      ]
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
      upgradetype: "upgrade",
      cost: {
        minerals: 75,
        gas: 75
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 75,
        gas: 75
      },
      researchTime: 90
    },
    {
      upgradeid: 300,
      unit: "Slayer",
      commander: "Alarak",
      name: "Phase Blink",
      icon: "phaseblink",
      temporary: true,
      effect: "Allows Slayers to teleport to a nearby target location. After using Phase Blink, the Slayer's next attack within 8 seconds will deal double damage.",
      modifier: "damage",
      modifiermode: null,
      modifiertag: null,
      value: 2,
      operation: "multiply",
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 60
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
      modifiermode: null,
      modifiertag: null,
      value: "Circular splash: 100% damage within radius 0.66, 50% from 0.66 to 1.09, and 25% from 1.09 to 1.75.",
      operation: "replace",
      upgradetype: "upgrade",
      weapon: "siege-mode"
    },
    {
      upgradeid: 309,
      unit: "Blackhammer",
      commander: "Mengsk",
      name: "1",
      icon: "veterancy",
      effect: "Increases the splash radius of Overwatch Mode by 50%.",
      modifier: "aoe",
      modifiermode: null,
      modifiertag: null,
      value: "Circular splash to air units within radius 0.75 of the target.",
      operation: "replace",
      upgradetype: "upgrade",
      weapon: "overwatch-mode"
    },
    {
      upgradeid: 310,
      unit: "Xel'Naga Abrogator",
      commander: "Zeratul",
      name: "Cluster Nova",
      icon: "clusternova",
      effect: "When Purification Nova explodes, it generates three smaller novas that damage enemy units in their paths.",
      modifier: "aoe",
      modifiermode: null,
      modifiertag: null,
      value: "Purification Nova deals full damage to ground enemies in a circle of radius 1.5, then releases three smaller novas. Each small nova deals 50 damage to ground enemies it contacts.",
      operation: "replace",
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Purification Nova",
          modifier: "values.cluster",
          operation: "replace",
          value: "Releases three smaller novas on detonation, each dealing 50 damage to ground enemies it contacts."
        }
      ]
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 110
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Corrosive Bile",
          modifier: "values.radius",
          operation: "set",
          value: 1.5
        }
      ],
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Corrosive Bile",
          modifier: "values.damage",
          operation: "add",
          value: 40
        }
      ],
      cost: {
        minerals: 200,
        gas: 200
      },
      researchTime: 120
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
      upgradetype: "upgrade",
      cost: {
        minerals: 200,
        gas: 200
      },
      researchTime: 120
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
      upgradetype: "upgrade",
      cost: {
        minerals: 200,
        gas: 200
      },
      researchTime: 120
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
      upgradetype: "upgrade",
      cost: {
        minerals: 200,
        gas: 200
      },
      researchTime: 120
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 200,
        gas: 200
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Abduct",
          modifier: "values.range",
          operation: "add",
          value: 4
        },
        {
          skill: "Consumption",
          modifier: "values.range",
          operation: "add",
          value: 4
        },
        {
          skill: "Disabling Cloud",
          modifier: "values.range",
          operation: "add",
          value: 4
        },
        {
          skill: "Parasitic Bomb",
          modifier: "values.range",
          operation: "add",
          value: 4
        }
      ],
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Abduct",
          modifier: "values.stun",
          operation: "add",
          value: 5
        }
      ],
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Rapid Transfusion",
          modifier: "values.healing",
          operation: "add",
          value: 10
        },
        {
          skill: "Rapid Transfusion",
          modifier: "values.targets",
          operation: "replace",
          value: "biological or mechanical"
        }
      ],
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Destruction Wave",
          modifier: "values.knockback",
          operation: "replace",
          value: "knocking them back twice as far"
        }
      ],
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Target Lock",
          modifier: "values.range",
          operation: "add",
          value: 3
        },
        {
          skill: "Force Field",
          modifier: "values.range",
          operation: "add",
          value: 3
        },
        {
          skill: "Squad Sight",
          modifier: "values.radius",
          operation: "add",
          value: 3
        }
      ],
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Target Lock",
          modifier: "values.bonus",
          operation: "add",
          value: 15
        }
      ],
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Psionic Orb",
          modifier: "values.distance",
          operation: "multiply",
          value: 1.25
        }
      ],
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Psionic Storm",
          modifier: "values.radius",
          operation: "add",
          value: 0.8
        },
        {
          skill: "Psionic Storm",
          modifier: "values.range",
          operation: "add",
          value: 2
        },
        {
          skill: "Psionic Storm",
          modifier: "description",
          operation: "replace",
          value: `Creates a storm of psionic energy that lasts 4 seconds, causing up to {damage} damage to all enemy units in the target area. Does not damage friendly units.

Radius: {radius}.

Cast range: {range}.

Restores {shieldRestoration} shields to friendly units in the target area.`
        }
      ],
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Psionic Storm",
          modifier: "values.radius",
          operation: "add",
          value: 0.8
        },
        {
          skill: "Psionic Storm",
          modifier: "values.range",
          operation: "add",
          value: 2
        },
        {
          skill: "Psionic Storm",
          modifier: "description",
          operation: "replace",
          value: `Creates a storm of psionic energy that lasts 4 seconds, causing up to {damage} damage to all enemy units in the target area. Does not damage friendly units.

Radius: {radius}.

Cast range: {range}.

Restores {shieldRestoration} shields to friendly units in the target area.`
        }
      ],
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Barrier",
          modifier: "values.absorption",
          operation: "multiply",
          value: 2
        }
      ],
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Create Scarab",
          modifier: "values.capacity",
          operation: "multiply",
          value: 2
        }
      ],
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Graviton Beam",
          modifier: "values.targets",
          operation: "replace",
          value: "Can lift two enemies at once."
        }
      ],
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Spawn Explosive Creeper",
          modifier: "values.targets",
          operation: "replace",
          value: "ground and air"
        }
      ],
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 13,
        gas: 13
      },
      researchTime: 10
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
      upgradetype: "upgrade",
      cost: {
        minerals: 13,
        gas: 13
      },
      researchTime: 10
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
      upgradetype: "upgrade",
      cost: {
        minerals: 13,
        gas: 13
      },
      researchTime: 10
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Protective Field",
          modifier: "values.duration",
          operation: "multiply",
          value: 2
        }
      ],
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Purification Nova",
          modifier: "values.echo",
          operation: "replace",
          value: "Explodes again after 2 seconds, dealing 75 damage in a larger area."
        }
      ],
      cost: {
        minerals: 75,
        gas: 75
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 80
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Ricochet Glaive",
          modifier: "values.targets",
          operation: "add",
          value: 5
        },
        {
          skill: "Ricochet Glaive",
          modifier: "values.debilitation",
          operation: "replace",
          value: "Targets hit take 5 additional damage for 5 seconds."
        }
      ],
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 75,
        gas: 75
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 75,
        gas: 75
      },
      researchTime: 90
    },
    {
      upgradeid: 370,
      unit: "Assault Galleon",
      commander: "Horner",
      name: "Install Drone Hangar",
      icon: "installdronehangar-framed",
      effect: "Retrofits the Assault Galleon with a Drone Hangar bay that automatically builds and deploys Assault drones. Assault Drones can attack ground and air units.",
      modifier: "supply",
      modifiermode: null,
      modifiertag: null,
      value: 3,
      operation: "add",
      upgradetype: "upgrade",
      unlocksModes: [
        "assault-drones"
      ],
      buildTimeIsAdditional: true
    },
    {
      upgradeid: 556,
      unit: "Assault Galleon",
      commander: "Horner",
      name: "Install Drone Hangar",
      icon: "installdronehangar-framed",
      effect: "Retrofits the Assault Galleon with a Drone Hangar bay that automatically builds and deploys Assault drones. Assault Drones can attack ground and air units.",
      modifier: "mineralCost",
      modifiermode: null,
      modifiertag: null,
      value: 150,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 557,
      unit: "Assault Galleon",
      commander: "Horner",
      name: "Install Drone Hangar",
      icon: "installdronehangar-framed",
      effect: "Retrofits the Assault Galleon with a Drone Hangar bay that automatically builds and deploys Assault drones. Assault Drones can attack ground and air units.",
      modifier: "vespeneCost",
      modifiermode: null,
      modifiertag: null,
      value: 200,
      operation: "add",
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "KD8 Charge",
          modifier: "cooldown",
          operation: "add",
          value: -10
        },
        {
          skill: "KD8 Charge",
          modifier: "values.death",
          operation: "replace",
          value: "When killed, the Reaper throws multiple grenades toward its killer."
        }
      ],
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 42
    },
    {
      upgradeid: 372,
      unit: "Widow Mine",
      commander: "Horner",
      name: "Executioner Missiles",
      icon: "executionermissiles",
      effect: "Reduces the Widow Mine's Sentinel Missile cooldown by 20 seconds. When Widow Mines are killed, they launch 5 Sentinel Missiles at random nearby targets that deal 10 (+10 vs. shields) damage within radius 2.625 of each impact.",
      modifier: "Attack_Speed",
      modifiermode: null,
      modifiertag: null,
      value: -20,
      operation: "add",
      upgradetype: "upgrade",
      weapon: "",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 42
    },
    {
      upgradeid: 373,
      unit: "Widow Mine",
      commander: "Horner",
      name: "Black Market Launchers",
      icon: "blackmarketlaunchers",
      effect: "Widow Mines range is increased by 50%, and can burrow and unburrow much faster (almost instantly).",
      modifier: "Range",
      modifiermode: null,
      modifiertag: null,
      value: 2.5,
      operation: "add",
      upgradetype: "upgrade",
      weapon: "",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 63
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 42
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 63
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 42
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 63
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 63
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 63
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 63
    },
    {
      upgradeid: 381,
      unit: "Deimos Viking",
      commander: "Horner",
      name: "Shredder Rounds",
      icon: "shredderrounds",
      effect: "Attacks from Vikings in Assault Mode pierce, dealing damage to enemy units behind the target. Viking transform time reduced by 75%.",
      modifier: "aoe",
      modifiermode: null,
      modifiertag: null,
      value: "Piercing attacks deal full damage to ground enemies in a rectangle 7 long and 1.5 wide along the attack direction, including enemies behind the primary target.",
      operation: "replace",
      upgradetype: "upgrade",
      weapon: "assault",
      cost: {
        minerals: 200,
        gas: 100
      },
      researchTime: 63
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 63
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Analyze Weakness",
          modifier: "values.targets",
          operation: "set",
          value: 4
        }
      ],
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 63
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 63
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 120
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 120
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 120
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 120
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Leaping Strike",
          modifier: "energycost",
          operation: "multiply",
          value: 0.8
        },
        {
          skill: "Psionic Shift",
          modifier: "energycost",
          operation: "multiply",
          value: 0.8
        },
        {
          skill: "Kinetic Blast",
          modifier: "energycost",
          operation: "multiply",
          value: 0.8
        },
        {
          skill: "Crushing Grip",
          modifier: "energycost",
          operation: "multiply",
          value: 0.8
        },
        {
          skill: "Assimilation Aura",
          modifier: "cooldown",
          operation: "multiply",
          value: 0.8
        },
        {
          skill: "Immobilization Wave",
          modifier: "cooldown",
          operation: "multiply",
          value: 0.8
        }
      ],
      cost: {
        minerals: 200,
        gas: 200
      },
      researchTime: 120
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 200,
        gas: 200
      },
      researchTime: 120
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
    },
    {
      upgradeid: 403,
      unit: "Emperor's Shadow",
      commander: "Mengsk",
      name: "Sovereign Tactical Missiles",
      icon: "sovereigntacticalmissiles",
      effect: "Emperor's Shadows no longer need to channel the Tactical Missile Strike ability.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Tactical Missile Strike",
          modifier: "values.channel",
          operation: "replace",
          value: "Does not require channeling."
        }
      ],
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Heal",
          modifier: "values.targets",
          operation: "replace",
          value: "Can heal two targets at the same time."
        }
      ],
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 75,
        gas: 75
      },
      researchTime: 45
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
      upgradetype: "upgrade",
      cost: {
        minerals: 75,
        gas: 75
      },
      researchTime: 45
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Snipe",
          modifier: "values.refund",
          operation: "replace",
          value: "Refunds 50% of its energy cost when Snipe kills its target."
        }
      ],
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Penetrating Blast",
          modifier: "values.range",
          operation: "add",
          value: 2
        }
      ],
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 30
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
      upgradetype: "upgrade",
      cost: {
        minerals: 75,
        gas: 75
      },
      researchTime: 45
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 30
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Snipe",
          modifier: "values.shots",
          operation: "replace",
          value: "Fires 2 additional shots, each dealing 85 damage."
        }
      ],
      cost: {
        minerals: 75,
        gas: 75
      },
      researchTime: 45
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
      upgradetype: "upgrade",
      cost: {
        minerals: 75,
        gas: 75
      },
      researchTime: 45
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 30
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 30
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
      upgradetype: "upgrade",
      cost: {
        minerals: 75,
        gas: 75
      },
      researchTime: 45
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 30
    },
    {
      upgradeid: 424,
      unit: "Raven Type-II",
      commander: "Nova",
      name: "Covert Triage",
      icon: "coverttriage",
      effect: "Increases the healing of the Raven Type-II's Bio-Mechanical Repair Drone by 25% and allows it to cloak units that it is currently healing.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Deploy Bio-Mechanical Repair Drone",
          modifier: "values.healing",
          operation: "multiply",
          value: 1.25
        },
        {
          skill: "Deploy Bio-Mechanical Repair Drone",
          modifier: "values.cloak",
          operation: "replace",
          value: "Cloaks units while healing them."
        }
      ],
      cost: {
        minerals: 75,
        gas: 75
      },
      researchTime: 45
    },
    {
      upgradeid: 425,
      unit: "Raven Type-II",
      commander: "Nova",
      name: "Enhanced Manufacturing",
      icon: "enhancedmanufacturing",
      effect: "Allows the Raven Type-II to store up to 3 charges for each of its abilities.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Build Railgun Turret",
          modifier: "charges",
          operation: "set",
          value: 3
        },
        {
          skill: "Deploy Bio-Mechanical Repair Drone",
          modifier: "charges",
          operation: "set",
          value: 3
        },
        {
          skill: "Predator Missile",
          modifier: "charges",
          operation: "set",
          value: 3
        }
      ],
      cost: {
        minerals: 75,
        gas: 75
      },
      researchTime: 45
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Heal",
          modifier: "values.targets",
          operation: "replace",
          value: "biological or mechanical"
        },
        {
          skill: "Heal",
          modifier: "values.healing",
          operation: "set",
          value: 12
        },
        {
          skill: "Heal",
          modifier: "values.protection",
          operation: "replace",
          value: "Units being healed take 25% less damage."
        }
      ],
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 50,
        gas: 50
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Deploy Spider Mine",
          modifier: "values.radius",
          operation: "replace",
          value: "Blast and trigger radii are increased by 33%."
        }
      ],
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
    },
    {
      upgradeid: 430,
      unit: "Viking",
      commander: "Raynor",
      name: "Ripwave Missiles",
      icon: "ripwavemissiles",
      effect: "Upgrades the Viking's missiles to deal area damage.",
      modifier: "aoe",
      modifiermode: null,
      modifiertag: null,
      value: "Circular splash damage to air enemies around the target: 100% within radius 0.3, 50% from 0.3 to 0.6, and 25% from 0.6 to 1.2.",
      operation: "replace",
      upgradetype: "upgrade",
      weapon: "fighter-mode",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Tunnel of TERROR Algorithm",
          modifier: "values.range",
          operation: "add",
          value: 6
        }
      ],
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Cluster Busters",
          modifier: "values.radius",
          operation: "set",
          value: 3
        }
      ],
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Roaches Away!",
          modifier: "values.ravager",
          operation: "replace",
          value: "Also spawns one Mecha Ravager."
        },
        {
          skill: "Deconstructive Roach-nites",
          modifier: "values.ravager",
          operation: "replace",
          value: "Also spawns one Mecha Ravager."
        }
      ],
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Vectored Burrow Charge",
          modifier: "values.stun",
          operation: "replace",
          value: "Stuns enemy mechanical ground units in a large area."
        }
      ],
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Fungal Snare",
          modifier: "cooldown",
          operation: "add",
          value: -15
        }
      ],
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Lock On",
          modifier: "values.range",
          operation: "add",
          value: 3
        }
      ],
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Lock On",
          modifier: "values.damage",
          operation: "multiply",
          value: 2
        }
      ],
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Nano-Repair",
          modifier: "values.energy",
          operation: "set",
          value: 0
        }
      ],
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Shredder Grenade",
          modifier: "values.implosion",
          operation: "replace",
          value: "Pulls affected units to the center and stuns them for 2 seconds."
        }
      ],
      cost: {
        minerals: 600,
        gas: 150
      }
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Shredder Grenade",
          modifier: "values.damage",
          operation: "add",
          value: 50
        }
      ],
      cost: {
        minerals: 600,
        gas: 150
      }
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
      upgradetype: "upgrade",
      cost: {
        minerals: 600,
        gas: 150
      }
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Demolition Charge",
          modifier: "values.damage",
          operation: "multiply",
          value: 2
        }
      ],
      cost: {
        minerals: 600,
        gas: 150
      }
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Demolition Charge",
          modifier: "values.restraint",
          operation: "replace",
          value: "Stuns the target and disables its detection until the charge explodes."
        }
      ],
      cost: {
        minerals: 600,
        gas: 150
      }
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
      upgradetype: "upgrade",
      cost: {
        minerals: 600,
        gas: 150
      }
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Demolition Charge",
          modifier: "values.recharge",
          operation: "replace",
          value: "Each attack reduces the remaining charge-up time by 3 seconds."
        }
      ],
      cost: {
        minerals: 1200,
        gas: 400
      }
    },
    {
      upgradeid: 486,
      unit: 'James "Sirius" Sykes',
      commander: "Tychus",
      name: "SA-55 Thunderbolt Missiles",
      icon: "sa55thunderboltmissiles",
      effect: "Equips Sirius with missiles that deal 100 damage to 8 air targets. Warhound Turrets deal 100 to 2 air targets.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Deploy Warhound Turret",
          modifier: "values.missiles",
          operation: "replace",
          value: "Turrets fire missiles at up to 2 air targets, dealing 100 damage to each."
        }
      ],
      cost: {
        minerals: 600,
        gas: 150
      }
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
      upgradetype: "upgrade",
      cost: {
        minerals: 600,
        gas: 150
      }
    },
    {
      upgradeid: 488,
      unit: 'James "Sirius" Sykes',
      commander: "Tychus",
      name: "Moebius M34 Terror Rounds",
      icon: "moebiusm34terrorrounds",
      effect: "Provides a 30% chance for Sirius to cast Fear in a small area with each attack. Enemy units in the area will run around in fear for 3 seconds. Warhound Turrets have a 3% chance to cast Fear with each attack.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Deploy Warhound Turret",
          modifier: "values.fear",
          operation: "replace",
          value: "Turret attacks have a 3% chance to cause Fear in a small area for 3 seconds."
        }
      ],
      cost: {
        minerals: 600,
        gas: 150
      }
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
      upgradetype: "upgrade",
      cost: {
        minerals: 600,
        gas: 150
      }
    },
    {
      upgradeid: 490,
      unit: 'James "Sirius" Sykes',
      commander: "Tychus",
      name: "D99 Detonator",
      icon: "d99detonator",
      effect: "When Sirius is defeated, he triggers an explosion, dealing 300 damage to enemy units in an area around him. Warhound Turrets deal 50 damage on death.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Deploy Warhound Turret",
          modifier: "values.explosion",
          operation: "replace",
          value: "Turrets explode on death, dealing 50 damage to nearby enemies."
        }
      ],
      cost: {
        minerals: 600,
        gas: 150
      }
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
      upgradetype: "upgrade",
      cost: {
        minerals: 600,
        gas: 150
      }
    },
    {
      upgradeid: 492,
      unit: 'James "Sirius" Sykes',
      commander: "Tychus",
      name: "Umojan Turret Frame",
      icon: "umojanturretframe",
      effect: "Increases the life and weapon damage of Warhound Turrets by 75%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Deploy Warhound Turret",
          modifier: "values.frame",
          operation: "replace",
          value: "Warhound Turrets have 75% more life and weapon damage."
        }
      ],
      cost: {
        minerals: 1200,
        gas: 400
      }
    },
    {
      upgradeid: 493,
      unit: 'Miles "Blaze" Lewis',
      commander: "Tychus",
      name: "High Capacity Containers",
      icon: "highcapacitycontainers",
      effect: "Increases the radius Blaze's of Oil Spill by 100%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Oil Spill",
          modifier: "values.radius",
          operation: "multiply",
          value: 2
        }
      ],
      cost: {
        minerals: 600,
        gas: 150
      }
    },
    {
      upgradeid: 494,
      unit: 'Miles "Blaze" Lewis',
      commander: "Tychus",
      name: "Hades Oil",
      icon: "hadesoil",
      effect: "Improves the damage dealt by the Enflame effect from Blaze's Oil Spill to deal +25 per second vs. light units.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Oil Spill",
          modifier: "values.lightDamage",
          operation: "add",
          value: 25
        }
      ],
      cost: {
        minerals: 600,
        gas: 150
      }
    },
    {
      upgradeid: 495,
      unit: 'Miles "Blaze" Lewis',
      commander: "Tychus",
      name: "Wildflame Fuel Additives",
      icon: "wildflamefueladditives",
      effect: "When units Enflamed by Blaze's Oil Spill die, they explode, spreading Enflamed to enemy units in the area.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Oil Spill",
          modifier: "values.spread",
          operation: "replace",
          value: "Enflamed enemies explode on death, spreading Enflamed to nearby enemy units."
        }
      ],
      cost: {
        minerals: 600,
        gas: 150
      }
    },
    {
      upgradeid: 496,
      unit: 'Miles "Blaze" Lewis',
      commander: "Tychus",
      name: "XCMC-670 Combat Suit",
      icon: "xcmc670combatsuit",
      effect: "Reduces all damage taken by Blaze to 30.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade",
      cost: {
        minerals: 1200,
        gas: 400
      }
    },
    {
      upgradeid: 497,
      unit: 'Rob "Cannonball" Boswell',
      commander: "Tychus",
      name: "X-71 Impact Boots",
      icon: "x71impactboots",
      effect: "Increases the stun duration and radius of Cannonball's Heavy Impact by 100%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Heavy Impact",
          modifier: "values.radius",
          operation: "multiply",
          value: 2
        },
        {
          skill: "Heavy Impact",
          modifier: "values.stun",
          operation: "multiply",
          value: 2
        }
      ],
      cost: {
        minerals: 600,
        gas: 150
      }
    },
    {
      upgradeid: 498,
      unit: 'Rob "Cannonball" Boswell',
      commander: "Tychus",
      name: "Critical Response System",
      icon: "criticalresponsesystem",
      effect: "Allows Cannonball to become immune to damage for 5 seconds and restores all his life when he takes fatal damage. Cannot occur more than once every 60 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade",
      cost: {
        minerals: 600,
        gas: 150
      }
    },
    {
      upgradeid: 499,
      unit: 'Rob "Cannonball" Boswell',
      commander: "Tychus",
      name: "M.A.L.I.C.E. Ammunition",
      icon: "maliceammunition",
      effect: "Provides a 30% chance that Cannonball will deal 4 times more damage with his attacks.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade",
      cost: {
        minerals: 1200,
        gas: 400
      }
    },
    {
      upgradeid: 500,
      unit: 'Kev "Rattlesnake" West',
      commander: "Tychus",
      name: "Umojan Signal Modulator",
      icon: "umojansignalmodulator",
      effect: "Improves the healing rate of Rattlesnake's Revitalizers by 100%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Deploy Revitalizer",
          modifier: "values.healing",
          operation: "multiply",
          value: 2
        }
      ],
      cost: {
        minerals: 600,
        gas: 150
      }
    },
    {
      upgradeid: 501,
      unit: 'Kev "Rattlesnake" West',
      commander: "Tychus",
      name: "Moebius Aggression Blend",
      icon: "moebiusaggressionblend",
      effect: "Units in range of Rattlesnake's Revitalizers gain 15% additional attack speed.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Deploy Revitalizer",
          modifier: "values.attackSpeed",
          operation: "replace",
          value: "Units in range gain 15% attack speed."
        }
      ],
      cost: {
        minerals: 600,
        gas: 150
      }
    },
    {
      upgradeid: 502,
      unit: 'Kev "Rattlesnake" West',
      commander: "Tychus",
      name: "Hammer Munitions",
      icon: "hammermunitions",
      effect: "Rattlesnake's attacks slow and deal 50% of their damage in an area of effect.",
      modifier: "aoe",
      modifiermode: null,
      modifiertag: null,
      value: "Attacks slow enemies and deal 50% damage to ground enemies in a circle of radius 2 around the target.",
      operation: "replace",
      upgradetype: "upgrade",
      cost: {
        minerals: 1200,
        gas: 400
      }
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Dominate",
          modifier: "values.restoration",
          operation: "replace",
          value: "Fully restores the target's life, shields, and energy, and grants 75% increased attack speed."
        }
      ],
      cost: {
        minerals: 600,
        gas: 150
      }
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Dominate",
          modifier: "values.confusion",
          operation: "replace",
          value: "Confuses enemies near the target, forcing them to attack each other for 10 seconds."
        }
      ],
      cost: {
        minerals: 600,
        gas: 150
      }
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
      upgradetype: "upgrade",
      cost: {
        minerals: 600,
        gas: 150
      }
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Dominate",
          modifier: "values.duration",
          operation: "multiply",
          value: 3
        }
      ],
      cost: {
        minerals: 1200,
        gas: 400
      }
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Ultrasonic Pulse",
          modifier: "values.damage",
          operation: "multiply",
          value: 1.5
        }
      ],
      cost: {
        minerals: 600,
        gas: 150
      }
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Ultrasonic Pulse",
          modifier: "values.radius",
          operation: "multiply",
          value: 1.5
        }
      ],
      cost: {
        minerals: 600,
        gas: 150
      }
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Ultrasonic Pulse",
          modifier: "values.duration",
          operation: "multiply",
          value: 2
        }
      ],
      cost: {
        minerals: 600,
        gas: 150
      }
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Ultrasonic Pulse",
          modifier: "values.network",
          operation: "replace",
          value: "Nearby Outlaws have their primary ability cooldowns and charge-up times reduced by 20%."
        }
      ],
      cost: {
        minerals: 1200,
        gas: 400
      }
    },
    {
      upgradeid: 511,
      unit: "Lt. Layna Nikara",
      commander: "Tychus",
      name: "Umojan Repair Nanites",
      icon: "umojanrepairnanites",
      effect: "Increases the immediate and periodic heal of Lt. Nikara's Reinvigorating Burst by 100%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Reinvigorating Burst",
          modifier: "values.instantHealing",
          operation: "multiply",
          value: 2
        },
        {
          skill: "Reinvigorating Burst",
          modifier: "values.healing",
          operation: "multiply",
          value: 2
        }
      ],
      cost: {
        minerals: 600,
        gas: 150
      }
    },
    {
      upgradeid: 512,
      unit: "Lt. Layna Nikara",
      commander: "Tychus",
      name: "Procyon Serum",
      icon: "procyonserum",
      effect: "Increases the healing rate of Lt. Nikara's Super Heal by 100%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Super Heal",
          modifier: "values.healing",
          operation: "multiply",
          value: 2
        }
      ],
      cost: {
        minerals: 600,
        gas: 150
      }
    },
    {
      upgradeid: 513,
      unit: "Lt. Layna Nikara",
      commander: "Tychus",
      name: "Procyon Twin Heal Beam Gauntlet",
      icon: "procyontwinhealbeamgauntlet",
      effect: "Allows Lt. Nikara to cast Super Heal on two targets at the same time.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Super Heal",
          modifier: "values.targets",
          operation: "replace",
          value: "two targets"
        },
        {
          skill: "Super Heal",
          modifier: "values.gearNote",
          operation: "replace",
          value: ""
        }
      ],
      cost: {
        minerals: 600,
        gas: 150
      }
    },
    {
      upgradeid: 514,
      unit: "Lt. Layna Nikara",
      commander: "Tychus",
      name: "XM-77 Matrix Generator",
      icon: "xm77matrixgenerator",
      effect: "Enables Lt. Nikara to surround a target friendly unit with a shield that can absorb 400 damage over 20 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade",
      cost: {
        minerals: 1200,
        gas: 400
      }
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Blink",
          modifier: "values.shield",
          operation: "replace",
          value: "Cloaks the Stalker and restores 80 shields over 5 seconds."
        }
      ],
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 200,
        gas: 200
      },
      researchTime: 120
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 200,
        gas: 200
      },
      researchTime: 120
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Stasis Ward",
          modifier: "values.vulnerability",
          operation: "replace",
          value: "can be attacked"
        }
      ],
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 90
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      unit: "Xel'Naga Ambusher",
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
      unit: "Xel'Naga Ambusher",
      commander: "Zeratul",
      name: "Vengeance of the Void",
      icon: "vengeanceofthevoid",
      effect: "Blinking leaves behind a Void Apparition that attacks once for 50% of the unit's weapon damage.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Predictive Blink",
          modifier: "values.apparition",
          operation: "replace",
          value: "Leaves behind a Void Apparition that attacks once for 50% of the unit's weapon damage."
        }
      ]
    },
    {
      upgradeid: 533,
      unit: "Xel'Naga Ambusher",
      commander: "Zeratul",
      name: "Phase Battery",
      icon: "phasebattery",
      effect: "This unit can now store up to 3 charges of Predictive Blink and regains a charge every 8 seconds.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Predictive Blink",
          modifier: "charges",
          operation: "set",
          value: 3
        }
      ]
    },
    {
      upgradeid: 534,
      unit: "Xel'Naga Shieldguard",
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
      unit: "Xel'Naga Shieldguard",
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
      unit: "Xel'Naga Shieldguard",
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
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Blink",
          modifier: "values.damage",
          operation: "replace",
          value: "Deals 50 damage to enemy units caught in its path."
        }
      ]
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
      unit: "Xel'Naga Enforcer",
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
      unit: "Xel'Naga Enforcer",
      commander: "Zeratul",
      name: "Force Cannon",
      icon: "forcecannon",
      effect: "Allows this unit's anti-air weapon to knock back enemy air units, dealing 25% of its damage to units caught in the path of the blast.",
      modifier: "aoe",
      modifiermode: null,
      modifiertag: null,
      value: "The anti-air attack knocks the target back and deals 25% damage to enemy air units in a rectangle 5 long and 3 wide extending behind the primary target.",
      operation: "replace",
      upgradetype: "upgrade",
      weapon: "air"
    },
    {
      upgradeid: 542,
      unit: "Xel'Naga Enforcer",
      commander: "Zeratul",
      name: "Eternity Barrier",
      icon: "enternitybarrier",
      effect: "Increases the damage absorption of the Xel'Naga Enforcer's Barrier by 300% and fully repairs its hull damage.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Barrier",
          modifier: "values.absorption",
          operation: "multiply",
          value: 4
        },
        {
          skill: "Barrier",
          modifier: "values.repair",
          operation: "replace",
          value: "Fully repairs hull damage."
        }
      ]
    },
    {
      upgradeid: 543,
      unit: "Xel'Naga Void Array",
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
      unit: "Xel'Naga Void Array",
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
      modifiermode: null,
      modifiertag: null,
      value: "Bounces to up to 2 additional air enemies, within radius 3 of the previous target. Base bounce damage: 9, 3; gains 1 and 0.5 per weapon upgrade.",
      operation: "replace",
      upgradetype: "upgrade",
      weapon: "air",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
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
      upgradetype: "upgrade",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 120
    },
    {
      upgradeid: 548,
      unit: "Dehaka",
      commander: "Dehaka",
      name: "Chitinous Plating",
      icon: "chitinousplating",
      effect: "Increases Dehaka's armor by 3. Requires a skill point and hero level 5.",
      modifier: "Armor",
      modifiermode: null,
      modifiertag: null,
      value: 3,
      operation: "add",
      upgradetype: "upgrade"
    },
    {
      upgradeid: 549,
      unit: "Sovereign Battlecruiser",
      commander: "Horner",
      name: "Overcharged Reactor",
      icon: "overchargedreactor",
      effect: "Battlecruiser weapons systems are upgraded to a powerful particle cannon that deals 200 damage per attack.",
      modifier: "weaponName",
      modifiermode: null,
      modifiertag: null,
      value: "Mini Yamato Gun",
      operation: "replace",
      upgradetype: "preupgrade",
      weapon: "",
      cost: {
        minerals: 150,
        gas: 150
      },
      researchTime: 63
    },
    {
      upgradeid: 550,
      unit: "Primal Mutalisk",
      commander: "Dehaka",
      name: "Slicing Glaive",
      icon: "slicingglaive",
      effect: "Primal Mutalisks deal 100% increased damage against air units.",
      modifier: "weaponName",
      modifiermode: null,
      modifiertag: null,
      value: "Slicing Glave",
      operation: "replace",
      upgradetype: "upgrade",
      weapon: "air",
      cost: {
        minerals: 100,
        gas: 100
      },
      researchTime: 60
    },
    {
      upgradeid: 551,
      unit: "Tesseract Cannon",
      commander: "Zeratul",
      name: "Tesseract Matrix",
      icon: "tesseractmatrix",
      effect: "Decreases the cooldown of Shade Projection by 25%. Increases the damage absorbed by Shade Barrier by 100%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Shade Projection",
          modifier: "cooldown",
          operation: "multiply",
          value: 0.75
        },
        {
          skill: "Shade Barrier",
          modifier: "values.absorption",
          operation: "multiply",
          value: 2
        }
      ]
    },
    {
      upgradeid: 552,
      unit: "Tesseract Monolith",
      commander: "Zeratul",
      name: "Tesseract Matrix",
      icon: "tesseractmatrix",
      effect: "Decreases the cooldown of Shade Projection by 25%. Increases the damage absorbed by Shade Barrier by 100%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Shade Projection",
          modifier: "cooldown",
          operation: "multiply",
          value: 0.75
        },
        {
          skill: "Shade Barrier",
          modifier: "values.absorption",
          operation: "multiply",
          value: 2
        }
      ]
    },
    {
      upgradeid: 553,
      unit: "Zeratul",
      commander: "Zeratul",
      name: "Void Blink",
      icon: "voidblink",
      effect: "Reduces the cooldown of Zeratul and his units' Blink abilities by 50%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Blink",
          modifier: "cooldown",
          operation: "multiply",
          value: 0.5
        }
      ]
    },
    {
      upgradeid: 554,
      unit: "Void Templar",
      commander: "Zeratul",
      name: "Void Blink",
      icon: "voidblink",
      effect: "Reduces the cooldown of Zeratul and his units' Blink abilities by 50%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Blink",
          modifier: "cooldown",
          operation: "multiply",
          value: 0.5
        }
      ]
    },
    {
      upgradeid: 555,
      unit: "Xel'Naga Ambusher",
      commander: "Zeratul",
      name: "Void Blink",
      icon: "voidblink",
      effect: "Reduces the cooldown of Zeratul and his units' Blink abilities by 50%.",
      modifier: null,
      modifiermode: null,
      modifiertag: null,
      value: null,
      operation: "none",
      upgradetype: "upgrade",
      skillModifiers: [
        {
          skill: "Predictive Blink",
          modifier: "cooldown",
          operation: "multiply",
          value: 0.5
        }
      ]
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
      cooldown: 10,
      energycost: 0,
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
      cooldown: 45,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Abathur",
      unit: "Devourer",
      name: "Evolve to Leviathan",
      icons: [
        "/images/commanderdata/unitskills/morphs/btn-unit-zerg-leviathan.png"
      ],
      description: "Evolves this unit into a Leviathan at 100 biomass. Limited to 3 Leviathans at a time. The Limitless increases the requirement to 200 biomass and removes the limit.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires commander level 2.",
      cost: {
        minerals: 0,
        gas: 0
      },
      buildTime: 5,
      excludedPrestiges: [
        "Essence Hoarder"
      ]
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
      description: `Launch a missile at the target location, dealing {damage} damage to enemy units in the area upon impact.
Can destroy Protoss Force Fields.

Impact radius: {radius}.`,
      type: "active",
      requiresupgrade: false,
      cooldown: 10,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        damage: 60,
        radius: 0.5
      }
    },
    {
      commander: "Abathur",
      unit: "Ravager",
      name: "Deep Tunnel",
      icons: [
        "/images/commanderdata/unitskills/abathur/deeptunnel.png"
      ],
      description: "Quickly burrow to the target location without requiring vision. The Deep Tunnel upgrade does not require a Hive.",
      type: "active",
      requiresupgrade: true,
      cooldown: 30,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: "Tunneling Horror",
      requirements: "Requires Deep Tunnel research at an Infestation Pit."
    },
    {
      commander: "Abathur",
      unit: "Ravager",
      name: "Evolve to Brutalisk",
      icons: [
        "/images/commanderdata/unitskills/morphs/btn-unit-zerg-brutalisk.png"
      ],
      description: "Evolves this unit into a Brutalisk at 100 biomass. Limited to 3 Brutalisks at a time. The Limitless increases the requirement to 200 biomass and removes the limit.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires commander level 2.",
      cost: {
        minerals: 0,
        gas: 0
      },
      buildTime: 5,
      excludedPrestiges: [
        "Essence Hoarder"
      ]
    },
    {
      commander: "Abathur",
      unit: "Roach",
      name: "Deep Tunnel",
      icons: [
        "/images/commanderdata/unitskills/abathur/deeptunnel.png"
      ],
      description: "Quickly burrow to the target location without requiring vision. The Deep Tunnel upgrade does not require a Hive.",
      type: "active",
      requiresupgrade: true,
      cooldown: 30,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: "Tunneling Horror",
      requirements: "Requires Deep Tunnel research at an Infestation Pit."
    },
    {
      commander: "Abathur",
      unit: "Roach",
      name: "Morph to Ravager",
      icons: [
        "/images/commanderdata/unitskills/morphs/btn-unit-zerg-ravager.png"
      ],
      description: "Transforms this Roach into a Ravager.",
      type: "active",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Lair.",
      cost: {
        minerals: 13,
        gas: 38,
        supply: 1
      },
      buildTime: 5
    },
    {
      commander: "Abathur",
      unit: "Roach",
      name: "Evolve to Brutalisk",
      icons: [
        "/images/commanderdata/unitskills/morphs/btn-unit-zerg-brutalisk.png"
      ],
      description: "Evolves this unit into a Brutalisk at 100 biomass. Limited to 3 Brutalisks at a time. The Limitless increases the requirement to 200 biomass and removes the limit.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires commander level 2.",
      cost: {
        minerals: 0,
        gas: 0
      },
      buildTime: 5,
      excludedPrestiges: [
        "Essence Hoarder"
      ]
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
        "/images/commanderdata/unitskills/abathur/spawnlocusts-framed.png"
      ],
      description: "Sends Locusts to target location.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: 15,
      energycost: 0,
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
      cooldown: 30,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Abathur",
      unit: "Swarm Host",
      name: "Evolve to Brutalisk",
      icons: [
        "/images/commanderdata/unitskills/morphs/btn-unit-zerg-brutalisk.png"
      ],
      description: "Evolves this unit into a Brutalisk at 100 biomass. Limited to 3 Brutalisks at a time. The Limitless increases the requirement to 200 biomass and removes the limit.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires commander level 2.",
      cost: {
        minerals: 0,
        gas: 0
      },
      buildTime: 5,
      excludedPrestiges: [
        "Essence Hoarder"
      ]
    },
    {
      commander: "Abathur",
      unit: "Swarm Queen",
      name: "Spawn Creep Tumor",
      icons: [
        "/images/commanderdata/unitskills/abathur/spawncreeptumor-framed.png"
      ],
      description: `A burrowed creep generator. Creep feeds nearby Zerg structures. A Creep Tumor can spawn additional Creep Tumors.
Bonus: Zerg move faster on creep.`,
      type: "active",
      requiresupgrade: false,
      cooldown: 3,
      energycost: 0,
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
      description: "Heals a {targets} unit or structure for {healing} life over time.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: 3,
      energycost: 10,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        healing: 25,
        targets: "biological"
      }
    },
    {
      commander: "Abathur",
      unit: "Swarm Queen",
      name: "Evolve to Brutalisk",
      icons: [
        "/images/commanderdata/unitskills/morphs/btn-unit-zerg-brutalisk.png"
      ],
      description: "Evolves this unit into a Brutalisk at 100 biomass. Limited to 3 Brutalisks at a time. The Limitless increases the requirement to 200 biomass and removes the limit.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires commander level 2.",
      cost: {
        minerals: 0,
        gas: 0
      },
      buildTime: 5,
      excludedPrestiges: [
        "Essence Hoarder"
      ]
    },
    {
      commander: "Abathur",
      unit: "Viper",
      name: "Abduct",
      icons: [
        "/images/commanderdata/unitskills/abathur/abduct.png"
      ],
      description: `Pulls target unit to the Viper. Enemy is stunned for {stun} seconds.

Cast range: {range}.`,
      type: "active",
      requiresupgrade: false,
      cooldown: 0,
      energycost: 25,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        range: 9,
        stun: 1
      }
    },
    {
      commander: "Abathur",
      unit: "Viper",
      name: "Disabling Cloud",
      icons: [
        "/images/commanderdata/unitskills/abathur/disablingcloud.png"
      ],
      description: `Creates a cloud that slows movement speed (-50%) and prevents enemy units and structures from attacking and using energy-based abilities. Lasts for 10 seconds.

Cast range: {range}.`,
      type: "active",
      requiresupgrade: false,
      cooldown: 0,
      energycost: 75,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        range: 11
      }
    },
    {
      commander: "Abathur",
      unit: "Viper",
      name: "Consumption",
      icons: [
        "/images/commanderdata/unitskills/abathur/consumption.png"
      ],
      description: `Drains up to 75 life from a friendly Zerg unit and gives the Viper 2 energy for each point of life drained.

Cast range: {range}.`,
      type: "active",
      requiresupgrade: false,
      cooldown: 10,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        range: 4
      }
    },
    {
      commander: "Abathur",
      unit: "Viper",
      name: "Parasitic Bomb",
      icons: [
        "/images/commanderdata/unitskills/abathur/parasiticbomb.png"
      ],
      description: `Creates a parasitic cloud of radius 3 that deals 90 damage over 10 seconds to the target and enemy air units nearby. If the target dies, the cloud remains in the air where the enemy died until it expires.
Cannot target ground units or structures.

Cast range: {range}.`,
      type: "active",
      requiresupgrade: false,
      cooldown: 0,
      energycost: 125,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        range: 8
      }
    },
    {
      commander: "Abathur",
      unit: "Viper",
      name: "Evolve to Leviathan",
      icons: [
        "/images/commanderdata/unitskills/morphs/btn-unit-zerg-leviathan.png"
      ],
      description: "Evolves this unit into a Leviathan at 100 biomass. Limited to 3 Leviathans at a time. The Limitless increases the requirement to 200 biomass and removes the limit.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires commander level 2.",
      cost: {
        minerals: 0,
        gas: 0
      },
      buildTime: 5,
      excludedPrestiges: [
        "Essence Hoarder"
      ]
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
      cooldown: 10,
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
      description: "Unleashes a massive wave of force in a straight line, dealing 50 damage to enemies in its path and {knockback}.",
      type: "active",
      requiresupgrade: false,
      cooldown: 5,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        knockback: "knocking them back"
      }
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
      cooldown: 240,
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
        "/images/commanderdata/unitskills/alarak/soulabsorption.png"
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
      description: `Unleashes a traveling Psionic Orb that deals {damage} damage per second to all enemies along its path.

Travel distance: {distance}.

{stacks}`,
      type: "active",
      requiresupgrade: false,
      cooldown: 2,
      energycost: 100,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        damage: 10,
        distance: 13,
        stacks: ""
      }
    },
    {
      commander: "Alarak",
      unit: "Ascendant",
      name: "Mind Blast",
      icons: [
        "/images/commanderdata/unitskills/alarak/mindblast.png"
      ],
      description: `Deals {damage} damage to target enemy unit.
Can target ground and air units.

{stacks}`,
      type: "active",
      requiresupgrade: true,
      cooldown: 8,
      energycost: 100,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        damage: 200,
        stacks: ""
      }
    },
    {
      commander: "Alarak",
      unit: "Ascendant",
      name: "Sacrifice",
      icons: [
        "/images/commanderdata/unitskills/alarak/sacrifice.png"
      ],
      description: `Sacrifices a Supplicant to fully restore the Ascendant's energy.
Can only target Supplicants.

{bonus}`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: 60,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        bonus: ""
      }
    },
    {
      commander: "Alarak",
      unit: "Havoc",
      name: "Target Lock",
      icons: [
        "/images/commanderdata/unitskills/alarak/targetlock.png"
      ],
      description: `Increases damage dealt to target enemy unit by {bonus}%. Effect lasts as long as the Havoc remains locked onto the target.

Cast range: {range}.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: 3,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        bonus: 15,
        range: 8
      }
    },
    {
      commander: "Alarak",
      unit: "Havoc",
      name: "Force Field",
      icons: [
        "/images/commanderdata/unitskills/alarak/forcefield.png"
      ],
      description: `Creates a solid barrier that lasts for 15 seconds and impedes movement of ground units.
Massive units shatter Force Fields on contact. (3 charges max).

Cast range: {range}.`,
      type: "active",
      requiresupgrade: false,
      cooldown: 15,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      charges: 3,
      values: {
        range: 9
      }
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
      description: "Friendly units within a radius of {radius} gain 2 additional range on non-melee attacks.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        radius: 4
      }
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
      cooldown: 1,
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
      cooldown: 8,
      energycost: 0,
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
      cooldown: 5,
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
      description: "Drains all energy from the target. Deals {damagePerEnergy} damage per point of energy.",
      type: "active",
      requiresupgrade: false,
      cooldown: 0,
      energycost: 50,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        damagePerEnergy: 1
      }
    },
    {
      commander: "Artanis",
      unit: "Archon",
      name: "Psionic Storm",
      icons: [
        "/images/commanderdata/unitskills/artanis/psionicstorm.png"
      ],
      description: `Creates a storm of psionic energy that lasts 4 seconds, causing up to {damage} damage to all enemy units in the target area. Does not damage friendly units.

Radius: {radius}.

Cast range: {range}.`,
      type: "active",
      requiresupgrade: true,
      cooldown: 2,
      energycost: 75,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        radius: 1.5,
        range: 9,
        damage: 80,
        shieldRestoration: 50
      }
    },
    {
      commander: "Artanis",
      unit: "High Templar",
      name: "Feedback",
      icons: [
        "/images/commanderdata/unitskills/artanis/feedback.png"
      ],
      description: "Drains all energy from the target. Deals {damagePerEnergy} damage per point of energy.",
      type: "active",
      requiresupgrade: false,
      cooldown: 0,
      energycost: 50,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        damagePerEnergy: 1
      }
    },
    {
      commander: "Artanis",
      unit: "High Templar",
      name: "Psionic Storm",
      icons: [
        "/images/commanderdata/unitskills/artanis/psionicstorm.png"
      ],
      description: `Creates a storm of psionic energy that lasts 4 seconds, causing up to {damage} damage to all enemy units in the target area. Does not damage friendly units.

Radius: {radius}.

Cast range: {range}.`,
      type: "active",
      requiresupgrade: true,
      cooldown: 2,
      energycost: 75,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        radius: 1.5,
        range: 9,
        damage: 80,
        shieldRestoration: 50
      }
    },
    {
      commander: "Artanis",
      unit: "High Templar",
      name: "Archon Merge",
      icons: [
        "/images/commanderdata/unitskills/morphs/btn-unit-protoss-archon.png"
      ],
      description: "Merges two High Templar into one Archon.",
      type: "active",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      cost: {
        minerals: 0,
        gas: 0
      },
      buildTime: 12
    },
    {
      commander: "Artanis",
      unit: "Immortal",
      name: "Barrier",
      icons: [
        "/images/commanderdata/unitskills/artanis/barrier.png"
      ],
      description: "Absorbs up to {absorption} damage. Lasts for 10 seconds.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: 60,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        absorption: 100
      }
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
Massive units are immune.

{targets}`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: 30,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        targets: ""
      }
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
Can attack ground units. ({capacity} max).`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: 8,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        capacity: 5
      }
    },
    {
      commander: "Artanis",
      unit: "Tempest",
      name: "Disintegration",
      icons: [
        "/images/commanderdata/unitskills/artanis/disintegration.png"
      ],
      description: "Deals {damage} damage over 20 seconds to target enemy unit or structure.",
      type: "active",
      requiresupgrade: true,
      cooldown: 90,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        damage: 500
      }
    },
    {
      commander: "Artanis",
      unit: "Zealot",
      name: "Charge",
      icons: [
        "/images/commanderdata/unitskills/artanis/charge.png"
      ],
      description: `Intercepts enemy ground units and increases movement speed.

{chargeBonus}`,
      type: "autocast",
      requiresupgrade: true,
      cooldown: 10,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        chargeBonus: ""
      }
    },
    {
      commander: "Artanis",
      unit: "Zealot",
      name: "Whirlwind",
      icons: [
        "/images/commanderdata/unitskills/artanis/whirlwind.png"
      ],
      description: "Deals {damage} damage per second to all nearby enemy units. Lasts 3 seconds.",
      type: "autocast",
      requiresupgrade: true,
      cooldown: 10,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        damage: 10
      }
    },
    {
      commander: "Dehaka",
      unit: "Creeper Host",
      name: "Spawn Explosive Creeper",
      icons: [
        "/images/commanderdata/unitskills/dehaka/spawnexplosivecreeper-framed.png"
      ],
      description: `Siege unit that attacks by spawning Explosive Creepers. Creepers last 25 seconds.
Creepers can attack {targets} units.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: 30,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        targets: "ground"
      }
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
      cooldown: 10,
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
      cooldown: 10,
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
      cooldown: 30,
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
      requirements: "Requires skill points; values shown at level 3. With Devouring One (P1), Devour also grants its benefits to friendly units within range 10."
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
      cooldown: 30,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires skill points; values shown at level 3.",
      charges: 3,
      excludedPrestiges: [
        "Devouring One"
      ]
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
      cooldown: 60,
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
      cooldown: 6,
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
      cooldown: 0,
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
      cooldown: 20,
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
      cooldown: 60,
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
      cooldown: 10,
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
      cooldown: 3,
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
      cooldown: 10,
      energycost: 0,
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
        "/images/commanderdata/unitskills/dehaka/spawnprimallocusts-framed.png"
      ],
      description: `Siege unit that attacks by spawning Primal Locusts. Primal Locusts last 25 seconds.
Primal Locusts can attack ground units.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: 30,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Dehaka",
      unit: "Primal Host",
      name: "Primal Combat: Creeper Host",
      icons: [
        "/images/commanderdata/unitskills/morphs/btn-unit-collection-primal-swarmhost.png"
      ],
      description: "Two Primal Hosts engage in primal combat, consuming both units to produce one Creeper Host.",
      type: "active",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires commander level 8.",
      cost: {
        minerals: 0,
        gas: 0
      },
      buildTime: 8
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
      cooldown: 60,
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
      cooldown: 10,
      energycost: 0,
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
      unit: "Primal Ultralisk",
      name: "Primal Combat: Tyrannozor",
      icons: [
        "/images/commanderdata/unitskills/morphs/btn-unit-collection-ultralisk-collectoredition.png"
      ],
      description: "Two Primal Ultralisks engage in primal combat, consuming both units to produce one Tyrannozor.",
      type: "active",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires commander level 11.",
      cost: {
        minerals: 0,
        gas: 0
      },
      buildTime: 8
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
      cooldown: 10,
      energycost: 0,
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
        "/images/commanderdata/unitskills/fenix/buildinterceptor-framed.png"
      ],
      description: `Builds Interceptors that automatically attack the Carrier's target. Carriers may not attack without Interceptors.
Can attack ground and air units. 8 Interceptors max.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: 15,
      energycost: 0,
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
        "/images/commanderdata/unitskills/fenix/buildinterceptor-framed.png"
      ],
      description: `Builds Interceptors that automatically attack the Carrier's target. Carriers may not attack without Interceptors.
Can attack ground and air units. 8 Interceptors max.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: 15,
      energycost: 0,
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
        "/images/commanderdata/unitskills/fenix/buildinterdictor-framed.png"
      ],
      description: `Builds Interdictors that automatically bomb enemy ground units for {damage} damage.
Can attack ground units.`,
      type: "autocast",
      requiresupgrade: true,
      cooldown: 15,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        damage: 12
      }
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
      description: "Creates a shield that reduces all incoming attack damage to friendly units by 35%. Lasts {duration} seconds.",
      type: "active",
      requiresupgrade: false,
      cooldown: 20,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        duration: 15
      }
    },
    {
      commander: "Fenix",
      unit: "Disruptor",
      name: "Purification Nova",
      icons: [
        "/images/commanderdata/unitskills/fenix/purificationnova.png"
      ],
      description: `Shoots out a ball of energy that emits a powerful nova dealing 150 splash damage and an additional 50 shield damage to nearby ground units and structures.

{echo}`,
      type: "active",
      requiresupgrade: false,
      cooldown: 20,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        echo: ""
      }
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
      cooldown: 10,
      energycost: 50,
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
      cooldown: 0,
      energycost: 5,
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
      cooldown: 0,
      energycost: 100,
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
      cooldown: 10,
      energycost: 25,
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
      cooldown: 10,
      energycost: 50,
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
      cooldown: 5,
      energycost: 100,
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
      cooldown: 6,
      energycost: 50,
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
      cooldown: 10,
      energycost: 50,
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
      cooldown: 120,
      energycost: 0,
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
      cooldown: 60,
      energycost: 0,
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
      cooldown: 5,
      energycost: 0,
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
      cooldown: 10,
      energycost: 0,
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
      cooldown: 5,
      energycost: 0,
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
      cooldown: 60,
      energycost: 0,
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
      description: `An amplified Glaive that ricochets and hits up to {targets} enemy units for 25 (35 vs Light) damage each.

{debilitation}`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: 5,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        targets: 3,
        debilitation: ""
      }
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
      cooldown: 5,
      energycost: 0,
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
      unit: "Assault Galleon",
      name: "Install Drone Hangar",
      icons: [
        "/images/commanderdata/unitupgrades/horner/installdronehangar-framed.png"
      ],
      description: "Retrofits this Assault Galleon with a Drone Hangar that automatically builds and deploys up to 6 Assault Drones. Assault Drones can attack ground and air units. Installing the hangar also enables out-of-combat regeneration.",
      type: "active",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires commander level 3.",
      cost: {
        minerals: 150,
        gas: 200,
        supply: 3
      },
      buildTime: 60,
      hideWithUpgrade: "Install Drone Hangar"
    },
    {
      commander: "Horner",
      unit: "Assault Galleon",
      requiresupgrade: false,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      showWithUpgrade: "Install Drone Hangar",
      name: "Build Assault Drone",
      icons: [
        "/images/commanderdata/unitskills/horner/buildassaultdrone.png"
      ],
      description: "Automatically builds Assault Drones at no mineral, gas, or supply cost, up to a maximum of 6. The hangar starts with 6 drones when installed. Drones automatically attack ground and air targets.",
      type: "autocast",
      cooldown: 15
    },
    {
      commander: "Horner",
      unit: "Assault Galleon",
      requiresupgrade: false,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires commander level 11.",
      showWithUpgrade: "Install Drone Hangar",
      name: "Endurance Training",
      icons: [
        "/images/commanderdata/unitskills/horner/endurancetraining.png"
      ],
      description: "Regenerates {healing} life per second after taking no damage for {delay} seconds.",
      values: {
        healing: 3.75,
        delay: 10
      },
      type: "passive",
      cooldown: null
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
      cooldown: 60,
      energycost: 0,
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
      cooldown: 0,
      energycost: 0,
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
      unit: "Asteria Wraith",
      requiresupgrade: false,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires commander level 11.",
      name: "Endurance Training",
      icons: [
        "/images/commanderdata/unitskills/horner/endurancetraining.png"
      ],
      description: "Regenerates {healing} life per second after taking no damage for {delay} seconds.",
      values: {
        healing: 3.75,
        delay: 10
      },
      type: "passive",
      cooldown: null
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
      cooldown: 60,
      energycost: 0,
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
      cooldown: 20,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Horner",
      unit: "Deimos Viking",
      requiresupgrade: false,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires commander level 11.",
      name: "Endurance Training",
      icons: [
        "/images/commanderdata/unitskills/horner/endurancetraining.png"
      ],
      description: "Regenerates {healing} life per second after taking no damage for {delay} seconds.",
      values: {
        healing: 3.75,
        delay: 10
      },
      type: "passive",
      cooldown: null
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
      cooldown: 10,
      energycost: 0,
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
      description: `Explodes after a short delay, doing 10 area damage and knocking back nearby units.

{death}`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: 20,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        death: ""
      }
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
      cooldown: 60,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Horner",
      unit: "Sovereign Battlecruiser",
      requiresupgrade: false,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires commander level 11.",
      name: "Endurance Training",
      icons: [
        "/images/commanderdata/unitskills/horner/endurancetraining.png"
      ],
      description: "Regenerates {healing} life per second after taking no damage for {delay} seconds.",
      values: {
        healing: 3.75,
        delay: 10
      },
      type: "passive",
      cooldown: null
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
      cooldown: 60,
      energycost: 0,
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
      description: `All Melee and Ranged attacks against Analyzed units do 3 bonus damage. Effect lasts as long as the Raven remains locked onto the target.

Can maintain Target Lock on {targets} target(s) at once.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: 3,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        targets: 1
      }
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
      commander: "Horner",
      unit: "Theia Raven",
      requiresupgrade: false,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires commander level 11.",
      name: "Endurance Training",
      icons: [
        "/images/commanderdata/unitskills/horner/endurancetraining.png"
      ],
      description: "Regenerates {healing} life per second after taking no damage for {delay} seconds.",
      values: {
        healing: 3.75,
        delay: 10
      },
      type: "passive",
      cooldown: null
    },
    {
      commander: "Karax",
      unit: "Carrier",
      name: "Build Interceptor",
      icons: [
        "/images/commanderdata/unitskills/karax/buildinterceptor-framed.png"
      ],
      description: `Builds Interceptors that automatically attack the Carrier's target. Carriers may not attack without Interceptors.
Can attack ground and air units. 8 Interceptors max.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: 10,
      energycost: 0,
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
      cooldown: 0,
      energycost: 3,
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
      cooldown: 120,
      energycost: 50,
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
      cooldown: 60,
      energycost: 0,
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
      cooldown: 45,
      energycost: 0,
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
      cooldown: 30,
      energycost: 0,
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
      cooldown: 5,
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
      cooldown: 10,
      energycost: 0,
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
      cooldown: 120,
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
      cooldown: 30,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Kerrigan",
      unit: "Hydralisk",
      name: "Morph to Lurker",
      icons: [
        "/images/commanderdata/unitskills/morphs/btn-unit-zerg-lurker.png"
      ],
      description: "Transforms this Hydralisk into a Lurker.",
      type: "active",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Lurker Den.",
      cost: {
        minerals: 50,
        gas: 100,
        supply: 1
      },
      buildTime: 15
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
      cooldown: 0,
      energycost: 50,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      excludedPrestiges: [
        "Desolate Queen"
      ]
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
      cooldown: 0,
      energycost: 50,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      excludedPrestiges: [
        "Desolate Queen"
      ]
    },
    {
      commander: "Kerrigan",
      unit: "Kerrigan",
      name: "Assimilation Aura",
      icons: [
        "/images/commanderdata/hero/kerrigan/assimilationaura.png"
      ],
      description: "Causes all nearby enemies to drop {resources} when killed. Effect lasts for 15 seconds.",
      type: "active",
      requiresupgrade: false,
      cooldown: 120,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        resources: "resources"
      }
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
      cooldown: 180,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      initialCooldown: 600
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
      cooldown: 0,
      energycost: 50,
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
      cooldown: 0,
      energycost: 75,
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
        "/images/commanderdata/unitskills/kerrigan/spawncreeptumor-framed.png"
      ],
      description: `A burrowed creep generator. Creep feeds nearby Zerg structures. A Creep Tumor can spawn additional Creep Tumors.
Bonus: Zerg move faster on creep.`,
      type: "active",
      requiresupgrade: false,
      cooldown: 15,
      energycost: 25,
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
        "/images/commanderdata/unitskills/kerrigan/spawnlarva-framed.png"
      ],
      description: "Target Hatchery, Lair, or Hive spawns 4 Larvae in 40 seconds.",
      type: "active",
      requiresupgrade: false,
      cooldown: 25,
      energycost: 0,
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
      cooldown: 0,
      energycost: 50,
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
      cooldown: 10,
      energycost: 0,
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
      cooldown: 60,
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
      cooldown: 30,
      energycost: null,
      rankrequired: 3,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Mengsk",
      unit: "Dom. Assault Trooper",
      name: "Weapon Drop",
      icons: [
        "/images/commanderdata/unitskills/mengsk/assaultweapon.png"
      ],
      description: "Drops its equipped weapon on death, allowing another Dominion Trooper to pick it up.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      excludedPrestiges: [
        "Merchant of Death"
      ]
    },
    {
      commander: "Mengsk",
      unit: "Dom. Assault Trooper",
      name: "Weapon Self-Destruct",
      icons: [
        "/images/commanderdata/unitskills/mengsk/assaultweapon.png"
      ],
      description: "On death, the equipped weapon seeks a visible enemy within range 12 and explodes on contact, or after 2 seconds. Deals 150 damage (250 vs. Structures) within radius 1.5, and half damage from radius 1.5 to 2, to enemy ground and air units.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: "Merchant of Death",
      requirements: null
    },
    {
      commander: "Mengsk",
      unit: "Dom. Flame Trooper",
      name: "Weapon Drop",
      icons: [
        "/images/commanderdata/unitskills/mengsk/flameweapon.png"
      ],
      description: "Drops its equipped weapon on death, allowing another Dominion Trooper to pick it up.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      excludedPrestiges: [
        "Merchant of Death"
      ]
    },
    {
      commander: "Mengsk",
      unit: "Dom. Flame Trooper",
      name: "Weapon Self-Destruct",
      icons: [
        "/images/commanderdata/unitskills/mengsk/flameweapon.png"
      ],
      description: "On death, the equipped weapon seeks a visible enemy within range 12 and explodes on contact, or after 2 seconds. Deals 150 damage (250 vs. Structures) within radius 1.5, and half damage from radius 1.5 to 2, to enemy ground and air units.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: "Merchant of Death",
      requirements: null
    },
    {
      commander: "Mengsk",
      unit: "Dom. Rocket Trooper",
      name: "Weapon Drop",
      icons: [
        "/images/commanderdata/unitskills/mengsk/rocketweapon.png"
      ],
      description: "Drops its equipped weapon on death, allowing another Dominion Trooper to pick it up.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      excludedPrestiges: [
        "Merchant of Death"
      ]
    },
    {
      commander: "Mengsk",
      unit: "Dom. Rocket Trooper",
      name: "Weapon Self-Destruct",
      icons: [
        "/images/commanderdata/unitskills/mengsk/rocketweapon.png"
      ],
      description: "On death, the equipped weapon seeks a visible enemy within range 12 and explodes on contact, or after 2 seconds. Deals 150 damage (250 vs. Structures) within radius 1.5, and half damage from radius 1.5 to 2, to enemy ground and air units.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: "Merchant of Death",
      requirements: null
    },
    {
      commander: "Mengsk",
      unit: "Emperor's Shadow",
      name: "Pyrokinetic Immolation",
      icons: [
        "/images/commanderdata/unitskills/mengsk/pyrokineticimmolation.png"
      ],
      description: "Immolates a target Biological enemy for 20 seconds, dealing 20 damage per second to themselves and nearby Biological enemies. Can be set to Autocast. Requires 75 energy.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: 5,
      energycost: null,
      rankrequired: 0,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Mengsk",
      unit: "Emperor's Shadow",
      name: "EMP Blast",
      icons: [
        "/images/commanderdata/unitskills/mengsk/empblast.png"
      ],
      description: "Deals 100 damage to shields and depletes the energy of enemy units in the target area. Stuns Mechanical units for 1 second. Cloaked units are revealed for 10 seconds after being hit. Can be set to Autocast. Requires 75 energy.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: 8,
      energycost: null,
      rankrequired: 0,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Mengsk",
      unit: "Emperor's Shadow",
      name: "Labyrinth Cloak",
      icons: [
        "/images/commanderdata/unitskills/mengsk/labyrinthcloak.png"
      ],
      description: "Prevents the Emperor's Shadow from taking any damage for 10 seconds after being attacked. Cannot occur more than once every 30 seconds.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: 30,
      energycost: null,
      rankrequired: 1,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Mengsk",
      unit: "Emperor's Shadow",
      name: "Tactical Missile Strike",
      icons: [
        "/images/commanderdata/unitskills/mengsk/tacticalmissilestrike.png"
      ],
      description: `Calls down a Tactical Missile Strike at a target location. Tactical Missiles take 4 seconds to land, but they deal up to 150 (+100 vs. structures) damage to enemies in a small radius. (100% damage within 1.5 range of the hit, 50% from 1.5 to 2.0 range)
Cooldown is time to build one missile.

{channel}`,
      type: "active",
      requiresupgrade: false,
      cooldown: 90,
      energycost: null,
      rankrequired: 0,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        channel: ""
      }
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
Heals 9 life per 3 energy.

{targets}`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: 0,
      energycost: null,
      rankrequired: 0,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        targets: ""
      }
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
      cooldown: 15,
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
      cooldown: 120,
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
      cooldown: 60,
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
      cooldown: 15,
      energycost: 0,
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
      cooldown: 15,
      energycost: 0,
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
      cooldown: 30,
      energycost: 0,
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
      cooldown: 5,
      energycost: 0,
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
      cooldown: 30,
      energycost: 0,
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
Can target biological and mechanical units.

{refund}`,
      type: "active",
      requiresupgrade: false,
      cooldown: 0,
      energycost: 50,
      rankrequired: null,
      mode: "Stealth Mode",
      prestige: null,
      requirements: null,
      values: {
        refund: ""
      }
    },
    {
      commander: "Nova",
      unit: "Nova",
      name: "Sabotage Drone",
      icons: [
        "/images/commanderdata/hero/nova/sabotagedrone-framed.png"
      ],
      description: "Deploys an undetectable explosive drone that deals {damage} damage ({structureDamage} vs. Structures) to enemy ground units within radius {radius}, accounting for unit size.",
      type: "active",
      requiresupgrade: false,
      cooldown: 45,
      energycost: 100,
      rankrequired: null,
      mode: "Stealth Mode",
      prestige: null,
      requirements: null,
      values: {
        damage: 200,
        structureDamage: 400,
        radius: 4
      }
    },
    {
      commander: "Nova",
      unit: "Nova",
      name: "Tac Nuke Strike",
      icons: [
        "/images/commanderdata/hero/nova/tacnukestrike.png"
      ],
      description: "Calls down a Nuclear Strike at the target location, dealing {damage} damage to enemies within radius {radius} after {delay} seconds.",
      type: "active",
      requiresupgrade: false,
      cooldown: 420,
      energycost: 0,
      rankrequired: null,
      mode: "Stealth Mode",
      prestige: null,
      requirements: null,
      initialCooldown: 600,
      values: {
        damage: 600,
        radius: 8,
        delay: 5
      }
    },
    {
      commander: "Nova",
      unit: "Nova",
      name: "Penetrating Blast",
      icons: [
        "/images/commanderdata/hero/nova/penetratingblast.png"
      ],
      description: `Deals 50 (100 vs Light) damage to enemy ground units in a wide arc.
Does not damage friendly units.

Range: {range}.`,
      type: "active",
      requiresupgrade: false,
      cooldown: 0,
      energycost: 50,
      rankrequired: null,
      mode: "Assault Mode",
      prestige: null,
      requirements: null,
      excludedPrestiges: [
        "Infiltration Specialist"
      ],
      values: {
        range: 7
      }
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
      cooldown: 8,
      energycost: 0,
      rankrequired: null,
      mode: "Assault Mode",
      prestige: null,
      requirements: null,
      charges: 3,
      excludedPrestiges: [
        "Infiltration Specialist"
      ]
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
      cooldown: 420,
      energycost: 0,
      rankrequired: null,
      mode: "Assault Mode",
      prestige: null,
      requirements: null,
      excludedPrestiges: [
        "Infiltration Specialist"
      ],
      initialCooldown: 600
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
      unit: "Nova",
      name: "Permanently Cloaked",
      icons: [
        "/images/commanderdata/hero/nova/stancedanceswitch.png"
      ],
      description: "Nova is permanently cloaked in Stealth Mode. Detectors and revealing effects can expose her.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: "Stealth Mode",
      prestige: null,
      requirements: null,
      excludedPrestiges: [
        "Infiltration Specialist"
      ]
    },
    {
      commander: "Nova",
      unit: "Nova",
      name: "Super Cloak",
      icons: [
        "/images/commanderdata/hero/nova/stancedanceswitch.png"
      ],
      description: "Nova is cloaked and cannot be detected or targeted. Attacking or using Snipe disables Super Cloak for 4 seconds.",
      type: "passive",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: "Stealth Mode",
      prestige: "Infiltration Specialist",
      requirements: null
    },
    {
      commander: "Nova",
      unit: "Raven Type-II",
      name: "Build Railgun Turret",
      icons: [
        "/images/commanderdata/unitskills/nova/buildrailgunturret-framed.png"
      ],
      description: `Automated defensive turret. Damages all enemy ground units in a straight line. Lasts for 60 seconds.
Can attack ground units.`,
      type: "active",
      requiresupgrade: false,
      cooldown: 30,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Nova",
      unit: "Raven Type-II",
      name: "Deploy Bio-Mechanical Repair Drone",
      icons: [
        "/images/commanderdata/unitskills/nova/deploybiomechanicalrepairdrone-framed.png"
      ],
      description: `Heals nearby biological and mechanical units. Lasts for 30 seconds.

Restores {healing} life per second to each target.

{cloak}`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: 60,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        healing: 14,
        cloak: ""
      }
    },
    {
      commander: "Nova",
      unit: "Raven Type-II",
      name: "Predator Missile",
      icons: [
        "/images/commanderdata/unitskills/nova/predatormissile.png"
      ],
      description: "Deploys a missile that pursues target enemy unit, dealing 100 (+35 vs. shields) damage in a wide radius upon contact.",
      type: "active",
      requiresupgrade: false,
      cooldown: 45,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Nova",
      unit: "Raven Type-II",
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
Mechanical units are immune.

{shots}`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: 30,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        shots: ""
      }
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
      cooldown: 45,
      energycost: 0,
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
      cooldown: 0,
      energycost: 0,
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
      cooldown: 60,
      energycost: 0,
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
      cooldown: 60,
      energycost: 0,
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
      cooldown: 60,
      energycost: 0,
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
      cooldown: 60,
      energycost: 0,
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
      cooldown: 0,
      energycost: 0,
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
      cooldown: 15,
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
      cooldown: 15,
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
      cooldown: 5,
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
      cooldown: 0,
      energycost: 0,
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
      cooldown: 0,
      energycost: 0,
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
      description: `Heals a friendly {targets} target.
Heals {healing} life per 3 energy per second.

{protection}`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: 0,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        targets: "biological",
        healing: 9,
        protection: ""
      }
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
      cooldown: 60,
      energycost: 0,
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
      cooldown: 60,
      energycost: 0,
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
      description: `Spider Mines pursue enemy units that come in range, and detonate for heavy area damage. Buried Spider Mines can only be seen by enemy Detectors. (3 charges max).

{radius}`,
      type: "active",
      requiresupgrade: false,
      cooldown: 0,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      charges: 3,
      values: {
        radius: ""
      }
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
      cooldown: 6,
      energycost: 0,
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
      cooldown: 60,
      energycost: 0,
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
      cooldown: 30,
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
      cooldown: 45,
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
      cooldown: 180,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stetmann",
      unit: "Gary",
      name: "Super Gary Transformation Sequence",
      icons: [
        "/images/commanderdata/unitskills/morphs/btn-unit-stetmann-supergary.png"
      ],
      description: "Transforms this Gary into a Super Gary.",
      type: "active",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires commander level 5 and Mecha Hive.",
      cost: {
        minerals: 450,
        gas: 300
      },
      buildTime: 15,
      excludedPrestiges: [
        "Signal Savant"
      ]
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
      cooldown: 5,
      energycost: 1,
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
      cooldown: 3,
      energycost: 5,
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
      cooldown: 20,
      energycost: 50,
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
      cooldown: 0,
      energycost: 100,
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
      description: `Fires a barrage of missiles dealing 50 (+30 vs. light) damage to enemy air units in a target area.

Splash radius: {radius}.`,
      type: "active",
      requiresupgrade: false,
      cooldown: 10,
      energycost: 100,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        radius: 1.5
      }
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
      cooldown: 20,
      energycost: 75,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Stetmann",
      unit: "Mecha Corruptor",
      name: "Morph to Mecha Battlecarrier Lord",
      icons: [
        "/images/commanderdata/unitskills/morphs/btn-unit-zerg-broodlord-mecha.png"
      ],
      description: "Transforms this Mecha Corruptor into a Mecha Battlecarrier Lord.",
      type: "active",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Mecha Greater Spire.",
      cost: {
        minerals: 300,
        gas: 250,
        supply: 6
      },
      buildTime: 34
    },
    {
      commander: "Stetmann",
      unit: "Mecha Infestor",
      name: "Roaches Away!",
      icons: [
        "/images/commanderdata/unitskills/stetmann/roachesaway.png"
      ],
      description: `Spawn 2 Mecha Roaches. Spawned units last 45 seconds.

{ravager}`,
      type: "active",
      requiresupgrade: false,
      cooldown: 0,
      energycost: 250,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        ravager: ""
      }
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
      cooldown: 5,
      energycost: 75,
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
      description: `Infests target enemy structure, dealing 500 damage over 10 seconds and disabling it for the duration of the effect. If the structure is destroyed while under the effects of Deconstructive Roach-nites, it will spawn 2 Mecha Roaches.

{ravager}`,
      type: "active",
      requiresupgrade: false,
      cooldown: 0,
      energycost: 75,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        ravager: ""
      }
    },
    {
      commander: "Stetmann",
      unit: "Mecha Lurker",
      name: "Tunnel of TERROR Algorithm",
      icons: [
        "/images/commanderdata/unitskills/stetmann/tunnelofterroralgorithm.png"
      ],
      description: `Tunnels to a nearby target location, dealing 60 damage to enemies along the way.

Maximum travel distance: {range}.`,
      type: "active",
      requiresupgrade: false,
      cooldown: 8,
      energycost: 75,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        range: 9
      }
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
      cooldown: 0,
      energycost: 75,
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
      description: `Burrow and charge towards a unit. Upon unburrowing, all enemy units in the vicinity are knocked back and dealt 50 damage.

{stun}`,
      type: "active",
      requiresupgrade: false,
      cooldown: 5,
      energycost: 75,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        stun: ""
      }
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
      cooldown: 2,
      energycost: 5,
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
      cooldown: 30,
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
      cooldown: 45,
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
      cooldown: 180,
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
      cooldown: 120,
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
      cooldown: 10,
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
      cooldown: 0,
      energycost: 25,
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
      cooldown: 0,
      energycost: 100,
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
      cooldown: 0,
      energycost: 75,
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
      cooldown: 0,
      energycost: 0,
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
      cooldown: 0,
      energycost: 0,
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
      unit: "Infested Banshee",
      name: "Load",
      icons: [
        "/images/commanderdata/unitskills/stukov/load.png"
      ],
      description: "Loads up to 16 nearby Infested infantry. Their timed life is paused while loaded.",
      type: "active",
      requiresupgrade: false,
      cooldown: null,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: "Plague Warden",
      requirements: null
    },
    {
      commander: "Stukov",
      unit: "Infested Banshee",
      name: "Unload All",
      icons: [
        "/images/commanderdata/unitskills/stukov/unloadall.png"
      ],
      description: "Unloads all carried Infested infantry at the target location.",
      type: "active",
      requiresupgrade: false,
      cooldown: null,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: "Plague Warden",
      requirements: null
    },
    {
      commander: "Stukov",
      unit: "Infested Banshee",
      name: "Remote Deployment",
      icons: [
        "/images/commanderdata/unitupgrades/stukov/anaerobicenhancement.png"
      ],
      description: "Launches carried Infested infantry to a ground location within range 10. Each impact deals 20 damage to enemy ground units within radius 1.25.",
      type: "active",
      requiresupgrade: false,
      cooldown: null,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: "Plague Warden",
      requirements: null
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
      cooldown: 30,
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
      cooldown: 45,
      energycost: 0,
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
      cooldown: 60,
      energycost: 0,
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
      cooldown: 2.5,
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
      cooldown: 30,
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
      description: `Locks the Cyclone's weapons on the target unit, dealing {damage} damage over 20 seconds. Can move while firing. Cancels if target moves out of range.

Cast range: {range}.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: 6,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        damage: 500,
        range: 8
      }
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
      cooldown: 60,
      energycost: 0,
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
Heals 3 life per {energy} energy.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: 0,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        energy: 1
      }
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
      cooldown: 0,
      energycost: 25,
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
      cooldown: 20,
      energycost: 50,
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
      unit: "Science Vessel",
      name: "Tactical Jump",
      icons: [
        "/images/commanderdata/unitskills/swann/tacticaljump.png"
      ],
      description: "Warps to the target location without requiring vision. The Science Vessel is invulnerable while warping.",
      type: "active",
      requiresupgrade: false,
      cooldown: 30,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: "Payload Director",
      requirements: "Requires Science Vessel Energy Manipulation (Swann level 6)."
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
      cooldown: 60,
      energycost: 0,
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
Drains 0.9 energy per second.

{evasion}`,
      type: "active",
      requiresupgrade: false,
      cooldown: 0,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        evasion: ""
      }
    },
    {
      commander: "Tychus",
      unit: "Auto-Turret",
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
      description: `Marks a target unit, dealing {damage} damage after 5 seconds. Holds up to 3 charges.

{restraint}

{recharge}`,
      type: "active",
      requiresupgrade: false,
      cooldown: 30,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      charges: 3,
      values: {
        damage: 500,
        restraint: "",
        recharge: ""
      }
    },
    {
      commander: "Tychus",
      unit: 'James "Sirius" Sykes',
      name: "Deploy Warhound Turret",
      icons: [
        "/images/commanderdata/abilities/tychus/deploywarhoundturret-framed.png"
      ],
      description: `Deploy an automated defensive turret. Turrets gain the same gear bonuses as Sirius himself. Times out after 60 seconds. Holds up to 5 charges.
Can attack ground and air units.

{frame}

{missiles}

{fear}

{explosion}`,
      type: "active",
      requiresupgrade: false,
      cooldown: 15,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      charges: 5,
      values: {
        frame: "",
        missiles: "",
        fear: "",
        explosion: ""
      }
    },
    {
      commander: "Tychus",
      unit: 'Kev "Rattlesnake" West',
      name: "Deploy Revitalizer",
      icons: [
        "/images/commanderdata/abilities/tychus/deployrevitalizer.png"
      ],
      description: `Places a structure on the ground that heals all friendly units in an area around the structure for {healing}% of their life every second. 3 charges max.

{attackSpeed}`,
      type: "active",
      requiresupgrade: false,
      cooldown: 30,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      charges: 3,
      values: {
        healing: 2,
        attackSpeed: ""
      }
    },
    {
      commander: "Tychus",
      unit: 'Kev "Rattlesnake" West',
      name: "Secret Stash Stimpack",
      icons: [
        "/images/commanderdata/unitupgrades/tychus/secretstashstimpack.png"
      ],
      description: "Heals Rattlesnake for 2 life per second and increases his attack and movement speed by 50% for 15 seconds.",
      type: "autocast",
      requiresupgrade: true,
      cooldown: 15,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Tychus",
      unit: "Lt. Layna Nikara",
      name: "Reinvigorating Burst",
      icons: [
        "/images/commanderdata/abilities/tychus/reinvigoratingburst.png"
      ],
      description: "Instantly heals friendly units in an area around Lt. Nikara for {instantHealing} life and grants them 25% increased attack and ability damage. Regenerates an additional {healing} life per second over 10 seconds.",
      type: "active",
      requiresupgrade: false,
      cooldown: 30,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        instantHealing: 200,
        healing: 10
      }
    },
    {
      commander: "Tychus",
      unit: "Lt. Layna Nikara",
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
      unit: "Lt. Layna Nikara",
      name: "Super Heal",
      icons: [
        "/images/commanderdata/unitskills/tychus/superheal.png"
      ],
      description: "Restores {healing} life per second to a friendly biological or mechanical unit. Can heal {targets} at a time{gearNote}.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: null,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        healing: 30,
        targets: "one target",
        gearNote: " before gear upgrades"
      }
    },
    {
      commander: "Tychus",
      unit: "Lt. Layna Nikara",
      name: "XM-77 Matrix Generator",
      icons: [
        "/images/commanderdata/unitupgrades/tychus/xm77matrixgenerator.png"
      ],
      description: "Grants a friendly unit a barrier that absorbs up to 400 damage for 20 seconds.",
      type: "autocast",
      requiresupgrade: true,
      cooldown: 15,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires purchase of XM-77 Matrix Generator gear.",
      excludedPrestiges: [
        "Lone Wolf"
      ]
    },
    {
      commander: "Tychus",
      unit: 'Miles "Blaze" Lewis',
      name: "Oil Spill",
      icons: [
        "/images/commanderdata/abilities/tychus/oilspill.png"
      ],
      description: `Douses enemy ground units in oil, reducing attack and movement speed by 75% and preventing them from cloaking. When a unit under the effect of Oil Spill is hit by a fire attack, it takes 5 ({lightDamage} vs Light) damage per second over 10 seconds.

Radius: {radius}.

{spread}`,
      type: "active",
      requiresupgrade: false,
      cooldown: 15,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        lightDamage: 5,
        radius: 2.5,
        spread: ""
      }
    },
    {
      commander: "Tychus",
      unit: "Nux",
      name: "Ultrasonic Pulse",
      icons: [
        "/images/commanderdata/abilities/tychus/ultrasonicpulse.png"
      ],
      description: `Fires pulses of ultrasonic energy that lasts {duration} seconds, causing {damage} damage per second to enemy units in the target area. Does not damage friendly units. Holds up to 3 charges.

Radius: {radius}.

{network}`,
      type: "active",
      requiresupgrade: false,
      cooldown: 30,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      charges: 3,
      values: {
        duration: 6,
        damage: 20,
        radius: 2,
        network: ""
      }
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
      requirements: null,
      excludedPrestiges: [
        "Dutiful Dogwalker"
      ]
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
      requirements: null,
      excludedPrestiges: [
        "Dutiful Dogwalker"
      ]
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
      unit: 'Rob "Cannonball" Boswell',
      name: "Heavy Impact",
      icons: [
        "/images/commanderdata/abilities/tychus/heavyimpact.png"
      ],
      description: `Cannonball pulls himself to the target location, dealing 20 damage and stunning enemy units on impact.

Impact radius: {radius}.

Stun duration: {stun} seconds.`,
      type: "active",
      requiresupgrade: false,
      cooldown: 15,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        radius: 1.5,
        stun: 1.5
      }
    },
    {
      commander: "Tychus",
      unit: 'Rob "Cannonball" Boswell',
      name: "Critical Response System",
      icons: [
        "/images/commanderdata/unitupgrades/tychus/criticalresponsesystem.png"
      ],
      description: "When taking fatal damage, restores all life and becomes immune to damage for 5 seconds.",
      type: "passive",
      requiresupgrade: true,
      cooldown: 60,
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
      description: `Deals {damage} damage to enemy units in the target area.

{implosion}`,
      type: "active",
      requiresupgrade: false,
      cooldown: 20,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        damage: 75,
        implosion: ""
      }
    },
    {
      commander: "Tychus",
      unit: "Vega",
      name: "Dominate",
      icons: [
        "/images/commanderdata/abilities/tychus/dominate.png"
      ],
      description: `Temporarily take control of target enemy unit and increases its damage by 50%. Dominated units self-destruct after {duration} seconds. Holds up to 3 charges.

{restoration}

{confusion}`,
      type: "active",
      requiresupgrade: false,
      cooldown: 30,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      charges: 3,
      values: {
        duration: 240,
        restoration: "",
        confusion: ""
      }
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
      cooldown: 10,
      energycost: 0,
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
      cooldown: 10,
      energycost: 0,
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
      cooldown: 30,
      energycost: 0,
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
      cooldown: 8,
      energycost: 50,
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
      cooldown: 30,
      energycost: 150,
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
      cooldown: 60,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      excludedPrestiges: [
        "Spirit of Respite"
      ]
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
      cooldown: 15,
      energycost: 0,
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
      cooldown: 10,
      energycost: 0,
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
      cooldown: 15,
      energycost: 0,
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
      cooldown: 4,
      energycost: 0,
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
      description: "Places a cloaked Stasis Ward at the target location. Once activated by an enemy ground unit, the ward traps nearby enemies in stasis for 15 seconds. Trapped units {vulnerability}.",
      type: "active",
      requiresupgrade: false,
      cooldown: 0,
      energycost: 50,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        vulnerability: "cannot be attacked or affected by abilities"
      }
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
      cooldown: 15,
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
      cooldown: 10,
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
      cooldown: 15,
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
      description: `Teleports the Stalker to a nearby target location. Ability can only be used once every 8 seconds.

{shield}`,
      type: "active",
      requiresupgrade: true,
      cooldown: 8,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        shield: ""
      }
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
        "/images/commanderdata/unitskills/zagara/incubatebanelings.png"
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
      description: `Constantly blasts a target area, repeatedly dealing 75 damage to enemy ground and air units.

Range: {range}.

Fires every {interval} seconds.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: 0,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        range: 15,
        interval: 7
      }
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
      cooldown: 15,
      energycost: 0,
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
        "/images/commanderdata/unitskills/zagara/incubatescourge.png"
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
        "/images/commanderdata/unitskills/zagara/spawncreeptumor-framed.png"
      ],
      description: `A burrowed creep generator. Creep feeds nearby Zerg structures. A Creep Tumor can spawn additional Creep Tumors.
Bonus: Zerg move faster on creep.`,
      type: "active",
      requiresupgrade: false,
      cooldown: 15,
      energycost: 25,
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
        "/images/commanderdata/unitskills/zagara/spawnlarva-framed.png"
      ],
      description: "Target Hatchery, Lair, or Hive spawns 8 Larvae in 40 seconds.",
      type: "active",
      requiresupgrade: false,
      cooldown: 25,
      energycost: 0,
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
      cooldown: 0,
      energycost: 50,
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
        "/images/commanderdata/hero/zagara/banelingbarrage-framed.png"
      ],
      description: "Launches 6 Banelings towards the target point. Each Baneling explodes for 40 damage (80 vs structures).",
      type: "active",
      requiresupgrade: false,
      cooldown: 10,
      energycost: 25,
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
        "/images/commanderdata/hero/zagara/spawnhunterkillers-framed.png"
      ],
      description: "Spawns 6 Hunter Killers at the target point that last 20 seconds.",
      type: "active",
      requiresupgrade: false,
      cooldown: 30,
      energycost: 30,
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
      description: "Grants {targets} 25% attack speed and 25% movement speed for 15 seconds.",
      type: "active",
      requiresupgrade: false,
      cooldown: 90,
      energycost: 25,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        targets: "all friendly units on the map"
      }
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
      cooldown: 180,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      initialCooldown: 600
    },
    {
      commander: "Zagara",
      unit: "Zagara",
      name: "Deep Tunnel",
      icons: [
        "/images/commanderdata/unitskills/abathur/deeptunnel.png"
      ],
      description: "Quickly burrow to the target location. Does not require vision or explored terrain.",
      type: "active",
      requiresupgrade: false,
      cooldown: 20,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: "Apex Predator",
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
      cooldown: 20,
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
      cooldown: 25,
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
      cooldown: 10,
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
      cooldown: 10,
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
      cooldown: 15,
      energycost: 150,
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
      cooldown: 15,
      energycost: 50,
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
      cooldown: 15,
      energycost: 150,
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
      cooldown: 15,
      energycost: 50,
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
      cooldown: 2.5,
      energycost: 75,
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
      cooldown: 10,
      energycost: 50,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "3rd Xel'Naga Artifact."
    },
    {
      commander: "Zeratul",
      unit: "Tesseract Cannon",
      name: "Shade Projection",
      icons: [
        "/images/commanderdata/abilities/zeratul/shadeprojection.png"
      ],
      description: `Requirements: Core Forge and 2nd Xel'Naga Artifact Fragment
Projects the Tesseract Cannon to a target location for 60 seconds, transferring all of its shields and its weapon. The Tesseract Cannon is deactivated while this ability is active.`,
      type: "active",
      requiresupgrade: false,
      cooldown: 120,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Core Forge and 2nd Xel'Naga Artifact Fragment"
    },
    {
      commander: "Zeratul",
      unit: "Tesseract Cannon",
      name: "Shade Barrier",
      icons: [
        "/images/commanderdata/abilities/zeratul/shadebarrier.png"
      ],
      description: `Requirements: Core Forge and 3rd Xel'Naga Artifact Fragment
Allows the Tesseract Cannon to absorb up to {absorption} damage. Lasts for 10 seconds.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: 60,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Core Forge and 3rd Xel'Naga Artifact Fragment",
      values: {
        absorption: 100
      }
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
      cooldown: 120,
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
Absorbs up to {absorption} damage. Lasts for 10 seconds.`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: 60,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Core Forge and 3rd Xel'Naga Artifact Fragment",
      values: {
        absorption: 100
      }
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
      description: `Allows the Void Templar to teleport to a nearby target location.

{damage}`,
      type: "active",
      requiresupgrade: true,
      cooldown: 8,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        damage: ""
      }
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
      cooldown: 180,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Zeratul level 11, a Void Shrine, and three Artifact Fragments. Unavailable with Herald of the Void."
    },
    {
      commander: "Zeratul",
      unit: "Xel'Naga Abrogator",
      name: "Purification Nova",
      icons: [
        "/images/commanderdata/unitskills/zeratul/purificationnova.png"
      ],
      description: `Shoots out a ball of energy that detonates 3 seconds or on contact with an enemy unit, dealing 100 splash damage to nearby ground units and structures. The Xel'Naga Abrogator is immobile while this is active.

{cluster}`,
      type: "autocast",
      requiresupgrade: false,
      cooldown: 12,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        cluster: ""
      }
    },
    {
      commander: "Zeratul",
      unit: "Xel'Naga Ambusher",
      name: "Predictive Blink",
      icons: [
        "/images/commanderdata/unitskills/zeratul/predictiveblink.png"
      ],
      description: `Teleports this unit to a nearby target location.

{apparition}`,
      type: "autocast",
      requiresupgrade: true,
      cooldown: 8,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        apparition: ""
      }
    },
    {
      commander: "Zeratul",
      unit: "Xel'Naga Enforcer",
      name: "Barrier",
      icons: [
        "/images/commanderdata/unitskills/zeratul/barrier.png"
      ],
      description: `Absorbs up to {absorption} damage. Lasts for 10 seconds.

{repair}`,
      type: "autocast",
      requiresupgrade: true,
      cooldown: 60,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        absorption: 100,
        repair: ""
      }
    },
    {
      commander: "Zeratul",
      unit: "Xel'Naga Shieldguard",
      name: "Shield Recharge",
      icons: [
        "/images/commanderdata/unitskills/zeratul/shieldrecharge.png"
      ],
      description: `Recharges the shields of a friendly Protoss unit.
Restores 4 shields per 1 energy.`,
      type: "autocast",
      requiresupgrade: true,
      cooldown: 0,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zeratul",
      unit: "Xel'Naga Shieldguard",
      name: "Reflection Shield",
      icons: [
        "/images/commanderdata/unitskills/zeratul/reflectionshield.png"
      ],
      description: "Creates an aura that reflects 50% of all projectiles back to enemy attackers. Lasts 15 seconds. Can be set to Autocast.",
      type: "autocast",
      requiresupgrade: true,
      cooldown: 180,
      energycost: 0,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null
    },
    {
      commander: "Zeratul",
      unit: "Xel'Naga Watcher",
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
      unit: "Xel'Naga Watcher",
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
      cooldown: 10,
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
      cooldown: 10,
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
      cooldown: 8,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      charges: 1
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
      cooldown: 120,
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
      description: "Deals {damage} damage to nearby enemies.{tornado}",
      type: "active",
      requiresupgrade: false,
      cooldown: 12,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: null,
      values: {
        damage: 100,
        tornado: ""
      }
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
    },
    {
      commander: "Abathur",
      unit: "Mutalisk",
      name: "Morph to Guardian",
      icons: [
        "/images/commanderdata/unitskills/morphs/btn-unit-zerg-primalguardian.png"
      ],
      description: "Transforms this Mutalisk into a Guardian.",
      type: "active",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Greater Spire.",
      cost: {
        minerals: 25,
        gas: 50
      },
      buildTime: 8
    },
    {
      commander: "Abathur",
      unit: "Mutalisk",
      name: "Morph to Devourer",
      icons: [
        "/images/commanderdata/unitskills/morphs/btn-unit-zerg-devourerex3.png"
      ],
      description: "Transforms this Mutalisk into a Devourer.",
      type: "active",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Greater Spire.",
      cost: {
        minerals: 75,
        gas: 25
      },
      buildTime: 8
    },
    {
      commander: "Abathur",
      unit: "Mutalisk",
      name: "Evolve to Leviathan",
      icons: [
        "/images/commanderdata/unitskills/morphs/btn-unit-zerg-leviathan.png"
      ],
      description: "Evolves this unit into a Leviathan at 100 biomass. Limited to 3 Leviathans at a time. The Limitless increases the requirement to 200 biomass and removes the limit.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires commander level 2.",
      cost: {
        minerals: 0,
        gas: 0
      },
      buildTime: 5,
      excludedPrestiges: [
        "Essence Hoarder"
      ]
    },
    {
      commander: "Abathur",
      unit: "Guardian",
      name: "Evolve to Leviathan",
      icons: [
        "/images/commanderdata/unitskills/morphs/btn-unit-zerg-leviathan.png"
      ],
      description: "Evolves this unit into a Leviathan at 100 biomass. Limited to 3 Leviathans at a time. The Limitless increases the requirement to 200 biomass and removes the limit.",
      type: "autocast",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires commander level 2.",
      cost: {
        minerals: 0,
        gas: 0
      },
      buildTime: 5,
      excludedPrestiges: [
        "Essence Hoarder"
      ]
    },
    {
      commander: "Dehaka",
      unit: "Primal Zergling",
      name: "Primal Combat: Ravasaur",
      icons: [
        "/images/commanderdata/unitskills/morphs/btn-unit-collection-primal-ravasaur.png"
      ],
      description: "Two Primal Zerglings engage in primal combat, consuming both units to produce one Ravasaur.",
      type: "active",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires commander level 2.",
      cost: {
        minerals: 0,
        gas: 0
      },
      buildTime: 8
    },
    {
      commander: "Dehaka",
      unit: "Primal Roach",
      name: "Primal Combat: Primal Igniter",
      icons: [
        "/images/commanderdata/unitskills/morphs/btn-unit-zerg-primalroach.png"
      ],
      description: "Two Primal Roachs engage in primal combat, consuming both units to produce one Primal Igniter.",
      type: "active",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires commander level 2.",
      cost: {
        minerals: 0,
        gas: 0
      },
      buildTime: 8
    },
    {
      commander: "Dehaka",
      unit: "Primal Roach",
      name: "Primal Combat: Primal Guardian",
      icons: [
        "/images/commanderdata/unitskills/morphs/btn-unit-collection-primal-guardian.png"
      ],
      description: "Two Primal Roachs engage in primal combat, consuming both units to produce one Primal Guardian.",
      type: "active",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires commander level 6. Requires Murvar's Den.",
      cost: {
        minerals: 0,
        gas: 100
      },
      buildTime: 8
    },
    {
      commander: "Dehaka",
      unit: "Primal Hydralisk",
      name: "Primal Combat: Primal Mutalisk",
      icons: [
        "/images/commanderdata/unitskills/morphs/btn-unit-zerg-primalmutalisk.png"
      ],
      description: "Two Primal Hydralisks engage in primal combat, consuming both units to produce one Primal Mutalisk.",
      type: "active",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires commander level 6. Requires Murvar's Den.",
      cost: {
        minerals: 0,
        gas: 25
      },
      buildTime: 8
    },
    {
      commander: "Dehaka",
      unit: "Primal Hydralisk",
      name: "Primal Combat: Impaler",
      icons: [
        "/images/commanderdata/unitskills/morphs/btn-unit-collection-primal-lurker.png"
      ],
      description: "Two Primal Hydralisks engage in primal combat, consuming both units to produce one Impaler.",
      type: "active",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires commander level 8.",
      cost: {
        minerals: 0,
        gas: 0
      },
      buildTime: 8
    },
    {
      commander: "Kerrigan",
      unit: "Mutalisk",
      name: "Morph to Brood Lord",
      icons: [
        "/images/commanderdata/unitskills/morphs/btn-unit-zerg-broodlord.png"
      ],
      description: "Transforms this Mutalisk into a Brood Lord.",
      type: "active",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Greater Spire.",
      cost: {
        minerals: 150,
        gas: 150,
        supply: 2
      },
      buildTime: 15
    },
    {
      commander: "Zagara",
      unit: "Zergling",
      name: "Morph to Baneling",
      icons: [
        "/images/commanderdata/unitskills/morphs/btn-unit-zerg-baneling.png"
      ],
      description: "Transforms this Zergling into a Baneling.",
      type: "active",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Baneling Nest.",
      cost: {
        minerals: 22,
        gas: 14
      },
      buildTime: 10
    },
    {
      commander: "Abathur",
      unit: "Overlord",
      name: "Morph to Overseer",
      icons: [
        "/images/commanderdata/unitskills/morphs/btn-unit-zerg-overseer.png"
      ],
      description: "Transforms this Overlord into an Overseer.",
      type: "active",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Lair.",
      cost: {
        minerals: 50,
        gas: 50
      },
      buildTime: 17
    },
    {
      commander: "Kerrigan",
      unit: "Overlord",
      name: "Morph to Overseer",
      icons: [
        "/images/commanderdata/unitskills/morphs/btn-unit-zerg-overseer.png"
      ],
      description: "Transforms this Overlord into an Overseer.",
      type: "active",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Lair.",
      cost: {
        minerals: 50,
        gas: 50
      },
      buildTime: 17
    },
    {
      commander: "Stukov",
      unit: "Overlord",
      name: "Morph to Overseer",
      icons: [
        "/images/commanderdata/unitskills/morphs/btn-unit-zerg-overseer.png"
      ],
      description: "Transforms this Overlord into an Overseer.",
      type: "active",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Infested Factory.",
      cost: {
        minerals: 50,
        gas: 50
      },
      buildTime: 17
    },
    {
      commander: "Zagara",
      unit: "Overlord",
      name: "Morph to Overseer",
      icons: [
        "/images/commanderdata/unitskills/morphs/btn-unit-zerg-overseer.png"
      ],
      description: "Transforms this Overlord into an Overseer.",
      type: "active",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Lair.",
      cost: {
        minerals: 45,
        gas: 44
      },
      buildTime: 17
    },
    {
      commander: "Stetmann",
      unit: "Mecha Zergling",
      name: "Morph to Mecha Baneling",
      icons: [
        "/images/commanderdata/unitskills/morphs/btn-unit-collection-baneling-mecha.png"
      ],
      description: "Transforms this Mecha Zergling into a Mecha Baneling.",
      type: "active",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Mecha Baneling Nest.",
      cost: {
        minerals: 25,
        gas: 15
      },
      buildTime: 12
    },
    {
      commander: "Stetmann",
      unit: "Mecha Hydralisk",
      name: "Morph to Mecha Lurker",
      icons: [
        "/images/commanderdata/unitskills/morphs/btn-unit-collection-lurker-mecha.png"
      ],
      description: "Transforms this Mecha Hydralisk into a Mecha Lurker.",
      type: "active",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Mecha Lurker Den.",
      cost: {
        minerals: 50,
        gas: 100,
        supply: 1
      },
      buildTime: 25
    },
    {
      commander: "Stetmann",
      unit: "Mecha Overlord",
      name: "Morph to Mecha Overseer",
      icons: [
        "/images/commanderdata/unitskills/morphs/btn-unit-zerg-overseer-mecha.png"
      ],
      description: "Transforms this Mecha Overlord into a Mecha Overseer.",
      type: "active",
      requiresupgrade: false,
      cooldown: null,
      energycost: null,
      rankrequired: null,
      mode: null,
      prestige: null,
      requirements: "Requires Mecha Lair.",
      cost: {
        minerals: 50,
        gas: 50
      },
      buildTime: 17
    }
  ];

  // html/scripts/skill-values.ts
  function customSkillValue(skill, name) {
    if (!skill.values || !Object.hasOwn(skill.values, name)) {
      throw new Error(`Unknown skill value ${skill.commander}/${skill.unit}/${skill.name}.values.${name}.`);
    }
    return skill.values[name];
  }
  function skillDescription(skill) {
    return skillDescriptionParts(skill, skill).map((part) => part.text).join("");
  }
  function skillDescriptionParts(skill, base) {
    const parts = [];
    let offset = 0;
    let changedStart = 0;
    while (changedStart < skill.description.length && skill.description[changedStart] === base.description[changedStart])
      changedStart++;
    let changedEnd = skill.description.length;
    let baseEnd = base.description.length;
    while (changedEnd > changedStart && baseEnd > changedStart && skill.description[changedEnd - 1] === base.description[baseEnd - 1]) {
      changedEnd--;
      baseEnd--;
    }
    const literal = (start, end) => {
      for (const [from, to, modified] of [
        [start, Math.min(end, changedStart), false],
        [Math.max(start, changedStart), Math.min(end, changedEnd), true],
        [Math.max(start, changedEnd), end, false]
      ]) {
        if (to > from)
          parts.push({ text: skill.description.slice(from, to), modified });
      }
    };
    for (const match of skill.description.matchAll(/\{([^{}]+)\}/g)) {
      literal(offset, match.index);
      const name = match[1];
      const value = customSkillValue(skill, name);
      parts.push({
        text: typeof value === "number" ? String(Number(value.toFixed(2))) : value,
        modified: match.index < changedEnd && match.index + match[0].length > changedStart || value !== base.values?.[name]
      });
      offset = match.index + match[0].length;
    }
    literal(offset, skill.description.length);
    const nonempty = [];
    for (const part of parts) {
      if (!part.text)
        continue;
      const previous = nonempty[nonempty.length - 1];
      if (previous && previous.modified === part.modified)
        previous.text += part.text;
      else
        nonempty.push(part);
    }
    for (const part of nonempty)
      part.text = part.text.replace(/\n{3,}/g, `

`);
    while (nonempty.length && !nonempty[nonempty.length - 1].text.trim())
      nonempty.pop();
    if (nonempty.length)
      nonempty[nonempty.length - 1].text = nonempty[nonempty.length - 1].text.trimEnd();
    return nonempty;
  }

  // html/scripts/unit-skills.ts
  function skillKey(skill) {
    return "skills/" + [skill.commander, skill.unit, skill.name, skill.mode ?? "", skill.prestige ?? ""].map((part) => encodeURIComponent(part)).join("/");
  }
  var unitSkills = new Map(unitskills_default.map((skill) => [skillKey(skill), skill]));
  var skillValueFields = ["cooldown", "initialCooldown", "energycost", "cost", "buildTime", "charges", "description", "requirements", "values", "descriptionParts", "modifiedFields"];
  function skillFromTooltip(key, values) {
    const base = unitSkills.get(key);
    if (!base)
      return;
    const ordinary = { ...base, description: skillDescription(base), descriptionParts: skillDescriptionParts(base, base), modifiedFields: [] };
    if (!values)
      return ordinary;
    const patch = JSON.parse(values);
    return { ...ordinary, ...Object.fromEntries(skillValueFields.filter((field) => (field in patch)).map((field) => [field, patch[field]])) };
  }
  function skillCooldown(skill) {
    if (!skill.cooldown)
      return null;
    if (typeof skill.cooldown === "number")
      return formatSkillNumber(skill.cooldown);
    const cooldown = skill.cooldown.match(/Cooldown:\s*([^\n]+)/i)?.[1] ?? skill.cooldown;
    const seconds = cooldown.match(/^(\d+(?:\.\d+)?)\s*(?:seconds?|s)(.*)$/s);
    if (!seconds)
      return "?";
    if (Number(seconds[1]) === 0)
      return null;
    return seconds[1] + (seconds[2]?.trim() ? "*" : "");
  }
  function formatSkillNumber(value) {
    return String(Number(value.toFixed(2)));
  }
  function skillCosts(skill, race) {
    const costs = [];
    for (const [resource, label, icon] of [
      ["minerals", "Minerals:", "iconmineral"],
      ["gas", "Gas:", `icongas_${race}`],
      ["supply", "Supply:", `iconsupply_${race}`]
    ]) {
      if (skill.cost?.[resource])
        costs.push({ field: "cost", icon: `/images/commanderdata/unitupgrades/${icon}.png`, label, value: formatSkillNumber(skill.cost[resource]) });
    }
    if (skill.buildTime)
      costs.push({ field: "buildTime", icon: `/images/commanderdata/unitupgrades/icontime_${race}.png`, label: "Build time:", value: formatSkillNumber(skill.buildTime) });
    if (skill.energycost !== null && skill.energycost !== 0 && skill.energycost !== "") {
      costs.push({
        field: "energycost",
        icon: "/images/commanderdata/unitupgrades/iconenergy.png",
        label: "Energy:",
        value: typeof skill.energycost === "number" ? formatSkillNumber(skill.energycost) : skill.energycost
      });
    }
    const cooldown = skillCooldown(skill);
    if (cooldown !== null) {
      costs.push({ field: "cooldown", icon: `/images/commanderdata/unitupgrades/icontime_${race}.png`, label: "Cooldown (seconds):", value: cooldown });
    }
    return costs;
  }
  function skillDetails(skill) {
    const details = [skill.description];
    if (skill.initialCooldown !== undefined) {
      const initial = typeof skill.initialCooldown === "number" ? `${formatSkillNumber(skill.initialCooldown)} seconds` : skill.initialCooldown;
      const repeat = typeof skill.cooldown === "number" ? `${formatSkillNumber(skill.cooldown)} seconds` : skill.cooldown;
      details.push(`Coolup: ${initial}${repeat !== null ? `
Cooldown: ${repeat}` : ""}`);
    } else if (typeof skill.cooldown === "string" && skill.cooldown && !/^\d+(?:\.\d+)?\s*(?:seconds?|s)$/.test(skill.cooldown)) {
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
    if (skill.excludedPrestiges?.length)
      details.push(`Unavailable with ${skill.excludedPrestiges.join(", ")}.`);
    if (skill.requirements)
      details.push(skill.requirements);
    return details;
  }

  // html/scripts/upgrade-costs.ts
  function upgradeCosts(upgrade, race) {
    const costs = [];
    if (upgrade.cost?.minerals)
      costs.push({ icon: "/images/commanderdata/unitupgrades/iconmineral.png", label: "Minerals:", value: upgrade.cost.minerals });
    if (upgrade.cost?.gas)
      costs.push({ icon: `/images/commanderdata/unitupgrades/icongas_${race}.png`, label: "Gas:", value: upgrade.cost.gas });
    if (upgrade.cost?.supply)
      costs.push({ icon: `/images/commanderdata/unitupgrades/iconsupply_${race}.png`, label: "Supply:", value: upgrade.cost.supply });
    if (upgrade.researchTime)
      costs.push({ icon: `/images/commanderdata/unitupgrades/icontime_${race}.png`, label: "Research time:", value: upgrade.researchTime });
    return costs;
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
    if (name === 'James "Sirius" Sykes' || name === "James Sirius Sykes")
      return "sirius";
    if (name === 'Miles "Blaze" Lewis' || name === "Miles Blaze Lewis")
      return "blaze";
    if (name === 'Rob "Cannonball" Boswell' || name === "Rob Cannonball Boswell")
      return "cannonball";
    if (name === "Lt. Layna Nikara" || name === "Lt Layna Nikara")
      return "nikara";
    if (name === 'Kev "Rattlesnake" West' || name === "Kev Rattlesnake West")
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
    text.append(name);
    for (const cost of upgradeCosts(upgrade, target.dataset.race ?? "terran")) {
      const value = document.createElement("span");
      value.style.whiteSpace = "nowrap";
      const icon = document.createElement("img");
      icon.src = cost.icon;
      icon.alt = cost.label;
      icon.width = 16;
      icon.height = 16;
      value.append(icon, " ", String(cost.value));
      text.append(" ", value);
    }
    text.append(document.createElement("br"), upgrade.effect);
    tooltip.replaceChildren(icon, text);
    activeTooltipTarget = target;
    setTooltipPosition(target);
  }
  function showSkillTooltip(target) {
    const skill = skillFromTooltip(target.dataset.tooltip ?? "", target.dataset.skillValues);
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
    const markedText = (text, modified) => {
      const span = document.createElement("span");
      span.textContent = text;
      if (modified)
        span.className = "units-modified";
      return span;
    };
    if (skill.charges)
      heading.append(" (", markedText(String(skill.charges), !!skill.modifiedFields?.includes("charges")), skill.charges === 1 ? " charge)" : " charges)");
    for (const cost of skillCosts(skill, target.dataset.race ?? "terran")) {
      const value = document.createElement("span");
      value.style.whiteSpace = "nowrap";
      const icon = document.createElement("img");
      icon.src = cost.icon;
      icon.alt = cost.label;
      icon.width = 16;
      icon.height = 16;
      value.append(icon, " ", markedText(cost.value, !!skill.modifiedFields?.includes(cost.field)));
      heading.append(" ", value);
    }
    if (skill.type !== "active")
      heading.append(` (${skill.type})`);
    text.append(heading);
    for (const [index, detail] of skillDetails(skill).entries()) {
      text.append(document.createElement("br"));
      if (index === 0 && skill.descriptionParts) {
        for (const part of skill.descriptionParts)
          text.append(markedText(part.text, part.modified));
      } else if (index === 1 && skill.initialCooldown !== undefined) {
        for (const [lineIndex, line] of detail.split(`
`).entries()) {
          if (lineIndex)
            text.append(`
`);
          const colon = line.indexOf(":") + 1;
          text.append(line.slice(0, colon), markedText(line.slice(colon), !!skill.modifiedFields?.includes(lineIndex ? "cooldown" : "initialCooldown")));
        }
      } else {
        text.append(markedText(detail, detail === skill.requirements && !!skill.modifiedFields?.includes("requirements")));
      }
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

//# debugId=15BC41989537CF6B64756E2164756E21
//# sourceMappingURL=tooltips.js.map

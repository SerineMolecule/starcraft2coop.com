// source-data/mutators.json
var mutators_default = [
  {
    mutatorid: 1,
    mutatorname: "Afraid of the Dark",
    abomination: 0,
    mutatordescription: "Vision provided by all sources is extremely limited except when in view of your camera.",
    customusable: false,
    chaosrollable: false,
    hassafezone: false
  },
  {
    mutatorid: 2,
    mutatorname: "Aggressive Deployment",
    abomination: 3,
    mutatordescription: "Additional enemy units are periodically deployed onto the battlefield.",
    customusable: true,
    chaosrollable: true,
    hassafezone: false
  },
  {
    mutatorid: 3,
    mutatorname: "Alien Incubation",
    abomination: 2,
    mutatordescription: "All enemy units spawn Broodlings upon death.",
    customusable: true,
    chaosrollable: true,
    hassafezone: false
  },
  {
    mutatorid: 4,
    mutatorname: "Avenger",
    abomination: 5,
    mutatordescription: "Enemy units gain increased attack speed, movement speed, armor, life, and life-regeneration when nearby enemy units die.",
    customusable: true,
    chaosrollable: true,
    hassafezone: false
  },
  {
    mutatorid: 5,
    mutatorname: "Barrier",
    abomination: 2,
    mutatordescription: "Enemy units and structures gain a temporary shield upon the first time they take damage.",
    customusable: true,
    chaosrollable: true,
    hassafezone: false
  },
  {
    mutatorid: 6,
    mutatorname: "Black Death",
    abomination: 7,
    mutatordescription: "Some enemy units carry a plague that deals damage over time and spreads to other nearby units. The plague spreads to your units when the enemy unit is killed.",
    customusable: true,
    chaosrollable: true,
    hassafezone: false
  },
  {
    mutatorid: 7,
    mutatorname: "Blizzard",
    abomination: 4,
    mutatordescription: "Storm clouds move across the map, damaging and freezing player units in their path.",
    customusable: true,
    chaosrollable: true,
    hassafezone: true
  },
  {
    mutatorid: 8,
    mutatorname: "Chaos Studios",
    abomination: 0,
    mutatordescription: "Mutators are chosen at random and periodically cycle throughout the mission.",
    customusable: false,
    chaosrollable: false,
    hassafezone: false
  },
  {
    mutatorid: 9,
    mutatorname: "Concussive Attacks",
    abomination: 1,
    mutatordescription: "Player units are slowed by all enemy attacks.",
    customusable: true,
    chaosrollable: true,
    hassafezone: false
  },
  {
    mutatorid: 10,
    mutatorname: "Darkness",
    abomination: 2,
    mutatordescription: "Previously explored areas remain blacked out on the minimap while outside of player vision.",
    customusable: true,
    chaosrollable: true,
    hassafezone: false
  },
  {
    mutatorid: 11,
    mutatorname: "Diffusion",
    abomination: 3,
    mutatordescription: "Damage dealt to enemies is split evenly across all nearby units, including your own.",
    customusable: true,
    chaosrollable: true,
    hassafezone: false
  },
  {
    mutatorid: 12,
    mutatorname: "Double Edged",
    abomination: 3,
    mutatordescription: "Damage dealt by your units and structures is dealt back to them, but then healed back over time.",
    customusable: true,
    chaosrollable: false,
    hassafezone: false
  },
  {
    mutatorid: 13,
    mutatorname: "Eminent Domain",
    abomination: 1,
    mutatordescription: "Enemies gain control of your structures after destroying them.",
    customusable: true,
    chaosrollable: true,
    hassafezone: false
  },
  {
    mutatorid: 14,
    mutatorname: "Evasive Maneuvers",
    abomination: 1,
    mutatordescription: "Enemy units teleport a short distance away upon taking damage.",
    customusable: true,
    chaosrollable: true,
    hassafezone: false
  },
  {
    mutatorid: 15,
    mutatorname: "Fatal Attraction",
    abomination: 3,
    mutatordescription: "When enemy units and structures die, any of your nearby units are pulled to their location.",
    customusable: true,
    chaosrollable: true,
    hassafezone: false
  },
  {
    mutatorid: 16,
    mutatorname: "Fear",
    abomination: 3,
    mutatordescription: "Player units will occasionally stop attacking and run around in fear upon taking damage.",
    customusable: true,
    chaosrollable: false,
    hassafezone: false
  },
  {
    mutatorid: 17,
    mutatorname: "Fireworks",
    abomination: 0,
    mutatordescription: "Enemies launch a dazzling fireworks display upon death, dealing damage to your nearby units.",
    customusable: false,
    chaosrollable: false,
    hassafezone: false
  },
  {
    mutatorid: 18,
    mutatorname: "Gift Exchange",
    abomination: 0,
    mutatordescription: "Gifts are periodically deployed around the map. If you don't claim them, Amon will!",
    customusable: false,
    chaosrollable: false,
    hassafezone: false
  },
  {
    mutatorid: 19,
    mutatorname: "Going Nuclear",
    abomination: 3,
    mutatordescription: "Nukes are launched at random throughout the map.",
    customusable: true,
    chaosrollable: true,
    hassafezone: true
  },
  {
    mutatorid: 20,
    mutatorname: "Hardened Will",
    abomination: 2,
    mutatordescription: "Enemy Heroic units reduce all incoming damage to a maximum of 10 when any non-heroic enemy unit is near them.",
    customusable: true,
    chaosrollable: false,
    hassafezone: false
  },
  {
    mutatorid: 21,
    mutatorname: "Heroes from the Storm",
    abomination: 10,
    mutatordescription: "Every attack wave will be led by Heroes of increasing power.",
    customusable: true,
    chaosrollable: false,
    hassafezone: false
  },
  {
    mutatorid: 22,
    mutatorname: "Inspiration",
    abomination: 2,
    mutatordescription: "Enemy Heroic units increase the attack speed and armor of all enemies within a small range.",
    customusable: true,
    chaosrollable: false,
    hassafezone: false
  },
  {
    mutatorid: 23,
    mutatorname: "Just Die",
    abomination: 7,
    mutatordescription: "Enemy units are automatically revived upon death.",
    customusable: true,
    chaosrollable: false,
    hassafezone: false
  },
  {
    mutatorid: 24,
    mutatorname: "Kill Bots",
    abomination: 6,
    mutatordescription: "Waves of bots attack players and are invulnerable to damage until they have killed a set amount of units.",
    customusable: true,
    chaosrollable: false,
    hassafezone: false
  },
  {
    mutatorid: 25,
    mutatorname: "Laser Drill",
    abomination: 2,
    mutatordescription: "An enemy Drakken laser drill constantly attacks player units within enemy vision.",
    customusable: true,
    chaosrollable: true,
    hassafezone: false
  },
  {
    mutatorid: 26,
    mutatorname: "Lava Burst",
    abomination: 3,
    mutatordescription: "Lava periodically bursts from the ground at random locations and deals damage to player air and ground units.",
    customusable: true,
    chaosrollable: true,
    hassafezone: true
  },
  {
    mutatorid: 27,
    mutatorname: "Life Leech",
    abomination: 1,
    mutatordescription: "Enemy units steal life or shields whenever they do damage.",
    customusable: true,
    chaosrollable: true,
    hassafezone: false
  },
  {
    mutatorid: 28,
    mutatorname: "Long Range",
    abomination: 2,
    mutatordescription: "Enemy units and structures have increased weapon and vision range.",
    customusable: true,
    chaosrollable: false,
    hassafezone: false
  },
  {
    mutatorid: 29,
    mutatorname: "Lucky Envelopes",
    abomination: 0,
    mutatordescription: "Festive envelopes containing resource pickups are dropped at random throughout the map.",
    customusable: false,
    chaosrollable: false,
    hassafezone: false
  },
  {
    mutatorid: 30,
    mutatorname: "Mag-nificent",
    abomination: 4,
    mutatordescription: "Mag Mines are deployed throughout the map at the start of the mission.",
    customusable: true,
    chaosrollable: false,
    hassafezone: false
  },
  {
    mutatorid: 31,
    mutatorname: "Micro Transactions",
    abomination: 5,
    mutatordescription: "Giving commands to your units costs resources based on the unit's cost.",
    customusable: true,
    chaosrollable: true,
    hassafezone: false
  },
  {
    mutatorid: 32,
    mutatorname: "Mineral Shields",
    abomination: 2,
    mutatordescription: "Mineral clusters at player bases are periodically encased in a shield which must be destroyed for gathering to continue.",
    customusable: true,
    chaosrollable: true,
    hassafezone: false
  },
  {
    mutatorid: 33,
    mutatorname: "Minesweeper",
    abomination: 6,
    mutatordescription: "Groups of Widow Mines and Spider Mines are buried throughout the battlefield.",
    customusable: true,
    chaosrollable: false,
    hassafezone: false
  },
  {
    mutatorid: 34,
    mutatorname: "Missile Command",
    abomination: 3,
    mutatordescription: "Endless missile bombardments target your structures and must be shot down throughout the mission.",
    customusable: true,
    chaosrollable: true,
    hassafezone: false
  },
  {
    mutatorid: 35,
    mutatorname: "Moment of Silence",
    abomination: 2,
    mutatordescription: "When a Heroic enemy dies, all player units around it will reflect on their transgressions, leaving them temporarily unable to attack or use abilities.",
    customusable: true,
    chaosrollable: false,
    hassafezone: false
  },
  {
    mutatorid: 36,
    mutatorname: "Mutually Assured Destruction",
    abomination: 5,
    mutatordescription: "Enemy Hybrid units detonate a Nuke upon death.",
    customusable: true,
    chaosrollable: false,
    hassafezone: false
  },
  {
    mutatorid: 37,
    mutatorname: "Naughty List",
    abomination: 0,
    mutatordescription: "Player units and structures take increased damage for each enemy they've killed.",
    customusable: false,
    chaosrollable: false,
    hassafezone: false
  },
  {
    mutatorid: 38,
    mutatorname: "Orbital Strike",
    abomination: 1,
    mutatordescription: "Enemy Orbital Strikes are periodically fired throughout the map.",
    customusable: true,
    chaosrollable: true,
    hassafezone: true
  },
  {
    mutatorid: 39,
    mutatorname: "Outbreak",
    abomination: 3,
    mutatordescription: "Continuous waves of the infested horde march against the commanders' bases.",
    customusable: true,
    chaosrollable: true,
    hassafezone: false
  },
  {
    mutatorid: 40,
    mutatorname: "Photon Overload",
    abomination: 1,
    mutatordescription: "All enemy structures attack nearby hostile units.",
    customusable: true,
    chaosrollable: true,
    hassafezone: false
  },
  {
    mutatorid: 41,
    mutatorname: "Polarity",
    abomination: 7,
    mutatordescription: "Each enemy unit is immune to either your units or your ally's units.",
    customusable: true,
    chaosrollable: true,
    hassafezone: false
  },
  {
    mutatorid: 42,
    mutatorname: "Power Overwhelming",
    abomination: 5,
    mutatordescription: "All enemy units have energy and use random abilities.",
    customusable: true,
    chaosrollable: false,
    hassafezone: false
  },
  {
    mutatorid: 43,
    mutatorname: "Propagators",
    abomination: 8,
    mutatordescription: "Reality warping sludges are crawling towards you. Anything they touch is turned into a copy of the sludge.",
    customusable: true,
    chaosrollable: true,
    hassafezone: false
  },
  {
    mutatorid: 44,
    mutatorname: "Purifier Beam",
    abomination: 2,
    mutatordescription: "An enemy Purifier Beam moves across the map toward nearby player units.",
    customusable: true,
    chaosrollable: true,
    hassafezone: true
  },
  {
    mutatorid: 45,
    mutatorname: "Random",
    abomination: 0,
    mutatordescription: "A mutation is randomly assigned.",
    customusable: true,
    chaosrollable: false,
    hassafezone: false
  },
  {
    mutatorid: 46,
    mutatorname: "Scorched Earth",
    abomination: 2,
    mutatordescription: "Enemy units set the terrain on fire upon death.",
    customusable: true,
    chaosrollable: true,
    hassafezone: false
  },
  {
    mutatorid: 47,
    mutatorname: "Self Destruction",
    abomination: 3,
    mutatordescription: "Enemy units explode and deal damage to friendly player units upon death.",
    customusable: true,
    chaosrollable: true,
    hassafezone: false
  },
  {
    mutatorid: 48,
    mutatorname: "Sharing is Caring",
    abomination: 0,
    mutatordescription: "Supply is shared between you and your partner, and units from both armies contribute to your combined supply cap.",
    customusable: false,
    chaosrollable: false,
    hassafezone: false
  },
  {
    mutatorid: 49,
    mutatorname: "Shortsighted",
    abomination: 1,
    mutatordescription: "Player units and structures have reduced vision range.",
    customusable: true,
    chaosrollable: false,
    hassafezone: false
  },
  {
    mutatorid: 50,
    mutatorname: "Slim Pickings",
    abomination: 5,
    mutatordescription: "Player worker units gather resources at a reduced rate, but resource pickups spawn throughout the map.",
    customusable: true,
    chaosrollable: true,
    hassafezone: false
  },
  {
    mutatorid: 51,
    mutatorname: "Speed Freaks",
    abomination: 2,
    mutatordescription: "The enemy moves faster than any unit a player has at their disposal.",
    customusable: true,
    chaosrollable: true,
    hassafezone: false
  },
  {
    mutatorid: 52,
    mutatorname: "Temporal Field",
    abomination: 1,
    mutatordescription: "Enemy Temporal Fields are periodically deployed throughout the map.",
    customusable: true,
    chaosrollable: true,
    hassafezone: true
  },
  {
    mutatorid: 53,
    mutatorname: "Time Warp",
    abomination: 1,
    mutatordescription: "Enemy Time Warps are periodically deployed throughout the map.",
    customusable: true,
    chaosrollable: true,
    hassafezone: true
  },
  {
    mutatorid: 54,
    mutatorname: "Transmutation",
    abomination: 7,
    mutatordescription: "Enemy units have a chance to transform into more powerful units whenever they deal damage.",
    customusable: true,
    chaosrollable: true,
    hassafezone: false
  },
  {
    mutatorid: 55,
    mutatorname: "Trick or Treat",
    abomination: 0,
    mutatordescription: "Civilians visit your Candy Bowl looking for treats, which are generated by spending minerals. If no treats are available, the civilians randomly transform into enemy units.",
    customusable: false,
    chaosrollable: false,
    hassafezone: false
  },
  {
    mutatorid: 56,
    mutatorname: "Turkey Shoot",
    abomination: 0,
    mutatordescription: "Supply can only be generated by killing turkeys that wander throughout the map. Doing so may anger the turkeys that remain.",
    customusable: false,
    chaosrollable: false,
    hassafezone: false
  },
  {
    mutatorid: 57,
    mutatorname: "Twister",
    abomination: 2,
    mutatordescription: "Tornadoes move across the map, damaging and knocking back player units in their path.",
    customusable: true,
    chaosrollable: true,
    hassafezone: true
  },
  {
    mutatorid: 58,
    mutatorname: "Vertigo",
    abomination: 0,
    mutatordescription: "Your camera randomly changes positions.",
    customusable: true,
    chaosrollable: false,
    hassafezone: false
  },
  {
    mutatorid: 59,
    mutatorname: "Void Reanimators",
    abomination: 5,
    mutatordescription: "Void Reanimators wander the battlefield, bringing your enemies back to life.",
    customusable: true,
    chaosrollable: true,
    hassafezone: false
  },
  {
    mutatorid: 60,
    mutatorname: "Void Rifts",
    abomination: 10,
    mutatordescription: "Void Rifts periodically appear in random locations and spawn enemy units until destroyed.",
    customusable: true,
    chaosrollable: true,
    hassafezone: false
  },
  {
    mutatorid: 61,
    mutatorname: "Walking Infested",
    abomination: 2,
    mutatordescription: "Every enemy unit that commanders destroy will spawn infested terrans. The more life a unit has, the more infested will rise from its corpse.",
    customusable: true,
    chaosrollable: true,
    hassafezone: false
  },
  {
    mutatorid: 62,
    mutatorname: "We Move Unseen",
    abomination: 3,
    mutatordescription: "All enemy units are permanently cloaked.",
    customusable: true,
    chaosrollable: true,
    hassafezone: false
  },
  {
    mutatorid: 63,
    mutatorname: "Boom Bots",
    abomination: 10,
    mutatordescription: "Uncaring automatons carry a nuclear payload toward your base. One player must discern the disarming sequence and the other player must enter it.",
    customusable: true,
    chaosrollable: false,
    hassafezone: false
  }
];

// html/scripts/tooltips.ts
function token(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "");
}
var mutatorData = new Map(mutators_default.map((mutator) => [token(mutator.mutatorname), mutator]));
var activeTooltipLink = null;
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
  const match = url.pathname.match(/^\/mutators\/([a-z0-9]+)\/?$/);
  return match?.[1] ?? null;
}
function setTooltipPosition(link) {
  const tooltip = tooltipElement();
  const rect = link.getBoundingClientRect();
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
  tooltip.style.visibility = "visible";
}
function showMutatorTooltip(link) {
  const slug = mutatorSlug(link);
  if (!slug)
    return;
  const mutator = mutatorData.get(slug);
  if (!mutator)
    return;
  const tooltip = tooltipElement();
  const name = document.createElement("b");
  name.textContent = mutator.mutatorname;
  tooltip.replaceChildren(name, document.createElement("br"), mutator.mutatordescription);
  tooltip.style.display = "block";
  tooltip.style.visibility = "hidden";
  tooltip.style.position = "fixed";
  tooltip.style.top = "0";
  tooltip.style.left = "0";
  tooltip.style.bottom = "auto";
  tooltip.style.right = "auto";
  activeTooltipLink = link;
  setTooltipPosition(link);
}
function hideTooltip() {
  activeTooltipLink = null;
  tooltipElement().style.display = "none";
}
function closestLink(target) {
  if (!(target instanceof Element))
    return null;
  return target.closest("a[href]");
}
document.addEventListener("mouseover", (event) => {
  const link = closestLink(event.target);
  if (link)
    showMutatorTooltip(link);
});
document.addEventListener("mouseout", (event) => {
  if (!activeTooltipLink)
    return;
  if (event.relatedTarget && activeTooltipLink.contains(event.relatedTarget))
    return;
  hideTooltip();
});
document.addEventListener("focusin", (event) => {
  const link = closestLink(event.target);
  if (link)
    showMutatorTooltip(link);
});
document.addEventListener("focusout", (event) => {
  if (!activeTooltipLink)
    return;
  if (event.relatedTarget && activeTooltipLink.contains(event.relatedTarget))
    return;
  hideTooltip();
});

//# debugId=3EB68F404174C57F64756E2164756E21
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidG9vbHRpcHMudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbCiAgICAiaW1wb3J0IG11dGF0b3JzIGZyb20gXCIuLi8uLi9zb3VyY2UtZGF0YS9tdXRhdG9ycy5qc29uXCI7XG5cbmZ1bmN0aW9uIHRva2VuKG5hbWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtejAtOV0rL2csIFwiXCIpO1xufVxuXG5jb25zdCBtdXRhdG9yRGF0YSA9IG5ldyBNYXAobXV0YXRvcnMubWFwKG11dGF0b3IgPT4gW3Rva2VuKG11dGF0b3IubXV0YXRvcm5hbWUpLCBtdXRhdG9yXSkpO1xubGV0IGFjdGl2ZVRvb2x0aXBMaW5rOiBIVE1MQW5jaG9yRWxlbWVudCB8IG51bGwgPSBudWxsO1xuXG5mdW5jdGlvbiB0b29sdGlwRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XG4gICAgbGV0IHRvb2x0aXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvb2x0aXBcIik7XG4gICAgaWYgKCF0b29sdGlwKSB7XG4gICAgICAgIHRvb2x0aXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b29sdGlwLmlkID0gXCJ0b29sdGlwXCI7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRvb2x0aXApO1xuICAgIH1cbiAgICByZXR1cm4gdG9vbHRpcDtcbn1cblxuZnVuY3Rpb24gbXV0YXRvclNsdWcobGluazogSFRNTEFuY2hvckVsZW1lbnQpOiBzdHJpbmcgfCBudWxsIHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGxpbmsuaHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgIGlmICh1cmwub3JpZ2luICE9PSB3aW5kb3cubG9jYXRpb24ub3JpZ2luKSByZXR1cm4gbnVsbDtcbiAgICBjb25zdCBtYXRjaCA9IHVybC5wYXRobmFtZS5tYXRjaCgvXlxcL211dGF0b3JzXFwvKFthLXowLTldKylcXC8/JC8pO1xuICAgIHJldHVybiBtYXRjaD8uWzFdID8/IG51bGw7XG59XG5cbmZ1bmN0aW9uIHNldFRvb2x0aXBQb3NpdGlvbihsaW5rOiBIVE1MQW5jaG9yRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IHRvb2x0aXAgPSB0b29sdGlwRWxlbWVudCgpO1xuICAgIGNvbnN0IHJlY3QgPSBsaW5rLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGdhcCA9IDg7XG4gICAgY29uc3Qgdmlld3BvcnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICBjb25zdCB0b29sdGlwV2lkdGggPSB0b29sdGlwLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIGlmICh2aWV3cG9ydFdpZHRoIC0gdG9vbHRpcFdpZHRoIC0gZ2FwIDwgcmVjdC5sZWZ0KSB7XG4gICAgICAgIHRvb2x0aXAuc3R5bGUubGVmdCA9IFwiYXV0b1wiO1xuICAgICAgICB0b29sdGlwLnN0eWxlLnJpZ2h0ID0gYCR7Z2FwfXB4YDtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0b29sdGlwLnN0eWxlLmxlZnQgPSBgJHtyZWN0LmxlZnR9cHhgO1xuICAgICAgICB0b29sdGlwLnN0eWxlLnJpZ2h0ID0gXCJhdXRvXCI7XG4gICAgfVxuXG4gICAgaWYgKHJlY3QudG9wIDwgMjAwKSB7XG4gICAgICAgIHRvb2x0aXAuc3R5bGUudG9wID0gYCR7cmVjdC5ib3R0b20gKyBnYXB9cHhgO1xuICAgICAgICB0b29sdGlwLnN0eWxlLmJvdHRvbSA9IFwiYXV0b1wiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRvb2x0aXAuc3R5bGUudG9wID0gXCJhdXRvXCI7XG4gICAgICAgIHRvb2x0aXAuc3R5bGUuYm90dG9tID0gYCR7d2luZG93LmlubmVySGVpZ2h0IC0gcmVjdC50b3AgKyBnYXB9cHhgO1xuICAgIH1cbiAgICB0b29sdGlwLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbn1cblxuZnVuY3Rpb24gc2hvd011dGF0b3JUb29sdGlwKGxpbms6IEhUTUxBbmNob3JFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3Qgc2x1ZyA9IG11dGF0b3JTbHVnKGxpbmspO1xuICAgIGlmICghc2x1ZykgcmV0dXJuO1xuICAgIGNvbnN0IG11dGF0b3IgPSBtdXRhdG9yRGF0YS5nZXQoc2x1Zyk7XG4gICAgaWYgKCFtdXRhdG9yKSByZXR1cm47XG5cbiAgICBjb25zdCB0b29sdGlwID0gdG9vbHRpcEVsZW1lbnQoKTtcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJcIik7XG4gICAgbmFtZS50ZXh0Q29udGVudCA9IG11dGF0b3IubXV0YXRvcm5hbWU7XG4gICAgdG9vbHRpcC5yZXBsYWNlQ2hpbGRyZW4obmFtZSwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpLCBtdXRhdG9yLm11dGF0b3JkZXNjcmlwdGlvbik7XG4gICAgdG9vbHRpcC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIHRvb2x0aXAuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgdG9vbHRpcC5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgICB0b29sdGlwLnN0eWxlLnRvcCA9IFwiMFwiO1xuICAgIHRvb2x0aXAuc3R5bGUubGVmdCA9IFwiMFwiO1xuICAgIHRvb2x0aXAuc3R5bGUuYm90dG9tID0gXCJhdXRvXCI7XG4gICAgdG9vbHRpcC5zdHlsZS5yaWdodCA9IFwiYXV0b1wiO1xuICAgIGFjdGl2ZVRvb2x0aXBMaW5rID0gbGluaztcbiAgICBzZXRUb29sdGlwUG9zaXRpb24obGluayk7XG59XG5cbmZ1bmN0aW9uIGhpZGVUb29sdGlwKCk6IHZvaWQge1xuICAgIGFjdGl2ZVRvb2x0aXBMaW5rID0gbnVsbDtcbiAgICB0b29sdGlwRWxlbWVudCgpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxuZnVuY3Rpb24gY2xvc2VzdExpbmsodGFyZ2V0OiBFdmVudFRhcmdldCB8IG51bGwpOiBIVE1MQW5jaG9yRWxlbWVudCB8IG51bGwge1xuICAgIGlmICghKHRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQpKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdGFyZ2V0LmNsb3Nlc3Q8SFRNTEFuY2hvckVsZW1lbnQ+KFwiYVtocmVmXVwiKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBldmVudCA9PiB7XG4gICAgY29uc3QgbGluayA9IGNsb3Nlc3RMaW5rKGV2ZW50LnRhcmdldCk7XG4gICAgaWYgKGxpbmspIHNob3dNdXRhdG9yVG9vbHRpcChsaW5rKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgZXZlbnQgPT4ge1xuICAgIGlmICghYWN0aXZlVG9vbHRpcExpbmspIHJldHVybjtcbiAgICBpZiAoZXZlbnQucmVsYXRlZFRhcmdldCAmJiBhY3RpdmVUb29sdGlwTGluay5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0IGFzIE5vZGUpKSByZXR1cm47XG4gICAgaGlkZVRvb2x0aXAoKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBldmVudCA9PiB7XG4gICAgY29uc3QgbGluayA9IGNsb3Nlc3RMaW5rKGV2ZW50LnRhcmdldCk7XG4gICAgaWYgKGxpbmspIHNob3dNdXRhdG9yVG9vbHRpcChsaW5rKTtcbn0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZXZlbnQgPT4ge1xuICAgIGlmICghYWN0aXZlVG9vbHRpcExpbmspIHJldHVybjtcbiAgICBpZiAoZXZlbnQucmVsYXRlZFRhcmdldCAmJiBhY3RpdmVUb29sdGlwTGluay5jb250YWlucyhldmVudC5yZWxhdGVkVGFyZ2V0IGFzIE5vZGUpKSByZXR1cm47XG4gICAgaGlkZVRvb2x0aXAoKTtcbn0pO1xuIgogIF0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxTQUFTLEtBQUssQ0FBQyxNQUFzQjtBQUFBLEVBQ2pDLE9BQU8sS0FBSyxZQUFZLEVBQUUsUUFBUSxlQUFlLEVBQUU7QUFBQTtBQUd2RCxJQUFNLGNBQWMsSUFBSSxJQUFJLGlCQUFTLElBQUksYUFBVyxDQUFDLE1BQU0sUUFBUSxXQUFXLEdBQUcsT0FBTyxDQUFDLENBQUM7QUFDMUYsSUFBSSxvQkFBOEM7QUFFbEQsU0FBUyxjQUFjLEdBQWdCO0FBQUEsRUFDbkMsSUFBSSxVQUFVLFNBQVMsZUFBZSxTQUFTO0FBQUEsRUFDL0MsSUFBSSxDQUFDLFNBQVM7QUFBQSxJQUNWLFVBQVUsU0FBUyxjQUFjLEtBQUs7QUFBQSxJQUN0QyxRQUFRLEtBQUs7QUFBQSxJQUNiLFNBQVMsS0FBSyxPQUFPLE9BQU87QUFBQSxFQUNoQztBQUFBLEVBQ0EsT0FBTztBQUFBO0FBR1gsU0FBUyxXQUFXLENBQUMsTUFBd0M7QUFBQSxFQUN6RCxNQUFNLE1BQU0sSUFBSSxJQUFJLEtBQUssTUFBTSxPQUFPLFNBQVMsSUFBSTtBQUFBLEVBQ25ELElBQUksSUFBSSxXQUFXLE9BQU8sU0FBUztBQUFBLElBQVEsT0FBTztBQUFBLEVBQ2xELE1BQU0sUUFBUSxJQUFJLFNBQVMsTUFBTSw4QkFBOEI7QUFBQSxFQUMvRCxPQUFPLFFBQVEsTUFBTTtBQUFBO0FBR3pCLFNBQVMsa0JBQWtCLENBQUMsTUFBK0I7QUFBQSxFQUN2RCxNQUFNLFVBQVUsZUFBZTtBQUFBLEVBQy9CLE1BQU0sT0FBTyxLQUFLLHNCQUFzQjtBQUFBLEVBQ3hDLE1BQU0sTUFBTTtBQUFBLEVBQ1osTUFBTSxnQkFBZ0IsU0FBUyxnQkFBZ0I7QUFBQSxFQUMvQyxNQUFNLGVBQWUsUUFBUSxzQkFBc0IsRUFBRTtBQUFBLEVBQ3JELElBQUksZ0JBQWdCLGVBQWUsTUFBTSxLQUFLLE1BQU07QUFBQSxJQUNoRCxRQUFRLE1BQU0sT0FBTztBQUFBLElBQ3JCLFFBQVEsTUFBTSxRQUFRLEdBQUc7QUFBQSxFQUM3QixFQUFPO0FBQUEsSUFDSCxRQUFRLE1BQU0sT0FBTyxHQUFHLEtBQUs7QUFBQSxJQUM3QixRQUFRLE1BQU0sUUFBUTtBQUFBO0FBQUEsRUFHMUIsSUFBSSxLQUFLLE1BQU0sS0FBSztBQUFBLElBQ2hCLFFBQVEsTUFBTSxNQUFNLEdBQUcsS0FBSyxTQUFTO0FBQUEsSUFDckMsUUFBUSxNQUFNLFNBQVM7QUFBQSxFQUMzQixFQUFPO0FBQUEsSUFDSCxRQUFRLE1BQU0sTUFBTTtBQUFBLElBQ3BCLFFBQVEsTUFBTSxTQUFTLEdBQUcsT0FBTyxjQUFjLEtBQUssTUFBTTtBQUFBO0FBQUEsRUFFOUQsUUFBUSxNQUFNLGFBQWE7QUFBQTtBQUcvQixTQUFTLGtCQUFrQixDQUFDLE1BQStCO0FBQUEsRUFDdkQsTUFBTSxPQUFPLFlBQVksSUFBSTtBQUFBLEVBQzdCLElBQUksQ0FBQztBQUFBLElBQU07QUFBQSxFQUNYLE1BQU0sVUFBVSxZQUFZLElBQUksSUFBSTtBQUFBLEVBQ3BDLElBQUksQ0FBQztBQUFBLElBQVM7QUFBQSxFQUVkLE1BQU0sVUFBVSxlQUFlO0FBQUEsRUFDL0IsTUFBTSxPQUFPLFNBQVMsY0FBYyxHQUFHO0FBQUEsRUFDdkMsS0FBSyxjQUFjLFFBQVE7QUFBQSxFQUMzQixRQUFRLGdCQUFnQixNQUFNLFNBQVMsY0FBYyxJQUFJLEdBQUcsUUFBUSxrQkFBa0I7QUFBQSxFQUN0RixRQUFRLE1BQU0sVUFBVTtBQUFBLEVBQ3hCLFFBQVEsTUFBTSxhQUFhO0FBQUEsRUFDM0IsUUFBUSxNQUFNLFdBQVc7QUFBQSxFQUN6QixRQUFRLE1BQU0sTUFBTTtBQUFBLEVBQ3BCLFFBQVEsTUFBTSxPQUFPO0FBQUEsRUFDckIsUUFBUSxNQUFNLFNBQVM7QUFBQSxFQUN2QixRQUFRLE1BQU0sUUFBUTtBQUFBLEVBQ3RCLG9CQUFvQjtBQUFBLEVBQ3BCLG1CQUFtQixJQUFJO0FBQUE7QUFHM0IsU0FBUyxXQUFXLEdBQVM7QUFBQSxFQUN6QixvQkFBb0I7QUFBQSxFQUNwQixlQUFlLEVBQUUsTUFBTSxVQUFVO0FBQUE7QUFHckMsU0FBUyxXQUFXLENBQUMsUUFBc0Q7QUFBQSxFQUN2RSxJQUFJLEVBQUUsa0JBQWtCO0FBQUEsSUFBVSxPQUFPO0FBQUEsRUFDekMsT0FBTyxPQUFPLFFBQTJCLFNBQVM7QUFBQTtBQUd0RCxTQUFTLGlCQUFpQixhQUFhLFdBQVM7QUFBQSxFQUM1QyxNQUFNLE9BQU8sWUFBWSxNQUFNLE1BQU07QUFBQSxFQUNyQyxJQUFJO0FBQUEsSUFBTSxtQkFBbUIsSUFBSTtBQUFBLENBQ3BDO0FBRUQsU0FBUyxpQkFBaUIsWUFBWSxXQUFTO0FBQUEsRUFDM0MsSUFBSSxDQUFDO0FBQUEsSUFBbUI7QUFBQSxFQUN4QixJQUFJLE1BQU0saUJBQWlCLGtCQUFrQixTQUFTLE1BQU0sYUFBcUI7QUFBQSxJQUFHO0FBQUEsRUFDcEYsWUFBWTtBQUFBLENBQ2Y7QUFFRCxTQUFTLGlCQUFpQixXQUFXLFdBQVM7QUFBQSxFQUMxQyxNQUFNLE9BQU8sWUFBWSxNQUFNLE1BQU07QUFBQSxFQUNyQyxJQUFJO0FBQUEsSUFBTSxtQkFBbUIsSUFBSTtBQUFBLENBQ3BDO0FBRUQsU0FBUyxpQkFBaUIsWUFBWSxXQUFTO0FBQUEsRUFDM0MsSUFBSSxDQUFDO0FBQUEsSUFBbUI7QUFBQSxFQUN4QixJQUFJLE1BQU0saUJBQWlCLGtCQUFrQixTQUFTLE1BQU0sYUFBcUI7QUFBQSxJQUFHO0FBQUEsRUFDcEYsWUFBWTtBQUFBLENBQ2Y7IiwKICAiZGVidWdJZCI6ICIzRUI2OEY0MDQxNzRDNTdGNjQ3NTZFMjE2NDc1NkUyMSIsCiAgIm5hbWVzIjogW10KfQ==

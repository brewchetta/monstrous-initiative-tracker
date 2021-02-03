export const barlgura = {
  index: "barlgura",
  name: "Barlgura",
  size: "Large",
  type: "fiend",
  subtype: "demon",
  alignment: "chaotic evil",
  armor_class: 15,
  hit_points: 68,
  hit_dice: "8d10",
  speed: {walk: "40 ft.", climb: "40 ft."},
  strength: 18,
  dexterity: 15,
  constitution: 16,
  intelligence: 7,
  wisdom: 14,
  charisma: 9,
  proficiencies: "Saving Throw: DEX +5 | Saving Throw: CON: +6 | Skill: Perception +5 | Skill: Stealth + 5",
  damage_resistances: ["Cold", "Fire", "Lightning"],
  damage_immunities: ["Poison"],
  damage_vulnerabilities: [],
  condition_immunities: ["Poisoned"],
  senses: {blindsight: "30 ft.", darkvision: "120 ft.", passive_perception: 15},
  languages: "Abyssal, Telepathy 120 ft.",
  challenge_rating: 5,
  xp: 1800,
  special_abilities: [
    {
      name: "Innate Spellcasting",
      desc: "The barlgura’s spellcasting ability is Wisdom (spell save DC 13). The barlgura can innately cast the following spells, requiring no material components:\n1/day each: entangle, phantasmal force\n2/day each: disguise self, invisibility (self only)"
    },
    {
      name: "Reckless",
      desc: "At the start of its turn, the barlgura can gain advantage on all melee weapon attack rolls it makes during that turn, but attack rolls against it have advantage until the start of its next turn."
    },
    {
      name: "Running Leap",
      desc: "The barlgura’s long jump is up to 40 feet and its high jump is up to 20 feet when it has a running start."
    }
  ],
  spells: [
    {name: "Entangle", level: 1},
    {name: "Phantasmal Force", level: 2},
    {name: "Disguise Self", level: 1},
    {name: "Invisibility", level: 2}
  ],
  spell_dc: 13,
  actions: [
    {
      name: "Multiattack",
      desc: "The barlgura makes three attacks: one with its bite and two with its fists."
    },
    {
      name: "Bite",
      desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) piercing damage."
    },
    {
      name: "Fist",
      desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) bludgeoning damage."
    }
  ]
}

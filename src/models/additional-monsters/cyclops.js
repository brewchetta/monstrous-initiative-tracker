export const cyclops = {
  index: "cyclops",
  name: "Cyclops",
  size: "Huge",
  type: "giant",
  subtype: "",
  alignment: "chaotic neutral",
  armor_class: 14,
  hit_points: 138,
  hit_dice: "12d12",
  speed: {walk: "30 ft."},
  strength: 22,
  dexterity: 11,
  constitution: 20,
  intelligence: 8,
  wisdom: 6,
  charisma: 10,
  proficiencies: "",
  damage_resistances: [],
  damage_immunities: [],
  damage_vulnerabilities: [],
  condition_immunities: [],
  senses: {passive_perception: 8},
  languages: "Giant",
  challenge_rating: 6,
  xp: 2300,
  special_abilities: [
    {
      name: "Poor Depth Perception",
      desc: "The cyclops has disadvantage on any attack roll against a target more than 30 feet away."
    }
  ],
  actions: [
    {
      name: "Multiattack",
      desc: "The cyclops makes two greatclub attacks."
    },
    {
      name: "Greatclub",
      desc: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 19 (3d8 + 6) bludgeoning damage."
    },
    {
      name: "Rock",
      desc: "Ranged Weapon Attack: +9 to hit, range 30/120 ft., one target. Hit: 28 (4d10 + 6) bludgeoning damage."
    }
  ]
}

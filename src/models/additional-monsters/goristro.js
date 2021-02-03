export const goristro = {
  index: "goristro",
  name: "Goristro",
  size: "Huge",
  type: "fiend",
  subtype: "demon",
  alignment: "chaotic evil",
  armor_class: 19,
  hit_points: 310,
  hit_dice: "23d12",
  speed: {walk: "40 ft."},
  strength: 25,
  dexterity: 11,
  constitution: 25,
  intelligence: 6,
  wisdom: 13,
  charisma: 14,
  proficiencies: "Saving Throw: STR +13 | Saving Throw: DEX +6 | Saving Throw: CON +13 | Saving Throw: WIS +7 | Skill: Perception +7",
  damage_resistances: ["Cold", "Fire", "Lightning","Piercing, and Slashing from Nonmagical Attacks"],
  damage_immunities: ["Poison"],
  damage_vulnerabilities: [],
  condition_immunities: ["Poisoned"],
  senses: {darkvision: "120 ft.", passive_perception: 17},
  languages: "Abyssal",
  challenge_rating: 17,
  xp: 18000,
  special_abilities: [
    {
      name: "Charge",
      desc: "If the goristro moves at least 15 feet straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 38 (7d10) piercing damage. If the target is a creature, it must succeed on a DC 21 Strength saving throw or be pushed up to 20 feet away and knocked prone."
    },
    {
      name: "Labyrinthine Recall",
      desc: "The goristro can perfectly recall any path it has traveled."
    },
    {
      name: "Magic Resistance",
      desc: "The goristro has advantage on saving throws against spells and other magical effects."
    },
    {
      name: "Siege Monster",
      desc: "The goristro deals double damage to objects and structures."
    }
  ],
  actions: [
    {
      name: "Multiattack",
      desc: "The goristro makes three attacks: two with its fists and one with its hoof."
    },
    {
      name: "Fist",
      desc: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 20 (3d8 + 7) bludgeoning damage."
    },
    {
      name: "Hoof",
      desc: "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 23 (3d10 + 7) bludgeoning damage. If the target is a creature, it must succeed on a DC 21 Strength saving throw or be knocked prone."
    },
    {
      name: "Gore",
      desc: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 45 (7d10 + 7) piercing damage."
    }
  ]
}

export const shadowDemon = {
  index: "shadow-demon",
  name: "Shadow Demon",
  size: "medium",
  type: "fiend",
  subtype: "demon",
  alignment: "chaotic evil",
  armor_class: 13,
  hit_points: 66,
  hit_dice: "12d8",
  speed: {walk: "30 ft.", fly: "30 ft."},
  strength: 1,
  dexterity: 17,
  constitution: 12,
  intelligence: 14,
  wisdom: 13,
  charisma: 14,
  proficiencies: "Saving Throw: DEX +5 | Saving Throw: CHA +4 | Skill: Stealth +7",
  damage_resistances: ["Acid","Fire","Necrotic","Thunder","Bludgeoning, Piercing, and Slashing from Nonmagical Attacks"],
  damage_immunities: ["Cold", "Lightning", "Poison"],
  damage_vulnerabilities: ["Radiant"],
  condition_immunities: [ "Exhaustion", "Grappled", "Paralyzed", "Petrified", "Poisoned", "Prone", "Restrained" ],
  senses: {darkvision: "60 ft.", passive_perception: 11},
  languages: "Abyssal, Telepathy 120 ft.",
  challenge_rating: 4,
  xp: 1100,
  special_abilities: [
    {
      name: "Incorporeal Movement",
      desc: "The demon can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
    },
    {
      name: "Light Sensitivity",
      desc: "While in bright light, the demon has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
    },
    {
      name: "Shadow Stealth",
      desc: "While in dim light or darkness, the demon can take the Hide action as a bonus action."
    }
  ],
  actions: [
    {
      name: "Claws",
      desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 10 (2d6 + 3) psychic damage or, if the demon had advantage on the attack roll, 17 (4d6 + 3) psychic damage."
    }
  ]
}

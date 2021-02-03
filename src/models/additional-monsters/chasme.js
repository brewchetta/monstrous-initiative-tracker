export const chasme = {
  index: "chasme",
  name: "Chasme",
  size: "Large",
  type: "fiend",
  subtype: "demon",
  alignment: "chaotic evil",
  armor_class: 15,
  hit_points: 84,
  hit_dice: "13d10",
  speed: {walk: "20 ft.", fly: "60 ft."},
  strength: 15,
  dexterity: 15,
  constitution: 12,
  intelligence: 11,
  wisdom: 14,
  charisma: 10,
  proficiencies: "Saving Throw: DEX +5 | Saving Throw: Wis +5 | Skill: Perception +5",
  damage_resistances: ["Cold", "Fire", "Lightning"],
  damage_immunities: ["Poison"],
  damage_vulnerabilities: [],
  condition_immunities: ["Poisoned"],
  senses: {blindsight: "10 ft.", darkvision: "120 ft.", passive_perception: 15},
  languages: "Abyssal, Telepathy 120 ft.",
  challenge_rating: 6,
  xp: 2300,
  special_abilities: [
    {
      name: "Drone",
      desc: "The chasme produces a horrid droning sound to which demons are immune. Any other creature that starts its turn within 30 feet of the chasme must succeed on a DC 12 Constitution saving throw or fall unconscious for 10 minutes. A creature that can’t hear the drone automatically succeeds on the save. The effect on the creature ends if it takes damage or if another creature takes an action to splash it with holy water. If a creature’s saving throw is successful or the effect ends for it, it is immune to the drone for the next 24 hours."
    },
    {
      name: "Magic Resistance",
      desc: "The chasme has advantage on saving throws against spells and other magical effects."
    },
    {
      name: "Spider Climb",
      desc: "The chasme can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
    }
  ],
  actions: [
    {
      name: "Proboscis",
      desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 16 (4d6 + 2) piercing damage plus 24 (7d6) necrotic damage, and the target’s hit point maximum is reduced by an amount equal to the necrotic damage taken. If this effect reduces a creature’s hit point maximum to 0, the creature dies. This reduction to a creature’s hit point maximum lasts until the creature finishes a long rest or until it is affected by a spell like greater restoration."
    }
  ]
}

export const mezzoloth = {
  index: "mezzoloth",
  name: "Mezzoloth",
  size: "medium",
  type: "fiend",
  subtype: "yugoloth",
  alignment: "neutral evil",
  armor_class: 18,
  hit_points: 75,
  hit_dice: "10d8",
  speed: {walk: "40 ft."},
  strength: 18,
  dexterity: 11,
  constitution: 16,
  intelligence: 7,
  wisdom: 10,
  charisma: 11,
  proficiencies: "Skill: Perception +3",
  damage_resistances: ["Cold", "Fire", "Lightning", "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks"],
  damage_immunities: ["Acid","Poison"],
  damage_vulnerabilities: [],
  condition_immunities: ["Poisoned"],
  senses: {blindsight: "60 ft.", darkvision: "60 ft.", passive_perception: 13},
  languages: "Abyssal, Infernal, Telepathy 60 ft.",
  challenge_rating: 5,
  xp: 1800,
  special_abilities: [
    {
      name: "Innate Spellcasting",
      desc: "The mezzoloth’s innate spellcasting ability is Charisma (spell save DC 11). The mezzoloth can innately cast the following spells, requiring no material components:\n2/day each: darkness, dispel magic\n1/day: cloudkill"
    },
    {
      name: "Magic Resistance",
      desc: "The mezzoloth has advantage on saving throws against spells and other magical effects."
    },
    {
      name: "Magic Weapons",
      desc: "The mezzoloth’s weapon attacks are magical."
    }
  ],
  spell_dc: 11,
  spells: [
    {name: "Darkness", level: 2},
    {name: "Dispel Magic", level: 3},
    {name: "Cloudkill", level: 5}
  ].
  actions: [
    {
      name: "Multiattack",
      desc: "The mezzoloth makes two attacks: one with its claws and one with its trident."
    },
    {
      name: "Claws",
      desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 4) slashing damage."
    },
    {
      name: "Trident",
      desc: "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 7 (1d6 + 4) piercing damage, or 8 (1d8 + 4) piercing damage when held with two claws and used to make a melee attack."
    },
    {
      name: "Teleport",
      desc: "The mezzoloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
    }
  ]
}

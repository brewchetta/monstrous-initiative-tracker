export const spinedDevil = {
  index: "spined-devil",
  name: "Spined Devil",
  size: "small",
  type: "fiend",
  subtype: "devil",
  alignment: "lawful evil",
  armor_class: 13,
  hit_points: 22,
  hit_dice: "5d6",
  speed: {walk: "20 ft.", fly: "40 ft."},
  strength: 10,
  dexterity: 15,
  constitution: 12,
  intelligence: 11,
  wisdom: 14,
  charisma: 8,
  proficiencies: "",
  damage_resistances: ["Cold", "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks that aren't Silvered"],
  damage_immunities: ["Fire","Poison"],
  damage_vulnerabilities: [],
  condition_immunities: ["Poisoned"],
  senses: {darkvision: "120 ft.", passive_perception: 12},
  languages: "Infernal, Telepathy 120 ft.",
  challenge_rating: 2,
  xp: 450,
  special_abilities: [
    {
      name: "Devil's Sight",
      desc: "Magical darkness doesn’t impede the devil’s darkvision."
    },
    {
      name: "Flyby",
      desc: "The devil doesn’t provoke an opportunity attack when it flies out of an enemy’s reach."
    },
    {
      name: "Limited Spines",
      desc: "The devil has twelve tail spines. Used spines regrow by the time the devil finishes a long rest."
    },
    {
      name: "Magic Resistance",
      desc: "The devil has advantage on saving throws against spells and other magical effects."
    }
  ],
  actions: [
    {
      name: "Multiattack",
      desc: "The devil makes two attacks: one with its bite and one with its fork or two with its tail spines."
    },
    {
      name: "Bite",
      desc: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 5 (2d4) slashing damage."
    },
    {
      name: "Fork",
      desc: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) piercing damage."
    },
    {
      name: "Tail Spine",
      desc: "Ranged Weapon Attack: +4 to hit, range 20/80 ft., one target. Hit: 4 (1d4 + 2) piercing damage plus 3 (1d6) fire damage."
    }
  ]
}

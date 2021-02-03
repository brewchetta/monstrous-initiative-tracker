export const manes = {
  index: "manes",
  name: "Manes",
  size: "small",
  type: "fiend",
  subtype: "demon",
  alignment: "chaotic evil",
  armor_class: 9,
  hit_points: 9,
  hit_dice: "2d6",
  speed: {walk: "20 ft."},
  strength: 10,
  dexterity: 9,
  constitution: 13,
  intelligence: 3,
  wisdom: 8,
  charisma: 4,
  proficiencies: "",
  damage_resistances: ["Cold", "Fire", "Lightning"],
  damage_immunities: ["Poison"],
  damage_vulnerabilities: [],
  condition_immunities: ["Charmed","Frightened","Poisoned"],
  senses: {darkvision: "60 ft.", passive_perception: 9},
  languages: "understands Abyssal but can't speak",
  challenge_rating: "1/8",
  xp: 25,
  actions: [
    {
      name: "Claws",
      desc: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 5 (2d4) slashing damage."
    }
  ]
}

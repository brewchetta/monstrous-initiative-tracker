export const crawlingClaw = {
  index: "crawling-claw",
  name: "Crawling Claw",
  size: "Tiny",
  type: "undead",
  subtype: "",
  alignment: "neutral evil",
  armor_class: 12,
  hit_points: 2,
  hit_dice: "1d4",
  speed: {walk: "20 ft.", climb: "20 ft."},
  strength: 13,
  dexterity: 14,
  constitution: 11,
  intelligence: 5,
  wisdom: 10,
  charisma: 4,
  proficiencies: "",
  damage_resistances: [],
  damage_immunities: ["Poison"],
  damage_vulnerabilities: [],
  condition_immunities: ["Charmed", "Exhaustion", "Poisoned"],
  senses: {blindsight: "30ft. (blond beyond this radius)", passive_perception: 10},
  languages: "understands Common but can't speak",
  challenge_rating: 0,
  xp: 10,
  special_abilities: [
    {
      name: "Turn Immunity",
      desc: "The claw is immune to effects that turn undead."
    }
  ],
  actions: [
    {
      name: "Claw",
      desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning or slashing damage (claw’s choice)."
    }
  ]
}

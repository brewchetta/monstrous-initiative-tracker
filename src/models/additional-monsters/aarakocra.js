const beholder = {
  index: "aarakocra",
  name: "Aarakocra",
  armor_class: 12,
  strength: 10,
  dexterity: 14,
  constitution: 10,
  wisdom: 12,
  intelligence: 11,
  charisma: 11,
  hit_points: 13,
  damage_immunities: [],
  damage_resistances: [],
  damage_vulnerabilities: [],
  condition_immunities: [],
  alignment: "neutral good",
  actions: [
    {
      name: "Talon",
      desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage."
    },
    {
      name: "Javelin",
      desc: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
    }
    ],
  challenge_rating: "1/4",
  special_abilities: [{
    name: "Dive Attack",
    desc: "If the aarakocra is flying and dives at least 30 feet straight toward a target and then hits it with a melee weapon attack, the attack deals an extra 3 (1d6) damage to the target."
  }],
  languages: "Auran",
  proficiencies: "Saving Throw: INT +8 | Saving Throw: WIS +7 | Saving Throw: CHA +8 | Skill: Perception +12",
  senses: "passive_perception: 15",
  size: "Medium",
  special_abilities: [],
  speed: {walk: "0 ft.", fly: "20 ft. (hover)"},
  subtype: "aarakocra",
  type: "humanoid",
  url: null,
  xp: 50
}

export const deathKnight = {
  index: "death-knight",
  name: "Death Knight",
  size: "Medium",
  type: "undead",
  subtype: "",
  alignment: "chaotic evil",
  armor_class: 20,
  hit_points: 180,
  hit_dice: "19d8",
  speed: {walk: "30 ft."},
  strength: 20,
  dexterity: 11,
  constitution: 20,
  intelligence: 12,
  wisdom: 16,
  charisma: 18,
  proficiencies: "Saving Throw: DEX +6 | Saving Throw: WIS +9 | CHA +10",
  damage_resistances: [],
  damage_immunities: ["Poison", "Necrotic"],
  damage_vulnerabilities: [],
  condition_immunities: ["Exhaustion", "Frightened", "Poisoned"],
  senses: {darkvision: "120 ft.", passive_perception: 13},
  languages: "Abyssal, Common",
  challenge_rating: 17,
  xp: 18000,
  special_abilities: [
    {
      name: "Magic Resistance",
      desc: "The death knight has advantage on saving throws against spells and other magical effects."
    },
    {
      name: "Marshal Undead",
      desc: "Unless the death knight is incapacitated, it and undead creatures of its choice within 60 feet of it have advantage on saving throws against features that turn undead."
    },
    {
      name: "Spellcasting",
      desc: "The death knight is a 19th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 18, +10 to hit with spell attacks). It has the following paladin spells prepared:

      1st level (4 slots): command, compelled duel, searing smite

      2nd level (3 slots): hold person, magic weapon

      3rd level (3 slots): dispel magic, elemental weapon

      4th level (3 slots): banishment, staggering smite

      5th level (2 slots): destructive wave (necrotic)"
    },
    {
      name: "Parry (Reaction)",
      desc: "The death knight adds 6 to its AC against one melee attack that would hit it. To do so, the death knight must see the attacker and be wielding a melee weapon."
    }
  ],
  actions: [
    {
      name: "Multiattack",
      desc: "The death knight makes three longsword attacks."
    },
    {
      name: "Longsword",
      desc: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 9 (1d8 + 5) slashing damage, or 10 (1d10 + 5) slashing damage if used with two hands, plus 18 (4d8) necrotic damage."
    },
    {
      name: "Hellfire Orb (1/Day)",
      desc: "The death knight hurls a magical ball of fire that explodes at a point it can see within 120 feet of it. Each creature in a 20-foot-radius sphere centered on that point must make a DC 18 Dexterity saving throw. The sphere spreads around corners. A creature takes 35 (10d6) fire damage and 35 (10d6) necrotic damage on a failed save, or half as much damage on a successful one."
    },
  ]
}

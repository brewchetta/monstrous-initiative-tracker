export const arcanaloth = {
  index: "arcanaloth",
  name: "Arcanaloth",
  size: "Medium",
  type: "fiend",
  subtype: "yugoloth",
  alignment: "neutral evil",
  armor_class: 17,
  hit_points: 104,
  hit_dice: "16d8",
  speed: {walk: "30 ft.", fly: "30 ft."},
  strength: 17,
  dexterity: 12,
  constitution: 14,
  intelligence: 20,
  wisdom: 16,
  charisma: 17,
  proficiencies: "Saving Throw: DEX +5 | Saving Throw: INT +9 | Saving Throw: WIS +7 | Saving Throw: CHA: +7 | Skill: Arcana +7 | Skill: Deception +9 | Skill: Insight +9 | Skill: Perception +7",
  damage_resistances: ["Cold", "Fire", "Lightning", "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks"],
  damage_immunities: ["Acid", "Poison"],
  damage_vulnerabilities: [],
  condition_immunities: ["Charmed", "Poisoned"],
  senses: {truesight: "120 ft.", passive_perception: 17},
  languages: "All, Telepathy 120 ft.",
  challenge_rating: 12,
  xp: 8400,
  special_abilities: [
    {
      name: "Innate Spellcasting",
      desc: "The arcanaloth’s innate spellcasting ability is Charisma (spell save DC 15). The arcanaloth can innately cast the following spells, requiring no material components:\nAt will: alter self, darkness, heat metal, invisibility (self only), magic missile"
    },
    {
      name: "Magic Resistance",
      desc: "The arcanaloth has advantage on saving throws against spells and other magical effects."
    },
    {
      name: "Magic Weapons",
      desc: "The arcanaloth’s weapon attacks are magical."
    },
    {
      name: "Spellcasting",
      desc: "The arcanaloth is a 16th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). The arcanaloth has the following wizard spells prepared:\nCantrips (at will): fire bolt, mage hand, minor illusion, prestidigitation\n1st level (4 slots): detect magic, identify, shield, Tenser’s floating disk\n2nd level (3 slots): detect thoughts, mirror image, phantasmal force, suggestion\n3rd level (3 slots): counterspell, fear, fireball\n4th level (3 slots): banishment, dimension door\n5th level (2 slots): contact other plane, hold monster\n6th level (1 slot): chain lightning\n7th level (1 slot): finger of death\n8th level (1 slot): mind blank"
    }
  ],
  spells: [
    {name: "Fire Bolt", level: 0}
    {name: "Mage Hand", level: 0}
    {name: "Minor Illusion", level: 0}
    {name: "Prestidigitation", level: 0}
    {name: "Alter Self", level: 2},
    {name: "Darkness", level: 2},
    {name: "Heat Metal", level: 2},
    {name: "Invisibility", level: 2},
    {name: "Magic Missile", level: 1},
    {name: "Detect Magic", level: 1},
    {name: "Identify", level: 1},
    {name: "Shield", level: 1},
    {name: "Tenser's Floating Disk", level: 1},
    {name: "Detect Thoughts", level: 2},
    {name: "Mirror Image", level: 2},
    {name: "Phantasmal Force", level: 2},
    {name: "Suggestion", level: 2},
    {name: "Counterspell", level: 3},
    {name: "Fear", level: 3},
    {name: "Fireball", level: 3},
    {name: "Banishment", level: 4},
    {name: "Dimension Door", level: 4},
    {name: "Contact Other Plane", level: 5},
    {name: "Hold Monster", level: 5},
    {name: "Chain Lightning", level: 6},
    {name: "Finger of Death", level: 7},
    {name: "Mind Blank", level: 8}
  ],
  spell_dc: 17,
  spell_level: 16,
  spell_modifier: 9,
  spell_slots: { 1: 4, 2: 3, 3: 3, 4: 3, 5: 2, 6: 1, 7: 1, 8: 1 },
  actions: [
    {
      name: "Claws",
      desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) slashing damage. The target must make a DC 14 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one."
    },
    {
      name: "Teleport",
      desc: "The arcanaloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
    }
  ]
}

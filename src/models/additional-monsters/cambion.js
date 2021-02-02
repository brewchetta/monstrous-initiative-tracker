export const cambion = {
  index: "cambion",
  name: "Cambion",
  size: "Medium",
  type: "fiend",
  subtype: "",
  alignment: "neutral evil",
  armor_class: 19,
  hit_points: 82,
  hit_dice: "11d8",
  speed: {walk: "30 ft.", fly: "60 ft."},
  strength: 18,
  dexterity: 18,
  constitution: 16,
  intelligence: 14,
  wisdom: 12,
  charisma: 16,
  proficiencies: "Saving Throw: STR +7 | Saving Throw: CON +6 | Saving Throw: INT +5 | Saving Throw: CHA +6 | Skill: Deception +6 | Intimidation +6 | Perception +4 | Stealth +7",
  damage_resistances: ["Cold", "Fire", "Lightning", "Poison", "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks"],
  damage_immunities: [],
  damage_vulnerabilities: [],
  condition_immunities: [],
  senses: {darkvision: "60 ft.", passive_perception: 14},
  languages: "Abyssal, Common, Infernal",
  challenge_rating: 5,
  xp: 1800,
  special_abilities: [
    {
      name: "Fiendish Blessing",
      desc: "The AC of the cambion includes its Charisma bonus."
    },
    {
      name: "Innate Spellcasting",
      desc: "The cambion's spellcasting ability is Charisma (spell save DC 14). The cambion can innately cast the following spells, requiring no material components:\n3/day each: alter self, command, detect magic\n1/day: plane shift (self only)"
    }
  ],
  spell_dc: 14,
  spells: [
    {name: "Command", level: 1},
    {name: "Alter Self", level: 2},
    {name: "Detect Magic", level: 1},
    {name: "Plane Shift", level: 7}
  ],
  actions: [
    {
      name: "Multiattack",
      desc: "The cambion makes two melee attacks or uses its Fire Ray twice."
    },
    {
      name: "Spear",
      desc: "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 7 (1d6 + 4) piercing damage, or 8 (1d8 + 4) piercing damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage."
    },
    {
      name: "Fire Ray",
      desc: "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 10 (3d6) fire damage."
    },
    {
      name: "Fiendish Charm",
      desc: "One humanoid the cambion can see within 30 feet of it must succeed on a DC 14 Wisdom saving throw or be magically charmed for 1 day. The charmed target obeys the cambion’s spoken commands. If the target suffers any harm from the cambion or another creature or receives a suicidal command from the cambion, the target can repeat the saving throw, ending the effect on itself on a success. If a target’s saving throw is successful, or if the effect ends for it, the creature is immune to the cambion’s Fiendish Charm for the next 24 hours."
    },
  ]
}

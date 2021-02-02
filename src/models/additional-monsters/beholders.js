export const beholder = {
  index: "beholder",
  name: "Beholder",
  armor_class: 18,
  strength: 10,
  dexterity: 14,
  constitution: 18,
  wisdom: 17,
  intelligence: 15,
  charisma: 17,
  hit_points: 180,
  hid_dice: "19d10",
  damage_immunities: [],
  damage_resistances: [],
  damage_vulnerabilities: [],
  condition_immunities: ["prone"],
  alignment: "lawful evil",
  actions: [
    {
      name: "Bite",
      desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (4d6) piercing damage."
    },
    {
      name: "Eye Rays",
      desc:
        "Eye Rays: The beholder shoots three of the following magical eye rays at random (reroll duplicates), choosing one to three targets it can see within 120 feet of it:

        Charm Ray. The targeted creature must succeed on a DC 16 Wisdom saving throw or be charmed by the beholder for 1 hour, or until the beholder harms the creature.

        Paralyzing Ray. The targeted creature must succeed on a DC 16 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

        Fear Ray. The targeted creature must succeed on a DC 16 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

        Slowing Ray. The targeted creature must succeed on a DC 16 Dexterity saving throw. On a failed save, the target’s speed is halved for 1 minute. In addition, the creature can’t take reactions, and it can take either an action or a bonus action on its turn, not both. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

        Enervation Ray. The targeted creature must make a DC 16 Constitution saving throw, taking 36 (8d8) necrotic damage on a failed save, or half as much damage on a successful one.

        Telekinetic Ray. If the target is a creature, it must succeed on a DC 16 Strength saving throw or the beholder moves it up to 30 feet in any direction. It is restrained by the ray’s telekinetic grip until the start of the beholder’s next turn or until the beholder is incapacitated.
        If the target is an object weighing 300 pounds or less that isn’t being worn or carried, it is moved up to 30 feet in any direction. The beholder can also exert fine control on objects with this ray, such as manipulating a simple tool or opening a door or a container.

        Sleep Ray. The targeted creature must succeed on a DC 16 Wisdom saving throw or fall asleep and remain unconscious for 1 minute. The target awakens if it takes damage or another creature takes an action to wake it. This ray has no effect on constructs and undead.

        Petrification Ray. The targeted creature must make a DC 16 Dexterity saving throw. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic.

        Disintegration Ray. If the target is a creature, it must succeed on a DC 16 Dexterity saving throw or take 45 (10d8) force damage. If this damage reduces the creature to 0 hit points, its body becomes a pile of fine gray dust.
        If the target is a Large or smaller nonmagical object or creation of magical force, it is disintegrated without a saving throw. If the target is a Huge or larger object or creation of magical force, this ray disintegrates a 10-foot cube of it.

        Death Ray. The targeted creature must succeed on a DC 16 Dexterity saving throw or take 55 (10d10) necrotic damage. The target dies if the ray reduces it to 0 hit points."
      }
    ],
  challenge_rating: "13",
  legendary_actions: [{
    name: "Eye Ray",
    full_description: "Eye Ray: The beholder uses one random eye ray."
  }],
  special_abilities: [{
    name: "Antimagic Cone",
    desc: "The beholder's central eye creates an area of antimagic, as in the antimagic field spell, in a 150-foot-cone. At the start of each of its turns, the beholder decides which way the cone faces and whether the cone is active. The area works against the beholder's own eye rays."
  }],
  languages: "Deep Speech, Undercommon",
  proficiencies: "Saving Throw: INT +8 | Saving Throw: WIS +7 | Saving Throw: CHA +8 | Skill: Perception +12",
  senses: "darkvision: 120 ft. | passive_perception: 22",
  size: "Large",
  special_abilities: [],
  speed: {walk: "0 ft.", fly: "20 ft. (hover)"},
  subtype: "",
  type: "aberration",
  url: null,
  xp: 10000
}

export const deathTyrant = {
  index: "death-tyrant",
  name: "Death Tyrant",
  armor_class: 19,
  strength: 10,
  dexterity: 14,
  constitution: 14,
  wisdom: 19,
  intelligence: 15,
  charisma: 19,
  hit_points: 187,
  hit_dice: "25d10",
  damage_immunities: ["poison"],
  damage_resistances: [],
  damage_vulnerabilities: [],
  condition_immunities: ["charmed", "exhaustion", "paralyzed", "petrified", "poisoned", "prone"],
  alignment: "lawful evil",
  actions: [
    {
      name: "Bite",
      desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (4d6) piercing damage."
    },
    {
      name: "Eye Rays",
      desc:
        "Eye Rays: The beholder shoots three of the following magical eye rays at random (reroll duplicates), choosing one to three targets it can see within 120 feet of it:

        Charm Ray. The targeted creature must succeed on a DC 16 Wisdom saving throw or be charmed by the beholder for 1 hour, or until the beholder harms the creature.

        Paralyzing Ray. The targeted creature must succeed on a DC 16 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

        Fear Ray. The targeted creature must succeed on a DC 16 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

        Slowing Ray. The targeted creature must succeed on a DC 16 Dexterity saving throw. On a failed save, the target’s speed is halved for 1 minute. In addition, the creature can’t take reactions, and it can take either an action or a bonus action on its turn, not both. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

        Enervation Ray. The targeted creature must make a DC 16 Constitution saving throw, taking 36 (8d8) necrotic damage on a failed save, or half as much damage on a successful one.

        Telekinetic Ray. If the target is a creature, it must succeed on a DC 16 Strength saving throw or the beholder moves it up to 30 feet in any direction. It is restrained by the ray’s telekinetic grip until the start of the beholder’s next turn or until the beholder is incapacitated.
        If the target is an object weighing 300 pounds or less that isn’t being worn or carried, it is moved up to 30 feet in any direction. The beholder can also exert fine control on objects with this ray, such as manipulating a simple tool or opening a door or a container.

        Sleep Ray. The targeted creature must succeed on a DC 16 Wisdom saving throw or fall asleep and remain unconscious for 1 minute. The target awakens if it takes damage or another creature takes an action to wake it. This ray has no effect on constructs and undead.

        Petrification Ray. The targeted creature must make a DC 16 Dexterity saving throw. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified until freed by the greater restoration spell or other magic.

        Disintegration Ray. If the target is a creature, it must succeed on a DC 16 Dexterity saving throw or take 45 (10d8) force damage. If this damage reduces the creature to 0 hit points, its body becomes a pile of fine gray dust.
        If the target is a Large or smaller nonmagical object or creation of magical force, it is disintegrated without a saving throw. If the target is a Huge or larger object or creation of magical force, this ray disintegrates a 10-foot cube of it.

        Death Ray. The targeted creature must succeed on a DC 16 Dexterity saving throw or take 55 (10d10) necrotic damage. The target dies if the ray reduces it to 0 hit points."
      }
    ],
  challenge_rating: "14",
  legendary_actions: [{
    name: "Eye Ray",
    full_description: "Eye Ray: The beholder uses one random eye ray."
  }],
  special_abilities: [{
    name: "Antimagic Cone",
    desc: "The beholder's central eye creates an area of antimagic, as in the antimagic field spell, in a 150-foot-cone. At the start of each of its turns, the beholder decides which way the cone faces and whether the cone is active. The area works against the beholder's own eye rays."
  }],
  languages: "Deep Speech, Undercommon",
  proficiencies: "Saving Throw: STR +5 | Saving Throw: CON +7 | Saving Throw: INT +9 | Saving Throw: WIS +7 | Saving Throw: CHA +8 | Skill: Perception +12",
  senses: "darkvision: 120 ft. | passive_perception: 22",
  size: "Large",
  special_abilities: [],
  speed: {walk: "0 ft.", fly: "20 ft. (hover)"},
  subtype: "",
  type: "undead",
  url: null,
  xp: 11500
}

export const spectator = {
  index: "spectator",
  name: "Spectator",
  armor_class: 14,
  strength: 8,
  dexterity: 14,
  constitution: 14,
  wisdom: 13,
  intelligence: 14,
  charisma: 11,
  hit_points: 39,
  hit_dice: "6d8",
  damage_immunities: [],
  damage_resistances: [],
  damage_vulnerabilities: [],
  condition_immunities: ["prone"],
  alignment: "lawful neutral",
  actions: [
    {
      name: "Bite",
      desc: "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6 − 1) piercing damage."
    },
    {
      name: "Eye Rays",
      desc:
        "The spectator shoots up to two of the following magical eye rays at one or two creatures it can see within 90 feet of it. It can use each ray only once on a turn.

        Confusion Ray. The target must succeed on a DC 13 Wisdom saving throw, or it can’t take reactions until the end of its next turn. On its turn, the target can’t move, and it uses its action to make a melee or ranged attack against a randomly determined creature within range. If the target can’t attack, it does nothing on its turn.

        Paralyzing Ray. The target must succeed on a DC 13 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

        Fear Ray. The target must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, with disadvantage if the spectator is visible to the target, ending the effect on itself on a success.

        Wounding Ray. The target must make a DC 13 Constitution saving throw, taking 16 (3d10) necrotic damage on a failed save, or half as much damage on a successful one."
      },
      {
        name: "Create Food and Water",
        desc: "The spectator magically creates enough food and water to sustain itself for 24 hours."
      }
    ],
  challenge_rating: "3",
  special_abilities: [{
    name: "Spell Reflection (Reaction)",
    desc: "If the spectator makes a successful saving throw against a spell, or a spell attack misses it, the spectator can choose another creature (including the spellcaster) it can see within 30 feet of it. The spell targets the chosen creature instead of the spectator. If the spell forced a saving throw, the chosen creature makes its own save. If the spell was an attack, the attack roll is rerolled against the chosen creature."
  }],
  languages: "Deep Speech, Undercommon, Telepathy 120ft.",
  proficiencies: "Skill: Perception +6",
  senses: "darkvision: 120 ft. | passive_perception: 16",
  size: "Medium",
  special_abilities: [],
  speed: {walk: "0 ft.", fly: "30 ft. (hover)"},
  subtype: "",
  type: "aberration",
  url: null,
  xp: 700
}

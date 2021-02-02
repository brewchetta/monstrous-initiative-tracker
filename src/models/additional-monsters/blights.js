export const needleBlight = {
  index: "needle-blight",
  name: "Needle Blight",
  size: "Medium",
  type: "plant",
  subtype: "",
  alignment: "neutral evil",
  armor_class: 12,
  hit_points: 11,
  hit_dice: "2d8",
  speed: {walk: "30 ft."},
  strength: 12,
  dexterity: 12,
  constitution: 13,
  intelligence: 4,
  wisdom: 8,
  charisma: 3,
  proficiencies: "",
  damage_resistances: [],
  damage_immunities: [],
  damage_vulnerabilities: [],
  condition_immunities: ["Blinded", "Deafened"],
  senses: {blindsight: "60 ft. (blind beyond this radius)", passive_perception: 10},
  languages: "understands Common but can't speak",
  challenge_rating: "1/4",
  xp: 50,
  actions: [
    {
      name: "Claw",
      desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) piercing damage."
    },
    {
      name: "Needles",
      desc: "Ranged Weapon Attack: +3 to hit, range 30/60 ft., one target. Hit: 8 (2d6 + 1) piercing damage."
    }
  ]
}

export const twigBlight = {
  index: "twig-blight",
  name: "Twig Blight",
  size: "small",
  type: "plant",
  subtype: "",
  alignment: "neutral evil",
  armor_class: 13,
  hit_points: 4,
  hit_dice: "1d6",
  speed: {walk: "20 ft."},
  strength: 6,
  dexterity: 13,
  constitution: 12,
  intelligence: 4,
  wisdom: 8,
  charisma: 3,
  proficiencies: "Skills: Stealth +3",
  damage_resistances: [],
  damage_immunities: [],
  damage_vulnerabilities: ["Fire"],
  condition_immunities: ["Blinded", "Deafened"],
  senses: {blindsight: "60 ft. (blind beyond this radius)", passive_perception: 9},
  languages: "understands Common but can't speak",
  challenge_rating: "1/8",
  xp: 25,
  special_abilities: [
    {
      name: "False Appearance",
      desc: "While the blight remains motionless, it is indistinguishable from a dead shrub."
    }
  ],
  actions: [
    {
      name: "Claw",
      desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) piercing damage."
    }
  ]
}

export const vineBlight = {
  index: "vine-blight",
  name: "Vine Blight",
  size: "medium",
  type: "plant",
  subtype: "",
  alignment: "neutral evil",
  armor_class: 12,
  hit_points: 26,
  hit_dice: "4d8",
  speed: {walk: "10 ft."},
  strength: 15,
  dexterity: 8,
  constitution: 14,
  intelligence: 5,
  wisdom: 10,
  charisma: 3,
  proficiencies: "Skills: Stealth +1",
  damage_resistances: [],
  damage_immunities: [],
  damage_vulnerabilities: [],
  condition_immunities: ["Blinded", "Deafened"],
  senses: {blindsight: "60 ft. (blind beyond this radius)", passive_perception: 10},
  languages: "understands Common but can't speak",
  challenge_rating: "1/2",
  xp: 100,
  special_abilities: [
    {
      name: "False Appearance",
      desc: "While the blight remains motionless, it is indistinguishable from a tangle of vines."
    }
  ],
  actions: [
    {
      name: "Constrict",
      desc: "Melee Weapon Attack: +4 to hit, reach 10 ft., one target. Hit: 9 (2d6 + 2) bludgeoning damage, and a Large or smaller target is grappled (escape DC 12). Until this grapple ends, the target is restrained, and the blight can’t constrict another target."
    },
    {
      name: "Entangling Plants (Recharge 5–6)",
      desc: "Grasping roots and vines sprout in a 15-foot radius centered on the blight, withering away after 1 minute. For the duration, that area is difficult terrain for nonplant creatures. In addition, each creature of the blight’s choice in that area when the plants appear must succeed on a DC 12 Strength saving throw or become restrained. A creature can use its action to make a DC 12 Strength check, freeing itself or another entangled creature within reach on a success."
    }
  ]
}

export const treeBlight = {
  index: "tree-blight",
  name: "Tree Blight",
  size: "huge",
  type: "plant",
  subtype: "",
  alignment: "neutral evil",
  armor_class: 15,
  hit_points: 149,
  hit_dice: "13d12",
  speed: {walk: "30 ft."},
  strength: 23,
  dexterity: 10,
  constitution: 20,
  intelligence: 6,
  wisdom: 10,
  charisma: 3,
  proficiencies: "",
  damage_resistances: [],
  damage_immunities: [],
  damage_vulnerabilities: [],
  condition_immunities: ["Blinded", "Deafened"],
  senses: {blindsight: "60 ft. (blind beyond this radius)", passive_perception: 10},
  languages: "understands Common and Druidic but can't speak",
  challenge_rating: "7",
  xp: 2900,
  special_abilities: [
    {
      name: "False Appearance",
      desc: "While the blight remains motionless, it is indistinguishable from a tangle of vines."
    },
    {
      name: "Siege Monster",
      desc: "The blight deals double damage to objects and structures."
    }
  ],
  actions: [
    {
      name: "Multiattack",
      desc: "The blight makes four attacks: two with its branches and two with its grasping roots. If it has a target grappled, the blight can also make a bite attack against that target as a bonus action."
    },
    {
      name: "Bite",
      desc: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 19 (3d8 + 6) piercing damage."
    },
    {
      name: "Branch",
      desc: "Melee Weapon Attack: +9 to hit, reach 15 ft., one target. Hit: 16 (3d6 + 6) bludgeoning damage."
    },
    {
      name: "Grasping Root",
      desc: "Melee Weapon Attack: +9 to hit, reach 15 ft., one creature not grappled by the blight. Hit: The target is grappled (escape DC 15). Until the grapple ends, the target takes 9 (1d6 + 6) bludgeoning damage at the start of each of its turns. The root has AC 15 and can be severed by dealing 6 slashing damage or more to it at once. Cutting the root doesn’t hurt the blight but ends the grapple."
    }
  ]
}

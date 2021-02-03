export const nycaloth = {
  index: "nycaloth",
  name: "Nycaloth",
  size: "large",
  type: "fiend",
  subtype: "yugoloth",
  alignment: "neutral evil",
  armor_class: 18,
  hit_points: 123,
  hit_dice: "13d10",
  speed: {walk: "40 ft.", fly: "60 ft."},
  strength: 20,
  dexterity: 11,
  constitution: 19,
  intelligence: 12,
  wisdom: 10,
  charisma: 15,
  proficiencies: "Skill: Intimidation +6 | Skill: Perception +4 | Stealth +4",
  damage_resistances: ["Cold", "Fire", "Lightning", "Bludgeoning, Piercing, and Slashing from Nonmagical Attacks"],
  damage_immunities: ["Acid","Poison"],
  damage_vulnerabilities: [],
  condition_immunities: ["Poisoned"],
  senses: {blindsight: "60 ft.", darkvision: "60 ft.", passive_perception: 14},
  languages: "Abyssal, Infernal, Telepathy 60 ft.",
  challenge_rating: 9,
  xp: 5000,
  special_abilities: [
    {
      name: "Innate Spellcasting",
      desc: "The nycaloth’s innate spellcasting ability is Charisma. The nycaloth can innately cast the following spells, requiring no material components:\nAt will: darkness, detect magic, dispel magic, invisibility (self only), mirror image"
    },
    {
      name: "Magic Resistance",
      desc: "The nycaloth has advantage on saving throws against spells and other magical effects."
    },
    {
      name: "Magic Weapons",
      desc: "The nycaloth's weapon attacks are magical."
    }
  ],
  spells: [
    {name: "Darkness", level: 2},
    {name: "Detect Magic", level: 1},
    {name: "Dispel Magic", level: 3},
    {name: "Invisibility", level: 2},
    {name: "Mirror Image", level: 2}
  ].
  actions: [
    {
      name: "Multiattack",
      desc: "The nycaloth makes two melee attacks, or it makes one melee attack and teleports before or after the attack."
    },
    {
      name: "Claws",
      desc: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage. If the target is a creature, it must succeed on a DC 16 Constitution saving throw or take 5 (2d4) slashing damage at the start of each of its turns due to a fiendish wound. Each time the nycaloth hits the wounded target with this attack, the damage dealt by the wound increases by 5 (2d4). Any creature can take an action to stanch the wound with a successful DC 13 Wisdom (Medicine) check. The wound also closes if the target receives magical healing."
    },
    {
      name: "Greataxe",
      desc: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 18 (2d12 + 5) slashing damage."
    },
    {
      name: "Teleport",
      desc: "The nycaloth magically teleports, along with any equipment it is wearing or carrying, up to 60 feet to an unoccupied space it can see."
    }
  ]
}

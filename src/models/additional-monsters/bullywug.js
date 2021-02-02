export const bullywug = {
  index: "bullywug",
  name: "Bullywug",
  size: "Medium",
  type: "humanoid",
  subtype: "bullywug",
  alignment: "neutral evil",
  armor_class: 15,
  hit_points: 11,
  hit_dice: "2d8",
  speed: {walk: "20 ft.", swim: "40 ft."},
  strength: 12,
  dexterity: 12,
  constitution: 13,
  intelligence: 7,
  wisdom: 10,
  charisma: 7,
  proficiencies: "Skills: Stealth +3",
  damage_resistances: [],
  damage_immunities: [],
  damage_vulnerabilities: [],
  condition_immunities: [],
  senses: {passive_perception: 10},
  languages: "Bullywug",
  challenge_rating: "1/4",
  xp: 50,
  special_abilities: [
    {
      name: "Amphibious",
      desc: "The bullywug can breath air and water."
    },
    {
      name: "Speak with Frogs and Toads",
      desc: "The bullywug can communicate simple concepts to frogs and toads when it speaks in Bullywug."
    },
    {
      name: "Swamp Camouflage",
      desc: "The bullywug has advantage on Dexterity (Stealth) checks made to hide in swampy terrain."
    },
    {
      name: "Standing Leap",
      desc: "The bullywug’s long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start."
    }
  ],
  actions: [
    {
      name: "Multiattack",
      desc: "The bullywug makes two melee attacks: one with its bite and one with its spear."
    },
    {
      name: "Bite",
      desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning damage."
    },
    {
      name: "Spear",
      desc: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack."
    }
  ]
}

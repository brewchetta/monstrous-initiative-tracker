export const carrionCrawler = {
  index: "carrion-crawler",
  name: "Carrion Crawler",
  size: "Large",
  type: "Monstrosity",
  subtype: "",
  alignment: "unaligned",
  armor_class: 13,
  hit_points: 51,
  hit_dice: "6d10",
  speed: {walk: "30 ft.", climb: "30 ft."},
  strength: 14,
  dexterity: 13,
  constitution: 16,
  intelligence: 1,
  wisdom: 12,
  charisma: 5,
  proficiencies: "Skill: Perception +3",
  damage_resistances: [],
  damage_immunities: [],
  damage_vulnerabilities: [],
  condition_immunities: [],
  senses: {darkvision: "60 ft.", passive_perception: 13},
  languages: "",
  challenge_rating: 2,
  xp: 450,
  special_abilities: [
    {
      name: "Keen Smell",
      desc: "The carrion crawler has advantage on Wisdom (Perception) checks that rely on smell."
    },
    {
      name: "Spider Climb",
      desc: "The carrion crawler can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
    }
  ],
  actions: [
    {
      name: "Multiattack",
      desc: "The carrion crawler makes two attacks: one with its tentacles and one with its bite."
    },
    {
      name: "Tentacles",
      desc: "Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. Hit: 4 (1d4 + 2) poison damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the poison on itself on a success."
    },
    {
      name: "Bite",
      desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage."
    }
  ]
}

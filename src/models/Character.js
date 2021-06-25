import { template } from "./character-template"

export default class Character {

  static internalKey = 0

  static createTemplate = () => new Character(template)

  static uploadedCharacters = []

  static addUploadedCharacter = character => {
    const match = this.uploadedCharacters.find(c => c.name === character.name && c.index === character.index)
    if (!match) {
      this.uploadedCharacters.push(character)
    }
  }

  constructor(data, player = false, char_class = "") {

    Object.keys(data).forEach(key => {
      this[key] = data[key]
    })

    this._key = this.constructor.internalKey
    this.constructor.internalKey++

    this.player = data.player || player
    this.char_class = data.char_class || char_class

    this.legendary_actions = this.legendary_actions || []
    this.special_abilities = this.special_abilities || []

    this.remapActionAttributes(this.actions)
    this.remapActionAttributes(this.legendary_actions)
    this.remapSpecialAbilities()
    this.remapProficiencies()
    this.remapArrayProperty("damage_immunities")
    this.remapArrayProperty("damage_resistances")
    this.remapArrayProperty("damage_vulnerabilities")
    this.remapArrayOfObjectsProperty("condition_immunities")
    this.remapObjectProperty("senses")
    this.remapObjectProperty("speed")
    this.spell_dc = this.spell_dc || 0
    this.spell_modifier = this.spell_modifier || 0
    this.remapSpells()
    this.remapSpellSlots()
    // add remap special abilities & abilities & legendary abilities

    this.subtype = this.subtype ? this.subtype : ""

    this.hit_points_static = false
    this.static_hitpoints = this.hit_points
    this.hit_points = this.hit_points_static ? this.hit_points : this.derivedHitPoints
    this.currentHitPoints = this.hit_points
    this.special_abilities = data.special_abilities || []
    this.initiative = -10
    this.tempHP = 0
    this.type = this.type.replace(/[,]/g, "")

    // CLEANUP //
    this.cleanup()
  }

  // CONSTRUCTOR HELPERS //

  remapObjectProperty = property => {
    if (this[property].constructor === Object) {
      this[property] = Object.keys(this[property]).map(k => `${k}: ${this[property][k]}`.replace(/_/g, " ")).join(", ")
    }
  }

  remapArrayProperty = property => {
    this[property] = this[property] && this[property].constructor === Array ? this[property].join(", ") : this[property]
  }

  remapArrayOfObjectsProperty = property => {
    this[property] = this[property] && this[property].constructor === Array ? this[property].map(p => p.name).join(", ") : this[property]
  }

  remapSpecialAbilities = () => {
    this.special_abilities.forEach((a,i) => {
      a.full_description = a.full_description || `${a.name}: ${a.desc}`
      a.id = i
      delete a.desc
      delete a.name
    });
  }

  remapLegendaryActions = () => {
    this.legendary_actions.forEach((a,i) => {
      a.full_description = a.full_description || `${a.name}: ${a.desc}`
      a.id = i
      delete a.desc
      delete a.name
    });
  }

  remapActionAttributes = (actions) => {
    actions.forEach((a,i) => {
      a.full_description = a.full_description || `${a.name}: ${a.desc}`
      a.id = i
      delete a.desc
      delete a.name
      delete a.damage
      delete a.attack_bonus
      delete a.dc
      delete a.usage
    })
  }

  remapProficiencies = () => {
    if (this.proficiencies.constructor === Array) {
      this.proficiencies = this.proficiencies.map(p => `${p.proficiency.name} + ${p.value}`).join(', ')
    }
  }

  remapSpells = () => {
    this.spells = this.spells || []
    if (this.special_abilities) {
      this.special_abilities.forEach(ability => {
        if (ability.spellcasting) {
          this.spells = ability.spellcasting.spells.map(s => ({name: s.name, level: s.level}))
          this.spell_slots = this.spell_slots || ability.spellcasting.slots
          this.spell_dc = this.spell_dc || ability.spellcasting.dc
          this.spell_level = this.spell_level || ability.spellcasting.level
          this.spell_modifier = this.spell_modifier || ability.spellcasting.modifier
        }
      })
    }
  }

  remapSpellSlots = () => {
    this.spell_slots = this.spell_slots || {}
    Object.keys(this.spell_slots).forEach(level => {
      if (typeof this.spell_slots[level] === 'number') {
        const newSlots = []
        for (let i = 0; i < this.spell_slots[level]; i++) {
          newSlots.push(false)
        }
        this.spell_slots[level] = newSlots
      }
    })
  }

  cleanup = () => {
    delete this.remapActionAttributes
    delete this.remapSpecialAbilities
    delete this.remapProficiencies
    delete this.remapArrayProperty
    delete this.remapArrayOfObjectsProperty
    delete this.remapObjectProperty
    delete this.remapSpells
    delete this.remapSpellSlots
    delete this.remapLegendaryActions
    delete this.cleanup
  }

  // ATTRIBUTE MODIFIERS //

  get str() {
    return Math.floor((this.strength - 10) / 2)
  }

  get dex() {
    return Math.floor((this.dexterity - 10) / 2)
  }

  get con() {
    return Math.floor((this.constitution - 10) / 2)
  }

  get wis() {
    return Math.floor((this.wisdom - 10) / 2)
  }

  get int() {
    return Math.floor((this.intelligence - 10) / 2)
  }

  get cha() {
    return Math.floor((this.charisma - 10) / 2)
  }

  get formatted_index() {
    return this.name.toLowerCase().replace(/ /g,"-").replace(/[()']/g, "").replace(/,-[a-z]*-form/, "")
  }

  get derivedHitPoints() {
    const [diceRolled, diceSize] = this.hit_dice.split("d").map(i => parseInt(i))
    let total = 0
    for (var i = 0; i < diceRolled; i++) {
      total += Math.ceil(Math.random() * diceSize)
    }
    return total + (this.con * diceRolled) >= 1 ? total + (this.con * diceRolled) : 1
  }

  // ACTIONS //

  rollInitiative = () => {
    this.initiative = this.dex + Math.ceil(Math.random() * 20)
    return this.initiative
  }

  // END //

}

import { template } from "./character-template"

export default class Character {

  static internalKey = 0

  static createTemplate = () => new Character(template)

  constructor(data, player = false, char_class = "") {

    Object.keys(data).forEach(key => {
      this[key] = data[key]
    })

    this._key = this.constructor.internalKey
    this.constructor.internalKey++

    this.player = player
    this.char_class = char_class

    this.remapActionAttributes()
    this.remapProficiencies()
    this.remapArrayProperty("damage_immunities")
    this.remapArrayProperty("damage_resistances")
    this.remapArrayProperty("damage_vulnerabilities")
    this.remapArrayProperty("condition_immunities")
    this.remapObjectProperty("senses")
    this.remapObjectProperty("speed")

    this.subtype = this.subtype ? this.subtype : ""

    this.currentHitPoints = this.hit_points
    this.initiative = -10
    this.tempHP = 0
  }

  // CONSTRUCTOR HELPERS //

  remapObjectProperty = property => {
    if (this[property].constructor === Object) {
      this[property] = Object.keys(this[property]).map(k => `${k}: ${this[property][k]}`).join(" | ")
    }
  }

  remapArrayProperty = property => {
    this[property] = this[property].constructor === Array ? this[property].join(" | ") : this[property]
  }

  remapActionAttributes = () => {
    this.actions.forEach(action => {
      action.damage.forEach(d => {
        if (d.damage_type && d.damage_type.name) {
          d.damage_type = d.damage_type.name
        }
      })
      if (action.dc && action.dc.dc_type) {
        action.dc.dc_type = action.dc.dc_type.name
      }
    })
  }

  remapProficiencies = () => {
    if (this.proficiencies.constructor === Array) {
      this.proficiencies = this.proficiencies.map(p => `${p.proficiency.name} + ${p.value}`).join(' | ')
    }
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

  // ACTIONS //

  rollInitiative = () => {
    this.initiative = this.dex + Math.ceil(Math.random() * 20)
    return this.initiative
  }

  // END //

}

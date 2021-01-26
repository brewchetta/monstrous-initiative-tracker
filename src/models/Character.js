import React from 'react'
import InitiativeCard from '../components/initiative-list/InitiativeCard'
import CharacterDetailCard from '../components/detail-modal/CharacterDetailCard'

export default class Character {

  static internalKey = 0

  constructor(data) {
    // assign internalKey
    this._key = this.constructor.internalKey
    this.constructor.internalKey++

    // assign all attributes
    Object.keys(data).forEach(key => {
      this[key] = data[key]
    })

    this.remapActionAttributes()
    this.remapProficiencies()
  }

  // CONSTRUCTOR HELPERS //

  remapActionAttributes = () => {
    this.actions.forEach(action => {
      action.damage.forEach(d => {
        if (d.damage_type) {
          d.damage_type = d.damage_type.name
        }
      })
      if (action.dc) {
        action.dc.dc_type = action.dc.dc_type.name
      }
    })
  }

  remapProficiencies = () => {
    this.proficiencies = this.proficiencies.map(p => p.proficiency.name)
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

  // RENDER METHODS //

  renderCard = () => <InitiativeCard key={this._key} character={this} />

  renderDetail = () => <CharacterDetailCard character={this} />

  // ACTIONS //

  rollInitative = () => {
    this.initiative = this.dex + Math.ceil(Math.random() * 20)
    return this.initative
  }

}

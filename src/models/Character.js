import React from 'react'
import InitiativeCard from '../components/initiative-list/InitiativeCard'
import DetailCard from '../components/character-view/DetailCard'

export default class Character {

  constructor(data) {

    // assign all attributes
    Object.keys(data).forEach(key => {
      this[key] = data[key]
    })

    // remap proficiency names
    this.proficiencies = this.proficiencies.map(p => p.proficiency.name)

    this.actions.forEach(action => {

      // remap damage types
      action.damage.forEach(d => d.damage_type = d.damage_type.name)

      // remap DC types
      if (action.dc) {
        action.dc.dc_type = action.dc.dc_type.name
      }

    })

    console.log(this)
  }

  // RENDER METHODS //

  renderInitiativeCard = () => <InitiativeCard character={this} />

  renderDetailCard = () => <DetailCard character={this} />

}

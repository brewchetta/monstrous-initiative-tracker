import { useState, useEffect } from 'react'
import { getMonster } from '../../services/dnd-5e-api'
import Character from '../../models/Character'

const monsterNames = ["vampire", "goblin", "merfolk", "cat", "duergar", "aboleth", "bat", "merfolk"]

export default function InitiativeList(props) {

  const [characters, setCharacters] = useState([])

  const getMonsterFromList = () => {
    if (monsterNames.length) {
      getMonster(monsterNames.pop()).then(monster => {
        setCharacters([...characters, new Character(monster)])
      })
    }
  }

  useEffect(getMonsterFromList, [characters])

  const renderListedCharacters = () => {
    return [...characters].sort((a,b) => (b.initiative || b.rollInitiative()) - (a.initiative || a.rollInitiative())).map((character, index) => character.renderCard(index))
  }

  return (
    <div id="initative-list">

      {renderListedCharacters()}

    </div>
  )

}

import {createContext, useState, useContext} from "react"

const CharactersContext = createContext()
const byInitiative = (a,b) => (b.initiative + (b.dexterity * 0.01) || -10) - (a.initiative + (a.dexterity * 0.01) || -10)

export const CharactersProvider = ({children}) => {
  const [all, setCharacters] = useState([])

  const add = (character) => setCharacters(
    [...all, character].sort(byInitiative)
  )
  const update = (alteredCharacter) => {
    setCharacters(all.map(character => {
      return character._key === alteredCharacter._key ? alteredCharacter : character
    }).sort(byInitiative))
  }
  const remove = ({_key}) => setCharacters(
    all.filter(character => character._key !== _key)
  )
  const rollInitiatives = () => setCharacters(
    all
    .map(character => character.initiative > -5 ? character : Object.assign(character, {initiative: character.rollInitiative()}))
    .sort(byInitiative)
  )
  const resetInitiatives = () => setCharacters(
    all.map(character => Object.assign(character, {initiative: -10}))
    .sort(byInitiative)
  )
  const clear = () => setCharacters([])


  return (
    <CharactersContext.Provider value={{all, add, update, remove, rollInitiatives, resetInitiatives, clear}}>
      {children}
    </CharactersContext.Provider>
  )
}

export const useCharactersContext = () => useContext(CharactersContext)

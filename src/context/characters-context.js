import {createContext, useReducer} from "react"

const CharactersContext = createContext()
const byInitiative = (a,b) => (b.initiative + (b.dexterity * 0.01) || -10) - (a.initiative + (a.dexterity * 0.01) || -10)


const charactersReducer = (state, action) => {

  switch (action.type) {
    case "ADD_CHARACTER":
      return [...state, action.payload].sort(byInitiative)
    case "UPDATE_CHARACTER":
      return state.map(character => character._key === action.payload._key ? action.payload : character).sort(byInitiative)
    case "REMOVE_CHARACTER":
      return state.filter(character => character._key !== action.payload._key)
    case "ROLL_UNROLLED_INITIATIVES":
      const rolledCharacters = state.map(character => character.initiative > -5 ? character : Object.assign(character, {initiative: character.rollInitiative()}))
      return rolledCharacters.sort(byInitiative)
    case "RESET_INITIATIVES":
      const characters = state.map(character => Object.assign(character, {initiative: -10}))
      return characters.sort(byInitiative)
    case "CLEAR_CHARACTERS":
      return []
    default:
      throw new Error(`Incorrect use of character reducer: ${action.type}`)
  }
}

const CharactersProvider = ({children}) => {
  const [characters, dispatch] = useReducer(charactersReducer, [])

  return (
    <CharactersContext.Provider value={[characters, dispatch]}>
      {children}
    </CharactersContext.Provider>
  )
}

export { CharactersProvider, CharactersContext }

import {createContext, useReducer} from "react"

const CharactersContext = createContext()
const byInitiative = (a,b) => (b.initiative || -10) - (a.initiative || -10)


const charactersReducer = (state, action) => {

  switch (action.type) {
    case "ADD_CHARACTER":
      return [...state, action.payload].sort(byInitiative)
    case "UPDATE_CHARACTER":
      return state.map(character => character._key === action.payload._key ? action.payload : character).sort(byInitiative)
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
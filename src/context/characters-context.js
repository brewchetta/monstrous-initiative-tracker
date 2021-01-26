import {createContext, useReducer} from "react"

const CharactersContext = createContext()

const charactersReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CHARACTER":
      return [...state, action.payload]
    case "REPLACE_CHARACTER":
      return state.map(character => character._key === action.payload._key ? action.payload : character)
    default:
      throw new Error("Incorrect use of character reducer")
  }
}

const CharactersProvider = ({children}) => {
  const [characters, dispatch] = useReducer(charactersReducer, [])

  return (
    <CharactersContext.Provider value={[characters, dispatch]}>
      {children}
    </CharactersReducer.Provider>
  )
}

export { CharactersProvider, CharactersContext }

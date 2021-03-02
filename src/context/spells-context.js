import {createContext, useReducer} from "react"

const SpellsContext = createContext()

const spellsReducer = (state, action) => {

  switch (action.type) {
    case "CLEAR_SPELLS":
      return null
    case "ADD_SPELL":
      return ({ ...state, action.payload })
    default:
      throw new Error(`Incorrect use of detail reducer: ${action.type}`)
  }
}

const SpellsProvider = ({children}) => {
  const [detail, dispatch] = useReducer(spellsReducer, [])

  return (
    <SpellsContext.Provider value={[detail, dispatch]}>
      {children}
    </SpellsContext.Provider>
  )
}

export { SpellsProvider, SpellsContext }

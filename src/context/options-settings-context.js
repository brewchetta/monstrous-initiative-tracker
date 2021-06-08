import {createContext, useReducer} from "react"

const OptionsSettingsContext = createContext()

const hitpointsReducer = (state, action) => {

  switch (action.type) {
    case "TO_RANDOM_HP":
      return {...state, randomHitpoints: true}
    case "TO_SET_HP":
      return {...state, randomHitpoints: false}
    case "TO_ROLLED_INITIATIVE":
      return {...state, preRolledInitiative: true}
    case "TO_UNROLLED_INITIATIVE":
      return {...state, preRolledInitiative: false}
    default:
      throw new Error(`Incorrect use of hitpoint setting reducer: ${action.type}`)
  }
}

const OptionsSettingsProvider = ({children}) => {
  const [hitpointsSetting, dispatch] = useReducer(hitpointsReducer, {type: "random"})

  return (
    <OptionsSettingsContext.Provider value={[hitpointsSetting, dispatch]}>
      {children}
    </OptionsSettingsContext.Provider>
  )
}

export { OptionsSettingsProvider, OptionsSettingsContext }

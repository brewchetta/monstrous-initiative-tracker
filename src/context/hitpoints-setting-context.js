import {createContext, useReducer} from "react"

const HitpointsSettingContext = createContext()

const hitpointsReducer = (state, action) => {

  switch (action.type) {
    case "TO_RANDOM":
      return {type: "random"}
    case "TO_SET":
      return {type: "set"}
    default:
      throw new Error(`Incorrect use of hitpoint setting reducer: ${action.type}`)
  }
}

const HitpointsSettingProvider = ({children}) => {
  const [hitpointsSetting, dispatch] = useReducer(hitpointsReducer, {type: "random"})

  return (
    <HitpointsSettingContext.Provider value={[hitpointsSetting, dispatch]}>
      {children}
    </HitpointsSettingContext.Provider>
  )
}

export { HitpointsSettingProvider, HitpointsSettingContext }

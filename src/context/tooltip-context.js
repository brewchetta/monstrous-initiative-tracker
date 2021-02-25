import {createContext, useReducer} from "react"

const TooltipContext = createContext()

const tooltipReducer = (state, action) => {

  switch (action.type) {
    case "CLEAR_TOOLTIP":
      return {...state, type: null}
    case "INSPECT_SPELL":
      return {type: "spell", content: action.payload.spellName, position: {x: action.payload.x, y: action.payload.y}}
    default:
      throw new Error(`Incorrect use of tooltip reducer: ${action.type}`)
  }
}

const TooltipProvider = ({children}) => {
  const [tooltip, dispatch] = useReducer(tooltipReducer, {type: null})

  return (
    <TooltipContext.Provider value={[tooltip, dispatch]}>
      {children}
    </TooltipContext.Provider>
  )
}

export { TooltipProvider, TooltipContext }

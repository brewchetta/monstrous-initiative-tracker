import {createContext, useReducer} from "react"

const TooltipContext = createContext()

const tooltipReducer = (state, action) => {

  switch (action.type) {
    case "CLEAR_TOOLTIP":
      return null
    case "INSPECT_SPELL":
      return {type: "spell", content: action.payload}
    default:
      throw new Error(`Incorrect use of tooltip reducer: ${action.type}`)
  }
}

const TooltipProvider = ({children}) => {
  const [tooltip, dispatch] = useReducer(tooltipReducer, null)

  return (
    <TooltipContext.Provider value={[tooltip, dispatch]}>
      {children}
    </TooltipContext.Provider>
  )
}

export { TooltipProvider, TooltipContext }

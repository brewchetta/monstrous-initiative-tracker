import {createContext, useContext, useState} from "react"

const TooltipContext = createContext()

export const TooltipProvider = ({children}) => {
  const [tooltip, setTooltip] = useState({type: null})

  const clearTooltip = () => setTooltip({type: null})
  const inspectSpell = payload => setTooltip({type: "spell", content: payload.spellName})

  return (
    <TooltipContext.Provider value={{tooltip, clearTooltip, inspectSpell}}>
      {children}
    </TooltipContext.Provider>
  )
}

export const useTooltipContext = () => useContext(TooltipContext)

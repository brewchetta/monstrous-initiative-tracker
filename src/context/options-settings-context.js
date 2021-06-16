import {createContext, useContext, useState} from "react"

const OptionsSettingsContext = createContext()

export const OptionsSettingsProvider = ({children}) => {
  const [options, setOptions] = useState({preRolledInitiative: false, randomHitpoints: true})

  return (
    <OptionsSettingsContext.Provider value={{options, setOptions}}>
      {children}
    </OptionsSettingsContext.Provider>
  )
}

export const useOptionsSettings = () => useContext(OptionsSettingsContext)

import {createContext, useContext, useState} from "react"

const OptionsSettingsContext = createContext()

export const OptionsSettingsProvider = ({children}) => {
  const [options, setOptions] = useState({preRolledInitiative: false, randomHitpoints: true})

  const togglePreRolledInitiative = () => setOptions({...options, preRolledInitiative: !options.preRolledInitiative})
  const toggleRandomHitpoints = () => setOptions({...options, randomHitpoints: !options.randomHitpoints})

  return (
    <OptionsSettingsContext.Provider value={{options, toggleRandomHitpoints, togglePreRolledInitiative}}>
      {children}
    </OptionsSettingsContext.Provider>
  )
}

export const useOptionsSettings = () => useContext(OptionsSettingsContext)

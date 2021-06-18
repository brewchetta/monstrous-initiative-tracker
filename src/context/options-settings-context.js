import {createContext, useContext, useState} from "react"
import localStorageService from 'services/localstorage'

const [getLocOptions, setLocOptions] = localStorageService('monstrous-options')

const OptionsSettingsContext = createContext()

export const OptionsSettingsProvider = ({children}) => {
  const [options, setOptions] = useState(getLocOptions() ? getLocOptions() : {preRolledInitiative: false, randomHitpoints: true})

  const togglePreRolledInitiative = () => {
    const newSettings = {...options, preRolledInitiative: !options.preRolledInitiative}
    setOptions(newSettings)
    setLocOptions(newSettings)
  }

  const toggleRandomHitpoints = () => {
    const newSettings = {...options, randomHitpoints: !options.randomHitpoints}
    setOptions(newSettings)
    setLocOptions(newSettings)
  }

  return (
    <OptionsSettingsContext.Provider value={{options, toggleRandomHitpoints, togglePreRolledInitiative}}>
      {children}
    </OptionsSettingsContext.Provider>
  )
}

export const useOptionsSettings = () => useContext(OptionsSettingsContext)

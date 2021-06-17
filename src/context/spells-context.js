import {createContext, useContext, useState} from "react"

const SpellsContext = createContext()

export const SpellsProvider = ({children}) => {
  const [all, setSpells] = useState([])

  const clear = () => setSpells([])
  const addSpell = spell => setSpells(spell.name ? {...all, [spell.name.toLowerCase()]: spell} : all)

  return (
    <SpellsContext.Provider value={{all, clear, addSpell}}>
      {children}
    </SpellsContext.Provider>
  )
}

export const useSpellsContext = () => useContext(SpellsContext)

import {createContext, useContext, useState} from "react"

const DetailContext = createContext()

export const DetailProvider = ({children}) => {
  const [current, setDetail] = useState(null)

  const clear = () => setDetail(null)
  const inspectCharacter = character => setDetail({type: "character", content: character})
  const searchMonster = () => setDetail({type: "search_monster"})
  const searchSpell = () => setDetail({type: "search_spell"})
  const localCharacters = () => setDetail({type: "locals"})

  return (
    <DetailContext.Provider value={{current, clear, inspectCharacter, searchMonster, searchSpell, localCharacters}}>
      {children}
    </DetailContext.Provider>
  )
}

export const useDetailContext = () => useContext(DetailContext)

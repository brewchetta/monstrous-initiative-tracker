import {createContext, useContext, useState} from "react"

const DetailContext = createContext()

export const DetailProvider = ({children}) => {
  const [current, setDetail] = useState(null)

  const clear = () => setDetail(null)
  const inspectCharacter = character => setDetail({type: "character", content: character})
  const search = () => setDetail({type: "search"})
  const localCharacters = () => setDetail({type: "locals"})

  return (
    <DetailContext.Provider value={{current, clear, inspectCharacter, search, localCharacters}}>
      {children}
    </DetailContext.Provider>
  )
}

export const useDetailContext = () => useContext(DetailContext)

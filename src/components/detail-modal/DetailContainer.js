import { useContext } from "react"
import { DetailContext } from "../../context/detail-context"
import { CharactersContext } from "../../context/characters-context"
import CharacterDetailCard from "./CharacterDetailCard"

export default function DetailContainer(props) {

  // CONTEXT //
  const [detail, dispatchDetail] = useContext(DetailContext)
  const [characters, dispatchCharacters] = useContext(CharactersContext)

  // EVENT HANDLERS //

  const updateCharacter = character => {
    dispatchCharacters({type: "UPDATE_CHARACTER", payload: character})
    dispatchDetail({type: "CLEAR_DETAIL"})
  }

  const clearDetail = () => dispatchDetail({type: "CLEAR_DETAIL"})

  const renderDetail = () => {
    return (detail && detail.type === "character" ? <CharacterDetailCard character={detail.content} updateCharacter={updateCharacter} />
    : detail && detail.type === "spell" ? <p>TODO: Build spell detail</p>
    : null)
  }

  return (
    <div id="detail-modal">
      <div id="close-detail-modal" onClick={clearDetail}></div>
      {renderDetail()}
    </div>
  )

}

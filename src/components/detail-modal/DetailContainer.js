import { useContext } from "react"
import "./DetailContainer.css"
import { DetailContext } from "../../context/detail-context"
import { CharactersContext } from "../../context/characters-context"
import CharacterDetailCard from "./CharacterDetailCard"
import SearchForm from "./SearchForm"
import SelectLocalMonstersForm from "./SelectLocalMonstersForm"

export default function DetailContainer(props) {

  // CONTEXT //
  const [detail, dispatchDetail] = useContext(DetailContext)
  const dispatchCharacters = useContext(CharactersContext)[1]

  // EVENT HANDLERS //

  const updateCharacter = character => {
    dispatchCharacters({type: "UPDATE_CHARACTER", payload: character})
    dispatchDetail({type: "CLEAR_DETAIL"})
  }

  const clearDetail = () => dispatchDetail({type: "CLEAR_DETAIL"})

  const renderDetail = () => {
    return (detail && detail.type === "character" ? <CharacterDetailCard character={detail.content} updateCharacter={updateCharacter} />
    : detail && detail.type === "search" ? <SearchForm />
    : detail && detail.type === "spell" ? <p>TODO: Build spell detail</p>
    : detail && detail.type === "spell" ? <SelectLocalMonstersForm />
    : null)
  }

  return detail && detail.type ? (
    <div id="detail-modal">
      <div id="close-detail-modal" onClick={clearDetail}/>
      {renderDetail()}
    </div>
  ) : null

}

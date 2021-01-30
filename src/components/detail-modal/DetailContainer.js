// REACT //
import { useContext, useState, useEffect } from "react"
// STYLE //
import "./DetailContainer.css"
// CONEXT //
import { DetailContext } from "../../context/detail-context"
import { CharactersContext } from "../../context/characters-context"
// COMPONENTS //
import CharacterDetailCard from "./CharacterDetailCard"
import SearchForm from "./SearchForm"
import SelectLocalMonstersForm from "./SelectLocalMonstersForm"
// SERVICES //
import { getAllSpells, getAllMonsters } from "../../services/dnd-5e-api"

export default function DetailContainer(props) {

  // STATE //

  const [monsterNames, setMonsterNames] = useState([])
  const [spellNames, setSpellNames] = useState([])

  useEffect(() => {
    getAllMonsters().then(({results}) => setMonsterNames(results.map(m => m.name)))
    getAllSpells().then(({results}) => setSpellNames(results.map(s => s.name)))
  }, [])

  // CONTEXT //
  const [detail, dispatchDetail] = useContext(DetailContext)
  const dispatchCharacters = useContext(CharactersContext)[1]

  // EVENT HANDLERS //

  const updateCharacter = character => {
    dispatchCharacters({type: "UPDATE_CHARACTER", payload: character})
  }

  const clearDetail = () => dispatchDetail({type: "CLEAR_DETAIL"})

  const renderDetail = () => {
    return (detail && detail.type === "character" ? <CharacterDetailCard character={detail.content} updateCharacter={updateCharacter} />
    : detail && detail.type === "search" ? <SearchForm spellNames={spellNames} monsterNames={monsterNames} />
    : detail && detail.type === "spell" ? <p>TODO: Build spell detail</p>
    : detail && detail.type === "locals" ? <SelectLocalMonstersForm />
    : null)
  }

  return detail && detail.type ? (
    <>
      <div id="modal-mask" onClick={clearDetail} />
      <div id="detail-modal">
        <div id="close-detail-modal" onClick={clearDetail}/>
        {renderDetail()}
      </div>
    </>
  ) : null

}

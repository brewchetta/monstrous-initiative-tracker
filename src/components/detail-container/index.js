// REACT //
import { useState, useEffect } from "react"
// STYLE //
import "./DetailContainer.css"
// CONEXT //
import { useDetailContext } from "context/detail-context"
import { useCharactersContext } from "context/characters-context"
// COMPONENTS //
import CharacterDetailCard from "../character-detail"
import AddMonster from "../add-monster"
import SpellSearchForm from "./SpellSearchForm"
import SelectLocalMonstersForm from "../add-monster/SelectLocalMonstersForm"
// SERVICES //
import { getAllSpells } from "services/dnd-5e-api"

export default function DetailContainer(props) {

  // STATE //

  const [spellNames, setSpellNames] = useState([])

  // EFFECTS //

  useEffect(() => {
    getAllSpells().then(({results}) => setSpellNames(results.map(s => s.name)))
  }, [])

  // CONTEXT //
  const detail = useDetailContext()
  const updateCharacter = useCharactersContext().update

  // RENDERS //

  const renderDetail = () => {
    return (detail.current?.type === "character" ? <CharacterDetailCard character={detail.current.content} updateCharacter={updateCharacter} spellNames={spellNames} />
    : detail.current?.type === "search_monster" ? <AddMonster />
    : detail.current?.type === "search_spell" ? <SpellSearchForm spellNames={spellNames} />
    : detail.current?.type === "locals" ? <SelectLocalMonstersForm />
    : null)
  }

  return detail.current?.type ? (
    <>
      <div id="modal-mask" onClick={detail.clear} />
      <div id="detail-modal">
        {renderDetail()}
      </div>
    </>
  ) : null

}

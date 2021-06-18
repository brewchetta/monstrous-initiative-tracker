// REACT //
import { useState, useEffect } from "react"
// STYLE //
import "./DetailContainer.css"
// CONEXT //
import { useDetailContext } from "context/detail-context"
import { useCharactersContext } from "context/characters-context"
// COMPONENTS //
import CharacterDetailCard from "../character-detail"
import MonsterSearchForm from "./MonsterSearchForm"
import SelectLocalMonstersForm from "./SelectLocalMonstersForm"
// SERVICES //
import { getAllSpells, getAllMonsters } from "services/dnd-5e-api"
// ADDITIONAL DATA //
import * as additionalMonsters from 'models/additional-monsters'

export default function DetailContainer(props) {

  // STATE //

  const [monsterNames, setMonsterNames] = useState([])
  const [spellNames, setSpellNames] = useState([])

  useEffect(() => {
    const mNames = Object.values(additionalMonsters).map(m => m.name)
    getAllMonsters().then(({results}) => setMonsterNames([...results.map(m => m.name), ...mNames]))
    getAllSpells().then(({results}) => setSpellNames(results.map(s => s.name)))
  }, [])

  // CONTEXT //
  const detail = useDetailContext()
  const updateCharacter = useCharactersContext().update

  // RENDERS //

  const renderDetail = () => {
    return (detail.current?.type === "character" ? <CharacterDetailCard character={detail.current.content} updateCharacter={updateCharacter} spellNames={spellNames} />
    : detail.current?.type === "search_monster" ? <MonsterSearchForm spellNames={spellNames} monsterNames={monsterNames} additionalMonsters={additionalMonsters} />
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

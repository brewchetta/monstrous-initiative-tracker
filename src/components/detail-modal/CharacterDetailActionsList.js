import CharacterDetailAction from "./CharacterDetailAction"

export default function CharacterDetailActionsList({actions, handleSubmit}) {

  return actions.map((a, i) => (
    <div className="action-card" key={a.name + i.toString()}>
      <CharacterDetailAction handleSubmit={handleSubmit} action={a} index={i} />
    </div>
  ))

}

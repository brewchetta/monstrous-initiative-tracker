export default function CharacterDetailProficiencies({actions}) {

  const renderActions = () => {
    return actions.map((a, i) => (
      <div className="action-card" key={a.name + i.toString()}>
        <span>{a.name}: </span>
        <span>{a.desc}</span>
      </div>
    ))
  }

  return renderActions()

}

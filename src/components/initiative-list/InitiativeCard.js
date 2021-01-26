export default function InitiativeCard({character, index}) {

  return (
    <div className="initiative-card"
    style={{top: `${index * 50}px`}}
    onClick={console.log}>
      {character.name} \|/ {character.armor_class} AC \|/ {character.initiative} Initiative
    </div>
  )

}

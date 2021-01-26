export default function InitiativeCard({character}) {

  return (
    <p>{character.name} \|/ {character.armor_class} AC \|/ {character.initiative || character.rollInitative()}</p>
  )

}

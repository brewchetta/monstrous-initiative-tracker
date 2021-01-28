import { useState } from 'react'

export default function CharacterDetailProficiencies({proficiencies}) {

  const [profs, setProfs] = useState(proficiencies)

  return (
      <p>{JSON.stringify(proficiencies)}</p>
  )

}

import { useState } from 'react'

export default function CharacterDetailProficiencies({actions}) {

  const [acts, setActs] = useState(actions)

  return (
      <p>{JSON.stringify(acts)} Okay yay!</p>
  )

}

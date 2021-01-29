import { useState } from 'react'

export default function CharacterDetailProficiencies({actions}) {

  const [acts, setActs] = useState(actions)
  console.log(acts)

  return (
      <p>{JSON.stringify(acts)} Okay yay!</p>
  )

}

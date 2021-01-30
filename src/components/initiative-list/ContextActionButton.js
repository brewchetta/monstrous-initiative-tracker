import { useContext } from "react"

export default function LocalCharactersButton({context, text, type}) {

  const dispatch = useContext(context)[1]

  return (
    <button onClick={() => dispatch({type})}>
      {text}
    </button>
  )

}

import { useContext } from "react"

export default function ContextActionButton({context, text, type}) {

  const dispatch = useContext(context)[1]

  return (
    <button onClick={() => dispatch({type})}>
      {text}
    </button>
  )

}

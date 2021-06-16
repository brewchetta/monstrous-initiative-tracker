import { useContext } from "react"

export default function ContextActionButton({text, action}) {

  return (
    <button onClick={action}>
      {text}
    </button>
  )

}

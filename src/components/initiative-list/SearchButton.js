import { useContext } from "react"
import { DetailContext } from "../../context/detail-context"

export default function AddCharacterButton(props) {

  const [detail, dispatchDetail] = useContext(DetailContext)

  const handleClick = () => {
    dispatchDetail({type: "SEARCH"})
  }

  return (
    <button style={{position: "absolute", left: 0}}
    onClick={handleClick}>
      Create New Character
    </button>
  )

}

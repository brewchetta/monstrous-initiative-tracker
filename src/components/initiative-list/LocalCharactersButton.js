import { useContext } from "react"
import { DetailContext } from "../../context/detail-context"

export default function AddCharacterButton(props) {

  const dispatchDetail = useContext(DetailContext)[1]

  const handleClick = () => {
    dispatchDetail({type: "SEARCH"})
  }

  return (
    <button style={{position: "absolute", left: 0, top: "4em"}}
    onClick={handleClick}>
      Search
    </button>
  )

}

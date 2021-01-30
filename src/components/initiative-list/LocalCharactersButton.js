import { useContext } from "react"
import { DetailContext } from "../../context/detail-context"

export default function LocalCharactersButton(props) {

  const dispatchDetail = useContext(DetailContext)[1]

  const handleClick = () => {
    dispatchDetail({type: "SEARCH"})
  }

  return (
    <button onClick={handleClick}>
      Search
    </button>
  )

}

import { useContext } from "react"
import { DetailContext } from "../../context/detail-context"

export default function LocalCharactersButton() {

  const dispatchDetail = useContext(DetailContext)[1]

  const handleClick = () => {
    dispatchDetail({type: "LOCAL_CHARACTERS"})
  }

  return (
    <button onClick={handleClick}>
      Saved Characters
    </button>
  )

}

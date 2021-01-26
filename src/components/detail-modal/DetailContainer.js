import { useContext } from "react"
import { DetailContext } from "../../context/detail-context"

export default function DetailContainer(props) {

  const [detail, dispatch] = useContext(DetailContext)

  const clearDetail = () => {
    dispatch({type: "CLEAR_DETAIL"})
  }

  const renderDetail = () => {
    return (detail && detail.type === "character" ? <p>Detail is currently a character</p>
    : detail && detail.type === "spell" ? <p>Detail is currently a spell</p>
    : <p>No detail currently</p>)
  }

  return (
    <div id="detail-modal">
      <div id="close-detail-modal"></div>
      {renderDetail()}
    </div>
  )

}

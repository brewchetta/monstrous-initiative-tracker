import { useContext } from "react"
import { DetailContext } from "../../context/detail-context"
import CharacterDetailCard from "./CharacterDetailCard"

export default function DetailContainer(props) {

  const [detail, dispatch] = useContext(DetailContext)

  const clearDetail = () => {
    dispatch({type: "CLEAR_DETAIL"})
  }

  const renderDetail = () => {
    return (detail && detail.type === "character" ? <CharacterDetailCard character={detail.content} clearDetail={clearDetail} />
    : detail && detail.type === "spell" ? <p>TODO: Build spell detail</p>
    : null)
  }

  return (
    <div id="detail-modal">
      <div id="close-detail-modal" onClick={clearDetail}></div>
      {renderDetail()}
    </div>
  )

}

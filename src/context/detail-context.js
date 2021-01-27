import {createContext, useReducer} from "react"

const DetailContext = createContext()

const detailReducer = (state, action) => {

  switch (action.type) {
    case "CLEAR_DETAIL":
      return null
    case "INSPECT_CHARACTER":
      return {type: "character", content: action.payload}
    case "SEARCH":
      return {type: "search"}
    case "INSPECT_SPELL":
      return {type: "spell", content: action.payload}
    default:
      throw new Error(`Incorrect use of detail reducer: ${action.type}`)
  }
}

const DetailProvider = ({children}) => {
  const [detail, dispatch] = useReducer(detailReducer, null)

  return (
    <DetailContext.Provider value={[detail, dispatch]}>
      {children}
    </DetailContext.Provider>
  )
}

export { DetailProvider, DetailContext }

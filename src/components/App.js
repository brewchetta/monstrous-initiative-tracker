// STYLES //
import './App.css';
// COMPONENTS //
import InitiativeList from './initiative-list/InitiativeList'
import DetailContainer from './detail-modal/DetailContainer'
import HeaderMenu from "./navbar/HeaderMenu"
// CONTEXT //
import ContextProvider from "../context/main-context"
// IMGS //
import knotcorner from "../images/knot-flourish.png"

function App() {

  return (
    <div className="App">
      <ContextProvider>

        <img className="celtic-corner-knot" src={knotcorner} alt={"knot"} />

        <HeaderMenu />
        <DetailContainer />
        <InitiativeList />

      </ContextProvider>
    </div>
  );
}

export default App;

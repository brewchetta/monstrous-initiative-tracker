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

        <img className="celtic-corner-knot" src={knotcorner} alt={"knot"} style={{top: "0", right: "0"}} />
        <img className="celtic-corner-knot" src={knotcorner} alt={"knot"} style={{top: "0", left: "0", transform: "rotateY(180deg)"}} />
        <img className="celtic-corner-knot" src={knotcorner} alt={"knot"} style={{bottom: "0", right: "0", transform: "rotateX(180deg)"}} />
        <img className="celtic-corner-knot" src={knotcorner} alt={"knot"} style={{bottom: "0", left: "0", transform: "rotateX(180deg) rotateY(180deg)"}} />

        <HeaderMenu />
        <DetailContainer />
        <InitiativeList />

      </ContextProvider>
    </div>
  );
}

export default App;

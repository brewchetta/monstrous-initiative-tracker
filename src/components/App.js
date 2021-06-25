// STYLES //
import './App.css';
// COMPONENTS //
import InitiativeList from './initiative-list'
import DetailContainer from './detail-container'
import HeaderMenu from "./header-menu"
import Tooltip from "./tooltip"
import OptionsMenu from "./options"
// CONTEXT //
import ContextProvider from "context/main-context"
// IMGS //
import knotcorner from "assets/images/knot-flourish.png"
import dragonfight from "assets/images/dragon-fight-woodcut.png"

function App() {

  return (
    <div className="App">
      <ContextProvider>

        <img className="celtic-corner-knot" src={knotcorner} alt={"knot"} style={{top: "1.2em", right: "0"}} />
        <img className="celtic-corner-knot" src={knotcorner} alt={"knot"} style={{top: "1.2em", left: "0", transform: "rotateY(180deg)"}} />
        <img className="celtic-corner-knot" src={knotcorner} alt={"knot"} style={{bottom: "0", right: "0", transform: "rotateX(180deg)"}} />
        <img className="celtic-corner-knot" src={knotcorner} alt={"knot"} style={{bottom: "0", left: "0", transform: "rotateX(180deg) rotateY(180deg)"}} />

        <img id="dragon-fight" src={dragonfight} alt={"dragons fighting"} />

        <HeaderMenu />
        <DetailContainer />
        <InitiativeList />
        <Tooltip />
        <OptionsMenu />

      </ContextProvider>
    </div>
  );
}

export default App;

// STYLES //
import './App.css';
// COMPONENTS //
import InitiativeList from './initiative-list/InitiativeList'
import DetailContainer from './detail-modal/DetailContainer'
import HeaderMenu from "./navbar/HeaderMenu"
// CONTEXT //
import ContextProvider from "../context/main-context"

function App() {

  return (
    <div className="App">
      <ContextProvider>

        <HeaderMenu />
        <DetailContainer />
        <InitiativeList />

      </ContextProvider>
    </div>
  );
}

export default App;

// STYLES //
import '../styles/App.css';
import '../styles/InitiativeCard.css';
import '../styles/DetailModal.css';
// COMPONENTS //
import InitiativeList from './initiative-list/InitiativeList'
import DetailContainer from './detail-modal/DetailContainer'
// CONTEXT //
import ContextProvider from "../context/main-context"

function App() {

  return (
    <div className="App">
      <ContextProvider>

        <DetailContainer />
        <InitiativeList />

      </ContextProvider>
    </div>
  );
}

export default App;

// STYLES //
import '../styles/App.css';
import '../styles/InitiativeCard.css';
// COMPONENTS //
import InitiativeList from './initiative-list/InitiativeList'
import DetailContainer from './detail-modal/DetailContainer'
import SearchContainer from './monster-search/SearchContainer'
// CONTEXT //
import ContextProvider from "../context/main-context"

function App() {

  return (
    <div className="App">
      <ContextProvider>

        <InitiativeList />
        <DetailContainer />
        <SearchContainer />

      </ContextProvider>
    </div>
  );
}

export default App;

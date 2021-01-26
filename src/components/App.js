// STYLES //
import '../styles/App.css';
import '../styles/InitiativeCard.css';
// COMPONENTS //
import InitiativeList from './initiative-list/InitiativeList'
import DetailContainer from './detail-modal/DetailContainer'
import SearchContainer from './monster-search/SearchContainer'
// CONTEXT //
import { CharactersProvider } from "../context/characters-context"

function App() {

  return (
    <div className="App">
      <CharactersProvider>

        <InitiativeList />
        <DetailContainer />
        <SearchContainer />

      </CharactersProvider>
    </div>
  );
}

export default App;

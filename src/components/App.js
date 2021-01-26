import '../styles/App.css';
import InitiativeList from './initiative-list/InitiativeList'
import DetailContainer from './detail-modal/DetailContainer'
import SearchContainer from './monster-search/SearchContainer'

function App() {

  return (
    <div className="App">

      <InitiativeList />
      <DetailContainer />
      <SearchContainer />

    </div>
  );
}

export default App;

import '../styles/App.css';
import InitiativeList from './initiative-list/InitiativeList'
import CharacterViewContainer from './character-view/CharacterViewContainer'
import MonsterSearchContainer from './monster-search/MonsterSearchContainer'
import { getSpell } from '../services/dnd-5e-api.js'

function App() {

  getSpell("Acid Arrow").then(console.log)

  return (
    <div className="App">

      <InitiativeList />

    </div>
  );
}

export default App;

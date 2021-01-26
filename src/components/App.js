import { useState } from 'react'
import '../styles/App.css';
import InitiativeList from './initiative-list/InitiativeList'
import DetailContainer from './character-detail/DetailContainer'
import SearchContainer from './monster-search/SearchContainer'

function App() {

  return (
    <div className="App">

      <InitiativeList />

    </div>
  );
}

export default App;

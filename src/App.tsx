import React from 'react';
import './App.css';
import PokemonSearch from './components/PokemonSearch'

const App: React.FC = () => {
  return (
    <div className="App">
      <PokemonSearch name="Shubham dhage" noOfPokemons={23} />
    </div>
  );
}

export default App;

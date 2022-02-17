import './App.css';
import Pokedex from './components/Pokedex';
import data from './data';
function App() {
  return <Pokedex pokemons={data} />;
}

export default App;

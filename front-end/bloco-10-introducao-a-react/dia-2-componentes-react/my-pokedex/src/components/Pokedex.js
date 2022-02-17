import { Component } from 'react';
import Pokemon from './Pokemon';

export default class Pokedex extends Component {
  render() {
    const { pokemons } = this.props;
    return (
      <div className='card-container'>
        {pokemons.map((poke) => (
          <Pokemon key={poke.id} pokemon={poke} />
        ))}
      </div>
    );
  }
}

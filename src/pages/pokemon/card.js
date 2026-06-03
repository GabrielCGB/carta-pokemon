import React, { useState, useEffect } from 'react'
import './card.css';
import useFetchPokeApi from '../../hooks/useFetchPokeApi';
import {useParams} from 'react-router-dom';
import axios from 'axios';

function Pokecard(){
const { id } = useParams();
const {pokemons, loading, error} = useFetchPokeApi("pokemon", id);
const [pokemonInGame, setPokemonInGame] = useState({});

    if (loading) return <div className="loader">Carregando Pokédex...</div>;

    if (error) return <div className="error">Ocorreu um erro inesperado</div>;
    const especie = async () => await axios.get {pokemons.species}

    if (pokemons){
      setPokemonInGame(
        "nome":pokemons.name,
        "vida":pokemons.stats[0].base_stat,
        "ataque":pokemons.stats[1].stat.name,
        "tipo": pokemons.types[0].type.name
      )
    }

      return (  
  <div className="App">
  <h1>Poke Card</h1>
  <div className="pokemon-container">
    <div className={`pokemon-card ${pokemons.types[0].type.name}`}>
      <h3>{pokemons.name}</h3>
      <div className={`pokemonimagem ${pokemons.name}`}></div>

          <h3>
            HP: {PokemonInGame.hp} <br />
            Attack: {PokemonInGame.attack} <br />
            Defense: {PokemonInGame.defense} <br />
            Speed: {PokemonInGame.speed} <br />
            Tipo: {PokemonInGame.types.join(" / ")}
          </h3>
        </div>
      </div>
    </div>
  );
  
}
export default Pokecard;
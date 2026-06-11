import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './card.css';
import useFetchPokeApi from '../../hooks/useFetchPokeApi';
import {useParams} from 'react-router-dom';

function PokeDois(){
const { id } = useParams();
const {pokemons, loading, error} = useFetchPokeApi(id); 
const [pokemonInGame, setPokemonInGame] = useState({});
  useEffect(() => {
    if (pokemons) {
      setPokemonInGame({
        "nome": pokemons.name,
        "vida": pokemons.stats[0].base_stat,
        "ataque": pokemons.stats[1].base_stat,
        "tipo": pokemons.types[0].type.name 
      });
    }
  }, [pokemons]);
  const especie = async () => { await axios.get(pokemons.species.url)};

    if (loading) return <div className="loader">Carregando Pokédex...</div>;

    if (error) return <div className="error">Ocorreu um erro inesperado</div>;
      
      return (
  <div className="natureza">
  <div className="App">
  <h1>Poke Card</h1>
  <div className="pokemonContainer">
    <div className="card-pokemon">
      <h3>{pokemons.name}</h3>
      <div className="pokemonimagem"></div>

      <h3>
          {pokemons.stats[0].stat.name} {pokemons.stats[0].base_stat} <br />
          {pokemons.stats[1].stat.name} {pokemons.stats[1].base_stat} <br />
          {pokemons.types[0].type.name}
          </h3>
        </div>
      </div>
    </div>
  </div>
  );
  
}
export default PokeDois;
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './card2.css';
import turtwig from '../../assets/turtwig.png';

function PokeDois(){
const [pokemons, setPokemons] = useState({});
const [loading, setLoading] = useState(true);
const [error, setError] = useState(false);


useEffect(() => {
  const getData = async () => {
    try {
      const res = await
      axios.get('https://pokeapi.co/api/v2/pokemon/turtwig');
        setPokemons(res.data);
        console.log('Sucess:', res.data);
        setLoading(false);

    }
    catch (err) {
     console.error("Erro ao carregar API", err);
     setLoading(false)
     setError(true) 
    }
  };
  getData();
  }, {});

    if (loading) return <div className="loader">Carregando Pokédex...</div>;

    if (error) return <div className="error">Ocorreu um erro inesperado</div>;
      
      return (
  <div className="App">
  <h1>Poke Card</h1>
  <div className="pokemon-container">
    <div className="pokemon-card">
      <h3>{pokemons.name}</h3>
      <img src={turtwig} alt="turtwig"/>
        <h3>
        {pokemons.stats[0].stat.name} {pokemons.stats[0].base_stat} <br />
        {pokemons.stats[1].stat.name} {pokemons.stats[1].base_stat} <br />
        {pokemons.types[0].type.name}
        </h3>
      </div>
    </div>
  </div>
  );
  
}
export default PokeDois;
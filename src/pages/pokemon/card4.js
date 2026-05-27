import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './card.css';
import useFetchPokeApi from '../../hooks/useFetchPokeApi';
import {useParams} from 'react-router-dom';

function PokeTres(){
const { id } = useParams();
const {pokemons, loading, error} = useFetchPokeApi(id); 

    if (loading) return <div className="loader">Carregando Pokédex...</div>;

    if (error) return <div className="error">Ocorreu um erro inesperado</div>;
      
      return (
  <div className="App">
  <h1>Poke Card</h1>
  <div className="pokemon-container">
    <div className={`pokemon-card ${pokemons.types[0].type.name}`}>
      <h3>{pokemons.name}</h3>
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
export default PokeTres;
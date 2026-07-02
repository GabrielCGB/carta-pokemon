import React, { useState, useEffect } from 'react'
import './card.css';
import useFetchPokeApi from '../../hooks/useFetchPokeApi';
import {useParams} from 'react-router-dom';
import axios from 'axios';

function Pokecard(){
const { id } = useParams();
const {myPokemon, loading, error} = useFetchPokeApi(id);

    if (loading) return <div className="loader">Carregando Pokédex...</div>;

    if (error) return <div className="error">Ocorreu um erro inesperado</div>;
    

      return (  
  <div className="App">
  <h1>Poke Card</h1>
  <div className="pokemon-container">
    <div className={`pokemon-card ${myPokemon.tipo}`}>
      <h3>{myPokemon.nome}</h3>
      <div className={`pokemonimagem ${myPokemon.imagem}`}/>
          <h3>
            {"Vida: " + myPokemon.vida} <br/>
            {"Ataque: " + myPokemon.ataque} <br/>
            {"Defesa: " + myPokemon.defesa} <br/>
            {"Velocidade: " + myPokemon.velocidade} <br/>
          </h3>
        </div>
      </div>
    </div>
  );
}


export default Pokecard;
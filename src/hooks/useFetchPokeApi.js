import React, { useState, useEffect } from 'react';
import axios from 'axios';


function useFetchPokeApi(pokemon){
    const [pokemons, setPokemons] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [specie, setSpecie] = useState({});
    const [evolution, setEvolution] = useState({});
    const [myPokemon, setMyPokemon] = useState({});
    const [type, setType] = useState({});
    
    
    useEffect(() => {
      const getData = async () => {
        try {
          const res = await axios.get (`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
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
    }, [pokemon]);

    useEffect(() => {
      const getSpecies = async () => {
        try {
          const res = await axios.get (pokemons.species.url, {});
            setSpecie(res.data);
            console.log('Sucess:', res.data);
            setLoading(false);
    
        }
        catch (err) {
         console.error("Erro ao carregar API", err);
        }
      };
      getSpecies();
    }, [pokemons]);

    useEffect(() => {
      const getEvolutions = async () => {
        try {
          const res = await axios.get (specie.evolution_chain.url, {});
            setEvolution(res.data);
            console.log('Sucess:', res.data);
            setLoading(false);
    
        }
        catch (err) {
         console.error("Erro ao carregar API", err);
        }
      };
      getEvolutions();
    }, [specie]);

    useEffect(() => {
      const getTypes = async () => {
        try {
        if(pokemons.types[0].type.name == "grass" || pokemons.types[0].type.name == "poison" || pokemons.types[0].type.name == "bug" ){
          pokemons.types[0].type.name = "Natureza"
          }  
        if(pokemons.types[0].type.name == 'rock' || pokemons.types[0].type.name == 'ground' || pokemons.types[0].type.name == "steel" ){
          pokemons.types[0].type.name = "Terra"
          }
        if(pokemons.types[0].type.name == "water" || pokemons.types[0].type.name == "ice" ){
          pokemons.types[0].type.name = "Água"
          }
        if(pokemons.types[0].type.name == "fire" ){
          pokemons.types[0].type.name = "Fogo"
          }
        if(pokemons.types[0].type.name == "dragon" || pokemons.types[0].type.name == "eletric" || pokemons.types[0].type.name == "flying" ){
          pokemons.types[0].type.name = "Tempestade"
          }
        if(pokemons.types[0].type.name == "normal" || pokemons.types[0].type.name == "fighting" ){
          pokemons.types[0].type.name = "Corpo"
          }
          if(pokemons.types[0].type.name == "psychic" || pokemons.types[0].type.name == "fairy" ){
            pokemons.types[0].type.name = "Mente"
            }
        if(pokemons.types[0].type.name == "shadow" || pokemons.types[0].type.name == "dark" ){
          pokemons.types[0].type.name = "Sombra"
          }
        
        }
        catch (err) {
         console.error("Erro ao carregar API", err);
        }
      };
      getTypes();
    }, [specie]);

    useEffect(() => {
      const setPoke = async () => {
        try {
      setMyPokemon({
        nome: pokemons.name,
        vida: pokemons.stats[0].base_stat,
        ataque: pokemons.stats[1].base_stat,
        tipo: pokemons.types[0].type.name,
        evolucao: [evolution.chain.species.name],
        imagem: pokemons.sprites.front_default,
      });
      } catch (err) {
        console.error(err);
      }
    };
      setPoke()
    }, [evolution, pokemons]);

      return{myPokemon, loading, error}};

      export default useFetchPokeApi;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getPokemonDB, savePokemonDB } from "../utils/pokemonDB.js";


function useFetchPokeApi(pokemon){
    const [pokemons, setPokemons] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [specie, setSpecie] = useState({});
    const [evolution, setEvolution] = useState({});
    const [myPokemon, setMyPokemon] = useState({});
    const [tipo, setTipo] = useState({});
    
    
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

      const checkCache = async () => {
        const cached = await getPokemonDB(pokemon)
        if(!cached){
          setMyPokemon(cached);
          setLoading(false);
        } else {
          await getData()
        }
      };
      checkCache();
    }, [pokemon]);

    useEffect(() => {
      const getSpecie = async () => {
        try {
          const res = await axios.get (pokemons.species.url, {});
            setSpecie(res.data);
            console.log('Sucess:', res.data);
    
        }
        catch (err) {
         console.error("Erro ao carregar API", err);
        }
      };
      getSpecie();
    }, [pokemons]);

    useEffect(() => {
      const getEvolutions = async () => {
        try {
          const res = await axios.get (specie.evolution_chain.url, {});
            setEvolution(res.data);
            console.log('Sucess:', res.data);
    
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
          setTipo('Natureza')
          }  
        if(pokemons.types[0].type.name == 'rock' || pokemons.types[0].type.name == 'ground' || pokemons.types[0].type.name == "steel" ){
          setTipo('Terra')
          }
        if(pokemons.types[0].type.name == "water" || pokemons.types[0].type.name == "ice" ){
          setTipo('Agua')
          }
        if(pokemons.types[0].type.name == "fire" ){
          setTipo('Fogo')
          }
        if(pokemons.types[0].type.name == "dragon" || pokemons.types[0].type.name == "eletric" || pokemons.types[0].type.name == "flying" ){
          setTipo('Tempestade')
          }
        if(pokemons.types[0].type.name == "normal" || pokemons.types[0].type.name == "fighting" ){
          setTipo('Corpo')
          }
          if(pokemons.types[0].type.name == "psychic" || pokemons.types[0].type.name == "fairy" ){
          setTipo('Mente')
            }
        if(pokemons.types[0].type.name == "shadow" || pokemons.types[0].type.name == "dark" ){
          setTipo('Sombra')
          }
        
        }
        catch (err) {
         console.error("Erro ao carregar API", err);
        }
      };
      getTypes();
    }, [pokemons]);

    useEffect(() => {
      const setPoke = async () => {
        try {
      setMyPokemon({
        tipo: tipo,
        nome: pokemons.name,
        vida: pokemons.stats[0].base_stat * 10,
        ataque: pokemons.stats[1].base_stat,
        imagem: pokemons.sprites.front_default,
        evolucao: [evolution.chain.species.name, evolution.chain.species.name, evolution.chain.species.name],
        });
      }
      catch (err) {
        console.error(err);
      }
    };
      setPoke()
    }, [evolution, pokemons, tipo]);

      return{myPokemon, loading, error}};

      export default useFetchPokeApi;
